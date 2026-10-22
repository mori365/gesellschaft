# 업데이트 도구

게임 업데이트(새 인격·E.G.O·기프트·적)를 사이트에 반영할 때 쓰는 스크립트 모음입니다.
사이트 동작과는 무관하고(배포되는 페이지는 이 폴더를 읽지 않음), 매주 업데이트 점검 때 사람이나 자동 루틴이 사용합니다.

- 필요: Python 3.10+, Pillow (`pip install pillow`). 인터넷 연결.
- 내려받은 원본·중간 결과는 `tools/_work/`에 쌓이며 git에 올라가지 않습니다.
- 데이터 출처: 수치·코스트·패시브 조건은 게임 static data([LEAGUE-OF-NINE/OpenLethe](https://github.com/LEAGUE-OF-NINE/OpenLethe)), 텍스트·이미지·적 정보는 나무위키.
- 나무위키는 요청 사이에 5초(이미지는 2초) 쉽니다. limbuscompany.wiki.gg는 대량 요청 금지(일부 환경에선 접속 자체가 막힘).

## 1. 무엇이 새로 나왔는지 확인

```
python tools/gamedata/fetch_static.py --loc   # 게임 데이터·한국어 이름 받기 (바뀐 파일만)
python tools/gamedata/check_new.py            # 게임엔 있는데 사이트에 없는 인격·E.G.O
python tools/namu/gift_diff.py --force        # 나무위키 기프트 문서와 대조: 새 기프트, 효과·코스트가 바뀐 기프트
python tools/namu/fetch.py "Limbus Company/전투/목록"   # 새 장(챕터) 전투 문서가 생겼는지
python tools/namu/to_text.py "Limbus Company_전투_목록.html" 전투목록.txt
```

- `check_new.py`의 "한국어 이름 아직 없음"이나 추가일이 오늘·어제인 항목은 나무위키 문서가 아직 없거나 작성 중일 가능성이 큽니다.
- 적 데이터는 현재 0장~10장(10장은 상편·중편·하편 그림자계만, 상징계는 실시간 전투라 제외)까지 있습니다.

## 2. 나무위키 문서가 준비됐는지 판단

새 항목의 나무위키 본문(`<수감자 문서>/인게임 정보`, 적은 `Limbus Company/전투/N장`)을 받아 확인합니다.
스킬 위력·코인 효과·패시브 중 비어 있거나 "작성 중"·"00"·"스킬 이름"·"패시브설명N" 같은 자리표시자가 남아 있으면 **아직 넣지 않습니다**(며칠 뒤 다시 확인).

수감자 문서 이름: 이상·파우스트·돈키호테는 `이름(Project Moon 세계관)`, 나머지는 이름 그대로 (예: `뫼르소/인게임 정보`).

## 3. 반영

### 인격·E.G.O
`tools/content/add_content_example.py`(실제로 쓴 사례)를 복사해 이름·텍스트·이미지·좌표를 바꿔 실행합니다. 파일 맨 위에 절차가 있습니다.
코인별 효과는 `tools/namu/mark_coins.py`로 [코인N] 표식을 넣어 뽑으면 옮기기 쉽습니다.

실행 후:
```
python tools/gamedata/check_new.py      # 새 항목이 게임 데이터와 매칭됐는지 (사이트에 없음 0이어야 함)
python tools/gamedata/emit_js.py        # sync_data.js 재생성 (동기화·해석 단계별 수치, 공격 유형)
python tools/gamedata/reorder_egos.py   # E.G.O 정렬: 수감자 → 등급 → 출시 순
```

### 적 (새 장)
```
python tools/namu/build_enemy_chapter.py --dry "Limbus Company/전투/11장=11장"   # 정리 결과 확인
python tools/namu/build_enemy_chapter.py "Limbus Company/전투/11장=11장"         # 이미지 받기
python tools/namu/append_enemies.py
```
한 장이 여러 문서(편)로 나뉘면 `"문서=장=편"` 형식으로 장 이름을 같게 줍니다 (예: `"Limbus Company/전투/10장/상편=10장=상편"`).
`--dry` 보고서(`tools/_work/reports/enemy_new_report.txt`)에서 이름·그룹·페이즈·스킬/아이콘 수·초상화 유무를 확인한 뒤 진행합니다.
나무위키 HTML 구조(클래스 이름 등)가 바뀌면 `enemy_parser.py`가 제목을 못 찾을 수 있습니다("NO HEADINGS FOUND").

### 기프트
기프트 데이터(`ego_gift_data.js`)는 나무위키 기프트 문서 3개(기본 7키워드 / 기본 7키워드 외 / 특정 테마팩 전용)에서 만든 것입니다.
```
python tools/namu/gift_diff.py --force   # 대조 결과 확인 → tools/_work/reports/gift_diff.txt, 바뀐 효과 전후는 gift_diff_effects.txt
python tools/namu/gift_diff.py --apply   # 반영: 새 기프트는 나무위키 아이콘(256x256)까지 받아 추가, 바뀐 효과·코스트·등급 갱신
```
반영 후 다시 `gift_diff.py`를 돌려 '새 0 / 바뀐 0'인지 확인합니다. 합성 기프트의 재료(`recipe`)·쓰임(`usedIn`)은 자동으로 채우지 않으니, 새 합성 기프트가 있으면 직접 확인합니다.
(2026-10-16부터 게임 데이터에 한국어 이름 파일이 없어져 `tools/gamedata/check_gifts.py`는 새 기프트를 잡지 못합니다.)

### 거울 던전 테마팩
테마팩 메뉴 데이터(`theme_pack_data.js`)는 나무위키 '거울 던전 N' 문서의 테마팩 표(일반·히든·평행중첩 EXTREME)와 기프트 그룹 정의에서 만듭니다.
```
python tools/namu/theme_packs.py --force --no-images   # 결과 확인 (보스 초상화 안 받음)
python tools/namu/theme_packs.py                       # 반영 (사이트 적 데이터에 없는 보스는 나무위키 초상화를 images/theme_bosses/에 저장)
```
- 새 시즌이면 `--season N`. 기프트의 "'테마' 한정" 문구에만 있고 표에 없는 테마는 '표 미작성'으로 들어갑니다(나무위키 표가 채워지면 다시 실행).
- 기프트를 추가·수정한 뒤에도 다시 실행해야 전용 기프트 연결이 갱신됩니다.

## 4. 점검 후 커밋

```
python tools/check/check_data.py   # 이미지 경로·데이터 객체 일관성 (문제 있으면 종료 코드 1)
```
가능하면 브라우저에서 해당 메뉴(덱 빌더·스킬셋·적·딜뽕 계산기)를 열어 새 항목이 보이는지 확인합니다.
자동 루틴은 main에 바로 올리지 않고 브랜치 + Pull Request로 올립니다.
