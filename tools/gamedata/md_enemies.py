"""게임 데이터(fetch_static.py --md 로 받은 것)에서 거울 던전 테마팩별 등장 적을 모은다. theme_packs.py가 불러 쓴다.

    python tools/gamedata/md_enemies.py [테마 이름]   # 확인용 출력

- 테마(mirrordungeon-theme-floor)의 mapGenOption 전투 풀 → 전투(battle-mirrordungeon)의 waveList 유닛(unitList·subUnitList) → 유닛(enemy·abnormality-unit)의 nameID → 이름.
- 이름은 2026-10-02 한국어 사본(kr_enemy_names·kr_theme_names_20261002.json) 우선, 없으면(그 뒤 추가된 것) 영어 이름.
  테마의 desc는 개발용 이름이라 화면 이름과 다를 때가 많아, 테마 id → 현지화 이름으로 맞춘다."""
import glob, json, os, re, sys
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import paths

POOLS = [('battlePool', 'normal'), ('abBattlePool', 'abnormality'), ('hardBattlePool', 'hard'),
         ('hardAbBattlePool', 'hardAbnormality'), ('bossPool', 'boss')]
KR_SNAPSHOT = os.path.join(paths.TOOLS, 'gamedata', 'kr_enemy_names_20261002.json')
KR_THEMES = os.path.join(paths.TOOLS, 'gamedata', 'kr_theme_names_20261002.json')

def norm(s): return re.sub(r'\s+', '', s or '')

def _load(path): return json.load(open(path, encoding='utf-8-sig'))

def _list(sub):
    out = []
    for f in sorted(glob.glob(os.path.join(paths.GAMEDATA, sub, '*.json'))):
        out += _load(f).get('list', [])
    return out

def available():
    return os.path.isdir(os.path.join(paths.GAMEDATA, 'mirrordungeon-theme-floor'))

def theme_names():
    """테마 id → 화면 이름 (한국어 사본 우선, 없으면 영어)"""
    names = {int(k): v for k, v in _load(KR_THEMES)['names'].items()}
    for f in glob.glob(os.path.join(paths.GAMEDATA, 'loc_en', 'EN_MirrorDungeonTheme*.json')):
        for x in _load(f).get('dataList', []):
            if x.get('name'): names.setdefault(int(x['id']), x['name'])
    return names

def theme_sprites():
    """{norm(테마 이름): 테마팩 그림 이름(uiConfigs.packSpriteId, 예: 'Canto_I')}"""
    names = theme_names()
    out = {}
    for t in _list('mirrordungeon-theme-floor'):
        name = (names.get(t['id']) or t.get('desc') or '').strip()
        sprite = (t.get('uiConfigs') or {}).get('packSpriteId')
        if name and sprite: out.setdefault(norm(name), sprite)
    return out

def theme_events():
    """{norm(테마 이름): {'name', 'events': [이벤트 id, ...]}} — 테마의 eventPool(그 테마에서 나올 수 있는 선택지)"""
    names = theme_names()
    out = {}
    for t in _list('mirrordungeon-theme-floor'):
        name = (names.get(t['id']) or t.get('desc') or '').strip()
        if not name: continue
        e = out.setdefault(norm(name), {'name': name, 'events': []})
        for eid in (t.get('mapGenOption') or {}).get('eventPool') or []:
            if eid not in e['events']: e['events'].append(eid)
    return out

def theme_enemies():
    """{norm(테마 이름): {'name', 'normal': [...], 'abnormality': [...], 'hard': [...], 'hardAbnormality': [...], 'boss': [...]}}
    각 목록은 전투(풀 안의 전투 하나)마다 등장 적 이름 목록. 같은 구성의 전투는 한 번만 넣는다."""
    stages = {s['id']: s for s in _list('battle-mirrordungeon')}
    units = {u['id']: u for u in _list('enemy') + _list('abnormality-unit')}
    snap = _load(KR_SNAPSHOT)
    kr = {int(k): v for k, v in snap['names'].items()}
    from_en = snap.get('fromEnglish', {})
    en = {}
    for f in glob.glob(os.path.join(paths.GAMEDATA, 'loc_en', 'EN_Enemies*.json')):
        for x in _load(f).get('dataList', []):
            if x.get('name'): en.setdefault(int(x['id']), x['name'])
    theme_name = theme_names()

    def unit_name(uid):
        nid = units.get(uid, {}).get('nameID', uid)
        if kr.get(nid) or kr.get(uid): return kr.get(nid) or kr.get(uid)
        e = en.get(nid) or en.get(uid)
        return from_en.get(e, e)

    def stage_names(sid):
        names = []
        for w in stages.get(sid, {}).get('waveList', []):
            for u in (w.get('unitList') or []) + (w.get('subUnitList') or []):
                n = unit_name(u['unitID'])
                if n and n not in names: names.append(n)
        return names

    out = {}
    for t in _list('mirrordungeon-theme-floor'):
        name = (theme_name.get(t['id']) or t.get('desc') or '').strip()
        if not name: continue
        e = out.setdefault(norm(name), {'name': name, **{k: [] for _, k in POOLS}})
        opt = t.get('mapGenOption') or {}
        for pool, key in POOLS:
            for sid in opt.get(pool) or []:
                ns = stage_names(sid)
                if ns and ns not in e[key]: e[key].append(ns)
    return out

if __name__ == '__main__':
    data = theme_enemies()
    want = norm(' '.join(sys.argv[1:]))
    for k, e in data.items():
        if want and want != k: continue
        print(e['name'])
        for _, key in POOLS:
            if e[key]: print(f'  {key}: ' + ' | '.join(', '.join(x) for x in e[key]))
    print(f'테마 {len(data)}개')
