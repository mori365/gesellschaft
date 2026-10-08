"""나무위키 HTML을 줄 구조를 살린 텍스트로 바꾼다 (본문 훑어보기·grep용).
    python tools/namu/to_text.py 입력.html 출력.txt
상대 경로가 현재 폴더에 없으면 tools/_work/namu/ 기준으로 찾는다."""
import re, html as H, sys, os
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import paths

def resolve(p):
    return p if os.path.isabs(p) or os.path.exists(p) else os.path.join(paths.NAMU, p)

def html_to_text(t):
    t = re.sub(r'<script.*?</script>|<style.*?</style>', ' ', t, flags=re.S)
    t = re.sub(r'<(br|/p|/div|/li|/tr|/h\d)[^>]*>', '\n', t)
    t = re.sub(r'<[^>]+>', ' ', t)
    t = H.unescape(t)
    t = re.sub(r'[ \t\u00a0]+', ' ', t)
    return re.sub(r'\n\s*\n+', '\n', t)

if __name__ == '__main__':
    src, dst = sys.argv[1], sys.argv[2]
    out = html_to_text(open(resolve(src), encoding='utf-8').read())
    open(resolve(dst) if not os.path.isabs(dst) else dst, 'w', encoding='utf-8').write(out)
    print(len(out))
