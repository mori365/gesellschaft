# -*- coding: utf-8 -*-
"""나무위키 전투 문서에서 적을 추출해 tools/_work/reports/enemy_new.json 으로 저장한다 (초상화·스킬 아이콘은 images/ 에 저장).
결과를 사이트에 넣는 건 append_enemies.py.

    # 먼저 --dry 로 정리 결과(이름·그룹·페이즈·아이콘 수)만 확인 → tools/_work/reports/enemy_new_report.txt
    python tools/namu/build_enemy_chapter.py --dry "Limbus Company/전투/10장/상편=10장 상편" "Limbus Company/전투/10장/중편=10장 중편"
    # 이상 없으면 --dry 없이 실행 (이미지 다운로드, 요청 간 2초)
    python tools/namu/build_enemy_chapter.py "Limbus Company/전투/10장/상편=10장 상편" ...

- 인자 형식: "나무위키 문서 이름=장 이름" 또는 "나무위키 문서 이름=장 이름=편 이름".
  한 장이 여러 문서(편)로 나뉘면 장 이름을 같게 주고 편 이름을 붙인다 → 사이트에서 한 장 버튼으로 묶이고 카드에 편이 표시됨.
  예) "Limbus Company/전투/10장/상편=10장=상편" "Limbus Company/전투/10장/중편=10장=중편"
  chapterNum은 같은 장이 이미 있으면 그 값, 새 장이면 기존 최댓값 다음부터 매긴다.
- 보스의 'N페이즈' 제목은 이름을 보스 이름으로 바꾸고 phase에 기록, 그 아래 개체는 role='sub'.
- 스테이터스가 없는 항목은 버린다. 스킬 수와 아이콘 수가 다르면 skillIcons(아이콘 모음)로 둔다.
- 2026-10-08 10장(상·중·하편) 44개를 이 스크립트로 넣었다 (chapter "10장" + part "상편/중편/하편")."""
import json, os, re, sys, time, io, urllib.request, html as H
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import paths
import enemy_parser as P
from fetch import fetch as fetch_page

ROOT = paths.REPO
UA = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', 'Referer': 'https://namu.wiki/'}
IMG_TAG = re.compile(r'<img[^>]*>')
PHASE = re.compile(r'^\d페이즈$')
OUT_JSON = os.path.join(paths.REPORTS, 'enemy_new.json')
OUT_REPORT = os.path.join(paths.REPORTS, 'enemy_new_report.txt')

def img_list(seg):
    out = []
    for m in IMG_TAG.finditer(seg):
        tag = m.group(0)
        src = re.search(r"data-src=['\"]([^'\"]+)", tag) or re.search(r"src=['\"](//i\.namu\.wiki[^'\"]+)", tag)
        if not src: continue
        alt = re.search(r"alt=['\"]([^'\"]*)", tag)
        u = src.group(1); u = 'https:' + u if u.startswith('//') else u
        out.append((m.start(), H.unescape(alt.group(1)) if alt else '', u))
    return out

def is_skill_icon(alt):
    return alt.endswith('...') or re.search(r'스킬\d+$', alt)

def portrait(seg):
    # 초상화는 항목 구간 맨 앞(스테이터스 표 위)의 첫 일반 이미지 — alt가 '…'로 잘려 있을 수 있음
    for _, alt, u in img_list(seg[:5000]):
        if alt.startswith(('림버스', '투명')) or 'UI' in alt: continue
        return u
    return None

def skill_icons(seg):
    out = []
    head = portrait(seg)
    for _, alt, u in img_list(seg):
        if not is_skill_icon(alt) or '범용스킬' in alt or alt.startswith('림버스') or u == head: continue
        if out and out[-1] == u: continue  # 같은 이미지가 두 번씩(라이트/다크) 들어 있음
        out.append(u)
    return out

def chapter_nums():
    src = open(os.path.join(ROOT, 'enemy_data.js'), encoding='utf-8').read()
    return {c: int(n) for c, n in re.findall(r'chapter:"([^"]+)",chapterNum:(\d+)', src)}

def extract(parts):
    records = []
    nums = chapter_nums()
    for spec in parts:
        title, chapter = spec[0], spec[1]
        part = spec[2] if len(spec) > 2 else None
        if chapter not in nums:
            nums[chapter] = max(nums.values()) + 1
        cnum = nums[chapter]
        html = fetch_page(title)
        heads = [(m.group(2), m.end(), m.start()) for m in P.HEADING_RE.finditer(html)]
        bounds = {num: (end, heads[i + 1][2] if i + 1 < len(heads) else len(html)) for i, (num, end, _) in enumerate(heads)}
        titles = {mm.group(2): H.unescape(mm.group(3).strip()) for mm in P.HEADING_RE.finditer(html)}
        rep = []
        for e in P.parse_page(html, chapter, rep):
            if e.get('hp') is None: continue  # 스테이터스 없는 항목 제외
            num = e.pop('_num'); a, b = bounds[num]
            seg = html[a:b]
            parent = num.rsplit('.', 1)[0]
            grand = parent.rsplit('.', 1)[0] if '.' in parent else None
            rec = dict(e); rec['chapter'] = chapter; rec['chapterNum'] = cnum
            if part: rec['part'] = part
            rec['_portrait'] = portrait(seg); rec['_icons'] = skill_icons(seg)
            has_children = any(n.startswith(num + '.') for n in bounds)
            if PHASE.match(e['name']):                       # 보스의 N페이즈 → 이름은 보스, phase 기록
                boss = titles[parent]
                rec.update(name=boss, group=boss, role='main', phase=e['name'])
            elif PHASE.match(titles.get(parent, '')):          # 페이즈 아래 하위 개체
                boss = titles[grand]
                rec.update(group=boss, role='sub', phase=titles[parent])
            elif has_children:                               # 하위 개체를 거느린 보스
                rec.update(group=e['name'], role='main')
            elif titles.get(parent) and any(r.get('role') == 'main' and r['name'] == titles[parent] and r['chapter'] == chapter for r in records):
                rec.update(group=titles[parent], role='sub')  # 그 보스의 하위 개체
            records.append(rec)
    return records

def save_image(url, d):
    nums = [int(n.split('.')[0]) for n in os.listdir(os.path.join(ROOT, d)) if n.split('.')[0].isdigit()]
    rel = f'{d}/{max(nums) + 1}.webp'
    from PIL import Image
    data = urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=40).read()
    im = Image.open(io.BytesIO(data))
    im = im.convert('RGBA' if im.mode in ('RGBA', 'LA', 'P') else 'RGB')
    im.save(os.path.join(ROOT, rel), 'WEBP', quality=85)
    time.sleep(2)
    return rel

def main():
    dry = '--dry' in sys.argv
    parts = [tuple(a.split('=')) for a in sys.argv[1:] if a != '--dry']
    if not parts:
        print(__doc__); return
    records = extract(parts)
    cache = {}
    def img(url, d):
        if dry: return url
        if url not in cache: cache[url] = save_image(url, d)
        return cache[url]
    report = []
    for r in records:
        url = r.pop('_portrait'); icons = r.pop('_icons')
        r['image'] = img(url, 'images/enemies') if url else None
        sk = r.get('skills') or []
        if icons and len(icons) == len(sk):
            for s, u in zip(sk, icons): s['icon'] = img(u, 'images/enemy_skills')
            r['skillIcons'] = None
        elif icons:
            r['skillIcons'] = [{'alt': '', 'icon': img(u, 'images/enemy_skills')} for u in icons]
        else:
            r['skillIcons'] = None
        report.append(f"{r['chapter']}{' ' + r['part'] if r.get('part') else ''} | {r['name']} | group={r.get('group')} role={r.get('role')} phase={r.get('phase')} | sk={len(sk)} icons={len(icons)} | img={'Y' if r['image'] else 'N'} | pas={len(r.get('passives') or [])}")
    json.dump(records, open(OUT_JSON, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    open(OUT_REPORT, 'w', encoding='utf-8').write('\n'.join(report))
    print('\n'.join(report))
    print(len(records), 'records', '(dry — 이미지 안 받음, append 하지 말 것)' if dry else f'-> {OUT_JSON}')

if __name__ == '__main__':
    main()
