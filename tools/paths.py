"""tools/ 스크립트가 공통으로 쓰는 경로. 저장소 위치 기준이라 어느 컴퓨터(클라우드 포함)에서도 그대로 동작한다.
- REPO: 저장소 루트 (app.js, sync_data.js, enemy_data.js 등이 있는 곳)
- WORK: 내려받은 게임 데이터·나무위키 HTML·중간 결과를 두는 곳 (git에 올리지 않음, .gitignore 참고)"""
import os, sys

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TOOLS = os.path.join(REPO, 'tools')
WORK = os.path.join(TOOLS, '_work')
GAMEDATA = os.path.join(WORK, 'gamedata')   # OpenLethe static data 사본
NAMU = os.path.join(WORK, 'namu')           # 나무위키 HTML 사본
REPORTS = os.path.join(WORK, 'reports')     # 대조 보고서
for d in (WORK, GAMEDATA, NAMU, REPORTS):
    os.makedirs(d, exist_ok=True)
for sub in ('gamedata', 'namu', 'content'):
    p = os.path.join(TOOLS, sub)
    if p not in sys.path:
        sys.path.insert(0, p)
if TOOLS not in sys.path:
    sys.path.insert(0, TOOLS)

# Windows 콘솔(cp949)에서 한글·특수문자 출력이 깨져 죽지 않도록
try:
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')
except Exception:
    pass
