"""게임 static data(LEAGUE-OF-NINE/OpenLethe 저장소의 공식 데이터 덤프)를 tools/_work/gamedata 로 내려받는다.
이미 같은 내용(git blob sha 일치)이 있으면 건너뛴다. 바뀐 파일·새 파일 목록을 출력한다.

    python tools/gamedata/fetch_static.py          # 인격·E.G.O·스킬·패시브
    python tools/gamedata/fetch_static.py --loc    # + 한국어 이름(인격·E.G.O·기프트)

환경 변수 GITHUB_TOKEN이 있으면 API 요청에 사용한다(없어도 되지만 시간당 요청 제한이 낮음)."""
import hashlib, json, os, sys, urllib.request
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import paths

REPO = 'LEAGUE-OF-NINE/OpenLethe'
BRANCH = 'main'
STATIC = 'src/OpenLethe.Resources/StaticData/static-data'
LOC = 'src/OpenLethe.Resources/Localize/kr'
DIRS = ['personality', 'ego', 'skill', 'passive', 'personality-passive']
LOC_PREFIXES = ('KR_Personalities', 'KR_Egos', 'KR_EGOgift_MirrorDungeon')

def api(path):
    req = urllib.request.Request(f'https://api.github.com/repos/{REPO}/contents/{path}?ref={BRANCH}',
                                 headers={'Accept': 'application/vnd.github+json', 'User-Agent': 'gesellschaft-tools'})
    tok = os.environ.get('GITHUB_TOKEN') or os.environ.get('GH_TOKEN')
    if tok:
        req.add_header('Authorization', f'Bearer {tok}')
    return json.load(urllib.request.urlopen(req, timeout=60))

def raw(path):
    url = f'https://raw.githubusercontent.com/{REPO}/{BRANCH}/{path}'
    return urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': 'gesellschaft-tools'}), timeout=120).read()

def blob_sha(data):
    return hashlib.sha1(b'blob %d\0' % len(data) + data).hexdigest()

def sync(remote_dir, local_dir, name_filter=None):
    os.makedirs(local_dir, exist_ok=True)
    changed = []
    for item in api(remote_dir):
        if item['type'] != 'file' or (name_filter and not name_filter(item['name'])):
            continue
        dst = os.path.join(local_dir, item['name'])
        if os.path.exists(dst) and blob_sha(open(dst, 'rb').read()) == item['sha']:
            continue
        status = 'changed' if os.path.exists(dst) else 'new'
        open(dst, 'wb').write(raw(f"{remote_dir}/{item['name']}"))
        changed.append(f'{status}\t{os.path.relpath(dst, paths.GAMEDATA)}')
    return changed

def main():
    out = []
    for d in DIRS:
        out += sync(f'{STATIC}/{d}', os.path.join(paths.GAMEDATA, d))
    if '--loc' in sys.argv:
        out += sync(LOC, os.path.join(paths.GAMEDATA, 'loc'), lambda n: n.startswith(LOC_PREFIXES))
    print('\n'.join(out) if out else '변경 없음')
    open(os.path.join(paths.REPORTS, 'fetch_static.txt'), 'w', encoding='utf-8').write('\n'.join(out))

if __name__ == '__main__':
    main()
