"""팬 사이트 연심(yeon-sim.github.io) 저장소의 게임 추출 데이터를 tools/_work/gamedata 에 덮어쓴다.
OpenLethe(fetch_static.py)가 게임 업데이트를 늦게 따라올 때 쓴다. 파일 형식은 OpenLethe와 같다(2026-11-12 확인).

    python tools/gamedata/fetch_yeonsim.py          # 인격·E.G.O·스킬·패시브 + 한국어 이름(인격·E.G.O·기프트)

- 연심 경로 → 로컬 폴더: data/personality/info → personality, data/personality/skill → skill,
  data/personality/passive → passive·personality-passive, data/egoskill → ego(ego-N)·skill(ego-skill-N),
  data/lang/kr/**/KR_Personalities·KR_Egos·KR_EGOgift_* → loc
- 게임 데이터 파일은 덮어쓰지 않고 로컬(OpenLethe)에 없는 항목만 더한다. 한국어 이름(loc)은 연심 판으로 바꾼다.
  그래서 fetch_static.py를 먼저, 이 스크립트를 나중에 돌린다.
- 데이터 저작권은 Project Moon. 연심은 이 자료에 권리를 주장하지 않음(저장소 NOTICE.md)."""
import json, os, sys, urllib.request
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import paths

REPO = 'yeon-sim/yeon-sim.github.io'
BRANCH = 'master'
LOC_PREFIXES = ('KR_Personalities', 'KR_Egos', 'KR_EGOgift_MirrorDungeon', 'KR_EGOgift_walpu')

def local_dir(path):
    """연심 저장소 경로 → 로컬 하위 폴더 (대상이 아니면 None)"""
    d, name = os.path.dirname(path), os.path.basename(path)
    if not name.endswith('.json'): return None
    if d == 'data/personality/info' and name.startswith('personality-'): return 'personality'
    if d == 'data/personality/skill' and name.startswith('personality-skill-'): return 'skill'
    if d == 'data/personality/passive':
        if name == 'passive.json': return 'passive'
        if name.startswith('personality-passive-'): return 'personality-passive'
    if d == 'data/egoskill':
        if name.startswith('ego-skill-'): return 'skill'
        if name.startswith('ego-'): return 'ego'
    if d.startswith('data/lang/kr') and name.startswith(LOC_PREFIXES): return 'loc'
    return None

def get(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'gesellschaft-tools'})
    tok = os.environ.get('GITHUB_TOKEN') or os.environ.get('GH_TOKEN')
    if tok and 'api.github.com' in url: req.add_header('Authorization', f'Bearer {tok}')
    return urllib.request.urlopen(req, timeout=120).read()

def main():
    tree = json.loads(get(f'https://api.github.com/repos/{REPO}/git/trees/{BRANCH}?recursive=1'))['tree']
    changed = []
    for item in tree:
        if item['type'] != 'blob': continue
        sub = local_dir(item['path'])
        if not sub: continue
        dst = os.path.join(paths.GAMEDATA, sub, os.path.basename(item['path']))
        data = get(f'https://raw.githubusercontent.com/{REPO}/{BRANCH}/{item["path"]}')
        if os.path.exists(dst) and open(dst, 'rb').read() == data: continue
        if sub != 'loc' and os.path.exists(dst):
            # 게임 데이터는 이미 있는 항목(id)을 덮어쓰지 않고 없는 항목만 더한다.
            # 연심과 OpenLethe 중 어느 쪽이 더 최신인지는 때마다 다르다(2026-11-19 OpenLethe가 출시 후 조정값을 먼저 반영).
            mine = json.load(open(dst, encoding='utf-8-sig')); theirs = json.loads(data.decode('utf-8-sig'))
            key = 'personalityID' if sub == 'personality-passive' else 'id'
            have = {x.get(key) for x in mine.get('list', [])}
            extra = [x for x in theirs.get('list', []) if x.get(key) not in have]
            if not extra: continue
            mine['list'] += extra
            json.dump(mine, open(dst, 'w', encoding='utf-8'), ensure_ascii=False, indent=2)
            changed.append(f'added {len(extra)}\t{sub}/{os.path.basename(dst)}')
            continue
        changed.append(f"{'changed' if os.path.exists(dst) else 'new'}\t{sub}/{os.path.basename(dst)}")
        os.makedirs(os.path.dirname(dst), exist_ok=True)
        open(dst, 'wb').write(data)
    print('\n'.join(changed) if changed else '변경 없음')

if __name__ == '__main__':
    main()
