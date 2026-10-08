"""E.G.O 데이터 객체들의 항목 순서를 (수감자 순서, 등급, 게임 ID=출시 순)으로 통일."""
import os, re, json, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import jsobj
import paths
GD = paths.GAMEDATA
ROOT = paths.REPO
SINNERS = ["이상","파우스트","돈키호테","료슈","뫼르소","홍루","히스클리프","이스마엘","로쟈","싱클레어","오티스","그레고르"]
GRADES = ["ZAYIN","TETH","HE","WAW","ALEPH"]
ed = jsobj.load('EGO_DATA')
gid = {s: v['gid'] for s, v in json.load(open(os.path.join(GD, 'ego_matched.json'), encoding='utf-8')).items()}
assert set(gid) == set(ed), set(ed) ^ set(gid)
def sort_key(slug):
    d = ed[slug]
    return (SINNERS.index(d['sinner']), GRADES.index(d['grade']), gid[slug])

report = []
def reorder(path, names):
    src = open(path, encoding='utf-8').read()
    for name in names:
        s = src.index(f'const {name} = {{\n') + len(f'const {name} = {{\n')
        e = src.index('\n};', s)
        lines = src[s:e].split('\n')
        entries = {}
        for ln in lines:
            if not ln.strip(): continue
            m = re.match(r'^  "((?:[^"\\]|\\.)+)":\s', ln)
            assert m, f'{name}: unexpected line {ln[:80]}'
            key = json.loads('"' + m.group(1) + '"')  # 일부 키는 \uXXXX 이스케이프로 적혀 있음
            entries[key] = ln.rstrip().rstrip(',') + ','
        assert set(entries) == set(ed), f'{name}: key mismatch {set(entries) ^ set(ed)}'
        before = list(entries)
        order = sorted(entries, key=sort_key)
        report.append(f'{name}: {sum(1 for a, b in zip(before, order) if a != b)} positions changed')
        src = src[:s] + '\n'.join(entries[k] for k in order) + src[e:]
    open(path, 'w', encoding='utf-8').write(src)

reorder(os.path.join(ROOT, 'app.js'), ['EGO_DATA', 'EGO_SKILL_DETAIL', 'EGO_PASSIVE_DETAIL', 'EGO_COST_DETAIL'])
reorder(os.path.join(ROOT, 'image_refs.js'), ['EGO_ICON_DATA', 'EGO_SKILL_ICON_DATA'])
ed2 = jsobj.load('EGO_DATA')
for sn in ('로쟈', '홍루', '그레고르'):
    report.append(sn + ': ' + ' / '.join(f"{v['grade']} {v['title']}" for v in ed2.values() if v['sinner'] == sn))
open(os.path.join(GD, 'reorder_out.txt'), 'w', encoding='utf-8').write('\n'.join(report))
