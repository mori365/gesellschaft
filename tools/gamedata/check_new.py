"""게임 데이터와 사이트 데이터(app.js)를 대조해서, 게임에는 있는데 사이트에 없는 인격·E.G.O를 보여준다.
먼저 fetch_static.py(--loc 권장)로 게임 데이터를 내려받아야 한다.

    python tools/gamedata/check_new.py

출력: 새 인격/E.G.O(수감자·등급·데이터 추가일·한국어 이름이 있으면 이름), 상세 보고서는 tools/_work/reports/.
알려진 예외: 2023~2025년의 옛 ZAYIN 일부(게임 데이터에 남은 구버전 항목)는 사이트에 대응 항목이 없어도 정상."""
import glob, json, os, runpy, sys
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import paths

HERE = os.path.dirname(os.path.abspath(__file__))
KNOWN_OLD = {201011, 203011, 205011, 206011, 211011}  # 구버전 ZAYIN (사이트에 대응 없음이 정상)

def loc_names(prefix):
    names = {}
    for f in glob.glob(os.path.join(paths.GAMEDATA, 'loc', prefix + '*.json')):
        for x in json.load(open(f, encoding='utf-8-sig')).get('dataList', []):
            names[x['id']] = (x.get('title') or x.get('name') or '').strip()
    return names

def main():
    cwd = os.getcwd(); os.chdir(HERE)
    try:
        runpy.run_path(os.path.join(HERE, 'build_sync.py'), run_name='__main__')
        g = runpy.run_path(os.path.join(HERE, 'build_ego.py'), run_name='__main__')
    finally:
        os.chdir(cwd)
    S = runpy.run_path(os.path.join(HERE, 'build_sync.py'), run_name='check')
    pnames, enames = loc_names('KR_Personalities'), loc_names('KR_Egos')
    new_id = [u for u in S['unmatched_game']]
    new_ego = [u for u in g['unmatched'] if u[0] not in KNOWN_OLD]
    lines = [f'인격: 게임 {len(S["pers"])} / 사이트 매칭 {len(S["uptie"])} / 사이트에 없음 {len(new_id)}']
    for u in new_id:
        p = next(x for x in S['pers'] if x['id'] == u[0])
        lines.append(f'  - {u[1]} id={u[0]} rank={p.get("rank")} 추가일={p.get("updatedDate")} 내부명={p.get("appearance")} 이름={pnames.get(u[0], "(한국어 이름 아직 없음)")}')
    lines.append(f'E.G.O: 사이트에 없음 {len(new_ego)}')
    for u in new_ego:
        lines.append(f'  - {u[1]} id={u[0]} {u[2]} 추가일={u[5]} 이름={enames.get(u[0], "(한국어 이름 아직 없음)")}')
    um = S['unmatched_ours']
    if um:
        lines.append(f'사이트에만 있고 게임 데이터와 대응 안 됨(수치가 틀렸을 수 있음): {um}')
    print('\n'.join(lines))
    open(os.path.join(paths.REPORTS, 'check_new.txt'), 'w', encoding='utf-8').write('\n'.join(lines))

if __name__ == '__main__':
    main()
