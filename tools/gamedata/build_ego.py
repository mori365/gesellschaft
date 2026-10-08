import json, glob, os, collections, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import jsobj
from build_sync import resolve, lead, SINNERS, load_list, pers, GD

egos = load_list('ego/*.json')
eskill = {s['id']: s for s in load_list('skill/ego-skill-*.json')}
EGO_DATA = jsobj.load('EGO_DATA')
EGO_SKILL = jsobj.load('EGO_SKILL_DETAIL')

rep = []
rep.append('ego keys: ' + str(sorted({k for e in egos for k in e.keys()})))

def max_level(skill):
    return max(lv['gaksungLevel'] for lv in skill['skillData'])

game = []
for e in egos:
    sn = SINNERS[e['characterId'] - 1]
    a = eskill.get(e.get('awakeningSkillId'))
    c = eskill.get(e.get('corrosionSkillId')) if e.get('corrosionSkillId') else None
    if not a: rep.append(f'ego {e["id"]} missing awakening skill'); continue
    ml = max(max_level(a), max_level(c) if c else 0, 4)
    # 각성 스킬의 변형 형태(예: 구멍 → 부셰)는 각성 스킬 ID + 1로 들어 있다
    x = eskill.get(e.get('awakeningSkillId') + 1)
    game.append((e, sn, resolve(a, ml), resolve(c, ml) if c else None, ml, resolve(x, ml) if x else None))

ours = collections.defaultdict(list)
for slug, meta in EGO_DATA.items():
    det = EGO_SKILL.get(slug)
    if not det: continue
    aw = det.get('awakening') or {}
    co = det.get('corrosion') or {}
    ours[meta['sinner']].append((slug, meta['grade'], (lead(aw.get('power')), lead(aw.get('coin'))), (lead(co.get('power')), lead(co.get('coin'))) if co else None))

used = set(); out = {}; unmatched = []
for e, sn, al, cl, ml, xl in game:
    hit = None
    for lvl in (4, ml) if ml > 4 else (4,):
        ga = (al[lvl - 1]['power'], al[lvl - 1]['coin'])
        gc = (cl[lvl - 1]['power'], cl[lvl - 1]['coin']) if cl else None
        cands = [s for s, g, oa, oc in ours[sn] if s not in used and g == e['egoType'] and oa == ga and (oc == gc or (oc is None and gc is None))]
        if len(cands) != 1:
            cands = [s for s, g, oa, oc in ours[sn] if s not in used and g == e['egoType'] and oa == ga]
        if len(cands) == 1:
            hit = (cands[0], lvl); break
    if not hit:
        unmatched.append((e['id'], sn, e['egoType'], [(x['power'], x['coin']) for x in al], [(x['power'], x['coin']) for x in cl] if cl else None, e.get('updatedDate'))); continue
    slug, lvl = hit; used.add(slug)
    pk = lambda L: [{k: t[k] for k in ('power','coin','n','corr','weight','sin','atk')} | {'fxDiff': t['fx'] != L[lvl - 1]['fx']} for t in L]
    out[slug] = {'gid': e['id'], 'maxLevel': ml, 'textLevel': lvl, 'awakening': pk(al), 'corrosion': pk(cl) if cl else None, 'alt': pk(xl) if xl else None}

rep.append(f'egos: game={len(game)} ours={sum(len(v) for v in ours.values())} matched={len(out)}')
rep.append('text level (level our scraped numbers correspond to): ' + str(dict(collections.Counter(v['textLevel'] for v in out.values()))))
rep.append('maxLevel: ' + str(dict(collections.Counter(v['maxLevel'] for v in out.values()))))
rep.append(f'unmatched game ({len(unmatched)}):'); rep += ['  ' + str(x) for x in unmatched]
um = [(s, g, oa, oc) for sn in ours for s, g, oa, oc in ours[sn] if s not in used]
rep.append(f'unmatched ours ({len(um)}):'); rep += ['  ' + str(x) for x in um]
# coin count comparison vs our key-based inference
diffs = []
for slug, v in out.items():
    for k in ('awakening', 'corrosion'):
        if not v[k]: continue
        ce = (EGO_SKILL[slug].get(k) or {}).get('coinEffects') or {}
        inferred = max([int(x) for x in ce.keys()] or [1])
        real = v[k][v['textLevel'] - 1]['n']
        if inferred != real: diffs.append((slug, k, inferred, real))
rep.append(f'EGO coin count: inferred-from-effects vs game differ for {len(diffs)} skills, e.g. {diffs[:8]}')
json.dump(out, open(os.path.join(GD, 'ego_matched.json'), 'w', encoding='utf-8'), ensure_ascii=False)
open(os.path.join(GD, 'build_ego_report.txt'), 'w', encoding='utf-8').write('\n'.join(rep))
