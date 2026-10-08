"""사이트 데이터 무결성 점검 (브라우저 없이 실행 가능). 업데이트 후 커밋 전에 돌린다.

    python tools/check/check_data.py

- 데이터 파일(app.js, image_refs.js, enemy_data.js, ego_gift_data.js, sync_data.js)이 참조하는 images/ 경로가 실제로 있는지
- 주요 데이터 객체가 파싱되는지, 인격 수·E.G.O 수가 데이터 객체끼리 맞는지
- sync_data.js가 JSON으로 읽히는지
문제가 있으면 종료 코드 1."""
import json, os, re, sys
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import paths
sys.path.insert(0, os.path.join(paths.TOOLS, 'gamedata'))
import jsobj

def main():
    errors, notes = [], []
    R = paths.REPO
    refs = set()
    for f in ('app.js', 'image_refs.js', 'enemy_data.js', 'ego_gift_data.js'):
        refs |= set(re.findall(r'["\'](images/[^"\']+\.(?:webp|png|jpg|svg))["\']', open(os.path.join(R, f), encoding='utf-8').read()))
    missing = sorted(p for p in refs if not os.path.exists(os.path.join(R, p)))
    notes.append(f'이미지 참조 {len(refs)}개')
    if missing:
        errors.append(f'없는 이미지 {len(missing)}개: {missing[:10]}')

    for name in ('IDENTITY_SKILL_DETAIL', 'IDENTITY_SKILL_PROFILE', 'IDENTITY_PASSIVE', 'IDENTITY_SPECIAL_SKILLS',
                 'IDENTITY_KEYWORDS_DATA', 'EGO_DATA', 'EGO_SKILL_DETAIL', 'EGO_PASSIVE_DETAIL', 'EGO_COST_DETAIL'):
        try:
            obj = jsobj.load(name)
            notes.append(f'{name}: {len(obj)}')
        except Exception as ex:
            errors.append(f'{name} 파싱 실패: {ex}')
    try:
        det, ego = jsobj.load('IDENTITY_SKILL_DETAIL'), jsobj.load('EGO_DATA')
        for name in ('IDENTITY_SKILL_PROFILE', 'IDENTITY_PASSIVE', 'IDENTITY_KEYWORDS_DATA'):
            d = set(jsobj.load(name)) ^ set(det)
            if d: errors.append(f'{name}와 IDENTITY_SKILL_DETAIL의 인격 목록 차이: {sorted(d)[:5]}')
        for name in ('EGO_SKILL_DETAIL', 'EGO_PASSIVE_DETAIL', 'EGO_COST_DETAIL'):
            d = set(jsobj.load(name)) ^ set(ego)
            if d: errors.append(f'{name}와 EGO_DATA의 E.G.O 목록 차이: {sorted(d)[:5]}')
    except Exception as ex:
        errors.append(f'교차 점검 실패: {ex}')

    t = open(os.path.join(R, 'sync_data.js'), encoding='utf-8').read()
    for name in ('IDENTITY_UPTIE', 'EGO_THREADSPIN'):
        m = re.search(r'const %s = (.*?);\n' % name, t, re.S)
        try:
            notes.append(f'{name}: {len(json.loads(m.group(1)))}')
        except Exception as ex:
            errors.append(f'sync_data.js {name} 읽기 실패: {ex}')

    print('\n'.join(notes))
    if errors:
        print('문제:\n  ' + '\n  '.join(errors)); sys.exit(1)
    print('이상 없음')

if __name__ == '__main__':
    main()
