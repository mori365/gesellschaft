import json, glob, os, re, collections, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import jsobj
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import paths
GD = paths.GAMEDATA  # fetch_static.py가 내려받은 게임 데이터
SINNERS = ["이상","파우스트","돈키호테","료슈","뫼르소","홍루","히스클리프","이스마엘","로쟈","싱클레어","오티스","그레고르"]
SIN = {"CRIMSON":"분노","SCARLET":"색욕","AMBER":"나태","SHAMROCK":"탐식","AZURE":"우울","INDIGO":"오만","VIOLET":"질투"}

def load_list(pattern):
    out = []
    for p in sorted(glob.glob(os.path.join(GD, pattern))):
        d = json.load(open(p, encoding='utf-8-sig'))
        out.extend(d.get('list', d) if isinstance(d, dict) else d)
    return out

pers = load_list('personality/*.json')
pskill = {s['id']: s for s in load_list('skill/personality-skill-*.json')}
egos = load_list('ego/*.json')
eskill = {s['id']: s for s in load_list('skill/ego-skill-*.json')}

def resolve(skill, max_level):
    """Delta-encoded skillData -> list of per-level dicts for levels 1..max_level (null / empty = inherit)."""
    by = {lv['gaksungLevel']: lv for lv in skill.get('skillData', [])}
    cur = {'power': None, 'coins': None, 'sin': None, 'atk': None, 'def': None, 'corr': None, 'weight': None}
    out = []
    for L in range(1, max_level + 1):
        lv = by.get(L)
        if lv:
            if lv.get('defaultValue') is not None: cur['power'] = lv['defaultValue']
            if lv.get('attributeType'): cur['sin'] = lv['attributeType']
            if lv.get('atkType'): cur['atk'] = lv['atkType']
            if lv.get('defType'): cur['def'] = lv['defType']
            if lv.get('skillLevelCorrection') is not None: cur['corr'] = lv['skillLevelCorrection']
            if lv.get('targetNum') is not None: cur['weight'] = lv['targetNum']
            if lv.get('coinList'): cur['coins'] = lv['coinList']
        coins = cur['coins'] or []
        cp = coins[0]['scale'] * (-1 if coins[0].get('operatorType') == 'SUB' else 1) if coins else 0
        out.append({'power': cur['power'], 'coin': cp, 'n': len(coins), 'corr': cur['corr'] or 0,
                    'sin': SIN.get(cur['sin']), 'atk': cur['atk'], 'def': cur['def'], 'weight': cur['weight'],
                    'fx': json.dumps([c.get('abilityScriptList') for c in coins], sort_keys=True, ensure_ascii=False)})
    return out

def lead(s):
    m = re.search(r'-?\d+', str(s or ''))
    return int(m.group()) if m else None

# ---------------- identities ----------------
detail = jsobj.load('IDENTITY_SKILL_DETAIL')
ours_by_sinner = collections.defaultdict(list)
for key, v in detail.items():
    sn = key.split('|', 1)[0]
    fp_sk = tuple((lead(s.get('power')), lead(s.get('coin')), int(s.get('coinCount') or 0)) for s in (v.get('skills') or []))
    d = v.get('defense') or {}
    fp_def = (lead(d.get('power')), lead(d.get('coin')))
    ours_by_sinner[sn].append((key, fp_sk, fp_def))

report = []; uptie = {}; unmatched_game = []
used = set()
specials = jsobj.load('IDENTITY_SPECIAL_SKILLS')

def fp_ok(ours_sk, ours_def, g_sk, g_def):
    """ours: first 3 skills (power, coin, count) + defense (power, coin). count ignored when ours is 0 (scrape glitch)."""
    if len(ours_sk) != 3 or len(g_sk) < 3: return False
    for (op, oc, on), (gp, gc, gn) in zip(ours_sk, g_sk[:3]):
        if op != gp or oc != gc: return False
        if on and on != gn: return False
    return ours_def == g_def

def pack(levels, top):
    return [{k: t[k] for k in ('power','coin','n','corr','weight','sin','atk')} | {'fxDiff': t['fx'] != top['fx']} for t in levels]

profile = jsobj.load('IDENTITY_SKILL_PROFILE')
def sins_ok(key, sk):
    prof = profile.get(key)
    if not prof: return True
    ours = [s.get('sin') for s in prof.get('skills', [])][:3]
    return ours == [x[3]['sin'] for x in sk[:3]]

def loose_ok(ours_sk, ours_def, g_sk, g_def):
    if len(ours_sk) != 3 or len(g_sk) < 3: return False
    return all(op == gp and oc == gc for (op, oc, _), (gp, gc, _) in zip(ours_sk, g_sk[:3]))

special_hits = 0; special_miss = []; loose_matches = []
game_rows = []
for p in pers:
    sn = SINNERS[p['characterId'] - 1]
    sk = [resolve(pskill[a['skillId']], 4) if a['skillId'] in pskill else None for a in p.get('attributeList', [])]
    dfs = [resolve(pskill[i], 4) for i in p.get('defenseSkillIDList', []) if i in pskill]
    if any(x is None for x in sk) or not dfs:
        unmatched_game.append((p['id'], sn, 'missing skill ids')); continue
    g_sk = tuple((x[3]['power'], x[3]['coin'], x[3]['n']) for x in sk)
    g_def = (dfs[0][3]['power'], dfs[0][3]['coin'])
    game_rows.append((p, sn, sk, dfs, g_sk, g_def))

assign = {}
for pass_no, ok in ((1, fp_ok), (2, loose_ok)):
    for row in game_rows:
        p, sn, sk, dfs, g_sk, g_def = row
        if p['id'] in assign: continue
        cands = [k for k, fs, fd in ours_by_sinner[sn] if k not in used and ok(fs, fd, g_sk, g_def)]
        if len(cands) > 1:
            cands = [k for k in cands if sins_ok(k, sk)]
        if len(cands) == 1:
            assign[p['id']] = cands[0]; used.add(cands[0])
            if pass_no == 2: loose_matches.append((p['id'], cands[0], g_sk[:3], g_def))

for p, sn, sk, dfs, g_sk, g_def in game_rows:
    if p['id'] not in assign:
        unmatched_game.append((p['id'], sn, 'no unique candidate', g_sk, g_def)); continue
    key = assign[p['id']]
    entry = {'gid': p['id'], 'defCorr': p.get('defCorrection', 0),
             'skills': [pack(x, x[3]) for x in sk[:3]],
             'defense': pack(dfs[0], dfs[0][3]),
             'defType': dfs[0][3]['def'], 'specials': {}}
    # extra skills (강화/특수 스킬) -> our IDENTITY_SPECIAL_SKILLS by tier-4 (power, coin[, count])
    extra = sk[3:] + dfs[1:]
    for si, s in enumerate(specials.get(key, [])):
        sp, sc, scount = lead(s.get('power')), lead(s.get('coin')), int(s.get('coinCount') or 0)
        hits = [x for x in extra if x[3]['power'] == sp and x[3]['coin'] == sc and (not scount or x[3]['n'] == scount)]
        if hits:
            h = hits[0]
            entry['specials'][s['attachTo'] + '|' + str(si)] = pack(h, h[3]) + [{'defType': h[3]['def']}]
            special_hits += 1
        else:
            special_miss.append((key, s['name'], sp, sc, scount))
    uptie[key] = entry

unmatched_ours = [k for sn in ours_by_sinner for k, _, _ in ours_by_sinner[sn] if k not in used]
report.append(f'identities: game={len(pers)} ours={len(detail)} matched={len(uptie)}')
report.append(f'loose (pass 2) matches — our counts/defense differ from game: {len(loose_matches)}')
report += ['  ' + str(x) for x in loose_matches]
report.append(f'special skills matched={special_hits} missed={len(special_miss)}')
report += ['  miss ' + str(x) for x in special_miss]
# our coinCount glitches that game data corrects
fix = []
for key, e in uptie.items():
    for i, s in enumerate(detail[key].get('skills') or []):
        g = e['skills'][i][3]['n']
        if int(s.get('coinCount') or 0) != g: fix.append((key, f'skill{i+1}', s.get('coinCount'), g))
    d = detail[key].get('defense') or {}
    if int(d.get('coinCount') or 0) != e['defense'][3]['n']: fix.append((key, 'defense', d.get('coinCount'), e['defense'][3]['n']))
report.append(f'coinCount corrections (ours -> game): {len(fix)}')
report += ['  ' + str(x) for x in fix[:40]]
# defense type vs our name heuristic
dt = collections.Counter(e['defType'] for e in uptie.values())
report.append(f'defTypes among matched: {dict(dt)}')
mism = [(k, detail[k]["defense"]["name"], e['defType']) for k, e in uptie.items() if ('반격' in (detail[k].get('defense') or {}).get('name', '')) != (e['defType'] == 'COUNTER')]
report.append(f'defense heuristic wrong for {len(mism)}: ' + str(mism[:30]))
report.append(f'unmatched game ({len(unmatched_game)}):')
report += ['  ' + str(x) for x in unmatched_game]
report.append(f'unmatched ours ({len(unmatched_ours)}):')
for k in unmatched_ours:
    v = detail[k]; d = v.get('defense') or {}
    report.append(f'  {k} skills={[(s.get("power"), s.get("coin"), s.get("coinCount")) for s in v.get("skills") or []]} def={(d.get("power"), d.get("coin"))}')

json.dump({'uptie': uptie}, open(os.path.join(GD, 'uptie_matched.json'), 'w', encoding='utf-8'), ensure_ascii=False)
open(os.path.join(GD, 'build_sync_report.txt'), 'w', encoding='utf-8').write('\n'.join(report))
