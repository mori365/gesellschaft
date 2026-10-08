# -*- coding: utf-8 -*-
"""
[tools 사용법] build_enemy_chapter.py가 parse_page()를 불러 쓴다. 아래 main()/PAGES는 0~9.5장 최초 수집 때의 기록용.
2026-10: 나무위키 클래스 이름이 바뀌어도 동작하도록 정규식의 class 값을 와일드카드로 바꿨고, 패시브 마크업(v2)과
하위 제목이 있는 보스 페이즈(자기 구간에 스테이터스가 있으면 적 항목) 처리를 추가했다.

Parser for Limbus Company namu.wiki '전투/N장' pages.

Key finding about namu.wiki's rendering (TheSeed engine, Vue SSR):
Many widgets (resistance tier picker, alt-name toggle, attack-type/sin-attribute
icon picker) render ALL options into the HTML and use inline `style` with the
`display` property declared TWICE, e.g. style="display:none;display:inline-block".
CSS same-property-last-wins, so the one whose *last* `display:` declaration is
NOT `none` is the actually-visible/selected option; all others (single
`display:none`, or `display:none` declared last) are the hidden alternatives.
This is the mechanism used throughout to determine: resistance tier per damage
type/sin, and the enemy's real name vs. a hidden alt-name field.

Per-coin skill effects are rendered as pure icon graphics (generic alt text
like "코인값"/"1"/"2") with NO extractable text anywhere in server HTML - this
is a hard limitation of the source, not a parsing gap; documented in the report.
"""
import re, os, json, sys, html as html_mod


def deep_unescape(obj):
    """Recursively HTML-unescape all strings in a JSON-able structure (namu
    wiki titles like '소지 제자 &amp; 약지 제자' need this)."""
    if isinstance(obj, str):
        return html_mod.unescape(obj)
    if isinstance(obj, list):
        return [deep_unescape(x) for x in obj]
    if isinstance(obj, dict):
        return {deep_unescape(k): deep_unescape(v) for k, v in obj.items()}
    return obj

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import paths
BASE = paths.WORK
HTML_DIR = paths.NAMU

PAGES = [
    ("00_0장.html", "0장"),
    ("01_1장.html", "1장"),
    ("02_2장.html", "2장"),
    ("03_3장.html", "3장"),
    ("04_3_5장.html", "3.5장"),
    ("05_4장.html", "4장"),
    ("06_4장_집중_전투.html", "4장 집중 전투"),
    ("07_4_5장.html", "4.5장"),
    ("08_5장.html", "5장"),
    ("09_5장_집중_전투.html", "5장 집중 전투"),
    ("10_5_5장.html", "5.5장"),
    ("11_6장.html", "6장"),
    ("12_6장_집중_전투.html", "6장 집중 전투"),
    ("13_6_5장.html", "6.5장"),
    ("14_7장.html", "7장"),
    ("15_7장_집중_전투.html", "7장 집중 전투"),
    ("16_7_5장.html", "7.5장"),
    ("17_8장.html", "8장"),
    ("18_8장_집중_전투.html", "8장 집중 전투"),
    ("19_8_5장.html", "8.5장"),
    ("20_9장.html", "9장"),
    ("21_9_5장.html", "9.5장"),
]

# namu.wiki html files were fetched with a plain filename list; actual files on
# disk may have mangled non-ascii names depending on shell codepage, so resolve
# by index prefix instead of trusting the literal Korean substring.
def resolve_actual_filenames():
    actual = sorted(os.listdir(HTML_DIR))
    mapping = {}
    for fname in actual:
        idx = fname[:2]
        mapping[idx] = fname
    return mapping

HEADING_RE = re.compile(
    r"<h([2-6]) class=\"[^\"]*\"[^>]*><a id='s-([\d.]+)' href='#toc'[^>]*>[\d.]+</a> <span id='[^']*'[^>]*>(?:<a class='[^']*'[^>]*>)?([^<]+)(?:</a>)?<span class='[^']*'"
)

TIER_WORDS = ["취약", "약점", "보통", "견딤", "내성"]
PHYS_TYPES = ["참격", "관통", "타격"]
SIN_TYPES = ["분노", "색욕", "나태", "탐식", "우울", "오만", "질투"]

TYPE_LABEL_RE = re.compile(
    r"<div style='font-size:0.8em;color:#[0-9A-Fa-f]{6}' data-v-[0-9a-f]+>(?:<span[^>]*>)?(참격|관통|타격|분노|색욕|나태|탐식|우울|오만|질투)(?:</span>)?</div>"
)

TIER_OPTION_RE = re.compile(
    r"<div style='([^']*)' data-v-[0-9a-f]+>(취약|약점|보통|견딤|내성|\?)(?=<|$)"
)

SKILL_NAME_RE = re.compile(
    r'<strong data-v-[0-9a-f]+><span style="text-shadow:1\.2px 1\.2px 1px #000">([^<]*)</span></strong>'
)

STAT_ALT = {
    "hp": "림버스 컴퍼니 체력",
    "speed": "림버스 컴퍼니 속도",
    "defense": "림버스 컴퍼니 방어력",
}

PLACEHOLDER_SKILL_NAMES = {"00", "-", "", "스킬 이름"}


def last_display_visible(style):
    """Return True if the element is visible given its inline style string
    (last `display:` declaration wins per CSS cascade within one attribute)."""
    if not style:
        return True
    disp = None
    for part in style.split(";"):
        part = part.strip()
        if part.startswith("display:"):
            disp = part[len("display:"):].strip()
    if disp is None:
        return True
    return disp != "none"


def find_visible_tier(block, start_idx, end_idx, label_end_idx):
    """Scan up to 6 tier-option divs following a type label and return the
    visible one's word, or '?' if the '?' option is the one visible, or None
    if truly nothing found (parse miss)."""
    window = block[label_end_idx:label_end_idx + 3500]
    found = []
    for m in TIER_OPTION_RE.finditer(window):
        found.append(m)
        if len(found) >= 8:
            break
    visible_word = None
    for m in found[:6]:
        style, word = m.group(1), m.group(2)
        if last_display_visible(style):
            visible_word = word
            break
    return visible_word


def extract_resistances(block):
    res = {}
    for m in TYPE_LABEL_RE.finditer(block):
        label_end = m.end()
        rtype = m.group(1)
        # avoid re-processing same label text appearing twice by keying on first hit position range;
        # duplicates (rare) will just overwrite with same/late value which is fine.
        val = find_visible_tier(block, m.start(), m.end(), label_end)
        res[rtype] = val if val is not None else "?"
    return res


STAT_VALUE_RE = re.compile(
    r"</noscript></span></span>(?:<br[^>]*>)?(?:<div[^>]*>)?\s*([^<]+?)\s*</div>"
)


def extract_stat(block, alt_text):
    idx = block.find(f"alt='{alt_text}'")
    if idx == -1:
        return None
    icon_end = block.find("</noscript></span></span>", idx)
    if icon_end == -1:
        return None
    window = block[icon_end:icon_end + 400]
    m = STAT_VALUE_RE.match(window)
    if m:
        val = m.group(1).strip()
        return val if val else None
    return None


def extract_stagger(block):
    idx = block.find("흐트러짐 구간")
    if idx == -1:
        return None
    window = block[idx:idx + 2500]
    percents = re.findall(r"<div style='([^']*)' data-v-[0-9a-f]+>(\d+)%</div>", window)
    for style, val in percents:
        if last_display_visible(style):
            return val + "%"
    return None


def extract_alt_name_check(block, heading_name):
    """Returns the visible display-name inside the stat-card title area, to
    cross check against the heading text (they should always match)."""
    idx = block.find("<strong data-v-")
    # Not strictly needed; heading text is authoritative. Kept as no-op.
    return heading_name


INFO_CARD_ROW_RE = re.compile(
    r"<div style='width:20%;[^']*' data-v-[0-9a-f]+>([^<]+)</div><div style='width:80%;[^']*' data-v-[0-9a-f]+>([^<]+)</div>"
)


def extract_info_card(block):
    """Named/unique bosses (seen on '집중 전투' pages) use a 2-column
    label/value card (부위 / 특성 키워드 / E.G.O / E.G.O GIFT rows) instead of
    the simple keyword-pill layout used by generic mobs. Returns a dict of
    whatever rows are present."""
    idx = block.find("특성 키워드")
    if idx == -1:
        return {}
    window = block[max(0, idx - 800):idx + 800]
    rows = {}
    for label, value in INFO_CARD_ROW_RE.findall(window):
        label, value = label.strip(), value.strip()
        if value and value != "-":
            rows[label] = value
    return rows


def extract_keywords(block):
    idx = block.find("특성 키워드")
    if idx == -1:
        return []
    end_idx = block.find("패시브", idx)
    if end_idx == -1:
        end_idx = idx + 2000
    window = block[idx:end_idx]
    kws = re.findall(
        r"<div style='padding:0px 2px;display:inline-block;text-align:center;vertical-align:top' data-v-[0-9a-f]+>([^<]+)</div>",
        window,
    )
    kws = [k.strip() for k in kws if k.strip()]
    if kws:
        return kws
    # fall back to the info-card layout (named/unique bosses)
    info = extract_info_card(block)
    kw_val = info.get("특성 키워드")
    if kw_val:
        return [kw_val]
    return []


PASSIVE_PAIR_RE = re.compile(
    r"<div style='background-image:linear-gradient\(60deg, #4A311A 65%, transparent 65%\)' data-v-[0-9a-f]+><div[^>]*><strong data-v-[0-9a-f]+>([^<]*)</strong></div></div>\s*<div style='margin-bottom:4px;color:#ffcc99;text-align:left;font-size:0\.8em' data-v-[0-9a-f]+>([^<]*)</div>"
)


PASSIVE_V2_RE = re.compile(
    r"<strong data-v-[0-9a-f]+>([^<]+)</strong></div></div>\s*<div style='margin-bottom:4px;color:#ffcc99[^']*' data-v-[0-9a-f]+>(.*?)</div></div>",
    re.S,
)


def extract_passives(block):
    """2026-10 나무위키 마크업: 패시브 이름 <strong> 다음 설명 div(안에 <br>/<span>/<i> 섞임)."""
    idx = block.find("패시브 정보")
    if idx == -1:
        return []
    end = block.find("</details>", idx)
    window = block[idx:end if end != -1 else idx + 40000]
    passives = []
    for m in PASSIVE_V2_RE.finditer(window):
        name = html_mod.unescape(m.group(1)).strip()
        desc = re.sub(r"<br\s*/?>", " ", m.group(2))
        desc = html_mod.unescape(re.sub(r"<[^>]+>", "", desc))
        desc = re.sub(r"\s+", " ", desc).strip()
        if name in ("-", "") and desc in ("-", ""):
            continue
        if re.match(r"^스킬\d+$", name) and re.match(r"^패시브설명\d+\]?$", desc):
            continue  # 템플릿 자리표시자
        passives.append({"name": name, "effect": desc})
    return passives


SKILL_FIELD_TABLE_RE = re.compile(
    r"<strong data-v-[0-9a-f]+>공격 유형</strong></div></td><td[^>]*><div class='[^']*' data-v-[0-9a-f]+>(?:<div style='[^']*' data-v-[0-9a-f]+>.*?</div>)?([^<]*)</div></td></tr>"
    r"<tr class='[^']*' data-v-[0-9a-f]+><td[^>]*><div class='[^']*' data-v-[0-9a-f]+><strong data-v-[0-9a-f]+>죄악 속성</strong></div></td><td[^>]*><div class='[^']*' data-v-[0-9a-f]+>(?:<div style='[^']*' data-v-[0-9a-f]+>.*?</div>)?([^<]*)</div></td></tr>"
    r"<tr class='[^']*' data-v-[0-9a-f]+><td[^>]*><div class='[^']*' data-v-[0-9a-f]+><strong data-v-[0-9a-f]+>스킬 위력</strong></div></td><td[^>]*><div class='[^']*' data-v-[0-9a-f]+>([^<]*)</div></td></tr>"
    r"<tr class='[^']*' data-v-[0-9a-f]+><td[^>]*><div class='[^']*' data-v-[0-9a-f]+><strong data-v-[0-9a-f]+>코인 위력</strong></div></td><td[^>]*><div class='[^']*' data-v-[0-9a-f]+>([^<]*)</div></td></tr>"
    r"<tr class='[^']*' data-v-[0-9a-f]+><td[^>]*><div class='[^']*' data-v-[0-9a-f]+><strong data-v-[0-9a-f]+>공격 가중치</strong></div></td><td[^>]*><div class='[^']*' data-v-[0-9a-f]+>([^<]*)</div></td></tr>",
    re.S,
)


def extract_skills(block):
    """Find each skill name occurrence, then look forward a bounded window for
    its stat table (attack type / sin attribute / power / coin power / weight)."""
    skills = []
    name_matches = list(SKILL_NAME_RE.finditer(block))
    for i, nm in enumerate(name_matches):
        name = nm.group(1).strip()
        if name in PLACEHOLDER_SKILL_NAMES:
            continue
        window_end = name_matches[i + 1].start() if i + 1 < len(name_matches) else min(len(block), nm.end() + 12000)
        window = block[nm.end():window_end]
        fm = SKILL_FIELD_TABLE_RE.search(window)
        skill = {"name": name}
        if fm:
            atk_type, sin_attr, power, coin_power, weight = [g.strip() for g in fm.groups()]
            if atk_type:
                skill["attackType"] = atk_type
            if sin_attr:
                skill["sinAttribute"] = sin_attr
            if power and power not in ("0/0/0", "0"):
                skill["power"] = power
            if coin_power and coin_power not in ("00", "0"):
                skill["coinPower"] = coin_power
            if weight:
                skill["attackWeight"] = weight
        skill["coinEffects"] = None  # icon-only in source; not text-extractable (see report)
        skills.append(skill)
    return skills


PANIC_NAME_RE = re.compile(r"<strong data-v-[0-9a-f]+>([^<]*)</strong></span></div><div style='padding:0px 10px;text-align:left' data-v-[0-9a-f]+>")


TAG_RE = re.compile(r"<[^>]+>")


def strip_tags(s):
    return TAG_RE.sub("", s).strip()


def extract_panic(block):
    idx = block.find("패닉 유형")
    if idx == -1:
        return None
    window = block[idx:idx + 3000]
    m = re.search(r"<strong data-v-[0-9a-f]+>([^<]*)</strong></span></div>", window)
    panic_name = m.group(1).strip() if m else None
    effects = re.findall(
        r"<strong data-v-[0-9a-f]+>(· [^<]*)</strong><br data-v-[0-9a-f]+>(.*?)</div>",
        window,
        re.S,
    )
    result = {}
    if panic_name:
        result["type"] = panic_name
    for label, text in effects:
        result[label.strip()] = strip_tags(text)
    return result if result else None


def is_leaf(headings, idx):
    """A heading is a true leaf (an actual enemy entry, not a group/subgroup
    container) iff no heading immediately after it is nested deeper (higher
    h-level number). TOC depth on namu.wiki is not fixed at 2 levels — some
    pages (e.g. 9.5장) go 4-5 levels deep (h2 group -> h3 subgroup -> h4
    sub-subgroup -> h5 leaf, even h6 'phase' leaves under an h5 boss), so
    this walks however deep the actual page goes rather than assuming h3 is
    always the bottom."""
    if idx + 1 >= len(headings):
        return True
    return headings[idx + 1][0] <= headings[idx][0]


def build_num_title_map(headings):
    return {h[1]: h[2] for h in headings}


def enemy_group_for(headings, idx, num_title_map):
    """Return the IMMEDIATE parent heading's title, found via the TOC
    numbering (e.g. parent of '2.1.1.1' is '2.1.1'), which works regardless
    of how many levels deep the tree goes. Falls back to nearest preceding
    heading with a strictly smaller level if the dotted-prefix lookup ever
    misses (defensive; shouldn't normally trigger)."""
    num = headings[idx][1]
    if "." in num:
        parent_num = num.rsplit(".", 1)[0]
        if parent_num in num_title_map:
            return num_title_map[parent_num]
    level = headings[idx][0]
    for j in range(idx - 1, -1, -1):
        if headings[j][0] < level:
            return headings[j][2]
    return None


def parse_page(html, chapter_label, report_lines):
    headings = []
    for m in HEADING_RE.finditer(html):
        level = int(m.group(1))
        num = m.group(2)
        title = m.group(3).strip()
        headings.append([level, num, title, m.start(), m.end()])

    if not headings:
        report_lines.append(f"[{chapter_label}] NO HEADINGS FOUND — page structure differs entirely, needs manual review.")
        return []

    # attach end boundary = start of next heading (any level) or EOF
    for i in range(len(headings)):
        nxt = headings[i + 1][3] if i + 1 < len(headings) else len(html)
        headings[i].append(nxt)  # index 5 = block_end

    enemies = []
    # Generic non-enemy prose/navigation headers seen across pages (not
    # combat entries): "개요"/"특징" are lore/summary sections, "집중 전투" is
    # a nav stub linking out to the dedicated focused-battle page.
    skip_group_titles = {"개요", "특징", "집중 전투", "목록"}
    has_stat_block_count = 0
    no_stat_block_names = []
    enemy_node_count = 0
    num_title_map = build_num_title_map(headings)

    for i, (level, num, title, s, e, block_end) in enumerate(headings):
        # 하위 제목이 있어도(예: 보스 1페이즈 아래 하위 개체) 자기 구간에 스테이터스가 있으면 적 항목
        is_enemy_node = is_leaf(headings, i) or ("스테이터스" in html[e:block_end])
        if not is_enemy_node:
            continue
        if title in skip_group_titles:
            continue
        enemy_node_count += 1
        block = html[e:block_end]
        if "스테이터스" not in block and "패닉 유형" not in block:
            # Doesn't look like a real stat-block enemy entry (could be lore
            # text, a non-combat section, etc.) — record but flag.
            no_stat_block_names.append(title)
            # Still emit a minimal record in case it's a valid enemy with a
            # genuinely different layout (rather than silently dropping it).
        else:
            has_stat_block_count += 1

        group = enemy_group_for(headings, i, num_title_map)
        record = {
            "name": title,
            "chapter": chapter_label,
            "group": group,
            "_num": num,
        }
        hp = extract_stat(block, STAT_ALT["hp"])
        speed = extract_stat(block, STAT_ALT["speed"])
        defense = extract_stat(block, STAT_ALT["defense"])
        if hp is not None:
            record["hp"] = hp
        if speed is not None:
            record["speed"] = speed
        if defense is not None:
            record["defense"] = defense

        stagger = extract_stagger(block)
        if stagger is not None:
            record["staggerThreshold"] = stagger

        resistances = extract_resistances(block)
        if resistances:
            record["resistances"] = resistances

        keywords = extract_keywords(block)
        if keywords:
            record["keywords"] = keywords

        info_card = extract_info_card(block)
        if info_card.get("부위"):
            record["bodyParts"] = info_card["부위"]
        if info_card.get("E.G.O"):
            record["ego"] = info_card["E.G.O"]
        if info_card.get("E.G.O GIFT"):
            record["egoGift"] = info_card["E.G.O GIFT"]

        passives = extract_passives(block)
        if passives:
            record["passives"] = passives

        skills = extract_skills(block)
        if skills:
            record["skills"] = skills

        panic = extract_panic(block)
        if panic:
            record["panicType"] = panic

        enemies.append(deep_unescape(record))

    report_lines.append(
        f"[{chapter_label}] headings={len(headings)} enemy_nodes={enemy_node_count} "
        f"with_stat_block={has_stat_block_count} without_stat_block={len(no_stat_block_names)}"
    )
    if no_stat_block_names:
        report_lines.append(f"    [{chapter_label}] entries without recognizable stat block (kept, flagged): {no_stat_block_names}")

    return enemies


def main():
    fname_map = resolve_actual_filenames()
    all_enemies = []
    report_lines = []
    report_lines.append("=== Limbus Company Enemy Extraction Report ===")
    report_lines.append("")

    for prefix_name, chapter_label in PAGES:
        idx_prefix = prefix_name[:2]
        actual_fname = fname_map.get(idx_prefix)
        if not actual_fname:
            report_lines.append(f"[{chapter_label}] FILE NOT FOUND for prefix {idx_prefix} — SKIPPED")
            continue
        path = os.path.join(HTML_DIR, actual_fname)
        with open(path, encoding="utf-8", errors="replace") as f:
            html = f.read()
        try:
            enemies = parse_page(html, chapter_label, report_lines)
        except Exception as ex:
            report_lines.append(f"[{chapter_label}] EXCEPTION during parse: {type(ex).__name__}: {ex}")
            enemies = []
        all_enemies.extend(enemies)
        print(f"{chapter_label}: {len(enemies)} enemies", flush=True)

    out_json = os.path.join(BASE, "enemy_data.json")
    with open(out_json, "w", encoding="utf-8") as f:
        json.dump(all_enemies, f, ensure_ascii=False, indent=2)

    report_lines.append("")
    report_lines.append(f"TOTAL ENEMY RECORDS: {len(all_enemies)}")
    report_lines.append("")
    report_lines.append("Per-chapter counts:")
    from collections import Counter
    c = Counter(e["chapter"] for e in all_enemies)
    for label in [p[1] for p in PAGES]:
        report_lines.append(f"  {label}: {c.get(label, 0)}")

    out_report = os.path.join(BASE, "enemy_extraction_report.txt")
    with open(out_report, "w", encoding="utf-8") as f:
        f.write("\n".join(report_lines))

    print("DONE", len(all_enemies))


if __name__ == "__main__":
    main()
