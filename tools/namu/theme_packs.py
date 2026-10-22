"""나무위키 '거울 던전 N' 문서의 테마팩 표를 읽어 theme_pack_data.js 를 만든다.

    python tools/namu/theme_packs.py [--force] [--season 8] [--no-images]   # --no-images: 보스 초상화를 받지 않고 결과만 확인

- 테마팩 표 3종(일반 / 히든 / 평행중첩 EXTREME 전용)과 기프트 그룹(그룹 A~J) 정의를 읽는다.
- 등장 보스는 사이트 적 데이터(enemy_data.js)와 이름이 같으면 그 이미지를 쓰고, 없으면 나무위키 초상화를 images/theme_bosses/ 에 받는다.
- 기프트 데이터의 "'테마' 한정" 문구에만 나오고 표에는 없는 테마(신규·지난 시즌)는 전용 기프트만 있는 항목으로 추가한다."""
import io, json, os, re, sys, time, urllib.request, html as H
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import paths
from fetch import fetch, last_modified
import enemy_parser as P
sys.path.insert(0, os.path.join(paths.TOOLS, 'gamedata'))
import jsobj

SEASON_TITLES = {8: '시지프의 거울'}

def norm(s): return re.sub(r'\s+', '', s or '')

def text(c):
    c = re.sub(r'<img[^>]*>', ' ', c)
    c = re.sub(r'<br[^>]*>', '\n', c)
    c = re.sub(r'<a [^>]*class=.[^>]*>\[[^\]]*\]</a>', ' ', c)   # 각주 링크
    c = H.unescape(re.sub(r'<[^>]+>', ' ', c))
    c = re.sub(r'\[\d+\]|\[[^\]]{1,12}\]', ' ', c)               # [15] [층길이] 같은 각주 표식
    return re.sub(r'[ \t ]+', ' ', c).strip()

def imgs(c):
    out = []
    for m in re.finditer(r'<img[^>]*>', c):
        a = re.search(r"alt=['\"]([^'\"]*)", m.group(0)); s = re.search(r"data-src=['\"]([^'\"]+)", m.group(0))
        if a and s:
            u = 'https:' + s.group(1) if s.group(1).startswith('//') else s.group(1)
            if not out or out[-1][1] != u:
                out.append((H.unescape(a.group(1)), u))
    return out

def parse_gifts_cell(c, all_gift_names):
    """등장 E.G.O 기프트 칸: [그룹 X] 목록 + 전용 기프트(이름 [IMG] [H?])"""
    groups = sorted(set(re.findall(r'\[그룹 ([A-Z])\]', H.unescape(c))))
    allnormal = '모든 통상 기프트' in H.unescape(c)
    excl = []
    t = H.unescape(re.sub(r'<img[^>]*>', ' ', re.sub(r'<br[^>]*>', '\n', c)))
    t = re.sub(r'<[^>]+>', ' ', t)
    for line in t.split('\n'):
        line = re.sub(r'\[그룹 [A-Z]\]|\[그룹[A-Z]\]', ' ', line).strip()
        hard = bool(re.search(r'\[H\]', line))
        name = re.sub(r'\[[^\]]*\]', ' ', line); name = re.sub(r'\s+', ' ', name).strip()
        if not name or name == '모든 통상 기프트': continue
        if norm(name) in all_gift_names:
            excl.append({'name': all_gift_names[norm(name)], 'hardOnly': hard})
    return groups, allnormal, excl

def boss_list(c):
    """보스 칸: 줄마다 한 전투(여러 보스면 ' & '로 연결). 초상화 alt는 'portrait 이름'(길면 '...'로 잘림)."""
    lines = [n for n in (x.strip() for x in text(c).split('\n')) if n]
    pics = [(a.replace('portrait', '', 1).replace('...', '').strip(), u) for a, u in imgs(c)]
    out = []
    for ln in lines:
        members = []
        for mname in [x.strip() for x in ln.split(' & ') if x.strip()]:
            pic = next((u for a, u in pics if a and (mname.startswith(a) or a.startswith(mname))), None)
            members.append({'name': mname, 'portrait': pic})
        out.append({'name': ln, 'members': members})
    return out

def main():
    force = '--force' in sys.argv
    season = int(sys.argv[sys.argv.index('--season') + 1]) if '--season' in sys.argv else 8
    html = fetch(f'Limbus Company/거울 던전/거울 던전 {season}', force)
    heads = [(m.group(2), H.unescape(m.group(3)).strip(), m.start()) for m in P.HEADING_RE.finditer(html)]
    sec = next(i for i, h in enumerate(heads) if h[1] == '테마팩')
    a = heads[sec][2]; b = next(h[2] for h in heads[sec + 1:] if '.' not in h[0])
    seg = html[a:b]
    gifts = json.loads(jsobj._to_json(jsobj._find_block(open(os.path.join(paths.REPO, 'ego_gift_data.js'), encoding='utf-8').read(), 'EGO_GIFT_DATA')))
    gift_names = {norm(g['name']): g['name'] for g in gifts}

    # 기프트 그룹 정의: "[그룹 A] ... : 이름, 이름, ... - N종"
    groups = {}
    for m in re.finditer(r'\[그룹 ([A-Z])\][^:]{0,200}:\s*(.*?)\s*-\s*\d+종', H.unescape(re.sub(r'<[^>]+>', ' ', seg)), re.S):
        names = [re.sub(r'\s+', ' ', x).strip() for x in m.group(2).split(',')]
        groups[m.group(1)] = [gift_names.get(norm(n), n) for n in names if n]

    packs = []
    for tm in re.finditer(r'<table.*?</table>', seg, re.S):
        rows = re.findall(r'<tr.*?</tr>', tm.group(0), re.S)
        title = text(rows[0])
        category = '히든' if '히든' in title else ('평행중첩 EXTREME 전용' if 'EXTREME' in title else '일반')
        header = [text(c) for c in re.findall(r'<t[dh][^>]*>(.*?)</t[dh]>', rows[1], re.S)]
        for r in rows[2:]:
            cells = re.findall(r'<t[dh][^>]*>(.*?)</t[dh]>', r, re.S)
            if len(cells) < len(header) - 1: continue
            row = dict(zip(header, cells))
            p = {'name': re.sub(r'\s+', ' ', text(cells[0])), 'category': category, 'season': season}
            p['info'] = text(row.get('정보', '')) or None
            p['normalFloors'] = text(row.get('Normal\n출현', row.get('Normal 출현', ''))) or None
            p['hardFloors'] = text(row.get('Hard\n출현', row.get('Hard 출현', ''))) or None
            fl = next((v for k, v in row.items() if k.startswith('층 길이')), '')
            p['floorLength'] = text(fl) or None
            bc = next((v for k, v in row.items() if '보스' in k), '')
            p['bosses'] = boss_list(bc)
            gc = next((v for k, v in row.items() if '기프트' in k), '')
            p['groups'], p['allNormalGifts'], p['exclusive'] = parse_gifts_cell(gc, gift_names)
            rw = next((v for k, v in row.items() if k.startswith('보상')), None)
            p['reward'] = text(rw) if rw else None
            packs.append(p)

    # 기프트의 '한정' 문구에만 있는 테마 → 전용 기프트만 가진 항목
    known = {norm(p['name']): p for p in packs}
    alias = {}
    for g in gifts:
        for th in re.findall(r"'([^']+)'", g.get('restriction') or ''):
            k = norm(th)
            if k not in known:
                cand = next((p for kk, p in known.items() if kk.replace('과', '의') == k.replace('과', '의')), None)
                if cand: known[k] = cand; alias[th] = cand['name']; continue
                known[k] = {'name': th, 'category': '정보 미작성', 'season': None, 'info': None, 'normalFloors': None, 'hardFloors': None,
                            'floorLength': None, 'bosses': [], 'groups': [], 'allNormalGifts': False, 'exclusive': [], 'reward': None}
                packs.append(known[k])
            p = known[k]
            if not any(e['name'] == g['name'] for e in p['exclusive']):
                p['exclusive'].append({'name': g['name'], 'hardOnly': '하드' in (g.get('restriction') or '')})

    # 보스 이미지: 사이트 적 데이터 우선(이름 완전 일치 → 띄어쓰기 무시 일치 → 포함 관계), 없으면 나무위키 초상화 저장
    esrc = open(os.path.join(paths.REPO, 'enemy_data.js'), encoding='utf-8').read()
    enemy_img = {}
    for m in re.finditer(r'\{name:"([^"]+)",chapter:"([^"]+)"[^\n]*?image:("[^"]*"|null)', esrc):
        if m.group(3) != 'null': enemy_img.setdefault(m.group(1), m.group(3).strip('"'))
    by_norm = {}
    for n in enemy_img: by_norm.setdefault(norm(n), n)
    def match_enemy(name):
        if name in enemy_img: return name
        if norm(name) in by_norm: return by_norm[norm(name)]
        # 부분 일치는 보수적으로: '엄지 제자 - 루치오'처럼 '- 이름'으로 끝나는 경우, '도시의 청소부 A'처럼 짧은 꼬리만 붙은 경우
        cands = [n for n in enemy_img if len(name) >= 2 and (n.endswith('- ' + name)
                 or (n.startswith(name + ' ') and len(n) - len(name) <= 3))]
        return min(cands, key=len) if cands else None
    bdir = os.path.join(paths.REPO, 'images', 'theme_bosses'); os.makedirs(bdir, exist_ok=True)
    cache_path = os.path.join(paths.WORK, 'theme_boss_cache.json')
    cache = json.load(open(cache_path, encoding='utf-8')) if os.path.exists(cache_path) else {}
    downloaded = 0
    for p in packs:
        for bo in p['bosses']:
            for mb in bo['members']:
                en = match_enemy(mb['name'])
                mb['enemy'] = en
                if en:
                    mb['image'] = enemy_img[en]
                elif mb.get('portrait') and '--no-images' not in sys.argv:
                    if mb['portrait'] not in cache:
                        from PIL import Image
                        req = urllib.request.Request(mb['portrait'], headers={'User-Agent': 'Mozilla/5.0', 'Referer': 'https://namu.wiki/'})
                        im = Image.open(io.BytesIO(urllib.request.urlopen(req, timeout=40).read()))
                        im = im.convert('RGBA' if im.mode in ('RGBA', 'LA', 'P') else 'RGB')
                        n = 1
                        while os.path.exists(os.path.join(bdir, f'{n}.webp')): n += 1
                        im.save(os.path.join(bdir, f'{n}.webp'), 'WEBP', quality=85)
                        cache[mb['portrait']] = f'images/theme_bosses/{n}.webp'; downloaded += 1
                        json.dump(cache, open(cache_path, 'w', encoding='utf-8'), ensure_ascii=False)
                        time.sleep(2)
                    mb['image'] = cache[mb['portrait']]
                else:
                    mb['image'] = cache.get(mb.get('portrait'))
                mb.pop('portrait', None)

    header = (f"// 나무위키 'Limbus Company/거울 던전/거울 던전 {season}' 테마팩 표에서 추출 (문서 최근 수정 {last_modified(html)}).\n"
              "// category: 일반 / 히든 / 평행중첩 EXTREME 전용 / 정보 미작성(기프트의 '한정' 문구에만 있고 표에는 없는 테마)\n"
              "// exclusive: 전용 기프트(hardOnly=하드 한정), groups: 공통 기프트 그룹(THEME_GIFT_GROUPS), bosses[].image: 적 데이터 이미지 또는 나무위키 초상화\n"
              "// tools/namu/theme_packs.py 로 다시 만든다.\n")
    js = (header + f'const THEME_SEASON = {json.dumps(SEASON_TITLES.get(season, f"거울 던전 {season}"), ensure_ascii=False)};\n'
          + 'const THEME_GIFT_GROUPS = ' + json.dumps(groups, ensure_ascii=False) + ';\n'
          + 'const THEME_RESTRICTION_ALIAS = ' + json.dumps(alias, ensure_ascii=False) + ';\n'
          + 'const THEME_PACKS = [\n' + ',\n'.join('  ' + json.dumps(p, ensure_ascii=False) for p in packs) + '\n];\n')
    open(os.path.join(paths.REPO, 'theme_pack_data.js'), 'w', encoding='utf-8').write(js)
    cats = {}
    for p in packs: cats[p['category']] = cats.get(p['category'], 0) + 1
    print(f'테마팩 {len(packs)}개 {cats}, 기프트 그룹 {len(groups)}개, 보스 초상화 새로 받음 {downloaded}')
    print('표에 없는 테마:', [p['name'] for p in packs if p['category'] == '정보 미작성'])
    print('이름 별칭:', alias)
    nob = [p['name'] for p in packs if not p['bosses'] and p['category'] != '정보 미작성']
    if nob: print('보스 정보 없는 테마:', nob)

if __name__ == '__main__':
    main()
