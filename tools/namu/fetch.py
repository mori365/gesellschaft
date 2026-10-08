"""나무위키 문서를 tools/_work/namu/ 에 저장한다. 서버 부담을 줄이려고 요청 사이에 5초 쉰다.
이미 받은 문서는 --force 없이는 다시 받지 않는다.

    python tools/namu/fetch.py "Limbus Company/전투/10장/상편" "돈키호테(Project Moon 세계관)/인게임 정보"

주요 문서 이름 (2026-10 기준):
- 수감자 인격·E.G.O 본문: "<수감자 문서>/인게임 정보"
  (이상·파우스트·돈키호테는 "이름(Project Moon 세계관)", 나머지는 이름 그대로. 예: "뫼르소/인게임 정보")
- 인격·E.G.O 목록: "Limbus Company/인격 & E.G.O"
- 전투(적): "Limbus Company/전투/목록", "Limbus Company/전투/N장" (10장은 "10장/상편·중편·하편")
- 키워드: "Limbus Company/키워드", 전투 규칙: "Limbus Company/전투"
"""
import os, re, sys, time, urllib.parse, urllib.request
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import paths

UA = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept-Language': 'ko-KR,ko;q=0.9'}
DELAY = 5
_last = [0.0]

def local_path(title):
    return os.path.join(paths.NAMU, re.sub(r'[\\/:*?"<>|]', '_', title) + '.html')

def fetch(title, force=False):
    """문서 HTML 문자열을 돌려준다(필요하면 내려받음)."""
    dst = local_path(title)
    if os.path.exists(dst) and not force:
        return open(dst, encoding='utf-8', errors='replace').read()
    wait = DELAY - (time.time() - _last[0])
    if wait > 0:
        time.sleep(wait)
    url = 'https://namu.wiki/w/' + urllib.parse.quote(title)
    data = urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=90).read().decode('utf-8', 'replace')
    _last[0] = time.time()
    open(dst, 'w', encoding='utf-8').write(data)
    return data

def last_modified(html):
    m = re.search(r'최근 수정 시각:\s*(?:<[^>]+>\s*)*(\d{4}-\d{2}-\d{2}[ T]\d{2}:\d{2}:\d{2})', html)
    return m.group(1) if m else None

if __name__ == '__main__':
    force = '--force' in sys.argv
    for t in [a for a in sys.argv[1:] if a != '--force']:
        h = fetch(t, force)
        print(f'{t}\t{len(h)} bytes\t최근 수정 {last_modified(h)}\t-> {local_path(t)}')
