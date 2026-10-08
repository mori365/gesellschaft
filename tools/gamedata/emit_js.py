import json, os
import sys
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import paths
GD = paths.GAMEDATA
OUT = os.path.join(paths.REPO, 'sync_data.js')
up = json.load(open(os.path.join(GD, 'uptie_matched.json'), encoding='utf-8'))['uptie']
ATK = {'SLASH': '참격', 'PENETRATE': '관통', 'HIT': '타격'}
eg = json.load(open(os.path.join(GD, 'ego_matched.json'), encoding='utf-8'))

def tier(t):
    d = {'p': t['power'], 'c': t['coin'], 'n': t['n'], 'lc': t['corr'], 's': t['sin']}
    if ATK.get(t.get('atk')): d['a'] = ATK[t['atk']]
    if t.get('weight') is not None: d['w'] = t['weight']
    if t.get('fxDiff'): d['fx'] = 1
    return d

ident = {}
for key, e in up.items():
    sp = {}
    for sk, arr in e['specials'].items():
        levels = [x for x in arr if 'power' in x]
        dt = next((x['defType'] for x in arr if 'defType' in x), None)
        sp[sk] = {'t': [tier(x) for x in levels], 'd': dt}
    ident[key] = {'dc': e['defCorr'], 'dt': e['defType'],
                  'sk': [[tier(x) for x in s] for s in e['skills']],
                  'df': [tier(x) for x in e['defense']],
                  'sp': sp}
ego = {}
for slug, e in eg.items():
    ego[slug] = {'max': e['maxLevel'], 'txt': e['textLevel'],
                 'a': [tier(x) for x in e['awakening']],
                 'c': [tier(x) for x in e['corrosion']] if e['corrosion'] else None}
    if e.get('alt'): ego[slug]['x'] = [tier(x) for x in e['alt']]

header = ("// 게임 static data(LEAGUE-OF-NINE/OpenLethe 저장소의 공식 데이터 덤프, 2026-09-27 갱신본)에서 추출한 단계별 수치.\n"
          "// IDENTITY_UPTIE[\"수감자|인격\"]: sk=스킬1~3, df=수비 각각 동기화 1~4 단계 [{p:기본위력, c:코인위력, n:코인수, lc:스킬 공격레벨 보정, s:죄종, a:공격 유형, w:공격가중치, fx:1이면 이 단계의 코인 효과가 4단계와 다름}],\n"
          "//   dt=수비 유형(GUARD/EVADE/COUNTER), dc=방어레벨 보정, sp=강화/특수 스킬(IDENTITY_SPECIAL_SKILLS의 \"attachTo|순번\")\n"
          "// EGO_THREADSPIN[slug]: a=각성, c=침식, x=각성 변형 형태(있을 때) 각각 해석 1~max 단계, txt=EGO_SKILL_DETAIL 텍스트가 기준으로 삼는 단계\n")
js = header + "const IDENTITY_UPTIE = " + json.dumps(ident, ensure_ascii=False, separators=(',', ':')) + ";\n" \
     + "const EGO_THREADSPIN = " + json.dumps(ego, ensure_ascii=False, separators=(',', ':')) + ";\n"
open(OUT, 'w', encoding='utf-8').write(js)
print(len(js.encode('utf-8')), len(ident), len(ego))
