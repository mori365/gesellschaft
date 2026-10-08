"""[예시 스크립트] 신규 인격·E.G.O를 사이트 데이터에 추가하는 방법의 실제 사례 (2026-10-08, 르누아르 브랜드 매니저 돈키호테 / 구멍 파우스트).
새 콘텐츠를 넣을 때는 이 파일을 복사해서 이름·텍스트·이미지·좌표만 바꿔 쓴다. 이미 추가된 항목이 있으면 assert로 멈춘다.

절차
1. 텍스트: 나무위키 '<수감자>/인게임 정보'를 tools/namu/fetch.py로 받고, mark_coins.py로 해당 구간을 [코인N] 표식과 함께 텍스트로 뽑아
   스킬 이름·위력·코인 효과·패시브를 옮긴다. 링크 때문에 생긴 띄어쓰기('약속된 못 의', '진동 폭발 .')는 정리한다.
   코인별 효과는 기존 데이터처럼 스킬 공통 효과를 1번 코인 앞에 이어 붙인다.
2. 수치 검증: 위력·코인 위력·코인 수·공격 유형은 게임 데이터(fetch_static → check_new)와 일치해야 한다.
   패시브 발동 조건(죄악 자원)은 게임 데이터 personality-passive/passive 의 attributeStockCondition 에서 확인.
3. 이미지: 문서의 <img alt>로 후보를 찾아 IMG 폴더에 png로 받는다(요청 간 2초). 기본/동기화 일러스트(1280x720으로 맞춤),
   카드, 스킬 아이콘(256), E.G.O 아이콘(512 RGBA). 초상화는 얼굴 좌표(fx, fy)를 직접 보고 정한다.
4. 실행 후: python tools/gamedata/check_new.py → emit_js.py(동기화 수치 재생성) → reorder_egos.py(E.G.O 정렬) → tools/check/check_data.py
5. 각성 스킬이 조건부로 다른 스킬이 되는 E.G.O(예: 구멍 → 부셰)는 awakening.alt 로 넣는다(계산기·상세 화면이 지원).
"""
import json, os, re, sys
from PIL import Image
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import paths
ROOT = paths.REPO

# --- add_new_content.py와 같은 헬퍼 (그 스크립트는 import하면 전체가 실행되므로 복사해서 씀) ---
def js(v):
    if v is None: return 'null'
    if isinstance(v, bool): return 'true' if v else 'false'
    if isinstance(v, (int, float)): return str(v)
    if isinstance(v, str): return json.dumps(v, ensure_ascii=False)
    if isinstance(v, list): return '[' + ','.join(js(x) for x in v) + ']'
    def key(k):
        k = str(k)
        return k if re.fullmatch(r'[A-Za-z_$][\w$]*|\d+', k) else json.dumps(k, ensure_ascii=False)
    return '{' + ','.join(f'{key(k)}:{js(x)}' for k, x in v.items()) + '}'
def nextnum(d, prefix=''):
    nums = [int(n[len(prefix):].split('.')[0]) for n in os.listdir(os.path.join(ROOT, d)) if n.startswith(prefix) and n[len(prefix):].split('.')[0].isdigit()]
    return max(nums) + 1
def save(im, d, prefix=''):
    n = nextnum(d, prefix)
    rel = f'{d}/{prefix}{n:04d}.webp' if prefix else f'{d}/{n}.webp'
    path = os.path.join(ROOT, rel)
    assert not os.path.exists(path), path
    im.save(path, 'WEBP', quality=85)
    return rel
def portrait(im, fx, fy):
    left = max(0, min(1280 - 480, fx - 240)); top = max(0, min(720 - 640, fy - 160))
    return im.crop((left, top, left + 480, top + 640)).resize((300, 400), Image.LANCZOS)
def banner(im, fy):
    top = max(0, min(720 - 320, fy - 180))
    return im.crop((0, top, 1280, top + 320)).resize((640, 160), Image.LANCZOS)
def block_bounds(src, name):
    s = src.index(f'const {name} = ')
    e = src.index('\n};', s)
    return s, e
def insert_entry(src, name, line, after_prefix=None):
    s, e = block_bounds(src, name)
    if after_prefix:
        idx = src.rfind('\n' + after_prefix, s, e)
        if idx != -1:
            eol = src.index('\n', idx + 1)
            return src[:eol + 1] + line + '\n' + src[eol + 1:]
    body_end = e
    prev = src[:body_end].rstrip()
    if not prev.endswith(',') and not prev.endswith('{'):
        src = prev + ',' + src[body_end:]
        s, body_end = block_bounds(src, name)
    return src[:body_end] + '\n' + line + src[body_end:]
IMG = os.path.join(paths.WORK, 'new_imgs')  # 3번 단계에서 받은 png들
APP = os.path.join(ROOT, 'app.js'); REFS = os.path.join(ROOT, 'image_refs.js')
SN = '돈키호테'
IK = '돈키호테|오트쿠튀르::르누아르 브랜드 매니저'
H_SLUG = 'le-trou-faust'

def full(name):
    return Image.open(os.path.join(IMG, name + '.png')).convert('RGB').resize((1280, 720), Image.LANCZOS)
def icon(name, size=256, mode='RGB'):
    return Image.open(os.path.join(IMG, name + '.png')).convert(mode).resize((size, size), Image.LANCZOS)

app = open(APP, encoding='utf-8').read()
refs = open(REFS, encoding='utf-8').read()
assert IK not in app, 'already added'
assert H_SLUG not in app, 'already added'

# ---------------- images ----------------
fn, fs = full('don_03'), full('don_01')
paths = {
    'full_normal': save(fn, 'images/portraits_full'),
    'full_synced': save(fs, 'images/portraits_full_synced'),
    'por_normal': save(portrait(fn, 680, 190), 'images/portraits_normal'),
    'por_synced': save(portrait(fs, 640, 265), 'images/portraits_synced'),
    'ban_normal': save(banner(fn, 190), 'images/banners_normal'),
    'ban_synced': save(banner(fs, 265), 'images/banners_synced'),
}
for k, n in (('s1', 'don_04'), ('x1', 'don_05'), ('s2', 'don_06'), ('s3', 'don_07'), ('x2', 'don_08'), ('def', 'don_09')):
    paths['sk_' + k] = save(icon(n), 'images/ui/skill_icons', 'icon_')
paths['ego_h'] = save(icon('hole_00', 512, 'RGBA'), 'images/egos')
paths['hole_awk'] = save(icon('hole_02'), 'images/ui/skill_icons', 'icon_')
paths['hole_cor'] = save(icon('hole_03'), 'images/ui/skill_icons', 'icon_')

# ---------------- data: 돈키호테 ----------------
NAIL = '[사용시] 대상의 진동 위력과 약속된 못의 합'
detail = {
    'skills': [
        {'name': '못 박히라', 'sin': '오만', 'power': '3', 'coin': '+4', 'coinCount': 2, 'coinEffects': {
            1: f'{NAIL} 4당, 최종 위력 +1 [사용시] 자신의 보존 위력이 3 이상이면, 코인 위력 +1, 피해량 +40% [사용시] 자신과 자신을 제외한 충전 횟수가 가장 적은 르누아르 소속 아군 인격 1명의 충전 횟수 4 증가 (턴당 1회) [적중시] 진동 횟수 2 증가',
            2: '[적중시] 자신의 보존 횟수 6 증가'}},
        {'name': '못 생기라', 'sin': '질투', 'power': '6', 'coin': '+5', 'coinCount': 2, 'coinEffects': {
            1: f'{NAIL} 4당, 최종 위력 +1 (최대 3) [사용시] 자신의 보존 위력이 3 이상이면, 코인 위력 +1, 피해량 +30% [공격 시작 전] 최대 공명 수 1당, 마지막 코인의 최종 위력 +1 (최대 4) [적중시] 약속된 못 1 부여 [적중시] 진동 4 부여',
            2: '[적중시] 자신의 보존 횟수 8 증가 [적중시] 진동 횟수 3 증가 [적중시] 진동 폭발. 대상의 진동 횟수 1 감소'}},
        {'name': '탄생을 끊으리라!', 'sin': '나태', 'power': '5', 'coin': '+4', 'coinCount': 3, 'coinEffects': {
            1: f'[전투 시작시] 보존 신역 3 얻음 (턴당 1회) [전투 시작시] 자신과 자신을 제외한 속도가 가장 빠른 르누아르 소속 아군 1명에게 공격 레벨 증가 2, 방어 레벨 증가 2 부여 (턴당 1회) {NAIL} 6당, 코인 위력 +1 (최대 2) [사용시] 자신의 보존 위력이 3 이상이면, 코인 위력 +1, 피해량 +40% [공격 시작 전] 최대 공명 수 1당, 마지막 코인의 최종 위력 +1 (최대 4) [적중시] 약속된 못 1 부여 [적중시] 진동 4 부여',
            2: '[적중시] 진동 횟수 3 증가',
            3: '[적중시] 자신의 보존 횟수 4 증가 [적중시] 진동 - 보존으로 진폭 변환 [적중시] 진동 폭발. 대상의 진동 횟수 1 감소 [적중시] 대상의 약속된 못이 3 이상이면, 진동 폭발. 대상의 진동 횟수 1 감소'}},
    ],
    'defense': {'name': '묵시', 'sin': '나태', 'power': '5', 'coin': '+4', 'coinCount': 2, 'coinEffects': {
        1: f"[반격] [전투 시작시] 보존 신역 3 얻음 (턴당 1회) [전투 시작시] 자신과 자신을 제외한 정신력이 가장 낮은 르누아르 소속 아군 인격 1명의 정신력 6 회복 (턴당 1회) [전투 시작시] 자신의 검은 신의 가호가 - 100이면, 대신 '거듭 내리쳐, 탄생을 끊으리라!'로 발동됨 (턴당 1회, 이 효과는 일방 공격에도 발동함) - 100 미만이면, 자신의 최대 체력의 (검은 신의 가호/10)%만큼 보호막 얻음 (턴당 1회) [전투 시작시] 자신의 보존 횟수 4 증가 (턴당 1회) {NAIL} 6당, 코인 위력 +1 (최대 2) [사용시] 자신의 보존 위력이 3 이상이면, 코인 위력 +1, 피해량 +20% [적중시] 약속된 못 1 부여 [적중시] 진동 횟수 2 증가",
        2: '[적중시] 자신의 보존 횟수 4 증가'}},
}
profile = {'skills': [{'sin': '오만', 'tier': 1, 'num': 3}, {'sin': '질투', 'tier': 2, 'num': 2}, {'sin': '나태', 'tier': 3, 'num': 1}], 'defense': [{'sin': '나태', 'tier': 1}]}
passive = [
    {'name': '말레우스 프로미시오니스', 'sin': None, 'count': None, 'effect': '스테이지 첫 등장 시 자신의 보존 횟수 10 증가하고, 자신을 제외한 르누아르 소속 아군 인격의 충전 횟수 2 증가 스킬 효과로 약속된 못 부여 시 자신의 보존 횟수가 - 12 이상이면, 약속된 못 부여량 +1, 자신의 보존 횟수 4 소모 - 12 미만이면, 자신의 보존 횟수 2 소모 - 부족하면, 대신 약속된 못을 부여하지 않음 - 이 효과로 인해서 약속된 못을 부여하는 스킬이 충전 횟수를 소모하는 스킬로 취급됨 전투 중 누적으로 자신의 보존 횟수를 10 소모할 때마다 보존 위력 1 얻음'},
    {'name': '보존의 사명', 'sin': None, 'count': None, 'effect': '스테이지 첫 등장 시 검은 신의 가호 25 얻음 자신의 보존 횟수를 소모하거나 최대치를 초과하여 얻으면, (해당 수치 x 5)만큼 검은 신의 가호 얻음 (턴당 최대 30) 보호막이 있는 아군 인격이 피격 시 자신이 검은 신의 가호 2 얻음 (턴당 최대 10) - 해당 아군 인격이 충전 인격이면, 대신 검은 신의 가호 5 얻음'},
    {'name': '신의 뜻과 가치가 우리와 함께하리…', 'sin': None, 'count': None, 'effect': "자신을 제외한 르누아르 소속 아군 인격이 적에게 공격 시작 전, 자신이 '심판!'으로 메인 타겟을 우선으로 일방 공격함 (턴당 1회) 기본 스킬의 마지막 코인 시작 시 (자신의 보존 위력 + 대상의 약속된 못/2)만큼 해당 코인의 최종 위력이 증가함 (최대 5) 자신에게 보존 신역이 있으면, 기본 스킬 1/2/3의 합 위력 +1/+2/+3 약속된 못이 있는 대상에게 진동 폭발 발생 시 자신과 자신을 제외한 충전 횟수가 가장 적은 아군 충전 인격 1명의 충전 횟수 2 증가 (턴당 2회)"},
    {'name': '검은 언약', 'sin': None, 'count': None, 'conditions': [{'sin': '오만', 'count': '1'}, {'sin': '질투', 'count': '1'}, {'sin': '나태', 'count': '1'}], 'effect': '전투 종료 시 자신에게 보존 신역이 있으면, 다음 턴에 신속 2 얻음 자신의 기본 공격 스킬로 메인 타겟에게 가하는 피해량 +(자신의 보존 위력 x 6)% (최대 30%)'},
]
specials = [
    {'name': '심판!', 'sin': '오만', 'power': '6', 'coin': '+4', 'coinCount': 1, 'coinEffects': {1: f'[합 불가능] 이 스킬은 아래 효과가 적용됨 - 수비 스킬을 발동시키지 않음 - 외부 효과로 재사용할 수 없음 - 이 스킬 종료 시까지 대상의 체력이 1 미만으로 감소하지 않음 {NAIL} 4당, 최종 위력 +1 (최대 3) [사용시] 자신의 보존 위력이 3 이상이면, 코인 위력 +1, 피해량 +40% [적중시] 약속된 못 1 부여 [적중시] 진동 4 부여'}, 'refNote': '패시브 참조', 'attachTo': 'skill1', 'tier': 1},
    {'name': '거듭 내리쳐, 탄생을 끊으리라!', 'sin': '나태', 'power': '6', 'coin': '+4', 'coinCount': 3, 'coinEffects': {
        1: '이 스킬은 수비 스킬 대신 발동해도 공격 스킬로 취급되어, 수비 위력 변경 효과를 받지 않고, 공격 위력 변경 효과가 적용됨 [전투 시작시] 모든 르누아르 소속 아군 인격에게 공격 레벨 증가 2, 방어 레벨 증가 2 부여 (턴당 1회) [사용시] 모든 공격 대상의 진동 위력과 약속된 못의 합 6당, 코인 위력 +1 (최대 2) [사용시] 자신의 보존 위력이 3 이상이면, 코인 위력 +1 [사용시] 이 스킬 공격 가중치보다 낮은 공격 대상 1당, 피해량 +50% (집중 전투인 경우, 부위로 판정) [공격 시작 전] 최대 공명 수 1당, 마지막 코인의 최종 위력 +2 (최대 8) [공격 종료시] 검은 신의 가호 전부 소모 [적중시] 약속된 못 1 부여 [적중시] 진동 2 부여',
        2: '[적중시] 약속된 못 1 부여 [적중시] 진동 2 부여',
        3: '[적중시] 진동 횟수 3 증가 [적중시] 자신의 보존 횟수 4 증가 (코인당 1회) [적중시] 진동 - 보존으로 진폭 변환 [적중시] 진동 폭발. 대상의 진동 횟수 1 감소 [적중시] 대상별로 약속된 못 수치에 따라 아래 효과 적용 - 약속된 못이 3 이상이면, 진동 폭발. 대상의 진동 횟수 1 감소 - 이 코인의 최종 피해량의 (약속된 못 x 3)%만큼 나태 피해 (최대 90%) - 대상의 약속된 못 전부 소모'}, 'refNote': '수비 스킬 참조', 'attachTo': 'defense', 'tier': 3},
]
data_obj = ('\n    {\n        "sinner":  "돈키호테",\n        "identity":  "오트쿠튀르::르누아르 브랜드 매니저",\n        "rarity":  "000",\n'
            '        "supportPassiveName":  "진형 보존",\n        "condition":  "질투 2 + 나태 2 보유",\n'
            '        "supportPassiveEffect":  "전투 시작 시 전장에 있는 아군 충전 인격 1명당, 이번 턴에 모든 아군 충전 인격이 받는 피해량 -2% (최소 -10%)"\n    },')

# ---------------- data: 구멍 파우스트 ----------------
ego_data = {'sinner': '파우스트', 'title': '구멍 파우스트', 'grade': 'WAW', 'sin': '오만', 'season': 8}
ego_skill = {
    'awakening': {'name': '구멍(le trou)', 'sin': '오만', 'power': '6', 'coin': '+5', 'weight': '1', 'coinEffects': {
        1: "[합 불가능] 전투에서 처음 사용 시 정신력 소모량이 5 감소하고, 필요한 E.G.O 자원이 우울 2, 오만 2, 질투 2 감소 잿빛 탄환이 1 이상이면, '부셰'로 발동됨 이 스킬은 적에게 적중하지 않고, 수비 스킬을 발동시키지 않으며, 외부 효과로 재사용이 불가능함 [공격 종료시] 잿빛 탄환 5 얻음 [공격 종료시] 호흡 위력 5 얻음 [공격 종료시] 호흡 횟수 3 얻음 [공격 종료시] 충전 횟수 5 얻음 [공격 종료시] 검은 날개 4 얻음"},
        'alt': {'name': '부셰(boucher un trou)', 'sin': '오만', 'power': '5', 'coin': '+2', 'weight': '7', 'coinEffects': {
            1: "이 스킬은 외부 효과로 재사용이 불가능함 이 스킬 공격 가중치보다 낮은 공격 대상 1당 피해량 +10% (집중 전투인 경우, 부위로 판정) 자신의 (호흡 위력 + 충전 횟수) 4당 합 위력 +1 (최대 10) 자신의 잿빛 탄환 1당 합 위력 +2 [공격 시작 전] 공격 대상이 1명이면, 피해량 +100% (집중 전투인 경우, 본체로 판정) [공격 시작 전] 잿빛 탄환을 전부 소모하고 아래 효과 적용 - 소모값 1당 호흡 위력 2, 호흡 횟수 1, 충전 횟수 2 얻음 - 소모값 1당 피해량 +8% [공격 종료시] 아군 2+(최대 공명 수)명에게 호흡 위력 5, 호흡 횟수 2 부여 (최대 7명) 이 스킬에서 잿빛 탄환을 5 소모했으면, 정신력 5 회복 [공격 종료시] 잿빛 탄환 1 얻음 파괴 불가 코인 (소모한 잿빛 탄환 - 1)만큼 이 코인 재사용 (최대 4회) [적중시] 침잠 1 부여"}},
    },
    'corrosion': {'name': '구멍', 'sin': '오만', 'power': '16', 'coin': '-3', 'weight': '7', 'coinEffects': {
        1: '[피아식별불가] 무작위 대상 공격 자신의 (호흡 위력 + 충전 횟수) 4당 합 위력 +1 (최대 10) [공격 시작 전] 자신의 호흡 횟수 3, 충전 횟수 5 증가 [공격 시작 전] 자신의 10을 초과하는 충전 횟수를 최대 15까지 소모하여 피해량 +(소모값 × 5)% [공격 시작 전] 자신의 잿빛 탄환이 최대치면, 전부 소모하여 다음 턴에 모든 아군에게 아래 효과 적용 - 공격 레벨 증가 1 부여 - 피해량 증가 1 부여 (턴당 1회) - 크리티컬 피해량 증가 1 부여 (턴당 1회) [공격 시작 전] 파괴된 코인 수당 기본 위력 -3 (최대 -9) [공격 종료시] 잿빛 탄환 1, 검은 날개 2 얻음 [공격 종료시] 무작위 아군 2+(최대 공명 수)명에게 호흡 위력 5, 호흡 횟수 2, 검은 날개 2 부여 (최대 7명) 파괴 불가 코인 [적중시] 침잠 횟수 2 증가',
        2: '파괴 불가 코인 [적중시] 침잠 2 부여',
        3: '파괴 불가 코인'}},
}
ego_passive = {'name': '르 트루 드 비당주(le trou de vidange)', 'effect': "자신의 잿빛 탄환이 5면, '구멍' E.G.O 스킬(각성, 침식) 사용 시 E.G.O 자원을 소모하지 않음 턴 시작 시 잿빛 탄환 1, 검은 날개 1 얻음 아군이 적 처치 시, 해당 캐릭터의 정신력 5 회복하고 다음 턴에 공격 위력 증가 1 부여 (턴당 1회) 충전 횟수 최대치 +5 자신의 충전 횟수를 초과하여 충전 횟수를 얻으면, 초과값만큼 호흡 위력 또는 횟수를 무작위로 얻음 (턴당 최대 6 전환 가능)", 'atkLevel': '65(0) / 68(+3)', 'sp': '끈 35개 필요'}
ego_cost = [{'sin': '우울', 'count': 2}, {'sin': '오만', 'count': 4}, {'sin': '질투', 'count': 2}]

new_keywords = {
    '보존 신역': '최댓값 5. 모든 아군 인격: 스킬 사용 시 각 아군의 최대 체력의 (돈키호테의 보존 위력 × 2)%만큼 보호막(턴당 1회, 최대 10%). 르누아르 소속 인격: 공격 레벨 +(보존 위력/3)(최대 2), 방어 레벨 +(보존 위력/2)(최대 3). 모든 적: 속도 최솟값·최댓값 -1, 진동 폭발 시 받는 흐트러짐 피해량 +10%, 충전 횟수 또는 특수 충전을 소모하는 스킬로 받는 피해량 +10%(르누아르 소속 아군 인격의 스킬이면 2배). 턴 종료 시 수치 1 감소.',
    '검은 신의 가호': '최댓값 100. 턴 시작 시 자신의 최대 체력의 (수치/5)%만큼 보호막. 25 이상이면 기본 공격 스킬 사용 시 모든 코인이 파괴 불가 코인이 됨. 40 이상이면 흐트러짐 상태가 되지 않음(강제 흐트러짐 제외).',
    '약속된 못': '최댓값 30. 스킬 효과로 진동 폭발 시 수치 1당 나태 피해 1(최대 10, 스킬당 1회). 턴 종료 시 수치가 4 이상이면 다음 턴에 속박 1. 턴 시작 시 전장에 오트쿠튀르::르누아르 브랜드 매니저 돈키호테가 없으면 소멸.',
    '보존': '특수 충전. 횟수 최댓값 20. 충전 위력·횟수를 증가/감소시키는 효과를 동일하게 적용받으며, 턴 종료 시 횟수 1 감소.',
    '진동 - 보존': '진동 폭발 시 진동 위력의 (60 + 공격자의 충전 위력 또는 특수 충전 × 8)%만큼 나태 피해를 입고 횟수 1 감소(최대 120%). 르누아르 소속 캐릭터의 스킬·패시브 효과로 진동 폭발 시에는 횟수가 감소하지 않음. 진동 폭발 시 위력만큼 흐트러짐 손상, 턴 종료 후 횟수 1 감소.',
    '잿빛 탄환': "특수 탄환. 최댓값 5. '구멍' E.G.O를 제외한 외부 효과로 얻거나 값이 증가할 수 없음.",
    '검은 날개': '최댓값 12. 턴 시작 시 (수치/4)만큼 충전 횟수 증가(소수점 버림), 수치 4당 공격 레벨 증가 1. 자신의 충전·호흡을 얻거나 소모하는 스킬 피해량 +(수치)%.',
}

# ---------------- insert ----------------
kw_block = app[app.index('const KEYWORD_DEFS'):app.index('const IDENTITY_KEYWORDS_DATA')]
last = app.rindex('"sinner":  "돈키호테"', 0, app.index('const SINS = '))
close = app.index('\n    },', last) + len('\n    },')
app = app[:close] + data_obj + app[close:]
app = insert_entry(app, 'IDENTITY_KEYWORDS_DATA', f'  {js(IK)}: {js(["진동", "충전"])},', '  "돈키호테|')
app = insert_entry(app, 'IDENTITY_SKILL_PROFILE', f'  {js(IK)}: {js(profile)},', '  "돈키호테|')
app = insert_entry(app, 'IDENTITY_SKILL_DETAIL', f'  {js(IK)}: {js(detail)},', '  "돈키호테|')
app = insert_entry(app, 'IDENTITY_PASSIVE', f'  {js(IK)}: {js(passive)},', '  "돈키호테|')
app = insert_entry(app, 'IDENTITY_SPECIAL_SKILLS', f'  {js(IK)}: {js(specials)},', '  "돈키호테|')
app = insert_entry(app, 'EGO_DATA', f'  {js(H_SLUG)}: {js(ego_data)},')
app = insert_entry(app, 'EGO_SKILL_DETAIL', f'  {js(H_SLUG)}: {js(ego_skill)},')
app = insert_entry(app, 'EGO_PASSIVE_DETAIL', f'  {js(H_SLUG)}: {js(ego_passive)},')
app = insert_entry(app, 'EGO_COST_DETAIL', f'  {js(H_SLUG)}: {js(ego_cost)},')
added_kw = []
for k, v in new_keywords.items():
    if f'"{k}":' in kw_block or f'\n  {k}:' in kw_block:
        continue  # 이미 있는 키워드(예: 다른 르누아르 인격이 쓰는 '보존')는 건드리지 않음
    app = insert_entry(app, 'KEYWORD_DEFS', f'  {js(k)}: {js(v)},')
    added_kw.append(k)

refs = insert_entry(refs, 'IDENTITY_BANNER_SYNCED_DATA', f'  {js(IK)}: {js(paths["ban_synced"])},', '  "돈키호테|')
refs = insert_entry(refs, 'IDENTITY_BANNER_NORMAL_DATA', f'  {js(IK)}: {js(paths["ban_normal"])},', '  "돈키호테|')
refs = insert_entry(refs, 'IDENTITY_SKILL_ICON_DATA', f'  {js(IK)}: {js({"skill1": paths["sk_s1"], "skill2": paths["sk_s2"], "skill3": paths["sk_s3"], "def": paths["sk_def"]})},', '  "돈키호테|')
refs = insert_entry(refs, 'IDENTITY_SPECIAL_SKILL_ICON_DATA', f'  {js(IK)}: {js({"심판!": paths["sk_x1"], "거듭 내리쳐, 탄생을 끊으리라!": paths["sk_x2"]})},', '  "돈키호테|')
refs = insert_entry(refs, 'IDENTITY_PORTRAIT_SYNCED_DATA', f'  {js(IK)}: {js(paths["por_synced"])},', '  "돈키호테|')
refs = insert_entry(refs, 'IDENTITY_PORTRAIT_NORMAL_DATA', f'  {js(IK)}: {js(paths["por_normal"])},', '  "돈키호테|')
refs = insert_entry(refs, 'IDENTITY_PORTRAIT_FULL_NORMAL_DATA', f'  {js(IK)}: {js(paths["full_normal"])},', '  "돈키호테|')
refs = insert_entry(refs, 'IDENTITY_PORTRAIT_FULL_SYNCED_DATA', f'  {js(IK)}: {js(paths["full_synced"])},', '  "돈키호테|')
refs = insert_entry(refs, 'EGO_ICON_DATA', f'  {js(H_SLUG)}: {js(paths["ego_h"])},')
refs = insert_entry(refs, 'EGO_SKILL_ICON_DATA', f'  {js(H_SLUG)}: {js({"awakening": paths["hole_awk"], "corrosion": paths["hole_cor"]})},')

open(APP, 'w', encoding='utf-8').write(app)
open(REFS, 'w', encoding='utf-8').write(refs)
open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'add_new_content2_out.txt'), 'w', encoding='utf-8').write(
    json.dumps({'paths': paths, 'added_keywords': added_kw}, ensure_ascii=False, indent=1))
print('ok', added_kw)
