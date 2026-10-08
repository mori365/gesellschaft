"""게임의 거울 던전 E.G.O 기프트 한국어 이름과 사이트 기프트(ego_gift_data.js)를 대조한다.
먼저 fetch_static.py --loc 으로 한국어 이름 파일을 받아야 한다.

    python tools/gamedata/check_gifts.py

'+', '++'로 끝나는 이름은 사이트에서 한 기프트의 강화 단계로 들어가므로 제외하고 비교한다.
사이트에만 있는 이름(스토리 던전·이벤트 전용 등)은 참고로만 보여준다."""
import glob, json, os, re, sys
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import paths

def norm(s): return re.sub(r'\s+', '', s)

def main():
    game = {}
    for f in glob.glob(os.path.join(paths.GAMEDATA, 'loc', 'KR_EGOgift_MirrorDungeon*.json')):
        for x in json.load(open(f, encoding='utf-8-sig')).get('dataList', []):
            n = (x.get('name') or '').strip()
            if n and not n.endswith('+'):
                game.setdefault(n, x['id'])
    if not game:
        sys.exit('한국어 기프트 이름 파일이 없습니다. 먼저: python tools/gamedata/fetch_static.py --loc')
    src = open(os.path.join(paths.REPO, 'ego_gift_data.js'), encoding='utf-8').read()
    ours = set(re.findall(r'"name":\s*"([^"]+)"', src)) or set(re.findall(r'\bname:\s*"([^"]+)"', src))
    on = {norm(x) for x in ours}
    missing = sorted(((n, i) for n, i in game.items() if norm(n) not in on), key=lambda x: x[1])
    lines = [f'게임 기프트 {len(game)} / 사이트 {len(ours)} / 사이트에 없음 {len(missing)}']
    lines += [f'  - {n} (id {i})' for n, i in missing]
    print('\n'.join(lines))
    open(os.path.join(paths.REPORTS, 'check_gifts.txt'), 'w', encoding='utf-8').write('\n'.join(lines))

if __name__ == '__main__':
    main()
