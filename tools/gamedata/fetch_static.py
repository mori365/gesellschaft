"""게임 static data(LEAGUE-OF-NINE/OpenLethe 저장소의 공식 데이터 덤프)를 tools/_work/gamedata 로 내려받는다.
이미 같은 내용(git blob sha 일치)이 있으면 건너뛴다. 바뀐 파일·새 파일 목록을 출력한다.

    python tools/gamedata/fetch_static.py          # 인격·E.G.O·스킬·패시브
    python tools/gamedata/fetch_static.py --loc    # + 한국어 이름(인격·E.G.O·기프트)
    python tools/gamedata/fetch_static.py --md     # + 거울 던전 테마팩·전투·적 유닛·영어 적 이름 (theme_packs.py·choice_events.py용)

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
# 2026-10-16부터 원본에서 한국어(kr) 적 이름이 빠져 영어(en)만 받는다. 한국어는 kr_enemy_names·kr_theme_names_20261002.json 사본 사용
MD_DIRS = ['mirrordungeon-theme-floor', 'battle-mirrordungeon', 'enemy', 'abnormality-unit']
LOC_EN = 'src/OpenLethe.Resources/Localize/en'
# OpenLethe에 없는 파일: 히든 테마(뽕.황)는 팬 사이트 연심(yeon-sim.github.io) 저장소의 게임 추출본에서 받는다
EXTRA_MD = [('https://raw.githubusercontent.com/yeon-sim/yeon-sim.github.io/master/data/floor_data/mirrordungeon-theme-floor-hidden.json',
             os.path.join('mirrordungeon-theme-floor', 'mirrordungeon-theme-floor-hidden.json'))]

def sync_extra():
    changed = []
    for url, rel in EXTRA_MD:
        dst = os.path.join(paths.GAMEDATA, rel)
        try:
            data = urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': 'gesellschaft-tools'}), timeout=60).read()
        except Exception as ex:
            print(f'받기 실패: {url} ({ex})'); continue
        if os.path.exists(dst) and open(dst, 'rb').read() == data: continue
        changed.append(f"{'changed' if os.path.exists(dst) else 'new'}	{rel}")
        os.makedirs(os.path.dirname(dst), exist_ok=True)
        open(dst, 'wb').write(data)
    return changed

def targets(want_loc, want_md):
    """(원격 폴더, 로컬 폴더, 파일 이름 필터) 목록"""
    out = [(f'{STATIC}/{d}', os.path.join(paths.GAMEDATA, d), None) for d in DIRS]
    if want_loc:
        out.append((LOC, os.path.join(paths.GAMEDATA, 'loc'), lambda n: n.startswith(LOC_PREFIXES)))
    if want_md:
        out += [(f'{STATIC}/{d}', os.path.join(paths.GAMEDATA, d), None) for d in MD_DIRS]
        out.append((LOC_EN, os.path.join(paths.GAMEDATA, 'loc_en'), lambda n: n.startswith(('EN_Enemies', 'EN_MirrorDungeonTheme'))))
    return out

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

def sync_via_git(pairs):
    """api.github.com·raw.githubusercontent.com이 막힌 환경(예: 클라우드 루틴)용: git 얕은 복제(sparse)로 받아 복사한다."""
    import shutil, subprocess
    clone = os.path.join(paths.WORK, 'openlethe')
    if os.path.isdir(os.path.join(clone, '.git')):
        # 원본 저장소 기록이 다시 쓰인 적이 있어 pull은 'unrelated histories'로 실패할 수 있음 → fetch 후 reset
        subprocess.run(['git', '-C', clone, 'fetch', '-q', '--depth', '1', 'origin', BRANCH], check=True)
        subprocess.run(['git', '-C', clone, '-c', 'core.autocrlf=false', 'reset', '-q', '--hard', 'FETCH_HEAD'], check=True)
    else:
        shutil.rmtree(clone, ignore_errors=True)
        # core.autocrlf=false: Windows에서도 원본 바이트 그대로 받아야 API로 받은 파일과 비교가 맞음
        subprocess.run(['git', '-c', 'core.autocrlf=false', 'clone', '-q', '--depth', '1', '--filter=blob:none', '--sparse',
                        f'https://github.com/{REPO}', clone], check=True)
    subprocess.run(['git', '-C', clone, 'config', 'core.autocrlf', 'false'], check=True)
    subprocess.run(['git', '-C', clone, 'sparse-checkout', 'set'] + sorted({r for r, _, _ in pairs}), check=True)
    changed = []
    for remote_dir, local_dir, name_filter in pairs:
        os.makedirs(local_dir, exist_ok=True)
        src_dir = os.path.join(clone, *remote_dir.split('/'))
        for name in sorted(os.listdir(src_dir)):
            if name_filter and not name_filter(name):
                continue
            data = open(os.path.join(src_dir, name), 'rb').read()
            dst = os.path.join(local_dir, name)
            if os.path.exists(dst) and open(dst, 'rb').read() == data:
                continue
            status = 'changed' if os.path.exists(dst) else 'new'
            open(dst, 'wb').write(data)
            changed.append(f'{status}\t{os.path.relpath(dst, paths.GAMEDATA)}')
    return changed

def main():
    out = []
    pairs = targets('--loc' in sys.argv, '--md' in sys.argv)
    try:
        for remote_dir, local_dir, name_filter in pairs:
            out += sync(remote_dir, local_dir, name_filter)
    except Exception as ex:  # API 접속이 막혔거나 요청 제한
        print(f'GitHub API로 받기 실패({ex}) → git 복제로 대신 받습니다')
        out = sync_via_git(pairs)
    if '--md' in sys.argv:
        out += sync_extra()
    print('\n'.join(out) if out else '변경 없음')
    open(os.path.join(paths.REPORTS, 'fetch_static.txt'), 'w', encoding='utf-8').write('\n'.join(out))

if __name__ == '__main__':
    main()
