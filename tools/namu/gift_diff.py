"""나무위키 E.G.O 기프트 문서 3개를 받아 기프트 카드를 추출하고, 사이트 데이터(ego_gift_data.js)와 대조한다.
새 기프트, 효과·코스트·등급이 바뀐 기프트, 나무위키에서 사라진 기프트를 보고한다.

    python tools/namu/gift_diff.py            # 문서가 이미 받아져 있으면 그대로 사용
    python tools/namu/gift_diff.py --force    # 문서를 새로 받음
    python tools/namu/gift_diff.py --apply    # 대조 결과를 ego_gift_data.js에 반영 (새 기프트는 나무위키 아이콘까지 받아 추가, 바뀐 효과·코스트 갱신)

결과: tools/_work/reports/gift_diff.txt (사람용), gift_namu.json (추출한 전체 기프트)"""
import json, os, re, sys, html as H
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import paths
from fetch import fetch
sys.path.insert(0, os.path.join(paths.TOOLS, 'gamedata'))
import jsobj

PAGES = {
    'basic7': 'Limbus Company/거울 던전/E.G.O 기프트/기본 7키워드 기프트',
    'other': 'Limbus Company/거울 던전/E.G.O 기프트/기본 7키워드 외 기프트',
    'theme': 'Limbus Company/거울 던전/E.G.O 기프트/특정 테마팩 전용 기프트',
}
RANK_RE = re.compile(r'^(Ⅰ|Ⅱ|Ⅲ|Ⅳ|Ⅴ|EX)\s+(.+)$')
LABELS = ('연관', '등급', '첫 등장', '강화 여부', '효과')

def lines_of(html):
    t = re.sub(r'<script.*?</script>|<style.*?</style>', ' ', html, flags=re.S)
    t = re.sub(r'<(br|/p|/div|/li|/tr|/td|/h\d)[^>]*>', '\n', t)
    t = re.sub(r'<[^>]+>', ' ', t)
    t = H.unescape(t)
    out = []
    for ln in t.split('\n'):
        ln = re.sub(r'[ \t ]+', ' ', ln).strip()
        if ln:
            out.append(ln)
    return out

def parse(html, source):
    L = lines_of(html)
    gifts = []
    for i, ln in enumerate(L):
        if ln != '기프트 상세 정보':
            continue
        head = None
        for k in range(i - 1, max(0, i - 10), -1):
            m = RANK_RE.match(L[k])
            if m:
                head = (k, m.group(1), m.group(2)); break
        if not head:
            continue
        k, rank, name = head
        pre = L[k + 1:i]          # 키워드, 코스트, 제한 등
        g = {'name': name, 'rank': rank, 'sourcePage': source, 'keyword': None, 'cost': None, 'restriction': None}
        for p in pre:
            if re.fullmatch(r'\d+', p) and g['cost'] is None:
                g['cost'] = int(p)
            elif g['keyword'] is None and len(p) <= 12 and g['cost'] is None:
                g['keyword'] = p
            else:
                g['restriction'] = (g['restriction'] + ' ' + p) if g['restriction'] else p
        j = i + 1
        cur = None; vals = {}
        while j < len(L) and L[j] != '언어별 표기' and L[j] != '기프트 상세 정보':
            if L[j] in LABELS:
                cur = L[j]; vals[cur] = []
            elif cur:
                vals[cur].append(L[j])
            j += 1
        g['associated'] = ' '.join(vals.get('연관', [])) or None
        g['grade'] = ' '.join(vals.get('등급', [])) or None
        g['firstAppearance'] = ' '.join(vals.get('첫 등장', [])) or None
        g['upgradable'] = ' '.join(vals.get('강화 여부', [])) or None
        g['effect'] = '\n'.join(vals.get('효과', []))
        if j < len(L) and L[j] == '언어별 표기':
            g['english'] = L[j + 2] if j + 2 < len(L) else None
        gifts.append(g)
    return gifts

def norm(s):
    return re.sub(r'\s+', '', s or '')

def load_site():
    src = open(os.path.join(paths.REPO, 'ego_gift_data.js'), encoding='utf-8').read()
    return json.loads(jsobj._to_json(jsobj._find_block(src, 'EGO_GIFT_DATA')))

RANK_NUM = {'Ⅰ': 1, 'Ⅱ': 2, 'Ⅲ': 3, 'Ⅳ': 4, 'Ⅴ': 5, 'EX': 6}
FIELDS = ['name', 'icon', 'rank', 'rankNum', 'keyword', 'cost', 'purchasable', 'restriction', 'grade', 'associated',
          'firstAppearance', 'upgradable', 'effect', 'extraNotes', 'sourcePage', 'english', 'aliases', 'recipe', 'usedIn']

def js(v):
    if v is None: return 'null'
    if isinstance(v, bool): return 'true' if v else 'false'
    if isinstance(v, (int, float)): return str(v)
    if isinstance(v, str): return json.dumps(v, ensure_ascii=False)
    if isinstance(v, list): return '[' + ','.join(js(x) for x in v) + ']'
    return '{' + ','.join(f'{k}:{js(x)}' for k, x in v.items()) + '}'

def entry_line(g):
    keys = FIELDS + [k for k in g if k not in FIELDS]
    return '  {' + ','.join(f'{k}:{js(g.get(k))}' for k in keys if k in g) + '},'

def site_fields(n):
    """나무위키 카드 → 사이트 데이터 형식. '[구매불가]'는 코스트 앞에 붙어 있어 제한 문구로 들어와 있음."""
    restr = n.get('restriction') or ''
    cost = n.get('cost')
    purch = '[구매불가]' not in restr
    m = re.match(r'^(\d+)\s*\[구매불가\]\s*', restr)
    if m:
        cost = int(m.group(1)); restr = restr[m.end():]
    restr = restr.replace('[구매불가]', '').replace(' , ', ',').replace(' ,', ',').strip() or None
    return {'rank': n['rank'], 'rankNum': RANK_NUM.get(n['rank']), 'keyword': n.get('keyword'), 'cost': cost,
            'purchasable': purch, 'restriction': restr, 'grade': n.get('grade'), 'associated': n.get('associated'),
            'firstAppearance': n.get('firstAppearance'), 'upgradable': n.get('upgradable'), 'effect': n['effect'],
            'sourcePage': n['sourcePage'], 'english': n.get('english')}

def download_icon(name, source):
    """나무위키 문서에서 alt가 '<이름>' 또는 '림버스 <이름>'인 이미지를 256x256 webp로 저장."""
    import io, time, urllib.request
    from PIL import Image
    html = fetch(PAGES[source])
    for m in re.finditer(r'<img[^>]*>', html):
        tag = m.group(0)
        alt = re.search(r"alt=['\"]([^'\"]*)", tag); src = re.search(r"data-src=['\"]([^'\"]+)", tag)
        if not (alt and src): continue
        a = H.unescape(alt.group(1)).strip()
        if a not in (name, '림버스 ' + name, '림버스컴퍼니 ' + name): continue
        url = 'https:' + src.group(1) if src.group(1).startswith('//') else src.group(1)
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0', 'Referer': 'https://namu.wiki/'})
        im = Image.open(io.BytesIO(urllib.request.urlopen(req, timeout=40).read())).convert('RGBA').resize((256, 256), Image.LANCZOS)
        d = os.path.join(paths.REPO, 'images', 'ego_gifts')
        n = max(int(f.split('.')[0]) for f in os.listdir(d) if f.split('.')[0].isdigit()) + 1
        im.save(os.path.join(d, f'{n}.webp'), 'WEBP', quality=90)
        time.sleep(2)
        return f'images/ego_gifts/{n}.webp'
    return None

def apply(new, changed):
    path = os.path.join(paths.REPO, 'ego_gift_data.js')
    src = open(path, encoding='utf-8').read()
    for g, s, diffs in changed:
        merged = dict(s); merged.update({k: v for k, v in site_fields(g).items() if k in ('effect', 'cost', 'rank', 'rankNum', 'upgradable')})
        old_line = next(l for l in src.split('\n') if l.startswith('  {name:' + json.dumps(s['name'], ensure_ascii=False) + ','))
        src = src.replace(old_line, entry_line(merged).rstrip(',') + (',' if old_line.rstrip().endswith(',') else ''), 1)
    lines = []
    for n in new:
        g = {'name': n['name'], 'icon': download_icon(n['name'], n['sourcePage'])}
        g.update(site_fields(n))
        g.update({'extraNotes': [], 'aliases': [], 'recipe': None, 'usedIn': None})
        lines.append(entry_line(g))
        print('  아이콘', n['name'], g['icon'])
    if lines:
        end = src.rindex('\n];')
        prev = src[:end].rstrip()
        if not prev.endswith(','): src = prev + ',' + src[end:]; end = src.rindex('\n];')
        src = src[:end] + '\n' + '\n'.join(lines) + src[end:]
    open(path, 'w', encoding='utf-8').write(src)
    print(f'적용: 새 기프트 {len(new)}개 추가, {len(changed)}개 갱신')

def main():
    force = '--force' in sys.argv
    namu = []
    for key, title in PAGES.items():
        namu += parse(fetch(title, force), key)
    json.dump(namu, open(os.path.join(paths.REPORTS, 'gift_namu.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    site = load_site()
    by_site = {norm(g['name']): g for g in site}
    by_namu = {}
    for g in namu:
        by_namu.setdefault(norm(g['name']), g)
    new = [g for k, g in by_namu.items() if k not in by_site]
    gone = [g for k, g in by_site.items() if k not in by_namu]
    changed = []
    for k, g in by_namu.items():
        s = by_site.get(k)
        if not s: continue
        diffs = []
        if norm(g['effect']) != norm(s.get('effect')): diffs.append('효과')
        if g['cost'] is not None and s.get('cost') is not None and g['cost'] != s.get('cost'): diffs.append(f"코스트 {s.get('cost')}→{g['cost']}")
        if g['rank'] != s.get('rank'): diffs.append(f"등급 {s.get('rank')}→{g['rank']}")
        if (g.get('upgradable') or '') != (s.get('upgradable') or '') and g.get('upgradable'): diffs.append(f"강화 {s.get('upgradable')}→{g.get('upgradable')}")
        if diffs: changed.append((g, s, diffs))
    out = [f'나무위키 기프트 {len(namu)}개 (중복 이름 제외 {len(by_namu)}) / 사이트 {len(site)}개',
           f'새 기프트 {len(new)}개:'] + [f"  + [{g['sourcePage']}] {g['rank']} {g['name']} ({g['keyword']}, {g['cost']})" for g in new]
    out += [f'바뀐 기프트 {len(changed)}개:'] + [f"  * {g['name']}: {', '.join(d)}" for g, s, d in changed]
    out += [f'나무위키에서 못 찾은 사이트 기프트 {len(gone)}개 (이름이 바뀌었거나 파서가 놓친 것일 수 있음):'] + [f"  - {g['name']}" for g in gone]
    report = '\n'.join(out)
    print(report)
    open(os.path.join(paths.REPORTS, 'gift_diff.txt'), 'w', encoding='utf-8').write(report)
    # 바뀐 효과의 전후 원문 (검토용)
    detail = []
    for g, s, d in changed:
        if '효과' in d:
            detail.append(f"### {g['name']}\n[사이트]\n{s.get('effect')}\n[나무위키]\n{g['effect']}\n")
    open(os.path.join(paths.REPORTS, 'gift_diff_effects.txt'), 'w', encoding='utf-8').write('\n'.join(detail))
    if '--apply' in sys.argv and (new or changed):
        apply(new, changed)

if __name__ == '__main__':
    main()
