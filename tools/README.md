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
python tools/gamedata/check_gifts.py          # 사이트에 없는 거울 던전 기프트
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
`--dry` 보고서(`tools/_work/reports/enemy_new_report.txt`)에서 이름·그룹·페이즈·스킬/아이콘 수·초상화 유무를 확인한 뒤 진행합니다.
나무위키 HTML 구조(클래스 이름 등)가 바뀌면 `enemy_parser.py`가 제목을 못 찾을 수 있습니다("NO HEADINGS FOUND").

### 기프트
기프트 데이터(`ego_gift_data.js`)는 나무위키 기프트 문서에서 만든 것으로, 아직 자동 추가 스크립트가 없습니다. 빠진 게 있으면 기존 항목 형식대로 직접 추가합니다.

## 4. 점검 후 커밋

```
python tools/check/check_data.py   # 이미지 경로·데이터 객체 일관성 (문제 있으면 종료 코드 1)
```
가능하면 브라우저에서 해당 메뉴(덱 빌더·스킬셋·적·딜뽕 계산기)를 열어 새 항목이 보이는지 확인합니다.
자동 루틴은 main에 바로 올리지 않고 브랜치 + Pull Request로 올립니다.
