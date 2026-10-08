# -*- coding: utf-8 -*-
"""build_enemy_chapter.py 결과(tools/_work/reports/enemy_new.json)를 enemy_data.js 끝에 기존 항목과 같은 형식으로 덧붙인다.
이미 있는 장(편이 있으면 장+편)이면 중단한다. --dry 결과(이미지가 URL인 상태)는 넣지 않는다.

    python tools/namu/append_enemies.py [입력.json]"""
import json, os, re, sys
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import paths

JS = os.path.join(paths.REPO, 'enemy_data.js')
FIELDS = ["name","chapter","chapterNum","part","group","image","hp","speed","defense","staggerThreshold",
          "resistances","keywords","skills","panicType","passives","bodyParts","ego","egoGift","role","phase","skillIcons"]

def js_val(v):
    if v is None: return 'null'
    if isinstance(v, str): return json.dumps(v, ensure_ascii=False)
    if isinstance(v, list): return '[' + ','.join(js_val(x) for x in v) + ']'
    if isinstance(v, dict): return '{' + ','.join(f'{json.dumps(k, ensure_ascii=False)}:{js_val(x)}' for k, x in v.items()) + '}'
    return json.dumps(v)

def main():
    path = sys.argv[1] if len(sys.argv) > 1 else os.path.join(paths.REPORTS, 'enemy_new.json')
    recs = json.load(open(path, encoding='utf-8'))
    if any(str(r.get('image') or '').startswith('http') for r in recs):
        sys.exit('이미지가 URL 상태입니다 (--dry 결과). build_enemy_chapter.py를 --dry 없이 다시 실행하세요.')
    src = open(JS, encoding='utf-8').read()
    for ch, part in {(r['chapter'], r.get('part')) for r in recs}:
        if part:
            if re.search(r'chapter:"%s",chapterNum:\d+,part:"%s"' % (re.escape(ch), re.escape(part)), src):
                sys.exit(f'이미 있는 편: {ch} {part}')
        elif f'chapter:"{ch}"' in src:
            sys.exit(f'이미 있는 장: {ch}')
    lines = []
    for r in recs:
        for s in r.get('skills') or []:
            s.setdefault('coinEffects', None)
        lines.append('  {' + ','.join(f'{f}:{js_val(r.get(f))}' for f in FIELDS if f in r) + '},')
    end = src.rindex('\n];')
    src = src[:end] + '\n' + '\n'.join(lines) + src[end:]
    open(JS, 'w', encoding='utf-8').write(src)
    print('appended', len(lines))

if __name__ == '__main__':
    main()
