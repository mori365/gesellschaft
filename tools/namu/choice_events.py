"""나무위키 선택지 문서에서 거울 던전 선택지(이벤트)를 읽어 choice_event_data.js 를 만든다.

    python tools/namu/choice_events.py [--force] [--no-images]   # --no-images: 이미지를 받지 않고 결과만 확인

- 'Limbus Company/선택지' 문서의 거울 던전 문단(거울 던전 1~N, 공통 선택지)과 전투 도중 선택지 문단,
  'Limbus Company/선택지/테마팩' 문서(테마팩 전용 선택지)를 읽는다. 삭제된 선택지 문단은 넣지 않는다.
- 선택지 표는 칸 구조(colspan/rowspan)를 그대로 옮긴다: 지문(t) / 선택지(o: 문구+힌트) / 결과(r: '▼ 성공' 같은 제목+내용) / 이미지.
- 결과 안 링크 글자가 사이트 기프트 이름과 같으면 그 선택지에서 얻는 기프트로 기록한다(gifts).
- 이미지는 images/choice_events/ 에 webp로 저장(너비 480, 요청 사이 2초).
- 공통 선택지가 어느 테마팩에서 나오는지(themes)는 게임 데이터의 테마 eventPool에서 채운다(먼저 fetch_static.py --md).
  게임 이벤트와 나무위키 선택지는 지문 앞부분으로 맞춘다(tools/gamedata/kr_event_desc_20261002.json)."""
import io, json, os, re, sys, time, urllib.request, html as H
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import paths
from fetch import fetch, last_modified
sys.path.insert(0, os.path.join(paths.TOOLS, 'gamedata'))
import jsobj, md_enemies

MAIN, THEME = 'Limbus Company/선택지', 'Limbus Company/선택지/테마팩'
IMG_DIR = os.path.join(paths.REPO, 'images', 'choice_events')
CACHE = os.path.join(paths.WORK, 'choice_image_cache.json')

def norm(s): return re.sub(r'\s+', '', s or '')
EVENT_DESC = os.path.join(paths.TOOLS, 'gamedata', 'kr_event_desc_20261002.json')
def desc_key(s): return re.sub(r'[\s.,!?…·\-~"\'“”‘’]+', '', s or '')[:30]

def first_desc(ev):
    for t in ev['tables']:
        for r in t['rows']:
            for c in r:
                if c['k'] == 't' and len(c['text']) > 15: return c['text']
    return ''

def clean_text(c):
    """칸 내용 → 줄바꿈을 살린 글자. 각주 표식·편집 링크는 뺀다."""
    c = re.sub(r'<a [^>]*>\s*(?:<span[^>]*></span>)?\s*\[\d+\]\s*</a>', '', c)   # 각주 [11]
    c = re.sub(r'<(script|style|noscript)[^>]*>.*?</\1>', '', c, flags=re.S)
    c = re.sub(r'<img[^>]*>', '', c)
    c = re.sub(r'<hr[^>]*>', '\n', c)
    c = re.sub(r'<br[^>]*>', '\n', c)
    c = re.sub(r'</(div|p|li|tr)>', '\n', c)
    c = H.unescape(re.sub(r'<[^>]+>', '', c))
    c = re.sub(r'\[\d+\]', '', c)
    c = re.sub(r'[ \t ]+', ' ', c)
    lines = [l.strip() for l in c.split('\n')]
    out = []
    for l in lines:
        if l or (out and out[-1]): out.append(l)
    return '\n'.join(out).strip()

def link_texts(c):
    return [clean_text(x) for x in re.findall(r'<a [^>]*>(.*?)</a>', c, re.S)]

def image_url(c):
    for m in re.finditer(r'<img[^>]*>', c):
        s = re.search(r"data-src=['\"]([^'\"]+)", m.group(0))
        if s:
            u = s.group(1)
            return 'https:' + u if u.startswith('//') else u
    return None

def parse_cell(attrs, c, gift_names):
    cs = re.search(r"colspan=['\"]?(\d+)", attrs); rs = re.search(r"rowspan=['\"]?(\d+)", attrs)
    cell = {}
    if cs and cs.group(1) != '1': cell['cs'] = int(cs.group(1))
    if rs and rs.group(1) != '1': cell['rs'] = int(rs.group(1))
    gifts = []
    for t in link_texts(c):
        g = gift_names.get(norm(t))
        if g and g not in gifts: gifts.append(g)
    d = re.search(r'<details[^>]*>\s*<summary[^>]*>(.*?)</summary>(.*?)</details>', c, re.S)
    if d:
        cell['k'] = 'r'
        cell['label'] = re.sub(r'^▼\s*', '', clean_text(d.group(1)))
        cell['text'] = clean_text(d.group(2))
    elif re.match(r'\s*(?:<(?:div|span)[^>]*>\s*)*<strong[^>]*>', c):
        st = re.search(r'<strong[^>]*>(.*?)</strong>', c, re.S)
        cell['k'] = 'o'
        cell['msg'] = clean_text(st.group(1))
        rest = clean_text(c[st.end():])
        if rest: cell['hint'] = rest
    else:
        img = image_url(c)
        if img and not clean_text(c):
            cell['k'] = 'i'; cell['img'] = img
        else:
            cell['k'] = 't'; cell['text'] = clean_text(c)
    if gifts: cell['gifts'] = gifts
    return cell

def parse_tables(seg, gift_names):
    tables = []
    for tm in re.finditer(r'<table.*?</table>', seg, re.S):
        rows = []
        for tr in re.findall(r'<tr.*?</tr>', tm.group(0), re.S):
            cells = [parse_cell(m.group(1), m.group(2), gift_names) for m in re.finditer(r'<td([^>]*)>(.*?)</td>', tr, re.S)]
            cells = [c for c in cells if not (c['k'] == 't' and not c['text'] and 'rs' not in c and 'cs' not in c) or len(cells) > 1]
            if cells: rows.append(cells)
        if rows: tables.append(rows)
    return tables

# enemy_parser.HEADING_RE보다 느슨하게: 제목 안에 빈 앵커(<a id='거울던전'></a>)가 끼는 경우가 있다
HEADING_RE = re.compile(r"<h([2-6])[^>]*><a id='s-([\d.]+)' href='#toc'[^>]*>[\d.]+</a>\s*<span[^>]*>(.*?)<span class='[^']*'", re.S)

def headings(html):
    hs = [(m.group(2), clean_text(m.group(3)), m.start()) for m in HEADING_RE.finditer(html)]
    return hs + [('end', '', len(html))]

def section(html, hs, i):
    return html[hs[i][2]:hs[i + 1][2]]

def build_event(name, seg, gift_names, extra):
    tables = parse_tables(seg, gift_names)
    if not tables: return None
    ev = {'name': name, **extra}
    img = None
    out_tables = []
    for rows in tables:
        # 첫 줄이 이벤트·단계 제목(굵은 글자 한 칸)이면 표 제목으로
        title = None
        first = rows[0][0] if len(rows[0]) == 1 else None
        if first and first['k'] == 'o' and not first.get('hint'):
            title = first['msg']; rows = rows[1:]
        elif first and first['k'] == 't' and norm(first['text']) == norm(name):
            title = first['text']; rows = rows[1:]
        new_rows = []
        for r in rows:
            if len(r) == 1 and r[0]['k'] == 'i':
                img = img or r[0]['img']; continue
            if all(c['k'] == 't' and not c['text'] for c in r): continue
            new_rows.append(r)
        out_tables.append({'title': title, 'rows': new_rows} if title and norm(title) != norm(name) else {'rows': new_rows})
    ev['portrait'] = img
    ev['tables'] = out_tables
    gifts = []
    for t in out_tables:
        for r in t['rows']:
            for c in r:
                for g in c.get('gifts', []):
                    if g not in gifts: gifts.append(g)
    ev['gifts'] = gifts
    return ev

def main():
    force = '--force' in sys.argv
    gifts = json.loads(jsobj._to_json(jsobj._find_block(open(os.path.join(paths.REPO, 'ego_gift_data.js'), encoding='utf-8').read(), 'EGO_GIFT_DATA')))
    gift_names = {}
    for g in gifts:
        for n in [g['name']] + (g.get('aliases') or []):
            gift_names.setdefault(norm(n), g['name'])
    tp_src = open(os.path.join(paths.REPO, 'theme_pack_data.js'), encoding='utf-8').read()
    pack_names = re.findall(r'^\s*\{"name": "([^"]+)"', tp_src, re.M)
    pack_by_norm = {norm(n): n for n in pack_names}

    events = []
    # 1) 공통 선택지: '던전 이벤트방 선택지' 아래 '거울 던전', '거울 던전 N' 문단의 하위 문단 / 전투 도중 선택지
    html = fetch(MAIN, force)
    hs = headings(html)
    parent = {}
    for i, (num, name, _) in enumerate(hs[:-1]):
        parent[num] = name
        up = num.rsplit('.', 1)[0] if '.' in num else None
        pname = parent.get(up, '')
        if re.match(r'거울 던전( \d+)?$', pname) and num.count('.') == 2:
            season = pname if pname != '거울 던전' else '거울 던전 1'
            ev = build_event(name, section(html, hs, i), gift_names, {'category': '공통', 'season': season})
            if ev: events.append(ev)
        elif pname == '전투 도중 선택지' and num.count('.') == 1:
            ev = build_event(name, section(html, hs, i), gift_names, {'category': '전투 중'})
            if ev: events.append(ev)
    main_updated = last_modified(html)

    # 2) 테마팩 전용: 'Limbus Company/선택지/테마팩' — 테마 문단(1.x.y) 아래 선택지 문단(1.x.y.z)
    html = fetch(THEME, force)
    hs = headings(html)
    names = {num: name for num, name, _ in hs}
    unknown_themes = set()
    for i, (num, name, _) in enumerate(hs[:-1]):
        if num.count('.') != 3: continue
        theme = names.get(num.rsplit('.', 1)[0], '')
        pack = pack_by_norm.get(norm(theme)) or next((n for k, n in pack_by_norm.items() if k.endswith(norm(theme))), None)
        if not pack: unknown_themes.add(theme)
        ev = build_event(name, section(html, hs, i), gift_names, {'category': '테마팩 전용', 'theme': pack or theme})
        if ev: events.append(ev)
    theme_updated = last_modified(html)

    # 공통 선택지 → 나오는 테마팩 (게임 데이터 eventPool, 지문 앞부분으로 맞춤)
    unmatched_game = []
    if md_enemies.available():
        snap = json.load(open(EVENT_DESC, encoding='utf-8'))['desc']
        by_desc = {}
        for ev in events:
            if ev['category'] != '공통': continue
            d = first_desc(ev)
            if d: by_desc.setdefault(desc_key(d), ev)
        def find(eid):
            k = snap.get(str(eid))
            if not k: return None
            if k[:30] in by_desc: return by_desc[k[:30]]
            cands = [ev for kk, ev in by_desc.items() if kk[:12] == k[:12]]   # 나무위키 지문이 조금 다른 경우
            return cands[0] if len(cands) == 1 else None
        for tk, t in md_enemies.theme_events().items():
            pack = pack_by_norm.get(tk)
            if not pack: continue
            for eid in t['events']:
                ev = find(eid)
                if not ev:
                    if eid not in unmatched_game: unmatched_game.append(eid)
                    continue
                ev.setdefault('themes', [])
                if pack not in ev['themes']: ev['themes'].append(pack)
    else:
        print('게임 데이터가 없어 공통 선택지의 테마팩은 건너뜀 (python tools/gamedata/fetch_static.py --md)')

    # 이름이 같은 선택지(공통 문단과 전투 중 문단 등)는 id로 구분
    seen = {}
    for ev in events:
        base = f"{ev['category']}:{ev.get('theme') or ''}:{ev['name']}"
        seen[base] = seen.get(base, 0) + 1
        ev['id'] = base if seen[base] == 1 else f'{base}#{seen[base]}'

    # 이미지
    os.makedirs(IMG_DIR, exist_ok=True)
    cache = json.load(open(CACHE, encoding='utf-8')) if os.path.exists(CACHE) else {}
    downloaded = 0
    for ev in events:
        u = ev.pop('portrait')
        if u and u not in cache and '--no-images' not in sys.argv:
            from PIL import Image
            req = urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0', 'Referer': 'https://namu.wiki/'})
            im = Image.open(io.BytesIO(urllib.request.urlopen(req, timeout=40).read()))
            im = im.convert('RGBA' if im.mode in ('RGBA', 'LA', 'P') else 'RGB')
            if im.width > 480: im = im.resize((480, round(im.height * 480 / im.width)), Image.LANCZOS)
            n = 1
            while os.path.exists(os.path.join(IMG_DIR, f'{n}.webp')): n += 1
            im.save(os.path.join(IMG_DIR, f'{n}.webp'), 'WEBP', quality=82)
            cache[u] = f'images/choice_events/{n}.webp'; downloaded += 1
            json.dump(cache, open(CACHE, 'w', encoding='utf-8'), ensure_ascii=False)
            time.sleep(2)
        ev['image'] = cache.get(u) if u else None

    header = (f"// 나무위키 '{MAIN}' (최근 수정 {main_updated})·'{THEME}' (최근 수정 {theme_updated}) 문서에서 추출.\n"
              "// category: 공통(거울 던전 N에서 추가된 일반 선택지) / 테마팩 전용(theme) / 전투 중(환상체 전투 도중 선택지)\n"
              "// tables[].rows[][]: 표 칸. k: t 지문 / o 선택지(msg, hint) / r 결과(label, text) / i 이미지, cs·rs: 칸 합치기, gifts: 그 칸에서 얻는 기프트\n"
              "// tools/namu/choice_events.py 로 다시 만든다.\n")
    js = header + 'const CHOICE_EVENTS = [\n' + ',\n'.join('  ' + json.dumps(e, ensure_ascii=False) for e in events) + '\n];\n'
    open(os.path.join(paths.REPO, 'choice_event_data.js'), 'w', encoding='utf-8').write(js)
    cats = {}
    for e in events: cats[e['category']] = cats.get(e['category'], 0) + 1
    print(f'선택지 {len(events)}개 {cats}, 기프트 연결 {sum(len(e["gifts"]) for e in events)}건, 이미지 새로 받음 {downloaded}, 파일 {len(js.encode()) // 1024} KB')
    if unknown_themes: print('사이트 테마팩과 이름이 안 맞는 테마:', sorted(unknown_themes))
    if unmatched_game: print('나무위키 선택지와 못 맞춘 게임 이벤트 id:', unmatched_game)
    print('테마팩이 붙은 공통 선택지:', sum(1 for e in events if e.get('themes')), '/', cats.get('공통', 0))
    nog = [e['name'] for e in events if e['category'] != '전투 중' and not e['gifts']]
    if nog: print('기프트를 못 찾은 선택지:', nog)

if __name__ == '__main__':
    main()
