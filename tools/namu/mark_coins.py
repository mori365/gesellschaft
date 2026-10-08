"""나무위키 HTML에서 코인 번호 이미지(alt='림버스컴퍼니 N')를 [코인N] 표식으로 바꿔 텍스트로 변환하고,
start~end 문구 사이 구간만 저장한다. 인격·E.G.O 스킬의 코인별 효과를 옮겨 적을 때 쓴다.
    python tools/namu/mark_coins.py 입력.html 출력.txt "시작 문구" "끝 문구"
예) 시작 "2.3.10. 오트쿠튀르::르누아르 브랜드 매니저", 끝 "브랜드 매니저, 돈키호테의 이야기"
상대 경로는 tools/_work/namu/ 기준."""
import re, html as H, sys, os
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import paths
D = paths.NAMU
src, dst, start, end = sys.argv[1:5]
t = open(os.path.join(D, src), encoding='utf-8').read()
t = re.sub(r'<script.*?</script>|<style.*?</style>', ' ', t, flags=re.S)
t = re.sub(r"<img[^>]*alt='림버스컴퍼니 (\d+)'[^>]*>", r' [코인\1] ', t)
t = re.sub(r'<(br|/p|/div|/li|/tr|/h\d)[^>]*>', '\n', t)
t = re.sub(r'<[^>]+>', ' ', t)
t = H.unescape(t)
t = re.sub(r'(\[코인(\d+)\]\s*)+', lambda m: f'[코인{m.group(2)}] ', t)
t = re.sub(r'[ \t ]+', ' ', t)
t = re.sub(r'\n\s*\n+', '\n', t)
i = t.find(start)
j = t.find(end, i + len(start))
open(os.path.join(D, dst), 'w', encoding='utf-8').write(t[i:j if j > 0 else None])
print(i, j)
