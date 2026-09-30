
const DATA = [
    {
        "sinner":  "이상",
        "identity":  "LCB 수감자",
        "rarity":  "0",
        "supportPassiveName":  "정보중화",
        "condition":  "우울 4 보유",
        "supportPassiveEffect":  "정신력이 가장 낮은 아군 1명 이번 턴에 정신력이 감소한 경우 턴 종료 시 정신력 10 회복"
    },
    {
        "sinner":  "이상",
        "identity":  "남부 세븐 협회 6과",
        "rarity":  "00",
        "supportPassiveName":  "분석",
        "condition":  "탐식 3 공명",
        "supportPassiveEffect":  "최대 체력이 가장 높은 아군 1명 합 진행 시 합 위력 +1"
    },
    {
        "sinner":  "이상",
        "identity":  "어금니 사무소 해결사",
        "rarity":  "00",
        "supportPassiveName":  "벌려진 일 수습",
        "condition":  "나태 3 보유",
        "supportPassiveEffect":  "최대 체력이 가장 낮은 아군 1명이 적에게 진동 폭발 시 입히는 흐트러짐 손상 4 당 다음 턴에 방어 레벨 감소 1 부여 (턴마다 적 1명당 최대 3)"
    },
    {
        "sinner":  "이상",
        "identity":  "피쿼드호 일등 항해사",
        "rarity":  "00",
        "supportPassiveName":  "일등 항해사의 노련함",
        "condition":  "오만 4 보유",
        "supportPassiveEffect":  "호흡을 가장 많이 보유한 아군 1명이 크리티컬 적중 시 스킬로 부여하는 출혈 위력 +2 (턴 당 최대 6회)"
    },
    {
        "sinner":  "이상",
        "identity":  "남부 디에치 협회 4과",
        "rarity":  "00",
        "supportPassiveName":  "반복 지식",
        "condition":  "나태 4 보유",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 스킬을 버릴 때, 해당 캐릭터 최대 체력의 (5 × 버린 스킬의 등급)% 만큼 보호막을 얻음 (턴 당 최대 2회)"
    },
    {
        "sinner":  "이상",
        "identity":  "LCE E.G.O::초롱",
        "rarity":  "00",
        "supportPassiveName":  "E.G.O가 붕괴될 때 거름과 같이 분해되오",
        "condition":  "탐식 5 보유",
        "supportPassiveEffect":  "현재 체력이 가장 낮은 아군 1명이 사망 시 가장 부족한 속성의 E.G.O 자원 2종을 2개씩 얻음"
    },
    {
        "sinner":  "이상",
        "identity":  "검계 살수",
        "rarity":  "000",
        "supportPassiveName":  "사사",
        "condition":  "오만 3 보유",
        "supportPassiveEffect":  "정신력이 가장 높은 아군 1명 스킬의 효과로 얻는 호흡 횟수 +1"
    },
    {
        "sinner":  "이상",
        "identity":  "개화 E.G.O::동백",
        "rarity":  "000",
        "supportPassiveName":  "알싸한 봄바람",
        "condition":  "나태 3 공명",
        "supportPassiveEffect":  "정신력이 가장 낮은 아군 1명이 2명 이상을 공격할 때 피해량 +10%"
    },
    {
        "sinner":  "이상",
        "identity":  "W사 3등급 정리 요원",
        "rarity":  "000",
        "supportPassiveName":  "정리 시범 교육",
        "condition":  "탐식 4 보유",
        "supportPassiveEffect":  "충전 횟수가 가장 높은 아군 1명이 파열이 있는 대상에게 가하는 피해량이 대상의 파열 위력에 비례하여 증가 (파열 1당 1.5%. 최대 15%)"
    },
    {
        "sinner":  "이상",
        "identity":  "약지 점묘파 스튜던트",
        "rarity":  "000",
        "supportPassiveName":  "미학견습",
        "condition":  "색욕 4 보유",
        "supportPassiveEffect":  "- 정신력이 가장 낮은 아군이 공격 적중시 대상이 보유한 부정적인 효과 1개당 정신력 2 회복 (최대 6)\n- 대상에게 출혈이 있으면 3 추가 회복\n(턴 당 패시브 최대 발동 횟수 : 2회)"
    },
    {
        "sinner":  "이상",
        "identity":  "로보토미 E.G.O::엄숙한 애도",
        "rarity":  "000",
        "supportPassiveName":  "구원의 손",
        "condition":  "우울 6 보유",
        "supportPassiveEffect":  "아군의 스킬 적중 시 대상의 침잠을 2 소모하여 나비 1 부여 (턴 당 3회)"
    },
    {
        "sinner":  "이상",
        "identity":  "남부 리우 협회 3과",
        "rarity":  "000",
        "supportPassiveName":  "리우 방진",
        "condition":  "분노 3 공명",
        "supportPassiveEffect":  "- 정신력이 가장 낮은 아군 2명이 이번 턴에 정신력이 감소한 경우 턴 종료 시 정신력 5 회복\n회복 대상이 화상 위력이나 횟수를 부여하는 기본 스킬을 가지고 있으면, 대신 5 ~ 10 회복"
    },
    {
        "sinner":  "이상",
        "identity":  "N사 E.G.O::흉탄",
        "rarity":  "000",
        "supportPassiveName":  "대상 지정",
        "condition":  "오만 4 공명",
        "supportPassiveEffect":  "속도가 가장 느린 아군이 아군을 공격했다면, 공격 종료 시, 다음 턴에 피해량 증가 1 얻음 (턴 당 최대 2)\n- 이때, 아군이 사망했으면, 위 효과를 대신하여 이번 전투 동안 피해량 증가 1 얻음 (스테이지 및 인격당 최대 2)\n- 위 효과들로 얻는 피해량 증가는 최대 2까지만 얻어짐."
    },
    {
        "sinner":  "이상",
        "identity":  "흑수 - 오 필두",
        "rarity":  "000",
        "supportPassiveName":  "검은 갑각이 살을 째고 돋아 날 지키리",
        "condition":  "탐식 4 보유",
        "supportPassiveEffect":  "최대 체력이 가장 높은 아군 1명에게 아래 효과 적용\n- 전투 시작 시 방어 레벨이 (해당 캐릭터의 이전 턴과 이번 턴 속도 차이 × 2)만큼 증가 (최대 5. 이전 턴에 전투 인원이 아니었다면, 해당 캐릭터의 기본 속도 최솟값으로 계산)\n- 전투 시작 시 현재 체력이 최대 체력의 50% 미만이고, 이전 턴과 이번 턴 속도 차이가 3 이상이면, 체력 50 회복 (전투 당 1회)"
    },
    {
        "sinner":  "이상",
        "identity":  "거미집 검지 아비",
        "rarity":  "000",
        "supportPassiveName":  "신의 가호",
        "condition":  "탐식 1 + 우울 1 + 오만 1 보유",
        "supportPassiveEffect":  "이번 턴에 아군이 적에게 처음으로 사용한 참격, 관통, 타격 기본 공격 스킬의 피해량이 각각 +5%\n- 효과가 적용된 스킬이 검지 소속 인격의 스킬이면, 대신 피해량이 추가로 +10%\n- 공격 시작 전 기준으로 적용됨"
    },
    {
        "sinner":  "이상",
        "identity":  "LCE E.G.O::차원찢개",
        "rarity":  "000",
        "supportPassiveName":  "사람은광선보다도빠르게달아나라",
        "condition":  "질투 3 보유",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 충전 횟수를 소모하거나 얻는 스킬 사용시, 다음 턴에 신속 1 얻음 (턴당 1회)"
    },
    {
        "sinner":  "파우스트",
        "identity":  "LCB 수감자",
        "rarity":  "0",
        "supportPassiveName":  "관찰",
        "condition":  "오만 3 보유",
        "supportPassiveEffect":  "최대 체력이 가장 높은 아군 1명 공격 적중 시 25% 확률로 공격 레벨 감소 2 부여"
    },
    {
        "sinner":  "파우스트",
        "identity":  "W사 2등급 정리 요원",
        "rarity":  "00",
        "supportPassiveName":  "무전",
        "condition":  "질투 3 보유",
        "supportPassiveEffect":  "최대 체력이 가장 낮은 아군 1명 충전 횟수 얻는 값 +1"
    },
    {
        "sinner":  "파우스트",
        "identity":  "살아남은 로보토미 직원",
        "rarity":  "00",
        "supportPassiveName":  "지지",
        "condition":  "색욕 2 공명",
        "supportPassiveEffect":  "최대 체력이 가장 낮은 아군 1명 수비 스킬의 최종 위력 +2"
    },
    {
        "sinner":  "파우스트",
        "identity":  "남부 츠바이 협회 4과",
        "rarity":  "00",
        "supportPassiveName":  "보호 요청 수신",
        "condition":  "우울 2 공명",
        "supportPassiveEffect":  "전투 시작 시 체력 비율이 가장 낮은 아군 1명에게 방어 레벨 증가 2 부여\n대상의 체력이 50% 미만이면 추가로 2 부여"
    },
    {
        "sinner":  "파우스트",
        "identity":  "워더링하이츠 버틀러",
        "rarity":  "00",
        "supportPassiveName":  "그 날을 위한 훈련",
        "condition":  "우울 4 보유",
        "supportPassiveEffect":  "정신력이 가장 낮은 아군 1명이 침잠이 5 이상 부여된 대상에게 공격 적중 시 자신의 정신력 3 회복 (턴 당 4회)"
    },
    {
        "sinner":  "파우스트",
        "identity":  "쥐는 자",
        "rarity":  "000",
        "supportPassiveName":  "속삭임",
        "condition":  "색욕 3 공명",
        "supportPassiveEffect":  "전투 시작 시 정신력이 가장 낮은 아군 1명의 정신력 15 회복. 대상이 N사 광신도면 광신 2 부여"
    },
    {
        "sinner":  "파우스트",
        "identity":  "남부 세븐 협회 4과",
        "rarity":  "000",
        "supportPassiveName":  "세븐 협회의 티타임",
        "condition":  "탐식 4 보유",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 상대의 약점, 취약 속성(내성 1 초과)으로 공격 시 대상의 파열에 비례하여 피해량 증가 (파열 1 당 1.5%. 최대 15%)\n효과를 적용받은 대상이 세븐 협회 해결사면, 피해량 추가 증가 (파열 1 당 0.5%. 최대 5%)"
    },
    {
        "sinner":  "파우스트",
        "identity":  "로보토미 E.G.O::후회",
        "rarity":  "000",
        "supportPassiveName":  "억압 작업",
        "condition":  "분노 5 보유",
        "supportPassiveEffect":  "속도가 가장 느린 아군 1명이 합 진행 시 대상이 보유한 부정적인 효과가 3개 이상이면, 대상의 합 위력 -1"
    },
    {
        "sinner":  "파우스트",
        "identity":  "검계 살수",
        "rarity":  "000",
        "supportPassiveName":  "미련 서린 검끝",
        "condition":  "오만 4 보유",
        "supportPassiveEffect":  "편성 순서가 가장 빠른 아군이 참격 속성 스킬로 크리티컬 적중 시 방어 레벨 감소 1 부여 (턴 당 적 1명당 최대 3)"
    },
    {
        "sinner":  "파우스트",
        "identity":  "멀티크랙 사무소 대표",
        "rarity":  "000",
        "supportPassiveName":  "해체 보조 전류",
        "condition":  "질투 5 보유",
        "supportPassiveEffect":  "충전 횟수가 가장 적은 아군 1명이 적 처치 시 충전 횟수 3 증가 (턴 당 1회, 충전을 소모하거나 스스로 획득하는 스킬을 보유한 아군에게 우선으로 적용됨)"
    },
    {
        "sinner":  "파우스트",
        "identity":  "LCE E.G.O::홍염살",
        "rarity":  "000",
        "supportPassiveName":  "잔열",
        "condition":  "분노 3 공명",
        "supportPassiveEffect":  "정신력이 가장 낮은 아군 1명이 기본 스킬의 적중시 효과로 화상을 부여할 때 화상 2 추가 부여 (최대 3회 발동)\n- 피격 대상의 화상이 30 이상이면, 대신 화상 횟수 1 증가 (최대 3회 발동)"
    },
    {
        "sinner":  "파우스트",
        "identity":  "흑수 - 묘 필두",
        "rarity":  "000",
        "supportPassiveName":  "쾌도",
        "condition":  "탐식 4 공명",
        "supportPassiveEffect":  "속도가 가장 빠른 아군이 파열 피해를 입히면, 다음 턴에 공격 레벨 증가 1 얻음 (턴 당 최대 3회)"
    },
    {
        "sinner":  "파우스트",
        "identity":  "동부 시 협회 3과",
        "rarity":  "000",
        "supportPassiveName":  "한점 노리기",
        "condition":  "색욕 4 공명",
        "supportPassiveEffect":  "턴 종료 시 전투 중 스킬 및 패시브로 적에게 출혈 위력을 가장 많이 부여한 아군에게 다음 턴에 관통 피해량 증가 1 부여 (E.G.O 스킬 포함, 출혈 부여량이 동일하다면 편성 순서가 가장 빠른 순으로 결정함, 해당 턴에 출혈 위력을 부여하지 않았다면 발동하지 않음)"
    },
    {
        "sinner":  "파우스트",
        "identity":  "검지 수행자:【쪽지】",
        "rarity":  "000",
        "supportPassiveName":  "지령이 이끄는 대로…",
        "condition":  "나태 1 + 우울 1 + 오만 1 보유",
        "supportPassiveEffect":  "편성 순서가 가장 빠른 인격에게 효과 적용\n- 검지 소속 인격이 있으면, 해당 인격에게 우선 적용\n\n전투 시작 시 자신의 조작 슬롯 중 가장 왼쪽 스킬로 지정한 적 슬롯을 다른 아군이 같이 지정했으면, 해당 스킬의 피해량이 자신을 제외하고 해당 슬롯을 타겟한 인원 수 1명당 5% 증가 (최대 15%, 자신과 아군 모두 기본 공격 스킬로 메인 타겟할 때 적용)"
    },
    {
        "sinner":  "파우스트",
        "identity":  "거미집 약지 제자",
        "rarity":  "000",
        "supportPassiveName":  "아이언메이든 - 가시",
        "condition":  "색욕 1 + 질투 2 보유",
        "supportPassiveEffect":  "이번 턴에 수비 스킬을 장착한 아군이 피격 시 공격자에게 출혈 4 부여 (턴당 2회)\n- 이미 출혈이 있으면, 대신 공격자의 출혈 횟수 2 증가"
    },
    {
        "sinner":  "파우스트",
        "identity":  "새벽 사무소 해결사",
        "rarity":  "000",
        "supportPassiveName":  "고독한 해결사",
        "condition":  "분노 3 + 색욕 3 보유",
        "supportPassiveEffect":  "전투 시작 시 생존한 인격이 대기 인원을 전부 포함하여 1명이면, 해당 인격이 공격 레벨 증가 3, 방어 레벨 증가 3 얻음"
    },
    {
        "sinner":  "돈키호테",
        "identity":  "LCB 수감자",
        "rarity":  "0",
        "supportPassiveName":  "응원",
        "condition":  "색욕 5 보유",
        "supportPassiveEffect":  "정신력이 가장 높은 아군 1명 관통 스킬의 피해량 +10%"
    },
    {
        "sinner":  "돈키호테",
        "identity":  "남부 시 협회 5과 부장",
        "rarity":  "00",
        "supportPassiveName":  "양단",
        "condition":  "분노 5 보유",
        "supportPassiveEffect":  "속도가 가장 높은 아군 1명 참격 스킬의 피해량 +10%"
    },
    {
        "sinner":  "돈키호테",
        "identity":  "N사 중간 망치",
        "rarity":  "00",
        "supportPassiveName":  "맹목의 망치",
        "condition":  "색욕 4 보유",
        "supportPassiveEffect":  "광신이 있는 아군 중 가장 정신력이 낮은 아군의 피해량 +10%"
    },
    {
        "sinner":  "돈키호테",
        "identity":  "로보토미 E.G.O::초롱",
        "rarity":  "00",
        "supportPassiveName":  "초롱초롱",
        "condition":  "탐식 5 보유",
        "supportPassiveEffect":  "도발치가 가장 높은 슬롯을 보유한 아군 1명이 자신을 타겟으로 삼은 적에게 공격을 적중할 때마다 체력 4 회복 (도발치가 없으면 적용되지 않음)"
    },
    {
        "sinner":  "돈키호테",
        "identity":  "검계 살수",
        "rarity":  "00",
        "supportPassiveName":  "밤산책",
        "condition":  "오만 3 보유",
        "supportPassiveEffect":  "호흡을 가장 적게 보유한 아군 1명이 자신의 스킬, 코인 효과로 호흡 위력을 얻을 때 얻는 호흡 위력 +2"
    },
    {
        "sinner":  "돈키호테",
        "identity":  "W사 3등급 정리 요원",
        "rarity":  "000",
        "supportPassiveName":  "꺾인 마음",
        "condition":  "우울 3 공명",
        "supportPassiveEffect":  "속도가 가장 높은 아군 1명 첫 번째 스킬의 최종 위력 +1"
    },
    {
        "sinner":  "돈키호테",
        "identity":  "남부 섕크 협회 5과 부장",
        "rarity":  "000",
        "supportPassiveName":  "결투 의뢰",
        "condition":  "오만 3 공명",
        "supportPassiveEffect":  "모든 아군의 속도가 모든 적보다 높으면, 속도가 가장 빠른 아군의 피해량이 속도가 가장 느린 적과의 속도 차이에 비례하여 증가 (속도 차이 1당 3%, 최대 15%)"
    },
    {
        "sinner":  "돈키호테",
        "identity":  "중지 작은 아우",
        "rarity":  "000",
        "supportPassiveName":  "편 가르기",
        "condition":  "질투 3 보유",
        "supportPassiveEffect":  "최대 체력이 가장 낮은 아군 1명이 자신을 제외한 아군의 피격 횟수 6회마다 다음 턴에 타격 피해량 증가 1을 얻음 (최대 2)"
    },
    {
        "sinner":  "돈키호테",
        "identity":  "T사 3등급 징수직 직원",
        "rarity":  "000",
        "supportPassiveName":  "T사식 물리왜곡장",
        "condition":  "나태 3 보유",
        "supportPassiveEffect":  "속도가 가장 느린 아군 1명이 진동이 부여된 적에게 피해를 받을 때, 받는 피해량 -10%"
    },
    {
        "sinner":  "돈키호테",
        "identity":  "라만차랜드 실장",
        "rarity":  "000",
        "supportPassiveName":  "\u0027가족들이여 억눌러온 허기를 채워라\u0027",
        "condition":  "색욕 3 공명",
        "supportPassiveEffect":  "전투 시작 시 체력이 가장 적은 아군 잃은 체력 20% 당 피해량 증가 1 얻음 (최대 3)\n- 대상 아군이 \u0026lt;혈귀\u0026gt;면, 효과를 대신하여 잃은 체력 15% 당 피해량 증가 1 얻음 (최대 3)"
    },
    {
        "sinner":  "돈키호테",
        "identity":  "동부 섕크 협회 3과",
        "rarity":  "000",
        "supportPassiveName":  "경신법",
        "condition":  "분노 3 공명",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 화상 또는 특수 화상을 보유한 적에게 합 승리 시, 다음 턴에 신속 1을 얻음 (턴 당 1회)\n- 대상의 화상 위력이 20 이상이면, 신속 1을 추가로 얻음"
    },
    {
        "sinner":  "돈키호테",
        "identity":  "로보토미 E.G.O::사랑과 증오의 이름으로",
        "rarity":  "000",
        "supportPassiveName":  "매지컬 파워 차징 서포트",
        "condition":  "질투 3 공명",
        "supportPassiveEffect":  "기본 공격 스킬에서 충전 횟수를 획득하는 아군 중 충전 횟수가 가장 적은 아군 1명이 충전 횟수를 획득하는 기본 공격 스킬 사용 시, 충전 횟수 +2 (턴 당 최대 2회 발동)\n- 정신력이 0 이상이면, 체력을 (대상의 충전 × 2)만큼 회복 (최대 10, 턴당 최대 20 회복)\n- 정신력이 0 미만이면, 정신력을 대상의 충전만큼 회복 (최대 5, 턴당 최대 10 회복)"
    },
    {
        "sinner":  "돈키호테",
        "identity":  "흑수 - 미",
        "rarity":  "000",
        "supportPassiveName":  "살을 뚫고 자라나는 뿔",
        "condition":  "탐식 3 + 우울 3 보유",
        "supportPassiveEffect":  "속도가 가장 빠른 아군이 파열 횟수 또는 침잠 횟수를 2 이상 보유한 적에게 기본 공격 스킬 적중 시, 방어 레벨 감소 1 부여 (턴당 2회)"
    },
    {
        "sinner":  "돈키호테",
        "identity":  "검지 대행자 - 개화 E.G.O::대행",
        "rarity":  "000",
        "supportPassiveName":  "이 또한 마법의 삐삐님의 은혜일테지",
        "condition":  "우울 3 공명",
        "supportPassiveEffect":  "전투 시작 시, 정신력이 가장 낮은 아군의 정신력 15 회복\n- 더하기 코인을 사용하는 인격에게 우선으로 적용\n- 대상이 검지 소속이면 효과가 강화되어 추가로 피해량 증가 1 부여\n- 침식, 패닉 등 정신력을 회복할 수 없는 대상에게는 적용되지 않음"
    },
    {
        "sinner":  "료슈",
        "identity":  "LCB 수감자",
        "rarity":  "0",
        "supportPassiveName":  "등떠밀기",
        "condition":  "탐식 3 공명",
        "supportPassiveEffect":  "최대 체력이 가장 낮은 아군 1명 가하는 피해량 +20%, 받는 피해량 +20%"
    },
    {
        "sinner":  "료슈",
        "identity":  "남부 세븐 협회 6과",
        "rarity":  "00",
        "supportPassiveName":  "아이스 브레이킹",
        "condition":  "탐식 4 보유",
        "supportPassiveEffect":  "최대 체력이 가장 낮은 아군 1명 파열 부여 값 +1"
    },
    {
        "sinner":  "료슈",
        "identity":  "LCCB 대리",
        "rarity":  "00",
        "supportPassiveName":  "돛대",
        "condition":  "오만 4 보유",
        "supportPassiveEffect":  "- 탄환을 가장 적게 보유한 아군 1명이 탄환을 소모하는 스킬을 사용할 때, 호흡 3 부여 (턴 당 1회. 탄환이 없는 대상에게는 적용되지 않음)\n- 탄환을 가장 적게 보유한 아군 1명이 코인에서 마지막 탄환을 소모하면, 코인의 공격 종료 시, 각 대상에게 해당 코인으로 피해를 입힌 대상에게 해당 코인의 공격으로 입힌 피해량의 50%만큼 추가 피해를 줌 (소수점 반올림)"
    },
    {
        "sinner":  "료슈",
        "identity":  "남부 리우 협회 4과",
        "rarity":  "00",
        "supportPassiveName":  "전화",
        "condition":  "분노 4 보유",
        "supportPassiveEffect":  "속도가 가장 느린 아군 1명이 화상이 부여된 적 처치 시 무작위 적 2명에게 화상 3 부여 (턴 당 1회)\n- 집중 전투에서는 부위에 부여"
    },
    {
        "sinner":  "료슈",
        "identity":  "20구 유로지비",
        "rarity":  "00",
        "supportPassiveName":  "조.감",
        "condition":  "나태 4 보유",
        "supportPassiveEffect":  "편성 순서가 1번인 아군이 스킬, 코인 효과로 얻는 진동 횟수의 값 +1 (턴 당 2회)"
    },
    {
        "sinner":  "료슈",
        "identity":  "흑운회 와카슈",
        "rarity":  "000",
        "supportPassiveName":  "행동대장",
        "condition":  "색욕 4 보유",
        "supportPassiveEffect":  "속도가 가장 높은 아군 1명 출혈 부여 값 +1"
    },
    {
        "sinner":  "료슈",
        "identity":  "료.고.파. 주방장",
        "rarity":  "000",
        "supportPassiveName":  "예술적인 맛",
        "condition":  "색욕 5 보유",
        "supportPassiveEffect":  "적 사망 시 체력이 가장 낮은 아군 1명의 체력 15 회복. (턴 당 1회 발동)"
    },
    {
        "sinner":  "료슈",
        "identity":  "W사 3등급 정리 요원",
        "rarity":  "000",
        "supportPassiveName":  "차원 굴절 칼날 - Type: Blade Mk7",
        "condition":  "오만 5 보유",
        "supportPassiveEffect":  "최대 체력이 가장 낮은 아군 1명이 적 처치 시 충전 횟수 3 증가 (턴 당 최대 1회 발동)"
    },
    {
        "sinner":  "료슈",
        "identity":  "에드가 가문 치프 버틀러",
        "rarity":  "000",
        "supportPassiveName":  "청소 지휘",
        "condition":  "오만 4 보유",
        "supportPassiveEffect":  "편성 순서가 가장 뒤인 아군 1명이 합 승리 시 호흡 횟수 1 증가 (턴 당 3회), 다음 턴에 신속 1 얻음 (턴 당 1회)"
    },
    {
        "sinner":  "료슈",
        "identity":  "로보토미 E.G.O::적안 · 참회",
        "rarity":  "000",
        "supportPassiveName":  "먹고 자라",
        "condition":  "질투 3 공명",
        "supportPassiveEffect":  "전투 시작 시\n- 체력 비율이 가장 낮은 아군 1명이 체력 3 회복\n- 정신력이 가장 낮은 아군 1명이 정신력 3 회복"
    },
    {
        "sinner":  "료슈",
        "identity":  "흑수 - 묘",
        "rarity":  "000",
        "supportPassiveName":  "부분 흑수화 수련",
        "condition":  "탐식 5 보유",
        "supportPassiveEffect":  "턴 종료 시 속도가 가장 빠른 아군 1명이 다음 턴에 신속 2 얻음"
    },
    {
        "sinner":  "료슈",
        "identity":  "N사 E.G.O::경멸, 경외",
        "rarity":  "000",
        "supportPassiveName":  "그건 흐르고 울린다",
        "condition":  "색욕 3 공명",
        "supportPassiveEffect":  "편성 순서가 가장 빠른 아군 1명이 적에게 공격 적중 시, 출혈 1 부여 (적 당 턴 당 최대 1회)\n- 대상에게 출혈이 있으면, 추가로 출혈 횟수 1 증가\n\n편성 순서가 가장 빠른 아군 1명이 적에게 피격시, 공격자에게 진동 1 부여 (턴 당 최대 3회)\n-공격자에게 진동이 있으면, 추가로 진동 횟수 1 증가"
    },
    {
        "sinner":  "료슈",
        "identity":  "홍원 방랑무사",
        "rarity":  "000",
        "supportPassiveName":  "방랑",
        "condition":  "탐식 3 + 오만 3 보유",
        "supportPassiveEffect":  "전투 시작 시 편성 순서가 가장 빠른 아군 1명이 자신의 호흡 위력 1당 보호막 1 얻음 (최대 10)"
    },
    {
        "sinner":  "료슈",
        "identity":  "로보토미 E.G.O::잔향 · 외로움",
        "rarity":  "000",
        "supportPassiveName":  "봄의 탄생",
        "condition":  "나태 3 공명",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 침잠 위력, 횟수 또는 특수 침잠을 부여하는 스킬로 적에게 적중 시 진동을 2 부여하고, 진동 폭발, 대상의 진동 횟수 1 감소 (턴당 1회)"
    },
    {
        "sinner":  "료슈",
        "identity":  "거미집의 검",
        "rarity":  "000",
        "supportPassiveName":  "사사 [師事]",
        "condition":  "오만 3 공명",
        "supportPassiveEffect":  "편성 순서가 가장 빠른 아군이 기본 스킬 사용 시, 호흡 위력 2 얻음 (턴당 3회)"
    },
    {
        "sinner":  "료슈",
        "identity":  "오트쿠튀르::르누아르 신발관",
        "rarity":  "000",
        "supportPassiveName":  "르누아르의 미덕과 가치",
        "condition":  "나태 6 보유",
        "supportPassiveEffect":  "충전, 특수 충전을 보유한 아군 중 편성 순서가 가장 빠른 아군이 기본 스킬을 사용하여 진동 폭발로 입히는 흐트러짐 피해량 +12.5%"
    },
    {
        "sinner":  "뫼르소",
        "identity":  "LCB 수감자",
        "rarity":  "0",
        "supportPassiveName":  "등뒤 받쳐주기",
        "condition":  "나태 3 보유",
        "supportPassiveEffect":  "최대 체력이 가장 높은 아군 1명 공격 스킬로 받는 피해량 -10%"
    },
    {
        "sinner":  "뫼르소",
        "identity":  "남부 리우 협회 6과",
        "rarity":  "00",
        "supportPassiveName":  "마찰 타격점",
        "condition":  "색욕 4 보유",
        "supportPassiveEffect":  "속도가 가장 낮은 아군 1명 화상 부여 값 +1"
    },
    {
        "sinner":  "뫼르소",
        "identity":  "장미스패너 공방 해결사",
        "rarity":  "00",
        "supportPassiveName":  "권고 휴직",
        "condition":  "우울 3 공명",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 진동이 부여된 적과 합 진행 시 적의 합 위력 -1"
    },
    {
        "sinner":  "뫼르소",
        "identity":  "중지 작은 아우",
        "rarity":  "00",
        "supportPassiveName":  "한 식구",
        "condition":  "질투 3 보유",
        "supportPassiveEffect":  "정신력이 가장 낮은 아군 1명이 자신과 동일한 소속의 캐릭터가 생존해있는 경우, 턴 종료 시 정신력 10 회복"
    },
    {
        "sinner":  "뫼르소",
        "identity":  "데드레빗츠 보스",
        "rarity":  "00",
        "supportPassiveName":  "내가 책임진다",
        "condition":  "탐식 3 공명",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 파열이 3 이상 부여된 대상에게 공격 적중 시 공격 레벨 감소 1 부여 (적 1명 당 턴 당 최대 3)"
    },
    {
        "sinner":  "뫼르소",
        "identity":  "W사 2등급 정리 요원",
        "rarity":  "000",
        "supportPassiveName":  "묵묵함",
        "condition":  "질투 4 보유",
        "supportPassiveEffect":  "속도가 가장 낮은 아군 1명 파열 부여 값 +1"
    },
    {
        "sinner":  "뫼르소",
        "identity":  "N사 큰 망치",
        "rarity":  "000",
        "supportPassiveName":  "으뜸 영광",
        "condition":  "분노 3 공명",
        "supportPassiveEffect":  "현재 체력이 가장 낮은 아군 1명이 체력이 50% 미만이면 공격 위력 증가, 보호 1을 얻음. 대상이 N사 광신도면 광신 1을 추가로 얻음"
    },
    {
        "sinner":  "뫼르소",
        "identity":  "R사 제 4무리 코뿔소팀",
        "rarity":  "000",
        "supportPassiveName":  "기동 훈련",
        "condition":  "질투 5 보유",
        "supportPassiveEffect":  "턴 종료 시 충전 횟수가 가장 높은 아군 1명이 충전 횟수 5당 다음 턴의 속도 최대 값 +1 (최대 3)"
    },
    {
        "sinner":  "뫼르소",
        "identity":  "검계 우두머리",
        "rarity":  "000",
        "supportPassiveName":  "본국검술",
        "condition":  "오만 5 보유",
        "supportPassiveEffect":  "전투 시작 시 호흡을 가장 많이 보유한 아군 1명의 참격 속성 스킬의 크리티컬 피해량 +15%"
    },
    {
        "sinner":  "뫼르소",
        "identity":  "남부 디에치 협회 4과 부장",
        "rarity":  "000",
        "supportPassiveName":  "성실한 배움",
        "condition":  "우울 5 보유",
        "supportPassiveEffect":  "최대 체력이 가장 높은 아군 1명이 스킬을 버릴 때, 해당 인격 최대 체력의 (5 × 버린 스킬의 등급)%만큼 보호막을 얻음 (턴 당 1회)\n탐구한 지식이 있는 경우, 보호막 수치가 1.5배로 적용됨"
    },
    {
        "sinner":  "뫼르소",
        "identity":  "서부 섕크 협회 3과",
        "rarity":  "000",
        "supportPassiveName":  "한 발 더 빠르게",
        "condition":  "오만 3 공명",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 합 승리 시 다음 턴에 신속 1을 얻음 (턴 당 최대 2회)"
    },
    {
        "sinner":  "뫼르소",
        "identity":  "동부 엄지 카포 IIII",
        "rarity":  "000",
        "supportPassiveName":  "맹호의 도약",
        "condition":  "나태 3 보유",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 탄환을 소모하는 스킬 사용 시 대상보다 속도가 3 이상 높다면, 가하는 피해량 +(대상과의 속도 차이 × 3)% (최대 15%)\n(탄환이 없으면 적용되지 않음. 단, 탄환 버프는 보유하였으나 수치가 0인 경우에는 효과가 적용됨)"
    },
    {
        "sinner":  "뫼르소",
        "identity":  "라만차랜드 왕자",
        "rarity":  "000",
        "supportPassiveName":  "잔이 넘치도록",
        "condition":  "색욕 5 공명",
        "supportPassiveEffect":  "해당 턴 동안 혈찬이 생성될 때 1.5배로 생성됨 (전투당 2회, 소수점 버림)"
    },
    {
        "sinner":  "뫼르소",
        "identity":  "로보토미 E.G.O::호넷【변조】",
        "rarity":  "000",
        "supportPassiveName":  "일벌",
        "condition":  "분노 4 공명",
        "supportPassiveEffect":  "이번 턴 동안 아래 효과 적용 (전투당 최대 2번 발동 가능)\n\n- 아군의 관통 속성 기본 공격 스킬의 공격 종료시, 해당 공격으로 입힌 체력 피해량의 10%만큼 체력 회복\n- 스킬 슬롯에 장착한 모든 기본 공격 스킬이 관통 속성이면, 턴 종료시 모든 아군 정신력 10 회복"
    },
    {
        "sinner":  "뫼르소",
        "identity":  "약지 야수파 스튜던트",
        "rarity":  "000",
        "supportPassiveName":  "겹쳐 그린 상흔",
        "condition":  "색욕 2 + 오만 1 보유",
        "supportPassiveEffect":  "속도가 가장 빠른 아군이 공격 적중 시 대상의 부정적인 효과 2개당 방어 레벨 감소 1 부여 (턴당 최대 1회, 최대 3)"
    },
    {
        "sinner":  "홍루",
        "identity":  "LCB 수감자",
        "rarity":  "0",
        "supportPassiveName":  "실없는 농담",
        "condition":  "나태 5 보유",
        "supportPassiveEffect":  "정신력이 가장 낮은 아군 1명 전투 시작 시 정신력 6 회복"
    },
    {
        "sinner":  "홍루",
        "identity":  "흑운회 와카슈",
        "rarity":  "00",
        "supportPassiveName":  "조직의 보복",
        "condition":  "색욕 4 보유",
        "supportPassiveEffect":  "속도가 가장 높은 아군 1명 출혈 부여 값 +1"
    },
    {
        "sinner":  "홍루",
        "identity":  "남부 리우 협회 5과",
        "rarity":  "00",
        "supportPassiveName":  "따뜻하죠?",
        "condition":  "분노 4 보유",
        "supportPassiveEffect":  "정신력이 가장 높은 아군 1명의 공격 스킬의 스킬 효과, 코인 효과로 부여하는 화상 횟수 부여 값 +1"
    },
    {
        "sinner":  "홍루",
        "identity":  "W사 2등급 정리 요원",
        "rarity":  "00",
        "supportPassiveName":  "열차 정리 매뉴얼 전달",
        "condition":  "오만 3 보유",
        "supportPassiveEffect":  "속도가 가장 느린 아군이 전투 시작 시 충전 횟수가 5 이상 있으면, 다음 턴에 신속 2를 얻음"
    },
    {
        "sinner":  "홍루",
        "identity":  "갈고리 사무소 해결사",
        "rarity":  "00",
        "supportPassiveName":  "보급형 생체 장비",
        "condition":  "색욕 5 보유",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 출혈이 부여된 적 처치 시 다음 턴에 공격 위력 증가 1을 얻음 (턴 당 최대 1회)"
    },
    {
        "sinner":  "홍루",
        "identity":  "송곳니 사냥 사무소 해결사",
        "rarity":  "00",
        "supportPassiveName":  "혈귀 공략 교본 - 지혈",
        "condition":  "탐식 5 보유",
        "supportPassiveEffect":  "전투 시작 시, 출혈과 출혈 횟수의 합이 가장 높은 아군 1명의 출혈 횟수 2 감소\n속도가 가장 빠른 아군 1명이 파열이 있는 적에게 공격 적중시, 방어 레벨 감소 1 부여 (턴 당 최대 2회)"
    },
    {
        "sinner":  "홍루",
        "identity":  "콩콩이파 두목",
        "rarity":  "000",
        "supportPassiveName":  "승부수",
        "condition":  "탐식 5 보유",
        "supportPassiveEffect":  "정신력이 가장 높은 아군 1명 앞면이 나온 코인의 피해량 +20%"
    },
    {
        "sinner":  "홍루",
        "identity":  "K사 3등급 적출직 직원",
        "rarity":  "000",
        "supportPassiveName":  "고농축 앰플",
        "condition":  "탐식 4 공명",
        "supportPassiveEffect":  "전투 시작 시 현재 체력 비율이 가장 낮은 아군에게 K사 앰플 2 부여"
    },
    {
        "sinner":  "홍루",
        "identity":  "남부 디에치 협회 4과",
        "rarity":  "000",
        "supportPassiveName":  "깨우침",
        "condition":  "우울 4 보유",
        "supportPassiveEffect":  "정신력이 가장 낮은 아군 1명이 적을 흐트러짐 상태로 만들거나 처치하면, 정신력 7 회복"
    },
    {
        "sinner":  "홍루",
        "identity":  "20구 유로지비",
        "rarity":  "000",
        "supportPassiveName":  "내가 범인이라면...?",
        "condition":  "나태 3 공명",
        "supportPassiveEffect":  "편성 순서 1번인 아군이 스킬, 코인 효과로 진동 폭발 시 25% 확률로 진동 폭발이 추가로 발동 (턴 당 1회)"
    },
    {
        "sinner":  "홍루",
        "identity":  "마침표 사무소 대표",
        "rarity":  "000",
        "supportPassiveName":  "제압 사격",
        "condition":  "오만 5 보유",
        "supportPassiveEffect":  "탄환을 가장 많이 보유한 아군 인격이 탄환을 소모하는 스킬로 가하는 피해량 +10%\n(탄환이 없으면 적용되지 않음)"
    },
    {
        "sinner":  "홍루",
        "identity":  "R사 제 4무리 순록팀",
        "rarity":  "000",
        "supportPassiveName":  "충전 분쇄 지원",
        "condition":  "질투 3 보유",
        "supportPassiveEffect":  "충전이 가장 높은 아군 1명이 충전 횟수를 획득하는 기본 공격 스킬 사용 시, 마지막 코인의 피해량 +15%"
    },
    {
        "sinner":  "홍루",
        "identity":  "홍원 군주",
        "rarity":  "000",
        "supportPassiveName":  "꼬리는 밟히지 말고 처리해주세요.",
        "condition":  "탐식 6 보유",
        "supportPassiveEffect":  "현재 체력 비율이 가장 낮은 인격이 적에게 가하는 피해량 +(대상이 보유한 주살의 종류 × 3)% (최대 15%)"
    },
    {
        "sinner":  "홍루",
        "identity":  "거미집 약지 아비",
        "rarity":  "000",
        "supportPassiveName":  "뛰어다니는 관객은 의자에 앉아 감상하시죠",
        "condition":  "색욕 3 공명",
        "supportPassiveEffect":  "턴 종료 시 속도가 가장 빠른 적 1명에게 다음 턴에 공격 레벨 감소 2 부여하고 출혈 횟수 1 증가 (집중 전투일 경우, 부위로 판정)"
    },
    {
        "sinner":  "홍루",
        "identity":  "S사 추노꾼",
        "rarity":  "000",
        "supportPassiveName":  "악에 받친 추격",
        "condition":  "오만 5 보유",
        "supportPassiveEffect":  "편성 순서가 가장 빠른 아군이 속박이 부여된 적을 공격할 때, 피해량 +10%"
    },
    {
        "sinner":  "홍루",
        "identity":  "동부 섕크 협회 3과",
        "rarity":  "000",
        "supportPassiveName":  "퇴로를 녹여둘게요",
        "condition":  "분노 3 공명",
        "supportPassiveEffect":  "속도가 가장 빠른 아군이 화상 또는 특수 화상을 보유한 적에게 합 승리 시, 다음 턴에 속박 1 부여 (턴당 1회)\n- 대상의 화상 횟수가 4 이하면, 추가로 이번 턴에 대상의 화상 횟수 1 증가\n- 대상의 화상 횟수가 5 이상이면, 추가로 이번 턴에 화상 3 부여"
    },
    {
        "sinner":  "히스클리프",
        "identity":  "LCB 수감자",
        "rarity":  "0",
        "supportPassiveName":  "악에 받친",
        "condition":  "질투 5 보유",
        "supportPassiveEffect":  "최대 체력이 가장 낮은 아군 1명 타격 스킬의 피해량 +10%"
    },
    {
        "sinner":  "히스클리프",
        "identity":  "남부 시 협회 5과",
        "rarity":  "00",
        "supportPassiveName":  "자신을 돌보지 않음",
        "condition":  "분노 3 공명",
        "supportPassiveEffect":  "현재 체력이 가장 낮은 아군 1명 가하는 피해량 +20%, 받는 피해량 +20%"
    },
    {
        "sinner":  "히스클리프",
        "identity":  "N사 작은 망치",
        "rarity":  "00",
        "supportPassiveName":  "독경",
        "condition":  "색욕 4 보유",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명의 못 부여 값 +1"
    },
    {
        "sinner":  "히스클리프",
        "identity":  "남부 세븐 협회 4과",
        "rarity":  "00",
        "supportPassiveName":  "단서 연결",
        "condition":  "탐식 4 보유",
        "supportPassiveEffect":  "최대 체력이 가장 많은 아군 1명이 상대의 취약 속성(내성 1.5 초과)으로 공격 시 스킬로 부여하는 파열 부여 값 +1\n효과를 적용받은 대상이 세븐 협회 해결사면, 위 효과의 파열 부여 값 +1"
    },
    {
        "sinner":  "히스클리프",
        "identity":  "멀티크랙 사무소 해결사",
        "rarity":  "00",
        "supportPassiveName":  "충전 모듈 추가",
        "condition":  "질투 7 보유",
        "supportPassiveEffect":  "편성 순서가 1번인 아군 1명의 충전 횟수 최대치 +5\n(조건 충족 시, 다음 턴 시작 전까지 효과 적용)"
    },
    {
        "sinner":  "히스클리프",
        "identity":  "R사 제 4무리 토끼팀",
        "rarity":  "000",
        "supportPassiveName":  "집념",
        "condition":  "분노 5 보유",
        "supportPassiveEffect":  "속도가 가장 높은 아군 1명 관통 스킬의 피해량 +10%"
    },
    {
        "sinner":  "히스클리프",
        "identity":  "로보토미 E.G.O::여우비",
        "rarity":  "000",
        "supportPassiveName":  "해진 우산",
        "condition":  "질투 3 보유",
        "supportPassiveEffect":  "정신력이 가장 낮은 아군 1명이 피격 시 정신력 10 감소하고, 다음 턴에 타격 피해량 증가 1을 얻음 (턴당 1회 발동)"
    },
    {
        "sinner":  "히스클리프",
        "identity":  "피쿼드호 작살잡이",
        "rarity":  "000",
        "supportPassiveName":  "절박",
        "condition":  "질투 5 보유",
        "supportPassiveEffect":  "최대 체력이 가장 높은 아군 1명이 자신의 체력이 낮아질수록 관통 피해량 증가\n- 감소한 체력 1%당 피해량 0.3% 증가 (최대 30%)"
    },
    {
        "sinner":  "히스클리프",
        "identity":  "남부 외우피 협회 3과",
        "rarity":  "000",
        "supportPassiveName":  "의무 이행 확인",
        "condition":  "오만 6 보유",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명의 진동 위력, 횟수를 부여하는 스킬의 합 위력 +1"
    },
    {
        "sinner":  "히스클리프",
        "identity":  "와일드헌트",
        "rarity":  "000",
        "supportPassiveName":  "울고 또 울어라",
        "condition":  "우울 3 공명",
        "supportPassiveEffect":  "정신력이 가장 높은 아군 1명이 정신력이 0 미만인 대상에게 입히는 피해량 +5%\n대상의 정신력이 0보다 낮을수록 입히는 피해량이 증가 (정신력 1당 +0.5%, 최대 20%)\n대상에게 정신력이 없는 경우, 대신 공격 스킬의 스킬, 코인 효과로 부여하는 침잠 위력, 횟수 부여량 +1 (턴 당 최대 2회)"
    },
    {
        "sinner":  "히스클리프",
        "identity":  "마침표 사무소 해결사",
        "rarity":  "000",
        "supportPassiveName":  "감적수",
        "condition":  "오만 5 보유",
        "supportPassiveEffect":  "탄환을 가장 적게 보유한 아군 1명이 탄환을 소모하는 스킬을 사용할 때, 호흡 횟수 2 증가\n- 대상이 마침표 사무소 해결사거나, 대상의 호흡 횟수가 5 미만이면, 대신 4 증가 (턴 당 1회. 탄환이 없는 대상에게는 적용되지 않음)"
    },
    {
        "sinner":  "히스클리프",
        "identity":  "흑운회 와카슈",
        "rarity":  "000",
        "supportPassiveName":  "후벼파기",
        "condition":  "색욕 5 보유",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 이번 턴에 수비 스킬을 사용했거나, 공격 시작 전에 최대 체력인 적에게 가하는 피해량 +10%"
    },
    {
        "sinner":  "히스클리프",
        "identity":  "W사 4등급 정리 요원 - CCA",
        "rarity":  "000",
        "supportPassiveName":  "\u0027언젠가 결항 열차용 정리 장비도 노려볼 수 있겠지\u0027",
        "condition":  "질투 3 공명",
        "supportPassiveEffect":  "전투 시작시 편성 순서가 가장 빠른 아군이 자신의 스킬로 충전 횟수 최대치를 초과하여 충전 횟수를 얻으면, 초과한 충전 횟수 1 당 다음 턴에 충전 역장 1 얻음 (최대 3, E.G.O 스킬 포함)"
    },
    {
        "sinner":  "히스클리프",
        "identity":  "흑수 - 유 필두",
        "rarity":  "000",
        "supportPassiveName":  "배수의 진",
        "condition":  "분노 3 + 탐식 3 보유",
        "supportPassiveEffect":  "턴 종료 시 체력 비율이 가장 낮은 아군 1명의 현재 체력이 최대 체력의 50% 미만이라면, 다음 턴에 합 위력 증가 1 얻음"
    },
    {
        "sinner":  "히스클리프",
        "identity":  "중지 작은 형님",
        "rarity":  "000",
        "supportPassiveName":  "의리 사슬",
        "condition":  "질투 4 보유",
        "supportPassiveEffect":  "전투 중 중지 소속 아군이 사망하면 해당 턴과 다음 턴에 모든 중지 소속 아군이 공격 위력 증가 1 얻음 (턴당 1회)"
    },
    {
        "sinner":  "히스클리프",
        "identity":  "거미집 엄지 제자",
        "rarity":  "000",
        "supportPassiveName":  "일대일 결투라면...",
        "condition":  "분노 3 공명",
        "supportPassiveEffect":  "속도가 가장 빠른 아군이 기본 공격 스킬로 합 승리 시, 대상 적의 화상 횟수 1 증가 (턴당 1회)\n- 엄지 소속 인격에게 우선 적용\n- 엄지 소속 인격이면 효과가 강화되어, 대신 대상의 화상 횟수와 진동 횟수 1 증가\n- 전투 시작 시 적이 1명만 있으면 (환상체의 경우, 본체 기준), 이 패시브 효과로 부여하는 화상 횟수와 진동 횟수 +1"
    },
    {
        "sinner":  "이스마엘",
        "identity":  "LCB 수감자",
        "rarity":  "0",
        "supportPassiveName":  "살아남고 말것이라는 마음",
        "condition":  "분노 6 보유",
        "supportPassiveEffect":  "현재 체력이 가장 낮은 아군 1명 체력이 50% 미만이면 합 진행 시 합 위력 +1"
    },
    {
        "sinner":  "이스마엘",
        "identity":  "남부 시 협회 5과",
        "rarity":  "00",
        "supportPassiveName":  "투쟁",
        "condition":  "질투 2 공명",
        "supportPassiveEffect":  "현재 체력이 가장 낮은 아군 1명 반격 스킬의 최종 위력 +2"
    },
    {
        "sinner":  "이스마엘",
        "identity":  "LCCB 대리",
        "rarity":  "00",
        "supportPassiveName":  "매뉴얼대로",
        "condition":  "탐식 2 공명",
        "supportPassiveEffect":  "속도가 가장 낮은 아군 1명 가드 스킬의 최종 위력 +2"
    },
    {
        "sinner":  "이스마엘",
        "identity":  "로보토미 E.G.O::출렁임",
        "rarity":  "00",
        "supportPassiveName":  "부식 점액",
        "condition":  "우울 4 보유",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 진동 폭발 발동 시 파열 2 부여"
    },
    {
        "sinner":  "이스마엘",
        "identity":  "에드가 가문 버틀러",
        "rarity":  "00",
        "supportPassiveName":  "충실한 보조",
        "condition":  "우울 5 보유",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 침잠이 부여된 대상 공격시 대상의 침잠 1 당 피해량 +1% (최대 20%)"
    },
    {
        "sinner":  "이스마엘",
        "identity":  "R사 제 4무리 순록팀",
        "rarity":  "000",
        "supportPassiveName":  "집념",
        "condition":  "우울 5 보유",
        "supportPassiveEffect":  "정신력이 가장 낮은 아군 1명 타격 스킬의 피해량 +10%"
    },
    {
        "sinner":  "이스마엘",
        "identity":  "남부 리우 협회 4과",
        "rarity":  "000",
        "supportPassiveName":  "격화",
        "condition":  "분노 6 보유",
        "supportPassiveEffect":  "속도가 가장 느린 아군 1명이 공격 적중 시 대상의 화상 횟수 3당 타격 피해량 +5% (최대 15%)"
    },
    {
        "sinner":  "이스마엘",
        "identity":  "어금니 보트 센터 해결사",
        "rarity":  "000",
        "supportPassiveName":  "크랲 드라이버",
        "condition":  "오만 4 보유",
        "supportPassiveEffect":  "최대 체력이 가장 낮은 아군 공격 적중 시 앞면이 나온 경우, 코인 효과로 진동 횟수를 적에게 부여할 때 침잠 횟수 1 부여"
    },
    {
        "sinner":  "이스마엘",
        "identity":  "피쿼드호 선장",
        "rarity":  "000",
        "supportPassiveName":  "선장의 명령",
        "condition":  "오만 3 공명",
        "supportPassiveEffect":  "정신력이 가장 높은 아군 1명이 자신의 공격 종료 시 대상이 사망했으면, 호흡 2, 호흡 횟수 2 얻음 (턴 당 2회)"
    },
    {
        "sinner":  "이스마엘",
        "identity":  "서부 츠바이 협회 3과",
        "rarity":  "000",
        "supportPassiveName":  "긴급수호",
        "condition":  "오만 3 보유",
        "supportPassiveEffect":  "전투 시작 시 체력이 감소하여 이전 턴 시작과 체력 비율이 가장 차이가 많이 나는 인격에게 방어 레벨 증가 2 부여"
    },
    {
        "sinner":  "이스마엘",
        "identity":  "흑운회 부조장",
        "rarity":  "000",
        "supportPassiveName":  "구름 공방 칼날",
        "condition":  "색욕 3 공명",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 적에게 스킬 효과, 코인 효과로 부여하는 출혈 위력 또는 횟수 부여 값 +1"
    },
    {
        "sinner":  "이스마엘",
        "identity":  "가주 후보",
        "rarity":  "000",
        "supportPassiveName":  "여환 [餘桓]",
        "condition":  "탐식 4 공명",
        "supportPassiveEffect":  "전투 중 자신이 사망했으면, 자신 다음 턴에 대기 해제되는 인격(대기 편성 순서상 가장 빠른 인격)에게 전투 시작 시 원[援] 부여\n\n연속 전투에서 자신이 퇴각 또는 대기 상태일 때, 아래의 효과 발동\n전투 시작 시 체력이 최대 체력의 50% 이하이고, 수비 스킬을 사용한 인격 중 편성 순서가 가장 빠른 인격이 턴 종료 시 피해로 인한 흐트러짐을 해제하고 전장 퇴각함 (전투당 2회 발동)"
    },
    {
        "sinner":  "이스마엘",
        "identity":  "정사무소 대표",
        "rarity":  "000",
        "supportPassiveName":  "중계",
        "condition":  "나태 3 + 우울 3 보유",
        "supportPassiveEffect":  "정신력이 가장 낮은 아군 1명의 기본 공격 스킬로 앞면 적중시, 해당 아군 정신력 5 회복 (턴당 1회, 정신력 -40인 아군 제외)"
    },
    {
        "sinner":  "이스마엘",
        "identity":  "거미집 중지 제자",
        "rarity":  "000",
        "supportPassiveName":  "당신… 해결사 좋아해요?",
        "condition":  "질투 3 공명",
        "supportPassiveEffect":  "편성 순서 1번의 기본 공격 스킬의 합 위력 +1 (턴당 1회)\n질투 공명이 완전 공명이면, 편성 순서 1번의 기본 스킬 피해량 +10%"
    },
    {
        "sinner":  "이스마엘",
        "identity":  "LCD 현장추리팀",
        "rarity":  "000",
        "supportPassiveName":  "베고, 죽일 뿐",
        "condition":  "오만 3 공명",
        "supportPassiveEffect":  "속도가 가장 빠른 아군이 가하는 참격 스킬 피해량 +10%\n- 신속이 있다면, 대신 참격 스킬 피해량 +15%"
    },
    {
        "sinner":  "이스마엘",
        "identity":  "오트쿠튀르::르루주 부티크",
        "rarity":  "000",
        "supportPassiveName":  "[르루주 오트쿠튀르 악트리스] - 로브",
        "condition":  "색욕 3 공명",
        "supportPassiveEffect":  "편성 순서 1번과 2번 인격이 패시브, 스킬, 코인의 효과로 회복하는 체력 회복량 +20%\n색욕 공명이 완전 공명이면, 이번 턴에 편성 순서 1번과 2번의 스킬로 받는 피해량 -10%"
    },
    {
        "sinner":  "로쟈",
        "identity":  "LCB 수감자",
        "rarity":  "0",
        "supportPassiveName":  "도박사",
        "condition":  "분노 5 보유",
        "supportPassiveEffect":  "현재 체력이 가장 높은 아군 1명 앞면이 나온 코인의 피해량 +20%"
    },
    {
        "sinner":  "로쟈",
        "identity":  "LCCB 대리",
        "rarity":  "00",
        "supportPassiveName":  "브리칭",
        "condition":  "질투 5 보유",
        "supportPassiveEffect":  "현재 체력이 가장 높은 아군 1명 이번 턴에 수비 스킬을 사용한 적에게 입히는 피해량 +20%"
    },
    {
        "sinner":  "로쟈",
        "identity":  "N사 중간 망치",
        "rarity":  "00",
        "supportPassiveName":  "차오르는 신앙",
        "condition":  "분노 3 보유",
        "supportPassiveEffect":  "적이 사망하면 정신력이 가장 높은 아군 1명이 다음 턴에 신속 1, 피해량 증가 1을 얻음 (턴 당 1회 발동)"
    },
    {
        "sinner":  "로쟈",
        "identity":  "남부 츠바이 협회 5과",
        "rarity":  "00",
        "supportPassiveName":  "지정 보호",
        "condition":  "분노 3 공명",
        "supportPassiveEffect":  "전투 시작 시 현재 체력 비율이 가장 낮은 아군 1명이 자신의 호흡 횟수 1 당 보호막을 1 얻음 (최대 10)"
    },
    {
        "sinner":  "로쟈",
        "identity":  "T사 2등급 징수직 직원",
        "rarity":  "00",
        "supportPassiveName":  "T사식 격투술",
        "condition":  "나태 3 공명",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 진동을 5 이상 보유한 적과 합 진행 시 합 위력 +1"
    },
    {
        "sinner":  "로쟈",
        "identity":  "흑운회 와카슈",
        "rarity":  "000",
        "supportPassiveName":  "흑운검술",
        "condition":  "우울 5 보유",
        "supportPassiveEffect":  "속도가 가장 낮은 아군 1명 참격 스킬의 피해량 +10%"
    },
    {
        "sinner":  "로쟈",
        "identity":  "장미스패너 공방 대표",
        "rarity":  "000",
        "supportPassiveName":  "공진 스패너",
        "condition":  "오만 4 보유",
        "supportPassiveEffect":  "속도가 가장 느린 아군 1명이 진동 폭발로 입히는 흐트러짐 피해량 +20%"
    },
    {
        "sinner":  "로쟈",
        "identity":  "남부 디에치 협회 4과",
        "rarity":  "000",
        "supportPassiveName":  "지식 전도",
        "condition":  "우울 3 보유",
        "supportPassiveEffect":  "최대 체력이 가장 높은 아군 1명이 이번 턴 동안 받은 피해량에 비례하여 다음 턴에 타격 피해량 증가를 얻음.\n(보호막으로 받은 피해도 받은 피해량에 포함됨. 턴 시작 시 체력의 15%만큼 피해를 받았을 때 최대로 획득. 최대 획득값: 3)"
    },
    {
        "sinner":  "로쟈",
        "identity":  "남부 리우 협회 4과 부장",
        "rarity":  "000",
        "supportPassiveName":  "화끈한 격려",
        "condition":  "분노 6 보유",
        "supportPassiveEffect":  "정신력이 가장 낮은 아군 1명이 공격 적중시 대상의 화상 위력 6 당 관통 피해량 +5% (최대 15%)"
    },
    {
        "sinner":  "로쟈",
        "identity":  "북부 제뱌찌 협회 3과",
        "rarity":  "000",
        "supportPassiveName":  "우수 배달부",
        "condition":  "탐식 6 보유",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명의 파열 위력, 횟수를 부여하는 스킬의 합 위력 +1"
    },
    {
        "sinner":  "로쟈",
        "identity":  "라만차랜드 공주",
        "rarity":  "000",
        "supportPassiveName":  "\"피를 피워내..\"",
        "condition":  "색욕 3 + 질투 3 보유",
        "supportPassiveEffect":  "턴 종료시 출혈 위력이 가장 높은 아군 1명의 출혈 위력을 최대 6 감소시키고, (감소한 출혈 위력 / 2)만큼 피어나는 가시 부여 (소수점 버림)"
    },
    {
        "sinner":  "로쟈",
        "identity":  "흑수 - 사",
        "rarity":  "000",
        "supportPassiveName":  "피에 흐르는 독",
        "condition":  "탐식 4 보유",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 적에게 파열 피해를 입히면, 다음 턴에 공격 레벨 감소 1, 방어 레벨 감소 1 부여 (턴 당 1회)"
    },
    {
        "sinner":  "로쟈",
        "identity":  "로보토미 E.G.O::눈물로 벼려낸 검",
        "rarity":  "000",
        "supportPassiveName":  "절망하는 모든 자들을 위해…",
        "condition":  "우울 5 보유",
        "supportPassiveEffect":  "전투 시작 시 편성 순서가 가장 빠른 아군에게 효과 적용\n- 정신력이 -15 이하면, 빼기 코인 스킬의 최종 위력 +1\n- 정신력이 -30 이하면, 효과가 강화되어 빼기 코인 스킬의 최종 위력 +1, 피해량 +15%"
    },
    {
        "sinner":  "로쟈",
        "identity":  "R사 제 4무리 순록팀",
        "rarity":  "000",
        "supportPassiveName":  "캐롤 속에 죽어가는 동료들",
        "condition":  "우울 4 보유",
        "supportPassiveEffect":  "정신력이 가장 낮은 아군 1명의 충전 또는 특수 충전을 소모하고 적에게 침잠을 부여하는 효과를 가진 스킬의 피해량 +10% (E.G.O 스킬 제외)"
    },
    {
        "sinner":  "로쟈",
        "identity":  "약지 야수파 도슨트",
        "rarity":  "000",
        "supportPassiveName":  "부서지진 않게 조심조심…",
        "condition":  "색욕 3 공명",
        "supportPassiveEffect":  "편성 순서가 가장 빠른 인격에게 아래 효과 적용\n- 색욕 공명 수가 홀수면, 출혈 위력 부여량 +1\n- 색욕 공명 수가 짝수면, 침잠 위력 부여량 +1\n- 해당 인격이 약지 소속 인격이면, 전투 시작시 공격 레벨 증가 1 또는 방어 레벨 증가 1을 얻음"
    },
    {
        "sinner":  "로쟈",
        "identity":  "거미집 엄지 아비",
        "rarity":  "000",
        "supportPassiveName":  "약해 빠진 것들",
        "condition":  "분노 3 공명",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 적에게 진동 폭발 시, 다음 턴에 공격 레벨 증가 2 얻음 (턴당 1회)\n- 엄지 소속의 경우 추가로 신속 1 얻음 (턴당 1회)"
    },
    {
        "sinner":  "로쟈",
        "identity":  "오트쿠튀르::수선실",
        "rarity":  "000",
        "supportPassiveName":  "한 가위",
        "condition":  "나태 4 보유",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명의 참격 기본 스킬 피해량 +10%"
    },
    {
        "sinner":  "싱클레어",
        "identity":  "LCB 수감자",
        "rarity":  "0",
        "supportPassiveName":  "앙심",
        "condition":  "오만 3 보유",
        "supportPassiveEffect":  "정신력이 가장 낮은 아군 1명 다른 아군이 사망하면 다음 턴에 공격 위력 증가 1 얻음"
    },
    {
        "sinner":  "싱클레어",
        "identity":  "남부 츠바이 협회 6과",
        "rarity":  "00",
        "supportPassiveName":  "뚝심",
        "condition":  "우울 4 보유",
        "supportPassiveEffect":  "현재 체력이 가장 낮은 아군 1명 받는 피해량 -10%"
    },
    {
        "sinner":  "싱클레어",
        "identity":  "마리아치 보스",
        "rarity":  "00",
        "supportPassiveName":  "농락",
        "condition":  "우울 4 보유",
        "supportPassiveEffect":  "정신력이 가장 높은 아군 1명 자신보다 정신력이 낮은 적 공격 시 피해량 +10%"
    },
    {
        "sinner":  "싱클레어",
        "identity":  "로보토미 E.G.O::홍적",
        "rarity":  "00",
        "supportPassiveName":  "기원부",
        "condition":  "탐식 4 보유",
        "supportPassiveEffect":  "현재 체력이 가장 높은 아군 1명이 공격, 반격 스킬로 부여하는 파열 위력 부여 값 +1"
    },
    {
        "sinner":  "싱클레어",
        "identity":  "어금니 보트 센터 해결사",
        "rarity":  "00",
        "supportPassiveName":  "출력 개조",
        "condition":  "우울 4 보유",
        "supportPassiveEffect":  "최대 체력이 가장 높은 아군의 공격 스킬의 스킬, 코인 효과로 적에게 부여하는 진동 +1"
    },
    {
        "sinner":  "싱클레어",
        "identity":  "서부 츠바이 협회 3과",
        "rarity":  "00",
        "supportPassiveName":  "의뢰 대상 보호",
        "condition":  "나태 4 보유",
        "supportPassiveEffect":  "턴 종료 시 체력 비율이 가장 낮은 아군 1명에게 다음 턴에 신속 1, 방어 레벨 증가 3 부여"
    },
    {
        "sinner":  "싱클레어",
        "identity":  "검계 살수",
        "rarity":  "000",
        "supportPassiveName":  "피 묻힌 손",
        "condition":  "오만 3 공명",
        "supportPassiveEffect":  "속도가 가장 낮은 아군 1명 마지막 스킬의 최종 위력 +1"
    },
    {
        "sinner":  "싱클레어",
        "identity":  "쥐어들 자",
        "rarity":  "000",
        "supportPassiveName":  "몰린",
        "condition":  "분노 6 보유",
        "supportPassiveEffect":  "정신력이 가장 낮은 아군 1명의 타격 피해량 +10%\n해당 효과를 받는 대상의 정신력이 0 미만이면 정신력이 낮아질수록 타격 피해량 추가 증가 (최대 10%)"
    },
    {
        "sinner":  "싱클레어",
        "identity":  "남부 섕크 협회 4과 부장",
        "rarity":  "000",
        "supportPassiveName":  "느리시네요",
        "condition":  "오만 3 공명",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 회피 성공 시 다음 턴에 신속 1을 얻음 (최대 5회)"
    },
    {
        "sinner":  "싱클레어",
        "identity":  "새벽 사무소 해결사",
        "rarity":  "000",
        "supportPassiveName":  "이글거리는 검",
        "condition":  "분노 3 공명",
        "supportPassiveEffect":  "편성 순서 1번인 아군이 앞면 적중시 화상 횟수 1 부여 (턴 당 최대 4회 발동)"
    },
    {
        "sinner":  "싱클레어",
        "identity":  "북부 제뱌찌 협회 3과",
        "rarity":  "000",
        "supportPassiveName":  "신속 배달부",
        "condition":  "탐식 6 보유",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 파열이 부여된 적에게 공격 적중시 방어 레벨 감소 1 부여 (턴 당 적 1명당 3회)"
    },
    {
        "sinner":  "싱클레어",
        "identity":  "중지 작은 아우",
        "rarity":  "000",
        "supportPassiveName":  "빽",
        "condition":  "질투 5 보유",
        "supportPassiveEffect":  "전투 시작 시, 현재 체력 비율이 가장 낮은 아군 1명이 방어 레벨 증가 2 얻음\n- 대상이 중지 소속이면, 공격 레벨 증가 2 추가로 얻음"
    },
    {
        "sinner":  "싱클레어",
        "identity":  "동부 엄지 솔다토 II",
        "rarity":  "000",
        "supportPassiveName":  "재장전",
        "condition":  "오만 4 공명",
        "supportPassiveEffect":  "탄환을 쓰는 인격 중 편성 순서가 가장 빠른 아군 1명의 공격이 종료되었을 때, 해당 인격의 현재 보유 탄환이 절반 미만이면, 탄환을 최대치의 절반만큼 다시 얻음 (소수점 올림. 전투당 1회. 최대 탄환 획득값 : 5)\n- 위력, 횟수가 분리된 탄환은 위력, 횟수를 무작위로 얻음\n- 만약 위력 또는 횟수가 최댓값인 경우, 최댓값이 아닌 쪽의 탄환으로 얻음\n- 탄환을 사용하는 인격이 없으면, 이 효과는 발동하지 않음"
    },
    {
        "sinner":  "싱클레어",
        "identity":  "흑수 - 유",
        "rarity":  "000",
        "supportPassiveName":  "혈염도 [血炎刀]",
        "condition":  "분노 3 + 탐식 3 보유",
        "supportPassiveEffect":  "속도가 가장 빠른 아군이 자신의 스킬로 적에게 화상 또는 파열 위력을 부여할 때, 화상, 파열 위력 1 부여 (턴 당 1회)"
    },
    {
        "sinner":  "싱클레어",
        "identity":  "거미집 소지 제자",
        "rarity":  "000",
        "supportPassiveName":  "정념[靜念]",
        "condition":  "오만 2 공명",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 수비 스킬을 장착하고 전투 시작시, 정신력 5 회복, 보호막 5 얻음"
    },
    {
        "sinner":  "오티스",
        "identity":  "LCB 수감자",
        "rarity":  "0",
        "supportPassiveName":  "군인정신",
        "condition":  "나태 5 보유",
        "supportPassiveEffect":  "현재 체력이 가장 높은 아군 1명 정신력이 0 미만인 적 공격 시 피해량 +30%"
    },
    {
        "sinner":  "오티스",
        "identity":  "검계 살수",
        "rarity":  "00",
        "supportPassiveName":  "확인사살",
        "condition":  "오만 4 보유",
        "supportPassiveEffect":  "정신력이 가장 높은 아군 1명 체력이 25% 미만인 적 공격 시 피해량 +30%"
    },
    {
        "sinner":  "오티스",
        "identity":  "G사 부장",
        "rarity":  "00",
        "supportPassiveName":  "각오",
        "condition":  "나태 4 보유",
        "supportPassiveEffect":  "현재 체력이 가장 높은 아군 1명 전투 시작 시 수비 위력 증가 1, 공격 위력 증가 1, 보호 1 중 무작위 1개 효과를 얻음"
    },
    {
        "sinner":  "오티스",
        "identity":  "남부 섕크 협회 4과",
        "rarity":  "00",
        "supportPassiveName":  "멘토의 지도",
        "condition":  "오만 3 공명",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명의 속도가 모든 적보다 높으면, 해당 아군의 합 위력 +1\n효과를 적용받는 아군이 섕크 협회 해결사면, 해당 캐릭터의 관통 피해량 +10%"
    },
    {
        "sinner":  "오티스",
        "identity":  "약지 점묘파 스튜던트",
        "rarity":  "00",
        "supportPassiveName":  "밑그림",
        "condition":  "색욕 4 보유",
        "supportPassiveEffect":  "- 정신력이 가장 낮은 아군 1명이 출혈이 부여된 적 처치 시 정신력 4 회복\n- 대상이 보유한 부정적인 효과 1개당 추가 1 회복 (최대 4. 턴 당 최대 3회 발동)"
    },
    {
        "sinner":  "오티스",
        "identity":  "남부 세븐 협회 6과 부장",
        "rarity":  "000",
        "supportPassiveName":  "정보 공유",
        "condition":  "탐식 4 보유",
        "supportPassiveEffect":  "속도가 가장 높은 아군 1명이 상대의 약점이나 취약 속성으로 공격할 때 피해량 +10%"
    },
    {
        "sinner":  "오티스",
        "identity":  "어금니 사무소 해결사",
        "rarity":  "000",
        "supportPassiveName":  "윽박과 응원",
        "condition":  "나태 3 보유",
        "supportPassiveEffect":  "진동 횟수가 가장 높은 아군 1명이 스킬 효과로 얻는 진동 횟수 +1"
    },
    {
        "sinner":  "오티스",
        "identity":  "로보토미 E.G.O::마탄",
        "rarity":  "000",
        "supportPassiveName":  "의뢰 작업",
        "condition":  "오만 3 공명",
        "supportPassiveEffect":  "정신력이 가장 높은 아군 1명의 E.G.O 스킬의 피해량 +10%\nE.G.O 자원을 7개 이상 소모하는 E.G.O 스킬이면, 추가로 피해량 +5%"
    },
    {
        "sinner":  "오티스",
        "identity":  "워더링하이츠 치프 버틀러",
        "rarity":  "000",
        "supportPassiveName":  "버틀러 교육",
        "condition":  "우울 4 보유",
        "supportPassiveEffect":  "정신력이 가장 높은 아군 1명이 정신력이 -25 미만인 대상과 합 진행 시 합 위력 +1"
    },
    {
        "sinner":  "오티스",
        "identity":  "W사 3등급 정리 요원 팀장",
        "rarity":  "000",
        "supportPassiveName":  "굴절",
        "condition":  "질투 4 공명",
        "supportPassiveEffect":  "턴 시작 시 충전 횟수가 가장 많은 아군 1명의 충전 횟수를 7 이상 소모한 스킬 피해량 +10% (턴 당 1회)"
    },
    {
        "sinner":  "오티스",
        "identity":  "라만차랜드 이발사",
        "rarity":  "000",
        "supportPassiveName":  "돈키호테류 경혈 8식 가위",
        "condition":  "색욕 5 보유",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 공격 종료시 적이 사망했다면, 체력 10 회복 (턴 당 최대 2회)\n속도가 가장 빠른 아군 1명이 공격 종료 시 적이 사망했다면, 다음 턴 동안 스킬, 코인 효과로 출혈 위력 부여 시 출혈 횟수 1 증가 (턴 당 최대 3회)"
    },
    {
        "sinner":  "오티스",
        "identity":  "흑수 - 묘",
        "rarity":  "000",
        "supportPassiveName":  "무리짓는 토끼",
        "condition":  "탐식 3 공명",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 파열이 있는 대상을 공격할 때, 가하는 피해량 +10%\n다음 턴에 신속 1 얻음 (턴 당 최대 1회)"
    },
    {
        "sinner":  "오티스",
        "identity":  "T사 3등급 강력징수직 직원",
        "rarity":  "000",
        "supportPassiveName":  "신속 공무 집행",
        "condition":  "나태 5 보유",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 흐트러짐 상태인 대상을 공격할 때, 피해량 +10%"
    },
    {
        "sinner":  "오티스",
        "identity":  "LCA 우제트 선봉 3팀 팀장",
        "rarity":  "000",
        "supportPassiveName":  "매의 눈",
        "condition":  "우울 3 공명",
        "supportPassiveEffect":  "전투 시작 시 체력 비율이 제일 낮은 아군에게 다음 턴 보호 1 부여"
    },
    {
        "sinner":  "오티스",
        "identity":  "거미집 중지 아비",
        "rarity":  "000",
        "supportPassiveName":  "누가 가족을 건드렸나",
        "condition":  "질투 4 공명",
        "supportPassiveEffect":  "전투 시작 시 반격을 장착한 아군이 피해량 증가 1, 보호 1 얻음\n- 효과를 받는 아군이 중지 소속이면, 대신 질투 피해량 증가 2, 보호 2 얻음"
    },
    {
        "sinner":  "그레고르",
        "identity":  "LCB 수감자",
        "rarity":  "0",
        "supportPassiveName":  "인자 코드 G-0",
        "condition":  "우울 3 보유",
        "supportPassiveEffect":  "현재 체력이 가장 낮은 아군 1명 전투 시작 시 체력 5 회복"
    },
    {
        "sinner":  "그레고르",
        "identity":  "남부 리우 협회 6과",
        "rarity":  "00",
        "supportPassiveName":  "내달리는 마음",
        "condition":  "나태 5 보유",
        "supportPassiveEffect":  "속도가 가장 낮은 아군 1명 3번째 코인 이후부터 피해량 +30%"
    },
    {
        "sinner":  "그레고르",
        "identity":  "료.고.파. 조수",
        "rarity":  "00",
        "supportPassiveName":  "조리 보조",
        "condition":  "색욕 5 보유",
        "supportPassiveEffect":  "체력이 가장 낮은 아군 1명이 전투 시작 시 체력 5 회복\n료.고.파. 주방장 료슈 - 즉흥 조리 패시브의 체력 회복량 +5"
    },
    {
        "sinner":  "그레고르",
        "identity":  "장미스패너 공방 해결사",
        "rarity":  "00",
        "supportPassiveName":  "톱날 정비",
        "condition":  "탐식 4 보유",
        "supportPassiveEffect":  "속도가 가장 느린 아군 1명이 진동이 있는 대상에게 부여하는 파열 +1"
    },
    {
        "sinner":  "그레고르",
        "identity":  "흑운회 부조장",
        "rarity":  "00",
        "supportPassiveName":  "흑운검법",
        "condition":  "색욕 4 보유",
        "supportPassiveEffect":  "속도가 가장 느린 아군 1명이 출혈이 7 이상 부여된 적에게 공격 적중 시 다음 턴에 공격 레벨 감소 1 부여 (턴 당 3회)"
    },
    {
        "sinner":  "그레고르",
        "identity":  "G사 일등대리",
        "rarity":  "000",
        "supportPassiveName":  "인자 코드 G-3",
        "condition":  "탐식 4 보유",
        "supportPassiveEffect":  "현재 체력이 가장 낮은 아군 1명 합 승리 시 체력 5 회복"
    },
    {
        "sinner":  "그레고르",
        "identity":  "남부 츠바이 협회 4과",
        "rarity":  "000",
        "supportPassiveName":  "당신의 방패",
        "condition":  "나태 5 보유",
        "supportPassiveEffect":  "최대 체력이 가장 높은 아군 1명이 2개 이상의 공격 타겟이 되었으면, 방어 레벨 증가 3을 얻음"
    },
    {
        "sinner":  "그레고르",
        "identity":  "쌍갈고리 해적단 부선장",
        "rarity":  "000",
        "supportPassiveName":  "바람 구멍",
        "condition":  "오만 4 보유",
        "supportPassiveEffect":  "호흡을 가장 많이 보유한 아군 1명이 적 처치 시 다음 턴에 관통 피해량 증가 1을 얻음. (턴 당 1회)"
    },
    {
        "sinner":  "그레고르",
        "identity":  "에드가 가문 승계자",
        "rarity":  "000",
        "supportPassiveName":  "시달림",
        "condition":  "우울 3 보유",
        "supportPassiveEffect":  "전투 시작 시 정신력이 가장 낮은 아군 1명의 정신력이 5 감소하고 우울 피해량 증가 1 얻음"
    },
    {
        "sinner":  "그레고르",
        "identity":  "라만차랜드 신부",
        "rarity":  "000",
        "supportPassiveName":  "돈키호테류 경혈 6식 채찍",
        "condition":  "색욕 3 공명",
        "supportPassiveEffect":  "현재 체력 비율이 가장 낮은 아군이 공격 적중시 체력 3 회복 (턴 당 3회)\n- 피격 대상이 출혈을 보유하고 있으면 3 추가로 회복"
    },
    {
        "sinner":  "그레고르",
        "identity":  "불주먹 사무소 생존자",
        "rarity":  "000",
        "supportPassiveName":  "저건 우리 사무소의 복장이길...",
        "condition":  "분노 3 공명",
        "supportPassiveEffect":  "속도가 가장 빠른 인격 1명이 공격 적중 시 대상의 화상 6 당, 분노 피해량 +5% (최대 20%)"
    },
    {
        "sinner":  "그레고르",
        "identity":  "흑수 - 사",
        "rarity":  "000",
        "supportPassiveName":  "뱀과 같이 유연하고 늘어나며 급작스럽게",
        "condition":  "탐식 4 보유",
        "supportPassiveEffect":  "전투 중 자신이 사망했으면, 이후 대기 해제되는 인격 중 편성 순서가 가장 빠른 대상 1명에게 매 턴마다 전투 시작시 호흡 2 부여"
    },
    {
        "sinner":  "그레고르",
        "identity":  "밤의 송곳 카피타노",
        "rarity":  "000",
        "supportPassiveName":  "틈새 노리기",
        "condition":  "나태 3 공명",
        "supportPassiveEffect":  "속도가 가장 빠른 아군 1명이 기본 공격 스킬 사용 시 메인 타겟의 속도가 자신보다 느리면 속도 차이 3당, 대상에게 수비 위력 감소 1 부여 (턴당 최대 2)"
    },
    {
        "sinner":  "그레고르",
        "identity":  "로보토미 E.G.O::램프",
        "rarity":  "000",
        "supportPassiveName":  "아직 구해야 할 생명이 더 남아있었나",
        "condition":  "분노 3 공명",
        "supportPassiveEffect":  "턴 종료 시 부정적인 효과를 보유한 아군 중 편성 순서가 가장 빠른 아군에게 아래 효과 적용\n- 다음 턴에 가장 왼쪽 슬롯이 도발치 4 얻음\n- 다음 턴에 타격 피해량 증가 1 얻음"
    },
    {
        "sinner":  "그레고르",
        "identity":  "LCE E.G.O::AEDD",
        "rarity":  "000",
        "supportPassiveName":  "제세동",
        "condition":  "질투 4 공명",
        "supportPassiveEffect":  "편성 순서가 가장 빠른 아군 셋이 턴 종료 시 이번 턴에 각자의 공격 스킬을 사용하여 소모한 충전 횟수와 소모한 특수 충전의 합만큼 각자의 체력을 회복 (최대 10)"
    },
    {
        "sinner":  "그레고르",
        "identity":  "새벽 사무소 대표",
        "rarity":  "000",
        "supportPassiveName":  "스티그마 공방 의체",
        "condition":  "분노 3 공명",
        "supportPassiveEffect":  "현재 체력이 가장 많은 아군이 화상이 있는 적에게 공격 적중 시, 진동 2 부여 (턴당 1회)\n- 대상의 화상이 10 이상이면, 마지막 코인 적중 시 진동 폭발. 진동 횟수 1 감소\n\n본래 날붙이만을 만드는 스티그마 공방에서 새벽녘의 해결사를 위해 특별히 제작해 준 의체. 스티그마 공방의 특성을 이해하지 못한 자가 사용한다면, 이 열기를 뿜는 팔은 착용자의 신체까지 녹일 것이다."
    }
]
;
const SINS = ["분노","색욕","나태","탐식","우울","오만","질투"];
const ACTIVATIONS = ["공명","보유"];
const SKILL_POSITIONS = [{key:"1", label:"스킬 1"}, {key:"2", label:"스킬 2"}, {key:"3", label:"스킬 3"}, {key:"def", label:"수비"}];
const SIN_SET = new Set(SINS);











const KEYWORD_DEFS = {
  "화상": "턴 종료 시, 효과 위력만큼 고정 피해를 받고 횟수 1 감소.",
  "출혈": "공격 스킬의 코인 판정 시, 효과 위력만큼 고정 체력 피해를 받음. 코인 판정 후 횟수 1 감소.",
  "진동": "진동 폭발 스킬로 피격 시, 효과 위력만큼 흐트러짐 손상을 입힘. 턴 종료 후 횟수 1 감소.",
  "파열": "공격 스킬로 피격 시, 효과 위력만큼 고정 체력 피해를 받음. 피격 후 횟수 1 감소.",
  "침잠": "공격 스킬로 피격 시, 효과 위력만큼 고정 정신력 피해를 받음(정신력이 없는 대상은 우울 속성 피해로 적용). 피격 후 횟수 1 감소.",
  "호흡": "적중 시 효과 위력에 비례한 확률로 치명타 피해를 입힘. 턴 종료 시, 치명타가 발동했다면 횟수 1 감소.",
  "충전": "소모 시 특정 스킬의 위력이 상승함. 최대 20까지 쌓을 수 있고, 턴 종료 시 횟수 1 감소.",
  "나비": "산나비·죽은나비로 구성되는 특수 침잠. 피격 시 공격자의 정신력을 산나비 수치에 비례해 회복시키고, 정신력이 없는 대상은 죽은나비 수치에 비례한 우울 피해를 받음. 턴 종료 시 산나비가 죽은나비로 전환됨. (로보토미 E.G.O::엄숙한 애도 이상 전용 키워드)",
  "탄환": "특정 스킬을 사용할 때 소모되는 자원. 보유한 탄환이 없으면 해당 공격이 취소됨. 인격마다 종류가 다른 전용 탄환을 사용하는 경우가 많음.",
  "광신": "이번 턴 동안 못이 부여된 대상을 공격할 때 최종 위력이 수치만큼 증가. (N사 광신도 계열 인격 전용 키워드)",
  "도발치": "집중 전투에서 도발치가 높은 슬롯일수록 적에게 공격받을 확률이 높아짐.",
  "신속": "한 턴 동안 속도가 수치만큼 증가.",
  "속박": "한 턴 동안 속도가 수치만큼 감소.",
  "방어 레벨": "한 턴 동안 방어 레벨이 수치에 비례하여 증가·감소(방어 스킬의 최종 위력에 영향).",
  "공격 레벨": "한 턴 동안 공격 레벨이 수치에 비례하여 증가·감소(공격 스킬의 최종 위력에 영향).",
  "취약": "한 턴 동안 스킬로 받는 피해가 수치에 비례하여 증가(최대 10).",
  "보호": "한 턴 동안 스킬로 받는 피해가 수치에 비례하여 감소(최대 10).",
  "합 위력": "합(클래시) 진행 시, 합 위력이 수치만큼 증가·감소.",
  "충전 역장": "충전 역장 기준, (수치×3)만큼 보호막을 얻고 그 보호막이 전부 소모되면 역장이 1 감소. 턴 종료 시 남은 역장 수치만큼 충전 횟수를 얻고 소멸.",
  "보호막": "받는 피해를 체력보다 먼저 흡수하는 수치. 전부 소모되면 사라짐.",
  "흐트러짐": "방어가 완전히 무너져 해당 턴 동안 정해진 만큼 추가 피해(흐트러짐 손상)를 받는 상태.",
  "크리티컬": "치명타. 적중 시 피해량이 배수(기본 1.2배)만큼 증가하는 효과로, 주로 호흡 위력에 비례한 확률로 발동함.",
  "패닉": "정신력이 0 미만으로 떨어졌을 때 발생하는 상태로, 인격마다 정해진 특수 효과(패닉 유형)가 적용됨.",

  // 기본 키워드(대표 키워드 외 범용 상태/자원) 및 범용 키워드(2개 이상의 인격/E.G.O/기프트가 공유하는 키워드) — 나무위키 참조
  "마비": "한 턴 동안 수치만큼 코인 위력이 0으로 고정됨.",
  "행동 불가": "1턴 동안 행동하지 않는 상태.",
  "E.G.O 침식": "이번 턴 동안 일반 명령이 불가능해지고 E.G.O 침식 스킬만 사용 가능한 상태(합은 가능).",
  "파괴 불가 코인": "합 패배 시 코인이 파괴되지 않음. 공격 스킬의 경우 피격 후 해당 코인으로 공격하며, 파괴되지 않은 코인은 코인 위력이 1이 됨.",
  "합 가능 가드": "합 승리 시 대상에게 마지막 합 위력만큼 흐트러짐 손상을 입히고, 합 패배 후 피격 시 최종 위력만큼 공격자의 스킬 위력을 감소시키는 가드. 합 패배 시에는 레벨 차이·공명으로 인한 위력 증가가 적용되지 않음.",
  "원호 방어": "최댓값 3. 아군이 적에게 일방공격 당할 때 수치를 1 소모해 공격 대상을 자신으로 바꾸고 전용 스킬을 사용함. 보유자가 여럿이면 수치가 가장 높은 아군이 우선 발동하며, 턴 종료 시 제거됨.",
  "광역 난사": "코인을 굴릴 때마다 공격 대상 중 하나를 무작위로 선택해 공격하는 방식(첫 코인은 메인 대상에게 적중). 모든 적중 효과와 피해는 선택된 대상에게만 적용됨.",
  "적출 코인": "합 진행 시 파괴 불가 코인도 파괴할 수 있게 하며, 합 패배 시에는 코인이 파괴되지 않고 위력이 1이 되는 효과.",
  "패닉 변경 불가": "패닉 유형을 변경하는 버프를 얻어도 유형이 바뀌지 않는 대신, 정신력이 없는 대상에게 적용되는 효과가 대신 부여됨.",
  "구더기": "턴 종료 시 수치만큼 탐식 피해를 받고 출혈 횟수가 1 증가한 뒤, 수치가 1 감소.",
  "저주": "턴 종료 시 다음 턴에 공격 위력 감소 1·수비 위력 감소 1·공격 레벨 감소 2·방어 레벨 감소 2 중 무작위로 1개의 효과를 얻고, 수치가 1 감소.",
  "E.G.O 자원 획득량+": "한 턴 동안 스킬 사용 시 획득하는 E.G.O 자원 수가 수치만큼 증가.",
  "약점 분석": "한 턴 동안 대상의 공격 유형 내성 중 '견딤'·'보통' 내성 하나를 무작위로 선택해 약화시킴.",
  "차원 균열": "턴 종료 시 수치만큼 파열 횟수가 증가한 뒤 효과가 소멸.",
  "파열 보호": "한 턴 동안 파열 효과로 받는 피해가 수치당 1 감소.",
  "결투 선포": "부여된 대상과 합 진행 시 합 위력이 증가하고, 공격 적중 시 다음 턴에 신속을 얻음(턴당 최대 4회). 다른 대상에게 다시 부여하면 소멸하며, 다른 캐릭터의 결투 선포가 부여되면 교체됨.",
  "버림": "명령 페이즈에 선택 가능한 스킬(수비·E.G.O 스킬 제외) 중 조건에 맞는 스킬을 패널에서 제거하는 효과. 버려진 스킬은 스킬·코인 효과가 발동하지 않고 E.G.O 자원도 얻지 못함.",
  "탐구한 지식": "이 효과를 보유한 캐릭터가 마지막으로 버린 스킬의 등급(기본값 1, 최대 3).",
  "앙갚음 대상": "이전 턴에 아군에게 스킬로 가장 많이 피해를 준 대상에게 부여됨(최대 1회).",
  "마탄": "최댓값 7. 특정 스킬 효과에 따라 수치가 변하는 자원. 로보토미 E.G.O::마탄 오티스 전용으로, 수치가 높을수록 스킬 3의 위력이 증가.",
  "본국검술": "스킬 사용 시 호흡이 5 이상이면 스킬 1·2의 코인 위력과 크리티컬 피해량이 증가하고, 7 이상이면 스킬 3의 피해량과 크리티컬 피해량이 추가로 증가.",
  "저택의 메아리": "침잠 부여 시 일정 확률로 침잠 횟수가 추가로 증가하고, 대상의 패닉 유형을 '저택의 메아리'로 바꾸는 효과. 정신력이 있는 대상은 패닉 발동 시 아군에게 이 효과를 전파함.",
  "시간 대여": "턴 종료 시 횟수가 2 이상이면 다음 턴에 신속·합 위력 증가·취약을 얻으며, 다음 턴 신속보다 속박이 많으면 해제되고 흐트러짐 상태가 됨. 횟수가 1이면 다음 턴에 속박을 얻음.",
  "시간 유예": "적용된 동안 받는 모든 피해를 저장하며, 전투 종료 시 저장된 피해량에 비례한 나태 피해와 진동 폭발을 가함.",
  "경멸의 시선": "최댓값 7. 수치 1당 가하는 피해량이 증가. 턴 종료 시 소멸하며, 수치가 7이면 소멸 대신 '시선의 경멸'로 변환됨.",
  "시선의 경멸": "보호와 피해량 감소를 얻고, 보유한 스킬 슬롯 중 하나의 도발치가 증가하는 효과. 유지되는 동안에는 경멸의 시선을 얻을 수 없음.",
  "부하": "최댓값 6. 충전 횟수를 소모한 공격 스킬의 피해량이 수치에 비례해 증가. 턴 종료 시 소멸.",
  "찢어진 추억": "최댓값 7. 특정 스킬에 사용되는 자원.",
  "광전": "최댓값 3. 피격 시 공격자의 충전 횟수가 증가(스킬당 1회, 충전 횟수가 낮으면 추가 획득). 턴 종료 시 소멸.",
  "재장전": "동명이의 키워드. 로보토미 E.G.O::엄숙한 애도 이상은 정신력을 소모해 산나비·죽은나비 수치를 초기화한 뒤 패시브 확률에 따라 다시 얻는 효과이며, 그 외 탄환 계열 인격(홍루/히스클리프/오티스/료슈/로쟈 등)은 보유한 탄환을 모두 버리고 최대치만큼 다시 얻는 효과.",
  "전략적 휴식 복지 모드": "턴 종료 시 흐트러짐을 해제하고 전투에서 이탈함(강제 흐트러짐 제외, 사망 처리 아님). 연속 전투에서는 대기 인원과 순서를 교체하며 이탈하고, 복귀 시 일부 효과를 제외한 모든 효과가 제거됨.",
  "딜리버리 캐리어": "턴 시작 시 증가하는(퇴각해도 유지되는) 스택형 자원. 일정 수치 이상마다 속도·합 위력·피해량 증가 등의 버프를 얻지만, 최고 구간에서는 스킬 사용 및 턴 종료 시 체력·정신력 피해를 받음.",
  "혈찬": "최댓값 999. 해당 전투 장소에서 발생한 출혈 피해가 누적되는, 모든 아군이 공유하는 자원. 전투 장소가 바뀌면 초기화됨.",
  "누적 소모 혈찬": "이번 전투 동안 누적으로 소모한 혈찬 수치(최댓값 999).",
  "공용 누적 소모 혈찬": "이번 전투 동안 모든 캐릭터가 누적으로 소모한 혈찬 수치(최댓값 999).",
  "올가미": "최댓값 3. 턴 종료 시 자신의 속도만큼 파열 위력을 얻고(최대 5) 다음 턴에 속박을 얻음. 턴 종료 시 수치 1 감소.",
  "일렁임【혈귀】": "최댓값 50. 부여될 때 수치만큼 보호막을 얻으며, 유지되는 동안 그 보호막 체력이 받는 출혈 피해는 혈찬으로 전환됨. 턴 종료 시 제거.",
  "흑운도": "참격 위력 +1. 참격 스킬로 공격이 적중하면 출혈 1을 부여.",
  "임전": "자신의 스킬·코인 효과로 출혈을 부여할 때 부여량 +1. 이번 전투 동안 참격 위력과 참격 피해량이 증가.",
  "점혈": "최댓값 3. 부여한 대상(또는 부위)의 수치에 따라 합 위력·기본 위력이 증가하는 효과. 다른 대상에게 다시 부여하면 기존 효과는 소멸하고, 다른 캐릭터의 점혈이 부여되면 교체됨(수치 유지).",
  "주살【신속】": "기본값 3. 속도 10 이상인 대상이 공격 스킬로 파열이 발동되면 감소하고 자신의 파열 횟수가 증가하며, 수치가 0이 되면 파열 위력만큼 탐식 속성 피해를 받고 소멸.",
  "각력【묘】": "최댓값 3. 턴 종료 시 다음 턴에 신속을 얻고 수치가 1 감소.",
  "복수 대상": "최댓값 10. 특정 스킬·패시브로 소모되며, 수치에 비례해 중지 소속 적에게 받는 피해가 증가. 턴 종료 시 수치가 가장 높으면 다음 턴에 '형제자매의 앙갚음 대상'을 얻음.",
  "형제자매의 앙갚음 대상": "최댓값 1. 모든 인격의 앙갚음 대상으로 취급됨.",
  "오혈": "최댓값 5. 턴 종료 시 수치당 최대 체력의 20%만큼 체력 피해를 받음(흐트러지지 않음). 턴 종료 시 1 증가하며, 사망·퇴각 시 제거.",
  "전장 퇴각": "턴 종료 시 흐트러짐을 해제하고 전투에서 이탈함(강제 흐트러짐 제외, 사망 처리 아님). 연속 전투에서는 대기 인원과 교체되며, 복귀 시 일부 효과를 제외한 모든 효과가 제거됨.",
  "주살【독】": "기본값 5. 대상이 크리티컬 피해를 받아 파열이 발동되면 감소하며, 버프 효과로 감소할 때 공격·방어 레벨 감소를 얻음(턴당 3회). 수치가 0이 되면 파열 위력만큼 탐식 속성 피해를 받고 소멸.",
  "주살【파】": "'주살【신속】'·'주살【독】'과 같은 계열의 디버프 표식(흑수 - 묘 필두 파우스트 전용). 대상이 이 표식을 보유하면 공격 시 피해량이 증가하는 조건으로 참조되며, 세부 발동·소멸 조건은 나무위키 문서에 명시되어 있지 않음.",
  "사완": "최댓값 3. 턴 종료 시 다음 턴에 호흡을 얻고 호흡 횟수가 증가. 기본 공격 스킬로 파열이 있는 대상을 공격하면 호흡을 추가로 얻음. 턴 종료 시 1 감소.",
  "마법소녀 등장!": "이번 턴에 사용하는 공격 스킬이 더하기 코인 스킬로 변경되며, 자신의 사랑/증오당 기본 공격 스킬 피해량이 증가.",
  "매지컬 아르카나": "최댓값 3. 자신의 기본 공격 스킬 피해량이 수치에 비례해 증가. 수치가 최대이고 정신력이 일정 이하이면 정신력이 고정됨.",
  "악당 표식": "돈키호테의 공격에 받는 피해량 +10%. 턴마다 가장 먼저 부여받은 대상에게만 부여됨.",
  "역변-리버스드": "이번 턴에 사용하는 공격 스킬이 빼기 코인 스킬로 변경됨.",
  "히스테리": "최댓값 3. 턴 종료 시 정신력이 0 이상이면 1 감소, 0 미만이면 1 증가.",
  "혈염[血炎]": "최댓값 3. 자신의 기본 스킬로 적에게 부여하는 화상·파열 위력 +1. 이 버프를 보유한 채 적을 흐트러뜨리거나 처치하면 정신력을 회복함(턴당 3회).",
  "지령 표식": "조작 슬롯에 배치된 기본 공격 스킬 중 하나에 새겨지는 표식.",
  "지령 대상": "검지 소속에게 받는 피해 +10%. 검지 소속 인격 수와 상관없이 매 턴 하나의 대상에게만 적용됨.",
  "지령의 가호": "수치 3당 공격 레벨 +1(최대 9). 검지 계열 인격(거미집 검지 아비 등)의 패시브 발동 조건으로 쓰이는 누적 자원.",
  "카르마": "최대 100. 턴 시작 시 수치 10당 방어 레벨 감소, 20당 취약을 얻는 페널티 자원.",
  "지령": "특정 조건에 따라 등급이 주어지는 진행형 자원. 등급이 오를수록 달성 가능한 지령의 가호 최댓값이 증가. 인격에 따라 '지령[단말기]'(거미집 검지 아비 이상, 검지 대행자 돈키호테) 또는 '지령[쪽지]'(검지 수행자:【쪽지】 파우스트)로 이름만 다르게 표기됨.",
  "지령[단말기] Ⅰ": "지령 표식이 새겨진 스킬을 사용하거나 적중시키면 완수되는 가장 기본적인 지령. 턴 시작 시 해금 단계가 없을 때 주어지며, 이 지령으로 달성 가능한 지령의 가호 최댓값은 3.",
  "지령[단말기] Ⅱ": "지령 표식이 새겨진 스킬이 적중해야 완수되는 지령. 턴 시작 시 해금 - I 단계일 때 주어지며, 이 지령으로 달성 가능한 지령의 가호 최댓값은 6.",
  "지령[단말기] Ⅳ": "다음 지령이 오기 전까지 모든 적을 처치해야 완수되는 최종 지령. 턴 시작 시 해금 - Ⅲ 단계일 때 주어짐.",
  "해금": "지령의 가호가 일정 수치 이상이면 단계별로(최대 3단계) 얻는 버프. 단계가 오를수록 방어 레벨과 전투 종료 시 정신력 회복량이 증가.",
  "해금 - I": "지령의 가호가 3 이상이면 얻는 1단계 강화 버프. 방어 레벨 +1, 전투 종료 시 정신력 5 회복.",
  "해금 - II": "지령의 가호가 6 이상이면 얻는 2단계 강화 버프. 방어 레벨 +2, 전투 종료 시 정신력 10 회복.",
  "해금 - Ⅲ": "지령의 가호가 9(최대)이면 얻는 3단계 강화 버프. 방어 레벨 +3, 전투 종료 시 정신력 15 회복.",
  "주민등록 마이크로칩": "최댓값 2. 분노·질투 속성으로 피격 시 받는 피해량 +10%. 합 패배 시 화상을 얻음(턴당 최대 3회). 턴 종료 시 1 감소.",
  "나생[羅生]": "최댓값 999. 료슈가 가한 스킬 피해 1당 증가하며, 일정 수치마다 기본 스킬 피해량이 증가(최댓값 존재).",
  "중지 - 원한": "최댓값 15. 앙갚음 대상에게 주는 피해량 +20%.",
  "영감": "그림 재료를 보유한 대상 공격 시 피해량 +10%.",
  "탐구 대상": "특정 조건을 만족하면 '그림 재료'로 교체되는 상태.",
  "그림 재료": "출혈을 보유한 대상(집중 전투는 부위별 판정)에게 색욕 속성으로 가하는 피해량 +10%.",
  "분홍 꽃잎": "최댓값 30. 우울 속성 스킬로 피격 시 받는 피해량이 증가하고, 일정 수치마다 피격 시 침잠 횟수가 증가(턴당 2회). 진동 폭발 시 침잠 위력과 합산해 우울 피해를 가함. 턴 종료 시 1 감소.",
  "고전압 외피": "최댓값 20. 수치×5만큼 보호막을 얻고 그 보호막이 소모되면 1 감소. 턴 종료 시 남은 수치만큼 충전 횟수를 얻고 소멸.",
  "신체가 울리는 선율": "속도 최솟값·최댓값 +1. 기본 공격 스킬의 합 위력과 피해량이 증가.",
  "찢긴 색채【루주】": "최댓값 9. 피격 시 일정 수치마다 출혈 위력을 얻음(턴당 1회). 턴 종료 시 다음 턴에 일정 수치마다 방어 레벨 감소를 얻음(최대 2). 턴 종료 시 1 감소.",
  "지혜성도": "최댓값 70. 자신이 부여한 검흔 수치의 총합(턴당 최대 25까지 획득 가능).",
  "작열지대": "해당 전투 장소에서 발생한 화상 피해가 누적되는, 모든 아군이 공유하는 자원. 전투 장소가 바뀌면 초기화됨.",
  "전투 감각": "최댓값 3. 속도 최솟값·최댓값 +2. 기본 스킬로 부여하는 화상 위력·횟수가 증가하며, 특정 스킬의 피해량이 수치에 비례해 증가.",
  "새벽맞이": "최댓값 3. 화상 관련 효과를 부여하는 기본 스킬의 피해량이 증가(분노 속성이면 추가 증가)하고, 해당 스킬 사용 시 합 위력(새벽 사무소 소속은 기본 위력)이 증가. 턴 종료 시 1 감소.",
  // 고유 키워드(인격/E.G.O/기프트 1개만 지원하는 전용 키워드) — 나무위키 참조
  "시술": "수치가 5가 되면 사망하는 위험한 자원. 수치에 비례해 최대 체력이 감소하고 가하는 피해량이 증가하며, 매 턴 수치만큼 신속을 얻음.",
  "마지막 개조": "매 턴 공격 위력, 수비 위력, 신속을 얻지만 부여 후 3턴이 지나면 반드시 사망하는 버프.",
  "분홍 리본": "이번 턴 공격 스킬의 코인을 사용할 때마다 수치가 증가하며, 턴 종료 시 그 수치만큼 대상에게 속박을 부여하고 사라짐.",
  "주시": "표적으로 지정한 대상이 관통·타격 속성으로 받는 피해를 한 턴간 20% 증가시키는 효과. 표적을 처치하면 처치한 아군의 정신력이 회복됨.",
  "갈증": "즉흥 조리 패시브의 회복량을 수치에 비례해 증가시키는 스택형 자원으로, 패시브 발동 시 전부 소모됨.",
  "방출 전류": "피격당하면 공격자의 충전 횟수를 증가시키고, 우울 속성 피격 시에는 자신의 파열 횟수도 늘어나는 대신 피격할 때마다 수치가 1씩 감소함.",
  "침잠쇄도": "대상의 침잠 횟수와 침잠 위력을 곱한 만큼 정신 피해를 입히고 침잠을 제거하는 효과. 대상의 정신력이 -45 이하로 떨어지면 초과된 피해량은 우울 속성 피해로 전환됨.",
  "이상 부적": "공격 적중 시 대상의 파열 횟수를 소모해 파열을 부여하고, 피격당하면 자신도 파열을 얻는 스택형 자원. 턴 종료 시 최대치에 도달하면 전부 소모되며 그만큼 고정 피해를 스스로 받음.",
  "K사 앰플": "턴 시작 시 수치가 4 미만이면 수치에 비례해 체력을 회복하지만, 수치가 4 이상이 되면 그대로 사망하는 위험한 자원.",
  "부당 수익": "출혈이 부여된 대상에게 앞면으로 적중시킬 때마다 쌓이는 스택. '총알은 비싸다고' 패시브 발동 시 전부 소모하여 추가 피해를 줌.",
  "1대1 대결": "피격당하는 슬롯이 특정 한 유닛에게만 타게팅되도록 강제하고, 동시에 그 슬롯과 합을 이루는 공격 스킬끼리만 대결이 성립하도록 만드는 효과 (스킬 재사용에는 적용되지 않음).",
  "원호 공격": "부여받은 대상이 공격 스킬을 사용해 적을 공격하면, 그 종료 시점에 자신이 1스킬로 해당 적을 일방 공격하는 효과. 자신이 사용할 스킬 목록에는 영향을 주지 않음.",
  "가열된 가스 작살": "한 턴 동안 공격이 앞면으로 적중할 때마다 대상에게 화상 1을 부여하는 효과.",
  "과열된 가스 작살": "한 턴 동안 공격이 적중할 때마다(앞뒤 무관) 대상에게 화상 1을 부여하는, 가열된 가스 작살의 상위 효과.",
  "본국검 - 세법 전수": "이번 턴 동안 스킬 1의 최종 위력을 수치만큼 증가시키는 효과.",
  "본국검 - 자법 전수": "이번 턴 동안 스킬 2의 최종 위력을 수치만큼 증가시키는 효과.",
  "추모": "자신의 호흡 수치가 일정 이상이면 스킬 1·2의 코인 위력과 크리티컬 피해량이, 더 높으면 스킬 3의 피해량과 크리티컬 피해량이 추가로 증가하는 패시브 효과.",
  "왕의 앞으로": "가중치 1인 자신의 공격이 적중하면, 코인 결과값의 일정 비율만큼 메인 대상 외에 체력이 가장 낮은 적 2명에게 같은 속성의 추가 피해를 입히는 효과.",
  "묶인 왕의 앞으로": "왕의 앞으로의 강화판으로, 코인 결과값의 100%만큼 체력이 가장 낮은 적 2명에게 추가 피해를 입히는 효과.",
  "버. 표": "이 효과를 지닌 대상에게는 '에드가 가문 치프 버틀러 료슈'의 특정 스킬이 강화되어 발동하는 표식. 턴 종료 시 수치가 1 감소함.",
  "불안정한 격정": "공격 적중 시 화상을 부여하고 대상에게 이미 화상이 있으면 위력이 강화되는 변신형 버프. 수비 스킬로 전투를 시작하면 피격 시에도 화상을 되돌려주지만, 턴 종료 시 변신 유지 턴 수에 비례해 정신력이 계속 깎임.",
  "울음 방울": "적용 중인 보호막이 턴 종료 시에도 사라지지 않게 유지시키는 효과. 이 보호막이 피격으로 파괴되면 공격자에게 침잠 위력·횟수를 합쳐 무작위로 부여하며, 보호막 수치는 최대 체력의 60%를 넘을 수 없음.",
  "지식 단련": "스킬을 버릴 때 최대 체력 비례 보호막과 합 위력 증가를 얻게 해주는 스택형 자원. 공격 스킬로 체력 피해를 받을 때마다 감소하며, 흐트러지면 완전히 사라짐.",
  "관": "쌓인 수치에 따라 다음 턴에 피해량 증가, 속도 증가, 합 위력 증가 등 다양한 버프를 단계적으로 얻게 해주는 스택형 자원.",
  "와일드헌트": "부여되면 그 턴은 체력이 1로 남아 버티다가 턴 종료 시 체력을 절반 회복하고 정신력이 초기화되는 부활형 효과. 이후 공격으로 사망하면 E.G.O 자원을 얻고 공격자에게 침잠을 부여하지만, 부활한 다음 턴이 끝나면 결국 사망함.",
  "듀라한": "공격 레벨을 크게 올리는 대신 방어 레벨을 낮추고 속도를 높이는 위험 감수형 버프. 매 턴 종료 시 정신력이 계속 소모되며, 정신력이 너무 낮아지면 유지되지 않음.",
  "다가오는 파탄": "정신력이 있는 대상은 패닉 유형이 '파탄'으로 바뀌어 사기 저하·패닉 시 침잠과 합 위력 감소 페널티를 받게 하고, 정신력이 없는 대상은 앞면 확률을 낮추는 디버프. 중첩되지 않고 갱신됨.",
  "하얗게 태워버렸군": "적안과 참회를 자신은 보유할 수 없는 대신, 기본 스킬로 이를 획득할 때마다 체력·정신력 비율이 가장 낮은 아군을 회복시켜주는 대체 효과. 턴 종료 시 사라짐.",
  "초청받지 않은 자": "사망 시 자신을 마지막으로 공격한 대상의 정신력을 회복시키고 효과를 다른 아군에게 넘기는 버프. 자신의 침잠 수치가 쌓일수록 받는 피해량이 함께 증가함.",
  "방어 태세": "부여되면 다음 턴 동안 도발치를 크게 늘리고 속도를 최솟값에 고정시켜 적의 공격을 자신에게 집중시키는 탱킹형 버프. 합 승리 시 진동 폭발이 일어나고, 피해로 인한 흐트러짐이 발생하지 않음.",
  "집중 공격": "집중 전투 전용 효과로, 부여한 캐릭터가 대상 슬롯의 스택 수에 따라 합 위력·기본 위력·코인 위력 보너스를 얻는 효과. 한 턴 동안 해당 슬롯을 공격하지 못하면 소멸하며, 다른 슬롯으로 옮기면 기존 효과는 사라짐.",
  "재봉 대상": "자신에게 부여된 출혈 수치에 비례해 받는 피해량이 증가하는 디버프. 턴 종료 시 수치가 1 감소함.",
  "핏빛 가위날": "라만차랜드 이발사 오티스 전용 자원(1 미만으로 감소하지 않음). 기본 단계에서는 별도 효과가 없으며, 수치가 10 이상이면 '핏빛 가위날 II'로 전환됨.",
  "핏빛 가위날 II": "수치 5당 공격 레벨 증가 1, 방어 레벨 감소 1을 얻음. 수치가 20 이상이면 '핏빛 가위날 III'으로 전환되고, 소모되어 10 미만이 되면 다시 '핏빛 가위날'로 돌아감.",
  "핏빛 가위날 III": "수치 5당 공격 레벨 증가 1을 얻음(방어 레벨 감소 없음). 소모되어 20 미만이 되면 '핏빛 가위날 II'로 돌아감.",
  "목마른 장미": "턴 종료 시 자신의 출혈 위력이 일정 이상이면 스스로 최대 체력 비례 색욕 피해를 입는 자기 소모형 디버프.",
  "장미 쐐기": "출혈 피해를 받을수록 위력이 강해지고, 자신에게 출혈이 부여될 때마다 상호 출혈을 주고받는 저주형 디버프. 조건 충족 시 소멸하면서 대상 본인과 그 아군 전체에게 색욕 피해를 입히고 혈찬을 늘려줌.",
  "닳아버린 마음": "턴마다 쌓이며 체력이 낮을수록 방어 레벨 증가 효과가 커지는 자원. 체력이 더 크게 떨어지면 기본 스킬 적중 시 가한 피해량에 비례해 체력을 회복할 수 있게 됨.",
  "피로 물든 손": "라만차랜드 신부 그레고르 전용 자원. 기본 단계에서는 별도 효과가 없으며, 수치가 10 이상이면 '피로 물든 손 II'로 전환됨.",
  "피로 물든 손 II": "전투 시작 시 수치 10당 공격 레벨 증가 1을 얻음. 수치가 20 이상이면 '피로 물든 손 III'으로 전환되고, 소모되어 10 미만이 되면 다시 '피로 물든 손'으로 돌아감.",
  "피로 물든 손 III": "전투 시작 시 수치 10당 공격 레벨 증가 1을 얻고, 기본 스킬 적중마다 파열 1·출혈 1을 추가로 부여함. 소모되어 20 미만이 되면 '피로 물든 손 II'로 돌아감.",
  "피어나는 가시": "라만차랜드 공주 로쟈 전용 자원(최댓값 10). 수치 2당 방어 레벨 1 증가(최대 5), 피격 시 공격자에게 출혈 1을 부여한 뒤 수치 1 감소. 수치가 최대치면 '피어나는 가시 II'로 전환됨.",
  "피어나는 가시 II": "기본 효과(수치 2당 방어 레벨 증가, 피격 시 출혈 반격)에 더해 기본 스킬 코인 효과의 출혈·파열 위력 부여량 +1. 수치가 최대치면 '피어나는 가시 III'으로 전환되고, 소모되어 부족해지면 이전 단계로 돌아감.",
  "피어나는 가시 III": "기본 효과(수치 2당 방어 레벨 증가, 피격 시 출혈 반격)에 더해 기본 스킬 코인 효과의 출혈·파열 위력 부여량 +2. 소모되어 부족해지면 '피어나는 가시 II'로 돌아감.",
  "축제의 열기": "출혈이 부여된 대상에게 가하는 피해량을 수치에 비례해 늘려주고, 혈찬을 다루는 스킬이면 그 증가폭이 두 배가 되는 한 턴 한정 버프.",
  "참선": "수치 1당 가하는 피해량이 1%씩 증가하는 스택형 자원 (최대 108까지 누적 가능).",
  "경혈": "1 미만으로 감소하지 않는 자원. 경혈 10당 속도 최솟값·최댓값 1 증가. 수치가 10 이상이면 '경혈 II'로 전환됨.",
  "경혈 II": "경혈 10당 속도 최솟값·최댓값 1 증가에 더해, 턴 시작 시 수치 5당 공격 레벨 증가 1을 얻음. 수치가 20 이상이면 '경혈 III'으로 전환되고, 소모되어 부족해지면 '경혈'로 돌아감.",
  "경혈 III": "경혈 10당 속도 최솟값·최댓값 1 증가에 더해, 턴 시작 시 수치 5당 공격 레벨 증가 1과 방어 레벨 증가 1을 얻음. 소모되어 부족해지면 '경혈 II'로 돌아감.",
  "책임감": "합 위력과 가하는 피해량을 크게 늘리는 대신 받는 피해량도 함께 증가시키는 하이리스크 하이리턴형 버프.",
  "타겟 포착": "부여받은 대상이 공격 스킬을 사용하면 그 종료 시점에 스킬 2로 해당 적을 추가 일방 공격하는 효과. 사용할 스킬 목록에는 영향을 주지 않음.",
  "집중[저격]": "턴이 끝날 때마다 1씩 쌓이는 저격 전용 스택형 자원 (최대 4).",
  "근접 지원": "부여받은 아군이 적에게 공격당하면 그 스킬 종료 시점에 '근접 지원' 스킬로 해당 적을 일방 공격하는 지원 효과.",
  "후방 지원 배치": "턴 종료 시 자동으로 흐트러짐을 해제하고 전투에서 이탈해 대기 인원으로 빠지는 효과. 이후 순서대로 다시 전투에 복귀하며, 복귀 시 체력·정신력은 퇴각 당시 값을 유지함.",
  "첫 번째 마탄": "가하는 피해량이 20% 증가하고, 입힌 피해량만큼 흐트러짐 손상을 추가로 입힘(최대 30).",
  "두 번째 마탄": "가하는 피해량이 10% 증가하며, 메인 대상 대신 그 외의 적 최대 4명에게 피해를 분산시키고 마비 3을 부여함.",
  "세 번째 마탄": "가하는 피해량이 20% 증가하고 공격 가중치가 늘어나며, 적중 시 대상에게 공격 위력 감소와 화상 10을 부여함.",
  "네 번째 마탄": "가하는 피해량이 30% 증가하고 가중치가 늘어나며, 적중 시 흐트러짐 손상을 추가로 입히고 다음 턴 취약 3을 부여함.",
  "다섯 번째 마탄": "가하는 피해량이 30% 증가하고 가중치가 늘어나며, 적중 시 화상 10과 다음 턴 공격·방어 레벨 감소 4를 부여함.",
  "여섯 번째 마탄": "가중치가 크게 증가하며, 적중 시 흐트러짐 손상을 입히고 대상의 화상 수치에 따라 코인을 재사용하지만, 그 대가로 코인의 기본·코인 위력이 감소함.",
  "일곱 번째 마탄": "잃은 체력 비율에 비례해 최대 200%까지 가하는 피해량이 폭증하는 최종 마탄. 조건 충족 시 대상을 취약 상태로 만들지만, 사용자는 공격 종료 시 반드시 사망함.",
  "의뢰 대상": "참격·관통·타격 중 내성이 낮은 속성의 내성을 소폭 올려주는 표식. 이 표식이 붙은 대상을 처치하면 모든 E.G.O 자원을 얻고 처치자의 정신력이 회복됨.",
  "미끼 요정": "가장 왼쪽 슬롯의 도발치를 크게 높여 적의 공격을 유도하는 대신 받는 피해량이 크게 늘어나는 탱킹형 디버프. 피격당할 때마다 공격자에게 파열을 되돌려줌.",
  "깊은 들숨": "크리티컬이 발동할 때 호흡 위력을 소모해 크리티컬 피해량을 추가로 늘려주는 호흡 소비형 자원.",
  "네뷸라이저 β": "오만 완전 공명을 발동한 상태로 전투를 시작하면, 자신과 무작위 아군에게 호흡 위력과 호흡 횟수를 나눠주는 전투 지속형 자원.",
  "검은 구름": "이번 턴 기본 공격 스킬의 코인이 파괴 불가 코인으로 바뀌어 피해로 인한 흐트러짐을 막아주고 출혈 부여량도 늘려주는 버프. 합에서 패배하면 오히려 최종 위력이 추가로 증가함.",
  "구름 장벽": "수비 스킬의 최종 위력을 높여주는 버프로, 특정 조건으로 공격이 종료되거나 턴이 끝나면 소멸함.",
  "가쁜 날숨": "호흡 위력이 일정 이상일 때, 호흡 위력을 얻을 때마다 호흡 횟수도 함께 증가하게 해주는 한 턴 한정 버프.",
  "네뷸라이저 α": "전투 시작 시 모든 아군에게 호흡 위력과 호흡 횟수를 나눠주는 전투 지속형 자원.",
  "12구산 연료": "특정 스킬을 사용할 때 소모되는 자원으로, 수치가 50 이하로 떨어지면 '과열 연료' 상태로 전환됨.",
  "과열 연료": "12구산 연료가 부족해지면 대신 소모되는 예비 자원. 수치가 50을 넘으면 다시 12구산 연료로 전환됨.",
  "앙갚음 장부 [싱클레어]": "수치에 비례해 가하는 피해량이 증가하고, 일정 구간을 넘으면 다음 턴에 타격 피해량 증가나 속도 증가 등 추가 버프를 얻는 스택형 자원.",
  "달궈진 새장": "대상에게 화상이 있으면 분노 내성을 소폭 올려주고, 턴 종료 시 다음 턴에 속박을 부여하는 효과. 매 턴 수치가 절반씩 줄어들며 갱신되지 않음.",
  "얽혀버린 저주 부적": "수치가 최대치에 도달한 상태에서 큰 스킬 피해를 받으면 파열 횟수 증가와 탐식 피해를 동시에 입는 저주형 디버프. 효과가 제거될 때는 다음 턴에 공격 위력 감소를 남긴다.",
  "지네 독": "매 턴 종료 시 스스로 탐식 피해를 입고 방어 레벨이 감소하는 독성 디버프. 수치는 매 턴 절반씩 줄고, 보유자가 사망하면 지네 독이 가장 적은 아군에게 옮겨감.",
  "매화침[埋花針]": "턴이 지나거나 피격당할 때마다 쌓이며 공격 레벨을 올려주는 자원. 보유자가 사망하면 모든 적에게 탐식 피해와 파열을 함께 입힘.",
  "불허[不許]": "체력이 0이 되는 치명적 피해를 받아도 해당 턴 동안은 죽지 않고 버티게 해주는 대신, 그 턴이 끝나면 결국 사망하는 효과.",
  "매화첨[埋花櫼]": "턴마다 자동으로 쌓이며 공격 레벨을 크게 올리는 대신 방어 레벨을 낮추는 자원. 최대치에서 오혈을 얻게 하고, 체력이 0이 되는 치명적 피해를 받으면 그 턴 생존을 보장하며 최후반부에 특수 스킬 '오혈읍루 - 종'을 발동시킴.",
  "시[始]": "자신이 전투에 참여한 턴 수를 세는 스택형 자원. 퇴각하면 초기화됨.",
  "대[待]": "대기나 퇴각 상태로 있었던 턴 수를 세는 자원으로, 복귀 시까지 누적됨.",
  "원[援]": "대상에게 부정적 효과가 5개 이상 걸려 있으면 합 위력과 가하는 피해량을 증가시키는 조건부 버프.",
  "천퇴성 [天退星]": "자신의 속도가 대상보다 높을수록 피해량이 증가하고 진동 부여량도 늘어나는 버프. 호표탄·맹호표탄을 충분히 소모하면 상위 단계인 '신(心) - 천퇴성'으로 승급해 모든 효과가 더욱 강화됨.",
  "오버히트": "맹호표탄을 소모한 만큼 기본 공격 스킬의 합 위력이 줄어드는 대신, 누적 소모량에 따라 보호막, 파괴 불가 코인 피해량 증가, 체력 비율 역전 피해 증가 등 강력한 보상을 단계적으로 얻는 효과. 맹호표탄을 다시 얻으면 사라짐.",
  "흉탄": "찢어진 추억 수치에 비례해 크리티컬 피해량이 증가하고, 적중 시 출혈을 부여하며 처치 시 호흡을 크게 얻는 한 턴 한정 버프.",
  "탐식극(貪食棘)": "턴 종료 시 색욕 공명 수만큼 대상의 출혈 횟수를 늘려주며 자신은 소모되는 자원. 출혈 위력이 99를 넘으면 초과분만큼 혈찬을 얻지만, 그만큼 다음 턴 방어 레벨 감소도 함께 받음.",
  "역류": "피격당할 때마다 침잠 위력을 쌓는 자원으로, 정신력이 -30 이하로 떨어지면 자신과 정신력이 낮은 아군에게 우울 피해를 연쇄적으로 입힘. 보유자가 사망하면 역류가 가장 높은 아군에게 전이됨.",
  "자가 공진 회로": "아군 전체의 충전 횟수 총합에 비례해 스킬 피해량을 늘려주고, 아군의 충전 횟수 누적 소모량이 쌓일수록 모든 아군에게 공격 레벨 증가를 부여하는 팀 버프형 자원.",
  "초아광축전": "충전 횟수를 소모할수록 쌓이는 스택형 자원으로, 수치에 비례해 스킬 피해량과 적의 내성 무시 효과가 강해짐. 보유자가 사망해도 다음 순번 아군에게 수치가 그대로 계승됨.",
  "가호": "동명이의 키워드. (침잠형 자원, 로보토미 E.G.O::눈물로 벼려낸 검 로쟈 계열) 정신력이 높을수록 강해지는 상태로, 정신력에 비례해 '지키는 검'을 얻고 합 승리·피격 시 대상에게 침잠을 부여하며 기본 스킬이 더하기 코인 스킬로 바뀜. (잿빛 별자리의 가호 기프트 버전) 턴 시작 시 보호를 얻고 1을 초과하는 물리 내성을 1로 조정해 물리 피해를 완화하는 별개의 효과 — 이름과 아이콘만 같음.",
  "절망": "정신력이 낮을수록(음수일수록) 강해지는 상태로, 정신력에 비례해 '꿰뚫는 검'을 얻고 합 승리·기본 스킬 적중 시 대상의 침잠 횟수를 늘리며 기본 스킬이 빼기 코인 스킬로 바뀜.",
  "지키는 검": "가호 상태에서 얻는 자원으로, 방어 레벨과 가장 왼쪽 슬롯의 도발치를 늘려주며 턴이 끝나면 사라짐.",
  "꿰뚫는 검": "절망 상태에서 얻는 자원으로, 공격 레벨을 늘리는 대신 모든 스킬 슬롯의 도발치를 낮추며 턴이 끝나면 사라짐.",
  "눈물 벼리기": "매 턴 '깊은 눈물'을 얻고 기본 공격 스킬 피해량을 늘려주는 대신 정신력을 계속 소모하는 자원. 가호 상태면 합 위력을, 절망 상태면 관통 위력을 추가로 얻음.",
  "트라우마 방지장": "적에게 받는 정신력 피해와 침잠 피해를 80%나 크게 줄여주는 방어형 자원. 턴 종료 시 수치가 1씩 감소함.",
  "강력 징수 집행": "신속 상태일 때 기본 스킬로 얻는 진동 횟수를 늘려주고, 자신의 속도가 대상보다 빠를수록 가하는 피해량이 증가하는 패시브.",
  "축적된 과거": "턴 시작 시 수치 3당 합 위력 증가와 공격 레벨 증가를 얻게 해주는 스택형 자원.",
  "초정밀 시간 가속": "속도의 기본값을 수치만큼 높이고, 진동 관련 스킬의 위력·피해량·흐트러짐 손상을 증가시키는 버프. 수치가 1까지 떨어지면 더는 감소하지 않고 스테이지 내내 유지됨.",
  "사중구활[死中求活]": "턴 시작 시 수치 구간별로 공격 레벨 증가, 피해량 증가, 공격 위력 증가를 단계적으로 얻는 스택형 자원.",
  "존명": "부여받은 대상이 공격 스킬을 사용하면, 그 종료 시점에 스킬 3으로 해당 적을 추가 일방 공격하는 효과.",
  "몰아침": "홍원 군주 홍루와 연계를 진행한 횟수를 세는 자원으로, 수치만큼 턴 시작 시 공격·방어 레벨 증가를 얻음.",
  "뜻에 따라, 베겠습니다.": "부여받은 대상이 공격 스킬을 사용하면 그 종료 시점에 스킬 1로 해당 적을 추가 일방 공격하는 효과.",
  "모든 흑수의 주인": "수치가 쌓일수록 속도, 방어 레벨, 공격 레벨, 스킬 피해량 등 다양한 효과를 단계적으로 얻고, 일정치 이상에서는 모든 흑수 계열 아군에게도 공격 레벨 증가를 나눠주는 자원.",
  "흑수환염[黑獸丸染]": "어떤 흑수 인격과 연계했는지에 따라 홍원 군주 홍루가 서로 다른 고유 강화 효과를 중첩해서 얻는 시스템 (피해 감소, 피해량 증가, 파열·호흡 관련 보너스 등).",
  "흑수환염[黑獣丸染]": "어떤 흑수 인격과 연계했는지에 따라 홍원 군주 홍루가 서로 다른 고유 강화 효과를 중첩해서 얻는 시스템 (피해 감소, 피해량 증가, 파열·호흡 관련 보너스 등). (표기 이체자 — '흑수환염[黑獸丸染]'과 동일)",
  "각력【오】": "턴 종료 시 다음 턴에 신속과 도발치를 얻게 해주고, 공격 시작 전 대상에게 진동 위력을 부여하는 자원.",
  "적진 주파": "턴 시작 시 수치에 비례한 보호막을 얻고, 최대치에서는 최종 위력도 증가하는 방어형 자원. 한 스킬로 큰 피해를 입으면 보호를 추가로 얻음.",
  "뇌진탕": "파열 피해와 진동 폭발로 인한 흐트러짐 손상을 1.2배로 더 받게 만드는 디버프. 턴 종료 시 수치가 1 감소함.",
  "호령": "합 위력과 방어 레벨을 함께 올려주는 버프로, 턴이 끝나면 사라짐.",
  "시선": "료슈에게 주고받는 피해량을 서로 늘리는 스택형 자원. 최대치에 도달하면 다음 턴 '경멸'로 전환되며, 보유자가 사망하면 다른 아군에게 옮겨감.",
  "경멸": "시선이 최대치에서 전환되는 효과로, 료슈에게 주고받는 피해량을 절반으로 낮추지만 시선을 다시 얻을 수 없게 되며 결국 소멸하면서 다음 턴 시선으로 되돌아감.",
  "비상용 사탕": "턴 종료 시 체력이 낮으면 체력·정신력을 회복시키고 자신은 소모되며 배고픔도 함께 줄여주는 소모형 자원. 다 쓰면 '빛나는 포만감'으로 전환됨.",
  "빛나는 포만감": "비상용 사탕을 다 쓰면 얻는 효과로, 스테이지 내내 최대 체력을 늘려주고 전투당 한 번 체력·정신력을 전부 회복시켜줌.",
  "배고픔": "쌓일수록 다음 턴 공격 레벨과 피해량 증가를 크게 주지만, 최대치에 도달하면 턴 종료 시 스스로 체력을 깎는 위험 자원.",
  "경화막": "방어 레벨을 올려주고, 피격 직전 자신을 절반 소모해 보호를 대신 얻게 해주는 방어형 자원. 턴이 지날수록 자연 감소함.",
  "시엔징": "턴 시작 시 공격·방어 레벨 증가를 주고 턴 종료 시 1씩 줄어드는 단순 버프.",
  "상급 시엔징": "시엔징의 상위 버전으로, 턴 시작 시 공격·방어 레벨 증가를 두 배로 주고 턴 종료 시 1씩 감소함.",
  "칼집 속 사람": "매 턴 자동으로 쌓이며 가장 왼쪽 슬롯의 도발치와 보호를 늘려주는 자원.",
  "화살 - 시": "특정 스킬을 사용할 때 소모되는 화살형 자원.",
  "박힌 화살": "출혈 위력을 얻는 대신 방어 레벨을 낮추는 디버프성 자원. 소멸 시 동부 시 협회 3과 파우스트에게 '화살 - 시'를 넘겨줌.",
  "목표 조준": "저격 자세와 연동되는 자원으로, 저격 자세가 사라지면 함께 소멸함.",
  "저격 자세": "가장 왼쪽 기본 공격 스킬을 전투 시작 시 자동 사용하는 '섬궁'으로 바꾸고, 피해로 인한 흐트러짐을 막아주는 저격수 전용 상태. E.G.O 스킬을 장착하고 전투를 시작하면 해제됨.",
  "절명": "공격 레벨과 최종 위력을 올려주는 한 턴 한정 버프.",
  "과충전": "행동 불가 상태가 되는 대신 받는 피해량을 크게 줄이고 충전 역장·도발치를 얻는 자원. 소멸 시 다음 턴 충전 횟수와 공격 위력 증가로 보상받지만, 피격당하면 부하도 함께 쌓임.",
  "경혈 갑주": "체력이 줄어든 상태에서 공격으로 체력 피해를 입히면 그 일부를 자신의 체력으로 되돌려받는 흡혈형 자원. 색욕 공명 시 회복량은 줄지만 수치가 소모되지 않음.",
  "연기 집중": "라만차랜드 소속 인격 전용 자원으로, 스킬 1·2·3의 최종 위력과 피해량을 수치에 비례해 강화함. 경혈 갑주가 없으면 자연 감소함.",
  "라만차 퍼레이드": "색욕 속성 공격이나 라만차랜드 소속 인격의 공격으로 받는 피해량을 늘리는 디버프성 자원. 수치가 최대치이면 오히려 라만차랜드 소속에게 가하는 피해량이 줄어듦.",
  "비상용 역장 배터리": "흐트러짐 상태가 되면 전부 소모되어 그만큼 충전 역장으로 전환되는 비상 자원.",
  "주조된 경혈": "출혈이 있는 적과 합할 때 합 위력을 올려주고, 혈찬이 부족할 때 체력을 대신 소모해 혈찬을 메워주는 안전장치형 자원.",
  "광【光】": "위력에 비례해 공격 레벨을 올려주고, 횟수가 매 턴 자연 감소하는 자원.",
  "짝패 - 송학": "스킬 1의 기본 위력을 올려주며, 가장 왼쪽 슬롯에 분노 속성 스킬을 장착해 사용하면 '코이코이'의 짝패 관련 효과를 발동시키는 카드형 자원.",
  "짝패 - 억새": "스킬 2의 기본 위력을 올려주며, 가장 왼쪽 슬롯에 나태 속성 스킬을 장착해 사용하면 '코이코이'의 짝패 관련 효과를 발동시키는 카드형 자원.",
  "짝패 - 청벚꽃": "스킬 3의 기본 위력을 올려주며, 가장 왼쪽 슬롯에 우울 속성 스킬을 장착해 사용하면 '코이코이'의 짝패 관련 효과를 발동시키는 카드형 자원.",
  "상처": "턴 종료 시 다음 턴에 속박을 부여하는 디버프. 최대치에 도달하면 다음 턴 '깊은 상처'로 전환됨.",
  "깊은 상처": "상처가 승급된 형태로, 진동 폭발이 일어날 때마다 출혈 횟수를 늘리고 다음 턴 속박을 부여함. 이 상태에서는 다시 상처를 얻을 수 없음.",
  "치명적인 상처": "깊은 상처보다 더 강력한 최상위 형태로, 진동 폭발 시 출혈 횟수를 3씩 늘리고 속박 부여량도 더 큼.",
  "파쇄흔": "탐식·우울 속성 공격으로 받는 피해량을 늘리고, 정신력이 있는 대상은 패닉 유형을 '파쇄흔'으로 바꿔 사기 저하·패닉 시 합 위력과 방어 레벨을 깎는 디버프.",
  "발각[發角]": "기본 스킬로 적에게 부여하는 파열·침잠 위력을 늘려주는 버프. 턴 종료 시 1씩 감소함.",
  "혈투본능": "수치에 비례해 가하는 피해량을 늘리고, 일정 수치마다 다음 턴 신속을 얻게 해주는 스택형 자원.",
  "호위태세": "받는 피해를 줄이고 자신의 호흡 수치만큼 보호막을 얻게 해주는 탱킹형 버프. 턴 종료 시 호흡을 채워주고 도발치도 늘려줌.",
  "우제트의 눈 [선봉]": "속도를 높이고 보호를 얻게 하며, 자신이 메인 타겟으로 공격당하는 코인이나 첫 합의 대상 코인이 앞면(마이너스 코인은 뒷면)으로 나올 확률을 낮춰주는 회피형 버프.",
  "푸른 모래": "합에서 패배할 때마다 침잠 횟수를 늘리고, 정신력이 있는 대상은 패닉 유형을 '푸른 모래'로 바꿔 사기 저하·패닉 시 합 위력과 속도를 깎는 디버프.",
  "지령[쪽지] Ⅰ": "지령 표식이 새겨진 스킬을 사용하거나 적중시키면 발동하는 지령. 지령의 가호가 낮은 구간(0~2)일 때 부여됨.",
  "지령[쪽지] Ⅱ": "지령 표식이 새겨진 스킬이 적중해야 발동하는 지령. 지령의 가호가 중간 구간(3~5)일 때 부여됨.",
  "지령[쪽지] Ⅲ": "E.G.O 각성 스킬 또는 지령 표식이 새겨진 스킬 3이 적중해야 발동하는 지령. 지령의 가호가 높은 구간(6~8)일 때 부여됨.",
  "지령[쪽지] Ⅳ": "모든 적을 처치해야 완수되는 최종 지령. 지령의 가호가 최대(9)일 때 부여됨.",
  "지령[단말기] Ⅲ": "지령 표식이 새겨진 스킬이 적중해야 완수되는 지령. 턴 시작 시 해금 - II 단계일 때 주어짐. 해금 - Ⅲ 단계에서 이 지령을 얻으면 인격 전용 강화 상태도 함께 얻음(거미집 검지 아비 이상: '신(心) - 운명', 검지 대행자 - 개화 E.G.O::대행 돈키호테: '신(心) - 대행'). 검지 수행자:【쪽지】 파우스트는 같은 단계를 '지령[쪽지] Ⅲ'으로 표기하며 조건이 다름.",
  "신(心) - 대행": "속도·공격 레벨·방어 레벨을 올리고, 기본 스킬의 호흡 획득량과 피해량을 잃은 체력 비율에 비례해 강화하는 승급형 버프.",
  "당연한 믿음": "속도·공격 레벨·방어 레벨을 올리고 호흡 획득량을 늘리며, 자신의 기본 스킬로 인한 정신력 감소가 -15 밑으로 내려가지 않게 막아주는 버프.",
  "깨어진 세계": "화상으로 받는 피해를 1.2배로 늘리고, '이상'의 분노·우울 속성 기본 공격 스킬로 받는 피해량도 증가시키는 디버프.",
  "중지식 강화 문신": "기본 스킬의 최종 위력을 소폭 올리고, 질투·타격 속성 스킬 피해량을 수치에 비례해 크게 늘려주는 문신형 버프.",
  "열선": "화상이 있는 대상을 기본 스킬로 적중시키면 자신의 정신력을 회복시켜주고, 특정 코인의 출혈 부여에 화상도 함께 붙여주는 버프.",
  "현혹": "침잠·화상 합계에 비례해 기본 공격 스킬로 받는 피해량을 늘리고, 정신력이 있는 대상은 패닉 유형을 '현혹'으로 바꿔 사기 저하·패닉 시 속박과 공격 레벨 감소를 주는 디버프.",
  "램프": "쌓이면 다음 턴 속박을 부여하고, 최대치에서 소모되면 도발치를 크게 얻으며 가장 강한 적에게 '현혹'을 부여하는 자원.",
  "숲의 파수꾼": "공격 시작 전 더하기 코인 스킬이면 정신력을 회복시키고, 빼기 코인 스킬이면 정신력을 소모시키는 일회성 효과. 발동 후 사라짐.",
  "월하청도": "턴 시작 시 수치에 비례해 보호막을 얻고 크리티컬 피해량도 함께 늘려주는 자원.",
  "대행 [헤르메스]": "쌓일수록 강력한 스킬을 사용할 수 있게 해주는 자원으로, 최대치(9)에 도달하면 발동함. 해금 단계에 따라 턴당 획득량과 최대 획득 가능치가 달라짐.",
  "신(心) - 운명": "속도를 높이고 호흡 획득량을 늘리며, 자신의 정신력이 대상보다 높을수록 가하는 피해량이 증가하는 승급형 버프.",
  "상처를 가린 가면": "공격 레벨을 올리는 대신 방어 레벨을 낮추지만, 일방 공격으로 받는 피해량은 줄여주는 버프.",
  "이글거리는 상처": "상처를 가린 가면의 상위 버전으로, 공격 레벨을 더 크게 올리고 일방 공격 피해 감소도 강화되지만 매 턴 스스로 화상과 출혈을 얻음.",
  "지령 탐닉": "속도를 크게 높이고 'Furioso-Replica' 스킬의 침잠·호흡 부여량과 피해량을 강화하는 한 턴 한정 버프.",
  "인정 욕구 충족": "지령 표식이 있는 스킬의 피해량과 지령 대상에게 가하는 피해량을 소폭 늘려주는 패시브.",
  "손도끼로 갈비뼈를 찍어 내릴 때는…": "타격 속성 피해를 입히는 코인 효과로, 파괴되지 않고 적중하면 호흡을 2 얻음.",
  "스틸레토로 허파를 꿰뚫을 때는…": "관통 속성 피해를 입히는 코인 효과로, 파괴되지 않고 적중하면 대상에게 침잠을 2 부여함.",
  "바스타드 소드로 어깨와 머리를 짓이길 때는…": "참격 속성 피해를 입히며 피해량이 소폭 증가하는 코인 효과로, 파괴되지 않고 적중하면 다음 턴 공격 레벨 증가를 얻음.",
  "레이피어로 몸에 10개 이상의 구멍을 내야 할 때는…": "관통 속성 피해를 입히며 피해량이 소폭 증가하는 코인 효과로, 파괴되지 않고 적중하면 대상에게 다음 턴 방어 레벨 감소를 부여함.",
  "망치로 뒤통수를 으깨야 할 때는…": "타격 속성 피해를 입히며 피해량이 소폭 증가하는 코인 효과로, 파괴되지 않고 적중하면 흐트러짐 손상을 추가로 입힘.",
  "커다란 검으로 몸통을 갈라야 할 때는…": "참격 속성 피해를 입히며 피해량이 크게 증가하는 코인 효과로, 파괴되지 않고 적중하면 대상에게 다음 턴 참격 취약을 부여함.",
  "랜스로 20인치의 구멍을 내야 할 때는…": "관통 속성 피해를 입히며 피해량이 크게 증가하는 코인 효과로, 파괴되지 않고 적중하면 대상에게 다음 턴 관통 취약을 부여함.",
  "채찍으로 살점을 만 갈래 떼어내야 할 때는…": "타격 속성 피해를 입히며 피해량이 크게 증가하는 코인 효과로, 파괴되지 않고 적중하면 대상에게 다음 턴 타격 취약을 부여함.",
  "낫으로… 누군가처럼 공간을 따라 베어내야 할 때는…": "참격 속성 피해를 크게 늘려주는 최상위 코인 효과로, 파괴되지 않고 적중하면 반드시 크리티컬로 적중함.",
  "화력": "수치 1당 가하는 피해량이 10%씩 증가하는 스택형 자원(최대 10).",
  "연약": "수치 1당 받는 피해량이 10%씩 증가하는 디버프성 스택 자원(최대 10).",
  "훌륭한 미감": "더하기 코인 스킬의 코인 위력과 빼기 코인 스킬의 기본 위력을 올리고, 전체 스킬 피해량도 30% 늘려주는 버프.",
  "고독": "우울 속성 공격으로 받는 피해를 늘리고, 정신력이 있는 대상은 패닉 유형을 '고독'으로 바꾸며 정신력이 없는 대상은 침잠 횟수를 늘리는 디버프.",
  "꽃잎": "수치 10당 공격 레벨을 1씩 올려주는 스택형 자원 (최대 30, 턴당 최대 15까지 획득 가능).",
  "잔향": "침잠 피해를 받을 때마다 쌓이고 진동 폭발 시 아군에게 전파되는 자원. 최대치에 도달하면 스스로 진동 폭발과 우울 피해를 유발하며 소멸하고, 보유자가 사망하면 남은 수치가 아군에게 나눠짐.",
  "포자": "턴 종료 시 수치에 비례해 화상 횟수를 늘리고 다음 턴 속박을 부여하는 자원.",
  "충성 페로몬": "수치 구간에 따라 다음 턴 보호, 신속, 합 위력 증가를 단계적으로 부여하는 자원.",
  "재장전[포자보충]": "정신력을 소모해 포자탄(특수 탄환)을 최대치까지 즉시 재보충하는 효과.",
  "포자탄[기본]": "뫼르소의 로보토미 E.G.O::호넷【변조】가 라이플(기본) 모드에서 코인 사용 시 소모하는 특수 탄환.",
  "포자탄[산탄]": "뫼르소의 로보토미 E.G.O::호넷【변조】가 샷건(산탄) 모드에서 코인 사용 시 소모하는 특수 탄환.",
  "호넷[라이플]": "현재 무기 형태가 '라이플' 모드임을 나타내는 상태 표식.",
  "호넷[샷건]": "현재 무기 형태가 '샷건' 모드임을 나타내는 상태 표식.",
  "리듬": "가하는 피해량과 공격 레벨을 늘리는 대신 방어 레벨을 낮추는 한 턴 한정 자원.",
  "페로몬": "도발치를 높이고, 피격당하면 공격자에게 화상 3을 되돌려주는 효과.",
  "페로몬 표식": "자신의 화상 수치에 비례해 피격 시 받는 피해량이 늘어나는 한 턴 한정 디버프.",
  "텐션 업": "분노·색욕 속성 스킬의 피해량을 늘려주지만, 피격당하면 수치에 비례해 흐트러짐 피해를 입는 하이리스크 자원.",
  "데스페라도": "기본 공격 스킬의 합 위력과 기본 위력을 올려주고, 최대치에서는 코인 위력까지 변화시키는 한 턴 한정 자원.",
  "전하침": "충전 횟수를 다루는 스킬로 받는 피해량을 늘리는 디버프. 질투 속성 스킬에는 효과가 두 배로 강화됨.",
  "자가 충전": "최종 위력을 올려주고, 수치가 감소할 때마다 그만큼 충전 횟수로 전환해주는 자원. 이 효과가 남아있는 동안은 체력이 1 미만으로 내려가지 않음.",
  "잔불": "화상 관련 공격을 받을 때마다 소모되는 방어형 자원. 횟수가 다 떨어지면 스스로 화상을 1회 발동시키고 위력이 줄어드는 대신 다시 재충전됨.",
  "작품명: 파시아": "생체 재료 위력이 쌓일수록 기본 공격 스킬과 반격 스킬이 단계적으로 강화되는 효과(기본 위력 증가, 출혈 대상 피해량 증가, 출혈 부여량 증가 등).",
  "아이언 메이든": "도발치를 크게 높여 적의 공격을 유도하고 보호·보호막·방어 레벨을 얻는 탱킹형 버프. 상대의 마지막 코인에 맞으면 반격하듯 관통 피해와 출혈을 되돌려줌.",
  "구속 해제 - 창작 몰입": "속도를 높이고 기본 스킬을 특수한 것으로 교체하며, 자신보다 속도가 낮은 적에게 가하는 피해량을 늘려주는 버프.",
  "조망": "거미집 약지 제자 파우스트가 전장에 있으면 턴 시작 시 보호를 얻게 해주는 연계형 자원으로, 매 턴 자연 감소함.",
  "신체관극": "적의 공격으로 출혈이 부여될 때마다 다음 턴 출혈 위력·속박·수비 위력 감소 중 무작위 효과를 하나 얻게 해주는 자원.",
  "작품명: 티비아": "생체 재료 위력이 쌓일수록 기본 공격 스킬과 반격 스킬이 5단계에 걸쳐 강화되는 효과(기본 위력 증가, 출혈 대상 피해량·부여량 증가 등). 작품명: 파시아보다 한 단계 더 강화됨.",
  "순간의 예지": "합 위력을 크게 올리고 코인 종류에 따라 코인 위력이나 최종 위력을 추가로 늘려주는 스킬 한정 버프.",
  "찢긴 색채 [블뢰]": "피격당할 때마다 침잠 위력을 쌓아주는 자원으로, 수치가 높으면 스스로 정신력이 깎임.",
  "야수파 - 마스크 드 루": "출혈·침잠 부여량을 늘리고, 대상의 '찢긴 색채' 수치가 충분하면 침잠 횟수나 출혈 횟수를 추가로 늘려주는 버프.",
  "과감한 터치": "출혈·침잠으로 받는 체력·정신력 피해량을 늘려주는 디버프. 턴 종료 시 1씩 감소함.",
  "강렬한 색채": "약지 소속 공격자에게 받는 피해량을 늘리는 디버프. 전투 시작 시 출혈·침잠 계열 효과를 무작위로 얻게 해줌.",
  "경의": "턴 시작 시 수치만큼 공격 레벨 증가나 방어 레벨 증가를 무작위로 얻게 해주는 버프.",
  "레플렉시옹": "'크리틱' 스킬 사용을 막는 대신 턴 시작 시 정신력을 회복시켜주는 자원. 소멸 시 전장의 약지 스튜던트 인격 수만큼 다음 턴 '경의'를 얻게 해줌.",
  "야수파 - 마스크 드 시앵": "대상의 '찢긴 색채' 수치에 비례해 가하는 피해량을 늘리고 출혈·침잠 부여량도 강화하는 버프.",
  "결점 보완": "가하는 피해량을 늘리고, 약지 야수파 도슨트 로쟈가 '크리틱'을 재사용하면 정신력을 회복시켜주는 연계형 버프. 로쟈의 레플렉시옹이 사라지면 함께 소멸함.",
  "육체미": "출혈을 많이 보유한 적에게 가하는 피해량과 코인 위력을 늘려주고, 특수 충전을 소모하는 스킬에도 코인 위력을 더해주는 한 턴 한정 버프.",
  "야성미": "출혈을 많이 보유한 적에게 가하는 피해량을 늘리고, 대상의 정신력이 낮거나 침잠 위력이 높으면 다음 턴 타격 위력 증가를 추가로 얻는 한 턴 한정 버프.",
  "앙갚음 장부 [히스클리프]": "수치 5당 공격 레벨과 방어 레벨을 함께 올려주는 스택형 자원.",
  "원한 문신": "수치 1당 자신의 기본 스킬 피해량이 1%씩 증가하는 스택형 자원(최대 20).",
  "주홍 나방": "턴 종료 시 수치에 비례해 체력과 정신력을 함께 회복시켜주는 자원. 턴 종료 시 수치가 1씩 감소함.",
  "비상용 K사 앰플": "체력이 0이 되는 치명적 피해를 받으면 흐트러짐을 해제하고 체력을 완전히 회복시켜주는 1회성 생명줄 효과. 다른 생존 패시브보다 우선 발동함.",
  "얽힘": "특정 스킬·패시브 효과에 의해 기본 최댓값(4)보다 더 높은 5~9까지 늘어날 수 있는 인연 관련 자원.",
  "절연 [絕緣]": "사망한 아군 거미집 아비 인격 수만큼 쌓이며, 수치에 비례해 받는 피해를 줄여주는 추모형 자원.",
  "잔영": "거미집의 검 료슈의 기본 공격 스킬로 받는 피해를 늘리는 디버프.",
  "검흔 [잔상]": "수치 10당 참격 속성으로 받는 피해량이 1%씩 증가하는 디버프성 스택 자원(최대 100).",
  "신(心) - 지혜성": "속도를 높이고 기본 공격 스킬 사용 시 호흡을 얻게 하며 크리티컬 피해량을 늘려주는 승급형 버프. 일방 공격이나 파괴 불가 코인으로 받는 피해는 줄여줌.",
  "찢겨나온나비": "모든 스킬의 최종 위력을 올려주고, 피해로 흐트러짐 상태가 되면 즉시 해제하며 큰 보호막을 얻게 해주는 생존형 버프.",
  "앙갚음 장부 [거미집]": "거미집 중지 아비 오티스·거미집 중지 제자 이스마엘과의 상호 작용으로 정신력 회복이나 '중지 - 원한' 획득을 얻게 해주는 연계형 자원. 턴이 끝나면 사라짐.",
  "중지 - 원한 문신 [ 큰 누님 ]": "기본 스킬의 최종 위력을 소폭 올리고, 질투·타격 속성 스킬 피해량을 수치에 비례해 크게 늘려주는 문신형 버프 (중지식 강화 문신과 유사한 계열).",
  "잘 봐둬라 딸!": "스킬에 두 번 피격당할 때마다 감소하는 자원으로, 일정 수치 이상이면 기본 스킬의 최종 위력과 타격 스킬 피해량을 늘려줌.",
  "칭찬 받았다!": "'잘 봐둬라 딸!'과 동일한 방식으로 작동하는 자원으로, 스킬에 두 번 피격당할 때마다 감소하며 일정 수치 이상이면 기본 스킬 최종 위력과 타격 스킬 피해량을 늘려줌.",
  "초근성": "자신의 물리 내성을 보통(1.0)으로 조정하고, '중지 - 원한 문신' 수치에 비례해 받는 스킬 피해량을 크게 줄여주는 방어형 자원. 합 승리 시 정신력도 추가로 회복시켜줌.",
  "봉인된 검": "적의 출혈 수치에 비례해 타격 속성 기본 스킬 피해량을 늘려주고, 마지막 코인 적중 시 조건 충족하면 추가 타격 피해를 입히는 검 형태 버프.",
  "1단계 봉인 해제": "봉인된 검의 승급 형태로, 적의 화상·출혈 합계에 비례해 타격 속성 기본 스킬 피해량을 늘려주고 조건 충족 시 추가 타격 피해를 입힘.",
  "2단계 봉인 해제": "1단계 봉인 해제의 다음 승급 형태로, 효과는 동일하되 조건 충족 시의 추가 피해가 참격 속성으로 적용됨.",
  "레바테인": "봉인된 검 계열의 최종 승급 형태로, 턴 시작 시 전장 전체에 화상을 뿌리고 기본 스킬이 전용 스킬로 바뀌며, 조건 충족 시의 추가 피해가 관통 속성으로 적용됨.",
  "가족의 복수": "질투 속성 기본 스킬의 피해량과 최종 위력을 늘려주는 버프.",
  "달아오르는 재미": "'원한 스탬핑' 사용이나 질투 완전 공명 조건 충족 시 감소하는 자원으로, 다 소진되면 특수 스킬 '포장을 뜯어볼까'가 발동됨.",
  "타오름": "이번 턴 처음 사용하는 기본 공격 스킬의 위력을 크게 늘려주는 대신, 적중할 때마다 자신도 체력 피해를 입는 자기 소모형 버프.",
  "포박": "속도를 낮추고 오만 속성으로 받는 피해량을 늘리는 구속형 디버프. 부여자가 공격하지 않으면 매 턴 자연 감소함.",
  "찢긴 상처": "턴 시작 시 출혈을 부여하고 다음 턴 속박도 함께 주는 디버프.",
  "압송 채비": "'포박 [홍루]'가 부여된 적을 상대할 때 합 위력이 오르고, 적중 시 출혈과 호흡도 얻게 해주는 연계형 버프. 포박 대상이 없으면 소멸함.",
  "추모주": "턴 시작 시 호흡을 얻게 해주고, 자신의 호흡 위력에 비례해 크리티컬 피해량과 합 위력을 늘려주는 자원.",
  "원한": "속도를 크게 높이고, 공격 적중 시 입힌 피해량의 일부만큼 자신의 체력을 회복시켜주는 흡혈형 버프.",
  "한 서린 검집": "아군이 체력 피해를 받을 때마다 '맺혀가는 응어리'를 쌓고 '추모' 패시브를 최대 효과로 강제 발동시키며, 오만 공명 시 검계 아군 전체에게 버프를 나눠주는 검계 전용 지속 효과.",
  "맺혀가는 응어리": "아군이 입은 체력 피해량만큼 쌓이는 자원으로, '골단'의 위력을 늘려주고 '육참'·'골단'의 마지막 코인 적중 시 피해량을 크게 증폭시키며 소모됨.",
  "본국검 - 진전 전수": "전장의 검계 소속 아군 수에 비례해 기본 공격 스킬 위력을 늘려주는 버프. 자신이 검계 살수라면 효과가 더욱 강화됨.",
  "도깨비팔": "받는 피해를 줄이고 스킬 사용 시 신속을 얻게 해주는 버프로, 전투가 끝나면 소멸하며 호흡 횟수를 남겨줌.",
  "살수본위": "수치만큼 공격 레벨을 올려주고 참격 스킬 적중 시 호흡을 얻게 해주는 자원. 검계 소속 아군이 사망하면 감소함.",
  "묵 공방 - 예[銳] 2식 발도 / 추력:도깨비불": "참격 속성 기본 공격 스킬 피해량을 늘리는 대신 수비 스킬의 합 위력을 낮추고, 수치에 비례해 다음 턴 신속도 얻게 해주는 자원.",
  "본국검 - 격법 전수": "더하기 코인 위력과 크리티컬 피해량을 늘려주는 한 턴 한정 버프.",
  "결투 고조": "거미집 엄지 제자 히스클리프의 스킬·패시브 효과에 영향을 주는 스택형 자원 (구체 수치는 나무위키 문서에 미기재).",
  "힘줄 절단": "부여 시 위력이 감소하고 턴이 끝나면 사라지는 디버프 (구체 수치는 나무위키 문서에 미기재).",
  "완성되어가는 교본": "기본 스킬 피해량을 늘려주는 스택형 자원 (구체 수치는 나무위키 문서에 미기재).",
  "예지안": "쌓였다가 매 턴 일정량 감소하는 자원 (최대 15, 세부 감소량은 나무위키 문서에 미기재).",
  "예지안 과열": "예지안이 과열 상태로 전환된 형태로, 공격 레벨 증가와 방어 레벨 감소를 동반하며 조건 충족 시 다시 '예지안'으로 되돌아감 (구체 수치는 나무위키 문서에 미기재).",
  "가속하는 미래": "수치에 비례해 기본 스킬의 피해량과 합 위력, 코인 위력을 늘려주는 스킬 한정 버프 (구체 수치는 나무위키 문서에 미기재).",
  "사냥 표적": "거미집 엄지 아비 로쟈에게 기본 스킬로 받는 피해량을 늘리는 디버프 (구체 수치는 나무위키 문서에 미기재).",
  "신(心) - 불명예": "속도를 높이고 기본 스킬의 진동·화상 부여량을 늘리며, 자신의 호흡 위력에 비례해 가하는 피해량도 증가시키는 승급형 버프 (구체 수치는 나무위키 문서에 미기재).",
  "불꽃나비의 관": "기본 스킬 적중 시마다 쌓이는 자원으로, 일정 수치를 넘으면 초과분에 비례해 다음 턴 화상을 부여하며 최대치에서는 특히 강한 화상 효과를 발동함.",
  "과열된 관": "턴 종료 시 다음 턴에 화상 3을 남기고 사라지는 일회성 효과.",
  "정오": "기본 공격 스킬의 위력·피해량을 늘리고, '노을빛 검'과 '타오르는 일격' 스킬에 화상 강제 발동 및 작열지대 소모형 추가 피해 효과를 부여하는 변신형 버프.",
  "고독한 정오": "정오의 상위 승급 형태로, 기본 공격 스킬 강화 폭이 더 크고 '타오르는 일격'의 추가 피해도 더 강하며, 전투당 한 번 치명적 피해로부터 생존할 수 있는 효과가 추가됨.",
  "새벽불": "턴 시작 시 화상을 부여해주고 기본 공격 스킬 적중 시 계속 쌓이는 자원으로, 수치가 높을수록 적에게 부여하는 화상 위력·횟수가 강화됨.",
  "새벽 사무소": "공격 레벨을 올려주는 팀 버프로, 최대치에서는 정신력 회복도 주지만 같은 효과를 가진 아군이 모두 사망하면 소멸함.",
  "새벽에서 노을로": "흐트러짐 구간을 줄이고 스스로 흐트러짐을 해제하며 스킬을 강화 스킬로 바꿔주는 변신형 버프. 정신력이 일정 수준 밑으로 떨어지지 않게 막아주며, 밀랍날개 상태에서는 보호막과 화상 반격 효과가 추가됨.",
  "타오르는 노을": "새벽에서 노을로의 최종 승급 형태로, 정신력 유지 하한선과 회복량이 더 크고, 턴 시작 시 자동으로 밀랍날개 상태가 되어 체력·정신력을 완전히 회복시켜주며 방어 효과도 더욱 강화됨.",
  "도주 장치": "체력이 10이 되는 치명적 피해를 받아도 그 턴은 버티게 해주고, 이후 자동으로 전투에서 이탈시켜 목숨을 보전하게 하는 생존형 효과.",
  "차원 표류": "피격 직전 자동으로 발동해 최대 체력 비례 보호막을 얻게 해주는 방어형 자원.",
  "사색 차원": "수치 구간에 따라 공격 레벨, 방어 레벨, 충전 획득량, 스킬 피해량을 단계적으로 강화해주는 자원. 최대치를 넘겨 얻은 만큼은 다음 턴으로 이월됨.",
  "입회 - 동부 섕크": "공격 레벨을 수치만큼 올려주고, 일정 수치 이상이면 기본 스킬의 호흡 획득량도 늘려주는 자원 (구체 수치는 나무위키 문서에 미기재).",

  "양극성": "아군 인격을 스킬 대상으로 지정할 수 있음. 스킬 자동 지정 시 또는 일반 전투면 편성 순서가 가장 빠른 아군을 우선 지정. 대상이 아군이면 공격이 적중하지 않고 수비 스킬(합 가능 수비 포함)을 발동시키지 않으며, 아군을 지정했으면 전투 시작 시 스킬이 발동됨.",
  "표류 관성": "특수 충전. 횟수 최댓값 20. 충전 위력·횟수를 증가/감소시키는 효과를 동일하게 적용받으며, 턴 종료 시 횟수 1 감소.",
  "마름질 표식": "최댓값 4. 이 효과를 보유한 대상이 사망하면 부여자가 정신력 5를 회복하고 다음 턴에 공격 레벨 증가 1을 얻음(턴당 3회).",
  "두 가위": "최댓값 1. 공격 레벨 +3, 방어 레벨 +3. 충전 인격이면 스킬 사용 시 정신력 5 회복(턴당 1회). 기본 스킬 적중 시 해당 코인 최종 피해량의 5%만큼 참격 피해. 턴 종료 시 소멸.",
  "꽃가위": "최댓값 2. 수치당 가하는 피해량 +7%.",
  "감각 균열": "최댓값 5. 자신을 제외한 아군 피격 시 자신의 진동 횟수 1 증가 후 이 효과 수치 1 감소(스킬당 1회). 자신을 제외한 아군이 없으면 피격 시 진동 위력 2를 얻고 수치 1 감소(스킬당 1회). 크리티컬 공격으로 피격 시 받는 피해량 +(자신의 진동 위력)% (최대 15%).",
};



const IDENTITY_KEYWORDS_DATA = {
  "홍루|동부 섕크 협회 3과": ["화상","호흡"],
  "이상|LCE E.G.O::차원찢개": ["파열","충전"],
  "파우스트|새벽 사무소 해결사": ["화상","진동"],
  "그레고르|새벽 사무소 대표": ["진동","화상"],
  "히스클리프|거미집 엄지 제자": ["화상","진동"],
  "로쟈|거미집 엄지 아비": ["화상","진동"],
  "홍루|S사 추노꾼": ["출혈","호흡"],
  "이스마엘|LCD 현장추리팀": ["출혈","호흡"],
  "오티스|거미집 중지 아비": ["화상","출혈"],
  "료슈|거미집의 검": ["화상","출혈","호흡"],
  "료슈|오트쿠튀르::르누아르 신발관": ["진동","충전"],
  "이스마엘|오트쿠튀르::르루주 부티크": ["출혈","충전"],
  "히스클리프|중지 작은 형님": ["출혈","화상"],
  "뫼르소|약지 야수파 스튜던트": ["출혈","침잠"],
  "로쟈|약지 야수파 도슨트": ["출혈","침잠"],
  "파우스트|거미집 약지 제자": ["출혈","충전"],
  "홍루|거미집 약지 아비": ["출혈","충전"],
  "그레고르|LCE E.G.O::AEDD": ["충전","파열"],
  "료슈|로보토미 E.G.O::잔향 · 외로움": ["침잠","진동","탄환"],
  "뫼르소|로보토미 E.G.O::호넷【변조】": ["출혈","화상"],
  "이상|거미집 검지 아비": ["호흡","침잠"],
  "싱클레어|거미집 소지 제자": ["출혈","호흡"],
  "그레고르|로보토미 E.G.O::램프": ["화상","침잠"],
  "이스마엘|거미집 중지 제자": ["화상","출혈"],
  "돈키호테|검지 대행자 - 개화 E.G.O::대행": ["호흡","침잠"],
  "파우스트|검지 수행자:【쪽지】": ["호흡","침잠"],
  "오티스|LCA 우제트 선봉 3팀 팀장": ["침잠","진동"],
  "로쟈|R사 제 4무리 순록팀": ["충전","침잠"],
  "료슈|홍원 방랑무사": ["호흡","파열"],
  "돈키호테|흑수 - 미": ["파열","침잠"],
  "히스클리프|흑수 - 유 필두": ["화상","파열"],
  "이스마엘|정사무소 대표": ["침잠","진동"],
  "그레고르|밤의 송곳 카피타노": ["출혈","진동"],
  "뫼르소|라만차랜드 왕자": ["출혈","파열","탄환"],
  "히스클리프|W사 4등급 정리 요원 - CCA": ["충전","파열"],
  "파우스트|동부 시 협회 3과": ["출혈","호흡"],
  "료슈|N사 E.G.O::경멸, 경외": ["출혈","진동"],
  "이상|흑수 - 오 필두": ["파열","진동"],
  "싱클레어|흑수 - 유": ["화상","파열","탄환"],
  "홍루|홍원 군주": ["호흡","파열"],
  "오티스|T사 3등급 강력징수직 직원": ["진동"],
  "돈키호테|로보토미 E.G.O::사랑과 증오의 이름으로": ["충전","파열","침잠"],
  "로쟈|로보토미 E.G.O::눈물로 벼려낸 검": ["침잠","충전"],
  "이상|N사 E.G.O::흉탄": ["출혈","호흡"],
  "뫼르소|동부 엄지 카포 IIII": ["화상","진동"],
  "싱클레어|동부 엄지 솔다토 II": ["화상","진동","탄환"],
  "이스마엘|가주 후보": ["호흡","파열"],
  "파우스트|흑수 - 묘 필두": ["파열"],
  "로쟈|흑수 - 사": ["호흡","파열"],
  "그레고르|흑수 - 사": ["호흡","파열"],
  "홍루|R사 제 4무리 순록팀": ["충전","침잠","탄환"],
  "싱클레어|중지 작은 아우": ["출혈"],
  "료슈|흑수 - 묘": ["파열"],
  "오티스|흑수 - 묘": ["파열"],
  "돈키호테|동부 섕크 협회 3과": ["화상","호흡"],
  "그레고르|불주먹 사무소 생존자": ["화상"],
  "이상|남부 리우 협회 3과": ["화상"],
  "히스클리프|흑운회 와카슈": ["출혈","탄환"],
  "이스마엘|흑운회 부조장": ["출혈"],
  "이상|LCE E.G.O::초롱": ["파열"],
  "파우스트|LCE E.G.O::홍염살": ["화상"],
  "홍루|마침표 사무소 대표": ["호흡","탄환"],
  "히스클리프|마침표 사무소 해결사": ["호흡","탄환"],
  "돈키호테|라만차랜드 실장": ["출혈"],
  "싱클레어|북부 제뱌찌 협회 3과": ["파열"],
  "로쟈|라만차랜드 공주": ["출혈","파열"],
  "그레고르|라만차랜드 신부": ["출혈","파열"],
  "홍루|송곳니 사냥 사무소 해결사": ["파열"],
  "오티스|라만차랜드 이발사": ["출혈"],
  "뫼르소|서부 섕크 협회 3과": ["호흡","파열"],
  "싱클레어|서부 츠바이 협회 3과": ["진동"],
  "이스마엘|서부 츠바이 협회 3과": ["진동"],
  "로쟈|북부 제뱌찌 협회 3과": ["파열"],
  "이상|로보토미 E.G.O::엄숙한 애도": ["침잠"],
  "료슈|로보토미 E.G.O::적안 · 참회": ["출혈","충전"],
  "히스클리프|와일드헌트": ["침잠"],
  "파우스트|멀티크랙 사무소 대표": ["충전"],
  "히스클리프|멀티크랙 사무소 해결사": ["충전"],
  "오티스|W사 3등급 정리 요원 팀장": ["충전","파열"],
  "뫼르소|남부 디에치 협회 4과 부장": ["침잠"],
  "돈키호테|T사 3등급 징수직 직원": ["진동"],
  "로쟈|T사 2등급 징수직 직원": ["진동"],
  "료슈|20구 유로지비": ["진동"],
  "홍루|20구 유로지비": ["진동"],
  "이상|약지 점묘파 스튜던트": ["출혈"],
  "오티스|약지 점묘파 스튜던트": ["출혈"],
  "싱클레어|새벽 사무소 해결사": ["화상"],
  "료슈|에드가 가문 치프 버틀러": ["호흡"],
  "이스마엘|에드가 가문 버틀러": ["호흡","침잠"],
  "파우스트|워더링하이츠 버틀러": ["침잠"],
  "그레고르|에드가 가문 승계자": ["침잠"],
  "뫼르소|데드레빗츠 보스": ["파열"],
  "오티스|워더링하이츠 치프 버틀러": ["침잠"],
  "히스클리프|남부 외우피 협회 3과": ["진동"],
  "료슈|남부 리우 협회 4과": ["화상","탄환"],
  "로쟈|남부 리우 협회 4과 부장": ["화상"],
  "파우스트|검계 살수": ["출혈","호흡"],
  "돈키호테|검계 살수": ["호흡"],
  "뫼르소|검계 우두머리": ["호흡"],
  "그레고르|흑운회 부조장": ["출혈"],
  "이스마엘|피쿼드호 선장": ["출혈","화상","호흡"],
  "이상|남부 디에치 협회 4과": ["침잠"],
  "홍루|남부 디에치 협회 4과": ["침잠"],
  "돈키호테|로보토미 E.G.O::초롱": ["파열"],
  "오티스|로보토미 E.G.O::마탄": ["화상"],
  "싱클레어|남부 섕크 협회 4과 부장": ["호흡"],
  "오티스|남부 섕크 협회 4과": ["호흡"],
  "이상|피쿼드호 일등 항해사": ["출혈","호흡"],
  "히스클리프|피쿼드호 작살잡이": ["출혈","호흡"],
  "돈키호테|중지 작은 아우": ["출혈"],
  "뫼르소|중지 작은 아우": ["출혈"],
  "료슈|LCCB 대리": ["호흡","파열","진동","탄환"],
  "그레고르|쌍갈고리 해적단 부선장": ["출혈","호흡","탄환"],
  "이상|W사 3등급 정리 요원": ["충전","파열"],
  "파우스트|로보토미 E.G.O::후회": ["진동"],
  "홍루|갈고리 사무소 해결사": ["출혈"],
  "로쟈|남부 디에치 협회 4과": ["침잠"],
  "이상|어금니 사무소 해결사": ["진동"],
  "오티스|어금니 사무소 해결사": ["진동"],
  "파우스트|남부 세븐 협회 4과": ["파열"],
  "히스클리프|남부 세븐 협회 4과": ["파열"],
  "료슈|W사 3등급 정리 요원": ["충전"],
  "홍루|W사 2등급 정리 요원": ["충전","파열"],
  "파우스트|남부 츠바이 협회 4과": [],
  "그레고르|남부 츠바이 협회 4과": [],
  "이스마엘|어금니 보트 센터 해결사": ["침잠","진동"],
  "싱클레어|어금니 보트 센터 해결사": ["진동"],
  "돈키호테|남부 섕크 협회 5과 부장": [],
  "뫼르소|R사 제 4무리 코뿔소팀": ["출혈","충전"],
  "로쟈|남부 츠바이 협회 5과": ["호흡"],
  "이스마엘|남부 리우 협회 4과": ["화상"],
  "홍루|K사 3등급 적출직 직원": ["파열"],
  "싱클레어|로보토미 E.G.O::홍적": ["파열"],
  "이상|개화 E.G.O::동백": ["침잠"],
  "이스마엘|로보토미 E.G.O::출렁임": ["파열","진동"],
  "히스클리프|로보토미 E.G.O::여우비": ["파열","침잠"],
  "그레고르|장미스패너 공방 해결사": ["충전","파열","진동"],
  "뫼르소|장미스패너 공방 해결사": ["충전","진동"],
  "로쟈|장미스패너 공방 대표": ["충전","진동"],
  "돈키호테|N사 중간 망치": ["진동","출혈"],
  "싱클레어|쥐어들 자": ["출혈","화상"],
  "료슈|료.고.파. 주방장": ["출혈"],
  "그레고르|료.고.파. 조수": ["출혈"],
  "홍루|남부 리우 협회 5과": ["화상"],
  "오티스|남부 세븐 협회 6과 부장": ["파열"],
  "파우스트|쥐는 자": ["출혈"],
  "히스클리프|N사 작은 망치": ["출혈"],
  "뫼르소|N사 큰 망치": ["출혈"],
  "로쟈|N사 중간 망치": ["출혈"],
  "이상|검계 살수": ["호흡"],
  "이상|남부 세븐 협회 6과": ["파열"],
  "이상|LCB 수감자": ["침잠"],
  "파우스트|W사 2등급 정리 요원": ["충전"],
  "파우스트|살아남은 로보토미 직원": ["호흡","파열"],
  "파우스트|LCB 수감자": [],
  "돈키호테|W사 3등급 정리 요원": ["충전","파열"],
  "돈키호테|남부 시 협회 5과 부장": ["호흡"],
  "돈키호테|LCB 수감자": ["출혈"],
  "료슈|흑운회 와카슈": ["출혈"],
  "료슈|남부 세븐 협회 6과": ["파열"],
  "료슈|LCB 수감자": ["호흡"],
  "뫼르소|W사 2등급 정리 요원": ["충전","파열"],
  "뫼르소|남부 리우 협회 6과": ["화상"],
  "뫼르소|LCB 수감자": ["진동"],
  "홍루|콩콩이파 두목": ["출혈"],
  "홍루|흑운회 와카슈": ["출혈"],
  "홍루|LCB 수감자": ["파열","침잠"],
  "히스클리프|R사 제 4무리 토끼팀": ["출혈","충전","파열","탄환"],
  "히스클리프|남부 시 협회 5과": ["호흡"],
  "히스클리프|LCB 수감자": ["진동"],
  "이스마엘|R사 제 4무리 순록팀": ["충전","침잠"],
  "이스마엘|남부 시 협회 5과": ["호흡"],
  "이스마엘|LCCB 대리": ["파열","진동","탄환"],
  "이스마엘|LCB 수감자": ["진동"],
  "로쟈|흑운회 와카슈": ["출혈","호흡"],
  "로쟈|LCCB 대리": [],
  "로쟈|LCB 수감자": ["출혈"],
  "로쟈|오트쿠튀르::수선실": ["진동","충전"],
  "싱클레어|검계 살수": ["출혈","호흡"],
  "싱클레어|남부 츠바이 협회 6과": ["진동"],
  "싱클레어|마리아치 보스": ["호흡","침잠"],
  "싱클레어|LCB 수감자": ["파열"],
  "오티스|검계 살수": ["호흡"],
  "오티스|G사 부장": ["침잠"],
  "오티스|LCB 수감자": ["파열"],
  "그레고르|G사 일등대리": ["파열"],
  "그레고르|남부 리우 협회 6과": ["화상"],
  "그레고르|LCB 수감자": ["파열"],
};

const EGO_CONDITIONAL_DATA = {
  "이상|로보토미 E.G.O::엄숙한 애도": [{type:"ego", name:"엄숙한 애도", sin:"진동"}],
  "뫼르소|검계 우두머리": [{type:"ego", name:"착영휘도", sin:"출혈"}],
  "싱클레어|새벽 사무소 해결사": [{type:"gift", name:"날개 모양 양초", sin:"진동"}],
};


// 특정 인격이 원래 자신의 패시브/킷에 갖고 있는(외부 기프트가 필요 없는) 슬롯 보너스 규칙.
// key: "수감자|인격명". 지정된 groupExtra 예외 목록을 포함해 "거미집" 소속으로 판정되는
// 사망 처리 인격 deadPerStep명당 bonusPerStep만큼 슬롯 보너스, 최대 max까지.
const SLOT_BONUS_INNATE_DATA = {
  "료슈|거미집의 검": { deadPerStep:3, bonusPerStep:1, max:3 },
};
// "거미집" 문자열이 이름에 없지만 거미집 소속으로 판정되는 예외 인격 목록.
const GEOJIP_EXTRA_MEMBERS = new Set([
  "돈키호테|검지 대행자 - 개화 E.G.O::대행",
]);
function isGeojipMember(entry){
  if (!entry) return false;
  if (entry.identity.includes("거미집")) return true;
  return GEOJIP_EXTRA_MEMBERS.has(`${entry.sinner}|${entry.identity}`);
}

const ABBREV_DATA = {
  "이상|약지 점묘파 스튜던트": ["약상"],
  "이상|개화 E.G.O::동백": ["동상"],
  "이상|검계 살수": ["검상","검이상"],
  "이상|W사 3등급 정리 요원": ["W상","떱상"],
  "이상|로보토미 E.G.O::엄숙한 애도": ["죽나상","죽상"],
  "이상|남부 리우 협회 3과": ["리이상","리우상","리상"],
  "이상|흑수 - 오 필두": ["말상","웨이상","오상","오이상"],
  "이상|피쿼드호 일등 항해사": ["피이상","벅상"],
  "이상|LCE E.G.O::초롱": ["초상","초이상","초롱이상","초롱상"],
  "이상|남부 디에치 협회 4과": ["디상","디이상"],
  "이상|어금니 사무소 해결사": ["어상","어이상"],
  "이상|남부 세븐 협회 6과": ["세븐상","셉상","세이상"],
  "파우스트|LCE E.G.O::홍염살": ["홍파우"],
  "파우스트|멀티크랙 사무소 대표": ["멀파우"],
  "파우스트|검계 살수": ["검파우"],
  "파우스트|로보토미 E.G.O::후회": ["후파우"],
  "파우스트|남부 세븐 협회 4과": ["세파우","셉파우"],
  "파우스트|쥐는 자": ["쥐파우"],
  "파우스트|동부 시 협회 3과": ["시파우","활파우"],
  "파우스트|남부 츠바이 협회 4과": ["츠파우"],
  "파우스트|워더링하이츠 버틀러": ["버파우","워파우"],
  "파우스트|살아남은 로보토미 직원": ["로파우","롭파우","L파우"],
  "파우스트|W사 2등급 정리 요원": ["W파우","떱파우"],
  "돈키호테|라만차랜드 실장": ["실돈","혈돈"],
  "돈키호테|T사 3등급 징수직 직원": ["T돈","티돈"],
  "돈키호테|중지 작은 아우": ["중돈"],
  "돈키호테|남부 섕크 협회 5과 부장": ["남섕돈","섕돈"],
  "돈키호테|W사 3등급 정리 요원": ["W돈","떱돈"],
  "돈키호테|동부 섕크 협회 3과": ["동섕돈","섕돈","동생돈"],
  "돈키호테|로보토미 E.G.O::사랑과 증오의 이름으로": ["증돈","증여돈"],
  "돈키호테|흑수 - 미": ["양키","양돈","미돈"],
  "돈키호테|검계 살수": ["검돈"],
  "돈키호테|로보토미 E.G.O::초롱": ["초돈"],
  "돈키호테|N사 중간 망치": ["N돈"],
  "돈키호테|남부 시 협회 5과 부장": ["시돈"],
  "료슈|로보토미 E.G.O::적안 · 참회": ["적슈","적참","적참슈"],
  "료슈|에드가 가문 치프 버틀러": ["넬슈","버슈"],
  "료슈|W사 3등급 정리 요원": ["W슈. 떱슈","W슈","떱슈"],
  "료슈|료.고.파. 주방장": ["요슈"],
  "료슈|흑운회 와카슈": ["'흑슈'","흑슈"],
  "료슈|흑수 - 묘": ["'묘슈'","묘슈"],
  "료슈|홍원 방랑무사": ["대옥슈","료대옥","방랑슈","임대료","방뇨","방뇨료","취슈","취슈야객","방슈"],
  "료슈|20구 유로지비": ["유슈","탐슈"],
  "료슈|남부 리우 협회 4과": ["리료슈","리슈","리우료슈"],
  "료슈|LCCB 대리": ["샷슈","대리슈"],
  "료슈|남부 세븐 협회 6과": ["셉슈","세슈"],
  "뫼르소|서부 섕크 협회 3과": ["섕뫼"],
  "뫼르소|남부 디에치 협회 4과 부장": ["디뫼"],
  "뫼르소|검계 우두머리": ["검뫼"],
  "뫼르소|R사 제 4무리 코뿔소팀": ["R뫼","코뫼"],
  "뫼르소|N사 큰 망치": ["N뫼"],
  "뫼르소|W사 2등급 정리 요원": ["W뫼","떱뫼"],
  "뫼르소|동부 엄지 카포 IIII": ["뫼횡","뇌르소","엄뫼"],
  "뫼르소|라만차랜드 왕자": ["뫼세티","혈뫼","혈르소"],
  "뫼르소|데드레빗츠 보스": ["데뫼"],
  "뫼르소|중지 작은 아우": ["중뫼"],
  "뫼르소|장미스패너 공방 해결사": ["장뫼"],
  "뫼르소|남부 리우 협회 6과": ["리뫼","리우뫼"],
  "홍루|마침표 사무소 대표": ["탕루","마침표 홍루","탕후루","마루"],
  "홍루|20구 유로지비": ["유루","탐루"],
  "홍루|남부 디에치 협회 4과": ["디루"],
  "홍루|K사 3등급 적출직 직원": ["K루","케이루"],
  "홍루|콩콩이파 두목": ["콩루"],
  "홍루|R사 제 4무리 순록팀": ["R루"],
  "홍루|홍원 군주": ["홍치우","군루"],
  "홍루|송곳니 사냥 사무소 해결사": ["송루"],
  "홍루|갈고리 사무소 해결사": ["갈루"],
  "홍루|W사 2등급 정리 요원": ["W루","떱루"],
  "홍루|남부 리우 협회 5과": ["리루","리우루"],
  "홍루|흑운회 와카슈": ["흑루"],
  "히스클리프|흑운회 와카슈": ["흑히스"],
  "히스클리프|마침표 사무소 해결사": ["탕히스","마침표히스"],
  "히스클리프|와일드헌트": ["와히스","마히스"],
  "히스클리프|남부 외우피 협회 3과": ["외히스"],
  "히스클리프|피쿼드호 작살잡이": ["피히스","퀴히스"],
  "히스클리프|로보토미 E.G.O::여우비": ["여히스"],
  "히스클리프|R사 제 4무리 토끼팀": ["R히스"],
  "히스클리프|W사 4등급 정리 요원 - CCA": ["W히스","떱히스"],
  "히스클리프|흑수 - 유 필두": ["유히스 닭히스","닭히스","유히스"],
  "히스클리프|멀티크랙 사무소 해결사": ["멀히스"],
  "히스클리프|남부 세븐 협회 4과": ["세히스","셉히스"],
  "히스클리프|N사 작은 망치": ["N히스"],
  "히스클리프|남부 시 협회 5과": ["시히스"],
  "이스마엘|흑운회 부조장": ["흑이스"],
  "이스마엘|서부 츠바이 협회 3과": ["츠이스"],
  "이스마엘|피쿼드호 선장": ["피이스","선이스","선장마","선장마엘"],
  "이스마엘|어금니 보트 센터 해결사": ["해녀이스","해녀마엘","보트마엘"],
  "이스마엘|남부 리우 협회 4과": ["리이스","리우이스","리우마엘"],
  "이스마엘|R사 제 4무리 순록팀": ["R이스","순록마엘"],
  "이스마엘|가주 후보": ["시춘마엘","가스마엘","시춘이스","가주마엘"],
  "이스마엘|에드가 가문 버틀러": ["버이스","메이스"],
  "이스마엘|로보토미 E.G.O::출렁임": ["출이스","출렁마엘","뚱마엘","출렁이스"],
  "이스마엘|LCCB 대리": ["대이스","대리마엘"],
  "이스마엘|남부 시 협회 5과": ["시이스"],
  "로쟈|라만차랜드 공주": ["혈로쟈","돌쟈","돌로쟈","혈쟈"],
  "로쟈|북부 제뱌찌 협회 3과": ["제로쟈"],
  "로쟈|남부 리우 협회 4과 부장": ["리로쟈","리우로쟈"],
  "로쟈|남부 디에치 협회 4과": ["디로쟈","디쟈"],
  "로쟈|장미스패너 공방 대표": ["장로쟈","장쟈","장미로쟈"],
  "로쟈|흑운회 와카슈": ["'흑로쟈'","흑로쟈","흑쟈"],
  "로쟈|흑수 - 사": ["'사로쟈'","'뱀로쟈'","사로쟈","사쟈","뱀로쟈","뱀쟈"],
  "로쟈|로보토미 E.G.O::눈물로 벼려낸 검": ["절기로쟈","절쟈"],
  "로쟈|남부 츠바이 협회 5과": ["츠로쟈"],
  "로쟈|N사 중간 망치": ["N로쟈","N쟈"],
  "로쟈|LCCB 대리": ["대리로쟈","대로쟈"],
  "싱클레어|북부 제뱌찌 협회 3과": ["제싱"],
  "싱클레어|새벽 사무소 해결사": ["런싱","새싱","필싱"],
  "싱클레어|남부 섕크 협회 4과 부장": ["섕싱"],
  "싱클레어|쥐어들 자": ["쥐싱"],
  "싱클레어|검계 살수": ["검싱"],
  "싱클레어|중지 작은 아우": ["중싱"],
  "싱클레어|동부 엄지 솔다토 II": ["엄싱 엄준싱","엄싱","엄준싱"],
  "싱클레어|흑수 - 유": ["유싱","닭싱"],
  "싱클레어|서부 츠바이 협회 3과": ["츠싱","서츠싱"],
  "싱클레어|어금니 보트 센터 해결사": ["어싱","보트싱"],
  "싱클레어|로보토미 E.G.O::홍적": ["부적싱","홍적싱"],
  "싱클레어|마리아치 보스": ["마리싱","샤카싱"],
  "싱클레어|남부 츠바이 협회 6과": ["츠싱","남츠싱"],
  "오티스|라만차랜드 이발사": ["혈티스","이티스","라티스"],
  "오티스|W사 3등급 정리 요원 팀장": ["W티스","떱티스"],
  "오티스|워더링하이츠 치프 버틀러": ["집티스","버티스","치티스"],
  "오티스|로보토미 E.G.O::마탄": ["마티스"],
  "오티스|어금니 사무소 해결사": ["어티스"],
  "오티스|남부 세븐 협회 6과 부장": ["세티스"],
  "오티스|흑수 - 묘": ["'묘티스'","묘티스"],
  "오티스|T사 3등급 강력징수직 직원": ["티티스","T티스"],
  "오티스|약지 점묘파 스튜던트": ["약티스"],
  "오티스|남부 섕크 협회 4과": ["섕티스"],
  "오티스|검계 살수": ["검티스"],
  "오티스|G사 부장": ["G티스"],
  "그레고르|라만차랜드 신부": ["혈그렉","신부그렉"],
  "그레고르|에드가 가문 승계자": ["퐁그렉","에그렉","에드그렉"],
  "그레고르|쌍갈고리 해적단 부선장": ["갈그렉"],
  "그레고르|남부 츠바이 협회 4과": ["츠그렉"],
  "그레고르|G사 일등대리": ["G그렉"],
  "그레고르|불주먹 사무소 생존자": ["불그렉"],
  "그레고르|흑수 - 사": ["'사그렉'","'뱀그렉'","사그렉","뱀그렉"],
  "그레고르|밤의 송곳 카피타노": ["알그렉","밤그렉","알란그렉"],
  "그레고르|흑운회 부조장": ["'흑그렉'","흑그렉"],
  "그레고르|장미스패너 공방 해결사": ["장미그렉","장그렉"],
  "그레고르|료.고.파. 조수": ["요그렉"],
  "그레고르|남부 리우 협회 6과": ["리그렉","리우그렉"],
  "이상|N사 E.G.O::흉탄": ["흉상","구보상","N상"],
  "이상|거미집 검지 아비": ["뤼상","뤼엔상","크아악","이 새끼","중년","주제에"],
  "이상|LCE E.G.O::차원찢개": ["찢상","차찢상"],
  "파우스트|흑수 - 묘 필두": ["묘파우"],
  "파우스트|검지 수행자:【쪽지】": ["쪽파우"],
  "파우스트|거미집 약지 제자": ["파비나","약파우","텅파우","멍텅이"],
  "파우스트|새벽 사무소 해결사": ["유나파우","유파우","던파우"],
  "돈키호테|검지 대행자 - 개화 E.G.O::대행": ["돈망석"],
  "료슈|N사 E.G.O::경멸, 경외": ["경경슈","경슈"],
  "료슈|로보토미 E.G.O::잔향 · 외로움": ["잔슈","잔향슈","료박사"],
  "료슈|거미집의 검": ["검슈","거검슈","거슈","아라슈","하라슈"],
  "뫼르소|로보토미 E.G.O::호넷【변조】": ["호넷뫼","호뫼"],
  "뫼르소|약지 야수파 스튜던트": ["약뫼"],
  "홍루|거미집 약지 아비": ["홍리스토","칼루","약루"],
  "홍루|S사 추노꾼": ["S루","꾼루","추루"],
  "홍루|동부 섕크 협회 3과": ["동섕루","섕루"],
  "히스클리프|중지 작은 형님": ["히카르도","작형히스","작히스","중지히스","중히스","좁히스"],
  "히스클리프|거미집 엄지 제자": ["히치오","엄지히스","엄히스","닭갈비"],
  "이스마엘|정사무소 대표": ["하나마엘","후다마엘","정이스","좍귀"],
  "이스마엘|거미집 중지 제자": ["키라마엘","중이스","중지이스","중지마엘"],
  "이스마엘|LCD 현장추리팀": ["앵두마엘","좍두"],
  "로쟈|T사 2등급 징수직 직원": ["T로쟈","T쟈"],
  "로쟈|R사 제 4무리 순록팀": ["R쟈"],
  "로쟈|약지 야수파 도슨트": ["약로쟈","약쟈","털로쟈","털쟈"],
  "로쟈|거미집 엄지 아비": ["로렌치나","엄쟈"],
  "싱클레어|거미집 소지 제자": ["렌싱"],
  "오티스|LCA 우제트 선봉 3팀 팀장": ["우티스"],
  "오티스|거미집 중지 아비": ["오티아스","중티스"],
  "그레고르|로보토미 E.G.O::램프": ["램그렉","램프그렉"],
  "그레고르|LCE E.G.O::AEDD": ["충그렉","지네그렉"],
  "그레고르|새벽 사무소 대표": ["살바그렉","던그렉"],
};

const IDENTITY_SKILL_PROFILE = {
  "이상|LCB 수감자": {skills:[{sin:"우울",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"나태",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "이상|남부 세븐 협회 6과": {skills:[{sin:"우울",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"나태",tier:3,num:1}],defense:[{sin:"탐식",tier:4}]},
  "이상|검계 살수": {skills:[{sin:"오만",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"오만",tier:1}]},
  "이상|개화 E.G.O::동백": {skills:[{sin:"탐식",tier:1,num:3},{sin:"나태",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"나태",tier:4}]},
  "이상|어금니 사무소 해결사": {skills:[{sin:"색욕",tier:1,num:3},{sin:"나태",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"나태",tier:4}]},
  "이상|W사 3등급 정리 요원": {skills:[{sin:"나태",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "이상|피쿼드호 일등 항해사": {skills:[{sin:"오만",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"탐식",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "이상|남부 디에치 협회 4과": {skills:[{sin:"탐식",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"나태",tier:3,num:1}],defense:[{sin:"나태",tier:4}]},
  "이상|약지 점묘파 스튜던트": {skills:[{sin:"우울",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"나태",tier:3,num:1}],defense:[{sin:"색욕",tier:4}]},
  "이상|로보토미 E.G.O::엄숙한 애도": {skills:[{sin:"오만",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"나태",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "이상|LCE E.G.O::초롱": {skills:[{sin:"나태",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"탐식",tier:3,num:1}],defense:[{sin:"탐식",tier:1}]},
  "이상|남부 리우 협회 3과": {skills:[{sin:"나태",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"분노",tier:1}]},
  "이상|N사 E.G.O::흉탄": {skills:[{sin:"분노",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"오만",tier:1}]},
  "이상|흑수 - 오 필두": {skills:[{sin:"나태",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"탐식",tier:3,num:1},{sin:"탐식",tier:3,num:0}],defense:[{sin:"탐식",tier:4}]},
  "파우스트|LCB 수감자": {skills:[{sin:"오만",tier:1,num:3},{sin:"나태",tier:2,num:2},{sin:"탐식",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "파우스트|W사 2등급 정리 요원": {skills:[{sin:"질투",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"질투",tier:4}]},
  "파우스트|살아남은 로보토미 직원": {skills:[{sin:"색욕",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"질투",tier:4}]},
  "파우스트|쥐는 자": {skills:[{sin:"질투",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"색욕",tier:4}]},
  "파우스트|남부 츠바이 협회 4과": {skills:[{sin:"질투",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "파우스트|남부 세븐 협회 4과": {skills:[{sin:"질투",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"탐식",tier:3,num:1}],defense:[{sin:"색욕",tier:4}]},
  "파우스트|로보토미 E.G.O::후회": {skills:[{sin:"나태",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"우울",tier:1}]},
  "파우스트|검계 살수": {skills:[{sin:"나태",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "파우스트|워더링하이츠 버틀러": {skills:[{sin:"우울",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "파우스트|멀티크랙 사무소 대표": {skills:[{sin:"색욕",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"질투",tier:4}]},
  "파우스트|LCE E.G.O::홍염살": {skills:[{sin:"나태",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"분노",tier:3,num:1},{sin:"분노",tier:3,num:0}],defense:[{sin:"분노",tier:4}]},
  "파우스트|흑수 - 묘 필두": {skills:[{sin:"나태",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"탐식",tier:3,num:1},{sin:"탐식",tier:3,num:0}],defense:[{sin:"탐식",tier:1},{sin:"탐식",tier:1},{sin:"탐식",tier:3}]},
  "파우스트|동부 시 협회 3과": {skills:[{sin:"분노",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"색욕",tier:3,num:1},{sin:"색욕",tier:3,num:0}],defense:[{sin:"색욕",tier:3},{sin:"색욕",tier:1}]},
  "파우스트|검지 수행자:【쪽지】": {skills:[{sin:"나태",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"우울",tier:1}]},
  "돈키호테|LCB 수감자": {skills:[{sin:"색욕",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"탐식",tier:3,num:1}],defense:[{sin:"색욕",tier:4}]},
  "돈키호테|W사 3등급 정리 요원": {skills:[{sin:"나태",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "돈키호테|남부 시 협회 5과 부장": {skills:[{sin:"분노",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"분노",tier:4}]},
  "돈키호테|N사 중간 망치": {skills:[{sin:"색욕",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"색욕",tier:4}]},
  "돈키호테|남부 섕크 협회 5과 부장": {skills:[{sin:"색욕",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "돈키호테|중지 작은 아우": {skills:[{sin:"분노",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"질투",tier:1},{sin:"질투",tier:3}]},
  "돈키호테|로보토미 E.G.O::초롱": {skills:[{sin:"탐식",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"탐식",tier:4}]},
  "돈키호테|검계 살수": {skills:[{sin:"오만",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"나태",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "돈키호테|T사 3등급 징수직 직원": {skills:[{sin:"탐식",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"나태",tier:3,num:1}],defense:[{sin:"나태",tier:4}]},
  "돈키호테|라만차랜드 실장": {skills:[{sin:"나태",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"색욕",tier:3,num:1},{sin:"나태",tier:1,num:0},{sin:"분노",tier:2,num:0},{sin:"색욕",tier:3,num:0}],defense:[{sin:"색욕",tier:1},{sin:"색욕",tier:1}]},
  "돈키호테|동부 섕크 협회 3과": {skills:[{sin:"탐식",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"분노",tier:4}]},
  "돈키호테|로보토미 E.G.O::사랑과 증오의 이름으로": {skills:[{sin:"분노",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"질투",tier:3,num:1},{sin:"분노",tier:1,num:0},{sin:"질투",tier:2,num:0},{sin:"질투",tier:3,num:0}],defense:[{sin:"질투",tier:4}]},
  "돈키호테|흑수 - 미": {skills:[{sin:"색욕",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"탐식",tier:1}]},
  "돈키호테|검지 대행자 - 개화 E.G.O::대행": {skills:[{sin:"색욕",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"우울",tier:3,num:1},{sin:"색욕",tier:1,num:0},{sin:"오만",tier:2,num:0},{sin:"우울",tier:3,num:0}],defense:[{sin:"우울",tier:1},{sin:"우울",tier:1}]},
  "료슈|LCB 수감자": {skills:[{sin:"탐식",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"탐식",tier:4}]},
  "료슈|남부 세븐 협회 6과": {skills:[{sin:"나태",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"탐식",tier:3,num:1}],defense:[{sin:"탐식",tier:1}]},
  "료슈|흑운회 와카슈": {skills:[{sin:"탐식",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"색욕",tier:4}]},
  "료슈|료.고.파. 주방장": {skills:[{sin:"분노",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"색욕",tier:4}]},
  "료슈|W사 3등급 정리 요원": {skills:[{sin:"색욕",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"색욕",tier:4}]},
  "료슈|LCCB 대리": {skills:[{sin:"색욕",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"탐식",tier:4}]},
  "료슈|남부 리우 협회 4과": {skills:[{sin:"탐식",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"분노",tier:4}]},
  "료슈|에드가 가문 치프 버틀러": {skills:[{sin:"색욕",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"색욕",tier:4}]},
  "료슈|20구 유로지비": {skills:[{sin:"색욕",tier:1,num:3},{sin:"나태",tier:2,num:2},{sin:"탐식",tier:3,num:1}],defense:[{sin:"나태",tier:4}]},
  "료슈|로보토미 E.G.O::적안 · 참회": {skills:[{sin:"질투",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"색욕",tier:3,num:1},{sin:"색욕",tier:3,num:0}],defense:[{sin:"색욕",tier:1}]},
  "료슈|흑수 - 묘": {skills:[{sin:"색욕",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"탐식",tier:1}]},
  "료슈|N사 E.G.O::경멸, 경외": {skills:[{sin:"질투",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"색욕",tier:3,num:1},{sin:"색욕",tier:3,num:0},{sin:"오만",tier:4,num:0}],defense:[{sin:"나태",tier:4}]},
  "료슈|홍원 방랑무사": {skills:[{sin:"우울",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "뫼르소|LCB 수감자": {skills:[{sin:"나태",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"나태",tier:4}]},
  "뫼르소|남부 리우 협회 6과": {skills:[{sin:"색욕",tier:1,num:3},{sin:"나태",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"색욕",tier:4}]},
  "뫼르소|W사 2등급 정리 요원": {skills:[{sin:"질투",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"질투",tier:4}]},
  "뫼르소|N사 큰 망치": {skills:[{sin:"나태",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"분노",tier:1}]},
  "뫼르소|장미스패너 공방 해결사": {skills:[{sin:"우울",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"나태",tier:3,num:1}],defense:[{sin:"나태",tier:4}]},
  "뫼르소|R사 제 4무리 코뿔소팀": {skills:[{sin:"질투",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"질투",tier:4}]},
  "뫼르소|중지 작은 아우": {skills:[{sin:"나태",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"질투",tier:1}]},
  "뫼르소|검계 우두머리": {skills:[{sin:"오만",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"질투",tier:1},{sin:"오만",tier:3}]},
  "뫼르소|데드레빗츠 보스": {skills:[{sin:"색욕",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"탐식",tier:3,num:1}],defense:[{sin:"탐식",tier:1}]},
  "뫼르소|남부 디에치 협회 4과 부장": {skills:[{sin:"탐식",tier:1,num:3},{sin:"나태",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "뫼르소|서부 섕크 협회 3과": {skills:[{sin:"오만",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "뫼르소|동부 엄지 카포 IIII": {skills:[{sin:"나태",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"분노",tier:3,num:1},{sin:"분노",tier:3,num:0}],defense:[{sin:"나태",tier:1}]},
  "뫼르소|라만차랜드 왕자": {skills:[{sin:"질투",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"색욕",tier:3,num:1},{sin:"색욕",tier:3,num:0}],defense:[{sin:"색욕",tier:1}]},
  "홍루|LCB 수감자": {skills:[{sin:"오만",tier:1,num:3},{sin:"나태",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"나태",tier:4}]},
  "홍루|흑운회 와카슈": {skills:[{sin:"색욕",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"나태",tier:3,num:1}],defense:[{sin:"나태",tier:4}]},
  "홍루|콩콩이파 두목": {skills:[{sin:"질투",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"탐식",tier:3,num:1}],defense:[{sin:"탐식",tier:4}]},
  "홍루|남부 리우 협회 5과": {skills:[{sin:"우울",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "홍루|K사 3등급 적출직 직원": {skills:[{sin:"오만",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"나태",tier:3,num:1}],defense:[{sin:"탐식",tier:4}]},
  "홍루|W사 2등급 정리 요원": {skills:[{sin:"오만",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"탐식",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "홍루|갈고리 사무소 해결사": {skills:[{sin:"분노",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "홍루|남부 디에치 협회 4과": {skills:[{sin:"분노",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"나태",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "홍루|20구 유로지비": {skills:[{sin:"우울",tier:1,num:3},{sin:"나태",tier:2,num:2},{sin:"탐식",tier:3,num:1}],defense:[{sin:"나태",tier:4}]},
  "홍루|송곳니 사냥 사무소 해결사": {skills:[{sin:"탐식",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"분노",tier:4}]},
  "홍루|마침표 사무소 대표": {skills:[{sin:"나태",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"오만",tier:3,num:1},{sin:"우울",tier:2,num:0},{sin:"오만",tier:3,num:0},{sin:"오만",tier:1,num:0}],defense:[{sin:"오만",tier:4},{sin:"오만",tier:1}]},
  "홍루|R사 제 4무리 순록팀": {skills:[{sin:"탐식",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"질투",tier:4}]},
  "홍루|홍원 군주": {skills:[{sin:"우울",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"오만",tier:3,num:1},{sin:"오만",tier:3,num:0},{sin:"오만",tier:3,num:0}],defense:[{sin:"탐식",tier:1},{sin:"탐식",tier:1}]},
  "히스클리프|LCB 수감자": {skills:[{sin:"질투",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"질투",tier:1}]},
  "히스클리프|남부 시 협회 5과": {skills:[{sin:"색욕",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"분노",tier:1}]},
  "히스클리프|R사 제 4무리 토끼팀": {skills:[{sin:"분노",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"분노",tier:4}]},
  "히스클리프|N사 작은 망치": {skills:[{sin:"질투",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "히스클리프|로보토미 E.G.O::여우비": {skills:[{sin:"질투",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"나태",tier:3,num:1}],defense:[{sin:"분노",tier:1}]},
  "히스클리프|남부 세븐 협회 4과": {skills:[{sin:"분노",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"탐식",tier:3,num:1}],defense:[{sin:"분노",tier:4}]},
  "히스클리프|피쿼드호 작살잡이": {skills:[{sin:"오만",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"분노",tier:1}]},
  "히스클리프|남부 외우피 협회 3과": {skills:[{sin:"질투",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "히스클리프|멀티크랙 사무소 해결사": {skills:[{sin:"분노",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"질투",tier:4}]},
  "히스클리프|와일드헌트": {skills:[{sin:"분노",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"우울",tier:3,num:1},{sin:"우울",tier:3,num:0}],defense:[{sin:"색욕",tier:1},{sin:"우울",tier:3}]},
  "히스클리프|마침표 사무소 해결사": {skills:[{sin:"우울",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"오만",tier:3,num:1},{sin:"오만",tier:3,num:0}],defense:[{sin:"오만",tier:4},{sin:"오만",tier:4}]},
  "히스클리프|흑운회 와카슈": {skills:[{sin:"분노",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"색욕",tier:3,num:1},{sin:"색욕",tier:1,num:0}],defense:[{sin:"색욕",tier:1}]},
  "히스클리프|W사 4등급 정리 요원 - CCA": {skills:[{sin:"탐식",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"질투",tier:1}]},
  "히스클리프|흑수 - 유 필두": {skills:[{sin:"질투",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"분노",tier:3,num:1},{sin:"분노",tier:3,num:0}],defense:[{sin:"탐식",tier:1}]},
  "이스마엘|LCB 수감자": {skills:[{sin:"분노",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"분노",tier:4}]},
  "이스마엘|R사 제 4무리 순록팀": {skills:[{sin:"우울",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "이스마엘|남부 시 협회 5과": {skills:[{sin:"질투",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"질투",tier:1}]},
  "이스마엘|LCCB 대리": {skills:[{sin:"탐식",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"탐식",tier:4}]},
  "이스마엘|로보토미 E.G.O::출렁임": {skills:[{sin:"우울",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"탐식",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "이스마엘|남부 리우 협회 4과": {skills:[{sin:"색욕",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"분노",tier:1}]},
  "이스마엘|어금니 보트 센터 해결사": {skills:[{sin:"오만",tier:1,num:3},{sin:"나태",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "이스마엘|피쿼드호 선장": {skills:[{sin:"질투",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "이스마엘|에드가 가문 버틀러": {skills:[{sin:"나태",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "이스마엘|서부 츠바이 협회 3과": {skills:[{sin:"오만",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"탐식",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "이스마엘|흑운회 부조장": {skills:[{sin:"질투",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"색욕",tier:4}]},
  "이스마엘|가주 후보": {skills:[{sin:"우울",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"질투",tier:3,num:1},{sin:"우울",tier:1,num:0}],defense:[{sin:"우울",tier:4}]},
  "이스마엘|정사무소 대표": {skills:[{sin:"분노",tier:1,num:3},{sin:"나태",tier:2,num:2},{sin:"우울",tier:3,num:1},{sin:"질투",tier:3,num:0}],defense:[{sin:"오만",tier:1}]},
  "로쟈|LCB 수감자": {skills:[{sin:"탐식",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"분노",tier:1}]},
  "로쟈|흑운회 와카슈": {skills:[{sin:"우울",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"오만",tier:1},{sin:"오만",tier:3}]},
  "로쟈|LCCB 대리": {skills:[{sin:"오만",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"질투",tier:4}]},
  "로쟈|N사 중간 망치": {skills:[{sin:"오만",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"분노",tier:1}]},
  "로쟈|장미스패너 공방 대표": {skills:[{sin:"오만",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"나태",tier:4}]},
  "로쟈|남부 츠바이 협회 5과": {skills:[{sin:"분노",tier:1,num:3},{sin:"나태",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"분노",tier:4}]},
  "로쟈|남부 디에치 협회 4과": {skills:[{sin:"우울",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"나태",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "로쟈|남부 리우 협회 4과 부장": {skills:[{sin:"오만",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"분노",tier:1}]},
  "로쟈|T사 2등급 징수직 직원": {skills:[{sin:"질투",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"나태",tier:3,num:1}],defense:[{sin:"나태",tier:4}]},
  "로쟈|북부 제뱌찌 협회 3과": {skills:[{sin:"색욕",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"탐식",tier:3,num:1}],defense:[{sin:"탐식",tier:1},{sin:"탐식",tier:1}]},
  "로쟈|라만차랜드 공주": {skills:[{sin:"오만",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"색욕",tier:3,num:1},{sin:"색욕",tier:3,num:0}],defense:[{sin:"색욕",tier:1}]},
  "로쟈|흑수 - 사": {skills:[{sin:"질투",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"탐식",tier:4}]},
  "로쟈|로보토미 E.G.O::눈물로 벼려낸 검": {skills:[{sin:"우울",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"오만",tier:3,num:1},{sin:"우울",tier:1,num:0},{sin:"질투",tier:2,num:0},{sin:"오만",tier:3,num:0}],defense:[{sin:"우울",tier:1},{sin:"우울",tier:1}]},
  "로쟈|R사 제 4무리 순록팀": {skills:[{sin:"우울",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"질투",tier:4}]},
  "싱클레어|LCB 수감자": {skills:[{sin:"오만",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"오만",tier:1}]},
  "싱클레어|검계 살수": {skills:[{sin:"탐식",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"분노",tier:1}]},
  "싱클레어|남부 츠바이 협회 6과": {skills:[{sin:"우울",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"나태",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "싱클레어|마리아치 보스": {skills:[{sin:"나태",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "싱클레어|쥐어들 자": {skills:[{sin:"우울",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"오만",tier:1}]},
  "싱클레어|로보토미 E.G.O::홍적": {skills:[{sin:"탐식",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"탐식",tier:4}]},
  "싱클레어|어금니 보트 센터 해결사": {skills:[{sin:"우울",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"탐식",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "싱클레어|남부 섕크 협회 4과 부장": {skills:[{sin:"탐식",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"탐식",tier:4}]},
  "싱클레어|새벽 사무소 해결사": {skills:[{sin:"우울",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"분노",tier:3,num:1},{sin:"분노",tier:3,num:0}],defense:[{sin:"색욕",tier:4}]},
  "싱클레어|서부 츠바이 협회 3과": {skills:[{sin:"색욕",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"나태",tier:3,num:1}],defense:[{sin:"나태",tier:4}]},
  "싱클레어|북부 제뱌찌 협회 3과": {skills:[{sin:"색욕",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"탐식",tier:1},{sin:"탐식",tier:1}]},
  "싱클레어|중지 작은 아우": {skills:[{sin:"탐식",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"질투",tier:1},{sin:"질투",tier:2},{sin:"질투",tier:3}]},
  "싱클레어|동부 엄지 솔다토 II": {skills:[{sin:"색욕",tier:1,num:3},{sin:"나태",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "싱클레어|흑수 - 유": {skills:[{sin:"색욕",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"탐식",tier:1}]},
  "오티스|LCB 수감자": {skills:[{sin:"나태",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"나태",tier:4}]},
  "오티스|검계 살수": {skills:[{sin:"분노",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "오티스|G사 부장": {skills:[{sin:"나태",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"나태",tier:4}]},
  "오티스|남부 세븐 협회 6과 부장": {skills:[{sin:"탐식",tier:1,num:3},{sin:"나태",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"탐식",tier:4}]},
  "오티스|어금니 사무소 해결사": {skills:[{sin:"분노",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"나태",tier:3,num:1}],defense:[{sin:"나태",tier:4}]},
  "오티스|남부 섕크 협회 4과": {skills:[{sin:"오만",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "오티스|로보토미 E.G.O::마탄": {skills:[{sin:"분노",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "오티스|워더링하이츠 치프 버틀러": {skills:[{sin:"오만",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "오티스|약지 점묘파 스튜던트": {skills:[{sin:"색욕",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"탐식",tier:3,num:1}],defense:[{sin:"색욕",tier:4}]},
  "오티스|W사 3등급 정리 요원 팀장": {skills:[{sin:"오만",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "오티스|라만차랜드 이발사": {skills:[{sin:"탐식",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"탐식",tier:1}]},
  "오티스|흑수 - 묘": {skills:[{sin:"나태",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"탐식",tier:1}]},
  "오티스|T사 3등급 강력징수직 직원": {skills:[{sin:"오만",tier:1,num:3},{sin:"나태",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"나태",tier:4}]},
  "오티스|LCA 우제트 선봉 3팀 팀장": {skills:[{sin:"오만",tier:1,num:3},{sin:"나태",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "그레고르|LCB 수감자": {skills:[{sin:"우울",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"나태",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "그레고르|남부 리우 협회 6과": {skills:[{sin:"분노",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"나태",tier:3,num:1}],defense:[{sin:"나태",tier:4}]},
  "그레고르|G사 일등대리": {skills:[{sin:"탐식",tier:1,num:3},{sin:"나태",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"탐식",tier:4}]},
  "그레고르|료.고.파. 조수": {skills:[{sin:"색욕",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"색욕",tier:4}]},
  "그레고르|장미스패너 공방 해결사": {skills:[{sin:"탐식",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"탐식",tier:4}]},
  "그레고르|남부 츠바이 협회 4과": {skills:[{sin:"나태",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"나태",tier:4}]},
  "그레고르|쌍갈고리 해적단 부선장": {skills:[{sin:"나태",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "그레고르|흑운회 부조장": {skills:[{sin:"나태",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"색욕",tier:4}]},
  "그레고르|에드가 가문 승계자": {skills:[{sin:"질투",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "그레고르|라만차랜드 신부": {skills:[{sin:"탐식",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"색욕",tier:4}]},
  "그레고르|불주먹 사무소 생존자": {skills:[{sin:"색욕",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"우울",tier:1}]},
  "그레고르|흑수 - 사": {skills:[{sin:"오만",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"탐식",tier:4}]},
  "그레고르|밤의 송곳 카피타노": {skills:[{sin:"나태",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"오만",tier:3,num:1},{sin:"나태",tier:1,num:0},{sin:"오만",tier:3,num:0}],defense:[{sin:"색욕",tier:4}]},
  "료슈|거미집의 검": {skills:[{sin:"색욕",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "료슈|오트쿠튀르::르누아르 신발관": {skills:[{sin:"질투",tier:1,num:2},{sin:"오만",tier:2,num:1},{sin:"나태",tier:3,num:1}],defense:[{sin:"나태",tier:4}]},
  "이스마엘|오트쿠튀르::르루주 부티크": {skills:[{sin:"분노",tier:1,num:1},{sin:"질투",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"색욕",tier:4}]},
  "그레고르|로보토미 E.G.O::램프": {skills:[{sin:"분노",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "그레고르|LCE E.G.O::AEDD": {skills:[{sin:"탐식",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"질투",tier:4}]},
  "그레고르|새벽 사무소 대표": {skills:[{sin:"나태",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"분노",tier:4}]},
  "로쟈|약지 야수파 도슨트": {skills:[{sin:"우울",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"색욕",tier:4}]},
  "로쟈|거미집 엄지 아비": {skills:[{sin:"오만",tier:1,num:3},{sin:"나태",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "로쟈|오트쿠튀르::수선실": {skills:[{sin:"오만",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"나태",tier:3,num:1}],defense:[{sin:"나태",tier:1}]},
  "료슈|로보토미 E.G.O::잔향 · 외로움": {skills:[{sin:"나태",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "뫼르소|로보토미 E.G.O::호넷【변조】": {skills:[{sin:"색욕",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"분노",tier:4}]},
  "뫼르소|약지 야수파 스튜던트": {skills:[{sin:"분노",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"색욕",tier:4}]},
  "싱클레어|거미집 소지 제자": {skills:[{sin:"우울",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "오티스|거미집 중지 아비": {skills:[{sin:"색욕",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"질투",tier:4}]},
  "이상|거미집 검지 아비": {skills:[{sin:"탐식",tier:1,num:3},{sin:"오만",tier:2,num:2},{sin:"우울",tier:3,num:1}],defense:[{sin:"우울",tier:4}]},
  "이상|LCE E.G.O::차원찢개": {skills:[{sin:"오만",tier:1,num:3},{sin:"탐식",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"질투",tier:4}]},
  "이스마엘|거미집 중지 제자": {skills:[{sin:"색욕",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"질투",tier:4}]},
  "이스마엘|LCD 현장추리팀": {skills:[{sin:"분노",tier:1,num:3},{sin:"우울",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "파우스트|거미집 약지 제자": {skills:[{sin:"탐식",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"색욕",tier:4}]},
  "파우스트|새벽 사무소 해결사": {skills:[{sin:"오만",tier:1,num:3},{sin:"나태",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"분노",tier:4}]},
  "홍루|거미집 약지 아비": {skills:[{sin:"오만",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"색욕",tier:3,num:1}],defense:[{sin:"색욕",tier:4}]},
  "홍루|S사 추노꾼": {skills:[{sin:"탐식",tier:1,num:3},{sin:"색욕",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"오만",tier:4}]},
  "홍루|동부 섕크 협회 3과": {skills:[{sin:"우울",tier:1,num:3},{sin:"분노",tier:2,num:2},{sin:"오만",tier:3,num:1}],defense:[{sin:"분노",tier:4}]},
  "히스클리프|중지 작은 형님": {skills:[{sin:"분노",tier:1,num:3},{sin:"질투",tier:2,num:2},{sin:"질투",tier:3,num:1}],defense:[{sin:"질투",tier:4}]},
  "히스클리프|거미집 엄지 제자": {skills:[{sin:"색욕",tier:1,num:3},{sin:"나태",tier:2,num:2},{sin:"분노",tier:3,num:1}],defense:[{sin:"분노",tier:4}]},
};

const IDENTITY_SKILL_DETAIL = {
  "이상|LCB 수감자": {skills:[{name:"쳐내기",power:"4",coin:"+7",coinCount:1,coinEffects:{1:"[적중시] 침잠 2 부여"}},{name:"밀어찌르기",power:"4",coin:"+4",coinCount:2,coinEffects:{2:"[적중시] 침잠 2 부여. 침잠 횟수 1 증가"}},{name:"연격",power:"6",coin:"+2",coinCount:3,coinEffects:{1:"[적중시] 침잠 2 부여",2:"[적중시] 침잠 1 부여",3:"[적중시] 대상의 정신력이 0 미만이면 다음 턴에 취약 1 부여"}}],defense:{name:"가드",power:"7",coin:"+3",coinCount:1,coinEffects:{}}},
  "이상|남부 세븐 협회 6과": {skills:[{name:"플레쉬",power:"5",coin:"+7",coinCount:1,coinEffects:{1:"[앞면 적중시] 파열 2 부여"}},{name:"리포스트",power:"5",coin:"+4",coinCount:2,coinEffects:{2:"[적중시] 다음 턴에 취약 1 부여 [적중시] 파열 1 부여"}},{name:"물리네",power:"5",coin:"+3",coinCount:3,coinEffects:{1:"[적중시] 마지막 코인의 효과 부여 값 +1",2:"[적중시] 마지막 코인의 효과 부여 값 +1",3:"[적중시] 다음 턴에 관통 취약 1 부여 [적중시] 파열 1 부여"}}],defense:{name:"가드",power:"9",coin:"+3",coinCount:1,coinEffects:{}}},
  "이상|어금니 사무소 해결사": {skills:[{name:"침착하게",power:"3",coin:"+4",coinCount:2,coinEffects:{2:"[적중시] 진동 횟수 2 증가"}},{name:"도박수",power:"4",coin:"+12",coinCount:1,coinEffects:{1:"[적중시] 진동 횟수 3 증가 [적중시] 자신의 진동 횟수가 5 이상일 때, 진동 폭발 . 대상의 진동 횟수 2 감소"}},{name:"어금니 갈기",power:"4",coin:"+3",coinCount:3,coinEffects:{1:"[적중시] 진동 4 부여 [적중시] 스킬 사용 시 진동 횟수를 소모했으면, 진동 폭발",3:"[적중시] 방어 레벨 감소 2 부여 [적중시] 스킬 사용 시 진동 횟수를 소모했으면, 진동 폭발"}}],defense:{name:"가드",power:"10",coin:"+5",coinCount:1,coinEffects:{}}},
  "이상|피쿼드호 일등 항해사": {skills:[{name:"후벼파기",power:"3",coin:"+4",coinCount:2,coinEffects:{2:"[적중시] 다음 턴에 속박 1 부여 [적중시] 출혈 2 부여"}},{name:"쑤시고 쑤시기",power:"4",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 호흡 2 얻음",2:"[적중시] 출혈 1 부여 [크리티컬 적중 시] 이 코인 재사용 (최대 3회)"}},{name:"급습",power:"4",coin:"+6",coinCount:2,coinEffects:{1:"[적중시] 자신의 호흡 횟수 2 증가",2:"[적중시] 출혈 4 부여 [크리티컬 적중 시] 출혈 횟수 6 증가"}}],defense:{name:"회피",power:"3",coin:"+10",coinCount:1,coinEffects:{}}},
  "이상|남부 디에치 협회 4과": {skills:[{name:"지식 소모",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 탐구한 지식 만큼 흐트러짐 회복",2:"[적중시] 탐구한 지식 만큼 흐트러짐 회복"}},{name:"잠궈닫기",power:"4",coin:"+3",coinCount:3,coinEffects:{2:"[적중시] 탐구한 지식 만큼 침잠 부여",3:"[적중시] 탐구한 지식 만큼 침잠 부여"}},{name:"지식의 가호",power:"4",coin:"+2",coinCount:4,coinEffects:{4:"[적중시] 침잠 횟수 3 증가"}}],defense:{name:"탐구 몰입",power:"12",coin:"+6",coinCount:1,coinEffects:{}}},
  "이상|LCE E.G.O::초롱": {skills:[{name:"E.G.O는 제식 장비라 할지라도,",power:"4",coin:"+3",coinCount:0,coinEffects:{1:"파괴 불가 코인 [적중시] 파열 1 부여",2:"파괴 불가 코인 [적중시] 파열 1 부여"}},{name:"로보토미때의 E.G.O보다 환상체와의 감응 정도에 따라",power:"8",coin:"+6",coinCount:0,coinEffects:{1:"파괴 불가 코인 [적중시] 파열 횟수 2 증가"}},{name:"본체의 특징을 더 유연하게 활용 가능하오",power:"16",coin:"-5",coinCount:3,coinEffects:{1:"[적중시] 파열 횟수 3 증가 [적중시] 다음 턴에 속박 2 부여",2:"[적중시] 파열 1 부여",3:"[적중시] 파열 1 부여"}}],defense:{name:"다만 그 감응과 동기화 정도에 따라 잡아먹힐 수 있소",power:"10",coin:"+5",coinCount:1,coinEffects:{1:"[적중시] 파열 횟수 2 증가"}}},
  "이상|검계 살수": {skills:[{name:"격세",power:"6",coin:"+7",coinCount:1,coinEffects:{1:"[적중시] 다음 턴에 호흡 3 얻음"}},{name:"두의틀기",power:"7",coin:"+2",coinCount:2,coinEffects:{}},{name:"이면찬자",power:"8",coin:"+2",coinCount:3,coinEffects:{1:"[앞면 적중시] 다음 턴에 호흡 2 얻음",3:"크리티컬 피해량 +70%"}}],defense:{name:"반격",power:"10",coin:"+8",coinCount:1,coinEffects:{1:"크리티컬 피해량 +70%"}}},
  "이상|개화 E.G.O::동백": {skills:[{name:"움트는 봉우리",power:"3",coin:"+2",coinCount:3,coinEffects:{2:"[적중시] 다음 턴에 침잠 횟수 1 증가",3:"[적중시] 다음 턴에 침잠 횟수 2 증가"}},{name:"찰나의 꽃바람",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 다음 턴에 침잠 2 부여",2:"[적중시] 다음 턴에 침잠 2 부여",3:"[적중시] 다음 턴에 침잠 2 부여"}},{name:"피를 머금은 향기",power:"6",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 침잠 횟수 1 증가",2:"[적중시] 침잠 횟수 1 증가",3:"[적중시] 대상의 침잠 이 6 이상이면, 침잠쇄도 [적중시] 자신의 진동 횟수가 10 이상이면, 피해량의 40%만큼 추가 피해"}}],defense:{name:"흩날리는 잔향",power:"4",coin:"+10",coinCount:1,coinEffects:{}}},
  "이상|W사 3등급 정리 요원": {skills:[{name:"차원 긋기",power:"5",coin:"+6",coinCount:1,coinEffects:{1:"[적중시] 자신의 충전 횟수 2 증가 [적중시] 파열 2 부여"}},{name:"에너지 순환",power:"5",coin:"+5",coinCount:2,coinEffects:{1:"[적중시] 다음 턴에 속박 1 부여",2:"[적중시] 파열 3 부여 [적중시] 자신의 충전 횟수가 10 이상이면, 파열 3 부여, 파열 횟수 2 증가"}},{name:"차원의 틈",power:"5",coin:"+4",coinCount:3,coinEffects:{1:"[앞면 적중시] 파열 1 부여",2:"[앞면 적중시] 파열 1 부여",3:"[적중시] 스킬 사용시 소모한 충전 횟수 5 당 파열 3 부여 (최대 9) [적중시] 스킬 사용시 충전 횟수 15 소모하였으면, 차원 균열 2 부여 [적 처치 시] 충전 역장 5 얻음"}}],defense:{name:"텅 빈 차원",power:"4",coin:"+10",coinCount:1,coinEffects:{}}},
  "이상|약지 점묘파 스튜던트": {skills:[{name:"덧칠",power:"2",coin:"+3",coinCount:3,coinEffects:{2:"[앞면 적중시] 화상 , 출혈 , 진동 , 파열 , 침잠 중 무작위 1개 효과의 횟수 2 증가",3:"[적중시] 출혈 2 부여"}},{name:"혈점묘화",power:"8",coin:"+8",coinCount:1,coinEffects:{1:"[적중시] 40% 확률로 코인 재사용. 대상이 보유한 부정적인 효과 1개당 재사용 확률 +20% (스킬당 최대 2회 재사용 가능) [적중시] 출혈 횟수 1 증가 [적중시] 화상 , 출혈 , 진동 , 파열 , 침잠 중 무작위 1개 효과의 횟수 3 증가"}},{name:"핏방울 채색",power:"3",coin:"+3",coinCount:4,coinEffects:{2:"[적중시] 출혈 횟수 1 증가. 대상이 보유한 부정적인 효과가 3개 이상이면 추가 2 증가 [적중시] 화상 , 출혈 , 진동 , 파열 , 침잠 중 무작위 1개 효과의 횟수 3 증가",3:"[적중시] 출혈 1 부여. 대상이 보유한 부정적인 효과가 3개 이상이면 2 추가 부여 [적중시] 화상 , 출혈 , 진동 , 파열 , 침잠 중 무작위 1개 효과의 위력 2 부여",4:"대상이 보유한 부정적인 효과 1개당 피해량 +25% (최대 125%) [공격 종료시] 대상이 흐트러졌거나 사망했으면, 부정적인 효과를 가장 적게 보유한 적 2명에게 화상 , 출혈 , 진동 , 파열 , 침잠 중 무작위 1개 효과 2 부여"}}],defense:{name:"붓 털기",power:"10",coin:"+4",coinCount:1,coinEffects:{}}},
  "이상|로보토미 E.G.O::엄숙한 애도": {skills:[{name:"떠난이에게 축하를",power:"4",coin:"+4",coinCount:2,coinEffects:{1:"산나비·죽은나비 1 소모 [적중시] 소모한 산나비·죽은나비 만큼 나비 부여",2:"산나비·죽은나비 1 소모 [적중시] 소모한 산나비·죽은나비 만큼 나비 부여"}},{name:"남은자에게 엄숙한 애도를",power:"4",coin:"+6",coinCount:2,coinEffects:{1:"산나비·죽은나비 5 소모 [적중시] 소모한 산나비·죽은나비 만큼 나비 부여",2:"산나비·죽은나비 1 소모 [적중시] 소모한 산나비·죽은나비 만큼 나비 부여"}},{name:"이상으로 장례는 이상이오",power:"4",coin:"+3",coinCount:4,coinEffects:{1:"산나비·죽은나비 1 소모 [적중시] 소모한 산나비·죽은나비 만큼 나비 부여",2:"산나비·죽은나비 6 소모 [적중시] 소모한 산나비·죽은나비 만큼 나비 부여",3:"보유한 산나비·죽은나비 전부 소모 [적중시] 소모한 산나비·죽은나비 만큼 나비 부여 [적중시] 이 스킬에서 소모한 산나비·죽은나비 1 당 피해량 +4%",4:"[적중시] 대상의 모든 나비 만큼 우울 피해 - 산나비와 죽은나비의 합으로 계산"}}],defense:{name:"관에서나비가날아오리라",power:"10",coin:"+4",coinCount:1,coinEffects:{}}},
  "이상|남부 리우 협회 3과": {skills:[{name:"염참",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 화상 1 부여 [앞면 적중시] 화상 1 부여",2:"[적중시] 화상 1 부여 [앞면 적중시] 화상 1 부여"}},{name:"정면돌파",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 화상 2 부여",2:"[적중시] 화상 2 부여",3:"대상의 화상 당, 피해량 +5% (최대 60%) [적중시] 대상의 화상 이 6 이상이면, 화상 횟수 2 증가"}},{name:"검의 흐름",power:"4",coin:"+3",coinCount:4,coinEffects:{1:"[적중시] 화상 1 부여",2:"[적중시] 화상 1 부여",3:"[적중시] 화상 2 부여",4:"대상의 화상 당, 피해량 +2% (최대 60%) [적중시] 대상의 화상 위력만큼 분노 속성 피해를 줌 (최대 30). 대상의 화상 횟수 2 감소"}}],defense:{name:"염반",power:"5",coin:"+3",coinCount:2,coinEffects:{1:"[앞면 적중시] 화상 1 부여 - 자신에게 보호막이 있으면, 화상 1 추가 부여",2:"[앞면 적중시] 화상 1 부여 - 자신에게 보호막이 있으면, 화상 1 추가 부여"}}},
  "이상|N사 E.G.O::흉탄": {skills:[{name:"헛점 파악",power:"5",coin:"+6",coinCount:1,coinEffects:{1:"[적중시] 자신의 호흡 횟수 1 증가 [크리티컬 적중 시] 출혈 횟수 1 증가 [크리티컬 적중 시] 찢어진 추억 1 얻음"}},{name:"꿰뚫으리라",power:"4",coin:"+6",coinCount:1,coinEffects:{1:"[적중시] 호흡 2 얻음 [크리티컬 적중 시] 출혈 2 부여",2:"파괴 불가 코인 [적중시] 호흡 2 얻음 [적중시] 찢어진 추억 1 얻음 [크리티컬 적중 시] 출혈 2 부여 [크리티컬 적중 시] 찢어진 추억 2 얻음"}},{name:"대상 조정 사격",power:"4",coin:"+7",coinCount:0,coinEffects:{1:"파괴 불가 코인 이 코인에는 메인 타겟만 피해를 입음 메인 타겟이 아군이면, 아래 효과가 적용됨 - 이 공격에 한해 관통 속성 내성을 취약으로 변경함 - 자신의 찢어진 추억 당 피해량 +7% (최대 49%) - 자신의 호흡 당 크리티컬 피해량 +3% (최대 60%)",2:"파괴 불가 코인 이 코인에는 서브 타겟만 피해를 입음 - 메인 타겟이 적이였을 경우, 메인 타겟에게 피해를 입힘 - 첫 번째 코인에서 아군을 처치하지 못했으면, 서브 타겟 중 무작위 1명이 피해를 입음 자신의 찢어진 추억 당, 피해량 +20% (최대 140%) - 첫 번째 코인에서 아군을 처치했으면, 대신하여 자신의 찢어진 추억 당 피해량 +40% (최대 280%) - 호흡 위력당, 크리티컬 피해량 +5% (최대 50%) - 자신의 찢어진 추억 당, 크리티컬 피해량 +10% (최대 70%) - 첫 번째 코인으로 메인 타겟에게 가한 피해 비율(최대 체력 기준)만큼 추가 피해 발생 (최대 100%) [적중시] 출혈 3 부여 - 첫 번째 코인에서 아군을 처치했으면, 대신하여 출혈 5 부여, 출혈 횟수 2 증가"}}],defense:{name:"전방 지원",power:"5",coin:"+7",coinCount:1,coinEffects:{1:"[적중시] 호흡 2 얻음 [적중시] 자신의 호흡 횟수 2 증가"}}},
  "이상|흑수 - 오 필두": {skills:[{name:"베어 무너뜨리리",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 파열 2 부여",2:"[적중시] 파열 횟수 1 증가 [적중시] 진동 2 부여"}},{name:"월도격 [月刀擊]",power:"4",coin:"+5",coinCount:2,coinEffects:{1:"[적중시] 파열 횟수 2 증가 [적중시] 진동 3 부여",2:"[적중시] 진동 폭발 . 대상의 진동 횟수 1 감소 [적중시] 대상에게 주살이 없으면, 뇌진탕 1 부여 [적중시] 대상에게 주살이 있으면, 파열 3 부여"}},{name:"선봉주파",power:"5",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 파열 2 부여 [적중시] 진동 2 부여",2:"[적중시] 다음 턴에 속박 1 부여 - 자신의 적진 주파 가 3 이상이면, 속박 1 추가 부여 [적중시] 진동 횟수 1 증가",3:"[적중시] 진동 폭발 . 대상의 진동 횟수 1 감소. [적중시] 자신의 각력【오】 가 2 이상이면, 뇌진탕 2 부여"}}],defense:{name:"돌진 전, 가다듬겠소",power:"3",coin:"+10",coinCount:0,coinEffects:{1:"파괴 불가 코인"}}},
  "이상|거미집 검지 아비": {skills:[{name:"얼어붙은 피를 삼백삼십 휘감아",power:"3",coin:"+4",coinCount:2,coinEffects:{2:"[적중시] 호흡 2 얻음 [파괴되지 않고 적중시] 침잠 2 부여"}},{name:"소리 없이 손뼉 쳐 즐기고, 목소리 없이 슬피 꿰뚫어",power:"4",coin:"+4",coinCount:3,coinEffects:{2:"[적중시] 침잠 3 부여",3:"[적중시] 자신의 호흡 횟수 2 증가 [파괴되지 않고 적중시] 침잠 횟수 1 증가"}},{name:"날 세워 칼을 웃거라, 낙엽 향 나듯 폭포를 울거라",power:"4",coin:"+3",coinCount:4,coinEffects:{2:"[적중시] 호흡 3 얻음",3:"[적중시] 침잠 3 부여",4:"해금 단계 1당 피해량 +20% (최대 60%) [크리티컬 적중 시] 자신의 호흡 횟수 1 증가 [파괴되지 않고 적중시] 침잠 횟수 3 증가"}}],defense:{name:"예측할 수 없는 변덕으로",power:"4",coin:"+10",coinCount:1,coinEffects:{}}},
  "이상|LCE E.G.O::차원찢개": {skills:[{name:"차원 베기",power:"6",coin:"+7",coinCount:1,coinEffects:{1:"[적중시] 자신의 충전 횟수 6 증가 (스킬당 1회) [적중시] 파열 2 부여 [적중시] 차원 표류 를 1 소모하여 이 코인 재사용 (스킬당 1회)"}},{name:"연속 차원 베기",power:"4",coin:"+6",coinCount:2,coinEffects:{1:"[적중시] 자신의 충전 횟수 6 증가 [적중시] 파열 1 부여",2:"[적중시] 파열 2 부여 [적중시] 차원 균열 1 부여 [적중시] 이 코인 최종 피해량의 ( 충전 위력 × 4)%만큼 참격 피해 (최대 20%)"}},{name:"공간 절단",power:"5",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 자신의 충전 횟수 1 증가 [적중시] 파열 1 부여",2:"[적중시] 자신의 충전 횟수 1 증가 [적중시] 파열 1 부여",3:"[적중시] 파열 1 부여 [적중시] 차원 균열 2 부여 [적중시] 이 코인 최종 피해량의 ( 충전 위력 × 4)%만큼 참격 피해 (최대 20%)"}}],defense:{name:"회피",power:"4",coin:"+10",coinCount:1,coinEffects:{}}},
  "파우스트|LCB 수감자": {skills:[{name:"내려베기",power:"4",coin:"+7",coinCount:1,coinEffects:{1:"[적중시] 마비 1 부여"}},{name:"올려베기",power:"5",coin:"+4",coinCount:2,coinEffects:{2:"[적중시] 다음 턴에 공격 레벨 감소 3 부여"}},{name:"후벼찌르기",power:"7",coin:"+2",coinCount:2,coinEffects:{1:"[앞면 적중시] 다음 턴에 공격 위력 감소 1 부여",2:"[앞면 적중시] 다음 턴에 공격 위력 감소 1 부여"}}],defense:{name:"회피",power:"2",coin:"+10",coinCount:1,coinEffects:{}}},
  "파우스트|W사 2등급 정리 요원": {skills:[{name:"에너지 순환",power:"4",coin:"+8",coinCount:1,coinEffects:{1:"[적중시] 자신의 충전 횟수 2 증가"}},{name:"도약",power:"6",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 자신의 충전 횟수 3 증가",2:"[적중시] 충전 횟수를 3 소모하여 다음 턴에 속박 4 부여"}},{name:"과충전",power:"6",coin:"+3",coinCount:3,coinEffects:{3:"[적중시] 충전 횟수를 5 소모하여 다음 턴에 공격 위력 감소 2 부여. 마비 3 부여"}}],defense:{name:"가드",power:"10",coin:"+2",coinCount:1,coinEffects:{}}},
  "파우스트|살아남은 로보토미 직원": {skills:[{name:"단격",power:"3",coin:"+8",coinCount:1,coinEffects:{1:"[적중시] 파열 2 부여"}},{name:"깊게베기",power:"5",coin:"+3",coinCount:3,coinEffects:{1:"[적중시] 다음 턴에 호흡 1 얻음",2:"[적중시] 다음 턴에 호흡 1 얻음",3:"[적중시] 다음 턴에 신속 4 얻음 [적중시] 다음 턴에 호흡 1 얻음"}},{name:"기회 노리기",power:"4",coin:"+8",coinCount:2,coinEffects:{2:"[앞면 적중시] 파열 5 부여"}}],defense:{name:"회피",power:"3",coin:"+10",coinCount:1,coinEffects:{}}},
  "파우스트|남부 츠바이 협회 4과": {skills:[{name:"순찰",power:"3",coin:"+4",coinCount:2,coinEffects:{2:"[적중시] 다음 턴에 방어 레벨 증가 2를 얻음"}},{name:"고객 경호",power:"4",coin:"+3",coinCount:3,coinEffects:{1:"[적중시] 다음 턴에 방어 레벨 증가 1을 얻음",2:"[적중시] 다음 턴에 방어 레벨 증가 1을 얻음",3:"[적중시] 다음 턴에 방어 레벨 증가 1을 얻음"}},{name:"치안 수호",power:"6",coin:"+5",coinCount:2,coinEffects:{2:"현재 체력 비율이 가장 낮은 아군에게 다음 턴에 신속 1, 방어 레벨 증가 2 부여 대상이 츠바이 협회 해결사면, 신속 1, 방어 레벨 증가 1 추가 부여"}}],defense:{name:"가드",power:"12",coin:"+6",coinCount:1,coinEffects:{}}},
  "파우스트|워더링하이츠 버틀러": {skills:[{name:"압수",power:"3",coin:"+4",coinCount:2,coinEffects:{2:"[적중시] 침잠 2 부여"}},{name:"불청객 맞이",power:"4",coin:"+5",coinCount:2,coinEffects:{2:"[적중시] 침잠 횟수 3 증가"}},{name:"접객도 4식 봉심",power:"4",coin:"+2",coinCount:4,coinEffects:{1:"[적중시] 침잠 횟수 3 증가",4:"[적중시] 다음 턴에 저택의 메아리 2 부여. [적중시] 대상에게 저택의 메아리 가 있으면 침잠 횟수 3 증가"}}],defense:{name:"사냥 대비",power:"7",coin:"+6",coinCount:1,coinEffects:{}}},
  "파우스트|쥐는 자": {skills:[{name:"광소",power:"4",coin:"+3",coinCount:2,coinEffects:{1:"[적중시] 못 1 부여",2:"[적중시] 출혈 2 부여"}},{name:"쥐어짐",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 못 2 부여",2:"[적중시] 못 3 부여",3:"[앞면 적중시] 다음 턴에 마비 1 부여 [적중시] 다음 턴에 주시 부여"}},{name:"처단",power:"6",coin:"+2",coinCount:3,coinEffects:{1:"[적중시] 못 2 부여",2:"[앞면 적중시] 못 2 부여",3:"대상에게 못 이 5 이상 있으면, 피해량 +70%"}}],defense:{name:"불결하군요",power:"4",coin:"+10",coinCount:1,coinEffects:{}}},
  "파우스트|남부 세븐 협회 4과": {skills:[{name:"예측 분석",power:"4",coin:"+3",coinCount:2,coinEffects:{2:"[적중시] 파열 3 부여"}},{name:"대상 해체",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 파열 3 부여",3:"[적중시] 대상의 파열 이 6 이상이면, 다음 턴에 약점 분석 부여"}},{name:"프로파일링",power:"5",coin:"+4",coinCount:3,coinEffects:{2:"[적중시] 파열 3 부여",3:"[공격 종료시] 대상이 흐트러짐 상태가 되거나 사망하면, 다음 턴에 신속 1, 참격 위력 증가 1을 얻음"}}],defense:{name:"빠르게 해결하죠",power:"10",coin:"+4",coinCount:1,coinEffects:{}}},
  "파우스트|로보토미 E.G.O::후회": {skills:[{name:"조여오는 구속구",power:"4",coin:"+7",coinCount:1,coinEffects:{1:"[적중시] 자신의 진동 횟수 3 증가 [적중시] 진동 횟수 3 증가"}},{name:"금속성 울림",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[앞면 적중시] 자신의 진동 횟수 1 증가 [적중시] 다음 턴에 공격 레벨 감소 1 부여",3:"[적중시] 진동 5 부여 [적중시] 다음 턴에 더하기 코인 약화 1 부여"}},{name:"풀려난 폭력성",power:"3",coin:"+5",coinCount:3,coinEffects:{1:"[적중시] 진동 폭발 진동 폭발 시 최종 흐트러짐 손상의 30%만큼 분노 피해를 줌 (최대 20)",2:"[적중시] 진동 폭발 진동 폭발 시 최종 흐트러짐 손상의 30%만큼 분노 피해를 줌 (최대 20)",3:"[적중시] 진동 폭발 진동 폭발 시 최종 흐트러짐 손상의 30%만큼 분노 피해를 줌 (최대 20) 진동 횟수 3 감소"}}],defense:{name:"앙금 쌓기",power:"9",coin:"+5",coinCount:1,coinEffects:{}}},
  "파우스트|검계 살수": {skills:[{name:"월하검무",power:"3",coin:"+2",coinCount:3,coinEffects:{2:"[앞면 적중시] 호흡 1 얻음",3:"[크리티컬 적중 시] 홍매화 1 부여"}},{name:"자법",power:"4",coin:"+6",coinCount:2,coinEffects:{1:"[적중시] 자신의 호흡 횟수 2 증가 크리티컬 피해량 +30%",2:"[적중시] 다음 턴에 속박 1 부여 [크리티컬 적중 시] 홍매화 2 부여"}},{name:"흩날리는 홍매화",power:"5",coin:"+6",coinCount:2,coinEffects:{1:"[크리티컬 적중 시] 홍매화 5 부여 [크리티컬 적중 시] 대상의 홍매화 가 10이면, 참격 취약 1 부여",2:"[크리티컬 적중 시] 홍매화 5 부여 [크리티컬 적중 시] 대상의 홍매화 가 10이면, 참격 취약 1 부여"}}],defense:{name:"흘려내기",power:"10",coin:"+4",coinCount:1,coinEffects:{}}},
  "파우스트|멀티크랙 사무소 대표": {skills:[{name:"40Y-3 가동",power:"3",coin:"+4",coinCount:2,coinEffects:{2:"[적중시] 충전 횟수 3 증가"}},{name:"충전 역류",power:"4",coin:"+4",coinCount:3,coinEffects:{3:"이 스킬을 포함한 공명이 3 이상이면, 보유한 충전 횟수를 전부 소모하여 이 스킬로 소모한 충전 횟수당 피해량 +( 충전 + 4)% (최대 180%)"}},{name:"40Y-3 충전",power:"4",coin:"+3",coinCount:4,coinEffects:{1:"[적중시] ( 충전 + 5)만큼 자신의 충전 횟수 증가 (최대 8)",2:"[적중시] ( 충전 + 5)만큼 자신의 충전 횟수 증가 (최대 8)",4:"충전 이 3 이상이면 충전 당 피해량 +8% (최대 40%) [적중시] 다음 턴에 질투 취약 1 부여 - 충전 이 2 이상이면, 추가로 1 부여"}}],defense:{name:"충전",power:"12",coin:"+6",coinCount:1,coinEffects:{}}},
  "파우스트|LCE E.G.O::홍염살": {skills:[{name:"착화",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 화상 1 부여 [적중시] 화상 2 얻음",2:"[적중시] 화상 1 부여 [적중시] 자신의 화상 이 10 이상이면, 화상 3 추가 부여 [적중시] 화상 2 얻음"}},{name:"E.G.O 홍염살 전개",power:"4",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 화상 1 부여",2:"[적중시] 화상 1 부여",3:"[파괴되지 않고 적중시] 화상 3 부여 [적중시] 대상의 화상 이 15 이상이면, 화상 횟수 2 증가"}},{name:"불에 끌리는 마음으로",power:"5",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 화상 3 부여",2:"[적중시] 화상 3 부여"}}],defense:{name:"홍염살의 감응도를 올려 공명하겠습니다",power:"4",coin:"+10",coinCount:1,coinEffects:{}}},
  "파우스트|흑수 - 묘 필두": {skills:[{name:"순보",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 파열 1 부여",2:"[적중시] 파열 횟수 1 증가 [적중시] 자신의 속도가 10 이상이면, 코인 1회 재사용 (스킬 당 1회)"}},{name:"길을 뚫겠습니다, 주군.",power:"4",coin:"+6",coinCount:2,coinEffects:{1:"[적중시] 파열 횟수 1 증가",2:"[적중시] 파열 1 부여 대상에게 주살【신속】 또는 주살【파】 가 있으면, 피해량 +50%"}},{name:"눈으로도 귀로도 쫓지 못하게.",power:"5",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 파열 횟수 1 증가 [적중시] 주살【신속】 부여",2:"[적중시] 파열 1 부여",3:"자신의 속도가 10 이상이면, 피해량 +30% [적중시] 파열 3 부여 [적중시] 자신의 속도가 10 이상이면, 코인 1회 재사용 (스킬 당 1회) [재사용 적중시] 주살【신속】 부여"}}],defense:{name:"존명.",power:"5",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 파열 1 부여",2:"[적중시] 파열 1 부여"}}},
  "파우스트|동부 시 협회 3과": {skills:[{name:"베어내기",power:"4",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 출혈 1 부여",2:"[적중시] 출혈 1 부여"}},{name:"거리 확보",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 출혈 횟수 2 증가",2:"[적중시] 호흡 2 얻음",3:"[적중시] 출혈 2 부여"}},{name:"궁섬【弓閃】",power:"4",coin:"+3",coinCount:4,coinEffects:{1:"[적중시] 호흡 2 얻음 [크리티컬 적중시] 자신의 호흡 횟수 1 증가",2:"[적중시] 출혈 횟수 2 증가 [크리티컬 적중시] 출혈 횟수 1 증가",3:"[적중시] 출혈 4 부여",4:"[크리티컬 적중시] 다음 턴에 방어 레벨 감소 2 부여 (턴당 1회)"}}],defense:{name:"궁도【弓刀】전개",power:"14",coin:"+4",coinCount:1,coinEffects:{}}},
  "파우스트|검지 수행자:【쪽지】": {skills:[{name:"지령에 따라, 확실하게",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 호흡 1 얻음",2:"[적중시] 침잠 1 부여 [크리티컬 적중 시] 침잠 1 부여"}},{name:"지령을 수행하며 수행합니다",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 호흡 2 얻음",2:"[적중시] 침잠 1 부여",3:"[적중시] 침잠 1 부여 [크리티컬 적중 시] 침잠 횟수 2 증가"}},{name:"지령에 따라 당신을 처단하겠습니다.",power:"5",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 호흡 1 얻음",2:"[적중시] 침잠 1 부여",3:"지령의 가호 1당 피해량 +5% (최대 40%) - 지령의 가호 가 9면, 대신 피해량 +60% [적중시] 침잠 1 부여 [크리티컬 적중 시] 침잠 횟수 3 증가"}}],defense:{name:"지령이 하사한 지령으로 만들어진 천",power:"3",coin:"+3",coinCount:3,coinEffects:{2:"[적중시] 침잠 1 부여",3:"[적중시] 침잠 1 부여"}}},
  "파우스트|거미집 약지 제자": {skills:[{name:"도축 - 갈비뼈",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 출혈 횟수 1 증가",2:"[적중시] 다음 턴에 방어 레벨 감소 2 부여 (턴당 1회) [적중시] 다음 턴에 방어 레벨 증가 2 얻음 (턴당 1회)"}},{name:"파시아가 굶주렸어",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 출혈 횟수 2 증가",2:"[적중시] 다음 턴에 속박 1 부여 (턴당 1회)",3:"[적중시] 자신의 생체 재료 횟수 4 증가"}},{name:"억압당한 육체",power:"4",coin:"+3",coinCount:4,coinEffects:{1:"[적중시] 출혈 4 부여",2:"[적중시] 다음 턴에 속박 1 부여 (턴당 1회)",3:"[적중시] 다음 턴에 피해량 감소 1 부여",4:"대상의 부정적인 효과 1개당, 피해량 +5% (최대 30%) [적중시] 출혈 횟수 1 증가"}}],defense:{name:"전시회 준비",power:"4",coin:"+10",coinCount:0,coinEffects:{1:"파괴 불가 코인"}}},
  "파우스트|새벽 사무소 해결사": {skills:[{name:"여명의 섬광",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 화상 2 부여, 화상 횟수 1 증가",2:"[적중시] 진동 1 부여"}},{name:"나비 베기",power:"4",coin:"+6",coinCount:2,coinEffects:{1:"[적중시] 불꽃나비의 관 10당, - 화상 횟수 1 증가 (최대 2) - 진동 횟수 1 증가 (최대 2)",2:"[적중시] 진동 1 부여 [재사용 적중시] 화상 1 부여 [재사용 적중시] 진동 폭발 . 대상의 진동 횟수 1 감소 (스킬당 1회)"}},{name:"사출",power:"5",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 진동 3 부여",2:"[적중시] 진동 - 작열 로 진폭 변환",3:"[적중시] 진동 폭발 . 대상의 진동 횟수 1 감소 (스킬당 3회) [재사용 적중시] 화상 1 부여"}}],defense:{name:"낙인",power:"5",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 화상 1 부여 (턴당 2회)",2:"[적중시] 진동 1 부여 (턴당 2회)"}}},
  "돈키호테|LCB 수감자": {skills:[{name:"찌르기",power:"4",coin:"+7",coinCount:1,coinEffects:{}},{name:"모아 찌르기",power:"4",coin:"+12",coinCount:1,coinEffects:{1:"[앞면 적중시] 출혈 2 부여"}},{name:"정의를 위해!",power:"3",coin:"+3",coinCount:3,coinEffects:{1:"[앞면 적중시] 출혈 1 부여",2:"[앞면 적중시] 출혈 1 부여",3:"[적중시] 출혈 횟수 2 부여"}}],defense:{name:"회피",power:"2",coin:"+10",coinCount:1,coinEffects:{}}},
  "돈키호테|남부 시 협회 5과 부장": {skills:[{name:"숨고르기",power:"4",coin:"+7",coinCount:1,coinEffects:{1:"[적중시] 다음 턴에 호흡 3 얻음"}},{name:"이격",power:"4",coin:"+6",coinCount:2,coinEffects:{1:"[적중시] 다음 턴에 호흡 2 얻음",2:"[적중시] 다음 턴에 신속 3 얻음"}},{name:"과호흡",power:"4",coin:"+21",coinCount:1,coinEffects:{}}],defense:{name:"회피",power:"3",coin:"+10",coinCount:1,coinEffects:{}}},
  "돈키호테|N사 중간 망치": {skills:[{name:"올곧은 정화",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[앞면 적중시] 못 2 부여 [적중시] 진동 1 부여",2:"[적중시] 진동 2 부여"}},{name:"집행!",power:"4",coin:"+12",coinCount:1,coinEffects:{1:"[적중시] 진동 폭발 대상에게 못 이 5 이상 있으면, 피해량 +30%"}},{name:"광적인 심판",power:"5",coin:"+3",coinCount:3,coinEffects:{1:"[적중시] 못 2 부여",2:"[앞면 적중시] 못 2 부여 [적중시] 진동 횟수 1 증가",3:"[앞면 적중시] 대상에게 못 이 5 이상 있으면, 다음 턴에 공격 위력 감소 1 부여 [앞면 적중시] 대상에게 못 이 5 이상 있으면, 다음 턴에 마비 2 부여 [적중시] 진동 횟수 1 증가"}}],defense:{name:"가드",power:"10",coin:"+5",coinCount:1,coinEffects:{}}},
  "돈키호테|로보토미 E.G.O::초롱": {skills:[{name:"씹어주겠네!",power:"5",coin:"+7",coinCount:1,coinEffects:{1:"[적중시] 파열 횟수 2 증가"}},{name:"발광 미끼",power:"4",coin:"+3",coinCount:3,coinEffects:{1:"[적중시] 파열 1 부여",2:"[적중시] 파열 1 부여",3:"[적중시] 파열 2 부여 [적중시] 대상의 파열 횟수가 2 이하면, 파열 횟수 3 증가"}},{name:"빙글빙글 냠냠냠!",power:"4",coin:"+3",coinCount:3,coinEffects:{1:"[적중시] 파열 횟수 3 증가",3:"[적중시] 체력 15 회복. 코인 재사용 시 체력 회복량 50% 증가 [적중시] 대상의 파열 만큼 체력 추가 회복 ( 파열 1 당 체력 2 회복. 최대 40) 자신의 체력이 최대 체력의 50% 미만이면 코인 1회 재사용"}}],defense:{name:"들썩이는 이빨",power:"12",coin:"+6",coinCount:1,coinEffects:{}}},
  "돈키호테|검계 살수": {skills:[{name:"발검",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 호흡 1 얻음",2:"[적중시] 호흡 1 얻음"}},{name:"검궤",power:"4",coin:"+5",coinCount:2,coinEffects:{1:"[적중시] 호흡 2 얻음",2:"[크리티컬 적중 시] 호흡 이 없거나 호흡 위력을 가장 적게 보유한 아군 1명에게 호흡 2 부여 대상이 검계 조직원이면 호흡 2 추가 부여"}},{name:"잘가시게!",power:"4",coin:"+3",coinCount:3,coinEffects:{1:"[앞면 적중시] 마지막 코인의 피해량 +10%",2:"[앞면 적중시] 마지막 코인의 피해량 +10%",3:"크리티컬 피해량 +30% [크리티컬 적중 시] 호흡 이 없거나 호흡 횟수를 가장 적게 보유한 아군 2명의 호흡 횟수 2 증가 대상이 검계 조직원이면 호흡 횟수 2 추가 증가 [공격 종료시] 대상이 사망했으면, 자신과 무작위 아군 1명에게 다음 턴에 참격 피해량 증가 1 부여"}}],defense:{name:"회피",power:"3",coin:"+10",coinCount:1,coinEffects:{}}},
  "돈키호테|W사 3등급 정리 요원": {skills:[{name:"절단",power:"5",coin:"+6",coinCount:1,coinEffects:{1:"[적중시] 파열 1 부여 [앞면 적중시] 자신의 충전 횟수 4 증가"}},{name:"도약",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 자신의 충전 횟수 4 증가",2:"[적중시] 자신의 충전 횟수 4 증가",3:"[앞면 적중시] 취약 2 부여"}},{name:"공간 절단",power:"1",coin:"+2",coinCount:5,coinEffects:{5:"[앞면 적중시] 파열 5 부여"}}],defense:{name:"회피",power:"4",coin:"+10",coinCount:1,coinEffects:{}}},
  "돈키호테|남부 섕크 협회 5과 부장": {skills:[{name:"르미즈",power:"4",coin:"+3",coinCount:2,coinEffects:{2:"[합 승리 후 적중] 다음 턴에 속박 1 부여"}},{name:"플레쉬",power:"5",coin:"+5",coinCount:2,coinEffects:{2:"[적중시] 다음 턴에 속박 1 부여"}},{name:"살뤼!",power:"6",coin:"+6",coinCount:2,coinEffects:{1:"[적중시] 결투 선포 - 돈키호테 부여",2:"[적 처치 시] 자신의 정신력 15 회복"}}],defense:{name:"데팡시브",power:"4",coin:"+10",coinCount:1,coinEffects:{}}},
  "돈키호테|중지 작은 아우": {skills:[{name:"장부 확인",power:"4",coin:"+3",coinCount:2,coinEffects:{1:"[적중시] 출혈 1 부여",2:"[적중시] 출혈 2 부여"}},{name:"의리 증명",power:"4",coin:"+6",coinCount:2,coinEffects:{2:"[적중시] 출혈 3 부여 [적중시] 피해량 감소 1 부여"}},{name:"정의로운 앙갚음",power:"4",coin:"+3",coinCount:4,coinEffects:{1:"[앞면 적중시] 출혈 1 부여",2:"[앞면 적중시] 출혈 1 부여",3:"[앞면 적중시] 출혈 1 부여",4:"[공격 종료시] 대상이 사망하면 정신력이 가장 낮은 아군 1명의 정신력 6 회복"}}],defense:{name:"배로 갚기",power:"5",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 흐트러짐 5 회복",2:"[적중시] 흐트러짐 5 회복"}}},
  "돈키호테|T사 3등급 징수직 직원": {skills:[{name:"징수 준비를 하지",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 다음 턴에 이 스킬 슬롯의 도발치 4 증가",2:"[적중시] 진동 2 부여"}},{name:"T사제 가속 절단기",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 대상의 진동 을 최대 3 소모 (소모한 진동 × 2)만큼 자신의 진동 횟수 증가 다음 턴에 (소모한 진동 - 1)만큼 대상에게 속박 부여",2:"[적중시] 진동 3 부여",3:"[적중시] 이 스킬의 코인 효과로 대상의 진동 을 소모했다면, 진동 폭발 . 대상의 진동 횟수 1 감소"}},{name:"거기 멈추도록!",power:"4",coin:"+3",coinCount:4,coinEffects:{2:"[적중시] 진동 2 부여",3:"[적중시] 진동 3 부여",4:"[적중시] 대상의 진동 이 10 이상이면, 대상의 진동 을 10 소모하여 시간 유예 2 부여 - 자신이 시간 대여 상태면, 대상의 진동 을 소모하지 않음 [적중시] 진동 폭발 . 대상의 진동 횟수 1 감소 [적중시] 대상의 속도가 자신보다 낮다면, 진동 - 사슬 로 진폭 변환"}}],defense:{name:"시간을 끌어와보도록 하지",power:"15",coin:"+5",coinCount:1,coinEffects:{}}},
  "돈키호테|라만차랜드 실장": {skills:[{name:"참는 것은 끝이다",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 출혈 2 부여",2:"[적중시] 출혈 2 부여"}},{name:"원하는대로 펼쳐라",power:"4",coin:"+6",coinCount:2,coinEffects:{1:"[적중시] 출혈 2 부여",2:"대상의 출혈 당 피해량 +2.5% (최대 25%) 자신의 누적 소모 혈찬 100 당 피해량 +15% (최대 75%)"}},{name:"꿰뚫겠습니다",power:"5",coin:"+4",coinCount:3,coinEffects:{3:"[적중시] 출혈 3 부여"}}],defense:{name:"웃음소리는 사그라들 것이다",power:"5",coin:"+4",coinCount:2,coinEffects:{2:"[적중시] 출혈 횟수 2 증가"}}},
  "돈키호테|동부 섕크 협회 3과": {skills:[{name:"발경",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 화상 1 부여",2:"[적중시] 화상 1 부여 [크리티컬 적중 시] 화상 횟수 1 증가"}},{name:"초염장",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 자신의 호흡 횟수 2 증가",2:"[적중시] 화상 2 부여",3:"[적중시] 화상 2 부여 [적중시] 대상의 화상 6 당 방어 레벨 감소 1 부여 (최대 5, 턴당 1회) - 대상의 점혈 - 돈키호테 만큼 방어 레벨 감소 추가로 부여"}},{name:"한 수 부탁드리겠네",power:"4",coin:"+3",coinCount:4,coinEffects:{1:"[적중시] 화상 1 부여",2:"[적중시] 화상 1 부여",3:"[적중시] 화상 2 부여",4:"크리티컬 피해량 +(자신의 호흡 + 대상의 화상 )% (최대 50%) [적중시] 대상에게 점혈 - 돈키호테 가 있으면, 방어 레벨 감소 3 부여"}}],defense:{name:"밥상머리 예절부터 배우시게!",power:"4",coin:"+10",coinCount:1,coinEffects:{}}},
  "돈키호테|로보토미 E.G.O::사랑과 증오의 이름으로": {skills:[{name:"관리자 나리의 명에 따라 등장!",power:"3",coin:"+4",coinCount:2,coinEffects:{2:"[적중시] 자신의 사랑/증오 횟수 3 증가 [적중시] 파열 3 부여"}},{name:"사랑으로! 욥!",power:"6",coin:"+5",coinCount:2,coinEffects:{1:"[적중시] 자신의 사랑/증오 횟수 4 증가",2:"[적중시] 파열 2 부여 [적중시] 다음 턴에 메인 타겟에게 악당 표식 부여"}},{name:"아르카나 비트!! / 마이너 아르카나 슬레이브!!!",power:"5",coin:"+4",coinCount:0,coinEffects:{1:"파괴 불가 코인",2:"파괴 불가 코인 [파괴되지 않고 적중시] 파열 2 부여",3:"파괴 불가 코인 [파괴되지 않고 적중시] 파열 2 부여"}}],defense:{name:"단기 영창",power:"2",coin:"+10",coinCount:0,coinEffects:{1:"파괴 불가 코인"}}},
  "돈키호테|흑수 - 미": {skills:[{name:"돌파",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 파열 횟수 1 증가 [적중시] 침잠 횟수 1 증가",2:"[적중시] 파열 1 부여 [적중 시] 침잠 1 부여"}},{name:"파죽지세",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 파열 횟수 1 증가",2:"[적중시] 침잠 횟수 1 증가",3:"[적중시] 파열 2 부여 [적중시] 침잠 2 부여 [적중시] 자신에게 발각[發角] 이 있으면, 수치 1당 이 코인 최종 피해량의 10%만큼 참격 피해 (최대 30%)"}},{name:"파쇄각 [破碎角]",power:"4",coin:"+3",coinCount:4,coinEffects:{2:"[적중시] 파열 횟수 2 증가 [적중시] 침잠 횟수 2 증가",3:"[적중시] 파열 2 부여 [적중시] 침잠 2 부여",4:"대상에게 패닉 타입 변경 효과가 있으면, 수치 1당 피해량 +10% (최대 30%) [적중시] 이 코인 최종 피해량의 25%만큼 참격 피해 - 대상에게 파쇄흔 이 있으면 효과가 강화되어, 대신 50%만큼 참격 피해 [적중시] 다음 턴에 파쇄흔 3 부여 - 대상에게 패닉 타입 변경 효과가 있으면, 추가로 대상의 침잠 횟수 3 증가 (턴당 1회)"}}],defense:{name:"가로막는 것들을 모조리 박살내주겠네!",power:"5",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 파열 1 부여",2:"[적중시] 침잠 1 부여"}}},
  "돈키호테|검지 대행자 - 개화 E.G.O::대행": {skills:[{name:"머리 으깨기",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 침잠 2 부여",2:"[적중시] 호흡 1 얻음 [크리티컬 적중 시] 자신의 호흡 횟수 1 증가"}},{name:"조,조용히 하시게",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 침잠 1 부여",2:"[적중시] 침잠 2 부여",3:"[적중시] 자신의 호흡 횟수 1 증가 [크리티컬 적중 시] 침잠 횟수 1 증가"}},{name:"빠,빨리 지령을 수행해야만…",power:"6",coin:"+6",coinCount:2,coinEffects:{1:"[적중시] 호흡 2 얻음",2:"해금 단계 1당 피해량 +40% (최대 120%) [적중시] 침잠 2 부여, 침잠 횟수 1 증가 [크리티컬 적중 시] 침잠 1 부여, 침잠 횟수 1 증가"}}],defense:{name:"지령이 하사한 지령으로 만들어진 천",power:"3",coin:"+3",coinCount:3,coinEffects:{1:"[적중시] 호흡 1 얻음",2:"[적중시] 침잠 1 부여",3:"[적중시] 침잠 1 부여"}}},
  "료슈|LCB 수감자": {skills:[{name:"칠하기",power:"4",coin:"+7",coinCount:1,coinEffects:{1:"[적중시] 다음 턴에 호흡 2 얻음"}},{name:"흩뿌리기",power:"4",coin:"+5",coinCount:2,coinEffects:{1:"대상이 이번 턴에 피해를 받은 상태면 피해량 +30%",2:"대상이 이번 턴에 피해를 받은 상태면 피해량 +30%"}},{name:"그려내기",power:"5",coin:"+3",coinCount:3,coinEffects:{2:"[적중시] 다음 턴에 호흡 2 얻음"}}],defense:{name:"회피",power:"2",coin:"+10",coinCount:1,coinEffects:{}}},
  "료슈|남부 세븐 협회 6과": {skills:[{name:"슬래시",power:"4",coin:"+8",coinCount:1,coinEffects:{1:"[적중시] 파열 2 부여"}},{name:"어퍼 슬래시",power:"4",coin:"+14",coinCount:1,coinEffects:{1:"[적중시] 방어 레벨 감소 2 부여"}},{name:"스워시",power:"4",coin:"+5",coinCount:3,coinEffects:{1:"[적중시] 다음 턴에 참격 취약 3 부여"}}],defense:{name:"반격",power:"8",coin:"+4",coinCount:1,coinEffects:{1:"[적중시] 참격 취약 1 부여"}}},
  "료슈|LCCB 대리": {skills:[{name:"밀치기",power:"5",coin:"+5",coinCount:1,coinEffects:{1:"[크리티컬 적중 시] 대상의 정신력 8 감소"}},{name:"타.무",power:"4",coin:"+5",coinCount:2,coinEffects:{1:"[적중시] 호흡 2 얻음 [크리티컬 적중 시] 공격 레벨 감소 2 부여",2:"[적중시] 호흡 1 얻음 [크리티컬 적중 시] 공격 레벨 감소 1 부여"}},{name:"대.박",power:"4",coin:"+3",coinCount:3,coinEffects:{1:"[크리티컬 적중 시] 자신의 호흡 횟수 1 증가",2:"[크리티컬 적중 시] 자신의 호흡 횟수 1 증가",3:"탄환 1 소모 [크리티컬 적중 시] 진동 , 파열 의 위력과 횟수가 2배로 부여됨 [적중시] 진동 4 부여, 진동 횟수 2 증가 [적중시] 파열 4 부여, 파열 횟수 2 증가 [적중시] 진동 폭발"}}],defense:{name:"가드",power:"8",coin:"+8",coinCount:1,coinEffects:{}}},
  "료슈|남부 리우 협회 4과": {skills:[{name:"전면전",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 화상 1 부여",2:"[앞면 적중시] 화상 1 부여 [적중시] 화상 1 부여"}},{name:"염수격",power:"4",coin:"+5",coinCount:2,coinEffects:{1:"[적중시] 화상 2 부여",2:"[적중시] 대상의 화상 이 6 이상이면, 피해량 +50%"}},{name:"염절",power:"4",coin:"+2",coinCount:4,coinEffects:{1:"[적중시] 화상 1 부여",2:"[적중시] 화상 1 부여",3:"[적중시] 화상 1 부여",4:"[적중시] 대상의 화상 이 10 이상이면, 피해량 +40%"}}],defense:{name:"가드",power:"8",coin:"+8",coinCount:1,coinEffects:{}}},
  "료슈|20구 유로지비": {skills:[{name:"나사빠진 놈들",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 대상의 진동 횟수만큼 자신의 진동 횟수 증가 (최대 4)",2:"[적중시] 진동 횟수 2 증가"}},{name:"압착 태엽 스패너",power:"4",coin:"+3",coinCount:3,coinEffects:{2:"[적중시] 진동 횟수 2 증가",3:"[적중시] 자신의 진동 횟수를 소모하여 소모한 진동 횟수만큼 대상의 진동 횟수 증가 (최대 5)"}},{name:"두들기면 고쳐진다",power:"4",coin:"+3",coinCount:3,coinEffects:{1:"[적중시] 진동 2 부여",2:"[적중시] 진동 2 부여",3:"[적중시] 진동 폭발 . 대상의 진동 횟수 1 감소"}}],defense:{name:"가드",power:"7",coin:"+6",coinCount:1,coinEffects:{}}},
  "료슈|흑운회 와카슈": {skills:[{name:"발경",power:"5",coin:"+6",coinCount:1,coinEffects:{1:"[적중시] 마비 3 부여"}},{name:"뒷처리",power:"5",coin:"+5",coinCount:2,coinEffects:{1:"[적중시] 출혈 2 부여",2:"[적중시] 출혈 횟수 3 증가 [앞면 적중시] 피해량 감소 2 부여"}},{name:"구름 휘젓기",power:"8",coin:"+4",coinCount:2,coinEffects:{1:"[앞면 적중시] 출혈 2 부여",2:"[적중시] 출혈 횟수 3 증가 [적중시] 공격 레벨 감소 5 부여"}}],defense:{name:"가드",power:"10",coin:"+6",coinCount:1,coinEffects:{}}},
  "료슈|료.고.파. 주방장": {skills:[{name:"요.준",power:"4",coin:"+3",coinCount:2,coinEffects:{1:"[적중시] 출혈 횟수 1 증가",2:"[적중시] 갈증 2 얻음"}},{name:"재.사",power:"3",coin:"+5",coinCount:3,coinEffects:{1:"[적중시] 다음 턴에 속박 1 부여",2:"[앞면 적중시] 출혈 3 부여",3:"[적중시] 대상에게 출혈 또는 마비 가 있다면 다음 턴에 체력 회복 감소 4 부여"}},{name:"무엇이든 요리할 수 있지",power:"3",coin:"+3",coinCount:4,coinEffects:{1:"[앞면 적중시] 마지막 코인의 피해량 10% 증가",2:"[앞면 적중시] 마지막 코인의 피해량 5% 증가",3:"[앞면 적중시] 마지막 코인의 피해량 5% 증가"}}],defense:{name:"신.재 발견",power:"4",coin:"+10",coinCount:1,coinEffects:{}}},
  "료슈|W사 3등급 정리 요원": {skills:[{name:"에.순",power:"3",coin:"+2",coinCount:3,coinEffects:{1:"[적중시] 자신의 충전 횟수 2 증가",2:"[적중시] 자신의 충전 횟수 2 증가"}},{name:"도약",power:"2",coin:"+5",coinCount:3,coinEffects:{1:"[적중시] 충전 횟수가 10 이상이면, 참격 취약 2 부여",3:"[적중시] 대상의 체력이 30% 미만이면 피해량 +30% [적 처치 시] 다음 턴에 신속 3 얻음"}},{name:"차.마.공.절",power:"3",coin:"+2",coinCount:4,coinEffects:{1:"[앞면 적중시] 마지막 코인의 피해량 +10%",2:"[앞면 적중시] 마지막 코인의 피해량 +10%",3:"[앞면 적중시] 마지막 코인의 피해량 +10%",4:"[적 처치 시] 스킬 사용시 충전 횟수를 15 소모했다면, 자신과 자신을 제외한 무작위 아군 1명에게 충전 역장 7 부여"}}],defense:{name:"충전 회피",power:"4",coin:"+10",coinCount:1,coinEffects:{}}},
  "료슈|에드가 가문 치프 버틀러": {skills:[{name:"응접도 1식 사냥",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 자신의 호흡 횟수 2 증가",2:"[적중시] 버.표 2 부여"}},{name:"응접도 제 7식 포착",power:"4",coin:"+6",coinCount:2,coinEffects:{1:"[적중시] 호흡 3 얻음 [크리티컬 적중 시] 버.표 1 부여",2:"[적중시] 버.표 2 부여"}},{name:"응접도 제 2식 모.분",power:"4",coin:"+7",coinCount:2,coinEffects:{1:"[적중시] 호흡 5 얻음 [적중시] 다음 턴에 속박 1 부여 [적중시] 피해량의 30%만큼 흐트러짐 손상 [크리티컬 적중 시] 버.표 1 부여",2:"[적중시] 대상이 흐트러짐 상태면, 크리티컬 피해량 +40% [적중시] 버.표 2 부여 [적 처치시] 버.표 가 있는 무작위 대상에게 스킬 1회 재사용 (재사용 시 발동하지 않음. 버.표 가 있는 대상이 없는 경우, 발동하지 않음)"}}],defense:{name:"한심",power:"4",coin:"+10",coinCount:1,coinEffects:{}}},
  "료슈|로보토미 E.G.O::적안 · 참회": {skills:[{name:"둘 다 닥쳐라",power:"4",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 참회 3 얻음 [앞면 적중시] 참회 1 얻음",2:"[적중시] 적안 2 얻음 [적중시] 출혈 1 부여"}},{name:"거.대 / 해.바",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 참회 4 얻음",2:"[적중시] 적안 3 얻음 [적중시] 출혈 2 부여",3:"[적중시] 대상의 ( 출혈 / 2)만큼 적안 얻음 (최대 3) [앞면 적중시] 적안 이 7 이상이면, 다음 턴에 신속 1 얻음 (턴 당 2회)"}},{name:"대가리 터트리기",power:"5",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 적안 7 얻음 [적중시] 참회 7 얻음 [적중시] 출혈 3 부여",2:"[앞면 적중시] 참회 2 얻음",3:"[적중시] 자신과 현재 체력 비율이 가장 낮은 아군 1명이 각 대상의 최대 체력의 ( 참회 / 2)%만큼 체력 회복 [적중시] 자신과 현재 정신력이 가장 낮은 아군 1명을 ( 참회 - 10)만큼 정신력 회복 (최소 0)"}}],defense:{name:"먹고 잘 시간이다",power:"5",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 적안 2 얻음 (턴 당 1회) - 보유한 적안 이 7 미만이면, 적안 1 추가로 얻음",2:"[적중시] 참회 2 얻음 (턴 당 1회) - 보유한 참회 가 7 미만이면, 참회 1 추가로 얻음"}}},
  "료슈|흑수 - 묘": {skills:[{name:"순보",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 파열 1 부여",2:"[적중시] 파열 횟수 1 증가 [적중시] 자신의 속도가 10 이상이면. 코인 1회 재사용 (스킬당 1회)"}},{name:"새겨진대로",power:"4",coin:"+6",coinCount:2,coinEffects:{1:"[적중시] 파열 1 부여 [적중시] 자신의 속도가 10 이상이면, 파열 횟수 1 증가",2:"자신의 속도가 10 이상이면, 피해량 +30% [적중시] 파열 1 부여"}},{name:"저주가 새겨진 검을 쑤셔주지",power:"5",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 파열 횟수 1 증가 [적중시] 주살【신속】 부여",2:"[적중시] 파열 1 부여",3:"자신의 속도가 10 이상이면, 피해량 +30% [적중시] 파열 3 부여 [적중시] 자신의 속도가 10 이상이면, 코인 1회 재사용 (스킬당 1회) [재사용 적중시] 주살【신속】 부여"}}],defense:{name:"각력. 해방. 훗",power:"5",coin:"+8",coinCount:1,coinEffects:{1:"[적중시] 파열 횟수 1 증가"}}},
  "료슈|N사 E.G.O::경멸, 경외": {skills:[{name:"경멸스러운 것",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 진동 횟수 1 증가 [적중시] 출혈 횟수 1 증가",2:"[적중시] 시선 1 부여"}},{name:"경외하라",power:"4",coin:"+6",coinCount:1,coinEffects:{1:"[적중시] 진동 2 부여 [적중시] 출혈 2 부여",2:"파괴 불가 코인 [적중시] 진동 횟수 1 증가 [적중시] 출혈 횟수 1 증가 [적중시] 시선 2 부여 [적중시] 대상의 진동 횟수가 3 이상이면, 진동 폭발 . 대상의 진동 횟수 1 감소"}},{name:"경외, 경멸",power:"5",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 진동 2 부여 [적중시] 출혈 2 부여",2:"[적중시] 진동 횟수 1 증가 [적중시] 출혈 횟수 1 증가",3:"파괴 불가 코인 대상의 시선 1당 피해량 +10% (최대 70%) [적중시] 시선 3 부여 [파괴되지 않고 적중시] 진동 - 과다출혈 로 진폭 변환 [적중시] 진동 폭발 . 대상의 진동 횟수 1 감소"}}],defense:{name:"움켜쥔다",power:"10",coin:"+5",coinCount:1,coinEffects:{}}},
  "료슈|홍원 방랑무사": {skills:[{name:"어이, 물러서라",power:"6",coin:"+7",coinCount:1,coinEffects:{1:"크리티컬 피해량 +20% [적중시] 파열 2 부여 [크리티컬 적중 시] 파열 1 부여"}},{name:"명기누골 [銘肌縷骨]",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 파열 횟수 2 증가",2:"[적중시] (대상의 파열 / 5) + 2만큼 호흡 얻음 (최대 6. 소수점 버림)",3:"크리티컬 피해량 +20% [적중시] 파열 2 부여 [크리티컬 적중 시] 파열 1 부여"}},{name:"가척아원 [加斥我援]",power:"4",coin:"+3",coinCount:4,coinEffects:{1:"[적중시] 파열 횟수 2 증가",2:"[적중시] 파열 1 부여 [크리티컬 적중 시] 파열 1 부여",3:"[적중시] 파열 1 부여 [크리티컬 적중 시] 파열 1 부여",4:"[코인 시작 시] (자신의 호흡 위력 + 대상의 파열 위력) 1당 크리티컬 피해량 +2% (최대 120%) [적중시] 파열 2 부여"}}],defense:{name:"호위",power:"3",coin:"+10",coinCount:0,coinEffects:{1:"파괴 불가 코인"}}},
  "료슈|로보토미 E.G.O::잔향 · 외로움": {skills:[{name:"탕. 탕.",power:"4",coin:"+4",coinCount:2,coinEffects:{1:"탄환 - 고독 1 소모 [적중시] 침잠 횟수 2 증가",2:"탄환 - 고독 1 소모 [적중시] 진동 3 부여"}},{name:"공허에 피어나는 향기",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"탄환 - 고독 1 소모 [적중시] 침잠 횟수 3 증가",2:"[적중시] 잔향 3 부여 [적중시] 진동 횟수 2 증가",3:"[적중시] 잔향 3 부여 [적중시] 진동 횟수 2 증가"}},{name:"만개",power:"5",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 잔향 1 부여 [적중시] 침잠 횟수 3 증가",2:"[적중시] 잔향 1 부여 [적중시] 침잠 4 부여",3:"[적중시] 잔향 1 부여 [적중시] 진동 2 부여 [적중시] 진동 폭발 . 대상의 진동 횟수 1 감소 [적중시] 대상의 침잠 만큼 우울 피해"}}],defense:{name:"예.감.시.",power:"4",coin:"+10",coinCount:1,coinEffects:{}}},
  "료슈|거미집의 검": {skills:[{name:"삼연 [三連]",power:"3",coin:"+3",coinCount:3,coinEffects:{1:"[적중시] 호흡 1 얻음 [크리티컬 적중 시] 출혈 횟수 2 증가",2:"[적중시] 호흡 2 얻음 [크리티컬 적중 시] 화상 횟수 1 증가",3:"[적중시] 호흡 2 얻음 [적중시] 검흔 [잔상] 2 부여 [적중시] 자신의 얽힘 만큼 검흔 [잔상] 부여 (최대 4) [크리티컬 적중 시] 출혈 2 부여 [크리티컬 적중 시] 이 코인 최종 피해량의 ( 얽힘 × 2)%만큼 참격 피해"}},{name:"삼연 - 잔 [三連 - 殘]",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 호흡 2 얻음 [크리티컬 적중 시] 출혈 1 부여",2:"[적중시] 화상 2 부여 [크리티컬 적중 시] 출혈 1 부여",3:"[적중시] 화상 2 부여 [크리티컬 적중 시] 출혈 2 부여 [크리티컬 적중 시] 이 코인 최종 피해량의 ( 얽힘 × 3)%만큼 참격 피해"}},{name:"공간참 [空間斬]",power:"10",coin:"+12",coinCount:1,coinEffects:{1:"크리티컬 피해량 +50% [적중시] 출혈 3 부여 [적중시] 화상 3 부여 [크리티컬 적중 시] 대상의 화상 발동. 대상의 화상 횟수 1 감소 [크리티컬 적중 시] 대상의 출혈 발동. 대상의 출혈 횟수 1 감소 [크리티컬 적중 시] 이 코인 최종 피해량의 ( 얽힘 × 4)%만큼 참격 피해"}}],defense:{name:"잔상보 [殘像步]",power:"4",coin:"+10",coinCount:1,coinEffects:{}}},
  "료슈|오트쿠튀르::르누아르 신발관": {skills:[{name:"불결하군",sin:"질투",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[전투 시작시] 자신의 보존 위력이 3, 보존 횟수가 12 이상이면, 보존 횟수를 6 소모하여 최대 체력의 5%만큼 보호막 얻음 (턴당 2회) [사용시] 자신의 보존 횟수가 12 미만이면, 자신의 보존 횟수 2 증가 [사용시] 르누아르 개버딘 원단 코트가 50 이상이면, 합 위력 +1, 피해량 +30% [사용시] 아르뮈르 에비이예 최대 15 소모, 최종 위력 +1, 피해량 +(소모한 아르뮈르 에비이예 × 3)% (최대 45%) [적중시] 진동 2 부여",2:"[적중시] 자신의 보존 횟수 5 증가"}},{name:"와서 시착해봐라",sin:"오만",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[사용시] 자신의 보존 횟수가 12 이상이면, 6 소모하여 최종 위력 +1, 피해량 +20%, 자신의 보존 횟수 4 증가 [사용시] 르누아르 개버딘 원단 코트가 50 이상이면, 피해량 +15% [사용시] 아르뮈르 에비이예 최대 20 소모, 최종 위력 +1, 피해량 +(소모한 아르뮈르 에비이예)% (최대 20%) [적중시] (자신의 보존 위력 + 3)만큼 자신의 보존 횟수 증가 (최대 6)",2:"[적중시] 진동 2 부여, 진동 횟수 2 증가",3:"[적중시] 자신의 보존 위력이 3 이상이면, 진동 폭발 . 대상의 진동 횟수 1 감소"}},{name:"트리플 스탬피드 스티칭",sin:"나태",power:"5",coin:"+4",coinCount:3,coinEffects:{1:"[전투 시작시] 르누아르 개버딘 원단 코트 20 얻음 (턴당 1회) [사용시] 자신의 보존 횟수가 10 이상이면, 최대 20까지 소모하여 피해량 +(소모한 보존 횟수)% (최대 20%), 자신의 보존 횟수 5 증가 [사용시] 르누아르 개버딘 원단 코트 30당, 합 위력 +1, 피해량 +20% (각각 최대 3, 60%) [적중시] 자신의 보존 횟수 5 증가",2:"[적중시] 진동 3 부여, 진동 횟수 3 증가",3:"피해량 +(르누아르 개버딘 원단 코트 수치)% (최대 100%) [적중시] 진동 폭발 . 대상의 진동 횟수 1 감소 [적중시] 자신의 보존 위력이 3 이상이면, 진동 폭발 2. 대상의 진동 횟수 2 감소"}}],defense:{name:"고객 자식! 상품에 주름이 잡히고 있지 않나!",power:"5",coin:"+4",coinCount:2,coinEffects:{1:"[합 가능 반격] [전투 시작시] 자신의 르누아르 개버딘 원단 코트가 60 이상이면, 해당 효과가 다음 턴에 아르뮈르 에비이예로 변경됨, 자신의 아르뮈르 에비이예가 60 미만이면, 해당 효과가 다음 턴에 르누아르 개버딘 원단 코트로 변경됨 [사용전] 자신의 아르뮈르 에비이예가 60 이상이면, '원 킥 - 쿠튀르 멀티플'로 발동됨 (턴당 1회), 이 효과가 발동했으면, 공격 종료시 아르뮈르 에비이예 전부 소모 [사용시] 자신의 보존 위력이 3/5 이상이면, 코인 위력 +1/+2 [사용시] 자신의 보존 횟수 2 증가 (턴당 2회)",2:"파괴 불가 코인 [적중시] 진동 2 부여 (턴당 2회)"}}},
  "이스마엘|오트쿠튀르::르루주 부티크": {skills:[{name:"아아 당신한테는 들리지 않나보죠?",sin:"분노",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"자신의 맥동이 2 이상이면, 코인 위력 +1 [사용시] 자신의 현재 체력이 80% 이상이면, 맥동 횟수 5 얻음 [사용시] 대상의 출혈 3당, 합 위력 +1 (최대 2) [적중시] 자신의 맥동 횟수 3 증가",2:"[적중시] 출혈 횟수 3 증가"}},{name:"목소리가 들리지 않았다해서 부재했던 것이 아니었음을!",sin:"질투",power:"4",coin:"+6",coinCount:2,coinEffects:{1:"자신의 맥동 2당 최종 위력 +1 (최대 2) [사용시] 자신의 맥동 횟수가 10 미만이면, 최대 체력의 3×(10-현재 맥동 횟수)%만큼 체력을 소모하여 맥동 횟수가 10으로 증가 [사용시] 대상의 출혈이 6 이상이면, 코인 위력 +1 [공격 시작 전] 자신에게 새단장이 있으면, 피해량 +40%, 새단장이 없으면, 자신의 체력을 최대 체력의 20%만큼 소모 후 발동 [적중시] 자신의 맥동 횟수 4 증가 [적중시] 출혈 횟수 2 증가",2:"자신에게 새단장이 있으면, 이 코인 재사용 (스킬당 1회) [적중시] 출혈 3 부여 [적중시] 자신의 맥동이 2 이상이면, 다음 턴에 색욕 취약 1 부여 (턴당 1회) [재사용 적중시] 최대 체력의 (맥동 위력×3)%만큼 체력 회복 (최대 15%)"}},{name:"긁어내고, 뜯어내고, 못 박으라!",sin:"색욕",power:"5",coin:"+3",coinCount:3,coinEffects:{1:"자신의 맥동 1당 피해량 +10% (최대 50%) [전투 시작시] 자신의 현재 체력이 최대 체력의 50% 미만이거나 자신에게 새단장이 있으면, 이 스킬의 모든 코인이 파괴 불가 코인으로 변경됨 [사용시] 자신의 맥동 횟수가 15 미만이면, 최대 체력의 3×(15-현재 맥동 횟수)%만큼 체력을 소모하여 맥동 횟수가 15로 증가 [사용시] 자신의 맥동 횟수를 15 소모하여 코인 위력 +3 [사용시] 대상의 출혈 6당, 코인 위력 +1 (최대 2) [공격 시작 전] 자신에게 새단장이 있으면, 피해량 +40%, 새단장이 없으면, 자신의 체력을 최대 체력의 20%만큼 소모 후 발동 [적중시] 출혈 횟수 2 증가",2:"[적중시] 출혈 4 부여",3:"자신에게 새단장이 있으면, 이 코인 재사용 (스킬당 1회) [적중시] 이 코인 최종 피해량의 (자신의 맥동 위력×10)%만큼 색욕 피해 (최대 30%) [재사용 적중시] 최대 체력의 (맥동 위력×4)%만큼 체력 회복 (최대 20%)"}}],defense:{name:"역시.. 이 세상에 의미는 있던거죠?",power:"4",coin:"+5",coinCount:2,coinEffects:{1:"[합 가능 반격] [전투 시작시] 자신의 현재 체력이 최대 체력의 10% 이하면, 탈의실을 2 얻고 탈의실 상태가 됨 (전투당 1회) [전투 시작시] 자신에게 새단장이 없으면, 자신의 체력을 최대 체력의 20%만큼 소모하고, 다음 턴에 이 슬롯의 도발치 10 증가 (턴당 1회) [사용시] 자신의 맥동 위력 2당 최종 위력 +1 (최대 2) [사용시] 대상의 출혈 4당 피해량 +10% (최대 40%) [적중시] 자신의 맥동 횟수 4 증가",2:"[적중시] 출혈 2 부여 [적중시] 자신에게 새단장이 있으면, 최대 체력의 10%만큼 체력 회복 (턴당 1회)"}}},
  "뫼르소|LCB 수감자": {skills:[{name:"원, 투",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[앞면 적중시] 진동 1 부여",2:"[앞면 적중시] 진동 1 부여"}},{name:"주먹꽂기",power:"6",coin:"+9",coinCount:1,coinEffects:{1:"[앞면 적중시] 진동 폭발"}},{name:"연격",power:"4",coin:"+2",coinCount:4,coinEffects:{1:"[앞면 적중시] 진동 1 부여",2:"[앞면 적중시] 진동 1 부여",3:"[앞면 적중시] 진동 1 부여",4:"[적중시] 진동 횟수 2 증가"}}],defense:{name:"가드",power:"10",coin:"+3",coinCount:1,coinEffects:{}}},
  "뫼르소|남부 리우 협회 6과": {skills:[{name:"돌파",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 화상 1 부여",2:"[적중시] 화상 2 부여"}},{name:"진각",power:"7",coin:"+2",coinCount:2,coinEffects:{1:"[적중시] 화상 2 부여 [적중시] 대상의 화상이 6 이상일 때, 무작위 적 2명에게 화상 3 부여",2:"[적중시] 화상 1 부여"}},{name:"연무 붕권",power:"5",coin:"+3",coinCount:3,coinEffects:{1:"[앞면 적중시] 화상 3 부여",3:"[적중시] 화상 횟수 3 증가 [적중시] 대상의 화상이 6 이상일 때, 무작위 적 2명에게 화상 3 부여"}}],defense:{name:"가드",power:"8",coin:"+8",coinCount:1,coinEffects:{}}},
  "뫼르소|장미스패너 공방 해결사": {skills:[{name:"떠맡은 업무 처리",power:"4",coin:"+6",coinCount:1,coinEffects:{1:"[앞면 적중시] 진동 2 부여 [적중시] 진동 2 부여"}},{name:"강제 휴식",power:"5",coin:"+4",coinCount:2,coinEffects:{1:"[앞면 적중시] 진동 2 부여 [적중시] 진동 3 부여",2:"[적중시] 대상에게 진동 이 5 이상 있을 때 다음 턴에 공격 위력 감소 1 부여"}},{name:"마무리 가속",power:"4",coin:"+2",coinCount:4,coinEffects:{1:"[앞면 적중시] 자신의 충전 횟수 1 증가 [적중시] 진동 1 부여",2:"[앞면 적중시] 자신의 충전 횟수 2 증가 [적중시] 진동 2 부여",3:"[앞면 적중시] 자신의 충전 횟수 2 증가 [적중시] 진동 3 부여",4:"[적중시] 진동 폭발 진동 폭발 시 진동 횟수 3 감소, 충전 을 전부 소모하여 (소모한 충전 횟수 X 5%) 만큼 진동 폭발 의 흐트러짐 피해량이 증가함 (최대 50%)"}}],defense:{name:"가드",power:"8",coin:"+8",coinCount:1,coinEffects:{}}},
  "뫼르소|중지 작은 아우": {skills:[{name:"기억한다",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 출혈 1 부여",2:"[적중시] 출혈 1 부여"}},{name:"의리 사슬",power:"4",coin:"+5",coinCount:2,coinEffects:{1:"[적중시] 출혈 1 부여",2:"[적중시] 출혈 1 부여"}},{name:"새긴다",power:"4",coin:"+3",coinCount:3,coinEffects:{1:"[적중시] 대상이 앙갚음 대상 이면, 다음 턴에 더하기 코인 약화 1 부여",3:"[적중시] 대상이 앙갚음 대상 이면, 다음 턴에 질투 취약 2 부여"}}],defense:{name:"배로 갚기",power:"4",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 출혈 1 부여",2:"[적중시] 출혈 1 부여"}}},
  "뫼르소|데드레빗츠 보스": {skills:[{name:"배트치기",power:"5",coin:"+6",coinCount:1,coinEffects:{1:"[적중시] 파열 2 부여"}},{name:"내려박기",power:"4",coin:"+5",coinCount:2,coinEffects:{2:"[적중시] 파열 2 부여 [적중시] 대상의 파열 이 4 이상이면 공격 레벨 감소 2 부여"}},{name:"쏟아내기",power:"4",coin:"+2",coinCount:4,coinEffects:{4:"[적중시] 파열 4 부여 [적중시] 대상의 파열 이 6 이상이면, 다음 턴에 공격 레벨 감소 2 부여"}}],defense:{name:"반격",power:"7",coin:"+6",coinCount:1,coinEffects:{1:"[적중시] 파열 1 부여"}}},
  "뫼르소|W사 2등급 정리 요원": {skills:[{name:"절단",power:"5",coin:"+6",coinCount:1,coinEffects:{1:"[적중시] 자신의 충전 횟수 3 증가"}},{name:"에너지 순환",power:"5",coin:"+2",coinCount:3,coinEffects:{1:"[앞면 적중시] 파열 2 부여",2:"[앞면 적중시] 파열 2 부여",3:"[적중시] 파열 3 부여 [적중시] 충전 횟수 3을 소모하여 참격 취약 2 부여"}},{name:"에너지 교류",power:"5",coin:"+2",coinCount:4,coinEffects:{1:"[적중시] 충전 횟수 2를 소모하여 방어 레벨 감소 2 부여",2:"[적중시] 충전 횟수 2를 소모하여 방어 레벨 감소 2 부여",3:"[적중시] 충전 횟수 2를 소모하여 방어 레벨 감소 2 부여",4:"[적중시] 충전 횟수 2를 소모하여 방어 레벨 감소 2 부여"}}],defense:{name:"가드",power:"12",coin:"+5",coinCount:1,coinEffects:{}}},
  "뫼르소|N사 큰 망치": {skills:[{name:"꿰뚫기",power:"5",coin:"+1",coinCount:2,coinEffects:{1:"[적중시] 피해량의 60%만큼 흐트러짐 회복",2:"[적중시] 피해량의 60%만큼 흐트러짐 회복"}},{name:"죄를 씻어내노라",power:"6",coin:"+3",coinCount:2,coinEffects:{1:"[적중시] 못 3 부여",2:"[적중시] 다음 턴에 속박 3 부여 [적중시] 대상에게 못이 5 이상 있으면, 다음 턴에 속박 2, 공격 위력 감소 2 부여"}},{name:"이단 말살",power:"8",coin:"+3",coinCount:2,coinEffects:{1:"[적중시] 다음 턴에 못 2 부여",2:"[적중시] 피해량의 50%만큼 체력 회복 대상의 못 1당 체력 회복량 +3%"}}],defense:{name:"어리석도다…!",power:"15",coin:"-5",coinCount:1,coinEffects:{}}},
  "뫼르소|R사 제 4무리 코뿔소팀": {skills:[{name:"육중한 충돌",power:"5",coin:"+6",coinCount:1,coinEffects:{1:"[적중시] 충전 횟수 2 증가"}},{name:"부수기",power:"5",coin:"+3",coinCount:3,coinEffects:{1:"[적중시] 충전 횟수 4 증가",2:"[적중시] 출혈 횟수 1 증가",3:"[적중시] 출혈 횟수 1 증가"}},{name:"코뿔소 돌진",power:"6",coin:"+3",coinCount:3,coinEffects:{1:"[적중시] 출혈 횟수 1 증가 [적중시] 충전 횟수 2 소모, 출혈 횟수 1 증가 [적중시] 충전 횟수 3 소모, 출혈 횟수 1 증가",2:"[적중시] 출혈 횟수 1 증가 [적중시] 충전 횟수 2 소모, 출혈 횟수 1 증가 [적중시] 충전 횟수 3 소모, 출혈 횟수 1 증가"}}],defense:{name:"생체 전류 감응",power:"15",coin:"+5",coinCount:1,coinEffects:{}}},
  "뫼르소|검계 우두머리": {skills:[{name:"발검",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 호흡 1 얻음",2:"[적중시] 호흡 1 얻음"}},{name:"자법",power:"3",coin:"+5",coinCount:3,coinEffects:{1:"[적중시] 호흡 3 얻음",3:"크리티컬 피해량 +60%"}},{name:"육참",power:"20",coin:"-8",coinCount:1,coinEffects:{}}],defense:{name:"살주",power:"8",coin:"+10",coinCount:1,coinEffects:{1:"[적중시] 호흡 2 얻음"}}},
  "뫼르소|남부 디에치 협회 4과 부장": {skills:[{name:"학업 정진",power:"3",coin:"+4",coinCount:2,coinEffects:{2:"[적중시] 침잠 횟수 2 증가"}},{name:"배움의 시간",power:"4",coin:"+6",coinCount:2,coinEffects:{2:"[적중시] ( 탐구한 지식 × 2)만큼 침잠 부여"}},{name:"지식 전소",power:"5",coin:"+4",coinCount:3,coinEffects:{3:"[적중시] 침잠 위력과 침잠 횟수를 합하여 탐구한 지식 만큼 무작위로 부여"}}],defense:{name:"탐구 몰입",power:"15",coin:"+5",coinCount:1,coinEffects:{}}},
  "뫼르소|서부 섕크 협회 3과": {skills:[{name:"알레",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 자신의 호흡 횟수 1 증가",2:"[적중시] 파열 1 부여 [적중시] 자신의 속도가 대상보다 빠르면 대상과의 속도 차이만큼 파열 부여 (최대 3)"}},{name:"팡트",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 자신의 호흡 횟수 2 증가",2:"[적중시] 호흡 2 얻음",3:"파열 을 부여하지 않은 경우, 부여하는 파열 위력, 횟수 1 당 크리티컬 피해량 +5% [적중시] 파열 4 부여 [적중시] 자신의 속도가 7 이상이면, 파열 횟수 2 증가"}},{name:"살뤼",power:"5",coin:"+4",coinCount:3,coinEffects:{1:"[합 승리 후 적중] 마지막 코인의 피해량 +10%",2:"[합 승리 후 적중] 마지막 코인의 피해량 +10%",3:"해당 슬롯의 집중 공격 - 뫼르소 1 당 피해량 +20% 크리티컬 피해량 +30% - 대상의 파열 1 당 크리티컬 피해량 +2% (최대 30%) [공격 종료시] 이 코인으로 대상을 처치하거나 부위를 파괴했으면, 무작위 대상에게 스킬 1회 재사용 (재사용 시 발동하지 않음)"}}],defense:{name:"데팡시브",power:"4",coin:"+10",coinCount:1,coinEffects:{}}},
  "뫼르소|동부 엄지 카포 IIII": {skills:[{name:"이연참-폭 [爆]",power:"4",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 진동 1 부여",2:"호표탄 1 소모 [적중시] 진동 2 부여 [적중시] 화상 2 부여"}},{name:"삼연격-폭 [爆]",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 진동 1 부여",2:"호표탄 1 소모 [적중시] 진동 2 부여 [적중시] 화상 2 부여",3:"호표탄 1 소모 [적중시] 진동 횟수 2 증가 [적중시] 화상 횟수 2 증가 [적중시] 대상의 진동 횟수가 3 이상이면, 진동 폭발 . 대상의 진동 횟수 1 감소"}},{name:"쾌도난마 [快刀亂麻]",power:"5",coin:"+4",coinCount:3,coinEffects:{1:"호표탄 1 소모 [적중시] 진동 3 부여 [적중시] 화상 3 부여",2:"호표탄 1 소모 [적중시] 진동 횟수 3 증가 [적중시] 화상 횟수 3 증가",3:"호표탄 1 소모 이 코인 효과로 호표탄 을 소모하였다면, 피해량 +50% [적중시] 진동 - 작열 로 진폭 변환 [적중시] 진동 폭발 . 대상의 진동 횟수 1 감소 - 호표탄 소모 시, 효과 2회 추가 발동"}}],defense:{name:"끓어오르는군.",power:"5",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 진동 1 부여 (턴당 2회)",2:"[적중시] 진동 횟수 1 증가 (턴당 2회)"}}},
  "뫼르소|라만차랜드 왕자": {skills:[{name:"행진 지휘",power:"2",coin:"+3",coinCount:3,coinEffects:{1:"[적중시] 파열 1 부여",2:"[적중시] 출혈 횟수 1 증가",3:"[적중시] 출혈 2 부여"}},{name:"재건의 의무",power:"4",coin:"+6",coinCount:2,coinEffects:{1:"[적중시] 출혈 횟수 2 증가 [적중시] 파열 횟수 1 증가",3:"[적중시] 출혈 2 부여 [적중시] 파열 2 부여 [적중시] 다음 턴에 색욕 취약 1 부여"}},{name:"피를 굳히고, 나와 당신에게 두른다.",power:"4",coin:"+3",coinCount:3,coinEffects:{1:"[적중시] 출혈 횟수 1 증가 [적중시] 파열 횟수 1 증가",2:"[적중시] 출혈 횟수 1 증가",3:"[적중시] 출혈 2 부여 [적중시] 파열 1 부여",4:"파괴 불가 코인 [적중시] 출혈 2 부여 [적중시] 라만차 퍼레이드 1 부여 [파괴되지 않고 적중시] 다음 턴에 라만차 퍼레이드 1 부여"}}],defense:{name:"피 굳히기",power:"5",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 출혈 1 부여",2:"[적중시] 출혈 1 부여"}}},
  "뫼르소|로보토미 E.G.O::호넷【변조】": {skills:[{name:"위협 사격",power:"4",coin:"+4",coinCount:2,coinEffects:{1:"포자탄[기본] 1 소모 [적중시] 화상 2 부여",2:"포자탄[기본] 1 소모 [적중시] 출혈 2 부여"}},{name:"E.G.O 변조 - 산탄",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"포자탄[산탄] 1 소모 [적중시] 화상 횟수 1 증가",2:"포자탄[산탄] 1 소모 [적중시] 출혈 횟수 2 증가",3:"포자탄[산탄] 1 소모 [적중시] 화상 횟수 1 증가"}},{name:"임상 시험 - 분진 작열",power:"4",coin:"+3",coinCount:3,coinEffects:{1:"이 코인은 1명의 대상에게만 적중함 (메인 타겟 우선 적용) 포자탄[기본] 1 소모 [적중시] 화상 3 부여",2:"이 코인은 1명의 대상에게만 적중함 (메인 타겟 우선 적용) 포자탄[기본] 1 소모 [적중시] 출혈 2 부여",3:"이 코인은 1명의 대상에게만 적중함 (메인 타겟 우선 적용) 포자탄[기본] 1 소모 [적중시] 출혈 2 부여",4:"파괴 불가 코인 포자탄[산탄] 1 소모 서브 타겟에게 가하는 피해량 -50% 자신의 충성 페로몬 1당 이 코인 피해량 +5% (최대 15%) [파괴되지 않고 적중시] 대상의 포자 가 최댓값이면, 아래 효과 적용 - ( 화상 위력 x 포자 수치 / 10)만큼 분노 속성 피해를 입힘 (이 효과로 분노 피해를 입혔으면 화상 이 발동한 것으로 취급함) - 화상 횟수 1 감소 - 포자 소멸 [적중시] 화상 횟수 1 증가, 출혈 횟수 2 증가"}}],defense:{name:"포자 보충",power:"4",coin:"+10",coinCount:1,coinEffects:{}}},
  "뫼르소|약지 야수파 스튜던트": {skills:[{name:"거친 묘사",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 출혈 2 부여",2:"[적중시] 출혈 횟수 1 증가 [적중시] 침잠 횟수 1 증가"}},{name:"본능적인 휘갈김",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 출혈 1 부여",2:"[적중시] 출혈 1 부여 [적중시] 침잠 1 부여",3:"[적중시] 출혈 횟수 2 증가 [적중시] 침잠 1 부여"}},{name:"야수파 - 출품작 전개",power:"5",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 출혈 1 부여",2:"[적중시] 출혈 2 부여 [적중시] 침잠 2 부여",3:"[적중시] 출혈 횟수 2 증가 [적중시] 침잠 횟수 2 증가 [적중시] 찢긴 색채 [루주] 1 부여"}}],defense:{name:"채색 준비",power:"4",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 출혈 1 부여",2:"[적중시] 침잠 1 부여"}}},
  "홍루|LCB 수감자": {skills:[{name:"내려베기",power:"4",coin:"+7",coinCount:1,coinEffects:{1:"[적중시] 침잠 2 부여"}},{name:"이연격",power:"4",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 침잠 2 부여",2:"[적중시] 파열 2 부여"}},{name:"선풍",power:"6",coin:"+4",coinCount:2,coinEffects:{2:"[앞면 적중시] 공격 위력 감소 2 부여 [적중시] 침잠 2 부여 [적중시] 파열 2 부여"}}],defense:{name:"회피",power:"2",coin:"+10",coinCount:1,coinEffects:{}}},
  "홍루|흑운회 와카슈": {skills:[{name:"베어내기",power:"4",coin:"+7",coinCount:1,coinEffects:{1:"[적중시] 출혈 3 부여"}},{name:"구름 절개",power:"5",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 출혈 2 부여",2:"[적중시] 출혈 1 부여"}},{name:"구름 파열",power:"7",coin:"+2",coinCount:3,coinEffects:{1:"[앞면 적중시] 출혈 2 부여",2:"[앞면 적중시] 출혈 2 부여",3:"[적중시] 마비 5 부여"}}],defense:{name:"가드",power:"9",coin:"+3",coinCount:1,coinEffects:{}}},
  "홍루|남부 리우 협회 5과": {skills:[{name:"몸풀기",power:"3",coin:"+4",coinCount:2,coinEffects:{2:"[적중시] 화상 1 부여"}},{name:"흐르는 불꽃",power:"6",coin:"+2",coinCount:2,coinEffects:{1:"[적중시] 화상 1 부여. 대상에게 화상이 있으면 1 추가 부여.",2:"[적중시] 화상 횟수 1 증가. 자신의 정신력이 30 이상이면 1, 45 이상이면 2 추가 증가"}},{name:"홍염권",power:"5",coin:"+6",coinCount:2,coinEffects:{1:"[적중시] 화상 1 부여. 대상에게 화상이 있으면 화상 횟수 1 증가.",2:"[앞면 적중시] 정신력 6 회복 [적중시] 대상의 화상 횟수가 6 이상이면, 피해량의 30%만큼 흐트러짐 손상을 입힘"}}],defense:{name:"가드",power:"8",coin:"+8",coinCount:1,coinEffects:{}}},
  "홍루|W사 2등급 정리 요원": {skills:[{name:"에너지 순환",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 자신의 충전 횟수 1 증가",2:"[적중시] 자신의 충전 횟수 1 증가"}},{name:"정리 지원",power:"6",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 자신의 충전 횟수 3 증가",2:"[적중시] 자신의 충전 횟수가 5 이상이면, 다음 턴에 충전 횟수 5당 충전 역장 1을 얻음 (최대 4)"}},{name:"충전 역장 전개",power:"5",coin:"+4",coinCount:3,coinEffects:{3:"[적중시] 파열 5 부여 [적중시] 다음 턴에 충전 역장 2를 얻음"}}],defense:{name:"가드",power:"12",coin:"+6",coinCount:1,coinEffects:{}}},
  "홍루|갈고리 사무소 해결사": {skills:[{name:"추적",power:"3",coin:"+4",coinCount:2,coinEffects:{2:"[적중시] 출혈 1 부여 [앞면 적중시] 출혈 횟수 1 증가"}},{name:"먼저 간다",power:"4",coin:"+3",coinCount:3,coinEffects:{1:"[앞면 적중시] 출혈 1 부여",2:"[앞면 적중시] 출혈 1 부여",3:"[적중시] 자신이 대상보다 속도가 높은 경우, 자신과 대상의 속도 차이만큼 출혈 횟수 증가 (최대 4)"}},{name:"광란",power:"4",coin:"+2",coinCount:4,coinEffects:{1:"[앞면 적중시] 대상의 출혈 1 당 정신력 1 회복 (최대 10)",3:"[적중시] 출혈 1 부여",4:"[적중시] 출혈 2 부여"}}],defense:{name:"재빠름",power:"3",coin:"+10",coinCount:1,coinEffects:{}}},
  "홍루|송곳니 사냥 사무소 해결사": {skills:[{name:"내려치기",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 파열 1 부여 [앞면 적중시] 파열 1 부여",2:"[적중시] 파열 1 부여 [앞면 적중시] 파열 1 부여"}},{name:"뼈 부수기",power:"4",coin:"+5",coinCount:2,coinEffects:{1:"[적중시] 파열 횟수 1 증가 [앞면 적중시] 파열 횟수 1 증가",2:"[적중시] 파열 2 부여 [적중시] 다음 턴에 체력 회복 감소 2 부여"}},{name:"상쾌한 사냥 마무리",power:"4",coin:"+3",coinCount:3,coinEffects:{1:"[앞면 적중시] 파열 1 부여",2:"[앞면 적중시] 파열 2 부여",3:"[적중시] 대상의 파열 이 15 이상이거나, 대상의 현재 체력이 최대 체력의 30% 미만이면, 이 코인 재사용 (스킬 당 1회)"}}],defense:{name:"긴급 지혈",power:"10",coin:"+4",coinCount:1,coinEffects:{}}},
  "홍루|콩콩이파 두목": {skills:[{name:"목 긋기",power:"5",coin:"+8",coinCount:1,coinEffects:{1:"[앞면 적중시] 출혈 4 부여"}},{name:"후비기",power:"3",coin:"+5",coinCount:3,coinEffects:{1:"[앞면 적중시] 추가 피해 +3",2:"[앞면 적중시] 추가 피해 +3",3:"[앞면 적중시] 적의 체력이 최대 체력의 25% 미만일 때, 대상이 생존한 상태면 이 코인 1회 재사용 앞면이 나오면 이 코인의 피해량 +50% [재사용 앞면 적중시] 이 코인 스킬 피해량 +50%"}},{name:"난도질",power:"5",coin:"+25",coinCount:1,coinEffects:{1:"[앞면 적중시] 추가 피해 +7 [재사용 앞면 적중시] 이 코인 스킬 피해량 +100% [재사용 앞면 적중시] 대상의 출혈 이 10 이상이면, 피해량 +50%"}}],defense:{name:"회피",power:"2",coin:"+14",coinCount:1,coinEffects:{}}},
  "홍루|K사 3등급 적출직 직원": {skills:[{name:"침입자 차단",power:"5",coin:"+6",coinCount:1,coinEffects:{}},{name:"붕괴 칼날",power:"6",coin:"+5",coinCount:2,coinEffects:{1:"[적중시] 파열 2 부여 [적중시] 대상에게 파열 이 10 이상 있으면 피해량의 50%만큼 체력 회복",2:"[적중시] 파열 2 부여 [적중시] 대상에게 파열 이 10 이상 있으면 피해량의 50%만큼 체력 회복"}},{name:"대상 적출",power:"8",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 파열 4 부여",2:"[적중시] K사 앰플 만큼 파열 횟수 증가 ( K사 앰플 x 5%)만큼 피해량 증가"}}],defense:{name:"앰플 주입",power:"15",coin:"+5",coinCount:1,coinEffects:{}}},
  "홍루|남부 디에치 협회 4과": {skills:[{name:"지식 소모",power:"5",coin:"+5",coinCount:1,coinEffects:{1:"[앞면 적중시] 침잠 횟수 1 증가 [적중시] ( 탐구한 지식 - 1)만큼 코인 재사용"}},{name:"열어 젖히기",power:"4",coin:"+4",coinCount:3,coinEffects:{3:"[적중시] 침잠 4 부여"}},{name:"순환하는 지식",power:"5",coin:"+3",coinCount:3,coinEffects:{3:"[적중시] 침잠 횟수 4 증가 [공격 종료시] 대상이 흐트러지거나 사망했으면, 정신력 10 회복"}}],defense:{name:"인도하는 걸음",power:"4",coin:"+10",coinCount:1,coinEffects:{}}},
  "홍루|20구 유로지비": {skills:[{name:"추리시작",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 진동 2 부여",2:"[적중시] 자신의 진동 횟수 2 증가"}},{name:"변형 지팡이 호신술",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 자신의 진동 횟수 3 증가",2:"[적중시] 진동 3 부여",3:"[적중시] 대상의 진동 이 6 이상이면, 진동 폭발 . 대상의 진동 횟수 1 감소"}},{name:"범인은 당신이군요!",power:"3",coin:"+3",coinCount:4,coinEffects:{1:"[적중시] 스킬 사용 시 진동 횟수를 소모했으면, 진동 - 반향 으로 진폭 얽힘",2:"[적중시] 진동 폭발 . 대상의 진동 횟수 1 감소",3:"[적중시] 스킬 사용시 진동 횟수를 10 이상 소모했다면, 진동 폭발 . 대상의 진동 횟수 1 감소",4:"[적중시] 스킬 사용시 진동 횟수를 10 이상 소모했다면, 진동 폭발 . 대상의 진동 횟수 1 감소 - 소모한 진동 횟수가 15 미만이면, 위 효과 발동 후 자신에게도 진동 폭발"}}],defense:{name:"잠깐만요?!",power:"10",coin:"+4",coinCount:1,coinEffects:{}}},
  "홍루|마침표 사무소 대표": {skills:[{name:"발사",power:"3",coin:"+3",coinCount:3,coinEffects:{1:"탄환 1 소모",2:"탄환 1 소모 [적중시] 호흡 2 얻음",3:"탄환 1 소모 [적중시] 호흡 3 얻음"}},{name:"타겟 지정",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 호흡 2 얻음",2:"탄환 최대 3 소모 피해량 +(소모한 탄환 × 10)% 크리티컬 피해량 +(소모한 탄환 × 10)%",3:"크리티컬 피해량 +20% [적중시] 다음 턴에 속박 1 부여 [적중시] 다음 턴에 공격 위력 감소 1 부여"}},{name:"삶의 마침표",power:"7",coin:"+4",coinCount:3,coinEffects:{1:"탄환 1 소모 피해량 +(소모한 탄환 × 15)% [적중시] 피해량의 15%만큼 흐트러짐 손상",2:"탄환 최대 2 소모 피해량 +(소모한 탄환 × 15)% [적중시] 피해량의 15%만큼 흐트러짐 손상",3:"대상이 흐트러짐 상태면 크리티컬 피해량 +30% [적중시] 다음 턴에 속박 2 부여 [적중시] 관통 취약 2 부여"}}],defense:{name:"전투 호흡",power:"4",coin:"+10",coinCount:1,coinEffects:{}}},
  "홍루|R사 제 4무리 순록팀": {skills:[{name:"에너지 강타",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] ( 충전 + 1)만큼 자신의 충전 횟수 증가 (최대 4)",2:"[적중시] 침잠 1 부여"}},{name:"정신 채찍",power:"2",coin:"+3",coinCount:4,coinEffects:{1:"[적중시] 침잠 1 부여 [적중시] 피해량의 5%만큼 흐트러짐 손상을 입힘",2:"[적중시] 침잠 1 부여 [적중시] 피해량의 5%만큼 흐트러짐 손상을 입힘",3:"[적중시] 침잠 1 부여 [적중시] 피해량의 5%만큼 흐트러짐 손상을 입힘",4:"[적중시] 침잠 횟수 2 증가 [적중시] 피해량의 10%만큼 흐트러짐 손상을 입힘"}},{name:"집중",power:"8",coin:"+10",coinCount:1,coinEffects:{1:"피해량 +(이 스킬의 위력 × 5)% (최대 150%) 충전 이 3 이상이면, 충전 당 피해량 +20% (최대 100%) [적중시] ( 충전 + 3)만큼 자신의 충전 횟수 증가 (최대 8) [적중시] 침잠 4 부여, 침잠 횟수 4 증가"}}],defense:{name:"에너지 응집",power:"10",coin:"+6",coinCount:1,coinEffects:{}}},
  "홍루|홍원 군주": {skills:[{name:"길을 열고 싶군",power:"4",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 자신의 호흡 횟수 3 증가",2:"[적중시] 파열 횟수 2 증가"}},{name:"오혈절지경성[汚血絶志竟成]",power:"3",coin:"+3",coinCount:2,coinEffects:{1:"[적중시] 파열 횟수 1 증가",2:"[적중시] 자신의 호흡 횟수 2 증가",3:"파괴 불가 코인 [적중시] 파열 1 부여",4:"파괴 불가 코인 피해량 +50% 크리티컬 피해량 +50% [적중시] 파열 2 부여"}},{name:"흑수들이여 답하라",power:"10",coin:"+12",coinCount:0,coinEffects:{1:"파괴 불가 코인 [적중시] 대상이 보유한 부정적인 효과 2종류 당 공격 레벨 감소 1 부여 (최대 3) [적중시] 대상이 보유한 주살 1종류 당 방어 레벨 감소 1 부여 (최대 3)"}}],defense:{name:"흑수이조[黑獸利爪]",power:"6",coin:"+7",coinCount:0,coinEffects:{1:"파괴 불가 코인"}}},
  "홍루|거미집 약지 아비": {skills:[{name:"해체",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 출혈 4 부여",2:"[적중시] 다음 턴에 방어 레벨 감소 2 부여 (턴당 1회) [적중시] 다음 턴에 방어 레벨 증가 2 얻음 (턴당 1회)"}},{name:"재료획득 - 피로 목욕하는 오브제",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 출혈 횟수 2 증가",2:"[적중시] 다음 턴에 속박 1 부여 (턴당 1회) [적중시] 다음 턴에 신속 1 얻음 (턴당 1회)",3:"[적중시] 자신의 생체 재료 횟수 4 증가 [적중시] 대상의 부정적인 효과가 5개 이상이면, 대상에게 '설치 미술 제 3호 '간이늑골'' 사용 (턴당 1회)"}},{name:"티비아의 멜로디 - 해체된 것이 해체되지 않은 것을 해체하는 것",power:"4",coin:"+3",coinCount:4,coinEffects:{1:"[적중시] 출혈 4 부여",2:"[적중시] 다음 턴에 속박 1 부여 (턴당 1회) [적중시] 다음 턴에 신속 1 얻음 (턴당 1회)",3:"[적중시] 다음 턴에 피해량 감소 1 부여 (턴당 1회) [적중시] 다음 턴에 참격 피해량 증가 1 얻음 (턴당 1회)",4:"대상의 부정적인 효과 1개당, 피해량 +5% (최대 30%) [적중시] 출혈 횟수 1 증가"}}],defense:{name:"전시회 주최",power:"4",coin:"+10",coinCount:1,coinEffects:{}}},
  "홍루|S사 추노꾼": {skills:[{name:"오랏줄 죄기",power:"2",coin:"+3",coinCount:3,coinEffects:{1:"[적중시] 호흡 4 얻음 [적중시] 출혈 횟수 2 증가",2:"[적중시] 출혈 2 부여",3:"[적중시] 다음 턴에 속박 1 부여 [적중시] 대상에게 포박 [홍루] 가 있으면, 포박 수치 1 증가"}},{name:"찢어베기",power:"4",coin:"+6",coinCount:2,coinEffects:{1:"[적중시] 호흡 3 얻음 [적중시] 출혈 2 부여",2:"[적중시] 대상의 포박 [홍루] 가 2 이상이면, 포박 [홍루] 를 1 소모하여 이 코인 재사용 (스킬당 1회) [크리티컬 적중 시] 찢긴 상처 1 부여 [재사용 적중시] 다음 턴에 신속 2 얻음 [재사용 적중시] 대상의 출혈 발동, 출혈 횟수 1 감소"}},{name:"추쇄집행",power:"4",coin:"+3",coinCount:4,coinEffects:{1:"[적중시] 다음 턴에 속박 1 부여 [적중시] 대상에게 포박 [홍루] 가 없으면, 포박 [홍루] 부여",2:"[적중시] 출혈 횟수 2 증가",3:"[적중시] 출혈 2 부여",4:"크리티컬 피해량 +50% [적중시] 출혈 3 부여 [적중시] 찢긴 상처 1 부여 [크리티컬 적중 시] 찢긴 상처 1 부여 [크리티컬 적중 시] 다음 턴에 오만 취약 1 부여"}}],defense:{name:"오랏줄 걸기",power:"5",coin:"+8",coinCount:0,coinEffects:{1:"파괴 불가 코인 [적중시] 포박 [홍루] 부여 [파괴되지 않고 적중시] 출혈 1 부여"}}},
  "홍루|동부 섕크 협회 3과": {skills:[{name:"발경",power:"6",coin:"+7",coinCount:1,coinEffects:{1:"[적중시] 화상 1 부여 [적중시] 대상의 점혈 - 홍루 가 3 이상이면, 이 코인 재사용 (스킬당 1회) [재사용 적중시] 화상 1 부여"}},{name:"초염장",power:"6",coin:"+5",coinCount:2,coinEffects:{1:"[적중시] 자신의 호흡 횟수 2 증가 [적중시] 화상 2 부여",2:"[적중시] 화상 횟수 1 증가 [적중시] 대상의 점혈 - 홍루 가 2 이상이면, 이 코인 재사용 (스킬당 1회) [재사용 적중시] 점혈 - 홍루 만큼 방어 레벨 감소 부여 (턴당 1회)"}},{name:"마지막 수까지 받아주시겠어요?",power:"5",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 화상 2 부여",2:"[적중시] 화상 2 부여",3:"크리티컬 피해량 +(자신의 호흡 + 대상의 화상 )% (최대 30%) [적중시] 화상 횟수 1 증가 [크리티컬 적중 시] 방어 레벨 감소 2 부여 [적중시] 대상에게 점혈 - 홍루 가 있으면, 이 코인 재사용 (스킬당 1회) [재사용 적중시] 이 코인 최종 피해량의 (대상의 화상 × 2)%만큼 분노 피해 (최대 40%)"}}],defense:{name:"구름처렴 가벼이",power:"4",coin:"+10",coinCount:1,coinEffects:{}}},
  "히스클리프|LCB 수감자": {skills:[{name:"배트 치기",power:"4",coin:"+7",coinCount:1,coinEffects:{1:"[적중시] 진동 3 부여"}},{name:"내려박기",power:"4",coin:"+4",coinCount:2,coinEffects:{1:"[앞면 적중시] 진동 2 부여"}},{name:"분풀기",power:"4",coin:"+8",coinCount:2,coinEffects:{1:"[앞면 적중시] 다음 코인 위력 +2",2:"[적중시] 진동 폭발"}}],defense:{name:"반격",power:"7",coin:"+4",coinCount:1,coinEffects:{}}},
  "히스클리프|남부 시 협회 5과": {skills:[{name:"극검",power:"4",coin:"+6",coinCount:1,coinEffects:{}},{name:"비검",power:"5",coin:"+10",coinCount:1,coinEffects:{}},{name:"섬격",power:"5",coin:"+6",coinCount:2,coinEffects:{1:"[공격 시작 전] 자신의 체력 5 감소, 이 코인의 스킬 피해량 +50%",2:"[공격 시작 전] 자신의 체력 5 감소, 이 코인의 스킬 피해량 +50%"}}],defense:{name:"반격",power:"8",coin:"+5",coinCount:1,coinEffects:{}}},
  "히스클리프|N사 작은 망치": {skills:[{name:"미숙한 못질",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[앞면 적중시] 다음 턴에 못 1 부여 [뒷면 적중시] 출혈 1 부여",2:"[적중시] 출혈 1 부여 [적중시] 못 1 부여"}},{name:"정…화!",power:"6",coin:"+8",coinCount:1,coinEffects:{1:"[앞면 적중시] 다음 턴에 더하기 코인 약화 2 부여"}},{name:"미약한 단죄",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[앞면 적중시] 피해량 10%만큼 추가 피해",2:"[앞면 적중시] 피해량 10%만큼 추가 피해",3:"[앞면 적중시] 피해량 10%만큼 추가 피해"}}],defense:{name:"가드",power:"8",coin:"+8",coinCount:1,coinEffects:{}}},
  "히스클리프|남부 세븐 협회 4과": {skills:[{name:"직감",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 파열 1 부여 [앞면 적중시] 파열 1 부여",2:"[적중시] 파열 1 부여 [앞면 적중시] 파열 1 부여"}},{name:"뒷수습",power:"6",coin:"+10",coinCount:1,coinEffects:{1:"[적중시] 다음 턴에 방어 레벨 감소 3 부여 [적중시] 파열 횟수 2 증가"}},{name:"현장 자료 분석",power:"4",coin:"+2",coinCount:4,coinEffects:{1:"[적중시] 파열 횟수 3 증가",2:"[앞면 적중시] 파열 1 부여",3:"[앞면 적중시] 파열 1 부여",4:"[앞면 적중시] 파열 1 부여 [적 처치 시] 현재 파열 횟수가 가장 낮은 적 1명의 파열 횟수 2 증가"}}],defense:{name:"가드",power:"8",coin:"+8",coinCount:1,coinEffects:{}}},
  "히스클리프|멀티크랙 사무소 해결사": {skills:[{name:"40S-2 가동",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 충전 횟수 2 증가",2:"[적중시] 충전 횟수 2 증가"}},{name:"광전 표식",power:"4",coin:"+3",coinCount:3,coinEffects:{1:"[적중시] 충전 횟수를 소모했으면, 방어 레벨 감소 2 부여",2:"[적중시] 충전 횟수를 소모했으면, 방어 레벨 감소 2 부여",3:"[적중시] 체력 회복 감소 2 부여 [적중시] 자신의 충전 만큼 광전 부여 (최대 3)"}},{name:"광전 작살",power:"5",coin:"+2",coinCount:4,coinEffects:{2:"[적중시] 자신의 충전 횟수 7 증가",3:"[적중시] ( 충전 × 3)만큼 자신의 충전 횟수 증가 (최대 9)",4:"[적중시] 자신의 충전 만큼 광전 부여 (최대 3) [적중시] 자신의 충전 2 당 타격 취약 1 부여 (최대 2)"}}],defense:{name:"충전",power:"12",coin:"+6",coinCount:1,coinEffects:{}}},
  "히스클리프|R사 제 4무리 토끼팀": {skills:[{name:"풀뜯기",power:"4",coin:"+2",coinCount:3,coinEffects:{1:"탄환 1 소모",2:"탄환 1 소모",3:"[적중시] 자신의 충전 횟수 3 증가"}},{name:"집중 사격",power:"4",coin:"+2",coinCount:4,coinEffects:{1:"탄환 1 소모. [적중시] 출혈 1 부여",2:"탄환 1 소모. [적중시] 출혈 1 부여",3:"탄환 1 소모. [적중시] 출혈 1 부여"}},{name:"신속한 제압",power:"3",coin:"+2",coinCount:5,coinEffects:{1:"탄환 1 소모. [적중시] 취약 2 부여",2:"탄환 1 소모. [적중시] 취약 2 부여",3:"[적중시] 파열 1 부여",4:"[적중시] 파열 2 부여",5:"[적중시] 파열 3 부여"}}],defense:{name:"회피",power:"4",coin:"+10",coinCount:1,coinEffects:{}}},
  "히스클리프|로보토미 E.G.O::여우비": {skills:[{name:"우산후리기",power:"6",coin:"-2",coinCount:3,coinEffects:{3:"[적중시] 침잠 2 부여 [뒷면 적중시] 침잠 횟수 2 증가"}},{name:"진창다지기",power:"10",coin:"-3",coinCount:4,coinEffects:{2:"[뒷면 적중시] 파열 3 부여",3:"[뒷면 적중시] 파열 3 부여",4:"자신의 침잠 을 5 소모하여 피해량 +20% [뒷면 적중시] 진동 폭발"}},{name:"퍼져라!",power:"18",coin:"-7",coinCount:3,coinEffects:{1:"[뒷면 적중시] 다음 턴에 마비 1 부여",3:"[적중시] 파열 5 부여 [뒷면 적중시] 다음 턴에 취약 1 부여"}}],defense:{name:"경고",power:"10",coin:"-5",coinCount:2,coinEffects:{1:"[뒷면 적중시] 다음 턴에 마비 1을 얻음",2:"[적중시] 침잠 5 부여 [적중시] 파열 5 부여"}}},
  "히스클리프|피쿼드호 작살잡이": {skills:[{name:"사냥감 추적",power:"3",coin:"+4",coinCount:2,coinEffects:{2:"[적중시] 출혈 2 부여"}},{name:"작살박이",power:"4",coin:"+4",coinCount:3,coinEffects:{2:"[크리티컬 적중 시] 대상의 출혈 위력의 1/3만큼 대상의 출혈 횟수 증가 (최대 10)"}},{name:"매듭 끊기",power:"4",coin:"+3",coinCount:4,coinEffects:{1:"[적중시] 출혈 1 부여 [적중시] 자신의 체력이 최대 체력의 75% 미만이면 출혈 1 부여 [적중시] 자신의 체력이 최대 체력의 50% 미만이면 출혈 1 부여",2:"[적중시] 출혈 1 부여 [적중시] 자신의 체력이 최대 체력의 75% 미만이면 출혈 1 부여 [적중시] 자신의 체력이 최대 체력의 50% 미만이면 출혈 1 부여",4:"[크리티컬 적중 시] 크리티컬 피해량 +50%"}}],defense:{name:"되갚기",power:"5",coin:"+4",coinCount:2,coinEffects:{}}},
  "히스클리프|남부 외우피 협회 3과": {skills:[{name:"이행 권고",power:"3",coin:"+4",coinCount:2,coinEffects:{2:"[적중시] 진동 횟수 2 증가"}},{name:"마지막 경고",power:"4",coin:"+6",coinCount:2,coinEffects:{1:"[적중시] 진동 2 부여",2:"[적중시] 진동 2 부여"}},{name:"집행 선고",power:"5",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 진동 1 부여",2:"[적중시] 진동 1 부여",3:"[적중시] 대상의 진동 위력과 횟수의 합이 20 이상이면, 진동 - 붕괴 로 진폭 변환"}}],defense:{name:"방해는 금지다",power:"10",coin:"+4",coinCount:1,coinEffects:{}}},
  "히스클리프|와일드헌트": {skills:[{name:"참수",power:"3",coin:"+4",coinCount:2,coinEffects:{2:"[적중시] 침잠 3 부여"}},{name:"추도 행진",power:"5",coin:"+3",coinCount:3,coinEffects:{2:"[적중시] 침잠 2 부여",3:"[적중시] 침잠 3 부여 [적중시] 다음 턴에 다가오는 파탄 2 부여"}},{name:"레퀴엠",power:"6",coin:"+6",coinCount:2,coinEffects:{1:"[적중시] 침잠 횟수 4 증가 [적중시] 대상에게 다가오는 파탄 이 있다면, 침잠 횟수 2 증가",2:"[적중시] 침잠 3 부여 [적 처치시] 처치한 대상의 ( 침잠 / 2)만큼 무작위 적 2명에게 침잠 부여 (최대 5)"}}],defense:{name:"듀라한이여...!",power:"5",coin:"+4",coinCount:2,coinEffects:{2:"[적중시] 침잠 2 부여, 침잠 횟수 1 증가"}}},
  "히스클리프|마침표 사무소 해결사": {skills:[{name:"응사",power:"5",coin:"+3",coinCount:3,coinEffects:{1:"탄환 1 소모 [적중시] 자신의 호흡 횟수 1 증가",2:"탄환 1 소모",3:"탄환 1 소모"}},{name:"헤드샷",power:"10",coin:"+12",coinCount:1,coinEffects:{1:"탄환 1 소모 크리티컬 피해량 +50% [적중시] 관통 취약 1 부여 (턴 당 2회) [크리티컬 적중 시] 다음 턴에 관통 취약 1 부여 (턴 당 1회)"}},{name:"한 점만 노린다",power:"12",coin:"+14",coinCount:1,coinEffects:{1:"탄환 1 소모 크리티컬 피해량 +80% 크리티컬 피해량 +(대상의 관통 내성 × 50)% [크리티컬 적중 시] 자신의 호흡 위력이 30를 초과하면, 30을 초과하는 호흡 위력을 최대 10까지 소모하여, 피해량 +(소모한 호흡 위력 × 10)%"}}],defense:{name:"전투 호흡",power:"4",coin:"+10",coinCount:1,coinEffects:{}}},
  "히스클리프|흑운회 와카슈": {skills:[{name:"구름베기",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 출혈 1 부여",2:"[적중시] 출혈 1 부여 [적중시] 공격 레벨 감소 1 부여"}},{name:"폭풍구름",power:"4",coin:"+6",coinCount:2,coinEffects:{1:"[적중시] 출혈 2 부여 [앞면 적중시] 참격 취약 1 부여",2:"[적중시] 출혈 횟수 2 증가 [적중시] 공격 위력 감소 1 부여 (턴 당 2회)"}},{name:"천둥베기",power:"5",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 출혈 2 부여 [적중시] 마지막 코인의 피해량 +10%",2:"[적중시] 참격 취약 1 부여 [적중시] 마지막 코인의 피해량 +10%",3:"대상이 보유한 부정적인 효과 1개당 피해량 +10% (최대 100%) [적중시] 출혈 6 부여"}}],defense:{name:"뒷골목의 규칙",power:"4",coin:"+5",coinCount:1,coinEffects:{1:"[적중시] 출혈 2 부여 [적중시] 자신에게 흑운도 가 있으면 이 코인 1회 재사용 (스킬당 1회) [적중시] 자신에게 임전 이 있으면 이 코인 1회 재사용 (스킬당 1회)"}}},
  "히스클리프|W사 4등급 정리 요원 - CCA": {skills:[{name:"혼잡승객 정리",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 자신의 충전 횟수 4 증가 [적중시] 파열 횟수 1 증가",2:"[적중시] 파열 2 부여"}},{name:"부스트 엘보 커터",power:"5",coin:"+6",coinCount:2,coinEffects:{1:"[적중시] 자신의 충전 횟수 6 증가 [적중시] 파열 횟수 1 증가",2:"[적중시] 파열 3 부여"}},{name:"공간 절단 - CCA 오버드라이브",power:"3",coin:"+2",coinCount:4,coinEffects:{1:"[앞면 적중시] 자신의 충전 횟수 1 증가",2:"[앞면 적중시] 자신의 충전 횟수 1 증가",3:"[앞면 적중시] 자신의 충전 횟수 2 증가",4:"[코인 시작시] 충전 횟수를 최대 10까지 소모하여, (이 코인에서 소모한 충전 횟수)만큼 이 코인의 위력이 증가 [적중시] 파열 2 부여 [적중시] 이 코인 최종 피해량의 ( 충전 위력 × 10)%만큼 참격 피해 (최대 50%)"}}],defense:{name:"CCA 과충전",power:"3",coin:"+10",coinCount:0,coinEffects:{1:"파괴 불가 코인"}}},
  "히스클리프|흑수 - 유 필두": {skills:[{name:"쪼아먹는다",power:"2",coin:"+3",coinCount:3,coinEffects:{2:"[적중시] 파열 1 부여",3:"[적중시] 화상 1 부여 [앞면 적중시] 파열 횟수 1 증가"}},{name:"발톱으로 찢어주지",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 파열 1 부여 [앞면 적중시] 화상 횟수 1 증가",2:"[적중시] 화상 1 부여 [앞면 적중시] 파열 횟수 1 증가",3:"[적중시] 화상 3 얻음, 자신의 화상 횟수 1 증가 [적중시] 이 코인 최종 피해량의 (자신의 화상 × 2)% 만큼 분노 피해 (최대 20%) [앞면 적중시] 자신에게 혈염 [血炎] 이 있거나, 자신의 현재 체력이 최대 체력의 50% 미만이면, 이 코인 재사용 (스킬당 1회)"}},{name:"혈염난무[血炎亂舞]",power:"4",coin:"+3",coinCount:4,coinEffects:{1:"[적중시] 대상과 자신에게 화상 2 부여 [앞면 적중시] 자신의 현재 체력이 50% 이상이면, 자신의 화상 위력만큼 화상 피해를 받음",2:"[적중시] 대상과 자신에게 화상 2 부여 [앞면 적중시] 자신의 현재 체력이 50% 이상이면, 자신의 화상 위력만큼 화상 피해를 받음",3:"[적중시] 대상과 자신에게 화상 2 부여 [앞면 적중시] 자신의 현재 체력이 50% 이상이면, 자신의 화상 위력만큼 화상 피해를 받음",4:"[적중시] 파열 횟수 3 증가 [적중시] 이 코인 최종 피해량의 (자신의 화상 + 메인 타겟의 화상 )%만큼 모든 공격 대상에게 탐식 피해 (최대 20%)"}}],defense:{name:"먹잇감이군",power:"5",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 파열 횟수 1 증가",2:"[적중시] 화상 1 부여"}}},
  "히스클리프|중지 작은 형님": {skills:[{name:"발길질",power:"2",coin:"+3",coinCount:3,coinEffects:{1:"[적중시] 흐트러짐 5 회복 - 앙갚음 대상 이면 정신력 3 회복",2:"[적중시] 출혈 2 부여 [적중시] 화상 1 부여",3:"[적중시] 출혈 2 부여 [적중시] 화상 2 부여"}},{name:"뒤통수 조심!",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 출혈 횟수 3 증가 [적중시] 화상 횟수 1 증가",2:"[적중시] 출혈 2 부여",3:"[적중시] 마비 2 부여 [적중시] 화상 3 부여"}},{name:"내 헤어쿠포오오오온!!!!",power:"10",coin:"+12",coinCount:0,coinEffects:{1:"파괴 불가 코인 [적중시] 출혈 5 부여 [적중시] 화상 5 부여 [적중시] 이 코인 최종 피해량의 (질투 공명 수 × 5)%만큼 타격 피해 (최대 30%)"}}],defense:{name:"되갚기",power:"5",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 화상 1 부여",2:"[적중시] 출혈 2 부여"}}},
  "히스클리프|거미집 엄지 제자": {skills:[{name:"팔레르모 스파다",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 화상 2 부여",2:"[적중시] 진동 1 부여"}},{name:"콜피 소타니",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 화상 2 부여, 화상 횟수 2 증가",2:"[적중시] 진동 2 부여, 진동 횟수 2 증가",3:"완성되어가는 교본 이 있거나 대상에게 결투 고조 가 있으면, 진동 폭발 . 진동 횟수 1 감소"}},{name:"카치아토레",power:"5",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 화상 3 부여, 화상 횟수 2 증가",2:"[적중시] 진동 3 부여, 진동 횟수 2 증가",3:"완성되어가는 교본 1당, 피해량 +25% (최대 75%) [적중시] 진동 - 작열 로 진폭 변환 [적중시] 진동 폭발 . 대상의 진동 횟수 1 감소 [적중시] 완성되어가는 교본 이 있거나 대상의 결투 고조 가 3 이상이면, 진동 폭발 2회. 대상의 진동 횟수 2 감소"}}],defense:{name:"검끝 재기",power:"5",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 화상 1 부여 (턴당 2회)",2:"[적중시] 진동 1 부여 (턴당 2회)"}}},
  "이스마엘|LCB 수감자": {skills:[{name:"강타",power:"4",coin:"+7",coinCount:1,coinEffects:{1:"[적중시] 진동 횟수 1 증가"}},{name:"슬라이딩",power:"6",coin:"+9",coinCount:1,coinEffects:{1:"[적중시] 진동 3 부여"}},{name:"방어",power:"8",coin:"+12",coinCount:1,coinEffects:{1:"[적중시] 진동 폭발 . 타격 취약 1 부여"}}],defense:{name:"가드",power:"7",coin:"+3",coinCount:1,coinEffects:{}}},
  "이스마엘|남부 시 협회 5과": {skills:[{name:"비검",power:"3",coin:"+4",coinCount:2,coinEffects:{2:"[적중시] 호흡 2 얻음"}},{name:"섬격",power:"5",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 자신의 호흡 횟수 2 증가",2:"[적중시] 자신의 호흡 횟수 2 증가"}},{name:"숨고르기",power:"6",coin:"+6",coinCount:2,coinEffects:{1:"[앞면 적중시] 호흡 2 얻음",2:"[크리티컬 적중 시] 체력이 25% 미만일 때, 피해량의 100%만큼 체력 회복"}}],defense:{name:"반격",power:"8",coin:"+8",coinCount:1,coinEffects:{1:"[적중시] 호흡 횟수 1 증가"}}},
  "이스마엘|LCCB 대리": {skills:[{name:"밀쳐내기",power:"4",coin:"+6",coinCount:1,coinEffects:{1:"[적중시] 마비 3 부여"}},{name:"진동탄",power:"4",coin:"+3",coinCount:3,coinEffects:{1:"[적중시] 공격 위력 감소 1 부여",2:"탄환 1 소모. [적중시] 진동 8 부여. 진동 횟수 2 증가",3:"탄환 1 소모. [적중시] 진동 8 부여. 진동 횟수 2 증가"}},{name:"제압",power:"4",coin:"+2",coinCount:4,coinEffects:{1:"[적중시] 진동 폭발",2:"탄환 1 소모. [적중시] 파열 4 부여. 파열 횟수 2 증가",3:"탄환 1 소모. [적중시] 파열 4 부여. 파열 횟수 2 증가",4:"탄환 1 소모. [적중시] 취약 5 부여"}}],defense:{name:"가드",power:"10",coin:"+8",coinCount:1,coinEffects:{}}},
  "이스마엘|로보토미 E.G.O::출렁임": {skills:[{name:"무거워…!",power:"4",coin:"+6",coinCount:1,coinEffects:{1:"[앞면 적중시] 진동 1 부여 [적중시] 진동 횟수 1 증가"}},{name:"울렁거려…!",power:"5",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 진동 1 부여",2:"[적중시] 진동 2 부여"}},{name:"부식성 점액 타격",power:"6",coin:"+16",coinCount:1,coinEffects:{1:"[적중시] 진동 폭발 [적중시] 진동 횟수 4 감소 [적중시] 진동 폭발 시 파열 5 부여"}}],defense:{name:"가드",power:"12",coin:"+8",coinCount:1,coinEffects:{}}},
  "이스마엘|에드가 가문 버틀러": {skills:[{name:"빗겨쳐내기",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 호흡 2 얻음",2:"[적중시] 침잠 2 부여 [크리티컬 적중 시] 다음 턴에 신속 1 얻음"}},{name:"정리정돈",power:"4",coin:"+5",coinCount:2,coinEffects:{1:"[적중시] 다음 턴에 신속 1 얻음 [크리티컬 적중 시] 다음 턴에 속박 1 부여 [적중시] 방어 레벨 감소 2 부여",2:"[적중시] 침잠 4 부여"}},{name:"동체 속박술",power:"4",coin:"+3",coinCount:3,coinEffects:{1:"[적중시] 침잠 횟수 3 증가",2:"[적중시] 침잠 2 부여",3:"[적중시] 침잠 2 부여 [적중시] 다음 턴에 속박 2 부여 [적중시] 다음 턴에 참격 취약 1 부여"}}],defense:{name:"회피",power:"3",coin:"+10",coinCount:1,coinEffects:{}}},
  "이스마엘|R사 제 4무리 순록팀": {skills:[{name:"정신 가격",power:"4",coin:"+5",coinCount:2,coinEffects:{1:"[적중시] 침잠 1 부여 [적중시] 자신의 충전 횟수 2 증가",2:"[적중시] 침잠 1 부여 [적중시] 자신의 충전 횟수 2 증가"}},{name:"지져내기",power:"6",coin:"+12",coinCount:1,coinEffects:{1:"[적중시] 침잠 횟수 3 증가"}},{name:"정신 채찍",power:"2",coin:"+6",coinCount:4,coinEffects:{1:"[적중시] 침잠 1 부여 [적중시] 피해량의 40%만큼 흐트러짐 손상을 입힘",2:"[적중시] 침잠 1 부여 [적중시] 피해량의 30%만큼 흐트러짐 손상을 입힘",3:"[적중시] 침잠 1 부여 [적중시] 피해량의 20%만큼 흐트러짐 손상을 입힘",4:"[적중시] 침잠 1 부여 [적중시] 피해량의 10%만큼 흐트러짐 손상을 입힘"}}],defense:{name:"회피",power:"4",coin:"+10",coinCount:1,coinEffects:{}}},
  "이스마엘|남부 리우 협회 4과": {skills:[{name:"단각",power:"4",coin:"+3",coinCount:2,coinEffects:{1:"[적중시] 화상 1 부여",2:"[적중시] 화상 1 부여"}},{name:"정면 돌파",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 화상 1 부여",2:"[적중시] 화상 1 부여",3:"[적중시] 대상의 화상 이 6 이상이면, 화상 횟수 2 부여"}},{name:"이문정주",power:"3",coin:"+3",coinCount:4,coinEffects:{1:"[적중시] 화상 1 부여",2:"[적중시] 화상 1 부여",3:"[적중시] 화상 횟수 2 증가",4:"[공격 종료시] 대상이 흐트러짐 상태가 되거나 사망하면, 다음 턴에 더하기 코인 강화 1 얻음"}}],defense:{name:"반격",power:"9",coin:"+7",coinCount:1,coinEffects:{1:"[적중시] 화상 횟수 1 증가"}}},
  "이스마엘|어금니 보트 센터 해결사": {skills:[{name:"파쇄 준비",power:"4",coin:"+3",coinCount:2,coinEffects:{1:"[적중시] 자신의 진동 횟수 3 증가",2:"[적중시] 침잠 횟수 2 증가"}},{name:"작렬",power:"5",coin:"+5",coinCount:2,coinEffects:{1:"[적중시] 진동 횟수 3 증가 [적중시] 자신의 진동 횟수 2 증가",2:"[적중시] 침잠 6 부여 [적중시] 다음 턴에 방어 레벨 감소 4 부여"}},{name:"과격한 판단",power:"3",coin:"+5",coinCount:3,coinEffects:{1:"[적중시] 침잠 횟수 5 증가",2:"[적중시] 침잠 3 부여 [적중시] 자신의 진동 횟수 5를 소모하여 다음 턴에 취약 1 부여",3:"[적중시] 침잠 3 부여 [적중시] 자신의 진동 횟수 5를 소모하여 다음 턴에 취약 2 부여"}}],defense:{name:"신속 보법",power:"10",coin:"+4",coinCount:1,coinEffects:{}}},
  "이스마엘|피쿼드호 선장": {skills:[{name:"내 주위에 서라!",power:"4",coin:"+4",coinCount:2,coinEffects:{2:"[적중시] 출혈 2 부여"}},{name:"끝까지 추적한다!",power:"4",coin:"+4",coinCount:3,coinEffects:{2:"[적중시] 출혈 2 부여",3:"[적중시] 화상 1 부여"}},{name:"집착의 작살",power:"4",coin:"+3",coinCount:4,coinEffects:{2:"[적중시] 출혈 횟수 1 증가",3:"[적중시] 출혈 2 부여",4:"[적중시] 화상 횟수 1 증가"}}],defense:{name:"공포를 날려주지",power:"10",coin:"+4",coinCount:1,coinEffects:{}}},
  "이스마엘|서부 츠바이 협회 3과": {skills:[{name:"츠바이 기사단 대검술",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 진동 횟수 1 증가 [적중시] 다음 턴에 방어 레벨 증가 2를 얻음",2:"[적중시] 진동 횟수 1 증가 [적중시] 다음 턴에 방어 레벨 증가 2를 얻음"}},{name:"못 지나갑니다.",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 진동 4 부여",2:"[적중시] 다음 턴에 방어 레벨 증가 4를 얻음",3:"[적중시] (자신의 진동 횟수 / 2)만큼 진동 부여 (최대 4) [적중시] 자신의 방어 레벨 증가 가 8 이상이면, 대상에게 공격 위력 감소 1 부여"}},{name:"수호",power:"5",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 진동 2 부여",2:"[적중시] 진동 2 부여",3:"[적중시] 자신의 진동 횟수를 전부 소모하여, 소모한 값만큼 진동 부여 (최대 20) - (초과한 진동 × 5)%만큼 피해량이 증가 (최대 50%) [적중시] 진동 폭발 . 대상의 진동 횟수 1 감소 [적중시] 방어 태세 면, 진동 폭발 . 대상의 진동 횟수 1 감소"}}],defense:{name:"당신의 방패",power:"3",coin:"+12",coinCount:0,coinEffects:{1:"파괴 불가 코인"}}},
  "이스마엘|흑운회 부조장": {skills:[{name:"뒷처리",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 출혈 1 부여",2:"[적중시] 출혈 2 부여 [적중시] 공격 레벨 감소 1 부여"}},{name:"날카로운 칼날",power:"4",coin:"+6",coinCount:2,coinEffects:{1:"[적중시] 출혈 2 부여 [앞면 적중시] 참격 취약 1 부여 (턴 당 1회) - 자신 포함 흑운회 소속이 6명 이상이면, 대신 취약 2 부여",2:"[적중시] 출혈 횟수 2 증가 [적중시] 다음 턴에 참격 위력 증가 1 얻음 (턴 당 2회)"}},{name:"먹칠",power:"5",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 출혈 횟수 2 증가",2:"[적중시] 출혈 3 부여",3:"대상이 보유한 부정적인 효과 1개당 피해량 +10% (최대 100%) [적중시] 출혈 횟수 3회 발동. 대상의 출혈 횟수 3 감소"}}],defense:{name:"흩어지는 검격",power:"4",coin:"+10",coinCount:1,coinEffects:{}}},
  "이스마엘|가주 후보": {skills:[{name:"적격",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 파열 횟수 1 증가",2:"[적중시] 파열 2 부여 [크리티컬 적중시] 다음 턴에 공격 레벨 증가 1 얻음 (턴 당 2회)"}},{name:"적봉",power:"2",coin:"+3",coinCount:4,coinEffects:{1:"[적중시] 파열 횟수 1 증가 [크리티컬 적중시] 방어 레벨 감소 2 부여",2:"[적중시] 파열 횟수 1 증가 [크리티컬 적중시] 방어 레벨 감소 2 부여",3:"[적중시] 대상의 파열 만큼 호흡 얻음 (최대 5) [앞면 적중시] 대상의 파열 횟수만큼 자신의 호흡 횟수 증가 (최대 3)",4:"크리티컬 피해량 +(20 + 자신의 호흡 + 대상의 파열 )% (최대 50%) [크리티컬 적 처치시] 다음 턴에 공격 레벨 증가 3 얻음 (턴 당 1회)"}},{name:"적춘",power:"8",coin:"+14",coinCount:0,coinEffects:{1:"파괴 불가 코인 피해량 +(50 + 자신의 호흡 + 메인 타겟의 파열 )% (최대 75%) 크리티컬 피해량 +(80 + 자신의 호흡 + 메인 타겟의 파열 )% (최대 105%) 자신의 시[始] 당 크리티컬 피해량 +5% (최대 30%) [적중시] 파열 5 부여 [크리티컬 적중시] 파열 횟수 1 증가 [크리티컬 적중시] 호흡 2 얻음, 자신의 호흡 횟수 1 증가 [크리티컬 적 처치시] 자신의 호흡 횟수 2 증가 (턴 당 3회)"}}],defense:{name:"수회",power:"4",coin:"+10",coinCount:1,coinEffects:{}}},
  "이스마엘|정사무소 대표": {skills:[{name:"츠루기리 [鶴斬り]",power:"4",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 침잠 횟수 1 증가 [앞면 적중시] 침잠 횟수 1 증가",2:"[적중시] 진동 횟수 1 증가 [앞면 적중시] 진동 횟수 1 증가"}},{name:"억새 흘리기",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 침잠 2 부여 [앞면 적중시] 침잠 1 부여",2:"[적중시] 진동 2 부여 [앞면 적중시] 진동 1 부여",3:"[적중시] 정신력 5 회복"}},{name:"사쿠라센 [桜閃]",power:"5",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 진동 횟수 2 증가 [적중시] 침잠 횟수 2 증가 [앞면 적중시] 침잠 횟수 1 증가",2:"[적중시] 진동 3 부여 [적중시] 침잠 3 부여 [앞면 적중시] 진동 횟수 1 증가",3:"대상이 진폭 변환 이나 진폭 얽힘 상태면, 이 코인 피해량 +48% [적중시] 대상이 진폭 변환 상태가 아니면, 진동 - 붕괴 로 진폭 변환"}}],defense:{name:"화투패 섞기",power:"5",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 침잠 횟수 1 증가",2:"[적중시] 진동 2 부여"}}},
  "이스마엘|거미집 중지 제자": {skills:[{name:"욜라 패기",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 출혈 2 부여",2:"[적중시] 추가 타격 피해 5 [적중시] 중지식 강화 문신 이 있으면, 출혈 횟수 1 증가"}},{name:"십자난무",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 출혈 2 부여",2:"[적중시] 출혈 횟수 1 증가",3:"[적중시] 추가 타격 피해 5 [적중시] 중지식 강화 문신 이 있으면, 다음 턴에 마비 1, 속박 1 부여"}},{name:"바이올렛 브레이크 슬램",power:"4",coin:"+3",coinCount:4,coinEffects:{1:"[적중시] 출혈 2 부여",2:"[적중시] 출혈 횟수 2 증가",4:"[적중시] 이 코인 최종 피해량의 (질투 공명 수 × 5)만큼 추가 참격 피해 (최대 30%) [적중시] 출혈 1 부여"}}],defense:{name:"가만 안둬요",power:"4",coin:"+5",coinCount:2,coinEffects:{1:"[적중시] 흐트러짐 6 회복",2:"[적중시] 출혈 1 부여"}}},
  "이스마엘|LCD 현장추리팀": {skills:[{name:"세법",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 호흡 2 얻음",2:"[적중시] 호흡 1 얻음 [적중시] 출혈 1 부여 [적중시] 도깨비팔 을 보유한 상태로 자신의 신속 이 3 이상이면, 이 코인 재사용 (턴당 1회)"}},{name:"자법",power:"3",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 호흡 2 얻음 [적중시] 출혈 1 부여",2:"[적중시] 호흡 2 얻음 [적중시] 출혈 1 부여",3:"[적중시] 출혈 횟수 1 증가 [적중시] 도깨비팔 을 보유한 상태로 자신의 신속 이 3 이상이면, 이 코인 재사용 (턴당 1회) [크리티컬 적중 시] 다음 턴에 신속 2 얻음 (턴당 1회)"}},{name:"청린화",power:"5",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 자신의 호흡 횟수 3 증가 [크리티컬 적중 시] 묵 공방 - 예[銳] 2식 발도 / 추력:도깨비불 1 얻음",2:"[적중시] 호흡 2 얻음 [크리티컬 적중 시] 묵 공방 - 예[銳] 2식 발도 / 추력:도깨비불 1 얻음",3:"자신의 묵 공방 - 예[銳] 2식 발도 / 추력:도깨비불 수치 1당, 크리티컬 피해량 +2% (최대 20%) [적중시] 출혈 1 부여 [적중시] 참격 취약 1 부여 (턴당 1회) [크리티컬 적중 시] 묵 공방 - 예[銳] 2식 발도 / 추력:도깨비불 1 얻음"}}],defense:{name:"앞길을 밝힐게요",power:"5",coin:"+8",coinCount:0,coinEffects:{1:"파괴 불가 코인"}}},
  "로쟈|LCB 수감자": {skills:[{name:"내려찍기",power:"4",coin:"+7",coinCount:1,coinEffects:{1:"[적중시] 출혈 2 부여"}},{name:"연속 베기",power:"4",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 출혈 2 부여",2:"[적중시] 출혈 2 부여 [앞면 적중시] 출혈 횟수 1 증가"}},{name:"처단",power:"4",coin:"+2",coinCount:4,coinEffects:{1:"[앞면 적중시] 출혈 1 부여",2:"[앞면 적중시] 출혈 1 부여",3:"[앞면 적중시] 출혈 1 부여",4:"[적중시] 대상의 출혈 이 6 이상일 때 피해량 +20%"}}],defense:{name:"반격",power:"7",coin:"+4",coinCount:1,coinEffects:{}}},
  "로쟈|LCCB 대리": {skills:[{name:"타격",power:"5",coin:"+6",coinCount:1,coinEffects:{1:"[앞면 적중시] 마비 3 부여"}},{name:"찌르기",power:"6",coin:"+1",coinCount:2,coinEffects:{2:"[적중시] 수비 위력 감소 4 부여"}},{name:"제압",power:"7",coin:"+2",coinCount:2,coinEffects:{1:"[앞면 적중시] 수비 위력 감소 4 부여 [적중시] 방어 레벨 감소 4 부여",2:"[앞면 적중시] 마비 3 부여"}}],defense:{name:"가드",power:"8",coin:"+8",coinCount:1,coinEffects:{}}},
  "로쟈|N사 중간 망치": {skills:[{name:"충실한 못질",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 출혈 1 부여 [적중시] 대상에게 못 이 있을 때, 못 1 부여",2:"[적중시] 출혈 1 부여 [적중시] 대상에게 못 이 있을 때, 못 1 부여"}},{name:"광적인 정화",power:"6",coin:"+2",coinCount:2,coinEffects:{1:"[적중시] 다음 턴에 못 1 부여",2:"[적중시] 다음 턴에 마비 1 부여"}},{name:"철의 단죄",power:"4",coin:"+2",coinCount:4,coinEffects:{3:"[앞면 적중시] 출혈 1 부여",4:"[앞면 적중시] 출혈 2 부여"}}],defense:{name:"반격",power:"7",coin:"+6",coinCount:1,coinEffects:{1:"[적중시] 못 1 부여"}}},
  "로쟈|남부 츠바이 협회 5과": {skills:[{name:"견제",power:"4",coin:"+2",coinCount:2,coinEffects:{1:"[적중시] 호흡 횟수 1 증가",2:"[적중시] 호흡 횟수 1 증가"}},{name:"집중 방어",power:"6",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 호흡 횟수 2 증가"}},{name:"위협 대상 제압",power:"5",coin:"+2",coinCount:3,coinEffects:{3:"[크리티컬 적중 시] 다음 턴에 취약 1 부여"}}],defense:{name:"가드",power:"15",coin:"+5",coinCount:1,coinEffects:{}}},
  "로쟈|T사 2등급 징수직 직원": {skills:[{name:"징수 준비",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 진동 2 부여",2:"[적중시] 자신의 진동 횟수 1 증가 [합 승리 후 적중] 진동 횟수 1 증가"}},{name:"T사식 제압 격투",power:"4",coin:"+5",coinCount:2,coinEffects:{1:"[적중시] 자신의 진동 횟수 2 증가 [합 승리 후 적중] 진동 횟수 3 증가",2:"[적중시] 다음 턴에 속박 1 부여 [적중시] 대상의 진동 이 6 이상이면, 다음 턴에 속박 1 부여"}},{name:"징수 집행",power:"2",coin:"+3",coinCount:4,coinEffects:{1:"[적중시] 진동 횟수 3 증가",2:"[적중시] 진동 1 부여",3:"[적중시] 진동 2 부여",4:"[적중시] 다음 턴에 속박 1 부여 [적중시] 스킬 사용시 진동 횟수를 소모했다면, 다음 턴에 속박 5 부여 [적중시] 자신이 시간 대여 상태면, 시간 유예 2 부여 [적중시] 진동 폭발 . 대상의 진동 횟수 1 감소"}}],defense:{name:"시간 대여",power:"15",coin:"+4",coinCount:1,coinEffects:{}}},
  "로쟈|흑운회 와카슈": {skills:[{name:"날카로운 칼날",power:"5",coin:"+6",coinCount:1,coinEffects:{1:"[적중시] 호흡 4 얻음"}},{name:"흩어지는 검격",power:"6",coin:"+3",coinCount:2,coinEffects:{1:"[적중시] 호흡 2 얻음 [적중시] 출혈 2 부여",2:"[적중시] 호흡 3 얻음 [적중시] 출혈 3 부여"}},{name:"쾌청 베기",power:"7",coin:"+18",coinCount:1,coinEffects:{1:"[크리티컬 적중 시] 출혈 10 부여"}}],defense:{name:"반격",power:"9",coin:"+6",coinCount:1,coinEffects:{}}},
  "로쟈|장미스패너 공방 대표": {skills:[{name:"시동 걸기",power:"4",coin:"+3",coinCount:2,coinEffects:{1:"[앞면 적중시] 진동 1 부여 [적중시] 자신의 충전 횟수 4 증가",2:"[적중시] 진동 횟수 1 증가"}},{name:"진동압착",power:"6",coin:"+3",coinCount:2,coinEffects:{1:"[적중시] 진동 횟수 1 증가",2:"[적중시] 진동 2 부여 자신의 충전 횟수가 3 이상이면, 앞면이 나올 때마다 이 코인 재사용 (최대 2회) 재사용 시마다 부여하는 진동 +2 이 코인이 2회 재사용된 경우, 진동 부여 후 진동 폭발 진동 폭발 시 진동 횟수 1 감소"}},{name:"한탕 해볼까",power:"5",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 진동 횟수 2 증가",2:"[앞면 적중시] 진동 2 부여 [적중시] 진동 폭발 진동 폭발 시 진동 횟수 1 감소",3:"[적중시] 진동 폭발 진동 폭발 시 진동 횟수 1 감소 [적중시] 대상이 흐트러짐 상태면 피해량의 25%만큼 추가 피해"}}],defense:{name:"예열",power:"10",coin:"+6",coinCount:1,coinEffects:{}}},
  "로쟈|남부 디에치 협회 4과": {skills:[{name:"무지를 밝히리",power:"3",coin:"+2",coinCount:3,coinEffects:{3:"[적중시] 흐트러짐 10 회복"}},{name:"지식의 무게",power:"3",coin:"+3",coinCount:4,coinEffects:{4:"[적중시] 침잠 5 부여"}},{name:"고통스러운 계몽",power:"4",coin:"+3",coinCount:4,coinEffects:{1:"[적중시] 침잠 횟수 4 증가",4:"[적중시] 침잠 횟수 2 증가"}}],defense:{name:"탐구 몰입",power:"15",coin:"+5",coinCount:1,coinEffects:{}}},
  "로쟈|남부 리우 협회 4과 부장": {skills:[{name:"염권격",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 화상 1 부여",2:"[적중시] 화상 1 부여"}},{name:"염수격-연",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 화상 횟수 1 증가",2:"[적중시] 화상 횟수 1 증가",3:"[앞면 적중시] 화상 횟수 1 증가 [적중시] 대상의 화상 횟수가 6 이상이면, 화상 이 없거나 화상 횟수가 적은 적 2명에게 화상 3 부여"}},{name:"일점돌파",power:"4",coin:"+3",coinCount:4,coinEffects:{1:"[적중시] 화상 1 부여",2:"[적중시] 화상 1 부여",3:"[적중시] 화상 2 부여",4:"[적중시] 대상의 화상 위력만큼 분노 속성 피해를 줌. (최대 30)화상 횟수 2 감소"}}],defense:{name:"반격",power:"9",coin:"+7",coinCount:1,coinEffects:{1:"[적중시] 화상 1 부여"}}},
  "로쟈|북부 제뱌찌 협회 3과": {skills:[{name:"딜리버리 캐리어 - 붕괴 나이프",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 딜리버리 캐리어 - 로쟈 1 얻음 - 자신의 딜리버리 캐리어 - 로쟈 가 15 미만이면, 딜리버리 캐리어 - 로쟈 1 추가로 얻음",2:"[적중시] 파열 3 부여"}},{name:"딜리버리 캐리어 - 가젯 사출",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 딜리버리 캐리어 - 로쟈 1 얻음 - 자신의 딜리버리 캐리어 - 로쟈 가 15 미만이면, 딜리버리 캐리어 - 로쟈 2 추가로 얻음",2:"[앞면 적중시] 다음 턴에 신속 1 얻음 - 자신의 딜리버리 캐리어 - 로쟈 가 15 이상이면, 신속 1 추가로 얻음",3:"[적중시] 딜리버리 캐리어 - 로쟈 5 또는 대상의 파열 5 당 방어 레벨 감소 1 부여 (최대 6, 턴 당 1회)"}},{name:"플루! 힘 좀 써줘!",power:"5",coin:"+4",coinCount:3,coinEffects:{2:"[적중시] 파열 횟수 3 증가 (턴 당 1회) - 딜리버리 캐리어 - 로쟈 10 당 파열 횟수 1 추가로 증가 (최대 2)",3:"[적중시] 딜리버리 캐리어 - 로쟈 가 15 이상이면, 피해량 +25% [공격 종료시] 대상이 흐트러짐 상태가 되거나 사망하면, 다음 턴에 신속 2 얻음 (턴 당 1회)"}}],defense:{name:"배달 보조 및 통제 시퀀스",power:"9",coin:"+7",coinCount:1,coinEffects:{}}},
  "로쟈|라만차랜드 공주": {skills:[{name:"물러가도록...",power:"3",coin:"+4",coinCount:2,coinEffects:{2:"[적중시] 출혈 1 부여 [적중시] 파열 1 부여"}},{name:"흩뿌리며 갈려나가라",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 출혈 횟수 2 증가 [적중시] 파열 횟수 2 증가",3:"[적중시] 출혈 1 부여 [적중시] 파열 1 부여"}},{name:"축제는 끝날거야",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 출혈 횟수 1 증가 [적중시] 파열 횟수 1 증가",2:"[적중시] 출혈 1 부여 [적중시] 파열 1 부여",3:"[적중시] 출혈 1 부여 [적중시] 파열 1 부여"}}],defense:{name:"돈키호테류 경혈 15식 양산",power:"5",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 출혈 2 부여",2:"[적중시] 출혈 횟수 1 증가"}}},
  "로쟈|흑수 - 사": {skills:[{name:"사섬",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 파열 1 부여",2:"[적중시] 파열 1 부여 [크리티컬 적중 시] 자신에게 사완 이 있으면, 파열 2 부여"}},{name:"뱀 송곳니",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 파열 1 부여",2:"[적중시] 파열 횟수 1 증가",3:"[적중시] 호흡 이 30 이상이면, 호흡 10 소모하여 코인 1회 재사용 (최대 1회) [적중시] 주살【독】 부여 [크리티컬 적중시] 사완 1 얻음"}},{name:"절명사난",power:"5",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 호흡 횟수 2 증가",2:"[적중시] 호흡 2 얻음",3:"[적중시] 파열 횟수 1 증가 [크리티컬 적중 시] 대상의 주살【독】 1 감소 [크리티컬 적중 시] 이 코인 1회 재사용 (스킬당 2회)"}}],defense:{name:"반축",power:"3",coin:"+10",coinCount:0,coinEffects:{1:"[파괴 불가 코인]"}}},
  "로쟈|로보토미 E.G.O::눈물로 벼려낸 검": {skills:[{name:"기사의 보호",power:"4",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 침잠 1 부여",2:"[적중시] 침잠 1 부여 [적중시] 자신의 깊은 눈물 2 얻음 - 지키는 검 2당 깊은 눈물 1 추가로 얻음 (최대 2)"}},{name:"정의의 힘으로",power:"4",coin:"+4",coinCount:3,coinEffects:{2:"[적중시] 침잠 3 부여",3:"[적중시] 침잠 횟수 2 증가 [적중시] 자신의 깊은 눈물 3 얻음 - 지키는 검 수치만큼 깊은 눈물 추가로 얻음 (최대 5)"}},{name:"아르카나 피어스",power:"5",coin:"+4",coinCount:3,coinEffects:{2:"[적중시] 침잠 횟수 3 증가",3:"눈물 벼리기 를 보유하였거나 이 코인에서 소모하였다면, 피해량 +20% [적중시] 지키는 검 수치만큼 침잠 부여 (최대 5)"}}],defense:{name:"기사의 믿음",power:"3",coin:"+10",coinCount:0,coinEffects:{1:"파괴 불가 코인"}}},
  "로쟈|R사 제 4무리 순록팀": {skills:[{name:"에너지 강타 - '성탄절에 출동 나오게한 대가야'",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 침잠 1 부여 [적중시] 자신의 충전 횟수 3 증가",2:"[적중시] 침잠 1 부여 [적중시] 자신의 충전 횟수 2 증가"}},{name:"집중 - '크리스마스색으로 터져버려'",power:"4",coin:"+6",coinCount:2,coinEffects:{1:"[적중시] 침잠 2 부여, 침잠 횟수 2 증가 [적중시] 자신의 충전 횟수 6 증가",2:"[적중시] 자신의 충전 횟수가 8 미만이면, 침잠 5 얻고 자신의 충전 횟수 4 증가 [적중시] 자신의 충전 횟수가 8 이상이면, 4 소모하여 다음 턴에 타격 취약 1 부여 (턴당 1회)"}},{name:"정신 채찍 - '아하하… 이것봐 우리 모두가 성탄절 폭죽이야'",power:"4",coin:"+3",coinCount:4,coinEffects:{1:"[적중시] 침잠 횟수 3 증가 [적중시] 피해량의 10%만큼 흐트러짐 손상을 입힘 - 자신의 충전 이 3 이상이면, 대신 피해량의 20%만큼 흐트러짐 손상을 입힘",2:"[적중시] 침잠 1 부여 [적중시] 피해량의 10%만큼 흐트러짐 손상을 입힘",3:"[적중시] 침잠 1 부여 [적중시] 피해량의 10%만큼 흐트러짐 손상을 입힘",4:"[적중시] 침잠 1 부여 [적중시] 피해량의 5%만큼 흐트러짐 손상을 입힘"}}],defense:{name:"에너지 응집 - '반짝반짝 다들 빛나네 하하'",power:"10",coin:"+5",coinCount:1,coinEffects:{}}},
  "로쟈|약지 야수파 도슨트": {skills:[{name:"강렬한 덧칠",power:"6",coin:"+7",coinCount:1,coinEffects:{1:"대상의 부정적인 효과가 4개 이상이면, 이 코인 재사용 (최대 1회) [적중시] 출혈 횟수 1 증가 [적중시] 침잠 1 부여 [적중시] 찢긴 색채 [루주] 1 부여"}},{name:"원색 표현",power:"4",coin:"+6",coinCount:2,coinEffects:{1:"[적중시] 출혈 2 부여 [적중시] 찢긴 색채 [루주] 1 부여",2:"[적중시] 침잠 횟수 2 증가 [적중시] 찢긴 색채 [블뢰] 3 부여 [적중시] 대상의 부정적인 효과가 5개 이상이면, 과감한 터치 1 부여"}},{name:"야수파 - 포악한 전개",power:"4",coin:"+3",coinCount:4,coinEffects:{1:"[적중시] 출혈 2 부여 [적중시] 찢긴 색채 [루주] 1 부여",2:"[적중시] 출혈 횟수 2 증가 [적중시] 찢긴 색채 [루주] 1 부여",3:"[적중시] 침잠 2 부여 [적중시] 찢긴 색채 [블뢰] 3 부여",4:"[적중시] 출혈 횟수 2 증가 [적중시] 대상의 부정적인 효과가 5개 이상이면, 다음 턴에 과감한 터치 1 부여 [적중시] 과감한 터치 1 부여"}}],defense:{name:"소재 다듬기",power:"5",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 출혈 1 부여 [적중시] 찢긴 색채 [루주] 1 부여 - 대상에게 이 효과가 없으면, 추가 1 부여",2:"[적중시] 침잠 1 부여 [적중시] 찢긴 색채 [블뢰] 1 부여 - 대상에게 이 효과가 없으면, 추가 1 부여"}}},
  "로쟈|거미집 엄지 아비": {skills:[{name:"콜피 디 탈리오",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 화상 1 부여 [적중시] 진동 1 부여",2:"[적중시] 화상 횟수 1 증가 [적중시] 진동 횟수 1 증가"}},{name:"기꺼이 이 탄환으로 꿰뚫어주지",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"가속탄 1 소모 [적중시] 화상 2 부여 [적중시] 진동 2 부여",2:"가속탄 1 소모 [적중시] 진동 1 부여, 진동 횟수 1 증가",3:"[적중시] 진동 폭발 . 진동 횟수 1 감소"}},{name:"세치오나투라 디 엘레판테",power:"4",coin:"+3",coinCount:4,coinEffects:{1:"가속탄 1 소모 [적중시] 화상 2 부여 [적중시] 진동 2 부여",2:"가속탄 1 소모 [적중시] 화상 횟수 2 증가 [적중시] 진동 횟수 2 증가",3:"가속탄 1 소모 [적중시] 진동 - 작열 로 진폭 변환",4:"[적중시] 진동 폭발 . 진동 횟수 1 감소 - 이 스킬에서 소모한 가속탄 만큼 효과 추가 발동 (최대 2회)"}}],defense:{name:"꺼져!",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 화상 1 부여 [적중시] 진동 1 부여",2:"[적중시] 화상 1 부여 [적중시] 진동 1 부여"}}},
  "로쟈|오트쿠튀르::수선실": {skills:[{name:"르투슈(Retouche)",sin:"오만",power:"6",coin:"+6",coinCount:1,coinEffects:{1:"[합 불가능] [대상 변경 불가] 양극성 [공격 종료시] 대상이 아군이면, 충전 횟수 4, 공격 레벨 증가 1 부여 [공격 종료시] 대상이 아군이면 아래 효과 발동 (턴당 2회) - 자신의 최대 체력의 10%만큼 보호막 부여 (최소 1) - 두 가위 1 부여 - 대상이 충전 인격이면, 공격 위력 증가 2 부여"}},{name:"고정 그리고 패턴 따라 재단",sin:"질투",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[전투 시작시] 자신과 자신을 제외한 편성 순서가 가장 빠른 아군(충전 인격 우선) 1명, 현재 체력 비율이 가장 낮은 아군에게 공격 레벨 증가 2, 자신의 최대 체력의 5%만큼 보호막 부여 (최소 1. 턴당 1회) - 충전 인격이면 공격 레벨 증가 1, 자신의 최대 체력의 5%만큼 보호막 추가 부여 [사용시] 대상의 진동 위력 6당, 코인 위력 +1 (최대 2) [사용시] 자신의 표류 관성 횟수를 5 소모하여, 최종 위력 +2 [적중시] 자신의 표류 관성 횟수 6 증가",2:"[적중시] 진동 횟수 2 증가",3:"[적중시] 진동 폭발. 대상의 진동 횟수 1 감소 [적중시] 나태 내성 약화 1 부여 (턴당 1회)"}},{name:"쿠페 당 르 비에",sin:"나태",power:"5",coin:"+4",coinCount:3,coinEffects:{1:"자신의 꽃가위 1당 피해량 +30% (최대 60%) [전투 시작시] 자신과 자신을 제외한 편성 순서가 가장 빠른 아군(충전 인격 우선) 1명, 현재 체력 비율이 가장 낮은 아군 1명에게 두 가위 1을 부여하고, 자신의 최대 체력의 10%만큼 보호막을 부여 (최소 1. 턴당 1회) [사용시] 대상의 진동 위력 6당, 코인 위력 +1 (최대 2) [사용시] 자신의 표류 관성 위력 3당 최종 위력 +1 (최대 2) [사용시] 자신의 표류 관성 횟수를 5 소모하여, 최종 위력 +2 [공격 종료시] 자신의 표류 관성 횟수 5 증가 [적중시] 진동 횟수 3 증가 [적중시] 마름질 표식 1 부여",2:"[적중시] 진동 3 부여",3:"[적중시] 마름질 표식 1 부여 [적중시] 진동 폭발. 대상의 진동 횟수 1 감소 [적중시] 자신의 표류 관성 횟수가 5 이상이면, 5를 소모하여 진동 폭발. 대상의 진동 횟수 1 감소"}}],defense:{name:"트리밍",sin:"나태",power:"7",coin:"+4",coinCount:1,coinEffects:{1:"[합 가능 반격] [전투 시작시] 자신의 표류 관성 횟수 5 증가 (턴당 2회) [전투 시작시] 자신과 자신을 제외한 현재 체력 비율이 가장 낮은 아군 2명에게 자신의 최대 체력의 10%만큼 보호막을 부여 (최소 1. 턴당 1회) [사용시] 자신의 표류 관성 횟수 5당 합 위력 +1 (최대 4) [적중시] 진동 2 부여"}}},
  "싱클레어|LCB 수감자": {skills:[{name:"내려베기",power:"4",coin:"+7",coinCount:1,coinEffects:{1:"[적중시] 파열 2 부여"}},{name:"연속 베기",power:"4",coin:"+2",coinCount:3,coinEffects:{}},{name:"헤집어 베기",power:"5",coin:"+3",coinCount:3,coinEffects:{1:"[앞면 적중시] 파열 1 부여",2:"[앞면 적중시] 파열 1 부여",3:"[앞면 적중시] 파열 1 부여"}}],defense:{name:"반격",power:"7",coin:"+4",coinCount:1,coinEffects:{}}},
  "싱클레어|남부 츠바이 협회 6과": {skills:[{name:"타격",power:"4",coin:"+6",coinCount:1,coinEffects:{1:"[적중시] 진동 2 부여"}},{name:"제압",power:"6",coin:"+2",coinCount:2,coinEffects:{2:"[적중시] 진동 6 부여 [적중시] 다음 턴에 피해량 감소 2 부여"}},{name:"강타",power:"7",coin:"+13",coinCount:1,coinEffects:{1:"[적중시] 진동 폭발 [적중시] 진동 폭발 시 대상의 진동 이 5 이상이면, 다음 턴에 보호 2 얻음 [적중시] 타격 취약 2 부여"}}],defense:{name:"가드",power:"12",coin:"+6",coinCount:1,coinEffects:{}}},
  "싱클레어|마리아치 보스": {skills:[{name:"춤사위",power:"4",coin:"+2",coinCount:2,coinEffects:{1:"[적중시] 침잠 4 부여"}},{name:"격정의 춤",power:"5",coin:"+1",coinCount:3,coinEffects:{1:"[적중시] 호흡 2 얻음 [적중시] 자신의 호흡 횟수 1 증가",2:"[적중시] 침잠 2 부여 [적중시] 침잠 횟수 1 증가",3:"[적중시] 침잠 2 부여"}},{name:"파냐타 파티",power:"8",coin:"+11",coinCount:1,coinEffects:{1:"[적중시] 피해량의 50%만큼 흐트러짐 회복"}}],defense:{name:"회피",power:"5",coin:"+10",coinCount:1,coinEffects:{}}},
  "싱클레어|로보토미 E.G.O::홍적": {skills:[{name:"상처 부각",power:"5",coin:"+5",coinCount:1,coinEffects:{1:"[적중시] 파열 2 부여 [적중시] 대상의 파열이 5 이상이면 부적 1 얻음"}},{name:"늘어나는 부적",power:"4",coin:"+3",coinCount:3,coinEffects:{1:"[적중시] 부적 1 얻음 [적중시] 대상에게 파열이 있으면 부적 1 얻음",2:"[적중시] 부적 1 얻음 [적중시] 대상에게 파열이 있으면 부적 1 얻음",3:"[적중시] 부적 1 얻음 [적중시] 대상에게 파열이 있으면 부적 1 얻음"}},{name:"파열부",power:"5",coin:"+6",coinCount:2,coinEffects:{1:"[적중시] 자신의 부적 5 소모, 부적 5 부여",2:"[적중시] 대상에게 부적 이 있으면 파열 횟수 3 증가"}}],defense:{name:"가드",power:"8",coin:"+8",coinCount:1,coinEffects:{}}},
  "싱클레어|어금니 보트 센터 해결사": {skills:[{name:"맹습",power:"2",coin:"+1",coinCount:4,coinEffects:{2:"[적중시] 자신의 진동 횟수 2 증가 [적중시] 진동 횟수 1 증가",4:"[적중시] 자신의 진동 횟수 2 증가 [적중시] 진동 횟수 1 증가"}},{name:"침착하게…",power:"4",coin:"+12",coinCount:1,coinEffects:{1:"[적중시] 진동 6 부여"}},{name:"도박수",power:"4",coin:"+6",coinCount:2,coinEffects:{1:"[적중시] 자신의 진동 횟수가 10 이상이면, 진동 횟수를 전부 소모해 대상에게 동일한 값의 진동 횟수 부여 [적중시] 자신의 진동 횟수가 10 미만이면, 진동 10을 얻고, 자신에게 진동 폭발 발생 대상에게 진동 폭발 피해만큼 타격 피해를 입힘"}}],defense:{name:"게 딱지 녀석들…!",power:"8",coin:"+8",coinCount:1,coinEffects:{}}},
  "싱클레어|서부 츠바이 협회 3과": {skills:[{name:"제압합니다.",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[합 승리 후 적중] 진동 횟수 2 증가",2:"[적중시] 다음 턴에 방어 레벨 증가 2를 얻음"}},{name:"전투 준비",power:"4",coin:"+5",coinCount:2,coinEffects:{1:"[합 승리 후 적중] 자신 제외 현재 체력 비율이 가장 낮은 아군 2명에게 다음 턴에 방어 레벨 증가 2 부여",2:"[적중시] 자신을 제외한 방어 레벨 증가 를 보유한 아군 2명에게 (대상이 보유한 방어 레벨 증가 / 2)만큼 다음 턴에 공격 레벨 증가 부여 (턴 당 1회. 최대 3 부여)"}},{name:"울타리",power:"4",coin:"+3",coinCount:3,coinEffects:{1:"[적중시] 자신 제외 현재 체력 비율이 가장 낮은 아군 1명에게 다음 턴에 방어 레벨 증가 4 부여",3:"[적중시] 자신의 진동 횟수를 최대 8 소모하여, 소모한 값만큼 대상의 진동 횟수 증가 [적중시] 진동 폭발 . 대상의 진동 횟수 1 감소"}}],defense:{name:"츠바이 기사단 대검술 - 가드",power:"2",coin:"+9",coinCount:0,coinEffects:{1:"파괴 불가 코인"}}},
  "싱클레어|검계 살수": {skills:[{name:"참관",power:"5",coin:"+2",coinCount:2,coinEffects:{2:"[적중시] 자신의 호흡 횟수 2 증가"}},{name:"연참",power:"6",coin:"+2",coinCount:3,coinEffects:{1:"[적중시] 호흡 2 얻음",2:"[적중시] 호흡 1 얻음",3:"[적중시] 호흡 1 얻음"}},{name:"골단",power:"8",coin:"+18",coinCount:1,coinEffects:{1:"[적중시] 마비 5 부여 [적중시] 출혈 5 부여"}}],defense:{name:"반격 - 초생",power:"9",coin:"+6",coinCount:1,coinEffects:{}}},
  "싱클레어|쥐어들 자": {skills:[{name:"내몰린 심판",power:"8",coin:"-2",coinCount:2,coinEffects:{2:"[뒷면 적중시] 다음 턴에 광신 1 얻음 [적중시] 화상 3 부여"}},{name:"판단을 멈춘 집행",power:"16",coin:"-4",coinCount:4,coinEffects:{2:"[뒷면 적중시] 화상 2 부여 [적중시] 화상 1 부여",3:"[뒷면 적중시] 화상 2 부여 [적중시] 화상 1 부여",4:"[뒷면 적중시] 화상 횟수 1 증가 [적중시] 출혈 2 부여"}},{name:"자멸적 정화",power:"30",coin:"-12",coinCount:3,coinEffects:{2:"[적중시] 피해량의 50%만큼 흐트러짐 손상을 입힘",3:"[적중시] 대상에게 출혈 이 5 이상 있으면, 화상 7 부여 [적 처치 시] 다음 턴에 타격 위력 증가 1 얻음"}}],defense:{name:"그만…",power:"17",coin:"-7",coinCount:1,coinEffects:{}}},
  "싱클레어|남부 섕크 협회 4과 부장": {skills:[{name:"르미즈",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 다음 턴에 신속 1 얻음",2:"[적중시] 다음 턴에 신속 1 얻음"}},{name:"앙가즈망",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 자신의 호흡 횟수 1 증가",2:"[적중시] 자신의 호흡 횟수 1 증가"}},{name:"꽁트르 아따끄",power:"5",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 결투 선포 - 싱클레어 부여",3:"크리티컬 피해량 +50%"}}],defense:{name:"데팡시브",power:"4",coin:"+10",coinCount:1,coinEffects:{}}},
  "싱클레어|새벽 사무소 해결사": {skills:[{name:"맹렬한 돌진",power:"3",coin:"+7",coinCount:1,coinEffects:{1:"[적중시] 화상 2 부여 [앞면 적중시] 자신이 불안정 E.G.O 상태면, 코인 재사용 (스킬당 최대 1회)"}},{name:"노을빛 검",power:"5",coin:"+3",coinCount:3,coinEffects:{1:"[적중시] 화상 횟수 1 증가",2:"[적중시] 화상 횟수 1 증가",3:"[적중시] 화상 횟수 1 증가"}},{name:"낙인",power:"4",coin:"+7",coinCount:2,coinEffects:{1:"[적중시] 화상 3 부여",2:"[적중시] 화상 3 부여"}}],defense:{name:"후회",power:"15",coin:"+5",coinCount:1,coinEffects:{}}},
  "싱클레어|북부 제뱌찌 협회 3과": {skills:[{name:"딜리버리 캐리어 - 붕괴 망치",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 딜리버리 캐리어 - 싱클레어 1 얻음 - 딜리버리 캐리어 - 싱클레어 가 15 미만이면, 딜리버리 캐리어 - 싱클레어 1 추가로 얻음",2:"[적중시] 파열 횟수 2 증가 - 딜리버리 캐리어 - 싱클레어 가 15 이상이면, 파열 횟수 1 추가 증가"}},{name:"딜리버리 캐리어 - 돌파 가젯",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 딜리버리 캐리어 - 싱클레어 1 얻음 - 자신의 딜리버리 캐리어 - 싱클레어 가 15 미만이면, 딜리버리 캐리어 - 싱클레어 2 추가로 얻음",2:"[적중시] 파열 2 부여 - 딜리버리 캐리어 - 싱클레어 가 15 이상이면. 파열 횟수 2 증가",3:"[적중시] 파열 3 부여 - 딜리버리 캐리어 - 싱클레어 가 15 이상이면. 파열 횟수 2 증가"}},{name:"플루드니차... 부탁해요!",power:"5",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 파열 횟수 1 증가 - 딜리버리 캐리어 - 싱클레어 10 당 파열 횟수 1 추가 증가 (최대 3)",2:"[적중시] 파열 3 부여 - 딜리버리 캐리어 - 싱클레어 8 당 파열 1 추가 부여 (최대 4)",3:"[적중시] 이 스킬의 마지막 코인 위력이 증가하는 효과가 발동하지 않았다면, 다음 턴에 신속 2 얻음"}}],defense:{name:"배달 지원 및 상황 통제 절차",power:"9",coin:"+7",coinCount:1,coinEffects:{}}},
  "싱클레어|중지 작은 아우": {skills:[{name:"네 놈이냐!",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 출혈 1 부여",2:"[적중시] 출혈 1 부여"}},{name:"배로 먹여주마",power:"4",coin:"+4",coinCount:3,coinEffects:{2:"[적중시] 출혈 2 부여",3:"이 스킬을 포함한 공명이 3 이상이면, 피해량 +20%"}},{name:"똑똑히 새겨라",power:"5",coin:"+4",coinCount:3,coinEffects:{2:"[적중시] 출혈 4 부여",3:"이 스킬을 포함한 공명당 피해량 +5% (최대 30%) 앙갚음 장부 [싱클레어] 10당 피해량 +15% (최대 45%)"}}],defense:{name:"동부에서 몸 좀 풀어보죠",power:"5",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 출혈 1 부여",2:"[적중시] 출혈 1 부여"}}},
  "싱클레어|동부 엄지 솔다토 II": {skills:[{name:"예에 따라서.",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 진동 횟수 1 증가",2:"[적중시] 진동 1 부여"}},{name:"엄지에 존중을.",power:"4",coin:"+6",coinCount:2,coinEffects:{1:"[적중시] 진동 2 부여 [적중시] 진동 횟수 1 증가",2:"[적중시] 대상에게 진동 - 작열 이 10 이상이면, 화상 횟수 2 증가 [적중시] 대상의 진동 이 6 이상이면, 진동 폭발 . 대상의 진동 횟수 1 감소"}},{name:"추력 집중",power:"5",coin:"+4",coinCount:3,coinEffects:{1:"작열 추진탄 1 소모 이 코인 효과로 작열 추진탄 을 소모하였다면, 피해량 +25% [적중시] 진동 횟수 1 증가 [적중시] 화상 횟수 3 증가 [적중시] 진동 - 작열 로 진폭 변환",2:"작열 추진탄 1 소모 이 코인 효과로 작열 추진탄 을 소모하였다면, 피해량 +25% [적중시] 진동 횟수 1 증가 [적중시] 화상 3 부여",3:"작열 추진탄 1 소모 이 코인 효과로 작열 추진탄 을 소모하였다면, 피해량 +25% [적중시] 진동 횟수 1 증가 [적중시] 화상 4 부여 [적중시] 진동 폭발 . 대상의 진동 횟수 1 감소 [적중시] 작열 추진탄 을 소모했으면, 진동 폭발 . 대상의 진동 횟수 1 감소 [적중시] 이 스킬에서 작열 추진탄 을 3개 소모했으면, 진동 폭발 . 대상의 진동 횟수 1 감소"}}],defense:{name:"철의 방어",power:"9",coin:"+6",coinCount:1,coinEffects:{}}},
  "싱클레어|흑수 - 유": {skills:[{name:"타오르는 피 냄새에…",power:"2",coin:"+3",coinCount:3,coinEffects:{1:"[적중시] 파열 1 부여 [앞면 적중시] 화상 1 부여",2:"[적중시] 화상 횟수 1 증가 [앞면 적중시] 파열 횟수 1 증가"}},{name:"취해서 날뛰어 보도록 하죠.",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 파열 1 부여 [앞면 적중시] 파열 횟수 1 증가",2:"[적중시] 화상 1 부여 [앞면 적중시] 파열 횟수 1 증가",3:"[앞면 적중시] 자신에게 혈염 [血炎] 이 있거나, 자신의 현재 체력이 최대 체력의 50% 미만이면 이 코인 재사용 (스킬 당 1회) [앞면 적중시] 이 코인 최종 피해량의 10%만큼 추가 분노 피해"}},{name:"혈염난무 [血炎亂舞]",power:"4",coin:"+3",coinCount:4,coinEffects:{2:"[적중시] 화상 횟수 1 증가 [적중시] 파열 횟수 1 증가",3:"[적중시] 화상 1 부여 [적중시] 파열 1 부여 [앞면 적중시] 이 코인 최종 피해량의 10%만큼 추가 탐식 피해",4:"[적중시] 화상 2 부여 [적중시] 파열 2 부여 [앞면 적중시] 이 코인 최종 피해량의 20%만큼 모든 대상에게 추가 탐식 피해"}}],defense:{name:"계궁즉살 [鷄窮則殺]",power:"5",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 파열 횟수 1 증가",2:"[적중시] 화상 1 부여"}}},
  "싱클레어|거미집 소지 제자": {skills:[{name:"연격[連擊]",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 호흡 2 얻음",2:"[적중시] 호흡 2 얻음 [적중시] 출혈 횟수 2 증가 [적중시] 다음 턴에 신속 1 얻음 (턴당 1회) [크리티컬 앞면 적중 시] 다음 턴에 신속 1 얻음 (턴당 1회)"}},{name:"무명참[無名斬]",power:"6",coin:"+5",coinCount:2,coinEffects:{1:"[적중시] 호흡 3 얻음 [적중시] 자신의 호흡 횟수 1 증가",2:"크리티컬 피해량 +10% [적중시] 자신의 호흡 횟수 1 증가 [적중시] 출혈 2 부여 [크리티컬 앞면 적중 시] 이 코인 재사용 (스킬당 1회) [재사용 앞면 적중 시] 자신의 월하청도 가 10 이상이면, 이 코인 재사용 (스킬당 1회)"}},{name:"낙성일살[落星一殺]",power:"8",coin:"+14",coinCount:1,coinEffects:{1:"크리티컬 피해량 +70% [적중시] 출혈 5 부여 [크리티컬 앞면 적중 시] 이 코인 최종 피해량의 25%만큼 참격 피해"}}],defense:{name:"수[守]",power:"3",coin:"+10",coinCount:0,coinEffects:{1:"파괴 불가 코인"}}},
  "오티스|LCB 수감자": {skills:[{name:"칼날 빼기",power:"3",coin:"+2",coinCount:3,coinEffects:{2:"[적중시] 파열 2 부여",3:"[앞면 적중시] 파열 1 부여"}},{name:"배후 베기",power:"5",coin:"+4",coinCount:2,coinEffects:{1:"대상보다 속도가 빠르면 피해량 +20%",2:"대상보다 속도가 빠르면 피해량 +20%"}},{name:"뚫어내기",power:"7",coin:"+14",coinCount:1,coinEffects:{1:"[적중시] 파열 횟수 1 증가"}}],defense:{name:"회피",power:"2",coin:"+10",coinCount:1,coinEffects:{}}},
  "오티스|검계 살수": {skills:[{name:"발검",power:"4",coin:"+6",coinCount:1,coinEffects:{1:"[적중시] 호흡 4 얻음"}},{name:"자법",power:"5",coin:"+4",coinCount:2,coinEffects:{2:"[앞면 적중시] 다음 턴에 참격 피해량 증가 2 얻음"}},{name:"요격세",power:"6",coin:"+4",coinCount:2,coinEffects:{2:"[크리티컬 적중 시] 피해량의 20%만큼 첫 번째 흐트러짐 구간을 손상시킴"}}],defense:{name:"회피",power:"3",coin:"+10",coinCount:1,coinEffects:{}}},
  "오티스|G사 부장": {skills:[{name:"지휘",power:"4",coin:"+6",coinCount:1,coinEffects:{1:"[적중시] 속도가 가장 낮은 아군에게 보호 2 부여"}},{name:"공격 명령",power:"6",coin:"+10",coinCount:1,coinEffects:{1:"[적중시] 속도가 가장 낮은 아군에게 피해량 증가 2 부여"}},{name:"기합",power:"6",coin:"+16",coinCount:1,coinEffects:{1:"[적중시] 침잠 5 부여 [적중시] 공격 위력 감소 2 부여 [앞면 적중시] 침잠 4 부여"}}],defense:{name:"가드",power:"9",coin:"+4",coinCount:1,coinEffects:{}}},
  "오티스|남부 섕크 협회 4과": {skills:[{name:"마르쉬",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 자신의 호흡 횟수 1 증가",2:"[적중시] 자신의 호흡 횟수 1 증가"}},{name:"퍼니시옹",power:"4",coin:"+5",coinCount:2,coinEffects:{1:"[적중시] 호흡 2 얻음",2:"[적중시] 다음 턴에 속박 2 부여"}},{name:"발레스트라 팡트",power:"8",coin:"+14",coinCount:1,coinEffects:{1:"[적중시] 결투 선포 - 오티스 부여 [적중시] 속도가 가장 느린 아군 2명에게 다음 턴에 신속 2 부여 [크리티컬 적중 시] 크리티컬 피해량 +70%"}}],defense:{name:"르트레트",power:"5",coin:"+10",coinCount:1,coinEffects:{}}},
  "오티스|약지 점묘파 스튜던트": {skills:[{name:"점찍기",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 출혈 1 부여",2:"[적중시] 출혈 1 부여"}},{name:"혈묘화",power:"5",coin:"+4",coinCount:2,coinEffects:{2:"[적중시] 40% 확률로 코인 재사용. 대상이 보유한 부정적인 효과 1개당 재사용 확률 +20% (스킬당 최대 2회 재사용 가능) [적중시] 출혈 횟수 1 증가 자신의 코인 효과로 코인 재사용 시 증가시키는 출혈 횟수 +1"}},{name:"작품 점검",power:"4",coin:"+6",coinCount:2,coinEffects:{2:"[적중시] 출혈 3 부여 [적중시] 화상 , 출혈 , 진동 , 파열 , 침잠 중 무작위 1개 효과 3 부여 [공격 종료시] 대상이 흐트러짐 상태가 되거나 사망했으면, 자신을 제외하고 정신력이 가장 높은 아군 1명에게 다음 턴에 관통 피해량 증가 1 부여. 대상이 약지 소속 조직원이면 관통 위력 증가 1 추가 부여"}}],defense:{name:"가드",power:"7",coin:"+6",coinCount:1,coinEffects:{}}},
  "오티스|남부 세븐 협회 6과 부장": {skills:[{name:"예측 분석",power:"6",coin:"+4",coinCount:1,coinEffects:{1:"[적중시] 다음 턴에 마비 1 부여 [적중시] 파열 1 부여"}},{name:"현장 지휘",power:"5",coin:"+5",coinCount:2,coinEffects:{1:"[적중시] 파열 횟수 1 증가 다음 턴에 방어 레벨 감소 1 부여",2:"[적중시] 파열 횟수 2 증가 다음 턴에 방어 레벨 감소 2 부여"}},{name:"빈틈 간파",power:"6",coin:"+2",coinCount:3,coinEffects:{1:"[적중시] 다음 턴에 공격 레벨 감소 2 부여",3:"[적중시] 피해량의 15%만큼 참격 추가 피해 [적중시] 다음 턴에 약점 분석 부여"}}],defense:{name:"앞장 서겠다",power:"13",coin:"+7",coinCount:1,coinEffects:{}}},
  "오티스|어금니 사무소 해결사": {skills:[{name:"잠깐!",power:"4",coin:"+7",coinCount:1,coinEffects:{1:"[적중시] 자신의 진동 횟수만큼 흐트러짐 회복 (최대 10)"}},{name:"가르기",power:"3",coin:"+5",coinCount:3,coinEffects:{1:"[적중시] 진동 2 부여",2:"[적중시] 진동 2 부여",3:"[적중시] 자신의 진동 횟수가 6 이상일 때, 진동 폭발 . 대상의 진동 횟수 1 감소"}},{name:"과감한 판단",power:"4",coin:"+3",coinCount:4,coinEffects:{1:"[적중시] 진동 4 부여 스킬 사용 시 진동 횟수를 소모했으면, 진동 횟수 3 증가",2:"[적중시] 진동 폭발 . 대상의 진동 횟수 1 감소",3:"[적중시] 진동 폭발 . 대상의 진동 횟수 1 감소",4:"[적중시] 진동 폭발 . 대상의 진동 횟수 1 감소"}}],defense:{name:"숙취 해소",power:"12",coin:"+5",coinCount:1,coinEffects:{}}},
  "오티스|로보토미 E.G.O::마탄": {skills:[{name:"착화",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 다음 턴에 흑염 1 부여",2:"[적중시] 대상의 흑염 만큼 화상 부여"}},{name:"마탄 기폭",power:"4",coin:"+6",coinCount:2,coinEffects:{1:"[적중시] 마탄 이 4 미만이면 마탄 이 1 증가하고, 다음 턴에 마탄 만큼 흑염 부여",2:"[적중시] 대상의 흑염 만큼 화상 부여"}},{name:"마탄 사격",power:"15",coin:"+4",coinCount:1,coinEffects:{1:"[적중시] 다음 턴에 마탄 만큼 흑염 부여"}}],defense:{name:"마탄의 대가",power:"10",coin:"+4",coinCount:1,coinEffects:{}}},
  "오티스|워더링하이츠 치프 버틀러": {skills:[{name:"노크",power:"3",coin:"+4",coinCount:2,coinEffects:{2:"[적중시] 침잠 2 부여"}},{name:"먼지 털이",power:"4",coin:"+4",coinCount:3,coinEffects:{2:"[적중시] 침잠 3 부여",3:"[적중시] 침잠 2 부여"}},{name:"마님의 뜻대로",power:"4",coin:"+3",coinCount:4,coinEffects:{4:"[적중시] 다음 턴에 저택의 메아리 3 부여 [적중시] 대상에게 저택의 메아리 가 있으면 대상의 침잠 위력만큼 우울 속성 피해를 줌 (최대 30)"}}],defense:{name:"무례한 것…!",power:"4",coin:"+10",coinCount:1,coinEffects:{}}},
  "오티스|W사 3등급 정리 요원 팀장": {skills:[{name:"파동",power:"3",coin:"+4",coinCount:2,coinEffects:{2:"[적중시] 자신의 충전 횟수 2 증가"}},{name:"충전 도약",power:"5",coin:"+6",coinCount:2,coinEffects:{1:"[적중시] 자신의 충전 횟수 2 증가",2:"[적중시] 자신의 충전 횟수 2 증가 [적중시] 다음 턴에 속박 1 부여 [적중시] 이 스킬 사용 시 충전 횟수를 소모하였다면, 다음 턴에 속박 2 부여"}},{name:"차원 절단",power:"4",coin:"+3",coinCount:4,coinEffects:{1:"[적중시] 파열 1 부여",2:"[적중시] 파열 1 부여",3:"[적중시] 파열 1 부여",4:"[적중시] 이 스킬 사용 시 충전 횟수를 15 소모했다면, 파열 3 부여 [적중시] (5 - 충전 )만큼 자신의 충전 횟수 증가 (최소 0)"}}],defense:{name:"플라즈마 전개",power:"10",coin:"+6",coinCount:1,coinEffects:{}}},
  "오티스|라만차랜드 이발사": {skills:[{name:"재봉",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 출혈 1 부여 [적중시] 대상에게 재봉 대상 이 있으면, 출혈 횟수 1 증가",2:"[적중시] 출혈 1 부여 [적중시] 대상에게 재봉 대상 이 있으면, 출혈 횟수 1 증가"}},{name:"컷 오프",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 출혈 1 부여 [적중시] 대상에게 재봉 대상 이 있으면, 출혈 2 부여",2:"[적중시] 출혈 1 부여 [적중시] 대상에게 재봉 대상 이 있으면, 출혈 2 부여",3:"[적중시] 대상에게 다음 턴에 재봉 대상 1 부여"}},{name:"새 드레스를 맞춰주지!",power:"3",coin:"+3",coinCount:4,coinEffects:{1:"[적중시] 출혈 2 부여",2:"[적중시] 출혈 2 부여",3:"[적중시] 출혈 2 부여",4:"[적중시] 핏빛 가위날 10 이상이면, 피해량 +( 핏빛 가위날 × 3)% (최대 57%) - 핏빛 가위날 20 이상이면, 대신 피해량 +( 핏빛 가위날 × 4)% (최대 120%)"}}],defense:{name:"예의에 어긋나는군!",power:"7",coin:"+6",coinCount:1,coinEffects:{1:"[적중시] 출혈 횟수 1 부여"}}},
  "오티스|흑수 - 묘": {skills:[{name:"순보",power:"4",coin:"+3",coinCount:2,coinEffects:{1:"[적중시] 파열 1 부여",2:"[적중시] 파열 1 부여 [적중시] 자신의 속도가 10 이상이면. 코인 1회 재사용 (스킬당 1회)"}},{name:"척살",power:"4",coin:"+6",coinCount:2,coinEffects:{1:"[적중시] 파열 횟수 1 증가 [적중시] 다음 턴에 신속 1 얻음 (턴 당 2회)",2:"자신의 속도가 10 이상이면, 피해량 +30% [적중시] 파열 횟수 1 증가"}},{name:"각주살검",power:"5",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 파열 1 부여 [적중시] 주살【신속】 부여",2:"[적중시] 파열 1 부여",3:"[적중시] 파열 1 부여 [적중시] 자신의 속도가 10 이상이면, 코인 1회 재사용 (스킬당 1회) [재사용 적중시] 주살【신속】 부여"}}],defense:{name:"부분 흑수화",power:"5",coin:"+7",coinCount:1,coinEffects:{1:"[적중시] 파열 횟수 1 증가"}}},
  "오티스|T사 3등급 강력징수직 직원": {skills:[{name:"징수 준비",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 진동 횟수 1 증가",2:"[적중시] 진동 횟수 1 증가"}},{name:"T사식 공진 모듈",power:"3",coin:"+5",coinCount:3,coinEffects:{1:"[적중시] 진동 2 부여",2:"[적중시] 진동 2 부여 [적중시] 대상의 진동 이 10 이상이면, 진동 을 4 소모하여 대상과 자신의 진동 횟수 2 증가",3:"대상이 진폭 변환 이나 진폭 얽힘 상태면, 이 코인 피해량 +60% [적중시] 대상이 진폭 변환 이나 진폭 얽힘 상태가 아니면, 자신의 진동 횟수를 3 소모하여 진동 - 사슬 로 진폭 변환 [적중시] 대상의 진동 횟수가 3 이상이면, 진동 폭발 1회. 대상의 진동 횟수 1 감소"}},{name:"T3형 징수 철퇴 최대 전개",power:"5",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 진동 횟수 2 증가 [적중시] 대상의 진동 을 최대 3 소모 - (소모한 진동 × 2)만큼 자신의 진동 횟수 증가 - 다음 턴에 (소모한 진동 - 1)만큼 속박 부여",2:"[적중시] 대상의 진동 횟수가 3 이상이면, 진동 폭발 . 대상의 진동 횟수 1 감소",3:"[코인 시작 시] 자신의 진동 횟수를 모두 소모 소모한 진동 횟수 4당 코인 위력 +1 (최대 5) 소모한 진동 횟수 1당 피해량 +2% (최대 100%) [적중시] 진동 폭발 . 대상의 진동 횟수 1 감소 [적중시] 자신이 시간 대여 를 보유한 상태면, 진동 폭발 [적중시] 자신이 시간 대여 를 보유한 상태면, 시간 유예 2 부여"}}],defense:{name:"시간 대여 - 공진",power:"3",coin:"+10",coinCount:0,coinEffects:{1:"파괴 불가 코인"}}},
  "오티스|LCA 우제트 선봉 3팀 팀장": {skills:[{name:"코페쉬 검술",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 침잠 횟수 1 증가 [적중시] 진동 횟수 1 증가",2:"[적중시] 다음 턴에 보호 1 얻음 (턴당 1회)"}},{name:"신기루 절삭",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 침잠 횟수 2 증가",2:"[적중시] 진동 횟수 1 증가",3:"[적중시] 침잠 2 부여 [적중시] 진동 2 부여 [적중시] 다음 턴에 보호 1 얻음 (턴당 1회)"}},{name:"선봉에서 끝낸다",power:"6",coin:"+4",coinCount:3,coinEffects:{1:"LCA 균열탄 2 소모 피해량 +(소모한 LCA 균열탄 × 30)% [적중시] 침잠 횟수 2 증가 [적중시] 진동 횟수 2 증가",2:"[적중시] 침잠 2 부여 [적중시] 다음 턴에 푸른 모래 3 부여 [적중시] 우울 내성 약화 1 부여 (턴당 1회)",3:"LCA 균열탄 2 소모 피해량 +(소모한 LCA 균열탄 × 30)% [적중시] 침잠 2 부여 [적중시] 진동 폭발 . 진동 횟수 1 감소 [적중시] 정신력이 있는 대상이면, 진동 폭발 . 진동 횟수 1 감소 대상의 정신력이 0 미만이면, 우울 취약 1 부여 (턴당 1회)"}}],defense:{name:"가다듬기",power:"15",coin:"+5",coinCount:1,coinEffects:{}}},
  "오티스|거미집 중지 아비": {skills:[{name:"짓밟기",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 출혈 횟수 2 증가 [적중시] 흐트러짐 손상 5",2:"[적중시] 출혈 1 부여 [적중시] 자신에게 중지 - 원한 문신 [큰 누님] 이 있으면, 다음 턴에 속박 1 부여 (턴당 1회)"}},{name:"고작 이거에 부서지지 말라고!",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 출혈 1 부여 [적중시] 다음 턴에 속박 1 부여 (턴당 1회)",2:"[적중시] 출혈 1 부여 [적중시] 다음 턴에 마비 1 부여 (턴당 1회)",3:"[적중시] 출혈 1 부여 [적중시] 자신에게 중지 - 원한 문신 [ 큰 누님 ] 이 있으면, 이 코인 최종 피해량의 (대상의 화상 과 출혈 의 합)%만큼 타격 피해 (최대 20%)"}},{name:"원한 스탬핑",power:"4",coin:"+3",coinCount:3,coinEffects:{1:"[적중시] 출혈 3 부여",2:"[적중시] 출혈 횟수 1 증가",3:"[적중시] 출혈 2 부여",4:"파괴 불가 코인 [적중시] 출혈 횟수 1 증가"}}],defense:{name:"규칙 위반",power:"4",coin:"+6",coinCount:2,coinEffects:{1:"출혈 2 부여",2:"흐트러짐 10 회복"}}},
  "그레고르|LCB 수감자": {skills:[{name:"베기",power:"4",coin:"+7",coinCount:1,coinEffects:{1:"[앞면 적중시] 파열 4 부여"}},{name:"후비기",power:"5",coin:"+10",coinCount:1,coinEffects:{1:"[적중시] 파열 횟수 1 증가 [앞면 적중시] 관통 취약 1 부여"}},{name:"썰어내기",power:"6",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 대상에게 파열 이 있을 때 피해량 +10%",2:"[적중시] 대상에게 파열 이 있을 때 피해량 +10% [앞면 적중시] 피해량의 30%만큼 체력 회복"}}],defense:{name:"가드",power:"8",coin:"+3",coinCount:1,coinEffects:{}}},
  "그레고르|남부 리우 협회 6과": {skills:[{name:"일점 찌르기",power:"4",coin:"+2",coinCount:2,coinEffects:{1:"[적중시] 화상 1 부여 [앞면 적중시] 화상 1 부여",2:"[적중시] 화상 1 부여 [앞면 적중시] 화상 1 부여"}},{name:"몰아치기",power:"5",coin:"+2",coinCount:3,coinEffects:{1:"[적중시] 화상 1 부여",2:"[적중시] 화상 1 부여",3:"[적중시] 화상 3 부여 [적중시] 대상의 화상 이 6 이상일 때, 다음 턴에 공격 위력 증가 1 얻음"}},{name:"연무 장타",power:"4",coin:"+2",coinCount:4,coinEffects:{1:"[적중시] 화상 1 부여",2:"[적중시] 화상 1 부여",3:"[적중시] 화상 1 부여",4:"[적중시] 화상 3 부여"}}],defense:{name:"가드",power:"8",coin:"+5",coinCount:1,coinEffects:{}}},
  "그레고르|료.고.파. 조수": {skills:[{name:"신선도 유지",power:"4",coin:"+2",coinCount:2,coinEffects:{1:"[적중시] 마비 1 부여. 대상에게 출혈 이 있으면 다음 턴에 마비 1 부여",2:"[적중시] 출혈 1 부여"}},{name:"싱싱한 재료인가?",power:"6",coin:"+8",coinCount:1,coinEffects:{1:"[적중시] 출혈 횟수 2 증가, 다음 턴에 속박 2 부여"}},{name:"재료 해체",power:"5",coin:"+1",coinCount:4,coinEffects:{1:"[적중시] 출혈 1 부여",2:"[적중시] 마비 1 부여",3:"[적중시] 마비 1 부여",4:"[적중시] 대상의 출혈 에 비례하여 체력 회복 (최대 20%)"}}],defense:{name:"가드",power:"8",coin:"+8",coinCount:1,coinEffects:{}}},
  "그레고르|장미스패너 공방 해결사": {skills:[{name:"시동 걸기",power:"3",coin:"+4",coinCount:2,coinEffects:{2:"[적중시] 파열 2 부여 [적중시] 대상의 진동 횟수가 5 이상이면, 파열 3 부여"}},{name:"사슬 윤활",power:"4",coin:"+12",coinCount:1,coinEffects:{1:"[적중시] 진동 횟수 2 증가 [적중시] 파열 횟수 2 증가"}},{name:"갈아버리자고",power:"4",coin:"+3",coinCount:3,coinEffects:{1:"[적중시] 진동 폭발 . 진동 폭발 시 진동 횟수가 2 감소하고, 충전 횟수를 최대 4 소모하여 소모한 충전 횟수만큼 파열 횟수 증가",2:"[적중시] 파열 1 부여 [적중시] 대상이 흐트러짐 상태라면 피해량 +10% [적중시] 대상의 진동 횟수가 5 이상이면, 파열 3 부여",3:"[적중시] 파열 1 부여 [적중시] 대상이 흐트러짐 상태라면 피해량 +10% [적중시] 대상의 진동 횟수가 5 이상이면, 파열 3 부여"}}],defense:{name:"가드",power:"8",coin:"+8",coinCount:1,coinEffects:{}}},
  "그레고르|흑운회 부조장": {skills:[{name:"구름베기",power:"5",coin:"+5",coinCount:1,coinEffects:{1:"[적중시] 출혈 횟수 1 증가"}},{name:"먹구름",power:"5",coin:"+5",coinCount:2,coinEffects:{1:"[앞면 적중시] 출혈 2 부여",2:"[적중시] 공격 레벨 감소 1 부여 [적중시] 대상의 출혈 이 7 이상이면, 다음 턴에 공격 위력 감소 1 부여"}},{name:"먹구름 깨어가르기",power:"4",coin:"+3",coinCount:3,coinEffects:{1:"[적중시] 공격 레벨 감소 1 부여 [적중시] 대상의 출혈 이 7 이상이면, 다음 턴에 공격 레벨 감소 1 부여",2:"[적중시] 공격 레벨 감소 1 부여 [적중시] 대상의 출혈 이 7 이상이면, 다음 턴에 공격 레벨 감소 1 부여",3:"[앞면 적중시] 출혈 3 부여 [적중시] 대상의 출혈 이 7 이상이면, 다음 턴에 더하기 코인 약화 1 부여"}}],defense:{name:"가드",power:"8",coin:"+8",coinCount:1,coinEffects:{}}},
  "그레고르|G사 일등대리": {skills:[{name:"베어내기",power:"4",coin:"+3",coinCount:2,coinEffects:{1:"[적중시] 피해량의 50%만큼 체력 회복"}},{name:"사지절단",power:"6",coin:"+10",coinCount:1,coinEffects:{1:"[적중시] 파열 5 부여 [적중시] 피해량의 50%만큼 체력 회복"}},{name:"내장 파기",power:"4",coin:"+2",coinCount:4,coinEffects:{1:"[적중시] 대상에게 파열 이 있을 때 피해량의 30%만큼 추가 피해",2:"[적중시] 대상에게 파열 이 있을 때 피해량의 30%만큼 추가 피해",3:"[적중시] 대상에게 파열 이 있을 때 피해량의 30%만큼 추가 피해",4:"[적중시] 피해량의 100%만큼 체력 회복"}}],defense:{name:"가드",power:"10",coin:"+4",coinCount:1,coinEffects:{}}},
  "그레고르|남부 츠바이 협회 4과": {skills:[{name:"맞서기",power:"4",coin:"+3",coinCount:2,coinEffects:{2:"[적중시] 다음 턴에 신속 2를 얻음"}},{name:"유연한 제압",power:"3",coin:"+3",coinCount:4,coinEffects:{1:"[적중시] 다음 턴에 방어 레벨 증가 1를 얻음",2:"[적중시] 다음 턴에 방어 레벨 증가 1를 얻음",4:"자신의 방어 레벨 증가 가 6 이상이면, 피해량 +40%"}},{name:"수호자",power:"5",coin:"+3",coinCount:3,coinEffects:{3:"[적중시] 다음 턴에 모든 아군에게 방어 레벨 증가 3 부여"}}],defense:{name:"최선의 방어",power:"15",coin:"+5",coinCount:1,coinEffects:{}}},
  "그레고르|쌍갈고리 해적단 부선장": {skills:[{name:"협상 시작",power:"4",coin:"+3",coinCount:2,coinEffects:{1:"[적중시] 자신의 호흡 횟수 1 증가 [크리티컬 적중 시] 출혈 2 부여",2:"[크리티컬 적중 시] 출혈 2 부여"}},{name:"일방적 비즈니스",power:"4",coin:"+6",coinCount:2,coinEffects:{1:"[적중시] 호흡 4 얻음 [크리티컬 적중 시] 출혈 2 부여",2:"[적중시] 출혈 3 부여 [크리티컬 적중 시] 출혈 2 부여 크리티컬 피해량 +50%"}},{name:"예정된 결렬",power:"5",coin:"+6",coinCount:2,coinEffects:{1:"[크리티컬 적중 시] 출혈 횟수 2 증가",2:"탄환 1 소모 크리티컬 피해량 +100% [적 처치 시] 다음 턴에 더하기 코인 강화 1을 얻음"}}],defense:{name:"한 숨 돌릴까",power:"4",coin:"+10",coinCount:1,coinEffects:{}}},
  "그레고르|에드가 가문 승계자": {skills:[{name:"세이버 슬래시",power:"5",coin:"+6",coinCount:1,coinEffects:{1:"[적중시] 침잠 3 부여"}},{name:"르미즈",power:"4",coin:"+6",coinCount:2,coinEffects:{1:"[적중시] 대상의 침잠 이 5 이상이면 다음 턴에 신속 1 얻음",2:"[적중시] 침잠 횟수 3 증가"}},{name:"악몽 사냥",power:"4",coin:"+3",coinCount:4,coinEffects:{1:"[적중시] 침잠 1 부여",2:"[적중시] 침잠 1 부여",3:"[적중시] 침잠 1 부여",4:"[적중시] 대상의 침잠 을 10 흡수하여 다음 턴에 더하기 코인 강화 1, 피해량 증가 3 얻음. 50% 확률로 침잠 을 흡수하지 않고 위 효과 발동."}}],defense:{name:"네놈도 울고싶나?",power:"4",coin:"+10",coinCount:1,coinEffects:{}}},
  "그레고르|라만차랜드 신부": {skills:[{name:"가족을 위한 헌신",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 출혈 2 부여",2:"[적중시] 파열 1 부여 [적중시] 피로 물든 손 3 얻음"}},{name:"죄어드는 죄악감",power:"4",coin:"+6",coinCount:2,coinEffects:{1:"[적중시] 출혈 횟수 2 증가",2:"[적중시] 파열 1 부여 [적중시] 피로 물든 손 3 얻음"}},{name:"씻을 수 없는 죄",power:"5",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 피로 물든 손 3 얻음",2:"[적중시] 출혈 횟수 2 증가 [적중시] 파열 횟수 2 증가",3:"[적중시] 출혈 2 부여 [적중시] 파열 2 부여"}}],defense:{name:"빛바랜 인내",power:"15",coin:"+5",coinCount:1,coinEffects:{}}},
  "그레고르|불주먹 사무소 생존자": {skills:[{name:"화염방사",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 화상 2 부여",2:"[적중시] 12구산 연료 를 15 소모하여, 화상 횟수 2 증가"}},{name:"더러운 피 한방울조차 남지 않게 전부 태워버리겠어",power:"4",coin:"+6",coinCount:2,coinEffects:{1:"[적중시] 화상 2 부여 [적중시] 12구산 연료 를 10 소모하여, 화상 위력이 가장 낮은 2명에게 화상 2 부여",2:"[적중시] 화상 횟수 2 증가 [적중시] 12구산 연료 를 10 소모하여, 화상 횟수가 가장 낮은 2명에게 화상 횟수 1 증가"}},{name:"불주먹",power:"5",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 12구산 연료 를 소모했으면, 화상 2 부여, 화상 횟수 1 증가",2:"[적중시] 12구산 연료 를 소모했으면, 화상 2 부여, 화상 횟수 1 증가",3:"[적중시] 이 스킬에서 소모한 12구산 연료 당 피해량 +2% (최대 50%) - 과열 연료 상태면, 소모한 12구산 연료 당 피해량 +4% (최대 100%)"}}],defense:{name:"누님의 몫이 아직 남았다",power:"9",coin:"+7",coinCount:1,coinEffects:{1:"[적중시] 화상 1 부여"}}},
  "그레고르|흑수 - 사": {skills:[{name:"뱀 송곳니",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 파열 1 부여",2:"[적중시] 파열 1 부여 [크리티컬 적중 시] 자신에게 사완 이 있으면, 파열 횟수 1 증가"}},{name:"시야 밖에서 도려낸다",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 파열 1 부여",2:"[적중시] 파열 1 부여",3:"[적중시] 파열 2 부여 [적중시] 호흡 이 30 이상이면, 호흡 10 소모하여 코인 1회 재사용 (최대 1회) [적중시] 주살【독】 부여 [크리티컬 적중 시] 사완 1 얻음"}},{name:"절사완철",power:"8",coin:"+14",coinCount:1,coinEffects:{1:"(대상의 파열 위력 + 자신의 호흡 위력)당 피해량 +10% (최대 200%) 자신에게 사완 이 있으면, 크리티컬 피해량 +100% [적중시] 주살【독】 2 소모 [크리티컬 적중 시] 주살【독】 3 소모 [크리티컬 적중 시] 파열 횟수 2 증가 [적중시] 주살【독】 부여"}}],defense:{name:"반축",power:"3",coin:"+10",coinCount:0,coinEffects:{1:"[파괴 불가 코인]"}}},
  "그레고르|밤의 송곳 카피타노": {skills:[{name:"틈새 찌르기",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 진동 2 부여 [적중시] 출혈 2 부여",2:"[적중시] 상처 1 부여"}},{name:"스틸레토 도피오",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 진동 횟수 1 증가 [적중시] 출혈 횟수 1 증가",2:"[적중시] 상처 1 부여",3:"[적중시] 적(본체)의 체력이 20% 이하이거나, 대상에게 치명적인 상처 가 있으면, '메르체' 사용"}},{name:"엑시큐션",power:"4",coin:"+3",coinCount:4,coinEffects:{1:"[적중시] 출혈 3 부여",2:"[적중시] 진동 3 부여, 진동 횟수 1 증가",3:"[적중시] 상처 1 부여",4:"[적중시] 진동 - 과다출혈 로 진폭 변환 [적중시] 진동 폭발 . 대상의 진동 횟수 1 감소 [적중시] 대상이 흐트러짐 상태이거나, 적(본체)의 체력이 20% 이하이거나, 대상에게 치명적인 상처 가 있으면, '메르체' 사용"}}],defense:{name:"궁지에서",power:"3",coin:"+10",coinCount:0,coinEffects:{1:"파괴 불가 코인"}}},
  "그레고르|로보토미 E.G.O::램프": {skills:[{name:"영거리 주시",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 화상 2 부여",2:"[적중시] 침잠 3 부여"}},{name:"보이지 않는 것으로 보이는 것을 부수고",power:"3",coin:"+3",coinCount:4,coinEffects:{1:"[적중시] 침잠 횟수 3 증가 [적중시] 이 코인 최종 피해량의 30%만큼 타격 피해",2:"[적중시] 침잠 2 부여 [적중시] 이 코인 최종 피해량의 30%만큼 타격 피해",3:"[적중시] 화상 2 부여",4:"[적중시] 화상 횟수 2 증가"}},{name:"등불에 현혹된 것에는 구원을",power:"5",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 화상 횟수 1 증가 [적중시] 침잠 횟수 3 증가",2:"[적중시] 화상 3 부여 [적중시] 침잠 3 부여",3:"대상(본체)의 체력이 25% 이하거나 대상에게 현혹 이 있으면, 피해량 +60% [적중시] 대상에게 현혹 이 있으면, 이 코인 최종 피해량의 80%만큼 우울 피해"}}],defense:{name:"깃털을 태워 만든 심지",power:"3",coin:"+10",coinCount:0,coinEffects:{1:"[파괴 불가 코인]"}}},
  "그레고르|LCE E.G.O::AEDD": {skills:[{name:"전기 방류",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 자신의 충전 횟수 2 증가 [적중시] 파열 1 부여",2:"[적중시] 자신의 충전 횟수 2 증가 [적중시] 파열 1 부여"}},{name:"직류 인버팅",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 자신의 충전 횟수 5 증가 [적중시] 파열 횟수 2 증가",2:"[적중시] ( 충전 + 2)만큼 자신의 충전 횟수 증가 (최대 5) [적중시] 파열 2 부여",3:"[적중시] 광전 2 부여 - 충전 이 3 이상이면, 대신 광전 3 부여"}},{name:"고압 전류 방전",power:"5",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 자신의 충전 횟수 1 증가",2:"[적중시] 자신의 충전 횟수 2 증가",3:"[적중시] 파열 3 부여, 파열 횟수 2 증가 [적중시] 광전 2 부여 - 충전 이 3 이상이면, 대신 광전 3 부여 [적중시] 자신의 충전 만큼 다음 턴에 전하침 부여 (최대 5) - 충전 이 5 이상이면, 대신 이번 턴과 다음 턴에 전하침 5 부여"}}],defense:{name:"이 E.G.O 장비의 방어적인 능력은 독특할 정도로 우수한 편이지",power:"5",coin:"+10",coinCount:1,coinEffects:{}}},
  "그레고르|새벽 사무소 대표": {skills:[{name:"여명의 섬광",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 화상 1 부여 [적중시] 진동 횟수 2 증가",2:"[적중시] 화상 1 부여"}},{name:"노을빛 검",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 화상 2 부여",2:"[적중시] 화상 1 부여 [적중시] 진동 1 부여",3:"[적중시] 화상 횟수 1 증가 [적중시] 진동 횟수 1 증가"}},{name:"새벽을 가르는 검",power:"4",coin:"+3",coinCount:4,coinEffects:{1:"[적중시] 화상 3 부여",2:"[적중시] 화상 3 부여",3:"[적중시] 화상 횟수 2 증가 [적중시] 진동 횟수 2 증가",4:"[적중시] 진동 - 작열 로 진폭 변환 [적중시] 진동 폭발 . 대상의 진동 횟수 1 감소"}}],defense:{name:"수호자",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 화상 1 부여 [적중시] 진동 1 부여",2:"[적중시] 화상 횟수 1 증가"}}},
};

const IDENTITY_PASSIVE = {
  "이상|LCB 수감자": [{name:"정보전달",sin:"우울",count:"4",effect:"조작 패널에서 자신의 뒤에 있는 아군 2명에게 피해량 증가 1 부여"}],
  "이상|남부 세븐 협회 6과": [{name:"관찰",sin:"탐식",count:"4",effect:"합 진행 시 대상의 합 위력 -2"}],
  "이상|어금니 사무소 해결사": [{name:"이럴 때 일수록…",sin:"나태",count:"3",effect:"적에게 진동 폭발 시 입히는 흐트러짐 손상 4 당 방어 레벨 감소 1 부여 (턴마다 적 1명당 최대 5)"}],
  "이상|피쿼드호 일등 항해사": [{name:"일등 항해사의 작살",sin:"오만",count:"4",effect:"크리티컬 적중 시 스킬로 부여하는 출혈 위력 +2 (턴 당 최대 6회)"}],
  "이상|남부 디에치 협회 4과": [{name:"가라앉는 지식",sin:"나태",count:"3",effect:"피격 시 공격자에게 침잠 1 부여. 보호막이 있는 동안 피격 시 침잠 1 추가 부여 (최대 4회)"}],
  "이상|LCE E.G.O::초롱": [{name:"외형 또한 이전 L사의 E.G.O에 비해, 환상체와 가깝게 추출할 수 있소",sin:"탐식",count:"3",effect:"사망 시 자신을 가장 마지막으로 공격한 대상에게 파열 5, 파열 횟수 3을 부여하고, 가장 부족한 속성 E.G.O 자원 4종을 2개씩 얻음 - 공격자가 없거나 아군에게 사망한 경우, 현재 파열 횟수가 가장 적은 적에게 파열 5, 파열 횟수 3 부여 - 자신이 미끼 요정 상태인 경우, 이 효과로 부여하는 파열 위력이 2배로 적용됨"}],
  "이상|검계 살수": [{name:"냉정",sin:"오만",count:"4",effect:"합 승리 시 호흡 횟수 1 증가 호흡 횟수 5당 코인 위력 +1 (최대 3)"}],
  "이상|개화 E.G.O::동백": [{name:"만개",sin:"나태",count:"4",effect:"2명 이상을 공격할 때 피해량 +30%"}],
  "이상|W사 3등급 정리 요원": [{name:"비워낸 생각",sin:"탐식",count:"4",effect:"- 턴 종료 시 자신의 충전 횟수 5 당 다음 턴에 신속 1을 얻음. (최대 3) - 자신이 스킬로 충전 횟수를 소모할 때, 현재 체력 비율이 가장 낮은 아군 1명에게 충전 역장 3 부여"}],
  "이상|약지 점묘파 스튜던트": [{name:"과제평가",sin:"색욕",count:"4",effect:"- 적중시 대상에게 출혈 이 4 이상 있으면 정신력 2 회복 - 대상이 보유한 부정적인 효과 1개당 정신력 1 추가 회복. (최대 3) - 이 효과로 정신력 회복 시 자신의 정신력이 최대면 다음 턴에 공격 레벨 증가 2 얻음 (턴 당 패시브 최대 발동 횟수 : 4회)"},{name:"혈점묘파",sin:null,count:null,effect:"이 인격은 출혈을 부여하는 인격으로만 취급됨. 랜덤으로 화상, 출혈, 진동, 파열, 침잠을 부여하는 스킬이 이 효과로 인해서 해당 키워드를 부여하는 스킬로 취급되지 않음."}],
  "이상|로보토미 E.G.O::엄숙한 애도": [{name:"쏘아라.쏘으리로다.",sin:"우울",count:"3",effect:"공격 종료 시 자신의 스킬에 의해 대상이 사망했으면, 재장전 산나비·죽은나비 를 얻으면, 다음 턴에 신속 2 얻음 (턴 당 1회)"},{name:"죽어가는나비를본다.",sin:null,count:null,effect:"전투 시작 시 산나비·죽은나비 를 각각 10씩 보유함 산나비·죽은나비 를 소모할 때, 해당 효과의 산나비(위력)와 죽은나비(횟수)를 무작위로 소모 나비 를 부여할 때, 해당 코인에서 소모한 산나비·죽은나비 에 따라 부여 - 산나비를 소모했으면, 소모한 값만큼 산나비를 부여 - 죽은나비를 소모했으면, 소모한 값만큼 죽은나비를 부여 스킬 사용 중 산나비·죽은나비 가 부족하면, 다음 코인을 모두 취소하고 재장전 재장전 을 하거나 산나비·죽은나비 를 얻을 때, 현재 정신력에 따라 얻는 나비가 정해짐 - 정신력이 0 이상이면, 30% 확률로 산나비를, 70% 확률로 죽은나비를 얻음 - 정신력이 0 미만이면, 70% 확률로 산나비를, 30% 확률로 죽은나비를 얻음 - 확률은 각 탄환마다 개별적으로 적용됨"}],
  "이상|남부 리우 협회 3과": [{name:"내면의 열혈",sin:"분노",count:"4",effect:"턴 종료 시 현재 정신력이 가장 낮은 아군 1명의 정신력을 5 + (최대 공명 수)만큼 회복시킴. (최대 10) (자신 또는 패닉, E.G.O 침식 상태인 아군 제외) 회복 대상이 화상 위력이나 횟수를 부여하는 기본 스킬을 가지고 있으면, 정신력 5 추가 회복 분노 공명 4 이상이면, 회복 대상 1명 추가"}],
  "이상|N사 E.G.O::흉탄": [{name:"흉탄",sin:"오만",count:"6",effect:"전투 중 자신이 아군을 사망시켰다면 다음 턴 동안 흉탄 을 얻음 (자신의 E.G.O 침식 및 아군 공격 포함) 자신의 E.G.O 흉탄을 사용하여, 찢어진 추억 이 소모되면, 턴 종료 시 소모한 만큼 다음 턴에 찢어진 추억 을 얻음"},{name:"휘발된 추억",sin:null,count:null,effect:"턴 종료 시 자신의 찢어진 추억 을 전부 제거하고 다음 턴에 제거한 수치만큼 찢어진 추억 을 얻음"}],
  "이상|흑수 - 오 필두": [{name:"흑풍마각 [黑風馬脚]",sin:"탐식",count:"5",effect:"아래의 조건 만족 시 적진 주파 1 얻음 - 공격 시작 시 대상보다 속도가 2 이상 높을 때 - 자신의 스킬로 진동 폭발 효과 2회 발동시 (E.G.O 스킬 포함) - 각력【오】 를 보유 중인 상태로 합 승리 시 ※ 적진 주파 는 턴 당 최대 3까지 얻을 수 있으며, '흑풍마각월참' 스킬로는 얻을 수 없음 자신에게 보호막이 있을 때, 방어 레벨이 (보호막 수치 / 10)만큼 증가 (최대 5, 소수점 버림)"},{name:"구마지심 [拘馬之心]",sin:null,count:null,effect:"홍원 군주 홍루와 존명 발동 시, 홍원 군주 홍루가 흑수환염[黑獸丸染] 으로 아래 효과 얻음 - 기본 스킬의 마지막 코인 적중 시, 진동 폭발 1회 (턴 당 1회) 전투 인원에 가주 후보 이스마엘이 있다면, 아래 효과 적용 - 가주 후보 이스마엘이 스킬 효과로 파열 또는 파열 횟수 부여 시 호흡 위력 3 얻음 (턴 당 2회, E.G.O 스킬에는 적용되지 않음) - 턴 시작 시 가주 후보 이스마엘에게 공격 위력 증가 1 부여. 이스마엘의 호흡 위력이 10 이상이면, 공격 위력 증가 를 1 추가 부여 - '흑풍마각월참' 사용 후 가주 후보 이스마엘이 적춘 스킬로 원호 공격함 (턴 당 1회)"},{name:"필두선봉",sin:null,count:null,effect:"호령 부여 시 이번 턴과 다음 턴에 공격 레벨 증가 3 얻음 (해당 패시브로 이미 공격 레벨 증가 를 얻었으면, 다음 턴에만 얻음)"}],
  "이상|거미집 검지 아비": [{name:"모조된 삶",sin:null,count:null,conditions:[{sin:"탐식",count:"1"},{sin:"우울",count:"1"},{sin:"오만",count:"1"}],effect:"자신의 지령의 가호 1당 지령 표식 스킬 피해량 +2% (최대 16%) - 지령의 가호 가 9면, 대신 기본 스킬 피해량 +20% 기본 공격 스킬의 파괴 불가 코인 적중 시, 대행 [헤르메스] 1 얻음 - 공격 종료 시, 남은 파괴 불가 코인 수만큼 대행 [헤르메스] 얻음 - 'Furioso-Replica' 공격 종료 시, (남은 파괴 불가 코인 수/2)만큼 다음 턴에 대행 [헤르메스] 얻음 (소수점 버림) 턴 종료 시 이번 턴에 대행 [헤르메스] 가 증가하여 9가 되었을 때, 다음 턴 시작 시 조작 슬롯에 스킬 3이 없으면, 기본 스킬 하나를 스킬 3으로 변경 (가장 왼쪽 슬롯의 아래 스킬 우선)"},{name:"단말기로 전해진 지령",sin:null,count:null,effect:"턴 시작 시 - 자신의 지령의 가호 수치에 따라 지령[단말기] Ⅰ / 지령[단말기] Ⅱ / 지령[단말기] Ⅲ / 지령[단말기] Ⅳ 얻음 - 무작위 적에게 지령 대상 부여 (집중 전투면, 부위에 부여) - 조작 슬롯의 자신의 기본 공격 스킬에 지령 표식 부여 (슬롯당 1개, 최대 2개 부여) · 해금 - II 이상이면, 스킬 3에 우선 부여 (강화된 스킬 우선) - 흐트러짐, 행동 불가, 패닉, E.G.O 침식 상태면, 위의 모든 효과와 지령 수행 여부가 적용되지 않음"},{name:"신탁 대행자 / 해금",sin:null,count:null,effect:"해금 - II 미만일 때 이번 턴에 지령 을 수행했으면, 턴 종료 시 정신력 4 회복, 지령의 가호 1 얻음 (턴당 1회) - 지령 수행 시 메인 타겟에게 지령 대상 이 있으면, 대신 정신력 8 회복, 지령의 가호 3 얻음 해금 - II 일 때 이번 턴에 지령[단말기] Ⅲ 을 수행했으면, 턴 종료 시 정신력 4 회복 (턴당 1회) - 지령 수행 시 대행 [헤르메스] 가 9가 되었으면, 대신 정신력 8 회복, 지령의 가호 3 얻음 이번 턴에 지령 을 수행하지 못했으면, 턴 종료 시 카르마 5 얻음 - 해금 - Ⅲ 이면, 카르마 를 얻지 않음 - 전투 시작 시 지령 수행을 시도했으나, 전투 중 대상을 타겟할 수 없게 되었으면, 카르마 를 얻지 않음 ( 해금 단계가 2 미만일 때 적용) 턴 종료 시 지령의 가호 가 3/6/9이면, 해금 - I / 해금 - II / 해금 - Ⅲ 얻음 턴 시작 시 해금 - Ⅲ 이면, 신(心) - 운명 얻음"},{name:"검지 아비",sin:null,count:null,effect:"스테이지에 첫 등장 시, 상처를 가린 가면 얻음 - 이 효과를 보유 중일 때 이번 전투에서 처음으로 흐트러지면, 턴 종료 시 흐트러짐을 해제(강제 흐트러짐 제외)하고 상처를 가린 가면 이 이글거리는 상처 로 변경됨 검지 대행자 - 개화 E.G.O::대행 돈키호테가 자신과 함께 전장에 있으면, 돈키호테에게 인정 욕구 충족 부여"},{name:"신탁 단말기 [카두세우스]",sin:null,count:null,effect:"기본 공격 스킬의 코인마다 무기가 무작위로 정해져 특수 효과가 적용됨 - 손도끼로 갈비뼈를 찍어 내릴 때는… - 스틸레토로 허파를 꿰뚫을 때는… - 바스타드 소드로 어깨와 머리를 짓이길 때는… - 레이피어로 몸에 10개 이상의 구멍을 내야할 때는… - 망치로 뒤통수를 으깨야 할 때는… - 커다란 검으로 몸통을 갈라야 할 때는… - 랜스로 20인치의 구멍을 내야 할 때는… - 채찍으로 살점을 만 갈래 떼어내야 할 때는… - 낫으로… 누군가처럼 공간을 따라 베어내야 할 때는… 지령 표식 스킬 사용 시, 대행 [헤르메스] 1 얻음 이번 전투에서 'Furioso-Replica'를 처음 사용하였다면, 해당 턴 종료 시 상처를 가린 가면 이 이글거리는 상처 로 변경됨 턴 시작 시 이글거리는 상처 를 보유 중일 때 조작 슬롯에 'Furioso-Replica'가 있으면 지령 탐닉 얻음"}],
  "이상|LCE E.G.O::차원찢개": [{name:"속도와좌표와속도",sin:"질투",count:"4",effect:"자신의 속도가 대상보다 빠르면, (대상과의 속도 차이 × 자신의 충전 위력)%만큼 피해량이 증가 (최대 20%) 턴 종료 시, (자신의 충전 위력 / 2)만큼 다음 턴에 신속 얻음 (최대 2, 소수점 버림)"},{name:"뚫린 골목",sin:null,count:null,effect:"전투 중 누적으로 자신의 충전 횟수 10 소모할 때마다 충전 위력 1 얻음 자신을 제외한 아군의 스킬이 적에게 적중하면, 해당 공격 종료시 차원 표류 를 1 소모하여 대상에게 '차원 베기'를 발동한 후, 사색 차원 1 얻음"}],
  "파우스트|LCB 수감자": [{name:"분석",sin:"오만",count:"2",effect:"부정적인 효과가 걸려있는 대상에게 가하는 피해량 +10%"}],
  "파우스트|W사 2등급 정리 요원": [{name:"자가충전",sin:"질투",count:"4",effect:"공격 종료 시 충전 횟수 1 증가 공격 종료 시 무작위 아군 1명의 충전 횟수 1 증가"}],
  "파우스트|살아남은 로보토미 직원": [{name:"각오",sin:"색욕",count:"2",effect:"다음 턴 시작 시 호흡 횟수가 4 이상이면 신속 2를 얻음"}],
  "파우스트|남부 츠바이 협회 4과": [{name:"지역 보호",sin:"우울",count:"4",effect:"전투 시작 시 조작 패널에서 양 옆의 아군에게 방어 레벨 증가 2 부여 대상의 체력이 50% 미만이면 추가로 2 부여"}],
  "파우스트|워더링하이츠 버틀러": [{name:"버틀러식 대응",sin:"우울",count:"4",effect:"합 승리 시 대상에게 침잠 1 부여 (턴 당 3회) 대상에게 저택의 메아리 가 있다면 대신 3 부여"}],
  "파우스트|쥐는 자": [{name:"휘파람",sin:"색욕",count:"4",effect:"전투 시작 시 정신력이 가장 낮은 아군 2명의 정신력 15 회복. 대상이 N사 광신도면 광신 2 부여"}],
  "파우스트|남부 세븐 협회 4과": [{name:"차가 식기 전에…",sin:"탐식",count:"3",effect:"상대의 약점, 취약 속성(내성 1 초과)으로 공격할 때, 공격 전 대상의 파열 만큼 호흡 을 얻음 (턴 당 최대 20)"}],
  "파우스트|로보토미 E.G.O::후회": [{name:"떠밀린 후회",sin:"분노",count:"6",effect:"- 합 진행 시 대상이 보유한 부정적인 효과 3개당 대상의 합 위력 -1 (최대 2) - 자신이 생존해 있을 때, 진동 폭발 을 당하는 적이 방어 레벨 감소 2를 얻음 (턴 당 적 1명당 최대 3회) - 정신 오염: 턴 종료 시 정신력이 -25 미만일 때 다음 턴에 속박 2, 타격 위력 증가 1을 얻음"}],
  "파우스트|검계 살수": [{name:"매화 같이 터져나오는 피",sin:"오만",count:"4",effect:"크리티컬 적중 시 홍매화 1 부여. 대상의 홍매화 가 10이면, 대신 방어 레벨 감소 1 부여 (최대 6회)"}],
  "파우스트|멀티크랙 사무소 대표": [{name:"전류 해체",sin:"질투",count:"3",effect:"전투 중 누적으로 자신의 충전 횟수 10을 소모할 때마다, 충전 1 얻음 충전 이 2 이상이면, 피해량이 ( 충전 × 3)%만큼 증가 (최대 15%) - 대상의 체력이 50% 미만이면 피해량이 ( 충전 × 5)%만큼 추가로 증가 (최대 25%) 적을 처치하면 자신과 충전 횟수가 가장 적은 아군 2명이 (2 + 충전 )만큼 충전 횟수 증가 (최대 5, 충전 을 소모하거나 스스로 획득하는 스킬을 보유한 아군에게 우선으로 적용됨)"}],
  "파우스트|LCE E.G.O::홍염살": [{name:"불나방",sin:"분노",count:"3",effect:"전투 시작 시 자신의 잃은 체력이 80% 이상이고 화상 이 30 미만이면, 화상 을 30까지 얻음 (스테이지 당 1회) 턴 종료 시 자신의 화상 6 당, 다음 턴에 공격 레벨 증가 1 얻음 (최대 5) 사망 시 아래의 효과 발동 - 모든 적에게 화상 2 부여. 자신의 화상 을 나누어 부여 (1명당 최대 3) - 가장 부족한 속성의 E.G.O 자원 2종 2개씩 획득 홍염살 최대 감응 【열화침식】 스킬의 효과로 사망하였으면, 효과가 강화됨 - 모든 적에게 화상 3 부여. 자신의 화상 을 나누어 부여 (1명당 최대 5) - 가장 부족한 속성의 E.G.O 자원 2종 2개씩 획득 - 자신의 화상 이 30 이상이었으면, 대기 해제되는 인원 1명에게 공격 레벨 증가 3 부여"},{name:"내화",sin:null,count:null,effect:"화상 피해로 흐트러짐 상태가 되거나 체력이 1 미만으로 감소하지 않음"}],
  "파우스트|흑수 - 묘 필두": [{name:"흑수화 [묘] / 묘 필두",sin:"탐식",count:"5",effect:"자신의 속도가 대상보다 빠르면, 속도 차이 1 당 가하는 피해량 +2% (최대 10%) 전투 중 아군이 주살 효과를 발동시킬 때마다, 천구성도 1 얻음 (턴 당 최대 5회) - 자신이 발동시켰으면, 천구성도 추가로 1 얻음 원호 방어 효과 발동 시, 천구성도 5 얻음"},{name:"천구성",sin:null,count:null,effect:"주살【파】 의 수치가 0이 되어 소멸 시, 붕괴 표식 이 부여됨"}],
  "파우스트|동부 시 협회 3과": [{name:"시노유미",sin:"색욕",count:"3",effect:"자신의 화살 - 시 가 4면 기본 공격 스킬 효과로 호흡 위력을 얻을 때, 호흡 횟수 1 증가 (전투당 3회, 화살 - 시 가 3이 될 때 발동 횟수 초기화) 목표 조준 이 2 이상일 때 '섬궁'을 사용했으면, 다음 턴에 참격 피해량 증가 2 얻음"},{name:"저격 - 활",sin:null,count:null,effect:"자신이 저격 자세 상태면, 가장 왼쪽에 장착한 기본 공격 스킬을 '섬궁'으로 변경하여 전투 시작시 사용함 - 이 효과 발동 시 자신의 목표 조준 이 최대 수치이고, 조작 패널과 예비 스킬 슬롯에 '궁섬'이 없으면, 가장 왼쪽 슬롯에 장착한 수비 스킬을 스킬 3으로 취급하여 '섬궁'으로 변경함 사용하는 기본 공격 스킬에 따라 아래 효과 적용 (죄악 속성은 사용한 스킬 속성을 따름) - 스킬 1: 기본 위력 +1, 피해량 +11% - 스킬 2: 기본 위력 +1, 코인 위력 +1, 피해량 +22% - 스킬 3: 기본 위력 +4, 코인 위력 +4, 피해량 +44% ※ E.G.O 스킬 장착하여 전투를 시작한 경우, 저격 자세 가 해제되고 '섬궁'이 사용되지 않음."}],
  "파우스트|검지 수행자:【쪽지】": [{name:"수행자의 검",sin:"나태",count:"1",effect:"자신의 지령의 가호 1당 지령 표식 스킬 피해량 +2% (최대 16%) - 지령의 가호 가 9면, 대신 기본 스킬 피해량 +20% 지령 대상 이 있는 대상에게 기본 스킬 적중 시, 호흡 1 얻고 침잠 1 부여 (턴당 1회) - 지령의 가호 3당, 턴당 발동 가능한 횟수 +1 (최대 2) 지령의 가호 가 9면, 기본 스킬의 침잠 위력 부여값 +1. 호흡 위력 획득값 +1"},{name:"쪽지로 전해진 지령",sin:null,count:null,effect:"턴 시작 시 - 자신의 지령의 가호 수치에 따라 지령[쪽지] Ⅰ / 지령[쪽지] Ⅱ / 지령[쪽지] Ⅲ / 지령[쪽지] Ⅳ 얻음 - 무작위 적에게 지령 대상 부여 (집중 전투면, 부위에 부여) - 조작 슬롯의 자신의 기본 공격 스킬에 지령 표식 부여 (슬롯당 1개, 최대 2개 부여) · 지령의 가호 가 6 이상이면, 스킬 3에 우선 부여 - 흐트러짐, 행동 불가, 패닉, E.G.O 침식 상태면, 위의 모든 효과와 지령 수행 여부가 적용되지 않음"},{name:"지령의 뜻",sin:null,count:null,effect:"이번 턴에 지령 을 수행했으면, 턴 종료 시 정신력 4 회복, 지령의 가호 1 얻음 - 지령 수행 시 메인 타겟에게 지령 대상 이 있으면, 대신 정신력 8 회복, 지령의 가호 3 얻음 이번 턴에 지령 을 수행하지 못했으면, 턴 종료 시 카르마 5 얻음 - 지령의 가호 가 9면, 카르마 를 얻지 않음 - 전투 시작 시 지령 수행을 시도했으나, 전투 중 대상을 타겟할 수 없게 되었으면, 카르마 를 얻지 않음"}],
  "파우스트|거미집 약지 제자": [{name:"크리틱으로부터의 영감",sin:"색욕",count:"4",effect:"신체가 울리는 선율 의 속도, 합 위력, 피해량이 증가하는 효과가 2배로 적용됨 공격 적중 시 해당 공격 스킬로 부정적인 효과를 부여했으면, 공격 종료시 자신의 정신력 4 회복 (턴당 2회) - 이 효과로 정신력 회복 시 자신의 정신력이 최대면, 다음 턴에 참격 피해량 증가 1 얻음 (턴당 1회)"},{name:"소중한 작품 파시아",sin:null,count:null,effect:"스테이지 첫 등장 시 자신의 생체 재료 횟수가 (전장에 있는 약지 소속 아군 수 × 2)만큼 증가 (최대 10) 스킬 종료 시 해당 스킬로 체력 또는 보호막 피해를 입혔으면, 자신의 생체 재료 횟수 5 증가 - 대상이 사망했으면, 추가로 횟수 3 증가 전투 중 누적으로 자신의 생체 재료 횟수 10을 소모할 때마다, 생체 재료 위력 1 얻음 - 위 효과로 생체 재료 위력이 2 이상이 되면, 작품명: 파시아 1 얻음 기본 공격 스킬과 합 가능 반격 스킬이 충전 횟수를 얻는 스킬로 취급됨"},{name:"보호와 억제를 위한 갑주",sin:null,count:null,effect:"스테이지 첫 등장 시 아이언 메이든 얻음 턴 종료 시 자신에게 작품명: 파시아 가 있으면, 아이언 메이든 이 소멸하고, 구속 해제 - 창작 몰입 얻음 - 흐트러짐 상태면, 흐트러짐 해제 (강제 흐트러짐 제외)"}],
  "파우스트|새벽 사무소 해결사": [{name:"포이어팔터 [스티그마 공방]",sin:"분노",count:"3",effect:"자신에게 전투 감각 이 있을 때 전투 시작 시 (수치x3)만큼 불꽃나비의 관 얻음 자신 이외의 새벽 사무소 소속 인격이 다음 조건 만족 시, 새벽 사무소 해결사 파우스트가 '연계' 사용 (인격별 턴당 1회) - 기본 스킬 공격 종료 시 적중한 적이 흐트러졌을 때, 대상에게 사용 (해당 스킬 공격 시작 전 이미 흐트러짐 상태였으면 발동하지 않음) - 새벽 사무소 대표 그레고르의 '새벽을 가르는 검', '새벽녘' 또는 새벽 사무소 해결사 싱클레어의 '낙인', '타오르는 일격' 공격 종료 시, 적중한 적에게 사용 (흐트러진 대상 우선) 새벽 사무소 해결사 싱클레어가 전장에 있으면, 새벽 사무소 해결사 파우스트가 사용하는 기본 스킬의 재사용 코인 적중 시 대상 적의 화상 위력만큼 분노 피해를 추가로 입힘 (최대 10, 턴당 최대 20) - 화상 이 발동한 것으로 취급 캐리어 또는 악기 케이스와 같이 생긴 이 무기를 쓰는 이유는 명확하다. 첫 번째는 일상에 녹아들기 위함이다. 전투에서 활용하기 어렵고 복잡한 유형의 무기는 오히려 그 비효율성 때문에 무기로 인식되지 않을 확률이 높다. 두 번째는 캐리어의 모양, 그 자체로 인해 생기는 수납력이다. 그렇기에 무언가를 담는 형태의 무기는 제뱌찌 협회에서 적극적으로 사용한다. 다만, 이러한 장점과 별개로 공방 장비를 쓰는 이들 사이에서 평가는 좋지 않다. 이 무기를 다루기 위해 투자한 시간을 다른 무기에 쏟았다면, 더 강해졌을 것이라거나, 겉멋이나 든 요즘 해결사들이 쓰는 장비라는 말을 종종 들을 수 있다. 이러한 까다로운 장비를 들고 있는 사람을 만났을 때, 그 사람이 고등급 해결사, 혹은 직책 높은 조직원이라는 것은… 역설적이게도 다른 의미를 가진다. 그렇기에 공방에서 이 장비의 명칭은 캐리어가 아닌 관, 코핀으로 불리고 있다. 그리고 관에는 으레 나비가 따라붙는다."},{name:"단열 코트",sin:null,count:null,effect:"스테이지 첫 등장 시 불꽃나비의 관 0 얻음 화상 피해로 흐트러짐 상태가 되거나 체력이 1 미만으로 감소하지 않음 화상 효과로 받는 피해량 -50% (소수점 버림) - 체력이 50% 미만이면 효과가 강화되어, 화상 효과로 받는 피해량 -75% (소수점 버림) 당신이 만약 열을 다루는 공방 장비를 사용하기로 마음먹었다면, 더 많은 돈을 지불할 각오 또한 해야 한다. 단순히 더 날카롭고 튼튼하기만 하면 되는 통상적인 무기와 달리, 열을 내뿜는 무기는 자신이 그 열에 휘말리지 않도록 여러 밑작업이 필요하기 때문이다. 물론 무작정 불을 지르는 무기나, 불이 잘 붙지 않는 원단 같은 건 쉽게 구할 수 있다. 하지만 사용자가 원하는 순간에, 원하는 만큼의 열을 섬세하게 가하는 무기와 열 자체를 막아주는 원단을 얻기 위해서는 보통 큰 비용을 치러야 하고, 그 사용법을 몸에 익히기 위한 노력도 게을리해선 안 된다. 만약 그렇게 비용과 시간을 투자했다면, 그만큼 당신을 부르는 일거리가 많아질 것이다."},{name:"선배",sin:null,count:null,effect:"새벽 사무소 해결사 싱클레어가 전장에 있으면, 다음 효과 발동 - 새벽 사무소 해결사 싱클레어가 정오 얻음 - 새벽 사무소 해결사 파우스트가 사망한 상태면, 턴 시작 시 새벽 사무소 해결사 싱클레어가 보유한 정오 가 고독한 정오 로 변경됨"}],
  "돈키호테|LCB 수감자": [{name:"정의의 응징",sin:"색욕",count:"3",effect:"합 승리 시 해당 스킬의 피해량 +10%"}],
  "돈키호테|남부 시 협회 5과 부장": [{name:"마음가짐",sin:"분노",count:"3",effect:"다음 턴에 신속을 (분노 공명 수/3)만큼 얻음"}],
  "돈키호테|N사 중간 망치": [{name:"두드릴지다!",sin:"색욕",count:"3",effect:"못 이 있는 대상에게 부여하는 진동 횟수 +1. 자신에게 광신 이 있으면 부여하는 못 +1"}],
  "돈키호테|로보토미 E.G.O::초롱": [{name:"잘근잘근 냠냠",sin:"탐식",count:"4",effect:"자신의 스킬 슬롯에 도발치 가 있을 때 합 위력 +1 명령 페이즈에서 자신을 공격 스킬의 타겟으로 삼은 적에게 공격을 적중할 때마다 체력 6 회복 (환상체인 경우 부위로 판정)"}],
  "돈키호테|검계 살수": [{name:"함께 쉬는 숨",sin:"오만",count:"2",effect:"자신의 스킬, 코인 효과로 호흡 위력을 얻을 때, 호흡이 없거나 호흡 위력이 가장 낮은 아군 1명에게 호흡 1 부여 (최대 5회)"}],
  "돈키호테|W사 3등급 정리 요원": [{name:"급속충전",sin:"우울",count:"3",effect:"전투 시작 시 이번 턴에 충전 횟수 (우울 공명 수/3)만큼 증가"}],
  "돈키호테|남부 섕크 협회 5과 부장": [{name:"고귀한 결투",sin:"오만",count:"3",effect:"모든 아군의 속도가 모든 적보다 높으면, 자신의 피해량이 속도가 가장 느린 적과의 속도 차이에 비례하여 증가 (속도 차이 1당 6%, 최대 30%)"}],
  "돈키호테|중지 작은 아우": [{name:"원한 문신",sin:"질투",count:"4",effect:"- 자신을 포함한 아군이 3번 피격당할 때마다 다음 턴에 질투 피해량 증가 1을 얻음 (최대 5) - 턴 종료 시 해당 턴에 아군에게 스킬로 가장 많이 피해를 준 적 1명에게 앙갚음 대상 부여 - 공격 시 메인 공격 대상이 앙갚음 대상 인 경우 코인 위력 1 증가"}],
  "돈키호테|T사 3등급 징수직 직원": [{name:"황금 시간 - 받아내기",sin:"나태",count:"5",effect:"턴 종료 시 체력이 10 ~ 20% 사이로 남았을 때, 전체 체력의 80%만큼 즉시 회복, 흐트러짐 상태 해제 (전투 당 1회) 시간 대여 가 해제될 경우, 다음 턴에 보유 중인 스킬 슬롯 중 하나의 도발치 8 증가"}],
  "돈키호테|라만차랜드 실장": [{name:"혈갑",sin:"색욕",count:"4",effect:"자신의 공격 종료 시 적이 사망했다면, 대상의 최대 체력 10%만큼 혈찬 생성 (최대 100, 집중 전투인 경우 부위로 판정) 턴 종료 시 잃은 체력 15% 당 다음 턴에 피해량 증가 1 얻음 (최대 3) 전투 중 아군이 출혈 피해로 사망하려 할 때, 해당 턴 동안 출혈 피해로는 사망하지 않음 (전투 당 인격 1명당 1회 발동)"},{name:"혈찬",sin:null,count:null,effect:"이 캐릭터가 전투에 등장해있거나 등장할 리스트에 포함되어 있으면, 1턴부터 모든 캐릭터가 받은 출혈 피해만큼 혈찬 이 증가함 이 캐릭터가 전투에 등장할 때 전장에 흩뿌려진 잠재된 피가 더욱 크게 드러난다. 혈찬 을 소모할 때, &lt;라만차랜드&gt; 소속 중에서 자신과 같은 권속이 있으면, 자신이 먼저 혈찬 을 소모함. 아류 산초 경혈 6식 - 채찍을 사용하는 동안 출혈 피해로 체력이 1 미만이 되지 않음"},{name:"아류 산초 경혈식",sin:null,count:null,effect:"턴 시작 시, 경혈 15 이상이고 다음의 인격이 전투에 참가 중이거나 전투 중 사망했으면, 자신의 가장 왼쪽 슬롯의 스킬이 강화됨. - 라만차랜드 신부 그레고르: 스킬 1 강화 - 라만차랜드 이발사 오티스: 스킬 2 강화 - 자신: 스킬 3 강화 - 라만차랜드 공주 로쟈: 수비 스킬 강화 자신을 제외한 아군이 출혈 피해를 받거나 혈찬 을 소모할 때, 자신이 경혈 2 얻음 (최대 3회)"},{name:"혈족을 책임지게 된 자",sin:null,count:null,effect:"전투 동안 자신을 제외한 &lt;라만차랜드&gt; 소속이 사망한 경우 - 자신의 기본 공격 스킬로 경혈 을 얻을 때, 경혈 1을 추가로 얻음 - 자신을 제외한 아군 중 &lt;라만차랜드&gt; 소속이 3명 이상 사망한 경우, 대신 경혈 3을 추가로 얻고 턴 시작 시, 책임감 1 얻음"}],
  "돈키호테|동부 섕크 협회 3과": [{name:"초염옥구",sin:"분노",count:"2",effect:"턴 종료 시 자신의 호흡 위력 3 당, 다음 턴에 신속 1 얻음 (최대 2) 기본 공격 스킬로 마지막에 적중한 대상(또는 부위)에게 다음 턴에 점혈 - 돈키호테 부여 (턴당 1회) 크리티컬 피해량 +(대상의 화상 위력)% (최대 15%) - 대상의 점혈 - 돈키호테 1당 최댓값 5% 증가"}],
  "돈키호테|로보토미 E.G.O::사랑과 증오의 이름으로": [{name:"사랑의 마법소녀 / 증오의 여왕",sin:"질투",count:"4",effect:"사랑/증오 당, 피해량 +2% (최대 10%) 전투 시작 시, 매지컬 아르카나 1 얻음"},{name:"사랑과 증오의 이름으로 - !E.G.O 장비 동기화율 초과주의!",sin:null,count:null,effect:"전투 중 누적으로 자신의 사랑/증오 횟수 10을 소모할 때마다, 사랑/증오 1 얻음 스테이지 시작 시 히스테리 가 없으면, 히스테리 효과를 얻음 스테이지 시작 시 사랑/증오 가 없으면, 사랑/증오 효과를 얻음 턴 시작 시 - 정신력이 0 이상이면, 마법소녀 등장! 얻음, 역변-리버스드 제거 - 정신력이 0 미만이면, 역변-리버스드 얻음, 마법소녀 등장! 제거 자신의 기본 공격 스킬의 정신력 소모 효과에 의해서 정신력이 -40 미만으로 내려가지 않음"}],
  "돈키호테|흑수 - 미": [{name:"발파각쇄",sin:"탐식",count:"3",effect:"대상의 정신력이 0 미만이면, 피해량이 (-대상의 정신력/3)%만큼 증가 (최대 15%, 소수점 버림) 대상의 파열 과 침잠 의 합 2당 피해량 +1% (최대 15%) - 정신력이 없는 대상이면, 이 효과와 최댓값이 2배로 증가 자신에게 발각[發角] 이 있으면, 적을 공격할 때 기본 스킬 마지막 코인의 피해량 +15% - 수비 스킬을 장착한 스킬 슬롯 공격 시, 대신 마지막 코인의 피해량 +30% - 합 가능 수비 스킬과 합 진행 시, 추가로 합 위력 +3"},{name:"망양지탄 [亡羊之嘆]",sin:null,count:null,effect:"홍원 군주 홍루와 존명 발동 시, 홍원 군주 홍루가 흑수환염[黑獣丸染] 으로 아래 효과 얻음 - 스킬로 파열 위력 또는 횟수 부여 시, 침잠 1 부여 (턴당 3회) 대기 해제 또는 복귀로 등장한 턴에 발각[發角] 3 얻음"}],
  "돈키호테|검지 대행자 - 개화 E.G.O::대행": [{name:"역시 마법의 삐삐님은 본인이 원하는 걸 알아주시는 군!",sin:"색욕",count:"1",effect:"자신의 지령의 가호 1당 지령 표식 스킬 피해량 +2% (최대 16%) - 지령의 가호 가 9면, 대신 기본 스킬 피해량 +20% 지령 대상 이 있는 대상에게 기본 스킬 적중 시, 정신력 3 회복 (스킬당 1회, 턴당 2회) - 해금 단계만큼 정신력 추가 회복"},{name:"단말기로 전해진 지령",sin:null,count:null,effect:"턴 시작 시 - 자신의 지령의 가호 수치에 따라 지령[단말기] Ⅰ / 지령[단말기] Ⅱ / 지령[단말기] Ⅲ / 지령[단말기] Ⅳ 얻음 - 무작위 적에게 지령 대상 부여 (집중 전투면, 부위에 부여) - 조작 슬롯의 자신의 기본 공격 스킬에 지령 표식 부여 (슬롯당 1개, 최대 2개 부여) · 해금 - II 이상이면, 스킬 3에 우선 부여 - 흐트러짐, 행동 불가, 패닉, E.G.O 침식 상태면, 위의 모든 효과와 지령 수행 여부가 적용되지 않음 턴 시작 시 해금 - Ⅲ 이면, 신(心) - 대행 얻음"},{name:"지령의 뜻",sin:null,count:null,effect:"이번 턴에 지령 을 수행했으면, 턴 종료 시 정신력 4 회복, 지령의 가호 1 얻음 (턴당 1회) - 지령 수행 시 메인 타겟에게 지령 대상 이 있으면, 대신 정신력 8 회복, 지령의 가호 3 얻음 이번 턴에 지령 을 수행하지 못했으면, 턴 종료 시 카르마 5 얻음 - 해금 - Ⅲ 이면, 카르마 를 얻지 않음 - 전투 시작 시 지령 수행을 시도했으나, 전투 중 대상을 타겟할 수 없게 되었으면, 카르마 를 얻지 않음"},{name:"해금 / 개화 E.G.O::대행",sin:null,count:null,effect:"턴 시작 시 지령의 가호 가 3/6/9이면, 해금 - I / 해금 - II / 해금 - Ⅲ 얻음 해금 - I 을 얻으면, 정신력을 15 소모하여 개화 E.G.O::대행 상태가 됨 - 정신력 소모 전 정신력이 25까지 증가하고 (증가한 정신력/5)만큼 카르마 얻음 (소수점 올림) - 이후 턴 시작 시 해금 이 있고, 정신력이 25 이상이면, 정신력을 15 소모하여 해당 상태가 됨 개화 E.G.O::대행 상태가 될 때, - 해당 턴의 흐트러짐 해제 (해제할 수 없는 흐트러짐이면 해당 상태가 될 수 없음) - 해당 상태일 때, 당연한 믿음 얻음 턴 시작 시 정신력이 0 이하면, 해당 상태 해제"}],
  "료슈|LCB 수감자": [{name:"무차별적 예술",sin:"탐식",count:"3",effect:"자신이 받는 피해량 +25%. 가하는 피해량 +25%"}],
  "료슈|남부 세븐 협회 6과": [{name:"반.갈",sin:"탐식",count:"5",effect:"이번 턴 참격 피해량 +10%"}],
  "료슈|LCCB 대리": [{name:"담.탐",sin:"탐식",count:"2",effect:"- 상시 적용: 탄환 7개 보유 - 턴 종료 시 자신에게 호흡 이 7 이상 있으면, 정신력 8 회복 - 회복 전 정신력이 최대인 경우, 다음 턴에 호흡 1을 얻음"}],
  "료슈|남부 리우 협회 4과": [{name:"화전",sin:"분노",count:"4",effect:"자신이 화상 이 부여된 적 처치 시 화상 이 없거나 화상 위력이 가장 낮은 무작위 적 2명에게 화상 4 부여 (턴 당 2회) - 집중 전투에서는 부위에 부여"}],
  "료슈|20구 유로지비": [{name:"제.지",sin:"나태",count:"3",effect:"- 자신을 제외한 아군의 공격으로 흐트러짐 상태가 된 적을 스킬 1로 공격함 (턴 당 1회) - 여러 적이 흐트러졌을 경우 체력이 가장 낮은 적을 공격함 (환상체일 때, 본체 우선 이후 부위 공격) - 이 효과로 스킬 1을 사용할 때 코인 효과로 자신이 얻는 진동 횟수가 1 증가하고, 해당 스킬의 마지막 코인 적중시 진동 폭발"}],
  "료슈|흑운회 와카슈": [{name:"흑운도",sin:"색욕",count:"3",effect:"출혈이 부여된 적 공격 시 피해량 +10%"}],
  "료슈|료.고.파. 주방장": [{name:"즉흥 조리",sin:"색욕",count:"5",effect:"적 처치 시 체력이 가장 낮은 아군 1명의 체력 15 회복 (턴당 1회 발동). 갈증 이 있는 경우 전부 소모하고, 소모한 갈증 에 비례하여 체력 회복량 증가."}],
  "료슈|W사 3등급 정리 요원": [{name:"차원 마검",sin:"오만",count:"5",effect:"적 처치 시 충전 횟수 3 증가 (턴 당 최대 3회 발동)"}],
  "료슈|에드가 가문 치프 버틀러": [{name:"집안일 끝내기",sin:"오만",count:"3",effect:"버.표 가 있는 대상에게 공격 적중 시 호흡 횟수 1 증가, 다음 턴에 신속 1 얻음 (턴 당 최대 3회) 버.표 가 있는 대상에게 크리티컬 적중 시 대상의 버.표 를 제거하고, 대상의 속도가 자신보다 느리면, 대상과의 속도 차이 1 당 크리티컬 피해량 +10% (최대 60%)"}],
  "료슈|로보토미 E.G.O::적안 · 참회": [{name:"거미대가리 / 해골바가지",sin:"색욕",count:"3",effect:"적안 을 얻는 코인을 사용하여 적에게 적중 시 - 피해량이 ( 적안 / 2)%만큼 증가 - 대상의 속도가 자신보다 3 이상 낮으면, 피해량이 ( 적안 / 2)%만큼 추가로 증가 - 대상에게 출혈 이 있으면, 적안 1 얻음 (턴 당 최대 3) 참회 를 얻는 코인을 사용하여 적에게 적중 시 - 피해량이 ( 참회 / 2)%만큼 증가 - 대상의 정신력이 자신보다 낮으면, 피해량이 ( 참회 / 2)%만큼 추가로 증가 (정신력이 없는 대상일 경우, 0으로 계산) - 자신의 정신력이 20 이상이면 참회 1 얻음 (턴 당 최대 3) 적에게 피격 시, 참회 1 얻음 (최대 3)"},{name:"E.G.O 동화",sin:null,count:null,effect:"충전 횟수를 획득할 때, 대신 적안 또는 참회 를 얻음 - 적안 과 참회 는 충전 위력의 영향을 받지 않음"}],
  "료슈|흑수 - 묘": [{name:"흑수화 [묘]",sin:"탐식",count:"3",effect:"자신에게 각력【묘】 가 있으면 가하는 피해량 +5% 대상에게 주살【신속】 이 있으면 가하는 피해량 +5%"}],
  "료슈|N사 E.G.O::경멸, 경외": [{name:"놓쳤던 @#$의 손",sin:"색욕",count:"2",effect:"적에게 공격 적중 시, 시선 2 부여 (적 당 턴 당 최대 1회) - 자신에게 경멸의 시선 이 있으면, 시선 1 추가 부여 적에게 피격 시, 공격자에게 시선 1 부여 (스킬 당 최대 1회, 턴 당 최대 3회) - 자신에게 시선의 경멸 이 있으면, 공격자의 마지막 코인 적중 시 공격자에게 해당 코인으로 받은 피해량의 20%만큼 나태 속성 피해를 입힘 (스킬 당 최대 20, 턴 당 최대 60) 기본 스킬로 적의 시선 또는 경멸 을 소모했다면, 다음 턴에 (소모한 적의 시선 / 2 + 소모한 적의 경멸 X 3)만큼 경멸의 시선 획득 (턴 당 최대 6. 소숫점 버림)"},{name:"쓰러질 수조차 없게 붙드는 손아귀",sin:null,count:null,effect:"흐트러짐 상태가 되면, 보호 4를 얻고 다음 턴에 시선의 경멸 을 획득 (전투 당 1회) 사망 시, 시선 또는 경멸 이 많은 순으로 적 3명에게 아래 효과 적용 (집중 전투일 경우 부위로 판정) - 다음 턴에 속박 2 부여 - 출혈 2 부여, 출혈 횟수 1 증가 - 진동 2 부여, 진동 횟수 1 증가"},{name:"너희 모두 재밌는 걸 보여주지",sin:null,count:null,effect:"전투 시작 시 N사 E.G.O::흉탄 이상의 '대상 조정 사격'이 아래 효과 얻음 - 사용 전 N사 E.G.O::경멸, 경외 료슈가 시선의 경멸 을 보유 중이고, 기본 스킬을 사용할 수 있으면, 대신 '쏘아내겠소 / 언제든지'를 료슈에게 사용함 (턴 당 1회. '쏘아내겠소 / 언제든지'는 이상의 동기화 단계가 적용됨) - 사용 전 N사 E.G.O::경멸, 경외 료슈가 메인 타겟이 아니고, 기본 스킬을 사용할 수 있으면, 료슈가 메인 타겟을 스킬 1로 일방공격함 (턴 당 1회. [피아식별불가] . 스킬 1의 피해량 -50%. 해당 스킬로 메인 타겟이 사망하지 않음)"}],
  "료슈|홍원 방랑무사": [{name:"협객",sin:"오만",count:"3",effect:"적이 아군을 공격하여 해당 아군이 사망했거나 체력이 25% 미만이면, 해당 공격 종료시 홍원 방랑무사 료슈가 '가척아원'으로 해당 적 일방 공격 (전투 당 1회) - 홍원 군주 홍루는 횟수 제한을 초과하여 이 효과 1회 추가 발동 가능 '군.가.곁.좋' 패시브로 '어이, 물러서라' 발동 시, 해당 스킬 크리티컬 피해량 +30%. 자신을 제외한 정신력이 가장 낮은 아군 1명의 정신력 2 ~ 4 회복 (턴 당 1회. 정신력이 -40 이하인 아군 제외)"},{name:"군.가.곁.좋 (군주라… 그런 가능성에서 곁을 지켰다면 더할 나위 없이 좋았겠군.)",sin:null,count:null,effect:"자신을 제외한 아군의 스킬이 적에게 적중하면, 해당 공격 종료시 '어이, 물러서라'로 일방 공격 (턴 당 1회) 대기해제 또는 복귀로 등장한 턴에 호위태세 2 얻음 홍원 군주 홍루의 '흑수군주' 패시브로 일방공격 명령 받을 때 흑수 또는 가씨 가문 소속으로 간주함"}],
  "료슈|로보토미 E.G.O::잔향 · 외로움": [{name:"시들지 않는 꽃",sin:"나태",count:"1",effect:"적이 침잠 피해를 받으면 꽃잎 1 얻음 적에게 부여되는 잔향 만큼 꽃잎 얻음 진동 폭발 발생 시, 꽃잎 2 얻음 자신의 공격 스킬 종료시, 자신의 꽃잎 이 30 이상이면 잔향 이 가장 높은 대상에게 '황홀한 종말' 발동 흐트러진 대상의 잔향 에 비례하여 가하는 피해량 +(대상의 잔향 )% 이번 턴에 자신의 체력을 최대 체력의 10% 이상 잃으면, 최대 체력의 3%, 정신력 10 회복 (턴당 1회)"},{name:"채워지지 않는 공허",sin:null,count:null,effect:"상시 적용: 탄환 - 고독 6개 보유 탄환 - 고독 이 1 이상일 때, 자신 또는 아군의 공격 종료시 적의 정신력이 -40 미만이거나 흐트러짐 상태면 '탕. 탕.'으로 일방 공격 (턴당 1회) 자신의 공격 종료시 탄환 - 고독 이 0이면, 대상에게 '멈추지 않는 이야기'로 일방 공격하고, 정신력을 10 소모하여 재장전"}],
  "료슈|거미집의 검": [{name:"잔상 반향",sin:"오만",count:"5",effect:"자신의 20를 초과하는 호흡 위력 1당 자신의 기본 공격 스킬 크리티컬 피해량 +1% (최대 10%) 자신의 기본 공격 스킬이 크리티컬 적중시, 검흔 [잔상] 1 부여 아군을 대상으로 한 공격 스킬로 삼천대세계 E.G.O의 패시브 발동 가능"},{name:"재회 [再会]",sin:null,count:null,effect:"전투에 첫 등장 시, 얽힘 0, 절연 [絶緣] 0 얻음 전투에 첫 등장 시, 편성된 거미집 소속 아군 인격(자신 포함) 3명당 얽힘 버프의 최솟값, 최댓값 1 증가 (최대 3) 거미집 소속 인격이 출전 중이면, 자신이 체력 피해를 받을 때 현재 체력 비율이 가장 낮은 거미집 소속 아군 인격에게 받은 피해를 전가함 체력이 0이 되는 피해를 받을 때 해당 턴 동안 체력이 1 미만으로 감소하지 않음 (전투당 1회) 거미집 소속 아군 인격이 사망한 상태면, 아래 효과 적용 - 얽힘 1 얻음 - 사망한 인격에 따라 이번 전투 동안 아래 추가 효과를 얻음 · 거미집 검지 아비 이상 : 기본 공격 스킬 사용 시 마지막 코인이 파괴 불가 코인 으로 변경됨. 기본 공격 스킬의 파괴 불가 코인 의 피해량 +10% · 검지 대행자 - 개화 E.G.O::대행 돈키호테 : 기본 공격 스킬 사용 시 호흡 2 얻음. 기본 공격 스킬 크리티컬 적중시 침잠 1 부여 · 거미집 중지 제자 이스마엘 : 방어 레벨 2 증가, 기본 스킬로 부여하는 화상 위력 +1 · 거미집 약지 아비 홍루 : 신체가 울리는 선율 얻음 · 거미집 약지 제자 파우스트 : 매 턴 시작 시 최대 체력의 10%만큼 보호막 얻음 · 거미집 소지 제자 싱클레어 : 매 턴 시작 시 호흡 횟수 1, 크리티컬 피해량 증가 1 얻음 대기 해제 또는 복귀할 인격이 없으면, 사망 상태인 아군 거미집 소속 인격 3명당 거미집의 검 료슈의 슬롯 수 +1 (최대 3회 증가) - 이 효과로 인해 해당 전투의 최대 슬롯 수를 초과하여 슬롯이 증가할 수 없음 - 일부 콘텐츠의 슬롯이 증가하지 않는 효과를 무시하고 발동 가능 이 인격은 화상 , 출혈 , 호흡 을 부여하는 인격으로만 취급됨 특정 조건 달성 시 이번 전투 동안 전투 BGM을 변경 (일부 전투 제외) ‘다시 만나고 싶지 않은 것은 다시 만나게 되고, 다시 만나고 싶은 것은 다시 만날 수 없다.’ ‘그렇기 때문에 재회의 순간에는 마음을 독하게 먹어야 한다.’"},{name:"지혜성 [地慧星]",sin:null,count:null,effect:"자신의 지혜성도 가 50 이상이면, 해당 턴의 마지막 순서에 무작위 적에게 '공간참 - 연 [空間斬 - 緣]' 발동 (전투당 1회) - 이 효과로 '공간참 - 연 [空間斬 - 緣]'을 사용한 후, 아래 효과 적용 · 이번 전투 동안 퇴각 불가 · 턴 종료 시 자신의 지혜성도 가 50 이상이면, 다음 턴 시작 시 기본 스킬 하나를 '공간참 - 잔 [空間斬 - 殘]'으로 변경 (가장 왼쪽 슬롯의 아래 스킬 우선 적용) “지혜성도. 천살성도. 별이 벼려진 검을 두 개나 손에 넣었다면, 그대는 대체 어떤 별이라 할 수 있겠는가.” “지나친 욕심 끝에 망가지거나 베어져버린 별들이 있음을 그대의 아비 또한 말해주었을 터. 두 자루의 검 중, 오직 하나만을 고르시오.”"},{name:"시공간 잔상 분열",sin:null,count:null,effect:"무작위 대상 1명에게 잔영 부여 (집중 전투인 경우, 본체로 판정) - 사망한 아군 거미집 소속 인격 3명당, 추가로 무작위 적 1명에게 잔영 부여 (최대 3개 생성) - 전투 시작 시 잔영 이 부여된 적을 기본 공격 스킬 메인 타겟으로 지정했으면, 해당 스킬 사용 전 '필연쇄 [必然殺]'로 일방 공격함 (턴당 1회) - 잔영 을 보유한 대상에게 기본 공격 스킬 사용 시, · 해당 스킬 코인이 모두 파괴 불가 코인 으로 변경되고, 최종 위력 +1 · 얽힘 1 얻음 (턴당 1회) “끊임없이 나뉘어지고. 나뉘어 갈라진 미래를 마주하고. 그 미래 속에서 다시 베고.” “그렇게 분열하면서도 자아를 지켜낼 수 있다니, 근성 하나는 대단하군.”"}],
  "료슈|오트쿠튀르::르누아르 신발관": [{name:"르누아르 개버딘 원단",sin:null,count:null,effect:"전장에 등장 시, 르누아르 개버딘 원단 코트 25 얻음 턴 시작 시, - 자신의 최대 체력의 (르누아르 개버딘 원단 코트 + 아르뮈르 에비이예)/5%만큼 보호막 얻음 - 아르뮈르 에비이예가 있으면, '트리플 스탬피드 스티칭'이 '원 킥 - 쿠튀르 멀티플'로 적용됨"},{name:"보존",sin:null,count:null,effect:"전투 중 누적으로 자신의 보존 횟수를 10 소모할 때마다 보존 위력 1 얻음 턴 종료 시 자신의 보존 위력이 3 미만이면, 보존 횟수를 전부 소모하여 (소모한 수치 × 5)만큼 다음 턴에 보호막을 얻음 자신의 보존 위력이 3 이상이면, 보존 횟수가 12 미만일 때 자신의 기본 스킬로 획득하는 보존 횟수 획득량 +1 기본 공격 스킬 사용 시, - 대상의 진동 위력이 6 이상이면, 코인 위력 +1 - 자신의 보존 위력이 3 이상이면, 코인 위력 +1 - 피해량 +(자신의 보존 위력 × 2)% (최대 10%) '트리플 스탬피드 스티칭', '원 킥 - 쿠튀르 멀티플'이면, 대신 피해량 +(자신의 보존 위력 × 4)% (최대 20%)"},{name:"되먹임",sin:null,count:null,conditions:[{sin:"나태",count:"1"},{sin:"오만",count:"1"},{sin:"질투",count:"2"}],effect:"적에게 진동 폭발 시, 진동 폭발 의 흐트러짐 피해량 +15% 자신의 보존 횟수가 12 이상이면, 대신 진동 폭발 시 자신의 보존 횟수를 1 소모하여 진동 폭발 의 흐트러짐 피해량 +30% (대상별로 적용) 자신에게 보호막이 있을 때 피격 시, 대상 적에게 진동 위력 2 부여"}],
  "이스마엘|오트쿠튀르::르루주 부티크": [{name:"탈의실 속으로⋯",sin:null,count:null,effect:"전투 중 누적으로 자신의 맥동 횟수 10을 소모할 때마다 맥동 1을 얻음 자신의 기본 스킬의 체력 감소 효과로 흐트러지거나 체력이 1 미만으로 감소하지 않음 (체력이 1인 경우, 기본 스킬 효과 중 체력 소모로 발동되는 효과를 받을 수 있음) 이번 전투에서 체력이 0이 되는 피해를 받았을 때, 해당 피해를 받지 않고, 즉시 탈의실 2를 얻고 탈의실 상태가 됨 (전투당 1회) - 수비 스킬 효과로 탈의실 상태가 되었으면, 해당 효과는 이번 전투 동안 발동하지 않음 탈의실 상태가 될 때 자신의 최대 체력만큼 보호막을 얻음 - 이 효과로 얻은 보호막은 턴 종료시에도 사라지지 않음 - 탈의실 효과가 해제될 때 위 효과로 얻은 보호막은 사라짐 탈의실 상태일 때, '목소리에 따라 기꺼이 나의 안으로'만 사용 가능함 (E.G.O.스킬 사용 불가) 턴 종료시 탈의실이 0이면, 탈의실 상태가 해제되며 새단장 상태가 되고, 맥동 횟수 5를 얻음"},{name:"변화의 요람",sin:null,count:null,conditions:[{sin:"분노",count:"1"},{sin:"색욕",count:"1"},{sin:"질투",count:"2"}],effect:"기본 스킬 사용 시 맥동 횟수가 10 미만이면, 합 위력 +2 자신이 새단장 상태면, 기본 스킬 적중 시 최대 체력의 8%만큼 체력 회복 (턴당 5회)"}],
  "뫼르소|LCB 수감자": [{name:"각오",sin:"나태",count:"2",effect:"전투 시작 시 자신의 체력이 50% 미만이면 보호 1을 얻음"}],
  "뫼르소|남부 리우 협회 6과": [{name:"태산",sin:"색욕",count:"4",effect:"피격 시 무작위 대상에게 화상 1 부여 (최대 4회)"}],
  "뫼르소|장미스패너 공방 해결사": [{name:"만성 피로",sin:"우울",count:"5",effect:"대상의 진동 이 5 이상일 때 대상의 합 위력 -1 흐트러짐 상태에서 돌아올 때 최대 체력의 5%만큼 체력 회복"}],
  "뫼르소|중지 작은 아우": [{name:"의리",sin:"질투",count:"3",effect:"- 턴 종료 시 해당 턴에 아군에게 스킬로 가장 많이 피해를 준 적 1명에게 앙갚음 대상 부여 - 공격 시 메인 공격 대상이 앙갚음 대상 인 경우 최종 위력 1 증가 - 자신 이외의 중지 인격이 생존해있으면, 매 턴 종료 시 자신과 정신력이 가장 낮은 중지 인격 1명의 정신력 6 회복"}],
  "뫼르소|데드레빗츠 보스": [{name:"시간 벌기",sin:"탐식",count:"3",effect:"파열 이 있는 대상과 합 진행 시 합 위력 +1 대상의 파열 횟수가 5 이상이면, 합 위력 +2"}],
  "뫼르소|W사 2등급 정리 요원": [{name:"견뎌내기",sin:"질투",count:"3",effect:"피격 시 충전 횟수 1 증가 (최대 6회) 합 패배 시 충전 횟수 1 증가 (최대 6회. 피격 시 조건과 별도로 판정)"}],
  "뫼르소|N사 큰 망치": [{name:"집념의 망치",sin:"분노",count:"4",effect:"전투 시작 시 체력이 50% 미만이면 자신에게 부여된 부정적인 효과 중 1개를 제거하고, 광신 1, 공격 위력 증가 1, 보호 3을 얻음"}],
  "뫼르소|R사 제 4무리 코뿔소팀": [{name:"rrR-#4 슈트 가압 가동",sin:"질투",count:"5",effect:"턴 종료 시 충전 횟수 5당 다음 턴의 속도 최대 값 +2 (최대 6) 턴 시작 시 충전 횟수 5 이상 있으면 자신의 가장 오른쪽 슬롯 1개에 도발치 3 상승"}],
  "뫼르소|검계 우두머리": [{name:"본국검술",sin:"오만",count:"3",effect:"이번 전투에서 체력이 0이 되는 피해를 받았을 때, 해당 피해를 받지 않고, 해당 턴 동안 체력이 1로 유지됨 (전투 당 1회) 자신의 스킬, 코인 효과로 호흡 위력, 횟수를 얻을 때, 자신을 제외한 호흡 이 없거나, 가장 낮은 검계 조직원 2명의 호흡 위력, 횟수 1 증가 - 전투에 참여한 검계 조직원이 6명 이상이면, 대신 2 증가 전투 시작 시 자신을 제외한 검계 조직원에게 본국검술 부여"},{name:"추모",sin:null,count:null,effect:"자신을 제외한 검계 조직원이 3명 이상 사망한 경우 - 자신의 스킬, 코인 효과로 호흡 위력, 횟수를 얻을 때, 호흡 위력, 횟수 1 추가 증가 - 검계 조직원이 5명 이상 사망한 경우, 대신 2 증가 - 전투 시작 시 자신에게 본국검술 부여"}],
  "뫼르소|남부 디에치 협회 4과 부장": [{name:"자율 학습 지시",sin:"우울",count:"2",effect:"자신을 제외한 아군이 스킬을 버릴 때마다 대상과 자신에게 지식 단련 1 부여 (스킬 당 1회, 턴 당 3회) 턴 종료 시 자신을 제외하고 스킬을 버린 아군 수만큼 다음 턴에 관통 피해량 증가 , 타격 피해량 증가 얻음 (최대 3)"}],
  "뫼르소|서부 섕크 협회 3과": [{name:"결투 생방송",sin:"탐식",count:"2",effect:"턴 종료 시 자신의 호흡 위력 3 마다, 다음 턴에 신속 1 얻음 (최대 2) 기본 공격 스킬로 공격 적중 시, 마지막에 적중한 슬롯에 다음 턴에 집중 공격 - 뫼르소 1 부여 (스킬 당 1회 부여) 집중 공격 - 뫼르소 가 부여된 슬롯을 공격하여 대상을 처치하거나 부위를 파괴했으면, 정신력 7 회복"}],
  "뫼르소|동부 엄지 카포 IIII": [{name:"천퇴성도 [天退星刀]",sin:"나태",count:"3",effect:"호표탄 보유 시, - 1 이상이면 '쾌도난마'의 모든 코인이 파괴 불가 코인 으로 변경 - 호표탄 을 소모하는 스킬 코인의 위력 +1, 피해량 +10% (소모 가능한 만큼만 적용) 맹호표탄 보유 시, - 1 이상이면 기본 공격 스킬의 모든 코인이 파괴 불가 코인 으로 변경 - 0이면 기본 공격 스킬의 특수 탄환을 소모할 수 있는 코인이 파괴 불가 코인 으로 변경 - 맹호표탄 을 소모하는 스킬 코인의 위력 +2, 피해량 +30%, 해당 코인으로 적중 시 부여하는 화상 위력과 화상 횟수 부여값 +2 (소모 가능한 만큼만 적용)"},{name:"삽시호 [揷翅虎]",sin:null,count:null,effect:"상시 적용: 호표탄 12 보유 호표탄 , 맹호표탄 을 소모하는 코인을 굴릴 때, 해당 특수 탄환이 없는 경우에도 공격을 취소하지 않는 대신 해당 코인의 적중 시 화상 부여, 화상 횟수 증가 효과가 발동하지 않음 이번 전투에서 처음으로 수비 스킬을 장착하였거나 호표탄 을 전부 사용, 또는 흐트러졌다면, 해당 턴 종료 시 맹호표탄 을 장전하고 천퇴성 [天退星] 1 얻음 (전투당 1회) - 흐트러짐 상태에서 효과 발동 시, 흐트러짐 해제 (강제 흐트러짐 제외) - 호표탄 이 남아 있으면 전부 소멸 - 자신이 소모한 호표탄 과 맹호표탄 의 합이 8 이상이면, 천퇴성 [天退星] 이 신(心) - 천퇴성 [天退星] 으로 변경 맹호표탄 의 마지막 탄환을 소모하는 기본 공격 스킬을 사용할 경우, - 공격 시작 전 공격 가중치 +2 - 다음 턴에 오버히트 얻음"}],
  "뫼르소|라만차랜드 왕자": [{name:"&#39;피를 두르고, 가면을 쓰고, 피가 명하는 대로&#39;",sin:"색욕",count:"3",effect:"전투 시작 시 자신에게 경혈 갑주 가 있으면, 수치에 따라 아래 효과를 얻음 - 3 ~ : 공격 레벨 증가 2, 방어 레벨 증가 2 - 4 ~ : 다음 턴에 신속 2 전투 시작 시 자신에게 연기 집중 이 있으면, 적에게 공격 적중 시 라만차 퍼레이드 1 부여 (턴당 2회, E.G.O 스킬 포함) 출혈 을 보유한 적에게 공격 적중 시 자신의 체력이 30% 미만이면, 자신의 최대 체력의 30%만큼 체력 회복 (전투당 1회, 소수점 버림)"},{name:"혈찬",sin:null,count:null,effect:"이 캐릭터가 전투에 등장해있거나 등장할 리스트에 포함되어 있으면, 1턴부터 모든 캐릭터가 받은 출혈 피해만큼 혈찬 이 증가함 이 캐릭터가 전투에 등장할 때 전장에 흩뿌려진 잠재된 피가 더욱 드러난다."},{name:"왕자였던 자가 해야하는 일",sin:null,count:null,effect:"턴 시작 시 경혈 갑주 가 최대인 라만차랜드 소속 인격에게 아래 효과 적용 - 연기 집중 1 얻음 - 피해로 인한 흐트러짐 상태일 때, 흐트러짐 해제하고 경혈 갑주 전부 소모 (스테이지 및 인격당 1회, 강제 흐트러짐 제외) 전투 인원에 라만차랜드 공주 로쟈가 있다면, 라만차랜드 공주 로쟈와 라만차랜드 왕자 뫼르소의 스킬 3 피해량 +15% (강화 스킬 포함)"}],
  "뫼르소|로보토미 E.G.O::호넷【변조】": [{name:"포자 확산",sin:"분노",count:"3",effect:"포자 를 보유한 적 처치 시, 아래 효과 적용 - 다음 턴 동안 부여하는 포자 수치 2배가 됨 - 기본 공격 스킬로 처치 시 (해당 스킬에서 소모하는 포자탄 / 2)만큼 포자탄 획득 (소수점 올림, 스킬당 1회)"},{name:"E.G.O 변조 / 포자탄",sin:null,count:null,effect:"상시 적용: 포자탄[기본] 10개, 포자탄[산탄] 6개 보유 포자탄을 소모하는 코인 적중 시 - 포자탄[기본] 을 소모했으면, 포자 2 부여 - 포자탄[산탄] 을 소모했으면, 포자 3 부여 - 이 효과는 스킬에서 부정적인 효과를 부여하는 것으로 취급됨 포자탄[산탄] 을 소모하는 코인 사용 전 포자탄[산탄] 이 없으면, 정신력 2, 포자탄[기본] 2 소모하여, 포자탄[산탄] 1 얻음 - 스킬 사용 중 포자탄이 부족하면, 다음 코인을 모두 취소하고 재장전[포자보충] 포자 가 있는 대상 사망 시 충성 페로몬 1 얻음 ‘우리 연구팀에서 확인해본 결과, 환상체에서 정제 추출한 안정된 장비라 해도 사용자에 따라 미묘한 변형이 일어나더군. 불완전해서라기보단... 진짜 E.G.O처럼 오히려 완전해지는 과정이라고 보아야 할지. 우선 그걸 변조라 이름 붙이도록 하지.’"}],
  "뫼르소|약지 야수파 스튜던트": [{name:"차오르는 영감",sin:"색욕",count:"4",effect:"자신에게 야수파 - 마스크 드 시앵 이 있으면, 찢긴 색채 [루주] 부여량 +1 자신이 찢긴 색채 [루주] 를 4 부여할 때마다, 정신력 5 회복 (턴당 2회) - 이 효과로 정신력 회복 시 자신의 정신력이 최대치이면, 다음 턴에 타격 피해량 증가 1 얻음 (턴당 1회)"},{name:"약지 야수파 스튜던트",sin:null,count:null,effect:"기본 스킬 적중 시 찢긴 색채 [루주] 1 부여 - 이 효과는 스킬에서 부정적인 효과를 부여하는 것으로 취급됨 턴 종료 시 이번 전투 동안 자신이 찢긴 색채 [루주] 를 10회 부여했으면, 다음 턴에 야수파 - 마스크 드 시앵 얻음 약지 야수파 도슨트 로쟈의 '크리틱' 스킬 코인 시작 시, 약지 야수파 스튜던트 뫼르소가 결점 보완 얻음"}],
  "홍루|LCB 수감자": [{name:"유희",sin:"나태",count:"2",effect:"다음 턴 시작 시 정신력 6 회복"}],
  "홍루|흑운회 와카슈": [{name:"흑운도",sin:"색욕",count:"3",effect:"연결한 죄 중 마지막 죄의 마지막 코인으로 공격할 때 출혈 3 부여"}],
  "홍루|남부 리우 협회 5과": [{name:"끓어오르는군요~",sin:"분노",count:"4",effect:"자신의 정신력이 30 이상일 때 공격 스킬의 스킬 효과, 코인 효과로 부여하는 화상 횟수 부여 값 +1"}],
  "홍루|W사 2등급 정리 요원": [{name:"익숙해진 정리 업무",sin:"오만",count:"3",effect:"전투 시작 시 충전 횟수가 5 이상 있으면, 다음 턴에 신속 2를 얻음 충전 횟수가 10 이상 있으면, 신속 1을 추가로 얻음"}],
  "홍루|갈고리 사무소 해결사": [{name:"갈고리",sin:"색욕",count:"5",effect:"적 처치 시 다음 턴에 공격 위력 증가 1을 얻음 (턴 당 최대 1회)"}],
  "홍루|송곳니 사냥 사무소 해결사": [{name:"유쾌한 사냥법",sin:"탐식",count:"4",effect:"대상이 &lt;혈귀&gt;, &lt;피주머니&gt;거나, 대상의 파열 이 10 이상이면 피해량 +10% 스킬 사용 시 자신에게 출혈 이 있으면, 공격 적중 시 파열 3 부여 (턴 당 2회)"}],
  "홍루|콩콩이파 두목": [{name:"유열",sin:"탐식",count:"2",effect:"다음 턴 시작 시 (탐식 공명 수 x2) 만큼 정신력 회복"}],
  "홍루|K사 3등급 적출직 직원": [{name:"재생 앰플 활성화",sin:"탐식",count:"5",effect:"피격 시 현재 체력이 20% 미만이면, 최대 체력의 90%만큼 체력을 회복하고 K사 앰플 을 1 얻음 위 효과가 발동되면 이번 전투 동안 매 턴 취약 을 1 얻음 (전투당 1회)"}],
  "홍루|남부 디에치 협회 4과": [{name:"열쇠 들여다보기",sin:"우울",count:"3",effect:"자신이 스킬을 버릴 때 버린 스킬의 등급만큼 피해량 증가 를 얻음 (턴 당 최대 3) 자신을 제외한 아군이 스킬을 버릴 때, 버린 스킬의 등급이 자신의 탐구한 지식 보다 높으면, 자신의 탐구한 지식 +1"}],
  "홍루|20구 유로지비": [{name:"진동유착 변형 전투 지팡이 (미허가 발명품)",sin:"나태",count:"6",effect:"턴 종료 시 이번 턴에 자신이 진동 폭발 을 시킨 횟수만큼 다음 턴에 피해량 증가 를 얻음 (최대 3)"}],
  "홍루|마침표 사무소 대표": [{name:"전술적 사격 지원",sin:"오만",count:"5",effect:"마침표 사무소 해결사 히스클리프가 후방 지원 배치 상태거나, 대기 인원으로 편성되어 있다면 마침표 사무소 대표 홍루 인격의 스킬 2, 스킬 3이 강화됨 전투 시작시 자신의 호흡 위력이 20 이상이면, 호흡 횟수 1 얻음"},{name:"집중",sin:null,count:null,effect:"탄환 을 소모하는 코인을 굴릴 때, 탄환 이 없는 경우에도 해당 코인의 적중시 효과를 부여하지 않는 대신 공격이 취소되지 않음"}],
  "홍루|R사 제 4무리 순록팀": [{name:"뇌파 충전 집속 뿔",sin:"질투",count:"3",effect:"전투 중 누적으로 자신의 충전 횟수를 10 소모할 때마다, 충전 1 얻음 충전 이 2 이상이면, - 충전 2당 기본 공격 스킬로 부여하는 침잠 부여량 +1 (최대 2, 침잠 횟수만 증가하거나 스스로 침잠 을 얻는 경우에는 적용되지 않음) - 기본 공격 스킬의 피해량이 ( 충전 × 5)%만큼 증가 (최대 25%)"}],
  "홍루|홍원 군주": [{name:"더러운 피마저 받아들이고, 누군가의 피를 묻혀가며 뜻을 이룬다.",sin:"탐식",count:"5",effect:"전투 시작시 자신이 수비 스킬을 장착하지 않고 일방공격 당할 예정이면, 원호 방어 수치가 가장 낮은 무작위 흑수 아군 (최대 공명 수 / 3)명에게 호위 1 부여. (최대 2명, 인격 당 1회. 원호 방어 를 획득하는 스킬 보유 인격 제외) 이번 전투에서 체력이 0이 되는 피해를 받았을 때, 해당 피해를 받지 않고 해당 턴 동안 체력이 1로 유지되며, 오혈 1 얻음 (전투 당 1회) 자신의 오혈 1 당 스킬 피해량 +3% E.G.O 스킬 '오혈읍루 - 종' 발동 시, 공격 종료시 사망 효과가 발동하지 않고 최대 체력의 60% 회복. 다음 턴부터 매 턴 시작시마다 피해량 증가 1 얻음 (전투 당 1회)"},{name:"흑수군주",sin:null,count:null,effect:"자신을 제외한 아군 인격이 대기해제 또는 복귀했으면, 정신력을 10 회복하고, 전투 시작시 스킬 1로 무작위 대상에게 일방공격 명령 - 해당 아군이 흑수 또는 가씨 가문 소속이면 대신 정신력을 20 회복하고, 전투 시작시 기본 스킬 3으로 무작위 대상에게 일방공격 명령 (인격 당 전투 당 2회) 스테이지 시작 시, 대기 인원을 포함하여 편성된 흑수 인격 1명 당 모든 흑수의 주인 1 얻음 전투에서 흑수 인격이 사망 시, 정신력을 20 회복하고, 사중구활[死中求活] 버프 1 얻음 (자신이 퇴각 상태여도 적용) 흑수환염[黑獸丸染] 1 당 피해량 +5% (최대 55%)"}],
  "홍루|거미집 약지 아비": [{name:"마에스트로의 크리틱",sin:"색욕",count:"4",effect:"거미집 약지 제자 파우스트가 스킬 3(E.G.O 스킬 제외)을 사용하기 전 거미집 약지 아비 홍루가 '우린 피와 살을 사랑한답니다'를 파우스트에게 사용함 (턴당 1회) 공격 적중 시 해당 공격 스킬로 부정적인 효과를 부여했으면, 공격 종료시 자신의 정신력 4 회복 (턴당 3회) - 이 효과로 정신력 회복 시 자신의 정신력이 최대면, 다음 턴에 참격 피해량 증가 1 얻음 (턴당 1회)"},{name:"일생의 작품 티비아",sin:null,count:null,effect:"스테이지 첫 등장 시 자신의 생체 재료 횟수가 (전장에 있는 약지 소속 아군 수 × 2)만큼 증가 (최대 10) 스킬 종료 시 해당 스킬로 체력 또는 보호막 피해를 입혔으면, 자신의 생체 재료 횟수 5 증가 - 대상이 사망했으면, 추가로 횟수 3 증가 전투 중 누적으로 자신의 생체 재료 횟수 10을 소모할 때마다, 생체 재료 위력 1 얻음 - 위 효과로 생체 재료 위력이 2 이상이 되면, 작품명: 티비아 얻음 기본 공격 스킬과 합 가능 반격 스킬이 충전 횟수를 얻는 스킬로 취급됨"},{name:"신체극복",sin:null,count:null,effect:"스테이지 첫 등장 시 조망 21 얻음 약지 소속 아군 인격이 스킬 사용시 조망 1 감소 (인격별 턴당 1회) 턴 종료 시 자신에게 조망 이 없으면, 다음 턴 시작 시 기본 스킬 하나를 '폐장 - 설치미술 제 1호 '여러분들이 흩뿌린 살과 뼈가 객석이 되어''로 변경 (전투당 1회, 가장 왼쪽 슬롯의 아래 스킬 우선 적용) - 변경된 스킬이 다른 스킬로 변경되어 사용할 수 없게 되면, 위 효과를 다시 발동함 턴 종료 시 이번 전투에서 처음으로 흐트러졌으면, 흐트러짐 해제 (강제 흐트러짐 제외)"}],
  "홍루|S사 추노꾼": [{name:"추쇄건[推刷巾]",sin:"오만",count:"3",effect:"자신의 속도가 대상보다 빠르면, (대상과의 속도 차이 × 2)%만큼 피해량이 증가 (최대 10%) - 대상이 포박 [홍루] 상태면, 피해량이 증가하는 효과가 2배로 적용됨 전투 시작시 이번 턴에 참격 속성이고, 오만 속성인 스킬을 장착한 아군당 피해량 +5% (최대 30%)"},{name:"추노꾼",sin:null,count:null,effect:"포박 [홍루] 가 부여된 적이 있으면, 압송 채비 얻음 자신이 포박 [홍루] 를 부여한 적에게 스킬 지정 시 속도에 관계 없이 공격 스킬의 공격 대상을 자신으로 변경할 수 있음 (집중 전투 전용)"}],
  "홍루|동부 섕크 협회 3과": [{name:"초염옥구",sin:"분노",count:"2",effect:"합 승리 시 대상에게 점혈 이 있으면, 점혈 - 홍루 1 부여 (턴당 1회) 턴 종료 시 자신의 호흡 위력 3당, 다음 턴에 신속 1 얻음 (최대 2) 크리티컬 피해량 +(대상의 화상 위력)% (최대 15%) - 대상의 점혈 - 홍루 1당, 최댓값 +5% 증가"},{name:"입회하의 결투",sin:null,count:null,effect:"스테이지 첫 등장 시 대기 인원 또는 서포트 인원으로 편성된 섕크 협회 소속 아군 인격 수만큼 입회 - 동부 섕크 얻음 (최대 3, 사망자 포함) 기본 공격 스킬로 마지막에 적중한 대상에게 다음 턴에 점혈 - 홍루 부여 (턴당 1회, 집중 전투면, 부위에 부여)"}],
  "히스클리프|LCB 수감자": [{name:"르쌍티망",sin:"질투",count:"4",effect:"대상이 자신보다 최대 체력이 높으면 피해량 +10%"}],
  "히스클리프|남부 시 협회 5과": [{name:"호흡",sin:"분노",count:"3",effect:"이번 턴에 공격으로 피해를 받으면 피해량 +10%"}],
  "히스클리프|N사 작은 망치": [{name:"젠장…",sin:"질투",count:"2",effect:"아군이 사망하면 다음 턴 시작 시 정신력이 10 감소하고, 타격 위력 증가 1을 얻음 생존한 N사 광신도가 파티 내에 자신 포함 4명 이상 있을 때 코인 위력 +1"}],
  "히스클리프|남부 세븐 협회 4과": [{name:"본능적 간파",sin:"탐식",count:"4",effect:"상대의 취약 속성(내성 1.5 초과)으로 공격 시 스킬로 부여하는 파열 부여 값 +1 전투 시작 시 생존한 아군 세븐 협회 해결사가 자신 포함 4명 이상이면, 위 효과의 파열 부여 값 +1"}],
  "히스클리프|멀티크랙 사무소 해결사": [{name:"모델 L37 충전",sin:"질투",count:"3",effect:"전투 중 누적으로 자신의 충전 횟수 10을 소모할 때마다, 충전 을 1 얻음 턴 종료 시 충전 이 2 이상이면, 다음 턴에 신속 1 얻음 턴 종료 시 충전 이 3 이상이면, 다음 턴에 신속 1, 합 위력 증가 1을 추가로 얻음"}],
  "히스클리프|R사 제 4무리 토끼팀": [{name:"풀 뜯을 준비",sin:"분노",count:"3",effect:"다음 턴 시작 시 (분노 공명 수)만큼 충전 횟수 증가. 충전 횟수가 5 이상이면 신속 1, 공격 위력 증가 1을 얻음. 상시 발동: 스테이지 시작 시 탄환 +3"}],
  "히스클리프|로보토미 E.G.O::여우비": [{name:"눈물비",sin:"질투",count:"3",effect:"전투 시작 시 침잠 횟수를 1 소모하여 침잠 만큼 정신력 감소 피격 전 자신의 침잠 만큼 보호를 얻음. (턴 당 획득 가능한 보호 : 최대 5) 피격 시 다음 턴에 타격 피해량 증가 1을 얻음 (턴당 최대 3)"}],
  "히스클리프|피쿼드호 작살잡이": [{name:"헤집어진 문신",sin:"질투",count:"5",effect:"자신을 포함한 아군이 피격당할 때마다 다음 턴에 공격 레벨 증가 1, 방어 레벨 증가 1을 얻는다. 피격당한 아군이 피쿼드호 소속인 경우, 대신 2를 얻는다. (최대 9) 자신의 체력이 낮아질수록 적에게 가하는 피해량이 증가한다. - 자신의 잃은 체력 1%당 피해량 1% 증가"}],
  "히스클리프|남부 외우피 협회 3과": [{name:"엄중한 입회",sin:"오만",count:"4",effect:"대상의 진동 위력 6 당 피해량 +10% (최대 30%) 자신의 스킬 효과로 진동 - 붕괴 변환 시 대상에게 진동 폭발 발생"}],
  "히스클리프|와일드헌트": [{name:"마왕의 부름",sin:"질투",count:"5",effect:"- 대상의 침잠 1 당 피해량 +1% (최대 15%) - 전투 중 아군 1명이 사망에 이르는 피해를 받았을 때, 관 2를 소모하여 와일드헌트 부여 (턴 당 2회) - 다음 턴에 와일드헌트 를 부여한 대상에게 피해량 증가 2 부여 - 워더링하이츠, 에드가 가문 소속이면, 다음 턴에 공격 위력 증가 1 추가 부여"},{name:"듀라한",sin:null,count:null,effect:"- 턴 시작시 듀라한 이 있을 때, 듀라한 에 탑승함 - 듀라한 에 탑승할 때마다 정신력 5 소모 - 전투 중 사망한 아군이 3명 이상이면, 다음 턴에 듀라한 을 얻음 (전투당 1번) - 듀라한 에 탑승할 때, 피해나 흐트러짐 손상으로 흐트러짐 상태가 된 경우, 흐트러짐 상태를 해제함. 해제할 수 없는 흐트러짐 상태인 경우, 듀라한 에 탑승할 수 없음 - 대상 처치 시 관 1 얻음"}],
  "히스클리프|마침표 사무소 해결사": [{name:"정밀 조준",sin:"오만",count:"2",effect:"턴 종료 시 자신의 호흡 10 당 신속 1 얻음 (최대 2) 전투 시작 시 자신이 (E.G.O 스킬 포함) 공격 스킬을 사용할 예정이 아니면, 호흡 위력이 가장 낮은 아군 1명에게 호흡 3 부여 턴 종료 시 이번 턴에 자신이 (E.G.O 스킬 포함, 타겟 포착 제외) 공격 스킬을 사용하지 않았다면, 다음 턴에 호흡 10, 관통 위력 증가 1 얻음"},{name:"저격",sin:null,count:null,effect:"스테이지 시작 시 관통 위력 증가 3 얻음 이 캐릭터가 전투에 등장할 때, 탄환 - 로직 아틀리에 1 얻음 (전투 당 1회) 턴 종료 시 자신의 모든 탄환 이 0이면, 후방 지원 배치 (전투 당 1회) 대기 해제되었거나, 후방 지원 배치 이후 다시 전투에 참여했을 때, 집중[저격] 이 최대가 되고, 관통 위력 증가 를 3 얻고, 재장전 ( 탄환 - 로직 아틀리에 제외, 전투 당 1회)"}],
  "히스클리프|흑운회 와카슈": [{name:"흑운도",sin:"색욕",count:"3",effect:"자신을 포함해 전투에 참여한 아군 흑운회 소속 인격이 2명 이상이면 흑운도 1 얻음 (최대 1) 이번 턴에 수비 스킬을 사용했거나, 공격 시작 전에 최대 체력인 적에게 입히는 피해량 +10% 적이 자신을 제외한 아군을 공격하여 피해를 입혔으면, 공격자를 스킬 1로 공격 (턴 당 1회) 적이 자신을 제외한 아군을 처치했거나, 공격 종료 후 공격당한 아군의 체력이 25% 미만이면, 대신 공격자를 '뒷골목의 규칙'으로 일방 공격함 (아군 캐릭터 당 1회, 턴 당 2회. 해당 효과로 발동된 스킬은 공격 스킬로 간주함)"},{name:"임전",sin:null,count:null,effect:"흑운회 소속 아군이 사망하면, 이번 전투 동안 참격 위력 증가 1 얻음 흑운회 소속 아군이 3명 이상 사망하면 이번 전투 동안 임전 을 얻음"}],
  "히스클리프|W사 4등급 정리 요원 - CCA": [{name:"컨제스쳔 클리닝 아머",sin:"질투",count:"5",effect:"전투 시작시 자신의 체력이 50% 미만이면, ( 충전 위력 × 5)만큼 보호막 얻음 (최대 25) 피격 직전, (자신의 충전 위력)만큼 보호막 얻음 (최대 5, 턴 당 최대 3회) 자신의 스킬로 충전 횟수 최대치를 초과하여 충전 횟수를 얻으면, 최대치를 초과한 충전 횟수 1 당 해당 스킬 피해량 +3% (최대 15%)"},{name:"방어지향 충전",sin:null,count:null,effect:"전투 중 누적으로 충전 횟수를 10 소모할 때마다 충전 1 얻음 턴 시작시, 자신의 충전 위력만큼 방어 레벨 증가 얻음 (최대 6)"}],
  "히스클리프|흑수 - 유 필두": [{name:"맞부딪치는 혈투",sin:"탐식",count:"5",effect:"전투 시작시 자신의 잃은 체력 20%당 공격 레벨 증가, 방어 레벨 증가 1 얻음 (최대 3) 아래의 조건 만족 시 혈투본능 얻음 (턴당 최대 10) - 합 시작 시 3 얻음 - 기본 공격 스킬 적중시 또는 자신이 화상 피해를 받을 때 1 얻음 자신의 현재 체력이 50% 미만이면, 추가 1 얻음 - 적 처치 시 5 얻음"},{name:"투계",sin:null,count:null,effect:"홍원 군주 홍루와 존명 발동 시, 홍원 군주 홍루가 흑수환염[黑獣丸染] 으로 아래 효과 얻음 - 자신의 기본 스킬로 공격 적중 시 해당 적에게 가한 탐식 피해의 5%만큼 분노 피해를 줌 화상 피해로 흐트러짐 상태가 되거나 체력이 1 미만으로 감소하지 않음 대기 해제 또는 복귀로 등장한 턴에 혈염 [血炎] 3, 화상 횟수 3 얻음"},{name:"염조불사전[炎鳥不死戰]",sin:null,count:null,effect:"이번 전투에서 체력이 0이 되는 피해를 받았을 때, 해당 피해를 받지 않고, 해당 턴 동안 체력이 1로 유지됨 이후 다음 턴 시작 시 자신의 최대 체력의 (20 + 자신의 화상 )%만큼 체력 회복 후 자신의 화상 소멸 (최대 49%, 전투 당 1회)"}],
  "히스클리프|중지 작은 형님": [{name:"작은 형님",sin:"질투",count:"4",effect:"전투 시작시, 질투 공명 당 원한 문신 1 얻음 (최대 7) 적이 자신을 포함한 중지 소속 아군을 공격했으면, 해당 스킬 공격 종료 시 공격자를 '발길질'로 일방 공격함 (턴당 1회)"},{name:"앙갚음 장부",sin:null,count:null,effect:"자신 또는 중지 소속의 아군이 적에게 피격 시, 대상에게 복수 대상 을 1 부여하고 앙갚음 장부 [히스클리프] 1 얻음 (스킬당 1회) 아군 인격 사망시, 앙갚음 장부 [히스클리프] 3 얻음 턴 시작 시 자신의 원한 문신 이 15 이상이면 아래 효과 적용 - 기본 스킬 하나를 '전원, 처형이다!!'로 변경 (가장 왼쪽 슬롯의 아래 스킬 우선 적용) · 변경된 스킬이 다른 스킬로 변경되어 사용할 수 없게 되면, 위 효과를 다시 발동함 - 이번 턴이 종료될 때까지 전투 BGM을 변경 (일부 전투 제외) 대기 해제 또는 복귀로 등장한 턴의 전투 시작시, '내 헤어쿠포오오오온!!!!'을 무작위 대상에게 사용함 - 해당 공격 종료 시 모든 중지 인격에게 공격 레벨 증가 1, 방어 레벨 증가 1 부여"},{name:"원한 문신 공명",sin:null,count:null,effect:"전투 시작시 수비 스킬을 장착한 중지 소속 아군 인격이 이번 턴 동안 일방 공격으로 받는 피해량 -20% 전투 시작시 질투 공명 4 이상이면, 조작 패널에서 자신의 양 옆의 중지 소속 아군 인격이 사용할 수 있는 반격 스킬이 있는 동안 피해로 인해 흐트러짐 상태가 되지 않음 (강제 흐트러짐 제외) - 질투 공명 6 이상이면, 모든 중지 소속 아군 인격에게 적용됨"}],
  "히스클리프|거미집 엄지 제자": [{name:"팔레르모 검술",sin:"색욕",count:"2",effect:"자신의 완성되어가는 교본 과 메인 타겟 적의 결투 고조 수치 합에 따라 다음 효과 전부 얻음 - 수치 1당, 기본 스킬로 가하는 피해량 +3% (최대 15%) - 1 : 합 위력 +1 - 2 : 기본 스킬의 기본 위력 +1 - 3 : 기본 스킬의 공격 적중 시, 다음 턴에 힘줄 절단 1 부여 - 4 : 기본 스킬의 최종 위력 +1 - 5 : 기본 스킬의 피해량 +15% 자신의 완성되어가는 교본 과 자신을 공격하는 적의 결투 고조 수치 합 1당, 받는 피해량 -3% (최대 15%)"},{name:"듀엘로 디스페라토",sin:null,count:null,effect:"적에게 기본 스킬 종료 시, - 대상이 (다른 부위를 포함하여) 결투 고조 를 보유한 채로 사망했으면, 완성되어가는 교본 1 얻음 - 메인 타겟이 사망하지 않았으면, 메인 타겟에 결투 고조 1 부여. 해당 대상과 합을 했으면, 대신 2 부여 결투 고조 를 보유한 대상과 합 시작 시, 대상의 결투 고조 수치만큼 정신력 회복 (턴당 최대 5)"},{name:"필사의 분전",sin:null,count:null,effect:"거미집 엄지 아비 로쟈가 전장에 있을 경우, 다음 효과 발동 (자신이 패닉 또는 흐트러진 턴 제외) - 거미집 엄지 아비 로쟈가 예지안 이 있을 때 적에게 기본 스킬 적중 시, 해당 공격 종료 시점에 대상에게 '팔레르모 스파다'로 일방 공격 (턴당 1회) - 전투 시작 시 거미집 엄지 아비 로쟈가 예지안 과열 이 있는 상태에서 적으로부터 일방 공격으로 지정된 스킬이 있으면, 거미집 엄지 제자 히스클리프가 원호 방어 1 얻음 (이 원호 방어 는 거미집 엄지 아비 로쟈를 대상으로만 발동)"},{name:"재회 [再会] - 엄지",sin:null,count:null,effect:"스테이지 시작시 사망한 상태거나 전투 중 사망 시, 거미집의 검 료슈 인격이 아래 효과 얻음 - 얽힘 1 얻음 - 기본 스킬로 합 승리 시 진동 2를 부여하고 진동 폭발 . 진동 횟수 1 감소 (턴당 2회)"}],
  "이스마엘|LCB 수감자": [{name:"발악",sin:"분노",count:"3",effect:"합 진행 시 자신의 체력이 25% 미만이면 합 위력 +1"}],
  "이스마엘|남부 시 협회 5과": [{name:"사선발악",sin:"질투",count:"2",effect:"자신의 체력이 50% 미만일 때 스킬 효과로 얻는 호흡 +1"}],
  "이스마엘|LCCB 대리": [{name:"약점포착",sin:"탐식",count:"3",effect:"합 승리 후 공격 적중 시마다 진동 1 부여"}],
  "이스마엘|로보토미 E.G.O::출렁임": [{name:"차오르는 액체",sin:"우울",count:"3",effect:"공격 스킬로 대상의 체력에 피해를 주지 못한 경우, 다음 턴에 최대 체력의 10%만큼 보호막을 얻음 (최대 30)"}],
  "이스마엘|에드가 가문 버틀러": [{name:"묵은 먼지 털기",sin:"우울",count:"5",effect:"속도가 자신보다 느린 적에게 크리티컬 적중 시 자신이 부여하는 부정적인 효과의 위력이 1 추가 부여됨 (턴 당 최대 3회)"}],
  "이스마엘|R사 제 4무리 순록팀": [{name:"뇌파집속",sin:"우울",count:"3",effect:"전투 시작 시 공격 위력 증가 를 (우울 공명 수/3)만큼 얻음 턴 종료시 이번 턴에 피해를 주지 못한 경우 정신력 -15"}],
  "이스마엘|남부 리우 협회 4과": [{name:"격화",sin:"분노",count:"3",effect:"대상의 화상 횟수 3당 타격 피해량 +10% (최대 30%)"}],
  "이스마엘|어금니 보트 센터 해결사": [{name:"크랲 파쇄",sin:"오만",count:"3",effect:"진동 이 있는 대상에게 공격 적중 시 침잠 횟수 1 증가"}],
  "이스마엘|피쿼드호 선장": [{name:"피쿼드호의 선장",sin:"오만",count:"3",effect:"자신의 공격 종료 시에 대상이 사망했으면, - 호흡 4, 호흡 횟수를 2 얻고, 다음 턴에 과열된 가스 작살 상태가 됨 - 자신을 제외한 정신력이 가장 낮은 아군 2명의 정신력 7 회복, 호흡 4 부여 - 대상이 피쿼드호 선원이면, 정신력 5 추가 회복, 턴 당 1회 다음 턴에 관통 위력 증가 1 부여"},{name:"사냥 시간",sin:null,count:null,effect:"대상이 &lt;호수의 존재&gt;면 피해량 +10%"}],
  "이스마엘|서부 츠바이 협회 3과": [{name:"충격상쇄 그레이트소드",sin:"오만",count:"5",effect:"전투 시작 시, 자신의 진동 횟수만큼 방어 레벨 증가 를 얻음 (최대 5) - 방어 태세 가 있으면 위 효과로 얻는 방어 레벨 증가 가 2배가 됨"}],
  "이스마엘|흑운회 부조장": [{name:"몰려드는 검은 구름",sin:"색욕",count:"3",effect:"전투 시작시 자신을 포함해 전투에 참여한 아군 흑운회 소속 인격이 2명 이상이면, 흑운도 1 얻음 전투 시작시 조작 패널에서 자신의 양 옆의 흑운회 소속 인격에게 검은 구름 1 부여 - 색욕 공명이 4 이상이면, 자신을 제외한 모든 흑운회 소속 아군에게 검은 구름 1 부여"},{name:"임전",sin:null,count:null,effect:"흑운회 소속 아군이 사망하면, 이번 전투 동안 참격 위력 증가 1 얻음 흑운회 소속 아군이 3명 이상 사망하면 이번 전투 동안 임전 을 얻음"}],
  "이스마엘|가주 후보": [{name:"파흡자환 [破吸自桓]",sin:"탐식",count:"5",effect:"자신의 공격 스킬로 대상 처치 시 대상의 파열 만큼 호흡 을 얻음 (적 1명당 최대 3, 턴 당 최대 1회) - 위 효과로 호흡 을 3까지 얻었다면, 대상의 파열 횟수만큼 자신의 호흡 횟수 증가 (적 1명당 최대 2, 턴 당 최대 1회) 합 진행 시 합을 진행하는 적보다 공격 레벨이 높으면, 합 위력 +1 합 진행 시 합을 진행하는 적보다 공격 레벨이 높으면, 기본 공격 스킬로 부여하는 파열 위력 또는 파열 횟수 +1 (턴 당 2회 발동)"},{name:"시동 [始動]",sin:null,count:null,effect:"전투에서 퇴각할 때, 아군에게 편성 순서 순으로 다음 턴에 공격 레벨 증가 1 부여 - 부여 대상 수: 자신의 시[始] 수치 - 부여 대상이 가씨 가문이면, 대신 다음 턴에 공격 레벨 증가 2 부여 - 다음 턴에 복귀, 대기 해제되는 인격에게는 부여되지 않음 대기 해제 또는 복귀로 등장한 턴에 자신이 대[待] 를 얻고, 전투 시작시 스킬 순서상 가장 먼저 '적격 - 시[始]'를 무작위 대상에게 사용함"}],
  "이스마엘|정사무소 대표": [{name:"낱장치기",sin:"나태",count:"2",effect:"뒷면 적중 시 정신력 5 회복 (턴당 1회) 사기 저하 또는 패닉 상태인 적에게 가하는 피해량 +10%"},{name:"코이코이 [こいこい]",sin:null,count:null,effect:"턴 시작 시 광【光】 이 없으면, 광【光】 위력 0, 횟수 3 얻음 턴 시작 시 '짝패'가 없으면, 짝패 - 송학 , 짝패 - 억새 , 짝패 - 청벚꽃 중 자신의 가장 왼쪽 슬롯에 존재하는 기본 공격 스킬에 대응되는 무작위 '짝패' 얻음 전투 시작시 자신의 가장 왼쪽 슬롯의 기본 공격 스킬 또는 E.G.O 스킬이 사용될 때 아래 효과 적용 (턴당 1회) - 다음 턴에 해당 스킬에 대응되는 '짝패'로 변경 - '사쿠라센' 또는 E.G.O 스킬이면, 광【光】 위력 1 얻음 - 해당 스킬 속성이 '짝패'와 일치하면, 아래 효과 적용 · 광【光】 위력 1 얻음. · 이전 턴과 연속으로 '짝패'가 일치했으면, 광【光】 위력 1 얻음 · 해당 스킬 적중 시, 진동 폭발 . 대상의 진동 횟수 1 감소 · 25% 확률로, 해당 스킬 E.G.O 자원 1 얻음 - 해당 스킬 종료시 광【光】 위력이 5거나, 횟수가 0이면, '코오쟌' 발동"}],
  "이스마엘|거미집 중지 제자": [{name:"중지는 잊지 않는다구요",sin:"질투",count:"3",effect:"턴 종료 시 이번 턴에 아군에게 스킬로 가장 많이 피해를 준 적 1명에게 앙갚음 대상 부여 자신이 적에게 피격당할 때마다 중지 - 원한 2 얻음 (턴당 2회) 자신을 제외한 중지 소속 아군이 피격당할 때마다 중지 - 원한 1 얻음 (인격 별로 턴당 1회) - 자신이나 아군을 공격한 대상이 앙갚음 대상 이면, 추가로 1 얻음 - 전투 시작 시 질투 완전 공명이 있으면, 이번 턴에 중지 - 원한 을 2배로 얻음 자신이 중지 - 원한 5 소모할 때마다 중지식 강화 문신 1 얻음 (턴당 2회) 전투 시작 시 자신에게 열선 이 없으면, 질투 공명 수의 합이 3 이상일 때 다음 턴에 열선 2 얻음 전투 시작 시 자신에게 열선 이 있으면, 턴 종료시 (질투 공명 수/3)만큼 열선 얻음 (최대 2)"},{name:"열선 무기",sin:null,count:null,effect:"이 인격은 화상 , 출혈 을 부여하는 인격으로 취급됨. 열선 효과를 보유하고 있을 시, 출혈 을 부여하는 스킬이 이 효과로 인해서 화상 과 출혈 을 부여하는 스킬로 취급됨."}],
  "이스마엘|LCD 현장추리팀": [{name:"림버스 컴퍼니 제작 특수 의체 시제품 mk5 - 도깨비팔",sin:"오만",count:"3",effect:"전투 시작 시 도깨비팔 을 얻으며, 자신을 제외한 검계 소속 아군 인격의 정신력을 (오만 공명 수)만큼 회복 전투 시작 시 자신을 제외한 현재 체력이 최대 체력의 50% 미만인 아군이 있으면, 원호 방어 1 얻음 (턴당 1회) 스킬 종료시 자신의 호흡 위력 3당, 묵 공방 - 예[銳] 2식 발도 / 추력:도깨비불 1 얻음 (최대 5, 턴당 2회)"},{name:"귀화요격",sin:null,count:null,effect:"기본 공격 스킬 종료 시 자신의 묵 공방 - 예[銳] 2식 발도 / 추력:도깨비불 이 15 이상이면, '상전 청린화' 발동 (턴당 1회) 수비 스킬 합 패배 시 신속 이 3 이상이면, 수비 스킬 종료 시까지 피해로 인해 흐트러짐 상태가 되지 않고, 피격 후 '골단' 발동 (턴당 2회, 강제 흐트러짐 제외)"},{name:"돌아가야 할 곳",sin:null,count:null,effect:"스테이지 시작 시 자신을 제외한 전장에 있는 검계 소속 아군 인격의 수 1명당, 살수본위 얻음 (최대 3) 이번 전투에서 자신을 제외한 검계 소속 인격이 3명 이상 사망한 경우 - 스킬 사용 전 자신에게 본국검술 이 없다면, 본국검술 얻음 - 자신의 스킬, 코인 효과로 호흡 위력, 횟수를 얻을 때, 호흡 위력, 횟수 1 추가 증가 - 검계 소속 인격이 5명 이상 사망한 경우, 대신 2 증가"}],
  "로쟈|LCB 수감자": [{name:"단악",sin:"분노",count:"5",effect:"공격 적중 시 50% 확률로 출혈 1 부여"}],
  "로쟈|LCCB 대리": [{name:"방어 허물기",sin:"질투",count:"3",effect:"이번 턴에 수비 스킬을 사용한 적에게 입히는 피해량 +10%"}],
  "로쟈|N사 중간 망치": [{name:"처단의 기쁨",sin:"분노",count:"5",effect:"적이 사망하면 다음 턴 시작 시 신속 1, 피해량 증가 1을 얻음. 자신이 적을 처치한 경우 광신 1을 얻음. (턴 당 1회 발동)"}],
  "로쟈|남부 츠바이 협회 5과": [{name:"방어 호흡",sin:"분노",count:"3",effect:"전투 시작 시 호흡 횟수 1마다 보호막을 2 얻음 (최대 20)"}],
  "로쟈|T사 2등급 징수직 직원": [{name:"황금 시간 - 맞서기",sin:"나태",count:"5",effect:"- 턴 종료 시 체력이 16 ~ 20% 사이로 남았을 때, 전체 체력의 60%만큼 즉시 회복, 흐트러짐 상태 해제 (전투 당 1회) - 시간 유예 를 보유한 대상과 합을 진행할 때 합 위력 +2 - 시간 유예 를 보유한 적에게 피해를 받을 때, 받는 피해량 -10%"}],
  "로쟈|흑운회 와카슈": [{name:"흑운도",sin:"색욕",count:"4",effect:"반격 시 자신의 호흡이 5 이상이면 스킬 3으로 발동"}],
  "로쟈|장미스패너 공방 대표": [{name:"빠른 퇴근을 위하여~",sin:"오만",count:"4",effect:"진동 폭발 시 충전 횟수 3을 소모하여, 진동 폭발 의 흐트러짐 피해량 +40% 진동 폭발 발동 시 다음 턴에 신속 1, 타격 피해량 증가 1 얻음"}],
  "로쟈|남부 디에치 협회 4과": [{name:"깨달음의 빛",sin:"우울",count:"5",effect:"이번 턴 동안 받은 피해량에 비례하여 다음 턴에 타격 피해량 증가 를 얻음. (보호막으로 받은 피해도 받은 피해량에 포함됨. 턴 시작 시 체력의 25%만큼 피해를 받았을 때 최대로 획득. 최대 획득값: 5) 턴 종료 시 탐구한 지식 이 3이면, 자신에게 부여된 부정적인 효과 중 1개를 제거"}],
  "로쟈|남부 리우 협회 4과 부장": [{name:"뜨거운 기세",sin:"분노",count:"3",effect:"대상의 화상 위력 6 당 피해량 +10% (최대 30%) 전투 시작 시 모든 적에게 화상 6 이상 부여되어 있으면, 아군 (최대 분노 완전 공명 수) 명에게 편성 순으로 분노 피해량 증가 1 부여 - 집중 전투에선 부위로 판정 - 대상이 리우 협회 해결사면, 공격 위력 증가 1 부여"}],
  "로쟈|북부 제뱌찌 협회 3과": [{name:"신속 배달",sin:"탐식",count:"4",effect:"턴 시작 시 속도가 6 이상이거나 신속 을 보유하였다면, 자신의 최대 체력의 ( 딜리버리 캐리어 - 로쟈 )%만큼 보호막을 얻음 (최대 20%) 퇴각 시, 다음 턴에 아군 둘에게 합 위력 증가 1 부여 (대기 해제된 인격에게 우선으로 부여되며, 그 다음으로는 편성 순서가 빠른 순으로 적용) - 자신이 보유한 딜리버리 캐리어 - 로쟈 15 당 유지 턴 수 1 증가 (최대 2턴 증가)"},{name:"한 번만 봐주면 진짜 제대로 배달 끝낼게!",sin:null,count:null,effect:"&lt;연속 전투 전용&gt; ' 전략적 휴식 복지 모드 '가 발동하여 퇴각한 다음 다시 전투에 참여할 때, 딜리버리 캐리어 - 로쟈 가 절반으로 감소 (전투당 1회, 올림하여 처리)"}],
  "로쟈|라만차랜드 공주": [{name:"경혈의 가시",sin:"색욕",count:"3",effect:"자신을 제외한 아군이 출혈 피해를 받거나 혈찬 을 소모할 때마다, 피어나는 가시 1 얻음 (턴 당 최대 5회) 자신이 기본 스킬로 가한 피해량의 20%만큼 자신의 체력 회복 (스킬당 최대 10) - 자신이 최대 체력이면, 초과하는 회복량만큼 현재 체력 비율이 가장 낮은 아군 1명의 체력 회복"},{name:"혈찬",sin:null,count:null,effect:"이 캐릭터가 전투에 등장해있거나 등장할 리스트에 포함되어 있으면, 1턴부터 모든 캐릭터가 받은 출혈 피해만큼 혈찬 이 증가함 이 캐릭터가 전투에 등장할 때 전장에 흩뿌려진 잠재된 피가 더욱 크게 드러난다."}],
  "로쟈|흑수 - 사": [{name:"흑수화 [사]",sin:"탐식",count:"5",effect:"자신에게 사완 이 있으면, 가하는 피해량 +5% 대상에게 주살【독】 이 있으면, 가하는 피해량 +5%"}],
  "로쟈|로보토미 E.G.O::눈물로 벼려낸 검": [{name:"정의의 마법소녀 / 절망의 기사",sin:"우울",count:"3",effect:"가호 상태일 때, - 공격으로 받는 피해량이 (정신력 / 2)%만큼 감소 (최대 20%) - 전투 시작 시 지키는 검 이 3 이상이면, 보호 1 얻음 - 전투 시작 시 지키는 검 이 5일 경우 효과가 강화되어, 보호 2, 합 위력 증가 1 얻음 절망 상태일 때, - 기본 스킬로 가하는 피해량이 (-정신력 / 2)%만큼 증가 (최대 20%) - 전투 시작 시 꿰뚫는 검 이 3 이상이면, 피해량 증가 1 얻음 - 전투 시작 시 꿰뚫는 검 이 5일 경우 효과가 강화되어, 피해량 증가 2, 위력 증가 1 얻음"},{name:"눈물로 벼려낸 검 - !E.G.O 장비 동기화율 초과주의!",sin:null,count:null,effect:"턴 시작 시 정신력이 0 이상이면, 가호 얻음 - 사용하는 기본 스킬이 더하기 코인을 사용하는 스킬로 적용됨 턴 시작 시 정신력이 0 미만이면, 절망 얻음 - 사용하는 기본 스킬이 빼기 코인을 사용하는 스킬로 적용됨 충전 횟수를 획득할 때, 대신 깊은 눈물 을 얻음 - 깊은 눈물 은 충전 위력의 영향을 받지 않음"},{name:"배신 당한 기사의 속삭임",sin:null,count:null,effect:"다음 효과로 인하여 정신력이 -40 미만으로 내려가지 않음 - 자신이 사용하는 기본 스킬의 정신력 감소 효과 - 아군 서포트 패시브의 정신력 감소 효과 - 눈물 벼리기 의 정신력 감소 효과 - 자신의 정신력 감소 효과 조건 중 아군 사망으로 정신력이 감소할 경우 이번 전투에서 정신력이 -45가 되는 피해를 받았을 때, 해당 턴 동안 정신력이 -44로 유지됨 (전투당 1회) (※ 정신력 피해에만 적용되며, 정신력이 변경되거나, E.G.O 스킬 사용과 같이 정신력을 소모하는 경우에는 적용되지 않음)"},{name:"부수고, 찢어, 꿰뚫는다",sin:null,count:null,effect:"꿰뚫는 검 을 보유하였다면, 기본 공격 스킬을 사용하여 적에게 적중 전에 꿰뚫는 검 을 1 소모하여 침잠 1 부여 - 이번 턴에 마지막으로 사용하는 기본 공격 스킬의 마지막 코인 적중 전에 남은 꿰뚫는 검 이 2 이상이면, 대신 전부 소모하여 그 수치만큼 침잠 추가 부여 눈물 벼리기 를 3개 보유하였다면, 기본 공격 스킬을 사용하여 적에게 마지막 코인 적중 전에 눈물 벼리기 를 전부 소모하여 침잠 3, 침잠 횟수 3을 부여하고 해당 코인의 피해량 +50% - 이 효과가 발동하였다면, 해당 턴 종료 시 정신력이 0 미만이면 정신력이 0으로 초기화 (패닉 또는 E.G.O 침식 상태일 경우, 해제). 그 후, 정신력 30 회복"}],
  "로쟈|R사 제 4무리 순록팀": [{name:"성탄절 장식된 뿔",sin:"우울",count:"2",effect:"전투 중 누적으로 충전 횟수를 10 소모할 때마다, 충전 1 얻음 적에게 침잠 위력을 부여하는 기본 공격 스킬 사용시 메인 타겟에게 침잠 이 없으면, 침잠 을 5 얻고 해당 스킬 효과로 부여하는 침잠 위력이 2배가 됨 (턴당 1회, 집중 전투면 부위로 취급) 자신의 체력이 35% 미만일 시, 기본 공격 스킬의 최종 위력 +1"}],
  "로쟈|약지 야수파 도슨트": [{name:"여기서는 조금 더 거칠게…!",sin:"색욕",count:"2",effect:"찢긴 색채 [루주] , 찢긴 색채 [블뢰] , 과감한 터치 부여량 +1"},{name:"지도 편달",sin:null,count:null,effect:"턴 시작 시 (전장에 있는 스튜던트 인격 수)만큼 경의 를 얻음 (전투당 1회) 턴 시작 시 무작위 약지 스튜던트 인격 2명에게 공격 레벨 증가 나 방어 레벨 증가 를 (전장에 있는 스튜던트 인격 수)만큼 무작위로 부여 (전투당 1회, 최대 부여량 2개, 야수파 스튜던트 우선 적용)"},{name:"야수파 - 야성적인 색채",sin:null,count:null,effect:"전투 종료시 찢긴 색채 [루주] , 찢긴 색채 [블뢰] , 과감한 터치 를 전부 보유한 적에게 다음 턴에 강렬한 색채 1 부여 - 대상이 보유한 찢긴 색채 [루주] , 찢긴 색채 [블뢰] 가 각각 3/6/9 이상이면, 대신 강렬한 색채 2/3/4 부여 (수치가 더 적은 쪽을 기준으로 함) 다음 조건 중 1개를 만족했으면, 턴 종료 시 야수파 - 마스크 드 루 얻음 - 강렬한 색채 3회 부여 시 (턴당 1회로 판정) - '크리틱' 2회 스킬 종료시 - '네 피부 아래 맥동하는 붉은 색감을 거칠게' 스킬 종료시"}],
  "로쟈|거미집 엄지 아비": [{name:"팔레르모 스파다",sin:"분노",count:"3",effect:"보유한 가속탄 이 1 이상이면, 스킬 3의 코인 위력 +1, 피해량 +25% 메인 타겟의 화상 2당, 기본 스킬로 가하는 피해량 +1% (최대 15%) - 메인 타겟에게 보호막이 있으면, 대신 기본 스킬로 가하는 피해량 +3% (최대 45%)"},{name:"예지안",sin:null,count:null,effect:"스테이지에 첫 등장 시 예지안 30 얻음 자신의 예지안 수치가 0이 되면, 예지안 이 예지안 과열 로 변경됨 예지안 이 있을 때, 다음 효과 발동 - 합 진행 시 매 합마다 가속하는 미래 1 얻음 (스킬당 5회) - 일방 공격 또는 파괴 불가 코인 공격을 당하거나 공격 스킬에 합 패배 시 '예지' 스킬 발동 (턴당 1회) 예지안 은 다음 조건에 따라 수치가 감소 - 매 합마다 예지안 1 감소 - 일방 공격 또는 파괴 불가 코인 공격을 당하여, 패시브 효과로 '예지' 스킬 발동 시 예지안 3 감소 - 합 패배 시 패시브 효과로 '예지' 스킬 발동 시 예지안 5 감소 자신의 예지안 이 예지안 과열 로 변경된 턴 종료 시, 다음 효과 발동 - 재장전 (전투당 1회) - 다음 턴 시작 시 조작 슬롯에 '처분'이 없으면, 기본 스킬 하나를 '처분'으로 변경 (가장 왼쪽 슬롯의 위 스킬 우선) 전투 중 자신의 예지안 이 0이 되거나, 흐트러짐 상태가 되거나 거미집 엄지 제자 히스클리프가 사망하였으면, 다음 턴에 신(心) - 불명예 얻음 (대기 해제 시 거미집 엄지 제자 히스클리프가 사망한 상태면, 턴 시작 시 신(心) - 불명예 얻음) 턴 종료 시 이번 턴에 처음으로 흐트러졌으면, 흐트러짐 해제 (강제 흐트러짐 제외)"},{name:"보냐텔리 가문의 수치",sin:null,count:null,effect:"가속탄 소모한 수치 1당, 호흡 2 얻음, 자신의 호흡 횟수 2 증가 가속탄 을 소모하는 코인을 굴릴 때, 가속탄 이 없는 경우에도 공격을 취소하지 않음 이 인격은 화상 , 진동 을 부여하는 인격으로만 취급됨 턴 시작 시 슬롯 내 '처분' 스킬이 있으면, 이전 턴에 가장 마지막으로 공격한 적에게 사냥 표적 부여 (집중 전투일 경우, 부위로 판정) - 대상이 없을 시, 체력이 가장 낮은 적에게 사냥 표적 부여"},{name:"재회 [再会] - 엄지",sin:null,count:null,effect:"스테이지 시작시 사망한 상태거나 전투 중 사망 시, 거미집의 검 료슈 인격이 아래 효과 얻음 - 얽힘 1 얻음 - 수비 스킬 코인 위력 +1, 보호막을 보유한 대상에게 가하는 기본 공격 스킬 피해량 +10%"}],
  "로쟈|오트쿠튀르::수선실": [{name:"수선실의 꽃가위 소리",sin:null,count:null,effect:"턴 종료시 자신의 표류 관성 횟수만큼 다음 턴에 보호막 얻음 자신의 표류 관성 위력이 2/3/5 이상이면, 기본 스킬 최종 위력 +1/+2/+3"},{name:"표류 관성",sin:null,count:null,effect:"전투 중 누적으로 자신의 표류 관성 횟수를 10 소모할 때마다 표류 관성 위력 1 얻음 자신을 제외한 두 가위를 보유한 아군의 공격 종료시 대상에게 '패턴 따기' 발동 (턴당 1회) - [사용전] 발동 대상의 마름질 표식이 2 이상이면 대신 '오려내기'로 발동 (턴당 1회)"}],
  "싱클레어|LCB 수감자": [{name:"각오",sin:"오만",count:"3",effect:"이번 턴에 아군이 사망하면 다음 턴에 공격 위력 증가 1을 얻음"}],
  "싱클레어|남부 츠바이 협회 6과": [{name:"당신의 방패",sin:"우울",count:"2",effect:"전투 시작 시 조작 패널에서 자신의 양 옆에 있는 캐릭터에게 이번 턴에 수비 위력 증가 2, 보호 1 부여"}],
  "싱클레어|마리아치 보스": [{name:"유흥",sin:"우울",count:"3",effect:"회피 성공 시 (우울 공명 수 x5)% 확률로 회피 스킬의 위력만큼 흐트러짐 회복"}],
  "싱클레어|로보토미 E.G.O::홍적": [{name:"부적 떼기",sin:"탐식",count:"3",effect:"공격 적중시 대상에게 파열 이 있으면 부적 1을 얻음"}],
  "싱클레어|어금니 보트 센터 해결사": [{name:"불안정한 출력",sin:"우울",count:"4",effect:"자신의 진동 횟수가 10 이상일 때 공격 적중 시 앞면이 나온 경우, 코인 효과로 적에게 부여하는 진동 과 진동 횟수 +1"}],
  "싱클레어|서부 츠바이 협회 3과": [{name:"보호 임무 시작",sin:"나태",count:"5",effect:"전투 시작 시, 자신의 진동 횟수만큼 방어 레벨 증가 얻음 (최대 5)"}],
  "싱클레어|검계 살수": [{name:"살수",sin:"오만",count:"2",effect:"연결한 죄 중 마지막 죄의 마지막 코인의 피해량 +20% 자신을 제외한 아군의 스킬로 호흡 횟수가 증가할 때 50% 확률로 자신의 호흡 횟수 1 증가"}],
  "싱클레어|쥐어들 자": [{name:"광염",sin:"분노",count:"2",effect:"합 승리, 적 처치 시 회복하는 정신력 50% 감소 생존한 N사 광신도가 자신을 포함하여 5명 이상 있을 때, N사 광신도들의 피해량 +10%"}],
  "싱클레어|남부 섕크 협회 4과 부장": [{name:"잠든 살기",sin:"오만",count:"5",effect:"턴 종료 시 자신의 호흡 횟수 5당 다음 턴 자신의 속도 최대값 +2 (최대 6) 전투 시작 시 모든 아군의 속도가 모든 적보다 높으면, 관통 피해량 증가 1을 얻음"}],
  "싱클레어|새벽 사무소 해결사": [{name:"스티그마 공방 무기 / 격정",sin:"분노",count:"5",effect:"- 자신이 스킬로 부여하는 화상 위력과 횟수 +1 (턴 당 최대 6회 발동) - 자신이 불안정 E.G.O 상태이고, 정신력이 0 이상이면, (자신의 정신력 / 20)만큼 코인 위력이 증가함. 자신의 정신력이 45면, 대신 코인 위력 +3"},{name:"불안정한 자아의 껍질",sin:null,count:null,effect:"- 턴 시작 시 자신의 정신력이 40 이상이면, 정신력을 20 소모하여 불안정 E.G.O::밀랍날개 상태가 됨 또는 한 턴에 아군이 2명 이상 사망했을 때, 턴 종료 시 정신력이 -45가 아니면, 정신력을 20으로 변경한 후 다음 턴에 불안정 E.G.O::밀랍날개 상태가 됨 - 불안정 E.G.O 상태가 될 때, 피해나 흐트러짐 손상으로 흐트러짐 상태가 된 경우, 흐트러짐 상태를 해제함. 해제할 수 없는 흐트러짐 상태인 경우, 불안정 E.G.O 상태가 될 수 없음 - 불안정 E.G.O 상태 동안 불안정한 격정 을 얻음 - 턴 시작 시 정신력이 0 이하면, 불안정 E.G.O 상태가 해제됨"}],
  "싱클레어|북부 제뱌찌 협회 3과": [{name:"잠시만 부탁드려요...!",sin:"탐식",count:"4",effect:"턴 시작 시 속도가 6 이상이거나 신속 을 보유하였다면, 자신의 최대 체력의 ( 딜리버리 캐리어 - 싱클레어 )%만큼 보호막을 얻음 (최대 20%) 퇴각 시, 다음 턴에 아군 둘에게 합 위력 증가 1 부여 (대기 해제된 인격에게 우선으로 부여되며, 그 다음으로는 편성 순서가 빠른 순으로 적용) - 자신이 보유한 딜리버리 캐리어 - 싱클레어 15 당 유지 턴 수 1 증가 (최대 2턴 증가)"},{name:"다음에는 제대로 배달할게요...",sin:null,count:null,effect:"&lt;연속 전투 전용&gt; ' 전략적 휴식 복지 모드 '가 발동하여 퇴각한 다음 다시 전투에 참여할 때, 딜리버리 캐리어 - 싱클레어 가 절반으로 감소 (전투당 1회, 올림하여 처리)"}],
  "싱클레어|중지 작은 아우": [{name:"중지는 잊지 않아",sin:"질투",count:"3",effect:"자신이 적에게 피격당할 때마다, 공격자(또는 부위)에게 복수 대상 5 부여 (턴당 1회) 자신을 제외한 아군이 적에게 피격당할 때마다, 공격자(또는 부위)에게 복수 대상 2 부여 (인격 별로 턴당 1회) - 아군이 중지 소속이면, 복수 대상 3 추가로 부여 기본 공격 스킬 또는 반격 스킬 공격 종료 시, 대상의 복수 대상 을 전부 소모 - 적의 복수 대상 을 소모할 때마다, 그 수치만큼 앙갚음 장부 [싱클레어] 얻음"}],
  "싱클레어|동부 엄지 솔다토 II": [{name:"탄환 상납",sin:"오만",count:"3",effect:"탄환 을 쓰는 인격 중 편성 순서가 가장 빠른 아군 1명의 공격이 종료되었을 때, 해당 인격의 현재 보유 탄환 이 절반 미만이면(소수점 올림), 해당 인격이 소모한 수만큼 자신의 작열 추진탄 을 소모하고, 작열 추진탄 을 소모한 만큼 해당 인격이 사용하는 탄환 을 보급함. (최대 소모 값 : 5개) (전투당 1회) - 탄환 을 보급받는 인격이 자신보다 계급이 높은 엄지 소속 인격이면, 해당 인격이 사용하는 탄환 을 1개 더 보급함. - 위력, 횟수가 분리된 탄환 은 위력, 횟수를 무작위로 보급함 - 만약 위력 또는 횟수가 최댓값인 경우, 최댓값이 아닌 쪽의 탄환 으로 보급함"},{name:"총검술",sin:null,count:null,effect:"상시 적용: 작열 추진탄 15 보유 스킬이나 패시브로 작열 추진탄 을 소모했다면, 다음 턴에 소모한 만큼 피해량 증가 를 얻음 (턴 당 최대 3) 작열 추진탄 을 소모하는 코인을 굴릴 때, 작열 추진탄 이 없는 경우에도 공격이 취소되지 않는 대신 해당 코인의 적중 시 화상 부여, 화상 횟수 증가 효과가 발동하지 않음"}],
  "싱클레어|흑수 - 유": [{name:"싸움에 취해보죠",sin:"분노",count:"3",effect:"파열 이 7 이상 부여된 대상에게 적중 시 (최대 공명 수) × 15% 확률로 화상 1 부여 (턴 당 4회) 전투 종료시 자신에게 화상 이 있으면, 다음 턴 시작시 혈염 [血炎] 1, 분노 피해량 증가 1, 탐식 피해량 증가 1 얻음 전투 시작 시 자신의 잃은 체력 20% 당 공격 레벨 증가 , 방어 레벨 증가 1 얻음 (최대 3)"},{name:"투계",sin:null,count:null,effect:"홍원 군주 홍루와 존명 발동 시, 홍원 군주 홍루가 흑수환염[黑獸丸染] 으로 아래 효과 얻음 - 스킬로 파열 위력 또는 횟수 부여 시, 화상 1 부여 (턴 당 3회) 화상 피해로 흐트러짐 상태가 되거나 체력이 1 미만으로 감소하지 않음. 대기 해제 또는 복귀로 등장한 턴에 혈염 [血炎] 3 얻음"}],
  "싱클레어|거미집 소지 제자": [{name:"정검[整劍]",sin:"오만",count:"2",effect:"전투 시작 시, (오만 공명 수 / 2) + 1만큼 호흡 얻음 (최대 4, 소수점 버림) 전투 종료 시 자신의 호흡 이 20 이상이면, 자신의 호흡 횟수 1 증가"},{name:"정신일도",sin:null,count:null,effect:"턴 종료 시 25를 초과하는 호흡 위력을 최대 15까지 월하청도 로 전환 전투 시작시 자신이 이번 턴에 (E.G.O 스킬 포함) 공격 스킬을 장착하지 않았으면, 정신력을 5 회복하고 다음 턴에 참격 위력 증가 1 얻음"}],
  "오티스|LCB 수감자": [{name:"처형",sin:"나태",count:"4",effect:"대상의 정신력이 0 미만일 때 피해량 +10%"}],
  "오티스|검계 살수": [{name:"냉정",sin:"오만",count:"2",effect:"체력이 25% 미만인 적 공격 시 피해량 +20%"}],
  "오티스|G사 부장": [{name:"사기진작",sin:"나태",count:"2",effect:"다음 턴 시작 시 자신과 이번 턴에 조작 패널에서 자신의 양옆에 있는 아군에게 신속 2 부여"}],
  "오티스|남부 섕크 협회 4과": [{name:"흘리기",sin:"오만",count:"3",effect:"회피 성공 시 다음 턴에 신속 1을 얻고, 자신의 흐트러짐 5 회복 (턴 당 최대 3회)"}],
  "오티스|약지 점묘파 스튜던트": [{name:"여러 점",sin:"색욕",count:"4",effect:"전투 시작 시 부정적인 효과를 가장 적게 보유한 적 2명에게 화상 , 출혈 , 진동 , 파열 , 침잠 중 무작위 1개 효과 2 부여"},{name:"혈점묘파",sin:null,count:null,effect:"이 인격은 출혈을 부여하는 인격으로만 취급됨. 랜덤으로 화상, 출혈, 진동, 파열, 침잠을 부여하는 스킬이 이 효과로 인해서 해당 키워드를 부여하는 스킬로 취급되지 않음."}],
  "오티스|남부 세븐 협회 6과 부장": [{name:"약점 파악",sin:"탐식",count:"3",effect:"상대의 약점이나 취약 속성으로 공격할 때 피해량 +10%"}],
  "오티스|어금니 사무소 해결사": [{name:"무용담",sin:"나태",count:"5",effect:"적에게 진동 폭발 시 흐트러짐 손상의 30%만큼 나태 속성 피해를 입힘 (최대 20. 소수점 버림)"}],
  "오티스|로보토미 E.G.O::마탄": [{name:"사수의 파이프",sin:"오만",count:"3",effect:"메인 공격 대상의 방어 레벨이 4 이상 감소된 상태면, 공격 시작 전 메인 공격 대상의 화상 만큼 호흡 을 얻음 (턴당 최대 20)"}],
  "오티스|워더링하이츠 치프 버틀러": [{name:"마님의 소리가…!",sin:"우울",count:"3",effect:"- 정신력이 0 미만인 대상과 합 진행 시 합 위력 +1, 피해량 +20% - 저택의 메아리 가 있는 대상에게 가하는 피해량 +30% - 모든 코인이 남은 상태로 합 승리 시 정신력 10 회복. 정신력이 이미 최대라면 다음 턴에 공격 레벨 증가 3 얻음 (턴 당 2회)"}],
  "오티스|W사 3등급 정리 요원 팀장": [{name:"과충전 / 정리 지시",sin:"질투",count:"3",effect:"전투 동안 누적으로 자신의 충전 횟수를 10 소모할 때마다 충전 을 1 얻음 턴 종료 시, 자신을 포함한 W사 직원 ( 충전 )명에게 편성 순서가 가장 뒤인 순으로 다음 턴에 합 위력 증가 1 부여 (최대 부여 대상 수: 5명)"}],
  "오티스|라만차랜드 이발사": [{name:"그 옷이 아니야!!!",sin:"색욕",count:"3",effect:"재봉 대상 과 합을 할 때, 합 위력 +1 적중시 자신의 누적 소모 혈찬 10 당 피해량 +1.5% (최대 30%) 적중시 대상의 출혈 당 피해량 +0.5% (최대 10%)"},{name:"혈찬",sin:null,count:null,effect:"이 캐릭터가 전투에 등장해있거나 등장할 리스트에 포함되어 있으면, 1턴부터 모든 캐릭터가 받은 출혈 피해만큼 혈찬 이 증가함 이 캐릭터가 전투에 등장할 때 전장에 흩뿌려진 잠재된 피가 더욱 드러난다."}],
  "오티스|흑수 - 묘": [{name:"흑수화 [묘]",sin:"탐식",count:"3",effect:"자신에게 각력【묘】 가 있고 대상에게 주살【신속】 이 있으면 각력【묘】 당 가하는 피해량 +5% (최대 15%)"}],
  "오티스|T사 3등급 강력징수직 직원": [{name:"황금 시간 - 공진",sin:"나태",count:"5",effect:"턴 종료 시 체력이 10 ~ 20% 사이로 남았을 때, 전체 체력의 80%만큼 즉시 회복, 흐트러짐 상태 해제 (전투 당 1회) 자신이 시간 대여 상태면, 자신의 스킬 최종 위력 +1"}],
  "오티스|LCA 우제트 선봉 3팀 팀장": [{name:"선봉대",sin:"우울",count:"3",effect:"자신의 보호 1당, 피해량 +5% (최대 15%) 전투 시작 시 우제트의 눈 [선봉] 2 얻음"},{name:"호루스의 셉터 - 레플리카",sin:null,count:null,effect:"턴 시작 시 적에게 패닉 타입 변경 효과가 있으면, 우제트의 눈 [선봉] 1 얻음 자신에게 우제트의 눈 [선봉] 이 있으면, 기본 공격 스킬 적중 시 셰우트의 균열 1 부여 (턴당 최대 15) - LCA 균열탄 을 소모한 경우, 소모한 LCA 균열탄 만큼 추가 부여 자신의 기본 스킬, 우제트의 눈 [선봉] 을 통해 얻는 보호 수치의 총합은 매 턴마다 최대 5를 넘을 수 없음"}],
  "오티스|거미집 중지 아비": [{name:"앙갚음 장부 - 거미집 특별 조항",sin:"질투",count:"3",effect:"턴 종료 시 해당 턴에 아군에게 스킬로 가장 많이 피해를 준 적 1명에게 앙갚음 대상 을 부여 턴 종료 시 해당 턴에 자신에게 스킬로 가장 많이 피해를 준 적 1명에게 앙갚음 장부 [거미집] 을 부여 전투 시작 시 질투 공명 1당 중지 - 원한 1 얻음 (최대 7) 전투 중 아래 조건을 만족 시 중지 - 원한 2 얻음 - 자신이 다른 캐릭터의 스킬로 피격 시 (턴당 2회) - 거미집 중지 제자 이스마엘이 다른 캐릭터의 스킬로 피격 시 (턴당 1회) 전투 중 아래 조건을 만족 시 중지 - 원한 1 얻음 (자신과 중지 제자 이스마엘은 대상에서 제외) - 중지 소속 아군이 다른 캐릭터의 스킬로 피격 시 (인격별 턴당 1회) - 거미집 소속 아군이 다른 캐릭터의 스킬로 피격 시 (인격별 턴당 1회) 자신이 중지 - 원한 을 얻을 때 대상이 앙갚음 대상 이면, 추가로 1 얻음 자신이 중지 - 원한 을 5 소모할 때마다 중지 - 원한 문신 [ 큰 누님 ] 1 얻음 [거미집 중지 제자 이스마엘 전용 효과] 거미집 중지 아비 오티스가 다른 캐릭터의 스킬로 피격 시, 이스마엘이 중지 - 원한 2 얻음 (턴당 1회)"},{name:"피와 불의 냄새",sin:null,count:null,effect:"이 인격은 화상 , 출혈 을 부여하는 인격으로 취급됨. 자신의 검이 1단계 봉인 해제 또는 2단계 봉인 해제 상태면, 출혈 을 부여하는 스킬이 이 효과로 인해서 화상 과 출혈 을 부여하는 스킬로 취급됨."},{name:"봉인된 검 [레바테인]",sin:null,count:null,effect:"스테이지에 첫 등장 시, 봉인된 검 얻음 각 검의 단계 효과를 얻으면, 달아오르는 재미 를 아래 수치에 맞게 얻음 - 봉인된 검 : 1 - 1단계 봉인 해제 : 2 - 2단계 봉인 해제 : 2 아래 조건 만족 시 달아오르는 재미 1 감소 (턴당 1회) - '원한 스탬핑' 사용 시 (반격으로 발동 포함) - 질투 완전 공명 수의 합이 6 이상이면, 해당 턴 종료 시 달아오르는 재미 가 0이면, 자신의 스킬 종료 시 '포장을 뜯어볼까'로 일방 공격함 - 턴 종료 시 달아오르는 재미 가 0이고, 해당 턴에 '포장을 뜯어볼까'를 사용하지 못했으면, 다음 턴 전투 시작 시 해당 스킬 사용 - 자신의 검이 봉인된 검 상태일 때 자신의 체력이 80% 미만이면, 달아오르는 재미 와 상관없이 해당 스킬 사용 자신의 체력이 50% 이하면, 초근성 3 얻음 (전투당 1회) 전투에서 처음으로 흐트러지면, 턴 종료 시 흐트러짐을 해제하고 중지 - 원한 15 얻음 턴 시작 시 자신의 중지 - 원한 이 15면, 자신의 조작 슬롯의 기본 스킬 하나를 '원한 스탬핑' 또는 '즉결처형'으로 변경 (전투당 3회) - 가장 왼쪽 슬롯의 아래 스킬만 적용 - 해당 슬롯에 이미 해당 스킬이 있는 경우 발동하지 않음 \"도시 깊은 곳에 있는 유적. 어느 깊이를 지나고 나면, 그 아래는 도시에 속하지 않는다. 이것은 그러한 유적에서 종말을 기다리던 존재들 중 하나가 휘둘렀다는 검의 편린이자, 그 힘 전부가 잠들어 있는 잔재다. …라고 말씀해주셨죠. 그 전설대로, 정말 멋진 검입니다. 형님, 누님.\""},{name:"자식 교육",sin:null,count:null,effect:"거미집 중지 제자 이스마엘이 자신과 함께 전장에 있으면, 아래 효과 발동 - 자신의 합 승리 시 잘 봐둬라 딸! 1 얻음 (턴당 1회, 해당 턴에 자신이 처음 사용한 스킬이면, 추가로 1 얻음) - 자신의 스킬 적중 시 잘 봐둬라 딸! 1 얻음 (턴당 1회, 파괴된 코인이면, 얻지 않음) [거미집 중지 제자 이스마엘 전용 효과] - 이스마엘이 합 승리 시 칭찬 받았다! 1 얻음 (턴당 1회, 해당 턴에 이스마엘이 처음 사용한 스킬이면, 추가로 1 얻음) - 이스마엘이 스킬 적중 시 칭찬 받았다! 1 얻음 (턴당 1회, 해당 스킬이 반격으로 사용한 스킬 3이면, 칭찬 받았다! 추가로 1 얻음.)"},{name:"재회[再会] - 중지",sin:null,count:null,effect:"스테이지 시작 시 사망한 상태거나 전투 중 사망 시, 거미집의 검 료슈가 아래 효과 얻음 - 얽힘 1 얻음 - 받는 피해 -20% - 피격 시 공격 레벨 증가 1 얻음 (턴당 2회)"},{name:"딸램… 고맙다.",sin:null,count:null,effect:"레바테인 상태면, 체력이 20% 미만인 아군이 적과의 합에서 패배했을 때 해당 적을 메인 타겟, 해당 아군을 서브 타겟으로 타겟팅한 '가족을 위해 희생하는 딸램의 마음, 잊지 않고 갚아주지'를 사용함 (전투당 1회) - 거미집 중지 제자 이스마엘은 체력 조건을 대신 30%로 판정함 해당 스킬로 중지 소속 아군을 처치했을 경우, 다음 턴에 질투 피해량 증가 1 얻음 - 거미집 중지 제자 이스마엘을 처치했을 경우, 대신 다음 턴에 가족의 복수 얻음"}],
  "그레고르|LCB 수감자": [{name:"강제생존",sin:"우울",count:"3",effect:"전투 시작 자신의 체력 5 회복"}],
  "그레고르|남부 리우 협회 6과": [{name:"발화",sin:"나태",count:"3",effect:"스킬의 3번째 코인부터 적중 시 화상 1 부여"}],
  "그레고르|료.고.파. 조수": [{name:"파이 포장",sin:"색욕",count:"4",effect:"전투 시작 시 자신의 체력 8 회복"}],
  "그레고르|장미스패너 공방 해결사": [{name:"톱날 가동",sin:"탐식",count:"4",effect:"진동 이 있는 대상에게 부여하는 파열 +1"}],
  "그레고르|흑운회 부조장": [{name:"흑운도",sin:"색욕",count:"4",effect:"합 승리 시 출혈 1 부여 (턴 당 3회)"}],
  "그레고르|G사 일등대리": [{name:"긴급 식량보급",sin:"탐식",count:"4",effect:"체력이 25% 미만이면 합 승리 시 5%만큼 체력 회복"}],
  "그레고르|남부 츠바이 협회 4과": [{name:"전투 방패",sin:"나태",count:"5",effect:"전투 시작 시 자신이 2개 이상의 공격 타겟이 되었으면, 방어 레벨 증가 2를 얻음 전투 시작 시 자신의 체력이 50% 미만이면, 방어 레벨 증가 3을 얻음"}],
  "그레고르|쌍갈고리 해적단 부선장": [{name:"총알은 비싸다고",sin:"오만",count:"2",effect:"- 상시 적용: 탄환 7 보유 - 출혈 이 부여된 대상에게 앞면 적중시 부당 수익 을 얻음. (최대 4) - 탄환 소모하는 코인 적중 시 부당 수익 을 전부 소모하여, 피해량의 (25 x 소모한 부당 수익 )% 만큼 추가 피해를 줌. - 탄환 이 없는 경우, 대신 크리티컬 적중 시 부당 수익 을 전부 소모하여, (5 x 소모한 부당 수익 )% 만큼 추가 피해를 줌."}],
  "그레고르|에드가 가문 승계자": [{name:"끝 없는 악몽",sin:"우울",count:"3",effect:"- 전투 시작 시 이전 턴 시작 시와의 정신력 차이 5 당 피해량 증가 1, 취약 1 얻음 (최대 5). 대상의 침잠 위력 1 당 피해량 +2% (최대 40%)"}],
  "그레고르|라만차랜드 신부": [{name:"자멸적 헌신",sin:"색욕",count:"5",effect:"턴 종료 시, 가장 정신력이 낮은 아군의 정신력을 (10 - 자신의 닳아버린 마음 )만큼 회복시킴 (자신 또는 패닉, E.G.O 침식 상태인 아군 제외) 이번 전투에서 체력이 0이 되는 피해를 받았을 때, 해당 피해를 받지 않고, 해당 턴 동안 체력이 1로 유지됨 (전투 당 1회)"},{name:"혈찬",sin:null,count:null,effect:"이 캐릭터가 전투에 등장해있거나 등장할 리스트에 포함되어 있으면, 1턴부터 모든 캐릭터가 받은 출혈 피해만큼 혈찬 이 증가함 이 캐릭터가 전투에 등장할 때 전장에 흩뿌려진 잠재된 피가 더욱 드러난다."}],
  "그레고르|불주먹 사무소 생존자": [{name:"나만 살아남아버렸어...",sin:"분노",count:"3",effect:"자신이 이번 전투에서 소모한 12구산 연료 , 과열 연료 당 피해량 +0.2% (최대 40%) - 메인 타겟이 &lt;혈귀&gt;, &lt;피주머니&gt;거나, 대상의 화상 과 화상 횟수의 합이 30 이상이면, 대신 피해량 +0.3% (최대 60%) 12구산 연료 , 과열 연료 가 1 이상일 때, 화상 이 부여된 적을 흐트러짐 상태로 만들거나 처치하면 화상 이 없거나 화상 횟수가 가장 낮은 무작위 적 2명의 화상 횟수 2 증가 (턴 당 1회) - 집중 전투인 경우 부위에 부여"},{name:"12구산 특제 공방 연료",sin:null,count:null,effect:"12구산 연료 100을 가지고 시작 - 수치가 50 초과면, 12구산 연료 로 교체됨 - 수치가 50 이하면, 12구산 연료 가 과열 연료 로 교체됨"}],
  "그레고르|흑수 - 사": [{name:"흑수화 [사]",sin:"탐식",count:"5",effect:"대상에게 주살【독】 이 있으면, 자신의 사완 당 피해량 +5% (최대 15%) 자신이 주살【독】 을 소모시켜 수치를 0으로 만들었으면, 다음 턴에 관통 피해량 증가 1 얻음 (최대 2)"}],
  "그레고르|밤의 송곳 카피타노": [{name:"패밀리의 숙청인",sin:"색욕",count:"2",effect:"자신이 적 처치 또는 부위 파괴 시, 다음 턴에 관통 위력 증가 2 얻음, 기본 공격 스킬 사용 시 대상의 속도가 자신보다 느리면 속도 차이 2당, 대상에게 수비 위력 감소 1 부여 (턴당 최대 2) 아군이 적에게 기본 공격 스킬 종료 시 적(본체)의 체력이 20% 이하인 경우, 대상에게 '메르체' 사용 (턴당 1회) - 공격 종료 시 생존한 적이 1명이면, 대상이 흐트러짐 상태일 때에도 발동"},{name:"고통 없는 자비",sin:null,count:null,effect:"밤의 송곳 카피타노 그레고르의 '메르체'는 외부 효과로 재사용된 경우를 제외하고 턴당 최대 2회 사용 가능"}],
  "그레고르|로보토미 E.G.O::램프": [{name:"등불과 같은 눈",sin:"우울",count:"2",effect:"전투 시작 시 우울 공명 2당 램프 1 얻음 (최대 3) 전투 시작 시 현혹 이 부여된 적이 있으면, 정신력 5 회복 턴 종료 시 아래의 조건에 포함되지 않는 아군 중 가장 빠른 아군에게 다음 턴에 숲의 파수꾼 부여 - 자기 자신 - 숲의 파수꾼 을 보유한 아군 - 패닉/침식 등의 정신력 회복이 불가능한 아군"},{name:"현혹의 램프",sin:null,count:null,effect:"턴 시작 시 램프 1 얻음 속도의 최솟값과 최댓값이 외부 효과의 영향으로 변동되지 않음 스킬 지정 시 속도에 관계없이 공격 스킬의 공격 대상을 자신으로 변경할 수 있음 (집중 전투 전용) 신속 을 얻을 때, 대신 합 위력 증가 1 얻음 (턴당 1회) - 이후 이번 턴에 신속 을 얻을 수 없음"},{name:"E.G.O 장비 숙련 매뉴얼",sin:null,count:null,effect:"턴 시작 시 E.G.O 장비를 착용한 아군 1명당, 방어 레벨 증가 1 얻음 (최대 3) 아군 사망 시 다음 턴에 관통 피해량 증가 2 얻음 (턴당 1회)"}],
  "그레고르|LCE E.G.O::AEDD": [{name:"앞으로 나서게, 지원하도록 하지",sin:"우울",count:"2",effect:"전투 시작 시, 자신의 충전 횟수 10 증가 (전투당 1회) 전투 종료 시 자신의 충전 횟수가 12를 초과하면, 초과한 충전 횟수를 최대 8까지 소모하고 이 효과로 소모한 수치의 절반만큼 아군 1명의 충전 횟수 증가 (소수점 올림) - 자신보다 편성 순서가 빠른 아군 중 충전 횟수가 낮은 아군에게 우선 적용 - 전장에 자신보다 편성 순서가 빠른 아군이 없거나 자신의 충전 이 3 이상이면, 이 효과가 비활성화 우울 또는 질투 공명이 2 이상이면, 다음 턴에 자신보다 편성 순서가 빠른 아군의 충전 횟수 2 증가 - 편성 순으로 (우울, 질투 중 높은 공명의 수 - 1)명에게 효과 적용 (최대 3명) - 자신의 충전 이 3 이상이면, 대신 아군의 충전 횟수 4 증가 - 전장에 자신보다 편성 순서가 빠른 아군이 없으면, 대신 자신의 충전 횟수 4 증가"},{name:"끈질긴 생명력",sin:null,count:null,effect:"전투 중 누적으로 자신의 충전 횟수를 10 소모할 때마다 충전 1 얻음 충전 역장 을 얻을 때, 고전압 외피 로 전환되어 얻음 자신의 충전 이 3 이상이면, 속도 최솟값, 최댓값 +1 이번 전투에서 체력이 0이 되는 피해를 받았을 때, (5 + 자신의 충전 × 3)만큼 자가 충전 얻음 (최대 20, 전투당 1회)"},{name:"교류 방출 지원",sin:null,count:null,effect:"턴 시작 시 E.G.O 장비를 착용한 아군이 자신 포함 셋 이상이면, 자신과 해당 아군 전부 공격 레벨 증가 1 얻음 그레고르의 E.G.O인 AEDD의 패시브 효과로 충전 횟수를 소모할 때 자신의 충전 횟수가 12 이하면, 앞면 적중 시 자신의 충전 횟수 2를 소모하는 대신, 보호막 또는 체력을 4씩 소모하여 효과 발동 - 체력이 25% 이상인 경우에만 발동"}],
  "그레고르|새벽 사무소 대표": [{name:"모르겐포이어 [스티그마 공방]",sin:"분노",count:"2",effect:"자신에게 새벽맞이 가 있을 때, 기본 공격 스킬 적중시 새벽불 2 얻음 자신 이외의 새벽 사무소 소속 인격이 다음 조건 만족 시, 새벽 사무소 대표 그레고르가 대상 적에게 '여명의 섬광' 사용 - 기본 스킬 공격 종료 시 적중한 적이 흐트러졌을 때, 대상에게 사용 (해당 스킬 공격 시작 전 이미 흐트러짐 상태였으면 발동하지 않음) - 새벽 사무소 해결사 파우스트의 '사출', '사출-정오', '정오의 해체' 또는 새벽 사무소 해결사 싱클레어의 '낙인', '타오르는 일격' 공격 종료 시, 적중한 적에게 사용 (흐트러진 대상 우선) 새벽 사무소 해결사 싱클레어가 전장에 있으면, 새벽 사무소 대표 그레고르가 사용하는 기본 스킬의 추가된 코인 적중 시 대상 적의 화상 위력만큼 분노 피해를 추가로 입힘 (최대 10, 턴당 최대 20) - 화상 이 발동한 것으로 취급 A+급의 공방 무기. 해결사로서 처음 일을 시작했을 때부터 연기 전쟁과 그 이후까지, 새벽녘의 해결사의 손에서 휘둘러진 검. 새벽녘의 해결사가 실적을 쌓을 때마다 스티그마 공방의 유명세는 높아졌고, 그에 대한 보답으로 스티그마 공방에서 몇 번이고 그를 위해 이 검을 개량해 주었다. 쌓아온 관록과도 같이, 이 검 또한 단조되고 개선되어 왔다. 그렇게 한때 S급이라는 평가를 받았던 무기였지만, 새벽녘의 해결사가 일선에서 물러나 다음 세대를 가르치는 사이, 필연적으로 모르겐포이어의 열기는 식어가고, 날 끝은 무뎌져 갔다."},{name:"새벽녘의 해결사",sin:null,count:null,effect:"스테이지 첫 등장 시 새벽불 0 얻음 화상 피해로 흐트러짐 상태가 되거나 체력이 1 미만으로 감소하지 않음 화상 효과로 받는 피해량 -50% - 체력이 50% 미만이면 효과가 강화되어, 화상 효과로 받는 피해량 -75%"},{name:"새벽 사무소",sin:null,count:null,effect:"스테이지 첫 등장 시 자신을 포함한 전장에 있는 새벽 사무소 소속 인격이 2명 이상이면, 모든 새벽 사무소 소속 인격에게 해당 인원 수만큼 새벽 사무소 부여 새벽 사무소 해결사 싱클레어가 전장에 있으면, 다음 효과 발동 - 새벽 사무소 해결사 싱클레어가 새벽에서 노을로 얻음 - 새벽 사무소 대표 그레고르가 사망한 상태면, 턴 시작 시 새벽 사무소 해결사 싱클레어가 보유한 새벽에서 노을로 가 타오르는 노을 로 변경됨 - 턴 시작 시 새벽 사무소 해결사 싱클레어의 체력이 50% 미만이면, 도주 장치 부여"}],
};

const IDENTITY_SPECIAL_SKILLS = {
  "이상|흑수 - 오 필두": [{name:"흑풍마각월참 [黑風馬脚月斬]",sin:"탐식",power:"5",coin:"+3",coinCount:0,coinEffects:{1:"파괴 불가 코인 [적중시] 파열 3 부여 [적중시] 진동 4 부여",2:"파괴 불가 코인 [적중시] 파열 횟수 2 증가 [적중시] 진동 횟수 2 증가",3:"파괴 불가 코인 [적중시] 뇌진탕 1 부여",4:"파괴 불가 코인 [적중시] 진동 폭발 . 대상의 진동 횟수 1 감소. [적중시] 진동 폭발 . 대상의 진동 횟수 1 감소."},refNote:"스킬 3 참조",attachTo:"skill3",tier:3}],
  "이상|거미집 검지 아비": [{name:"Furioso-Replica",sin:"분노",power:"3",coin:"+3",coinCount:9,coinEffects:{9:"이 코인의 무기는 낫으로 확정 크리티컬 피해량 +90% [파괴되지 않고 적중시] 침잠 횟수 3 증가"},refNote:"3스킬 참조",attachTo:"skill3",tier:3}],
  "이상|LCE E.G.O::차원찢개": [{name:"사차각 왜곡 시계열 절단",sin:"질투",power:"5",coin:"+3",coinCount:4,coinEffects:{1:"[적중시] 사색 차원 1 얻음 [적중시] 파열 1 부여 [적중시] 이 코인 최종 피해량의 5%만큼 모든 공격 대상에게 참격 피해",2:"[적중시] 사색 차원 1 얻음 [적중시] 파열 1 부여 [적중시] 이 코인 최종 피해량의 5%만큼 모든 공격 대상에게 참격 피해",3:"[적중시] 사색 차원 1 얻음 [적중시] 파열 1 부여 [적중시] 이 코인 최종 피해량의 5%만큼 모든 공격 대상에게 참격 피해",4:"[적중시] 자신의 충전 횟수 1 증가 [적중시] 파열 2 부여 [적중시] 차원 균열 2 부여 [적중시] 이 코인 최종 피해량의 5%만큼 모든 공격 대상에게 참격 피해 [적중시] 자신의 충전 위력이 5 이상이면, 이 코인 재사용 (스킬당 1회)"},refNote:"스킬 3 참조",attachTo:"skill3",tier:3}],
  "파우스트|LCE E.G.O::홍염살": [{name:"홍염살 최대 감응 【열화침식】",sin:"분노",power:"5",coin:"+4",coinCount:0,coinEffects:{1:"파괴 불가 코인 [적중시] 화상 4 부여",2:"파괴 불가 코인 [적중시] 화상 4 부여",3:"파괴 불가 코인 [적중시] 자신의 잃은 체력 20% 당, 피해량 +10% (최대 30%)"},refNote:"스킬 3 참조",attachTo:"skill3",tier:3}],
  "파우스트|흑수 - 묘 필두": [{name:"흑수 묘 오의 - 운해현현",sin:"탐식",power:"5",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 파열 횟수 1 증가 [적중시] 주살【파】 부여 [적중시] 주살【신속】 부여",2:"[적중시] 파열 1 부여",3:"자신의 속도가 10 이상이면, 피해량 +30% [적중시] 파열 3 부여 [적중시] 자신의 속도가 10 이상이면, 코인 1회 재사용 (스킬 당 1회) [재사용 적중시] 주살【파】 부여 [재사용 적중시] 주살【신속】 부여"},refNote:"스킬 3 참조",attachTo:"skill3",tier:3},{name:"초속호위",sin:"탐식",power:"4",coin:"+10",coinCount:0,coinEffects:{1:"파괴 불가 코인"},refNote:"원호 방어 참조",attachTo:"defense",tier:1}],
  "파우스트|동부 시 협회 3과": [{name:"섬궁【閃弓】",sin:"색욕",power:"4",coin:"+4",coinCount:1,coinEffects:{1:"[적중시] 박힌 화살 1 부여, 부여 성공시 화살 - 시 1 감소 [적 처치 시] 다음 턴에 절명 1 얻음 [크리티컬 적 처치 시] 자신의 호흡 횟수 4 증가"},refNote:"저격 자세 참조",attachTo:"skill3",tier:3},{name:"회피",sin:"색욕",power:"4",coin:"+10",coinCount:1,coinEffects:{},refNote:"수비 스킬 참조",attachTo:"defense",tier:1}],
  "파우스트|거미집 약지 제자": [{name:"도축 - 갈비뼈",sin:"탐식",power:"3",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 출혈 횟수 1 증가",2:"[적중시] 다음 턴에 방어 레벨 감소 2 부여 (턴당 1회) [적중시] 다음 턴에 방어 레벨 증가 2 얻음 (턴당 1회)"},refNote:"패시브 참조",attachTo:"skill1",tier:1},{name:"파시아 식사 시간이네요",sin:"질투",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 출혈 횟수 2 증가",2:"[적중시] 다음 턴에 속박 1 부여 (턴당 1회) [적중시] 다음 턴에 신속 1 얻음 (턴당 1회)",3:"[적중시] 자신의 생체 재료 횟수 4 증가"},refNote:"패시브 참조",attachTo:"skill2",tier:2},{name:"억압당한 육체의 해방",sin:"색욕",power:"4",coin:"+3",coinCount:4,coinEffects:{1:"[적중시] 출혈 4 부여",2:"[적중시] 다음 턴에 속박 1 부여 (턴당 1회) [적중시] 다음 턴에 신속 1 얻음 (턴당 1회)",3:"[적중시] 다음 턴에 피해량 감소 1 부여 (턴당 1회) [적중시] 다음 턴에 참격 피해량 증가 1 얻음 (턴당 1회)",4:"대상의 부정적인 효과 1개당, 피해량 +5% (최대 30%) [적중시] 출혈 횟수 1 증가"},refNote:"패시브 참조",attachTo:"skill3",tier:3},{name:"시작된 전시회",sin:"색욕",power:"4",coin:"+10",coinCount:1,coinEffects:{},refNote:"패시브 참조",attachTo:"defense",tier:1},{name:"반달리즘은 사절입니다",sin:"색욕",power:"4",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 출혈 횟수 1 증가",2:"[적중시] 출혈 2 부여"},refNote:"원호 방어 참조",attachTo:"defense",tier:1}],
  "파우스트|새벽 사무소 해결사": [{name:"연계",sin:"탐식",power:"4",coin:"+3",coinCount:2,coinEffects:{1:"[적중시] 진동 횟수 1 증가 (턴당 2회)",2:"[적중시] 화상 횟수 1 증가 (턴당 2회)"},refNote:"패시브 참조",attachTo:"skill1",tier:1},{name:"사출-정오",sin:"분노",power:"5",coin:"+4",coinCount:0,coinEffects:{1:"파괴 불가 코인",2:"파괴 불가 코인",3:"파괴 불가 코인 이 코인 재사용 (최대 2회) 전투 감각 이 있으면, 피해량 +(대상의 화상 위력/2)% (최대 20%) [적중시] 진동 폭발 . 대상의 진동 횟수 1 감소 (스킬당 3회)"},refNote:"스킬 3 참조",attachTo:"skill3",tier:3},{name:"정오의 해체",sin:"분노",power:"5",coin:"+4",coinCount:0,coinEffects:{1:"파괴 불가 코인",2:"파괴 불가 코인",3:"파괴 불가 코인 이 코인 재사용 (최대 2회) 전투 감각 이 있으면, 피해량 +(대상의 화상 위력)% (최대 20%) [적중시] 진동 폭발 . 대상의 진동 횟수 1 감소 (스킬당 3회)"},refNote:"수비 스킬 참조",attachTo:"defense",tier:3}],
  "돈키호테|라만차랜드 실장": [{name:"아류 산초 경혈 6식 - 채찍",sin:"나태",power:"4",coin:"+3",coinCount:1,coinEffects:{2:"파괴 불가 코인 [적중시] 출혈 2 부여",3:"파괴 불가 코인 [적중시] 출혈 2 부여 [적중시] 대상의 출혈 을 1회 발동시킴. 대상의 출혈 횟수 1 감소"},refNote:"패시브 참조",attachTo:"skill1",tier:1},{name:"아류 산초 경혈 8식 - 갈라지도록",sin:"분노",power:"4",coin:"+3",coinCount:2,coinEffects:{1:"[적중시] 출혈 2 부여",2:"[적중시] 출혈 2 부여",3:"파괴 불가 코인 대상의 출혈 당 피해량 +2.5% (최대 25%) 공용 누적 소모 혈찬 100 당 피해량 +15% (최대 75%)"},refNote:"패시브 참조",attachTo:"skill2",tier:2},{name:"산초류 경혈 오의 - 라 샹그레",sin:"색욕",power:"5",coin:"+5",coinCount:0,coinEffects:{1:"파괴 불가 코인",2:"파괴 불가 코인",3:"파괴 불가 코인",4:"파괴 불가 코인 [적중시] 출혈 8 부여, 출혈 횟수 4 증가 [공격 종료시] 대상이 사망했으면. 모든 적에게 출혈 5 부여, 출혈 횟수 1 증가"},refNote:"패시브 참조",attachTo:"skill3",tier:3},{name:"아류 산초 경혈 15식 - 피날레 준비",sin:"색욕",power:"6",coin:"+5",coinCount:1,coinEffects:{2:"파괴 불가 코인 [적중시] 출혈 횟수 3 증가"},refNote:"패시브 참조",attachTo:"defense",tier:1}],
  "돈키호테|로보토미 E.G.O::사랑과 증오의 이름으로": [{name:"악당은... 어디있어....?",sin:"분노",power:"12",coin:"-4",coinCount:2,coinEffects:{2:"[적중시] 자신의 사랑/증오 횟수 3 증가 [적중시] 침잠 3 부여"},refNote:"패시브 참조",attachTo:"skill1",tier:1},{name:"내 머릿속에서 나가줘...",sin:"질투",power:"15",coin:"-6",coinCount:2,coinEffects:{1:"[적중시] 자신의 사랑/증오 횟수 3 증가",2:"[적중시] 침잠 2 부여 [적중시] 다음 턴에 메인 타겟에게 악당 표식 부여"},refNote:"패시브 참조",attachTo:"skill2",tier:2},{name:"리버스드 비트 / 리버스드 아르카나 슬레이브",sin:"질투",power:"20",coin:"-6",coinCount:0,coinEffects:{1:"파괴 불가 코인",2:"파괴 불가 코인 [파괴되지 않고 적중시] 침잠 2 부여",3:"파괴 불가 코인 [파괴되지 않고 적중시] 침잠 2 부여"},refNote:"패시브 참조",attachTo:"skill3",tier:3}],
  "돈키호테|검지 대행자 - 개화 E.G.O::대행": [{name:"이 손으로 대신…",sin:"색욕",power:"4",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 침잠 2 부여",2:"[적중시] 침잠 횟수 1 증가 [크리티컬 적중 시] 자신의 호흡 횟수 1 증가"},refNote:"패시브 참조",attachTo:"skill1",tier:1},{name:"대행: 새기기",sin:"오만",power:"5",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 침잠 2 부여",2:"[적중시] 침잠 2 부여",3:"[적중시] 자신의 호흡 횟수 1 증가 [크리티컬 적중 시] 침잠 횟수 1 증가"},refNote:"패시브 참조",attachTo:"skill2",tier:2},{name:"대행: 말살",sin:"우울",power:"5",coin:"+3",coinCount:0,coinEffects:{1:"파괴 불가 코인 [적중시] 침잠 1 부여",2:"파괴 불가 코인 [적중시] 침잠 1 부여",3:"파괴 불가 코인 [적중시] 침잠 1 부여",4:"파괴 불가 코인 해금 단계 1당, 이 코인의 위력 +1, 피해량 +40% (각각 최대 3, 최대 120%) [적중시] 침잠 1 부여 [크리티컬 적중 시] 침잠 횟수 2 증가"},refNote:"패시브 참조",attachTo:"skill3",tier:3},{name:"강제 해금",sin:"우울",power:"4",coin:"+3",coinCount:3,coinEffects:{2:"[적중시] 침잠 1 부여",3:"[적중시] 침잠 1 부여"},refNote:"패시브 참조",attachTo:"defense",tier:1}],
  "료슈|로보토미 E.G.O::적안 · 참회": [{name:"진심 대가리 터트리기",sin:"색욕",power:"5",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] (소모한 적안 - 15)만큼 출혈 부여 (최대 5)",3:"소모한 적안 , 참회 당 피해량 +4% (최대 160%) [적중시] 자신과 현재 체력 비율이 가장 낮은 아군 1명이 각 대상의 최대 체력의 (소모한 참회 )%만큼 체력 회복 - 최대 공명수 2 당 회복 대상 수 +1 (최대 2명 증가) [적중시] 자신과 현재 정신력이 가장 낮은 아군 1명을 (소모한 참회 - 5)만큼 정신력 회복 - 최대 공명수 2 당 회복 대상 수 +1 (최대 2명 증가) [적중시] 다음 턴에 속박 3, 공격 위력 감소 2 부여 (턴 당 1회)"},refNote:"스킬 3 참조",attachTo:"skill3",tier:3}],
  "료슈|N사 E.G.O::경멸, 경외": [{name:"경멸 밑으로 쏟아지는 경외의 시선",sin:"색욕",power:"14",coin:"+14",coinCount:0,coinEffects:{1:"파괴 불가 코인 대상에게 경멸 이 있으면, 피해량 +235% [적중시] 진동 4 부여, 진동 횟수 2 증가 [적중시] 출혈 4 부여, 출혈 횟수 2 증가 [파괴되지 않고 적중시] 진동 - 과다출혈 로 진폭 변환 [적중시] 진동 폭발 . 대상의 진동 횟수 1 감소"},refNote:"스킬 3 참조",attachTo:"skill3",tier:3},{name:"쏘아내겠소 / 언제든지",sin:"오만",power:"4",coin:"+7",coinCount:0,coinEffects:{1:"파괴 불가 코인 이 코인에는 메인 타겟만 피해를 입음",2:"파괴 불가 코인 이 코인에는 서브 타겟만 피해를 입음 - 첫 번째 코인 피해가 크리티컬이 아니고, N사 E.G.O::경멸, 경외 료슈가 생존했다면, 서브 타겟 중 무작위 1명이 피해를 입음 자신의 찢어진 추억 당 피해량 +40% (최대 280%) - 호흡 위력당, 크리티컬 피해량 +5% (최대 50%) - 자신의 찢어진 추억당 , 크리티컬 피해량 +10% (최대 70%) - 메인 타겟의 잃은 체력 비율만큼 피해량 증가 (최대 100%) [적중시] 출혈 5 부여, 출혈 횟수 2 증가"},refNote:"패시브 참조",attachTo:"skill3",tier:3}],
  "료슈|로보토미 E.G.O::잔향 · 외로움": [{name:"멈추지 않는 이야기",sin:"나태",power:"9",coin:"+1",coinCount:3,coinEffects:{1:"[적중시] 침잠 횟수 1 증가 [적중시] 다음 턴에 고독 2 부여",2:"[적중시] 진동 2 부여 [적중시] 다음 턴에 고독 2 부여",3:"[적중시] 진동 2 부여 [적중시] 다음 턴에 고독 2 부여"},refNote:"패시브 참조",attachTo:"skill1",tier:1},{name:"황홀한 종말",sin:"우울",power:"12",coin:"+7",coinCount:1,coinEffects:{},refNote:"패시브 참조",attachTo:"skill3",tier:3}],
  "료슈|거미집의 검": [{name:"천살 [天殺]",sin:"분노",power:"16",coin:"+2",coinCount:1,coinEffects:{1:"[적중시] 검흔 [잔상] 20 부여 [적중시] 대상이 거미집 소속 아군 인격이면, 대상 최대 체력의 120%만큼 고정 피해"},refNote:"잔상보 참조",attachTo:"skill1",tier:1},{name:"필연쇄 [必然殺]",sin:"오만",power:"10",coin:"+4",coinCount:1,coinEffects:{1:"크리티컬 피해량 +30% [적중시] 검흔 [잔상] 2 부여 [적중시] 자신의 얽힘 만큼 검흔 [잔상] 부여 (최대 4) [적중시] 대상의 화상 발동. 대상의 화상 횟수 1 감소 [크리티컬 적중 시] 참격 취약 1 부여"},refNote:"패시브 참조",attachTo:"skill2",tier:2},{name:"공간참 - 잔 [空間斬 - 殘]",sin:"분노",power:"16",coin:"+1",coinCount:2,coinEffects:{1:"[적중시] 자신의 호흡 횟수 1 증가 [적중시] 화상 1 부여 [적중시] 출혈 1 부여",2:"크리티컬 피해량 +30% [적중시] 대상의 검흔 [잔상] 을 모두 소모하여, 이 코인의 최종 피해량의 (소모값/10)%만큼 참격 피해 [크리티컬 적중 시] 이 코인의 최종 피해량의 ( 얽힘 × 4)%만큼 참격 피해 [크리티컬 적중 시] 대상의 화상 발동. 대상의 화상 횟수 1 감소 [크리티컬 적중 시] 대상의 출혈 발동. 대상의 출혈 횟수 1 감소"},refNote:"패시브 참조",attachTo:"skill3",tier:3},{name:"공간참 - 연 [空間斬 - 緣]",sin:"분노",power:"14",coin:"+3",coinCount:2,coinEffects:{1:"[적중시] 화상 5 부여 [적중시] 출혈 2 부여",2:"[크리티컬 적중 시] 대상의 화상 발동. 대상의 화상 횟수 1 감소"},refNote:"패시브 참조",attachTo:"skill3",tier:3}],
  "뫼르소|검계 우두머리": [{name:"골단",sin:"오만",power:"4",coin:"+4",coinCount:4,coinEffects:{4:"[적중시] 출혈 3 부여 [적중시] 다음 턴에 마비 5 부여"},refNote:"스킬 3 참조",attachTo:"defense",tier:3}],
  "뫼르소|동부 엄지 카포 IIII": [{name:"초절맹호살격난참 [超絶猛虎殺擊亂斬]",sin:"분노",power:"3",coin:"+3",coinCount:5,coinEffects:{1:"[적중시] 진동 3 부여",2:"[적중시] 진동 횟수 3 증가",3:"맹호표탄 1 소모 [적중시] 화상 3 부여",4:"맹호표탄 1 소모 [적중시] 화상 횟수 3 증가",5:"맹호표탄 1 소모 [적중시] 진동 - 작열 로 진폭 변환 [적중시] 진동 폭발 . 대상의 진동 횟수 1 감소 - 맹호표탄 소모 시, 효과 2회 추가 발동"},refNote:"스킬 3 참조",attachTo:"skill3",tier:3}],
  "뫼르소|라만차랜드 왕자": [{name:"오베르튜레",sin:"색욕",power:"4",coin:"+3",coinCount:2,coinEffects:{1:"[적중시] 출혈 횟수 2 증가 [적중시] 파열 횟수 1 증가",2:"[적중시] 출혈 2 부여",3:"파괴 불가 코인 [파괴되지 않고 적중시] 출혈 2 부여 [파괴되지 않고 적중시] 파열 1 부여",4:"파괴 불가 코인 [적중시] 라만차 퍼레이드 2 부여 - 자신의 연기 집중 이 2 이상이면, 공격 대상 중 1명에게 라만차 퍼레이드 2 추가 부여 (턴당 1회) [파괴되지 않고 적중시] 이 스킬 피해로 대상을 흐트러짐, 부위 파괴, 처치했다면, 대상 1명당 다음 턴에 경혈 갑주 1 얻음 (최대 3)"},refNote:"스킬 3 참조",attachTo:"skill3",tier:3}],
  "홍루|마침표 사무소 대표": [{name:"근접 지원",sin:"오만",power:"5",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 호흡 1 얻음",2:"[적중시] 호흡 1 얻음"},refNote:"마침표 사무소 해결사 히스클리프 참조",attachTo:"skill1",tier:1},{name:"연계: 타겟 지정",sin:"우울",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 호흡 2 얻음",2:"탄환 최대 3 소모 피해량 +(소모한 탄환 × 10)% 크리티컬 피해량 +(소모한 탄환 × 10)%",3:"크리티컬 피해량 +20% [적중시] 다음 턴에 속박 1 부여 [적중시] 다음 턴에 공격 위력 감소 1 부여",4:"파괴 불가 코인 크리티컬 피해량 +30%"},refNote:"패시브 참조",attachTo:"skill2",tier:2},{name:"연계: 삶의 마침표",sin:"오만",power:"7",coin:"+4",coinCount:3,coinEffects:{1:"탄환 1 소모 피해량 +(소모한 탄환 × 15)% [적중시] 피해량의 15%만큼 흐트러짐 손상",2:"탄환 최대 2 소모 피해량 +(소모한 탄환 × 15)% [적중시] 피해량의 15%만큼 흐트러짐 손상",3:"대상이 흐트러짐 상태면 크리티컬 피해량 +30% [적중시] 다음 턴에 속박 2 부여 [적중시] 관통 취약 2 부여",4:"파괴 불가 코인 크리티컬 피해량 +50% 피해량 +(대상의 관통 내성 × 50)%"},refNote:"패시브 참조",attachTo:"skill3",tier:3},{name:"그림자의 건너편",sin:"오만",power:"5",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 호흡 1 얻음",2:"[적중시] 호흡 1 얻음"},refNote:"수비 스킬 참조",attachTo:"defense",tier:1}],
  "홍루|홍원 군주": [{name:"군주의 길을 열겠다",sin:"오만",power:"6",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 파열 횟수 1 증가",2:"크리티컬 피해량 +50% [적중시] 파열 2 부여 [적중시] 다음 턴에 참격 내성 약화 1 부여 (턴 당 1회) [적 처치 시] 아군 흑수 인격 중 정신력이 가장 낮은 대상 2명의 정신력 10을 회복하고, 다음 턴에 공격 위력 증가 1 부여"},refNote:"스킬 3 참조",attachTo:"skill3",tier:3},{name:"혈혈단신, 사생취원[孑孑單身, 捨生取园]",sin:"오만",power:"6",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 파열 1 부여",2:"[적중시] 파열 1 부여",3:"대상이 보유한 부정적인 효과 1개 당 피해량 +10% (최대 50%) [적중시] 파열 1 부여 [적중시] 다음 턴에 참격 내성 약화 1 부여 (턴 당 1회) [적 처치 시] 다음 턴에 공격 위력 증가 2 얻음"},refNote:"스킬 3 참조",attachTo:"skill3",tier:3},{name:"호위",sin:"탐식",power:"2",coin:"+8",coinCount:0,coinEffects:{1:"파괴 불가 코인"},refNote:"패시브 참조",attachTo:"defense",tier:1}],
  "홍루|거미집 약지 아비": [{name:"우린 피와 살을 사랑한답니다",sin:"오만",power:"4",coin:"+4",coinCount:1,coinEffects:{},refNote:"패시브 참조",attachTo:"skill1",tier:1},{name:"설치 미술 제 3호 '간이늑골'",sin:"질투",power:"5",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 출혈 2 부여",2:"대상의 부정적인 효과 1개당, 피해량 +10% (최대 50%) [적중시] 정신력 피해 5 [적중시] 자신의 정신력 5 회복 [적중시] 신체관극 부여"},refNote:"스킬 2 참조",attachTo:"skill2",tier:2},{name:"폐장 - 설치미술 제 1호 '여러분이 흩뿌린 살과 뼈가 객석이 되어'",sin:"색욕",power:"3",coin:"+4",coinCount:0,coinEffects:{1:"파괴 불가 코인 [적중시] 출혈 3 부여",2:"파괴 불가 코인 [적중시] 다음 턴에 속박 1 부여 (턴당 1회) [적중시] 다음 턴에 신속 1 얻음 (턴당 1회)",3:"파괴 불가 코인 [적중시] 다음 턴에 피해량 감소 1 부여 (턴당 1회) [적중시] 다음 턴에 참격 피해량 증가 1 얻음 (턴당 1회)",4:"파괴 불가 코인 [적중시] 출혈 횟수 1 증가",5:"파괴 불가 코인 대상이 보유한 부정적인 효과 1개당, 피해량 +5% (최대 30%) [적중시] 화상 5 부여 [적중시] 신체관극 부여"},refNote:"패시브 참조",attachTo:"skill3",tier:3},{name:"반달리즘은 사절이랍니다",sin:"색욕",power:"4",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 출혈 횟수 1 증가",2:"[적중시] 출혈 2 부여"},refNote:"원호 방어 참조",attachTo:"defense",tier:1}],
  "히스클리프|와일드헌트": [{name:"비탄하고, 애탄하며, 파탄하라",sin:"우울",power:"31",coin:"-13",coinCount:2,coinEffects:{1:"[적중시] 침잠 5 부여, 침잠 횟수 2 증가 [적중시] 피해량의 30%만큼 흐트러짐 손상을 입힘",2:"[적중시] 대상의 침잠 위력만큼 우울 속성 피해를 입힘 (최대 30) [적 처치시] 처치한 대상의 ( 침잠 / 2)만큼 무작위 적 2명에게 침잠 부여 (최대 8) [적 처치시] 정신력 15 회복"},refNote:"스킬 3, 강화 반격 참조",attachTo:"skill3",tier:3}],
  "히스클리프|마침표 사무소 해결사": [{name:"로직 아틀리에제 고속분쇄탄",sin:"오만",power:"15",coin:"+18",coinCount:1,coinEffects:{1:"탄환 - 로직 아틀리에 1 소모 크리티컬 피해량 +130% 크리티컬 피해량 +(대상의 관통 내성 × 50)% [크리티컬 적중 시] 자신의 호흡 위력이 30을 초과하면, 30을 초과하는 호흡 위력을 최대 10까지 소모하여, 피해량 +(소모한 호흡 위력 × 10)%"},refNote:"스킬 3 참조",attachTo:"skill3",tier:3},{name:"엄폐",sin:"오만",power:"2",coin:"+8",coinCount:0,coinEffects:{1:"파괴 불가 코인"},refNote:"전투 호흡 참조",attachTo:"defense",tier:1}],
  "히스클리프|흑수 - 유 필두": [{name:"혈천하계무난도[血天下鷄舞亂刀]",sin:"분노",power:"5",coin:"+3",coinCount:0,coinEffects:{1:"파괴 불가 코인 [적중시] 파열 횟수 2 증가",2:"파괴 불가 코인 [적중시] 화상 횟수 2 증가",3:"파괴 불가 코인 [적중시] 파열 2 부여",4:"파괴 불가 코인 [적중시] 화상 2 부여 [적중시] 자신에게 화상 이 20 이상 있거나, 자신의 현재 체력이 최대 체력의 50% 미만이면, 이 코인 재사용 (스킬당 1회) [적중시] 이 코인의 최종 피해량 20%만큼 모든 공격 대상에게 분노 피해를 줌 - 마지막에 사용하는 코인이면, 해당 피해량만큼 체력 회복"},refNote:"혈염난무 참조",attachTo:"skill3",tier:3}],
  "히스클리프|중지 작은 형님": [{name:"전원, 처형이다!!",sin:"질투",power:"16",coin:"+10",coinCount:0,coinEffects:{1:"파괴 불가 코인 대상이 흐트러짐 상태면, 피해량 +20% [적중시] 출혈 5 부여 [적중시] 화상 5 부여 [적중시] 진동 5 부여 [적중시] 진동 폭발 . 진동 횟수 1 감소 [적중시] 이 코인 최종 피해량의 (질투 공명 수 × 7)%만큼 타격 피해 (최대 42%)"},refNote:"패시브 참조",attachTo:"skill3",tier:3}],
  "히스클리프|거미집 엄지 제자": [{name:"세치오나투라 디 체르보",sin:"분노",power:"5",coin:"+3",coinCount:0,coinEffects:{1:"파괴 불가 코인 [적중시] 화상 4 부여, 화상 횟수 3 증가",2:"파괴 불가 코인 [적중시] 진동 4 부여, 진동 횟수 3 증가",3:"파괴 불가 코인",4:"파괴 불가 코인 [코인 시작시] 완성되어가는 교본 1당, 이 코인의 위력 +1 (최대 3) [적중시] 진동 - 작열 로 진폭 변환 [적중시] 진동 폭발 3회. 대상의 진동 횟수 3 감소"},refNote:"스킬 3 참조",attachTo:"skill3",tier:3},{name:"지키겠습니다.",sin:"우울",power:"3",coin:"+10",coinCount:0,coinEffects:{1:"파괴 불가 코인"},refNote:"패시브 참조",attachTo:"defense",tier:1}],
  "이스마엘|가주 후보": [{name:"적격 - 시[始]",sin:"우울",power:"2",coin:"+2",coinCount:2,coinEffects:{2:"[적중시] 파열 1 부여"},refNote:"패시브 참조",attachTo:"skill1",tier:1}],
  "이스마엘|정사무소 대표": [{name:"코오쟌 [光斬]",sin:"질투",power:"4",coin:"+5",coinCount:1,coinEffects:{1:"[적중시] 자신의 ( 광【光】 위력 - 1)만큼 이 코인 재사용 (최대 4회) [적중시] 진동 횟수 1 증가 [적중시] 침잠 횟수 1 증가 [앞면 적중시] 방어 레벨 감소 1 부여"},refNote:"패시브 참조",attachTo:"skill3",tier:3}],
  "이스마엘|LCD 현장추리팀": [{name:"골단",sin:"오만",power:"5",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 호흡 3 얻음 [적중시] 참격 취약 1 부여 (턴당 1회)",2:"[적중시] 출혈 2 부여 [적중시] 다음 턴에 마비 1 부여"},refNote:"패시브 참조",attachTo:"skill2",tier:2},{name:"상전 청린화",sin:"분노",power:"5",coin:"+3",coinCount:4,coinEffects:{1:"[적중시] 호흡 3 얻음 [크리티컬 적중 시] 묵 공방 - 예[銳] 2식 발도 / 추력:도깨비불 1 얻음",2:"[적중시] 출혈 1 부여 [크리티컬 적중 시] 묵 공방 - 예[銳] 2식 발도 / 추력:도깨비불 1 얻음",3:"[적중시] 출혈 1 부여 [크리티컬 적중 시] 묵 공방 - 예[銳] 2식 발도 / 추력:도깨비불 1 얻음",4:"자신의 묵 공방 - 예[銳] 2식 발도 / 추력:도깨비불 수치가 15를 초과했으면, 초과된 수치 1당, 크리티컬 피해량 +5% (최대 25%) [적중시] 출혈 1 부여 [크리티컬 적중 시] 자신의 신속 이 5 이상이면, 이 코인 재사용 (스킬당 1회)"},refNote:"패시브 참조",attachTo:"skill3",tier:3},{name:"형세 읽기",sin:"우울",power:"4",coin:"+9",coinCount:0,coinEffects:{1:"파괴 불가 코인"},refNote:"원호 방어 참조",attachTo:"defense",tier:1}],
  "로쟈|흑운회 와카슈": [{name:"쾌청 베기",sin:"오만",power:"7",coin:"+18",coinCount:1,coinEffects:{1:"[크리티컬 적중 시] 출혈 10 부여"},refNote:"패시브 참조",attachTo:"defense",tier:3}],
  "로쟈|북부 제뱌찌 협회 3과": [{name:"이건… 잠시 전략적 휴식이야!",sin:"탐식",power:"9",coin:"+7",coinCount:1,coinEffects:{},refNote:"수비 스킬 참조",attachTo:"defense",tier:1}],
  "로쟈|라만차랜드 공주": [{name:"돈키호테류 경혈 오의 피날레",sin:"색욕",power:"4",coin:"+5",coinCount:3,coinEffects:{1:"[적중시] 출혈 횟수 2 증가 [적중시] 파열 횟수 2 증가",2:"[적중시] 출혈 2 부여 [적중시] 파열 2 부여",3:"[적중시] 출혈 2 부여 [적중시] 파열 2 부여"},refNote:"스킬 3 참조",attachTo:"skill3",tier:3}],
  "로쟈|로보토미 E.G.O::눈물로 벼려낸 검": [{name:"빛바랜 믿음",sin:"우울",power:"10",coin:"-4",coinCount:2,coinEffects:{1:"[적중시] 침잠 2 부여",2:"[적중시] 침잠 1 부여 [적중시] 자신의 깊은 눈물 2 얻음 - 꿰뚫는 검 2당 깊은 눈물 1 추가로 얻음 (최대 2)"},refNote:"패시브 참조",attachTo:"skill1",tier:1},{name:"눈물로 벼려낸 검으로",sin:"질투",power:"16",coin:"-4",coinCount:3,coinEffects:{2:"[적중시] 침잠 3 부여",3:"[적중시] 침잠 2 부여, 침잠 횟수 2 증가 [적중시] 자신의 깊은 눈물 3 얻음 - 꿰뚫는 검 수치만큼 깊은 눈물 추가로 얻음 (최대 5)"},refNote:"패시브 참조",attachTo:"skill2",tier:2},{name:"아르카나 티어 앤 피어스",sin:"오만",power:"20",coin:"-5",coinCount:3,coinEffects:{2:"[적중시] 침잠 횟수 4 증가",3:"[적중시] 침잠 5 부여 (스킬당 1회) [적중시] 이 코인에서 눈물 벼리기 를 소모하였다면, 코인 1회 재사용 (턴당 1회)"},refNote:"패시브 참조",attachTo:"skill3",tier:3},{name:"닳아버린 긍지",sin:"우울",power:"12",coin:"-4",coinCount:0,coinEffects:{1:"파괴 불가 코인 [적중시] 침잠 1 부여",2:"파괴 불가 코인 [적중시] 침잠 2 부여"},refNote:"패시브 참조",attachTo:"defense",tier:1}],
  "로쟈|약지 야수파 도슨트": [{name:"네 피부 아래 맥동하는 붉은 색감을 거칠게",sin:"색욕",power:"5",coin:"+3",coinCount:0,coinEffects:{1:"파괴 불가 코인 [적중시] 출혈 3 부여 [적중시] 찢긴 색채 [루주] 1 부여",2:"파괴 불가 코인 [적중시] 출혈 횟수 2 증가 [적중시] 찢긴 색채 [루주] 1 부여",3:"파괴 불가 코인 [적중시] 침잠 3 부여 [적중시] 찢긴 색채 [블뢰] 4 부여",4:"파괴 불가 코인 이 코인은 모든 공격 대상에게 적중함 [적중시] 출혈 횟수 2 증가 [적중시] 과감한 터치 1 부여"},refNote:"스킬 3 참조",attachTo:"skill3",tier:3},{name:"크리틱",sin:"색욕",power:"5",coin:"+4",coinCount:1,coinEffects:{1:"대상의 부정적인 효과 3개당, 이 코인 재사용 1회 (최대 2회) [적중시] 출혈 1 부여 (스킬당 1회) [적중시] 침잠 1 부여 (스킬당 1회) [적중시] 찢긴 색채 [루주] 와 찢긴 색채 [블뢰] 중 무작위로 1 부여 [적중시] 이 코인이 3번째 사용하는 코인이면, 과감한 터치 1 부여"},refNote:"수비 스킬 참조",attachTo:"defense",tier:1}],
  "로쟈|거미집 엄지 아비": [{name:"세치오나투라 디 코닐리오",sin:"색욕",power:"4",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 화상 횟수 1 증가 [적중시] 진동 횟수 2 증가",2:"[적중시] 진동 폭발 . 진동 횟수 1 감소"},refNote:"패시브 참조",attachTo:"skill1",tier:1},{name:"세치오나투라 디 체르보",sin:"나태",power:"4",coin:"+4",coinCount:3,coinEffects:{1:"[적중시] 호흡 5 얻음 [적중시] 화상 2 부여",2:"[적중시] 진동 2 부여, 진동 횟수 2 증가 [적중시] 진동 - 작열 로 진폭 변환",3:"[적중시] 진동 폭발 , 진동 횟수 1 감소 [적중시] 대상의 진동 이 10 이상이면, 진동 폭발 . 진동 횟수 1 감소"},refNote:"스킬 2 참조",attachTo:"skill2",tier:2},{name:"처분",sin:"분노",power:"5",coin:"+3",coinCount:0,coinEffects:{1:"파괴 불가 코인 [적중시] 화상 2 부여 [적중시] 진동 2 부여",2:"파괴 불가 코인 [적중시] 화상 2 부여 [적중시] 진동 2 부여",3:"파괴 불가 코인 [적중시] 화상 횟수 3 증가 [적중시] 진동 횟수 3 증가",4:"파괴 불가 코인 [적중시] 진동 - 작열 로 진폭 변환",5:"파괴 불가 코인 가속탄 최대 5까지 소모 이 코인 효과로 소모할 가속탄 1당, 피해량 +10% (최대 50%) [적중시] 진동 폭발 . 진동 횟수 1 감소 - 소모한 가속탄 만큼 효과 추가 발동 (최대 3회)"},refNote:"패시브 참조",attachTo:"skill3",tier:3},{name:"예지",sin:"우울",power:"3",coin:"+7",coinCount:1,coinEffects:{},refNote:"패시브 참조",attachTo:"defense",tier:1}],
  "로쟈|오트쿠튀르::수선실": [{name:"패턴 따기",sin:"나태",power:"6",coin:"+3",coinCount:1,coinEffects:{1:"[합 불가능] [사용시] 자신의 표류 관성 횟수 3 증가 [적중시] 자신의 표류 관성 위력이 3 이상이면, 이 코인 재사용 (스킬당 1회) [적중시] 진동 횟수 1 증가 [적중시] 마름질 표식 1 부여"},refNote:"패시브 참조",attachTo:"skill1",tier:1},{name:"오려내기",sin:"나태",power:"7",coin:"+4",coinCount:2,coinEffects:{1:"[합 불가능] [사용시] 자신의 표류 관성 위력 3당 최종 위력 +1 (최대 2) [사용시] 자신의 표류 관성 횟수 5 증가 [공격 종료시] 대상의 마름질 표식 2 소모 [공격 종료시] 꽃가위 1 얻음 [적중시] 진동 3 부여",2:"[적중시] 진동 폭발. 대상의 진동 횟수 1 감소"},refNote:"패시브 참조",attachTo:"skill2",tier:2}],
  "싱클레어|새벽 사무소 해결사": [{name:"타오르는 일격",sin:"분노",power:"13",coin:"+15",coinCount:1,coinEffects:{1:"대상의 화상 1 당 피해량 +4% (최대 120%) [적중시] 대상에게 화상 이 10 이상 있으면, 무작위 적 (가장 높은 공명 수)명에게 화상 2 부여 - 해당 공명이 분노 공명이면, 화상 횟수 1 추가 부여 [적중시] 화상 10 부여 [적 처치시] 처치한 대상의 화상 위력을 무작위 적에게 나누어 부여 (최대 10. 집중 전투인 경우 부위로 판정)"},refNote:"스킬 3 참조",attachTo:"skill3",tier:3}],
  "싱클레어|북부 제뱌찌 협회 3과": [{name:"자, 잠깐 정비 좀 할게요...!",sin:"탐식",power:"9",coin:"+7",coinCount:1,coinEffects:{},refNote:"수비 스킬 참조",attachTo:"defense",tier:1}],
  "싱클레어|거미집 소지 제자": [{name:"회[回]",sin:"오만",power:"4",coin:"+10",coinCount:1,coinEffects:{},refNote:"수비 스킬 참조",attachTo:"defense",tier:1}],
  "오티스|거미집 중지 아비": [{name:"배떼지를 갈라주지",sin:"질투",power:"3",coin:"+4",coinCount:0,coinEffects:{1:"파괴 불가 코인 [적중시] 출혈 횟수 2 증가 [적중시] 흐트러짐 손상 10",2:"파괴 불가 코인 [적중시] 화상 4 부여, 화상 횟수 2 증가 [적중시] 자신에게 중지 - 원한 문신 [ 큰 누님 ] 이 있으면, 다음 턴에 속박 1, 마비 1 부여 (턴당 1회)"},refNote:"스킬 1 참조",attachTo:"skill1",tier:1},{name:"칼빵 [레바테인]",sin:"질투",power:"3",coin:"+3",coinCount:0,coinEffects:{1:"파괴 불가 코인 [적중시] 화상 4 부여",2:"파괴 불가 코인 [적중시] 출혈 4 부여",3:"파괴 불가 코인 [적중시] 화상 횟수 1 증가",4:"파괴 불가 코인 [적중시] 출혈 횟수 2 증가",5:"파괴 불가 코인 [적중시] 다음 턴에 속박 1, 마비 1 부여 (턴당 1회)"},refNote:"스킬 2 참조",attachTo:"skill2",tier:2},{name:"즉결처형 [레바테인]",sin:"질투",power:"4",coin:"+3",coinCount:0,coinEffects:{1:"파괴 불가 코인 [적중시] 화상 4 부여",2:"파괴 불가 코인 [적중시] 화상 횟수 2 증가",3:"파괴 불가 코인 [적중시] 출혈 4 부여 [적중시] 이 코인 최종 피해량의 (대상의 화상 과 출혈 의 합 × 2)%만큼 참격 피해 (최대 50%)",4:"파괴 불가 코인 [적중시] 출혈 횟수 2 증가 [적중시] 이 코인 최종 피해량의 (대상의 화상 과 출혈 의 합 × 2)%만큼 참격 피해 (최대 50%)",5:"파괴 불가 코인 [적중시] 이 코인 최종 피해량의 (대상의 화상 과 출혈 의 합)%만큼 관통 피해 (최대 25%) [적중시] 이 코인 최종 피해량의 (대상의 화상 과 출혈 의 합)%만큼 타격 피해 (최대 25%)"},refNote:"스킬 3 참조",attachTo:"skill3",tier:3},{name:"포장을 뜯어볼까",sin:"질투",power:"4",coin:"+3",coinCount:0,coinEffects:{1:"파괴 불가 코인 [적중시] 화상 3 부여",2:"파괴 불가 코인 [적중시] 출혈 3 부여",3:"파괴 불가 코인 [적중시] 흐트러짐 손상 10",4:"파괴 불가 코인 [적중시] 다음 턴에 질투 취약 2 부여"},refNote:"패시브 참조",attachTo:"skill3",tier:3},{name:"가족을 위해 희생하는 딸램의 마음, 잊지 않고 갚아주지",sin:"질투",power:"16",coin:"+2",coinCount:0,coinEffects:{1:"파괴 불가 코인 대상의 타격 내성이 보통(1.0) 미만이면, 보통(1.0)으로 취급 [적중시] 화상 3 부여, 화상 횟수 2 증가 [적중시] 출혈 3 부여, 출혈 횟수 2 증가 [적중시] 이 코인 최종 피해량의 100%만큼 타격 피해"},refNote:"패시브 참조",attachTo:"skill3",tier:3}],
  "그레고르|밤의 송곳 카피타노": [{name:"메르체",sin:"나태",power:"4",coin:"+6",coinCount:1,coinEffects:{1:"[적중시] 출혈 1 부여 [적중시] 진동 1 부여 [적중시] 상처 1 부여"},refNote:"패시브, 스킬 2/3 참조",attachTo:"skill1",tier:1},{name:"밤의 송곳",sin:"오만",power:"4",coin:"+3",coinCount:0,coinEffects:{1:"파괴 불가 코인",2:"파괴 불가 코인 [적중시] 출혈 4 부여, 출혈 횟수 1 증가",3:"파괴 불가 코인 [적중시] 진동 4 부여, 진동 횟수 2 증가",4:"파괴 불가 코인 [적중시] 진동 - 과다출혈 로 진폭 변환 [적중시] 진동 폭발 . 대상의 진동 횟수 1 감소 [적중시] 대상에게 속박 이 있으면, 진동 폭발 . 대상의 진동 횟수 1 감소 [적중시] 다음 턴에 대상의 깊은 상처 를 치명적인 상처 로 변환"},refNote:"스킬 3 참조",attachTo:"skill3",tier:3}],
  "그레고르|LCE E.G.O::AEDD": [{name:"출력 최대 - 초고압 전류 방전",sin:"질투",power:"5",coin:"+5",coinCount:0,coinEffects:{1:"파괴 불가 코인 [적중시] 파열 횟수 2 증가",2:"파괴 불가 코인 [적중시] 파열 3 부여",3:"파괴 불가 코인 [적중시] 광전 3 부여 [적중시] 자신의 충전 만큼 다음 턴에 전하침 부여 (최대 5) - 충전 이 5 이상이면, 대신 이번 턴과 다음 턴에 전하침 5 부여"},refNote:"스킬 3 참조",attachTo:"skill3",tier:3}],
  "그레고르|새벽 사무소 대표": [{name:"새벽녘",sin:"분노",power:"5",coin:"+3",coinCount:0,coinEffects:{1:"파괴 불가 코인 [적중시] 화상 횟수 3 증가 [적중시] 진동 횟수 3 증가",2:"파괴 불가 코인 [적중시] 진동 5 부여",3:"파괴 불가 코인 [적중시] 화상 5 부여",4:"파괴 불가 코인 [적중시] 진동 - 작열 로 진폭 변환 [적중시] 진동 폭발 . 대상의 진동 횟수 1 감소 [적중시] 대상의 화상 발동. 화상 횟수 1 감소 연기 전쟁의 치열했던 여러 전장 중 한 곳. 그곳에서 어느 결전 병기의 남은 날개 한 쌍을 공간과 함께 녹여 자르며 새벽의 끝을 알리던 기술. “하… 죽을 뻔했네…” “이봐. 저 괴물을… 해치워 줄 수… 있겠나?”"},refNote:"스킬 3 참조",attachTo:"skill3",tier:3},{name:"아지랑이",sin:"분노",power:"4",coin:"+4",coinCount:2,coinEffects:{1:"[적중시] 화상 1 부여",2:"[적중시] 진동 1 부여"},refNote:"원호 방어 참조",attachTo:"defense",tier:1}],
  "료슈|오트쿠튀르::르누아르 신발관": [{name:"원 킥 - 쿠튀르 멀티플",sin:"나태",power:"4",coin:"+4",coinCount:4,coinEffects:{1:"[사용시] 자신의 보존 횟수를 최대 20까지 소모하여 피해량 +(소모한 보존 횟수)% (최대 20%), 자신의 보존 횟수 5 증가 [사용시] 아르뮈르 에비이예 최대 60 소모, 소모한 아르뮈르 에비이예 30당 최종 위력 +1 (최대 2), 피해량 +(소모한 아르뮈르 에비이예/3)% (최대 20%) [적중시] 자신의 보존 횟수 5 증가",2:"[적중시] 진동 3 부여, 진동 횟수 3 증가 [적중시] 자신의 보존 위력이 3 이상이면, 진동 폭발 . 대상의 진동 횟수 1 감소",3:"[적중시] 자신의 보존 위력이 2 이상이면, 진동 폭발 . 대상의 진동 횟수 1 감소 [적중시] 이 코인 최종 피해량의 10%만큼 관통 피해",4:"[적중시] 진동 폭발 . 대상의 진동 횟수 1 감소 [적중시] 이 코인 최종 피해량의 15%만큼 관통 피해"},refNote:"패시브 참조",attachTo:"skill3",tier:3}],
  "이스마엘|오트쿠튀르::르루주 부티크": [{name:"목소리에 따라 기꺼이 나의 안으로",sin:"색욕",power:"6",coin:"+9",coinCount:1,coinEffects:{1:"탈의실 전용 스킬 [합 가능 가드] [전투 시작시] 자신의 맥동 횟수가 10 이상이면, 10 소모하여 다음 턴에 편성 순서가 가장 빠른 아군에게 위력 증가 1 부여 (턴당 1회), 대상이 르루주 소속이면, 다음 턴에 자신의 맥동 횟수가 5 증가하고, 대상에게 피해량 증가 1 추가 부여 [전투 시작시] 자신의 최대 체력의 100%만큼 체력 회복 (턴당 1회) [합 승리시] 자신에게 부여된 해제 가능한 부정적인 효과 중 무작위 1개 제거 [합 승리시] 자신의 맥동 횟수 5 증가 파괴 불가 코인"},refNote:"패시브 참조",attachTo:"defense",tier:1}],
};

const EGO_DATA = {
  "crows-eye-view-yi-sang": {sinner:"이상", title:"오감도 이상", grade:"ZAYIN", sin:"나태", season:null},
  "bygone-days-yi-sang": {sinner:"이상", title:"지난 날 이상", grade:"ZAYIN", sin:"우울", season:4},
  "4th-match-flame-yi-sang": {sinner:"이상", title:"4번째 성냥불 이상", grade:"TETH", sin:"분노", season:1},
  "wishing-cairn-yi-sang": {sinner:"이상", title:"소망석 이상", grade:"TETH", sin:"나태", season:null},
  "dimension-shredder-yi-sang": {sinner:"이상", title:"차원찢개 이상", grade:"HE", sin:"오만", season:null},
  "fell-bullet-yi-sang": {sinner:"이상", title:"흉탄 이상", grade:"HE", sin:"오만", season:5},
  "solemn-lament-yi-sang": {sinner:"이상", title:"엄숙한 애도 이상", grade:"HE", sin:"우울", season:9},
  "sunshower-yi-sang": {sinner:"이상", title:"여우비 이상", grade:"WAW", sin:"나태", season:2},
  "great-trichiliocosm-[三千大世界]-yi-sang": {sinner:"이상", title:"삼천대세계 [三千大世界] 이상", grade:"WAW", sin:"분노", season:7},
  "representation-emitter-faust": {sinner:"파우스트", title:"표상 방출기 파우스트", grade:"ZAYIN", sin:"오만", season:null},
  "hex-nail-faust": {sinner:"파우스트", title:"저주못 파우스트", grade:"TETH", sin:"질투", season:null},
  "92-faust": {sinner:"파우스트", title:"9장 2절 파우스트", grade:"TETH", sin:"색욕", season:3},
  "lasso-faust": {sinner:"파우스트", title:"올가미 파우스트", grade:"TETH", sin:"탐식", season:5},
  "fluid-sac-faust": {sinner:"파우스트", title:"물주머니 파우스트", grade:"HE", sin:"우울", season:1},
  "telepole-faust": {sinner:"파우스트", title:"전봇대 파우스트", grade:"HE", sin:"질투", season:null},
  "thoracalgia-faust": {sinner:"파우스트", title:"흉통 파우스트", grade:"HE", sin:"오만", season:5},
  "command-meltdown-faust": {sinner:"파우스트", title:"명령 : 용해 파우스트", grade:"HE", sin:"탐식", season:null},
  "ardor-blossom-star-faust": {sinner:"파우스트", title:"홍염살 파우스트", grade:"HE", sin:"분노", season:7},
  "everlasting-faust": {sinner:"파우스트", title:"영속 파우스트", grade:"WAW", sin:"나태", season:4},
  "la-sangre-de-sancho-don-quixote": {sinner:"돈키호테", title:"라 샹그레 데 산쵸 돈키호테", grade:"ZAYIN", sin:"색욕", season:null},
  "ill-go-fer-scissors-how-bout-you-don-quixote": {sinner:"돈키호테", title:"난 가위를 낼게, 너는? 돈키호테", grade:"ZAYIN", sin:"질투", season:7},
  "lifetime-stew-don-quixote": {sinner:"돈키호테", title:"평생 스튜 돈키호테", grade:"TETH", sin:"색욕", season:1},
  "wishing-cairn-don-quixote": {sinner:"돈키호테", title:"소망석 돈키호테", grade:"TETH", sin:"나태", season:null},
  "electric-screaming-don-quixote": {sinner:"돈키호테", title:"전기울음 돈키호테", grade:"TETH", sin:"질투", season:4},
  "fluid-sac-don-quixote": {sinner:"돈키호테", title:"물주머니 돈키호테", grade:"HE", sin:"우울", season:1},
  "telepole-don-quixote": {sinner:"돈키호테", title:"전봇대 돈키호테", grade:"HE", sin:"질투", season:null},
  "red-sheet-don-quixote": {sinner:"돈키호테", title:"홍적 돈키호테", grade:"HE", sin:"탐식", season:6},
  "yearning-mircalla-don-quixote": {sinner:"돈키호테", title:"갈망 - 미르칼라 돈키호테", grade:"WAW", sin:"색욕", season:5},
  "in-the-name-of-love-and-hate-don-quixote": {sinner:"돈키호테", title:"사랑과 증오의 이름으로 돈키호테", grade:"WAW", sin:"질투", season:null},
  "forest-for-the-flames-ryoshu": {sinner:"료슈", title:"삼라염상 료슈", grade:"ZAYIN", sin:"색욕", season:null},
  "soda-ryoshu": {sinner:"료슈", title:"소다 료슈", grade:"ZAYIN", sin:"우울", season:2},
  "red-eyes-ryoshu": {sinner:"료슈", title:"적안 료슈", grade:"TETH", sin:"색욕", season:null},
  "blind-obsession-ryoshu": {sinner:"료슈", title:"맹목 료슈", grade:"TETH", sin:"오만", season:3},
  "4th-match-flame-ryoshu": {sinner:"료슈", title:"4번째 성냥불 료슈", grade:"HE", sin:"분노", season:1},
  "red-eyes-(open)-ryoshu": {sinner:"료슈", title:"적안(開) 료슈", grade:"HE", sin:"질투", season:null},
  "thoracalgia-ryoshu": {sinner:"료슈", title:"흉통 료슈", grade:"HE", sin:"오만", season:5},
  "contempt-awe-ryoshu": {sinner:"료슈", title:"경멸, 경외 료슈", grade:"WAW", sin:"색욕", season:4},
  "great-trichiliocosm-[三千大世界]-ryoshu": {sinner:"료슈", title:"삼천대세계 [三千大世界] 료슈", grade:"WAW", sin:"분노", season:7},
  "chains-of-others-meursault": {sinner:"뫼르소", title:"타인의 사슬 뫼르소", grade:"ZAYIN", sin:"오만", season:null},
  "screwloose-wallop-meursault": {sinner:"뫼르소", title:"나사빠진 일격 뫼르소", grade:"TETH", sin:"질투", season:1},
  "regret-meursault": {sinner:"뫼르소", title:"후회 뫼르소", grade:"TETH", sin:"분노", season:null},
  "electric-screaming-meursault": {sinner:"뫼르소", title:"전기울음 뫼르소", grade:"TETH", sin:"질투", season:4},
  "pursuance-meursault": {sinner:"뫼르소", title:"집행 뫼르소", grade:"HE", sin:"나태", season:null},
  "capote-meursault": {sinner:"뫼르소", title:"카포테 뫼르소", grade:"HE", sin:"분노", season:2},
  "shadow-vested-bladesinger-[着影揮刀]-meursault": {sinner:"뫼르소", title:"착영휘도 [着影揮刀] 뫼르소", grade:"HE", sin:"오만", season:7},
  "yearning-mircalla-meursault": {sinner:"뫼르소", title:"갈망 - 미르칼라 뫼르소", grade:"WAW", sin:"색욕", season:5},
  "crushbound-past-meursault": {sinner:"뫼르소", title:"분쇄될 과거 뫼르소", grade:"WAW", sin:"나태", season:6},
  "land-of-illusion-hong-lu": {sinner:"홍루", title:"허환경 홍루", grade:"ZAYIN", sin:"우울", season:null},
  "declaration-of-rejection-hong-lu": {sinner:"홍루",title:"거절선포 홍루",grade:"ZAYIN",sin:"질투",season:8},
  "roseate-desire-hong-lu": {sinner:"홍루", title:"분홍욕망 홍루", grade:"TETH", sin:"색욕", season:1},
  "soda-hong-lu": {sinner:"홍루", title:"소다 홍루", grade:"TETH", sin:"질투", season:2},
  "cavernous-wailing-hong-lu": {sinner:"홍루", title:"낮은울음 홍루", grade:"TETH", sin:"나태", season:null},
  "lasso-hong-lu": {sinner:"홍루", title:"올가미 홍루", grade:"TETH", sin:"탐식", season:5},
  "dimension-shredder-hong-lu": {sinner:"홍루", title:"차원찢개 홍루", grade:"HE", sin:"오만", season:null},
  "effervescent-corrosion-hong-lu": {sinner:"홍루", title:"들끓는 부식 홍루", grade:"HE", sin:"탐식", season:3},
  "to-remain-oneself-[宁作吾]-hong-lu": {sinner:"홍루", title:"영작오 [宁作吾] 홍루", grade:"HE", sin:"오만", season:null},
  "tears-of-the-tarnished-blood-[汚血泣淚]-hong-lu": {sinner:"홍루", title:"오혈읍루 [汚血泣淚] 홍루", grade:"WAW", sin:"탐식", season:6},
  "bodysack-heathcliff": {sinner:"히스클리프", title:"시체자루 히스클리프", grade:"ZAYIN", sin:"질투", season:null},
  "holiday-heathcliff": {sinner:"히스클리프", title:"홀리데이 히스클리프", grade:"ZAYIN", sin:"탐식", season:3},
  "aedd-heathcliff": {sinner:"히스클리프", title:"AEDD 히스클리프", grade:"TETH", sin:"우울", season:2},
  "fell-bullet-heathcliff": {sinner:"히스클리프", title:"흉탄 히스클리프", grade:"TETH", sin:"오만", season:null},
  "move-in-reg-heathcliff": {sinner:"히스클리프", title:"입주 신고 히스클리프", grade:"TETH", sin:"질투", season:7},
  "telepole-heathcliff": {sinner:"히스클리프", title:"전봇대 히스클리프", grade:"HE", sin:"질투", season:1},
  "ya-śunyatā-tad-rupam-heathcliff": {sinner:"히스클리프", title:"공즉시색 히스클리프", grade:"HE", sin:"색욕", season:null},
  "asymmetrical-inertia-heathcliff": {sinner:"히스클리프", title:"쏠린 관성 히스클리프", grade:"HE", sin:"나태", season:null},
  "binds-heathcliff": {sinner:"히스클리프", title:"구속 히스클리프", grade:"WAW", sin:"우울", season:4},
  "snagharpoon-ishmael": {sinner:"이스마엘", title:"작살박이 이스마엘", grade:"ZAYIN", sin:"우울", season:null},
  "hundred-footed-death-maggot-[蝍蛆殺]-ishmael": {sinner:"이스마엘", title:"즉저살 [蝍蛆殺] 이스마엘", grade:"ZAYIN", sin:"우울", season:6},
  "roseate-desire-ishmael": {sinner:"이스마엘", title:"분홍욕망 이스마엘", grade:"TETH", sin:"색욕", season:1},
  "capote-ishmael": {sinner:"이스마엘", title:"카포테 이스마엘", grade:"TETH", sin:"분노", season:2},
  "bygone-days-ishmael": {sinner:"이스마엘", title:"지난 날 이스마엘", grade:"TETH", sin:"우울", season:null},
  "ardor-blossom-star-ishmael": {sinner:"이스마엘", title:"홍염살 이스마엘", grade:"HE", sin:"분노", season:null},
  "wingbeat-ishmael": {sinner:"이스마엘", title:"날갯짓 이스마엘", grade:"HE", sin:"탐식", season:null},
  "christmas-nightmare-ishmael": {sinner:"이스마엘", title:"크리스마스 악몽 이스마엘", grade:"HE", sin:"나태", season:5},
  "tidal-elegy-ishmael": {sinner:"이스마엘", title:"파도의 만가 이스마엘", grade:"HE", sin:"우울", season:null},
  "blind-obsession-ishmael": {sinner:"이스마엘", title:"맹목 이스마엘", grade:"WAW", sin:"오만", season:3},
  "what-is-cast-rodion": {sinner:"로쟈", title:"던져지는 것 로쟈", grade:"ZAYIN", sin:"오만", season:null},
  "into-the-sunset-rodion": {sinner:"로쟈", title:"노을 속으로 로쟈", grade:"ZAYIN", sin:"색욕", season:7},
  "rime-shank-rodion": {sinner:"로쟈", title:"얼음다리 로쟈", grade:"TETH", sin:"우울", season:1},
  "effervescent-corrosion-rodion": {sinner:"로쟈", title:"들끓는 부식 로쟈", grade:"TETH", sin:"탐식", season:3},
  "mirror-touch-rodion": {sinner:"로쟈",title:"거울촉각 로쟈",grade:"TETH",sin:"나태",season:8},
  "4th-match-flame-rodion": {sinner:"로쟈", title:"4번째 성냥불 로쟈", grade:"HE", sin:"분노", season:1},
  "pursuance-rodion": {sinner:"로쟈", title:"집행 로쟈", grade:"HE", sin:"나태", season:null},
  "hex-nail-rodion": {sinner:"로쟈", title:"저주못 로쟈", grade:"HE", sin:"질투", season:5},
  "sanguine-desire-rodion": {sinner:"로쟈", title:"핏빛욕망 로쟈", grade:"WAW", sin:"색욕", season:null},
  "indicants-trial-rodion": {sinner:"로쟈", title:"지정 재판 로쟈", grade:"WAW", sin:"분노", season:5},
  "branch-of-knowledge-sinclair": {sinner:"싱클레어", title:"지식나무의 가지 싱클레어", grade:"ZAYIN", sin:"탐식", season:null},
  "cavernous-wailing-sinclair": {sinner:"싱클레어", title:"낮은울음 싱클레어", grade:"ZAYIN", sin:"우울", season:null},
  "impending-day-sinclair": {sinner:"싱클레어", title:"다가올날 싱클레어", grade:"TETH", sin:"분노", season:1},
  "lifetime-stew-sinclair": {sinner:"싱클레어", title:"평생 스튜 싱클레어", grade:"TETH", sin:"색욕", season:1},
  "hex-nail-sinclair": {sinner:"싱클레어", title:"저주못 싱클레어", grade:"TETH", sin:"질투", season:5},
  "lantern-sinclair": {sinner:"싱클레어", title:"초롱 싱클레어", grade:"HE", sin:"탐식", season:null},
  "92-sinclair": {sinner:"싱클레어", title:"9장 2절 싱클레어", grade:"HE", sin:"색욕", season:3},
  "harmony-sinclair": {sinner:"싱클레어", title:"하모니 싱클레어", grade:"HE", sin:"분노", season:null},
  "tears-of-the-tarnished-blood-[汚血泣淚]-sinclair": {sinner:"싱클레어", title:"오혈읍루 [汚血泣淚] 싱클레어", grade:"WAW", sin:"탐식", season:6},
  "to-páthos-máthos-outis": {sinner:"오티스", title:"토 파토스 마토스 오티스", grade:"ZAYIN", sin:"오만", season:null},
  "ill-go-fer-scissors-how-bout-you-outis": {sinner:"오티스", title:"난 가위를 낼게, 너는? 오티스", grade:"ZAYIN", sin:"질투", season:7},
  "ya-śunyatā-tad-rupam-outis": {sinner:"오티스", title:"공즉시색 오티스", grade:"TETH", sin:"색욕", season:null},
  "sunshower-outis": {sinner:"오티스", title:"여우비 오티스", grade:"TETH", sin:"탐식", season:2},
  "ebony-stem-outis": {sinner:"오티스", title:"검은줄기 오티스", grade:"HE", sin:"탐식", season:1},
  "holiday-outis": {sinner:"오티스", title:"홀리데이 오티스", grade:"HE", sin:"분노", season:3},
  "dimension-shredder-outis": {sinner:"오티스", title:"차원찢개 오티스", grade:"HE", sin:"질투", season:4},
  "magic-bullet-outis": {sinner:"오티스", title:"마탄 오티스", grade:"HE", sin:"오만", season:null},
  "binds-outis": {sinner:"오티스", title:"구속 오티스", grade:"WAW", sin:"오만", season:4},
  "suddenly-one-day-gregor": {sinner:"그레고르", title:"어느날 갑자기 그레고르", grade:"ZAYIN", sin:"나태", season:null},
  "legerdemain-gregor": {sinner:"그레고르", title:"눈속임 그레고르", grade:"ZAYIN", sin:"탐식", season:1},
  "lantern-gregor": {sinner:"그레고르", title:"초롱 그레고르", grade:"TETH", sin:"탐식", season:null},
  "bygone-days-gregor": {sinner:"그레고르", title:"지난 날 그레고르", grade:"TETH", sin:"우울", season:4},
  "move-in-reg-gregor": {sinner:"그레고르", title:"입주 신고 그레고르", grade:"TETH", sin:"질투", season:7},
  "aedd-gregor": {sinner:"그레고르", title:"AEDD 그레고르", grade:"HE", sin:"우울", season:2},
  "solemn-lament-gregor": {sinner:"그레고르", title:"엄숙한 애도 그레고르", grade:"HE", sin:"우울", season:null},
  "christmas-nightmare-gregor": {sinner:"그레고르", title:"크리스마스 악몽 그레고르", grade:"HE", sin:"나태", season:5},
  "garden-of-thorns-gregor": {sinner:"그레고르", title:"가시 화원 그레고르", grade:"WAW", sin:"색욕", season:3},
  "unbrilliant-glory-gregor": {sinner:"그레고르", title:"눈부시지 않은 영광 그레고르", grade:"WAW", sin:"나태", season:null},
};

const EGO_DEFAULT = {
  "이상": "crows-eye-view-yi-sang",
  "파우스트": "representation-emitter-faust",
  "돈키호테": "la-sangre-de-sancho-don-quixote",
  "료슈": "forest-for-the-flames-ryoshu",
  "뫼르소": "chains-of-others-meursault",
  "홍루": "land-of-illusion-hong-lu",
  "히스클리프": "bodysack-heathcliff",
  "이스마엘": "snagharpoon-ishmael",
  "로쟈": "what-is-cast-rodion",
  "싱클레어": "branch-of-knowledge-sinclair",
  "오티스": "to-páthos-máthos-outis",
  "그레고르": "suddenly-one-day-gregor",
};

// E.G.O. 각성/침식 스킬 상세(코인 위력·효과) + 패시브. 나무위키 원본에서 파싱.
// 패시브를 찾지 못한 일부 특수 구조 E.G.O.(선택형 스킬 등)는 데이터 정확성을 위해 제외.
const EGO_SKILL_DETAIL = {
  "crows-eye-view-yi-sang": {awakening:{name:"오감도",sin:"나태",power:"18",coin:"+6",weight:"1",coinEffects:{1:"[적중시] 공격 위력 감소 2 부여 [적중시] 모든 아군에게 다음 턴에 신속 3 부여 [적중시] 다음 턴에 속박 2 부여"}},corrosion:null},
  "bygone-days-yi-sang": {awakening:{name:"지난 날",sin:"우울",power:"15",coin:"+8",weight:"3",coinEffects:{1:"[적중시] 대상에게 침잠 이 6 이상이면 다음 턴에 속박 2 부여"}},corrosion:{name:"지난 날",sin:"우울",power:"22",coin:"-6",weight:"3",coinEffects:{1:"[적중시] 침잠 2 부여. 다음 턴에 속박 2 부여 [적중시] 대상의 침잠 이 6 이상이면 다음 턴에 속박 2 부여"}}},
  "4th-match-flame-yi-sang": {awakening:{name:"4번째 성냥불",sin:"분노",power:"14",coin:"+12",weight:"5",coinEffects:{1:"[적중시] 화상 4 부여 [앞면 적중시] 화상 6 부여"}},corrosion:{name:"4번째 성냥불",sin:"분노",power:"26",coin:"-12",weight:"5",coinEffects:{1:"파괴 불가 코인 [적중시] 화상 4 부여 [파괴되지 않고 적중시] 화상 6 부여"}}},
  "wishing-cairn-yi-sang": {awakening:{name:"소망석",sin:"나태",power:"22",coin:"+4",weight:"3",coinEffects:{1:"[적중시] 나태 취약 2 부여 [앞면 적중시] 마비 3 부여"}},corrosion:{name:"소망석",sin:"나태",power:"29",coin:"-10",weight:"3",coinEffects:{1:"[적중시] 나태 취약 1 부여 [적중시] 마비 2 부여 [앞면 적중시] 다음 턴에 속박 3 부여"}}},
  "dimension-shredder-yi-sang": {awakening:{name:"차원찢개",sin:"오만",power:"20",coin:"+18",weight:"1",coinEffects:{1:"[적중시] 충전 횟수를 소모한 경우, 차원 균열 5 부여. [적중시] 피해량의 (대상의 파열x10)%만큼 오만 추가 피해를 주고, 파열 횟수 5 소모 (최대 100%)"}},corrosion:{name:"차원찢개",sin:"오만",power:"42",coin:"-24",weight:"1",coinEffects:{1:"[적중시] 충전 횟수를 소모한 경우, 차원 균열 5 부여. [적중시] 파열 6 부여 [적중시] 피해량의 (대상의 파열x10)%만큼 오만 추가 피해를 주고, 파열 횟수 5 소모 (최대 100%)"}}},
  "fell-bullet-yi-sang": {awakening:{name:"흉탄",sin:"오만",power:"18",coin:"+6",weight:"7",coinEffects:{1:"이 코인에는 메인 타겟만 피해를 입음. 메인 타겟이 아군이면, 찢어진 추억 당 피해량 +15% (최대 105%) [아군 처치 시] 자신과 무작위 아군 2명에게 호흡 3 부여 [아군 처치 시] 처치한 아군의 스킬 1, 2 속성의 E.G.O 자원 +1 [아군 처치 실패시] 호흡 3 얻음",2:"이 코인에는 서브 타겟만 피해를 입음. - 첫 번째 코인에서 아군을 처치하지 못했으면, 서브 타겟 중 무작위 1명이 피해를 입음 찢어진 추억 당 크리티컬 피해량 +9% (최대 63%) [크리티컬 적중 시] 출혈 3 부여"}},corrosion:{name:"흉탄",sin:"오만",power:"30",coin:"-8",weight:"7",coinEffects:{1:"이 코인에는 메인 타겟만 피해를 입음. 메인 타겟이 아군이면, 찢어진 추억 당 피해량 +15% (최대 105%) 메인 타겟이 아군이면, 자신의 호흡 당 피해량 +2% (최대 50%) 크리티컬 피해량 +30% [아군 처치시] 자신과 무작위 아군 3명에게 호흡 4 부여 [아군 처치시] 찢어진 추억 당 다음 코인의 피해량 +7% (최대 49%) [아군 처치시] 처치한 아군의 스킬 1, 2, 3 속성의 E.G.O 자원 +1 [아군 처치 실패시] 호흡 3 얻음",2:"이 코인에는 서브 타겟만 피해를 입음. - 첫 번째 코인에서 아군을 처치하지 못했으면, 서브 타겟 중 무작위 1명이 피해를 입음 찢어진 추억 당 크리티컬 피해량 +4% (최대 28%) [크리티컬 적중 시] 출혈 5 부여"}}},
  "solemn-lament-yi-sang": {awakening:{name:"엄숙한 애도",sin:"우울",power:"6",coin:"+3",weight:"3",coinEffects:{1:"파괴 불가 코인 [적중시] 무작위 나비 1 부여 [적중시] 침잠 횟수 1 증가",2:"파괴 불가 코인 [적중시] 무작위 나비 2 부여 [적중시] 침잠 횟수 1 증가",3:"파괴 불가 코인 [적중시] 무작위 나비 2 부여 [적중시] 침잠 횟수 1 증가",4:"파괴 불가 코인 [적중시] 무작위 나비 3 부여 [적중시] 침잠 횟수 1 증가 [적중시] 이번 턴과 다음 턴에 우울 취약 1, 우울 내성 약화 1 부여",5:"파괴 불가 코인 보유한 산나비·죽은나비 전부 소모 [적중시] 침잠 3 부여 [적중시] 진동 3 부여 [적중시] 나비 (산나비) 2 부여 [적중시] 나비 (죽은나비) 2 부여 [적중시] 진동 폭발 . 진동 횟수 1 감소 [적중시] 대상의 모든 나비 만큼 우울 피해 [적중시] 이 코인 최종 피해량의 (이 코인에서 소모한 산나비·죽은나비 × 2)%만큼 우울 피해"}},corrosion:{name:"엄숙한 애도",sin:"우울",power:"16",coin:"-3",weight:"3",coinEffects:{1:"파괴 불가 코인 [적중시] 나비 (산나비) 3 부여",2:"파괴 불가 코인 [적중시] 나비 (죽은나비) 3 부여 [적중시] 이번 턴과 다음 턴에 우울 취약 1, 우울 내성 약화 1 부여",3:"파괴 불가 코인 [적중시] 침잠 5 부여 [적중시] 진동 5 부여 [적중시] 진동 폭발 . 진동 횟수 1 감소 [적중시] 대상의 모든 나비 만큼 우울 피해 [적중시] 대상의 침잠 위력만큼 우울 피해"}}},
  "sunshower-yi-sang": {awakening:{name:"여우비",sin:"나태",power:"17",coin:"+15",weight:"7",coinEffects:{1:"[앞면 적중시] 자신의 정신력 15 회복"}},corrosion:{name:"여우비",sin:"나태",power:"35",coin:"-15",weight:"7",coinEffects:{1:"[적중시] 이번 턴, 다음 턴 동안 나태 취약 , 관통 취약 2 부여"}}},
  "great-trichiliocosm-[三千大世界]-yi-sang": {awakening:{name:"삼천대세계",sin:"분노",power:"4",coin:"+3",weight:"7",coinEffects:{1:"파괴 불가 코인 [적중시] 화상 2 부여 [적중시] 침잠 횟수 3 증가",2:"파괴 불가 코인 [파괴되지 않고 적중시] 이번 턴과 다음 턴에 깨어진 세계 1 부여",3:"파괴 불가 코인 [적중시] 대상의 ( 침잠 /3)만큼 화상 부여 (최대 5, 소수점 버림) [크리티컬 적중 시] 화상 횟수 1 증가",4:"파괴 불가 코인 [파괴되지 않고 적중시] 화상 1회 발동. 화상 횟수 1 감소"}},corrosion:{name:"삼천대세계",sin:"분노",power:"12",coin:"-2",weight:"7",coinEffects:{1:"파괴 불가 코인 [적중시] 화상 2 부여 [적중시] 침잠 횟수 3 증가",2:"파괴 불가 코인 [적중시] 이번 턴과 다음 턴에 깨어진 세계 1 부여",3:"파괴 불가 코인 [적중시] 화상 4 부여 [크리티컬 적중 시] 화상 횟수 1 증가",4:"파괴 불가 코인 [코인 시작 시] (모든 대상의 화상 위력과 침잠 위력의 합) 10당 피해량 +10% (최대 60%) [파괴되지 않고 적중시] 화상 1회 발동. 화상 횟수 1 감소"}}},
  "representation-emitter-faust": {awakening:{name:"표상 방출기",sin:"오만",power:"19",coin:"+4",weight:"3",coinEffects:{1:"[공격 종료시] 정신력이 가장 낮은 아군 4명의 정신력 12 회복"}},corrosion:null},
  "hex-nail-faust": {awakening:{name:"저주못",sin:"질투",power:"16",coin:"+10",weight:"1",coinEffects:{1:"[적중시] 관통 취약 3 부여 [적중시] 질투 취약 1 부여 [앞면 적중시] 저주 3 부여 [앞면 적중시] 못 3 부여 [적중시] 대상에게 저주 가 있으면 피해량 +50%"}},corrosion:{name:"저주못",sin:"질투",power:"20",coin:"+4",weight:"1",coinEffects:{1:"[적중시] 관통 취약 1 부여 [적중시] 질투 취약 3 부여 [적중시] 저주 3 부여 [적중시] 못 3 부여 [적중시] 대상에게 저주 가 있으면 피해량 +50%"}}},
  "92-faust": {awakening:{name:"9장 2절",sin:"색욕",power:"18",coin:"+8",weight:"1",coinEffects:{1:"[적중시] 화상 3 부여 [적중시] 대상의 화상 2를 방어 레벨 감소 1로 전환 (최대 10)"}},corrosion:{name:"9장 2절",sin:"색욕",power:"28",coin:"-12",weight:"1",coinEffects:{1:"[뒷면 적중시] 다음 턴에 속박 2 부여 [적중시] 화상 4 부여 [적중시] 대상의 화상 2를 방어 레벨 감소 1로 전환 (최대 10)"}}},
  "lasso-faust": {awakening:{name:"올가미",sin:"탐식",power:"4",coin:"+3",weight:"1",coinEffects:{1:"[적중시] 파열 횟수 2 증가",2:"[적중시] 파열 2 부여",3:"[적중시] 파열 2 부여"}},corrosion:{name:"올가미",sin:"탐식",power:"4",coin:"+4",weight:"3",coinEffects:{1:"[적중시] 파열 횟수 2 증가",2:"[적중시] 파열 4 부여",3:"[적중시] 올가미 2 부여 [적중시] 대상의 파열 1 당 피해량 +2% (최대 60%)"}}},
  "fluid-sac-faust": {awakening:{name:"물주머니",sin:"우울",power:"16",coin:"+8",weight:"5",coinEffects:{1:"[공격 종료시] 아군 전체 정신력 15 회복 [공격 종료시] 아군 전체 최대 체력의 15%만큼 체력 회복 [앞면 공격 종료 시] 아군 전체 정신력 10 회복"}},corrosion:{name:"물주머니",sin:"우울",power:"29",coin:"-14",weight:"5",coinEffects:{1:"[적중시] 대상에게 정신력 20 피해 [뒷면 적중시] 대상에게 정신력 10 피해 [적중시] 다음 턴에 공격 위력 감소 2 부여"}}},
  "telepole-faust": {awakening:{name:"전봇대",sin:"질투",power:"22",coin:"+6",weight:"3",coinEffects:{1:"[적중시] 마비 3 부여 [공격 종료시] 자신의 충전 횟수 7 증가 [앞면 공격 종료 시] 다음 턴에 무작위 아군 2명에게 질투 위력 증가 1, 신속 1 부여, 자신의 충전 횟수 3 증가"}},corrosion:{name:"전봇대",sin:"질투",power:"24",coin:"+10",weight:"3",coinEffects:{1:"[적중시] 마비 5 부여 [공격 종료시] 자신의 충전 횟수 10 증가 [뒷면 공격 종료 시] 다음 턴에 무작위 캐릭터 2명에게 마비 2, 속박 2 부여, 충전 횟수 3 증가"}}},
  "thoracalgia-faust": {awakening:{name:"흉통",sin:"오만",power:"8",coin:"+5",weight:"3",coinEffects:{1:"[적중시] 자신의 호흡 횟수 1 증가",2:"크리티컬 피해량 +( 호흡 위력과 호흡 횟수의 합)% (최대 40%)"}},corrosion:{name:"흉통",sin:"오만",power:"24",coin:"-8",weight:"3",coinEffects:{1:"[적중시] 자신의 호흡 횟수 1 증가",2:"크리티컬 피해량 +( 호흡 위력과 호흡 횟수의 합)% (최대 40%)"}}},
  "command-meltdown-faust": {awakening:{name:"명령 : 용해",sin:"탐식",power:"17",coin:"+13",weight:"3",coinEffects:{1:"[적중시] 파열 3 부여 [적중시] 화상 3 부여"}},corrosion:{name:"명령 : 용해",sin:"탐식",power:"3",coin:"+4",weight:"3",coinEffects:{1:"[적중시] 파열 1 부여",2:"[적중시] 파열 1 부여",3:"파괴 불가 코인 [적중시] 파열 횟수 2 증가",4:"파괴 불가 코인 [코인 시작 시] 이 스킬로 흐트러지거나 사망한 대상이 없으면, 피해량 +30% [적중시] 화상 3 부여"}}},
  "ardor-blossom-star-faust": {awakening:{name:"홍염살",sin:"분노",power:"10",coin:"+5",weight:"3",coinEffects:{1:"[적중시] 화상 1 부여 [적중시] (분노 공명 수 / 2)만큼 화상 부여 (최대 3, 소수점 버림)",2:"[적중시] (분노 공명 수 / 3)만큼 화상 횟수 증가 (최대 2, 소수점 버림) [이 코인 공격 종료시] 자신의 화상 이 15 이상이면, 모든 공격 대상에게 잔불 1 부여 (턴당 1회, 집중 전투인 경우 부위로 취급)"}},corrosion:{name:"홍염살",sin:"분노",power:"17",coin:"-3",weight:"5",coinEffects:{1:"[적중시] 화상 횟수 1 증가 [적중시] (분노 공명 수 / 3)만큼 화상 횟수 증가 (최대 2, 소수점 버림)",2:"[적중시] 화상 2 부여 [적중시] (분노 공명 수 / 2)만큼 화상 부여 (최대 3, 소수점 버림)",3:"[이 코인 공격 종료시] 잔불 6을 무작위로 공격 대상에게 나누어 부여 (턴당 1회, 최댓값인 대상 제외, 집중 전투인 경우 부위로 취급)"}}},
  "everlasting-faust": {awakening:{name:"영속",sin:"나태",power:"4",coin:"+5",weight:"1",coinEffects:{1:"[적중시] 진동 10, 진동 횟수 10 부여 [적중시] 진동 - 영속 으로 진폭 얽힘 [적중시] 진동 폭발 . 대상의 진동 횟수 1 감소",2:"[적중시] 진동 폭발 . 대상의 진동 횟수 1 감소",3:"[적중시] 진동 폭발 . 대상의 진동 횟수 1 감소",4:"[적중시] 진동 폭발 . 대상의 진동 횟수 1 감소 [적중시] 다음 턴에 대상의 속도 최댓값 절반으로 감소"}},corrosion:{name:"영속",sin:"나태",power:"36",coin:"-12",weight:"3",coinEffects:{1:"[적중시] 진동 5, 진동 횟수 5 부여 [적중시] 진동 - 영속 으로 진폭 얽힘 [적중시] 진동 폭발 . 대상의 진동 횟수 1 감소 [적중시] 진동 폭발 . 대상의 진동 횟수 1 감소 [적중시] 진동 폭발 . 대상의 진동 횟수 1 감소 [적중시] 다음 턴에 대상의 속도 최댓값 절반으로 감소"}}},
  "la-sangre-de-sancho-don-quixote": {awakening:{name:"라 샹그레 데 산쵸",sin:"색욕",power:"12",coin:"+14",weight:"1",coinEffects:{1:"[적중시] 출혈 8 부여 [적중시] 피해량의 50%만큼 체력 회복"}},corrosion:null},
  "ill-go-fer-scissors-how-bout-you-don-quixote": {awakening:{name:"난 가위를 낼게, 너는?",sin:"질투",power:"12",coin:"+12",weight:"3",coinEffects:{1:"파괴 불가 코인 [합 승리 후 적중시] 다음 턴에 위력 감소 1 부여 (대상 별 턴당 1회) [적중시] 출혈 4 부여"}},corrosion:{name:"난 가위를 낼게, 너는?",sin:"질투",power:"4",coin:"+4",weight:"3",coinEffects:{1:"파괴 불가 코인",2:"파괴 불가 코인",3:"파괴 불가 코인 [적중시] 다음 턴에 위력 감소 1 부여 (대상 별 턴당 1회) [적중시] 출혈 6 부여"}}},
  "lifetime-stew-don-quixote": {awakening:{name:"평생 스튜",sin:"색욕",power:"21",coin:"+4",weight:"3",coinEffects:{1:"[적중시] 화상 횟수 3 증가 [적중시] 출혈 횟수 3 증가"}},corrosion:{name:"평생 스튜",sin:"색욕",power:"22",coin:"+5",weight:"3",coinEffects:{1:"파괴 불가 코인 [적중시] 화상 횟수 4 증가 [적중시] 출혈 횟수 4 증가"}}},
  "wishing-cairn-don-quixote": {awakening:{name:"소망석",sin:"나태",power:"18",coin:"+9",weight:"3",coinEffects:{1:"[적중시] 출혈 횟수 4 증가 [적중시] 진동 5 부여 [앞면 적중시] 마비 2 부여"}},corrosion:{name:"소망석",sin:"나태",power:"24",coin:"-10",weight:"3",coinEffects:{1:"[크리티컬 적중 시] 진동 폭발 [크리티컬 적중 시] 출혈 8 부여 [뒷면 적중시] 진동 폭발 [적중시] 진동 폭발 . 진동 횟수 2 감소"}}},
  "electric-screaming-don-quixote": {awakening:{name:"전기울음",sin:"질투",power:"19",coin:"+8",weight:"2",coinEffects:{1:"[적 처치 시] 자신의 충전 횟수 2 증가"}},corrosion:{name:"전기울음",sin:"질투",power:"28",coin:"-12",weight:"2",coinEffects:{1:"[적 처치 시] 자신의 충전 횟수 3 증가"}}},
  "fluid-sac-don-quixote": {awakening:{name:"물주머니",sin:"우울",power:"20",coin:"+18",weight:"3",coinEffects:{1:"[적중시] 진동 폭발 [적중시] 대상에게 정신력 25 피해 대상이 흐트러짐, 사기 저하, 패닉 상태라면 피해량의 30%만큼 추가 피해 [적중시] 침잠 2 부여"}},corrosion:{name:"물주머니",sin:"우울",power:"42",coin:"-25",weight:"3",coinEffects:{1:"[적중시] 진동 10 부여 [적중시] 침잠 10 부여 대상이 흐트러짐, 사기 저하, 패닉 상태가 아니면 피해량의 50%만큼 추가 피해"}}},
  "telepole-don-quixote": {awakening:{name:"전봇대",sin:"질투",power:"18",coin:"+8",weight:"3",coinEffects:{1:"[적중시] 충전 횟수 10을 얻음 [공격 종료시] 질투 공명 수에 비례하여 모든 아군에게 충전 횟수 부여"}},corrosion:{name:"전봇대",sin:"질투",power:"19",coin:"+10",weight:"3",coinEffects:{1:"[적중시] 충전 횟수 10, 파열 10을 얻음 [공격 종료시] 모든 아군에게 취약 5, 파열 10, 충전 횟수 12 부여"}}},
  "red-sheet-don-quixote": {awakening:{name:"홍적",sin:"탐식",power:"16",coin:"+4",weight:"3",coinEffects:{1:"[적중시] 얽혀버린 저주 부적 을 4 + (탐식 공명 수)만큼 부여함 (최대 10)",2:"얽혀버린 저주 부적 당 피해량 +5% (최대 50%) [적중시] 파열 을 (대상의 얽혀버린 저주 부적 / 2)만큼 부여 (최대 4, 소수점 버림) [적중시] 파열 횟수를 (대상의 얽혀버린 저주 부적 / 4)만큼 부여 (최대 2, 소수점 버림)"}},corrosion:{name:"홍적",sin:"탐식",power:"26",coin:"-10",weight:"3",coinEffects:{1:"[적중시] 얽혀버린 저주 부적 을 6 + (탐식 공명 수)만큼 부여함 (최대 10)",2:"얽혀버린 저주 부적 당 피해량 +10% (최대 100%) [적중시] 파열 을 (대상의 얽혀버린 저주 부적 / 2)만큼 부여 (최대 4, 소수점 버림) [적중시] 파열 횟수를 (대상의 얽혀버린 저주 부적 / 4)만큼 부여 (최대 2, 소수점 버림)"}}},
  "yearning-mircalla-don-quixote": {awakening:{name:"갈망 - 미르칼라",sin:"색욕",power:"3",coin:"+3",weight:"7",coinEffects:{1:"파괴 불가 코인 공용 누적 소모 혈찬 1 당, 피해량 +0.1% (최대 10%)",2:"파괴 불가 코인 공용 누적 소모 혈찬 100 이상이면, 1 당 피해량 +0.1% (최대 20%)",3:"파괴 불가 코인 공용 누적 소모 혈찬 200 이상이면, 1 당 피해량 +0.1% (최대 30%)",4:"파괴 불가 코인 공용 누적 소모 혈찬 300 이상이면, 1 당 피해량 +0.1% (최대 50%) [합 승리 후 적중] 최대 색욕 완전 공명 수에 비례해서 목마른 장미 부여 (최대 4)"}},corrosion:{name:"갈망 - 미르칼라",sin:"색욕",power:"30",coin:"-10",weight:"7",coinEffects:{1:"[적중시] 공용 누적 소모 혈찬 50 당 출혈 1 부여 (최대 10) [적중시] 혈찬 이 100 이하이면, 출혈 10 부여",2:"공용 누적 소모 혈찬 100당 피해량 +20% (최대 100%) [합 승리 후 적중] 최대 색욕 완전 공명 수에 비례하여 목마른 장미 부여 (최대 5) [합 승리 후 적중] 입힌 체력 피해량의 50%만큼 체력 회복 (최대 10)"}}},
  "in-the-name-of-love-and-hate-don-quixote": {awakening:{name:"사랑과 증오의 이름으로 - 메이저 아르카나 슬레이브!!!",sin:"질투",power:"16",coin:"+5",weight:"5",coinEffects:{1:"파괴 불가 코인 [적중시] 자신의 충전 횟수 2 증가 (턴 당 최대 10)",2:"파괴 불가 코인 [적중시] 다음 턴에 메인 타겟에게 악당 표식 부여 [적중시] 파열 을 ( 충전 - 1)만큼 부여 (최대 4) - 자신에게 마법소녀 등장! 이 있으면, 파열 횟수 1 증가"}},corrosion:{name:"맥시마이즈드 리버스드 아르카나 슬레이브 - 이레이징 오브 헤이트리드",sin:"질투",power:"31",coin:"-12",weight:"5",coinEffects:{1:"파괴 불가 코인 [적중시] 자신의 충전 횟수 2 증가 (턴 당 최대 14)",2:"파괴 불가 코인 [적중시] 다음 턴에 메인 타겟에게 악당 표식 부여 [적중시] 침잠 을 ( 충전 - 1)만큼 부여 (최대 4) - 자신에게 역변-리버스드 가 있으면, 침잠 횟수 1 증가"}}},
  "forest-for-the-flames-ryoshu": {awakening:{name:"삼라염상",sin:"색욕",power:"18",coin:"+10",weight:"1",coinEffects:{1:"[적중시] 화상 6 부여 [적중시] 다음 턴에 취약 1 부여 [앞면 적중시] 다음 턴에 취약 1 부여"}},corrosion:null},
  "soda-ryoshu": {awakening:{name:"소다",sin:"우울",power:"15",coin:"+10",weight:"2",coinEffects:{1:"[적중시] 침잠 6 부여 [적 처치 시] 현재 보유 중인 E.G.O 자원 중 무작위 속성 1개의 E.G.O 자원을 3개 얻음. 모든 아군의 정신력 3 회복"}},corrosion:{name:"소다",sin:"우울",power:"26",coin:"-12",weight:"2",coinEffects:{1:"[적중시] 침잠 6 부여 [공격 종료 시] 모든 아군에게 E.G.O 자원 획득량 + 1, 다음 턴에 신속 1 부여"}}},
  "red-eyes-ryoshu": {awakening:{name:"적안",sin:"색욕",power:"18",coin:"+6",weight:"3",coinEffects:{1:"[적중시] 다음 턴에 속박 3 부여 [적중시] 대상에게 속박 이 3 이상 있을 때 다음 턴에 더하기 코인 약화 1 부여 [적중시] 대상의 속도가 자신보다 느릴 때 다음 턴에 참격 취약 2 부여"}},corrosion:{name:"적안",sin:"색욕",power:"26",coin:"-8",weight:"3",coinEffects:{1:"[적중시] 다음 턴에 속박 3 부여 [적중시] 대상에게 속박 이 3 이상 있을 때 다음 턴에 더하기 코인 약화 2 부여 [적중시] 대상의 속도가 자신보다 느릴 때 다음 턴에 참격 취약 1 - 3 부여"}}},
  "blind-obsession-ryoshu": {awakening:{name:"맹목",sin:"오만",power:"18",coin:"+6",weight:"3",coinEffects:{1:"[적중시] 충전 횟수 2 증가 [크리티컬 적중 시] 자신의 충전 횟수 2 증가"}},corrosion:{name:"맹목",sin:"오만",power:"30",coin:"-12",weight:"3",coinEffects:{1:"[적중시] 자신의 호흡 횟수 1 증가 [크리티컬 적중 시] 자신의 호흡 이 10 이상이라면, 크리티컬 피해량 +30%"}}},
  "4th-match-flame-ryoshu": {awakening:{name:"4번째 성냥불",sin:"분노",power:"21",coin:"+16",weight:"3",coinEffects:{1:"[적중시] 이 코인 최종 피해량의 (대상의 화상 위력 × 2)%만큼 분노 피해 (최대 20%) [적중시] 화상 4 부여"}},corrosion:{name:"4번째 성냥불",sin:"분노",power:"42",coin:"-16",weight:"3",coinEffects:{1:"파괴 불가 코인 [적중시] 이 코인 최종 피해량의 (대상의 화상 위력 × 3)%만큼 분노 피해 (최대 30%) [적중시] 화상 4 부여"}}},
  "red-eyes-(open)-ryoshu": {awakening:{name:"적안(開)",sin:"질투",power:"22",coin:"+8",weight:"3",coinEffects:{1:"[적중시] 대상에게 속박 이 3 이상 있을 때 피해량 +40% [적중시] 이 스킬로 대상을 흐트러짐 상태로 만들거나 처치하면, 체력이 가장 낮은 아군 1명과 자신의 체력을 최대 체력의 10%만큼 회복"}},corrosion:{name:"적안(開)",sin:"질투",power:"33",coin:"-14",weight:"3",coinEffects:{1:"[적중시] 대상에게 속박 이 3 이상 있을 때 피해량 +50% [적중시] 이 스킬로 대상을 흐트러짐 상태로 만들거나 처치하면, 체력이 가장 낮은 아군 1명과 자신의 체력을 최대 체력의 10%만큼 회복"}}},
  "thoracalgia-ryoshu": {awakening:{name:"흉통",sin:"오만",power:"8",coin:"+5",weight:"3",coinEffects:{2:"크리티컬 피해량이 ( 호흡 위력과 호흡 횟수의 합)만큼 증가 (최대 40%) [적중시] 깊은 들숨 4 얻음 (턴 당 1회)"}},corrosion:{name:"흉통",sin:"오만",power:"24",coin:"-8",weight:"4",coinEffects:{2:"크리티컬 피해량이 ( 호흡 위력과 호흡 횟수의 합)만큼 증가 (최대 40%) [적중시] 깊은 들숨 7 얻음 (턴 당 1회)"}}},
  "contempt-awe-ryoshu": {awakening:{name:"경멸, 경외",sin:"색욕",power:"10",coin:"+7",weight:"1",coinEffects:{1:"[공격 종료시] 출혈 15를 공격 대상에게 균등하게 나눠서 부여"}},corrosion:{name:"경멸, 경외",sin:"색욕",power:"44",coin:"-20",weight:"1",coinEffects:{1:"[적중시] 대상에게 출혈 이 있으면, 피해량 +(대상의 출혈 위력과 출혈 횟수의 합)% (최대 60%) [적중시] 출혈 (10 + 최대 공명 수 × 2.5)만큼 부여 (최대 25, 소수점 버림) [적중시] 출혈 횟수 5 증가"}}},
  "great-trichiliocosm-[三千大世界]-ryoshu": {awakening:{name:"삼천대세계",sin:"분노",power:"6",coin:"+5",weight:"7",coinEffects:{1:"파괴 불가 코인 [적중시] 화상 2 부여 [적중시] 다음 턴에 속박 1 부여",2:"파괴 불가 코인 [적중시] 출혈 2 부여 [크리티컬 적중 시] 마지막 코인 위력 +5 (스킬 당 1회)",3:"파괴 불가 코인 크리티컬 피해량 +30% [코인 시작 시] (모든 대상의 화상 + 출혈 위력) 10당 피해량 +1% (최대 50%) [코인 시작 시] (모든 대상의 화상 + 출혈 횟수) 10당 코인 위력 +1 (최대 5) [코인 시작 시] 자신의 나생[羅生] 을 모두 소모하고, 소모한 수치 5당 피해량 +1% (최대 198%) - 공격 대상이 1명이면, 이 효과가 2배로 적용됨 (집중 전투인 경우, 본체를 기준으로 판정)"}},corrosion:{name:"삼천대세계",sin:"분노",power:"14",coin:"-3",weight:"7",coinEffects:{1:"파괴 불가 코인 [적중시] 화상 2 부여 [적중시] 다음 턴에 속박 1 부여",2:"파괴 불가 코인 [적중시] 출혈 2 부여 [크리티컬 적중 시] 마지막 코인 피해량 +50% (스킬 당 1회)",3:"파괴 불가 코인 크리티컬 피해량 +30% [코인 시작 시] (모든 대상의 화상 + 출혈 위력) 10당 피해량 +1% (최대 50%) [코인 시작 시] (모든 대상의 화상 + 출혈 횟수) 10당 최종 위력 +1 (최대 5) [코인 시작 시] 자신의 나생[羅生] 을 모두 소모하고, 소모한 수치 5당 피해량 +1.25% (최대 248%) - 공격 대상이 1명이면, 이 효과가 2배로 적용됨 (집중 전투인 경우, 본체를 기준으로 판정)"}}},
  "chains-of-others-meursault": {awakening:{name:"타인의 사슬",sin:"오만",power:"19",coin:"+3",weight:"1",coinEffects:{1:"[적중시] 다음 턴에 속박 5 부여 [적중시] 다음 턴에 속박 3 얻음 [적중시] 다음 턴에 공격 위력 감소 4 부여 [적중시] 다음 턴에 공격 위력 감소 3 얻음 [적중시] 다음 턴에 보호 2 얻음"}},corrosion:null},
  "screwloose-wallop-meursault": {awakening:{name:"나사빠진 일격",sin:"질투",power:"23",coin:"+4",weight:"2",coinEffects:{1:"[앞면 적중시] 마비 3 부여"}},corrosion:{name:"나사빠진 일격",sin:"질투",power:"21",coin:"+8",weight:"2",coinEffects:{1:"[앞면 적중시] 마비 3 부여 피해량의 30%만큼 흐트러짐 손상 입힘"}}},
  "regret-meursault": {awakening:{name:"후회",sin:"분노",power:"20",coin:"+10",weight:"1",coinEffects:{1:"[적중시] 진동 횟수 3 증가, (분노 완전 공명의 수)/3만큼 추가 증가 [적중시] 진동 폭발 진동 폭발 시 대상에게 흐트러짐 구간이 없는 경우, 최종 흐트러짐 손상의 (12 + 3×(분노 완전 공명 수))%만큼 분노 피해를 줌"}},corrosion:{name:"후회",sin:"분노",power:"30",coin:"-10",weight:"1",coinEffects:{1:"[적중시] 진동 폭발 진동 폭발 시 진동 수치의 50%만큼 흐트러짐 손상 증가 대상에게 남아있는 흐트러짐 구간이 없는 경우, 대신 최종 흐트러짐 손상의 (12 + 3×(분노 완전 공명 수))%만큼 분노 피해를 줌 진동 횟수 1 감소 [공격 종료 시] 다음 턴에 속박 3, 타격 위력 증가 1을 얻음"}}},
  "electric-screaming-meursault": {awakening:{name:"전기울음",sin:"질투",power:"22",coin:"+4",weight:"2",coinEffects:{1:"[적중시] 파열 3 부여"}},corrosion:{name:"전기울음",sin:"질투",power:"28",coin:"-12",weight:"2",coinEffects:{1:"[적중시] 마비 1 부여 [적중시] 파열 3 부여"}}},
  "pursuance-meursault": {awakening:{name:"집행",sin:"나태",power:"26",coin:"+8",weight:"3",coinEffects:{1:"[적중시] 진동 폭발"}},corrosion:{name:"집행",sin:"나태",power:"34",coin:"-8",weight:"3",coinEffects:{1:"[적중시] 진동 폭발"}}},
  "capote-meursault": {awakening:{name:"카포테",sin:"분노",power:"20",coin:"+25",weight:"1",coinEffects:{1:"[적중시] 화상 10 부여 [적중시] 대상의 화상 수치만큼 진동 부여 [적중시] 무작위 적 5명에게 화상 3 부여 [적중시] 진동 폭발 . 진동 폭발 시 진동 횟수 2 감소, 진동 폭발 로 대상이 흐트러진 경우 무작위 적 5명의 화상 횟수 3 증가"}},corrosion:{name:"카포테",sin:"분노",power:"37",coin:"-15",weight:"3",coinEffects:{1:"[적중시] 화상 12 부여 [적중시] 대상의 화상 수치만큼 진동 부여 [적중시] 무작위 캐릭터 5명에게 화상 3 부여 [적중시] 진동 폭발 . 진동 폭발 시 진동 횟수 2 감소, 진동 폭발 로 대상이 흐트러진 경우 무작위 캐릭터 5명의 화상 횟수 4 증가"}}},
  "shadow-vested-bladesinger-[着影揮刀]-meursault": {awakening:{name:"착영휘도",sin:"오만",power:"12",coin:"+4",weight:"1",coinEffects:{1:"[적중시] 출혈 4 부여",2:"[적중시] 출혈 횟수 2 증가"}},corrosion:{name:"착영휘도",sin:"오만",power:"13",coin:"-2",weight:"3",coinEffects:{1:"파괴 불가 코인 [크리티컬 적중 시] 마지막 코인의 최종 위력 +2 (코인당 1회) [적중시] 출혈 1 부여",2:"파괴 불가 코인 [크리티컬 적중 시] 마지막 코인의 최종 위력 +2 (코인당 1회) [적중시] 출혈 1 부여",3:"파괴 불가 코인 [크리티컬 적중 시] 마지막 코인의 최종 위력 +2 (코인당 1회) [적중시] 출혈 1 부여",4:"파괴 불가 코인 [적중시] 출혈 횟수 2 증가"}}},
  "yearning-mircalla-meursault": {awakening:{name:"갈망 - 미르칼라",sin:"색욕",power:"5",coin:"+4",weight:"1",coinEffects:{1:"[적중시] 출혈 2 부여 [적중시] 최대 공명이 4 이상이면, 대상의 출혈 1회 발동 ( 출혈 횟수 1 감소)",2:"[적중시] 출혈 2 부여 [적중시] 최대 공명이 4 이상이면, 대상의 출혈 1회 발동 ( 출혈 횟수 1 감소)",3:"파괴 불가 코인 [합 승리 후 적중] 장미 쐐기 횟수 2 증가 [적중시] 장미 쐐기 횟수 2 증가",4:"파괴 불가 코인 [합 승리 후 적중] 대상의 출혈 1 + (최대 공명 수 / 2)회 발동 (최대 3회. 발동한 횟수만큼 출혈 횟수 감소) [적 처치시] 적의 남은 체력을 초과하여 피해를 준 경우, 초과한 피해량을 고정 피해로 적 전체에 나눠서 가함. (최소 1)"}},corrosion:{name:"갈망 - 미르칼라",sin:"색욕",power:"6",coin:"+4",weight:"1",coinEffects:{1:"[적중시] 자신과 대상에게 출혈 3 부여 [적중시] 자신과 대상의 출혈 1회 발동 ( 출혈 횟수 1 감소)",2:"[적중시] 자신과 대상에게 출혈 3 부여 [적중시] 자신과 대상의 출혈 1회 발동 ( 출혈 횟수 1 감소)",3:"파괴 불가 코인 [합 승리 후 적중] 장미 쐐기 횟수 2 증가 [적중시] 장미 쐐기 횟수 2 증가 - 대상에게 장미 쐐기 가 없었으면, 장미 쐐기 위력이 추가로 4 증가",4:"파괴 불가 코인 [합 승리 후 적중] 대상의 출혈 1 + (최대 공명 수 / 2)회 발동 (최대 3회. 발동한 횟수만큼 출혈 횟수 감소) [적 처치시] 적의 남은 체력을 초과하여 피해를 준 경우, 초과한 피해량을 고정 피해로 적 전체에 나눠서 가함. (최소 1)"}}},
  "crushbound-past-meursault": {awakening:{name:"분쇄될 과거",sin:"나태",power:"4",coin:"+4",weight:"6",coinEffects:{1:"[적중시] 진동 횟수 2 증가 [적중시] (나태 공명 수 / 2)만큼 진동 횟수 증가 (최대 3) [적중시] 메인 타겟이면, 대상의 현재 진동으로 진폭 얽힘",2:"[적중시] 진동 4 부여",3:"[코인 시작 시] 메인 타겟의 진동 위력 1당, 이 코인의 피해량 +1% (최대 50%)",4:"[코인 시작 시] 메인 타겟의 ( 진동 위력 + 진동 횟수) 1당, 이 코인의 피해량 +1% (최대 100%) [적중시] 진동 폭발 . 대상의 진동 횟수 1 감소 [적중시] 이 코인의 효과로 인한 피해량 증가량이 50% 이상이면, 진동 폭발 1회. [적중시] 이 코인의 효과로 인한 피해량 증가량이 100% 이상이면, 진동 폭발 2회. 진동 횟수 2 감소"}},corrosion:{name:"분쇄될 과거",sin:"나태",power:"30",coin:"-10",weight:"7",coinEffects:{1:"[코인 시작 시] 메인 타겟의 ( 진동 위력 + 진동 횟수) 1당, 이 코인의 피해량 +2% (최대 100%) [적중시] 진동 5, 진동 횟수 2 부여 [적중시] (나태 공명 수)만큼 진동 횟수 증가 (최대 6) [적중시] 메인 타겟이면, 대상의 현재 진동으로 진폭 얽힘 [적중시] 진동 폭발 2회. 진동 횟수 2 감소 [적중시] 이 코인의 효과로 인한 피해량 증가량이 100% 이상이면, 진동 폭발 2회. 진동 횟수 2 감소"}}},
  "land-of-illusion-hong-lu": {awakening:{name:"허환경",sin:"우울",power:"15",coin:"+10",weight:"3",coinEffects:{1:"[적중시] 침잠 5 부여 [공격 종료시] 다음 턴에 모든 아군의 정신력 감소 효율 -2, E.G.O 사용시 정신력 감소량 -2"}},corrosion:null},
  "declaration-of-rejection-hong-lu": {awakening:{name:"거절선포",sin:"질투",power:"10",coin:"+6",weight:"3",coinEffects:{1:"[사용시] 자신의 충전 위력만큼 합 위력 증가 (최대 3) [공격 시작 전] 자신의 충전 횟수 5 증가 [공격 시작 전] 자신의 충전 횟수를 최대 10까지 소모하고, 자신과 자신을 제외한 아군 최대 (1 + 소모한 충전 횟수/2)명에게 충전 역장 5 부여 (최대 7명, 소수점 버림) [적중시] 자신의 충전 횟수 2 증가",2:"[적중시] 광전 2 부여"}},corrosion:{name:"거절선포",sin:"질투",power:"22",coin:"-6",weight:"3",coinEffects:{1:"[피아식별불가] 무작위 대상 공격 보호막을 보유한 대상에게 가하는 피해량 +25% [공격 시작 전] 파괴된 코인 수당 기본 위력 -6 (최대 -12) [공격 시작 전] 자신의 충전 위력만큼 최종 위력 증가 (최대 3) [공격 시작 전] 자신의 충전 횟수 5 증가 [공격 시작 전] 자신의 충전 횟수를 최대 10까지 소모하고, 자신과 자신을 제외한 아군 최대 (1 + 소모한 충전 횟수/2)명에게 충전 역장 7 부여 (최대 7명, 소수점 버림) 파괴 불가 코인 [적중시] 자신의 충전 횟수 2 증가",2:"파괴 불가 코인 [코인 시작 시] 자신의 충전 횟수를 최대 10까지 소모하고, 소모한 수치만큼 이 코인의 최종 위력 증가 [적중시] 광전 2 부여"}}},
  "roseate-desire-hong-lu": {awakening:{name:"분홍욕망",sin:"색욕",power:"19",coin:"+9",weight:"3",coinEffects:{1:"[적중시] 수비 위력 감소 2 부여 [적중시] 방어 레벨 감소 5 부여"}},corrosion:{name:"분홍욕망",sin:"색욕",power:"30",coin:"-15",weight:"3",coinEffects:{1:"[적중시] 수비 위력 감소 2 부여 [적중시] 방어 레벨 감소 5 부여 [적중시] 다음 턴에 속박 4 부여"}}},
  "soda-hong-lu": {awakening:{name:"소다",sin:"질투",power:"20",coin:"+7",weight:"3",coinEffects:{1:"[앞면 공격 종료 시] 체력 비율이 가장 낮은 아군 2명의 체력 15 회복 [뒷면 공격 종료 시] 정신력이 가장 낮은 아군 2명의 정신력 15 회복 [크리티컬 공격 종료 시] 체력 비율이 가장 낮은 아군 1명의 체력 8 회복, 정신력이 가장 낮은 아군 1명의 정신력 8 회복"}},corrosion:{name:"소다",sin:"질투",power:"25",coin:"-15",weight:"3",coinEffects:{1:"[적중시] 다음 턴에 속박 1 부여 [적중시] 진동 5 부여"}}},
  "cavernous-wailing-hong-lu": {awakening:{name:"낮은울음",sin:"나태",power:"18",coin:"+8",weight:"3",coinEffects:{1:"[적중시] 진동 3, 진동 횟수 3 부여 [적중시] 진동 - 반향 으로 진폭 변환 [적중시] 진동 폭발 . 대상의 진동 횟수 1 감소"}},corrosion:{name:"낮은울음",sin:"나태",power:"26",coin:"-8",weight:"3",coinEffects:{1:"[적중시] 진동 6, 진동 횟수 6 부여 [적중시] 진동 - 반향 으로 진폭 변환 [적중시] 진동 폭발 . 대상의 진동 횟수 1 감소 [적중시] 진동 폭발 . 대상의 진동 횟수 1 감소"}}},
  "lasso-hong-lu": {awakening:{name:"올가미",sin:"탐식",power:"4",coin:"+2",weight:"2",coinEffects:{2:"[적중시] 올가미 2 부여",3:"[적중시] 다음 턴에 체력 회복 감소 2 부여 [적중시] 탐식 공명 수 2 당, 파열 횟수 1 증가 (최대 3)",4:"[적중시] 자신의 속도만큼 출혈 을 무작위로 공격 대상에게 나누어 부여 (최대 7) [적중시] 자신의 속도만큼 파열 을 무작위로 공격 대상에게 나누어 부여 (최대 7)"}},corrosion:{name:"올가미",sin:"탐식",power:"5",coin:"+3",weight:"2",coinEffects:{1:"[적중시] 올가미 3 부여",2:"[적중시] 다음 턴에 체력 회복 감소 3 부여 [적중시] 출혈 횟수 2 증가 [적중시] 파열 횟수 2 증가",3:"[적중시] 대상의 출혈 1 당 피해량 +1% (최대 30%) [적중시] 대상의 파열 1 당 피해량 +1% (최대 30%)"}}},
  "dimension-shredder-hong-lu": {awakening:{name:"차원찢개",sin:"오만",power:"22",coin:"+6",weight:"3",coinEffects:{1:"[적중시] 취약 1, 차원 균열 4 부여"}},corrosion:{name:"차원찢개",sin:"오만",power:"24",coin:"+10",weight:"3",coinEffects:{1:"[적중시] 취약 1, 차원 균열 4 부여"}}},
  "effervescent-corrosion-hong-lu": {awakening:{name:"들끓는 부식",sin:"탐식",power:"17",coin:"+15",weight:"2",coinEffects:{1:"[적중시] (탐식 공명 수/2)만큼 파열 부여 [적중시] 다음 턴에 탐식 취약 2 부여 [적중시] 다음 턴에 속박 2 부여"}},corrosion:{name:"들끓는 부식",sin:"탐식",power:"27",coin:"-12",weight:"3",coinEffects:{1:"[적중시] (탐식 공명 수/3)만큼 파열 횟수 증가 [적중시] 피해량의 50%만큼 자신의 체력 회복 [적중시] 다음 턴에 속박 2 부여"}}},
  "to-remain-oneself-[宁作吾]-hong-lu": {awakening:{name:"영작오",sin:"오만",power:"10",coin:"+6",weight:"4",coinEffects:{2:"시엔징 이 있으면, 크리티컬 피해량 +( 호흡 위력)% (최대 20%) 상급 시엔징 이 있으면, 크리티컬 피해량 +( 호흡 위력과 호흡 횟수의 합)% (최대 40%) [적중시] 침잠 3 부여"}},corrosion:{name:"영작오",sin:"오만",power:"4",coin:"+4",weight:"5",coinEffects:{1:"파괴 불가 코인 [적중시] 입힌 피해량의 10%만큼 오만 피해를 줌 (최대 10)",2:"파괴 불가 코인 [적중시] 입힌 피해량의 15%만큼 오만 피해를 줌 (최대 15)",3:"파괴 불가 코인 시엔징 이 있으면, 크리티컬 피해량 +( 호흡 위력)% (최대 30%) 상급 시엔징 이 있으면, 크리티컬 피해량 +( 호흡 위력과 호흡 횟수의 합)% (최대 60%) [적중시] 침잠 2 부여, 침잠 횟수 2 증가 [적중시] 입힌 피해량의 25%만큼 오만 피해를 줌 (최대 25)"}}},
  "tears-of-the-tarnished-blood-[汚血泣淚]-hong-lu": {awakening:{name:"오혈읍루 - 시[始]",sin:"탐식",power:"20",coin:"-10",weight:"1",coinEffects:{1:"이 스킬의 최종 위력만큼 자신이 고정 피해를 받음 - 이 피해로 흐트러지거나 체력이 1 미만으로 감소하지 않음 매화첨 을 보유한 상태에서 체력이 0이 되는 피해를 받으면, 오혈읍루 - 종[終]으로 발동됨"},alt:{name:"오혈읍루 - 종[終]",sin:"탐식",power:"4",coin:"+5",weight:"7",coinEffects:{1:"[적중시] 파열 횟수 3 증가",2:"[적중시] 파열 2 부여",3:"[적중시] 파열 2 부여",4:"[적중시] 파열 2 부여"}}},corrosion:{name:"오혈읍루 - 시[始]",sin:"탐식",power:"12",coin:"-2",weight:"7",coinEffects:{1:"파괴 불가 코인 [적중시] 파열 횟수 2 증가",2:"파괴 불가 코인 [적중시] 파열 1 부여",3:"파괴 불가 코인 [적중시] 파열 1 부여",4:"파괴 불가 코인 [적중시] 파열 1 부여"}}},
  "bodysack-heathcliff": {awakening:{name:"시체자루",sin:"질투",power:"15",coin:"+9",weight:"1",coinEffects:{1:"[적중시] 다음 턴에 공격 위력 증가 1 얻음 [적중시] 다음 턴에 신속 3 얻음 [적 처치 시] 다음 턴에 공격 위력 증가 2 얻음"}},corrosion:null},
  "holiday-heathcliff": {awakening:{name:"홀리데이",sin:"탐식",power:"17",coin:"+8",weight:"2",coinEffects:{1:"[적중시] 다음 턴에 화상 , 출혈 , 진동 , 파열 , 침잠 중 무작위 1개 효과의 위력을 (2 + (최대 탐식 완전 공명의 수))회 부여 (최대 7) [적 처치 시] 무작위 아군 2명에게 다음 턴에 호흡 횟수 2, 충전 횟수 2, 신속 2, 공격 레벨 증가 2, 방어 레벨 증가 2 중 무작위 1개 효과를 부여"}},corrosion:{name:"홀리데이",sin:"탐식",power:"25",coin:"-10",weight:"2",coinEffects:{1:"[적중시] 다음 턴에 화상 , 출혈 , 진동 , 파열 , 침잠 중 무작위 1개 효과의 위력을 (2 + (최대 탐식 완전 공명의 수))회 부여 (최대 7)"}}},
  "aedd-heathcliff": {awakening:{name:"AEDD",sin:"우울",power:"22",coin:"+7",weight:"3",coinEffects:{1:"[적중시] 마비 3, 우울 취약 1 부여"}},corrosion:{name:"AEDD",sin:"우울",power:"29",coin:"-7",weight:"1",coinEffects:{1:"[적중시] 충전 횟수를 전부 소모하여 피해량의 (소모한 충전 횟수 x 2.5)%만큼 우울 속성 추가 피해를 줌 (최대 50%) [공격 종료시] 충전 횟수 전부 소모 [뒷면 공격 종료 시] 체력을 전체 체력의 10%만큼 소모하여 자신의 충전 횟수 10 증가"}}},
  "fell-bullet-heathcliff": {awakening:{name:"흉탄",sin:"오만",power:"7",coin:"+7",weight:"1",coinEffects:{2:"찢어진 추억 당 크리티컬 피해량 +15% (최대 105%) [적중시] 출혈 5 부여 [크리티컬 적중 시] 침잠 3 부여 [크리티컬 처치 시] 자신에게 탄환 효과가 있다면, 탄환 1 얻음 (전투 당 3회)"}},corrosion:{name:"흉탄",sin:"오만",power:"30",coin:"-12",weight:"2",coinEffects:{1:"[적중시] 출혈 3, 침잠 3 부여"}}},
  "move-in-reg-heathcliff": {awakening:{name:"입주 신고",sin:"질투",power:"4",coin:"+3",weight:"3",coinEffects:{1:"[적중시] 화상 2 부여",2:"[적중시] 화상 2 부여",3:"[적중시] 다음 턴에 속박 1 부여 [적중시] 주민등록 마이크로 칩 2 부여 [적중시] 자신의 충전 횟수 1~3 증가"}},corrosion:{name:"입주 신고",sin:"질투",power:"5",coin:"+3",weight:"3",coinEffects:{1:"[적중시] 화상 2 부여",2:"[적중시] 화상 2 부여",3:"대상에게 주민등록 마이크로 칩 이 있으면, 피해량 +20% [적중시] 다음 턴에 속박 1 부여 [적중시] 주민등록 마이크로 칩 2 부여 [적중시] 자신의 충전 횟수 1~3 증가 [적 처치 시] 자신의 충전 횟수 2 증가"}}},
  "telepole-heathcliff": {awakening:{name:"전봇대",sin:"질투",power:"33",coin:"-12",weight:"3",coinEffects:{1:"[뒷면 적중시] 자신의 충전 횟수 5 증가"}},corrosion:{name:"전봇대",sin:"질투",power:"39",coin:"-21",weight:"3",coinEffects:{1:"[앞면 적중시] 다음 턴에 취약 3 얻음"}}},
  "ya-śunyatā-tad-rupam-heathcliff": {awakening:{name:"공즉시색",sin:"색욕",power:"18",coin:"+8",weight:"3",coinEffects:{1:"[적중시] 다음 턴에 공격 위력 감소 2 부여 [공격 종료 시] 자신을 제외하고 정신력이 가장 낮은 아군 4명의 정신력 25 회복"}},corrosion:{name:"공즉시색",sin:"색욕",power:"33",coin:"-15",weight:"3",coinEffects:{1:"[적중시] 자신을 제외한 아군 1명에게 방어 레벨 감소 3 부여 [적중시] 다음 턴에 방어 레벨 증가 2 얻음 [적중시] 다음 턴에 피해량 증가 1 얻음 [뒷면 적중시] 자신의 정신력 4 회복 [뒷면 적중시] 취약 1 부여"}}},
  "asymmetrical-inertia-heathcliff": {awakening:{name:"쏠린 관성",sin:"나태",power:"8",coin:"+8",weight:"3",coinEffects:{1:"[적중시] 진동 횟수 1 증가 [앞면 적중시] 진동 5 부여 [뒷면 적중시] 진동 횟수 3 증가",2:"[적중시] 진동 폭발 . 대상의 진동 횟수 1 감소. - 진동 폭발 시 이번 턴에 나태 취약 1 부여 - 최대 공명이 나태 공명 3 이상이면, 다음 턴에도 나태 취약 1 부여"}},corrosion:{name:"쏠린 관성",sin:"나태",power:"28",coin:"-8",weight:"3",coinEffects:{1:"[적중시] 진동 횟수 2 증가 [앞면 적중시] 진동 6 부여 [뒷면 적중시] 진동 횟수 4 증가",2:"[적중시] 진동 폭발 . 대상의 진동 횟수 1 감소. [적중시] 진동 폭발 . 대상의 진동 횟수 1 감소. - 진동 폭발 시 이번 턴에 나태 취약 2 부여 - 최대 공명이 나태 공명 3 이상이면, 다음 턴에도 나태 취약 2 부여"}}},
  "binds-heathcliff": {awakening:{name:"구속",sin:"우울",power:"18",coin:"+15",weight:"7",coinEffects:{1:"[적중시] 다음 턴에 속박 1 부여 [적중시] 침잠 4 부여 [적중시] 진동 4 부여 [적중시] 진동 폭발"}},corrosion:{name:"구속",sin:"우울",power:"35",coin:"-15",weight:"7",coinEffects:{1:"[적중시] 다음 턴에 속박 3 부여 [적중시] 침잠 4 부여 [적중시] 진동 4 부여 [적중시] 진동 폭발"}}},
  "snagharpoon-ishmael": {awakening:{name:"작살박이",sin:"우울",power:"19",coin:"+4",weight:"1",coinEffects:{1:"[적중시] 다음 턴에 속박 6 부여 [적중시] 진동 3 부여 [적중시] 진동 폭발"}},corrosion:null},
  "hundred-footed-death-maggot-[蝍蛆殺]-ishmael": {awakening:{name:"즉저살",sin:"우울",power:"10",coin:"+5",weight:"3",coinEffects:{1:"[적중시] 침잠 2 부여",2:"[적중시] 파열 2 부여 [적중시] 탐식 혹은 우울 공명이 4 이상이면, 해당 공명 수만큼 지네 독 을 부여 (최대 5)"}},corrosion:{name:"즉저살",sin:"우울",power:"16",coin:"-7",weight:"3",coinEffects:{1:"[적중시] 침잠 2 부여",2:"[적중시] 파열 2 부여 [적중시] 탐식 혹은 우울 공명이 4 이상이면, 해당 공명 수만큼 지네 독 을 부여 (최대 5)"}}},
  "roseate-desire-ishmael": {awakening:{name:"분홍욕망",sin:"색욕",power:"29",coin:"-13",weight:"1",coinEffects:{1:"[적중시] 공격 레벨 감소 10 부여 [적중시] 마비 3 부여 [적중시] 다음 턴에 속박 3 부여"}},corrosion:{name:"분홍욕망",sin:"색욕",power:"19",coin:"+9",weight:"1",coinEffects:{1:"[적중시] 공격 레벨 감소 10 부여 [적중시] 마비 5 부여 [적중시] 다음 턴에 속박 5 부여"}}},
  "capote-ishmael": {awakening:{name:"카포테",sin:"분노",power:"20",coin:"+7",weight:"2",coinEffects:{1:"[적중시] 화상 4 부여 [적중시] 대상에게 정신력 15 피해"}},corrosion:{name:"카포테",sin:"분노",power:"27",coin:"-7",weight:"4",coinEffects:{1:"[적중시] 화상 5 부여 [적중시] 대상에게 정신력 15 피해 [적중시] 진동 폭발 . 진동 폭발 시 진동 횟수 2 감소. 진동 폭발 로 대상이 흐트러진 경우, 무작위 캐릭터 3명에게 화상 2 부여."}}},
  "bygone-days-ishmael": {awakening:{name:"지난 날",sin:"우울",power:"17",coin:"+9",weight:"1",coinEffects:{1:"[적중시] 침잠 횟수 3 증가 [적중시] 저주 2 부여 [적중시] 우울 공명 4 이상이면, 우울 취약 1 부여 [적중시] 초청받지 않은 자 2 부여"}},corrosion:{name:"지난 날",sin:"우울",power:"28",coin:"-10",weight:"3",coinEffects:{1:"[적중시] 침잠 횟수 3 증가 [적중시] 저주 2 부여 [적중시] 우울 공명 3 당, 우울 취약 1 부여 (최대 2) [적중시] 초청받지 않은 자 2 부여 [적중시] 다음 턴에 저택의 메아리 2 부여"}}},
  "ardor-blossom-star-ishmael": {awakening:{name:"홍염살",sin:"분노",power:"19",coin:"+22",weight:"3",coinEffects:{1:"[앞면 적중시] 피해량의 40%만큼 흐트러짐 손상 입힘 [적중시] 분노 공명 수만큼 화상 부여 [앞면 공격 종료시] 무작위 적 3명에게 화상 5 부여"}},corrosion:{name:"홍염살",sin:"분노",power:"41",coin:"-22",weight:"5",coinEffects:{1:"[공격 종료시] 모든 캐릭터에게 (분노 공명 수 *2)만큼 화상 부여 [적중시] 피해량의 60%만큼 흐트러짐 손상 입힘"}}},
  "wingbeat-ishmael": {awakening:{name:"날갯짓",sin:"탐식",power:"3",coin:"+7",weight:"1",coinEffects:{1:"[적중시] 자신의 체력을 최대 체력의 20%만큼 회복",2:"[앞면 적중시] 정신력 1 ~ 2 감소 [앞면 적중시] 이 코인 재사용 (스킬당 최대 5회) [적중시] 자신의 체력을 피해량의 8 ~ 12%만큼 회복 [적중시] 탐식 취약 1 부여 [적중시] 출혈 1 ~ 4 부여"}},corrosion:{name:"날갯짓",sin:"탐식",power:"39",coin:"-24",weight:"3",coinEffects:{1:"[뒷면 적중시] 자신의 체력을 피해량의 20%만큼 회복 [뒷면 적중시] 출혈 3 ~ 6 부여 [적 처치 시] 다음 턴에 공격 위력 증가 1 얻음 (최대 공격 위력 증가량 : 3)"}}},
  "christmas-nightmare-ishmael": {awakening:{name:"크리스마스 악몽",sin:"나태",power:"12",coin:"+5",weight:"3",coinEffects:{1:"[적중시] 진동 횟수 5 증가 [적중시] 대상이 흐트러짐, 사기 저하, 패닉 상태가 아니면, 침잠 5 부여 [적중시] 대상이 흐트러짐, 사기 저하, 패닉 상태가 아니면, 진동 폭발 2회. 대상의 진동 횟수 2 감소",2:"[적중시] 진동 폭발 . 대상의 진동 횟수 1 감소"}},corrosion:{name:"크리스마스 악몽",sin:"나태",power:"18",coin:"-5",weight:"5",coinEffects:{1:"[적중시] 진동 횟수 5 증가 [적중시] 대상이 흐트러짐, 사기 저하, 패닉 상태가 아니면, 침잠 5 부여, 침잠 횟수 2 증가",2:"[적중시] 대상이 흐트러짐, 사기 저하, 패닉 상태가 아니면, 진동 폭발 . 대상의 진동 횟수 1 감소 [적중시] 진동 폭발 . 대상의 진동 횟수 1 감소",3:"[적중시] 대상이 흐트러짐, 사기 저하, 패닉 상태가 아니면, 진동 폭발 . 대상의 진동 횟수 1 감소 [적중시] 진동 폭발 . 대상의 진동 횟수 1 감소"}}},
  "tidal-elegy-ishmael": {awakening:{name:"파도의 만가",sin:"우울",power:"8",coin:"+4",weight:"3",coinEffects:{1:"파괴 불가 코인 [적중시] 침잠 3 부여 [적중시] 진동 3 부여",2:"파괴 불가 코인 [파괴되지 않고 적중시] 다음 턴에 속박 2 부여",3:"파괴 불가 코인 [적중시] 공격 대상 중 흐트러지거나 부위 파괴 또는 사망한 대상이 있으면, 공격 대상이 아닌 무작위 적 1명에게 침잠 2 부여 (턴당 1회, 집중 전투인 경우, 부위를 대상 1명으로 취급) 공격 대상이 1명이면, 대신 3명에게 부여 [적중시] 진동 폭발 . 대상의 진동 횟수 1 감소"}},corrosion:{name:"파도의 만가",sin:"우울",power:"13",coin:"-3",weight:"3",coinEffects:{1:"[적중시] 침잠 1 부여",2:"[적중시] 침잠 2 부여",3:"[적중시] 진동 1 부여",4:"[적중시] 진동 2 부여 [적중시] 공격 대상 중 흐트러지거나 부위 파괴 또는 사망한 대상이 있으면, 공격 대상이 아닌 무작위 적 1명에게 다음 턴에 우울 취약 1 부여 (턴당 1회, 집중 전투인 경우, 부위를 대상 1명으로 취급) [적중시] 진동 폭발 . 대상의 진동 횟수 감소"}}},
  "blind-obsession-ishmael": {awakening:{name:"맹목",sin:"오만",power:"20",coin:"+15",weight:"7",coinEffects:{1:"[적중시] 자신의 충전 횟수 6 증가 [적중시] 무작위 아군 1명에게 호흡 횟수 2 부여 [공격 종료시] 정신력이 가장 높은 아군 4명에게 관통 위력 증가 2, 피해량 증가 2 부여"}},corrosion:{name:"맹목",sin:"오만",power:"35",coin:"-10",weight:"7",coinEffects:{1:"[적중시] 자신의 체력을 최대 체력의 3%만큼 회복 [적중시] 자신의 호흡 1, 호흡 횟수 1 증가 [적중시] 이번 턴과 다음 턴에 오만 취약 3 부여 [공격 종료시] 정신력이 가장 낮은 아군 4명에게 이번 턴과 다음 턴에 피해량 증가 2 부여"}}},
  "what-is-cast-rodion": {awakening:{name:"던져지는 것",sin:"오만",power:"15",coin:"+13",weight:"1",coinEffects:{1:"[적중시] 출혈 4 부여 [적중시] 다음 턴에 정신력 회복 효율 +2 [적중시] 다음 턴에 정신력 감소 효율 -2"}},corrosion:null},
  "into-the-sunset-rodion": {awakening:{name:"노을 속으로",sin:"색욕",power:"16",coin:"+8",weight:"3",coinEffects:{1:"[적중시] 화상 3 부여 [적중시] 출혈 3 부여 [이 코인 공격 종료 시] 적중한 대상에게 다음 턴에 분노 취약 1, 색욕 취약 1 부여"}},corrosion:{name:"노을 속으로",sin:"색욕",power:"24",coin:"-5",weight:"3",coinEffects:{1:"파괴 불가 코인 [적중시] 화상 2 부여 [적중시] 화상 횟수 2 증가 [이 코인 공격 종료 시] 적중한 대상에게 분노 취약 1 부여 (턴당 1회)",2:"파괴 불가 코인 [적중시] 출혈 2 부여 [적중시] 출혈 횟수 2 증가 [이 코인 공격 종료 시] 적중한 대상에게 색욕 취약 1 부여 (턴당 1회)"}}},
  "rime-shank-rodion": {awakening:{name:"얼음다리",sin:"우울",power:"15",coin:"+15",weight:"3",coinEffects:{1:"[적중시] 진동 폭발 [적중시] 침잠 5 부여 [적중시] 침잠 횟수 5 증가"}},corrosion:{name:"얼음다리",sin:"우울",power:"21",coin:"+6",weight:"3",coinEffects:{1:"[적중시] 진동 폭발 [적중시] 침잠 10 부여 [적중시] 침잠 횟수 8 증가"}}},
  "effervescent-corrosion-rodion": {awakening:{name:"들끓는 부식",sin:"탐식",power:"20",coin:"+5",weight:"2",coinEffects:{1:"[적중시] 진동 3, 진동 횟수 7 부여 [앞면 적중시] 다음 턴에 속박 2 부여 [적중시] 진동 폭발"}},corrosion:{name:"들끓는 부식",sin:"탐식",power:"27",coin:"-10",weight:"2",coinEffects:{1:"[적중시] 피해량의 30%만큼 자신의 체력 회복 [적중시] 방어 레벨 감소 5 부여 [적중시] 진동 폭발"}}},
  "mirror-touch-rodion": {awakening:{name:"거울촉각",sin:"나태",power:"11",coin:"+4",weight:"3",coinEffects:{1:"자신의 호흡 위력과 메인 타겟의 진동 위력의 합 6당, 합 위력 +1 (최대 4) [공격 시작 전] (4 + 최대 공명 수)만큼 호흡 얻음 (최대 8) [공격 시작 전] 자신의 호흡 횟수 4 증가 [공격 종료시] 공격 대상 중 무작위 적에게 (1 + 최대 공명 수)만큼 감각 균열을 1씩 나누어 부여 (최대 5) [적중시] 진동 4 부여",2:"[적중시] 진동 횟수 3 증가",3:"[적중시] 공격 레벨 감소 2 부여 [적중시] 진동 폭발. 대상의 진동 횟수 1 감소"}},corrosion:{name:"거울촉각",sin:"나태",power:"23",coin:"-4",weight:"3",coinEffects:{1:"[피아식별불가] 무작위 대상 공격 자신의 호흡 위력과 메인 타겟의 진동 위력의 합 6당, 합 위력 +1 (최대 4) [공격 시작 전] (4 + 최대 공명 수)만큼 호흡 얻음 (최대 10) [공격 시작 전] 자신의 호흡 횟수 4 증가 [공격 시작 전] 파괴된 코인 수당 기본 위력 -4 (최대 -12) [공격 시작 전] 자신의 호흡 횟수가 10 이상이면, 자신의 호흡 횟수를 4 소모하고, 메인 타겟에게 가하는 크리티컬 피해량 +40% [공격 종료시] 공격 대상 중 무작위 적에게 (1 + 최대 공명 수)만큼 감각 균열을 1씩 나누어 부여 (최대 5) 파괴 불가 코인 [적중시] 진동 5 부여 [적중시] 진동 횟수 1 증가 [적중시] 대상의 진동 횟수가 4 이상이면, 진동 폭발. 대상의 진동 횟수 1 감소",2:"파괴 불가 코인 [적중시] 진동 횟수 1 증가 [적중시] 대상의 진동 횟수가 4 이상이면, 진동 폭발. 대상의 진동 횟수 1 감소",3:"파괴 불가 코인 [적중시] 진동 횟수 2 증가 [적중시] 공격 레벨 감소 3 부여 [적중시] 진동 폭발. 대상의 진동 횟수 1 감소"}}},
  "4th-match-flame-rodion": {awakening:{name:"4번째 성냥불",sin:"분노",power:"38",coin:"-13",weight:"3",coinEffects:{1:"파괴 불가 코인 [파괴되지 않고 적중시] 화상 6 부여 [적중시] 다음 턴에 분노 취약 3 부여"}},corrosion:{name:"4번째 성냥불",sin:"분노",power:"38",coin:"-18",weight:"5",coinEffects:{1:"파괴 불가 코인 [적중시] 화상 10 부여 [적중시] 다음 턴에 분노 취약 3 부여"}}},
  "pursuance-rodion": {awakening:{name:"집행",sin:"나태",power:"26",coin:"+8",weight:"3",coinEffects:{1:"[적중시] 다음 턴에 나태 취약 1 부여 [공격 종료시] 자신을 제외하고 현재 체력 비율이 가장 낮은 아군 2명의 체력을 자신의 최대 체력의 30%만큼 회복 [앞면 공격 종료 시] 대상이 흐트러지거나 사망한 경우, 체력을 회복시킨 캐릭터들에게 자신의 최대 체력의 15%만큼 보호막 부여"}},corrosion:{name:"집행",sin:"나태",power:"34",coin:"-12",weight:"3",coinEffects:{1:"[적중시] 진동 폭발 [적중시] 대상에게 정신력 20 피해 [적중시] 대상이 흐트러지거나 사망한 경우 자신의 정신력 7 회복"}}},
  "hex-nail-rodion": {awakening:{name:"저주못",sin:"질투",power:"8",coin:"+8",weight:"3",coinEffects:{1:"[적중시] 출혈 4 부여",2:"[적중시] 저주 3 부여 [앞면 적중시] 못 3 부여"}},corrosion:{name:"저주못",sin:"질투",power:"28",coin:"-6",weight:"3",coinEffects:{1:"[적중시] 출혈 4 부여 [적중시] 출혈 횟수 2 증가",2:"[적중시] 저주 3 부여 [뒷면 적중시] 못 3 부여"}}},
  "sanguine-desire-rodion": {awakening:{name:"핏빛욕망",sin:"색욕",power:"21",coin:"+12",weight:"1",coinEffects:{1:"[적중시] (대상의 출혈 위력 × 1.5)만큼 색욕 속성 피해를 줌 - 색욕 공명이 4 이상이면, ×1.8로 계산 - 최대 색욕 완전 공명 수가 4 이상이면, ×2로 계산 [적 처치시] 이 스킬의 피해 또는 코인 효과로 적의 남은 체력을 초과하여 피해를 준 경우, 초과한 피해량을 고정 피해로 적 전체에 나눠서 가함"}},corrosion:{name:"핏빛욕망",sin:"색욕",power:"30",coin:"-11",weight:"5",coinEffects:{1:"[적중시] (4 + 색욕 공명 수)만큼 출혈 부여 (공명 수 비례 최대 출혈 부여량 : 6) [적중시] 출혈 횟수 3 증가"}}},
  "indicants-trial-rodion": {awakening:{name:"지정 재판",sin:"분노",power:"8",coin:"+8",weight:"4",coinEffects:{1:"[적중시] 화상 8 부여 [적중시] 메인 타겟이면, 다음 턴에 달궈진 새장 (1 + (분노 공명 수 / 3))만큼 부여 (최대 3, 소수점 버림)"}},corrosion:{name:"지정 재판",sin:"분노",power:"8",coin:"+8",weight:"4",coinEffects:{1:"파괴 불가 코인 [파괴되지 않고 적중시] 화상 10 부여 [파괴되지 않고 적중시] 화상 횟수 1 증가 [파괴되지 않고 적중시] 메인 타겟이면, 달궈진 새장 (1 + 분노 공명 수)만큼 부여 (최대 5)",2:"파괴 불가 코인 메인 타겟의 화상 위력당 메인 타겟에게 가하는 피해량 +2% (최대 100%) [적 처치 시] 현재 체력 비율이 가장 낮은 아군 (1 + 최대 공명 수) 명에게 분노 위력 증가 1, 분노 피해량 증가 1 부여 (최대 6명, 스킬당 1회)"}}},
  "branch-of-knowledge-sinclair": {awakening:{name:"지식나무의 가지",sin:"탐식",power:"14",coin:"+15",weight:"1",coinEffects:{1:"[앞면 적중시] 파열 12 부여 [앞면 적중시] 정신력 10 감소. 다음 턴에 공격 위력 증가 1을 얻음 [뒷면 적중시] 정신력 10 회복. 다음 턴에 보호 1을 얻음"}},corrosion:null},
  "cavernous-wailing-sinclair": {awakening:{name:"낮은울음",sin:"우울",power:"16",coin:"+8",weight:"1",coinEffects:{1:"[공격 종료시] 자신과 현재 체력이 가장 적은 아군 1 + (최대 공명 수 - 2)명에게 자신의 최대 체력 20%만큼 보호막을 부여하고 울음 방울 2 부여 (자신 제외 최대 부여 대상 수 : 3) - 대상에게 이미 울음 방울 이 있으면, 울음 방울 수치를 2로 변경 - 최대 우울 완전 공명 수가 4 이상이면, 이 스킬의 울음 방울 수치가 3로 부여, 적용됨"}},corrosion:{name:"낮은울음",sin:"우울",power:"24",coin:"-8",weight:"1",coinEffects:{1:"[적중시] 침잠 2, 침잠 횟수 3 부여 [공격 종료시] 자신에게 자신의 최대 체력 (20 + 최대 공명 수 × 5)%만큼 보호막을 부여하고 울음 방울 2 부여 (최대 40%) - 자신에게 이미 울음 방울 이 있으면, 울음 방울 수치를 2로 변경 - 최대 우울 완전 공명 수가 4 이상이면, 이 스킬의 울음 방울 수치가 3로 부여, 적용됨 - 우울 공명이 4 이상이면, 자신에게 자신의 최대 체력 10%만큼 보호막 추가 부여"}}},
  "impending-day-sinclair": {awakening:{name:"다가올날",sin:"분노",power:"28",coin:"-8",weight:"1",coinEffects:{1:"[적 처치 시] 다음 턴에 공격 위력 증가 1 얻음 [적 처치 시] 아군 전체가 각자 최대 체력의 15%만큼 체력 회복"}},corrosion:{name:"다가올날",sin:"분노",power:"28",coin:"-8",weight:"1",coinEffects:{1:"[적 처치 실패 시] 다음 턴에 출혈 10 얻음 [적 처치 실패 시] 다음 턴에 공격 위력 증가 3 얻음"}}},
  "lifetime-stew-sinclair": {awakening:{name:"평생 스튜",sin:"색욕",power:"24",coin:"-8",weight:"7",coinEffects:{1:"파괴 불가 코인 [적중시] 대상이 아군인 경우, - 자신의 최대 체력의 (5 x 이 스킬의 타겟으로 지정된 아군 수)%만큼 대상의 체력 회복 (최대 20%) - 다음 턴에 E.G.O 자원 획득량 + 1, 신속 2 부여 [뒷면 적중시] 화상 7 부여"}},corrosion:{name:"평생 스튜",sin:"색욕",power:"28",coin:"-12",weight:"3",coinEffects:{1:"파괴 불가 코인 [적중시] 화상 2 부여 [적중시] 화상 횟수 2 증가 [파괴되지 않고 적중시] 스킬 효과로 E.G.O 자원을 소모했을 경우, 이 코인 최종 피해량의 50%만큼 색욕 피해"}}},
  "hex-nail-sinclair": {awakening:{name:"저주못",sin:"질투",power:"9",coin:"+6",weight:"1",coinEffects:{1:"[앞면 적중시] 출혈 2 부여",2:"[적중시] 저주 2 부여 - 저주 와 못 을 제외한 대상의 부정적인 효과 2개당 저주 1 추가로 부여 (최대 2) [적중시] 못 3 부여 [적중시] 대상의 저주 가 4 이상이면, 합 위력 감소 1 부여 (턴 당 1회) [앞면 적중시] 다음 턴에 속박 2 부여 (턴 당 1회)"}},corrosion:{name:"저주못",sin:"질투",power:"25",coin:"-6",weight:"3",coinEffects:{1:"[뒷면 적중시] 출혈 3 부여",2:"[적중시] 저주 4 부여 [적중시] 못 3 부여 [적중시] 이 스킬을 포함하여 질투 공명이 4 이상이면, 합 위력 감소 1 부여 (턴 당 1회) [뒷면 적중시] 다음 턴에 속박 2 부여 (턴 당 1회) [뒷면 적중시] 다음 턴에 방어 레벨 감소 2 부여 (턴 당 1회)"}}},
  "lantern-sinclair": {awakening:{name:"초롱",sin:"탐식",power:"18",coin:"+6",weight:"3",coinEffects:{1:"[적중시] 파열 3 부여 [적중시] 현재 체력 비율이 가장 낮은 아군 2명의 체력을 최대 체력의 15%만큼 회복"}},corrosion:{name:"초롱",sin:"탐식",power:"30",coin:"-12",weight:"3",coinEffects:{1:"[적중시] 파열 횟수 3 증가 [적중시] 방어 레벨 감소 5 부여 [적중시] 자신의 체력을 피해량의 50%만큼 회복"}}},
  "92-sinclair": {awakening:{name:"9장 2절",sin:"색욕",power:"26",coin:"-10",weight:"3",coinEffects:{1:"[적중시] 대상에게 화상이 없으면 화상 4 부여 [적중시] 화상 4 부여 [뒷면 적중시] 대상의 화상이 10 이상이면 다음 턴에 공격 위력 감소 1, 수비 위력 감소 1 부여"}},corrosion:{name:"9장 2절",sin:"색욕",power:"33",coin:"-16",weight:"3",coinEffects:{1:"[적중시] 대상에게 화상이 없으면 화상 6 부여 [적중시] 화상 4 부여 [뒷면 적중시] 대상의 화상이 10 이상이면 다음 턴에 색욕 취약 2 부여"}}},
  "harmony-sinclair": {awakening:{name:"하모니",sin:"분노",power:"6",coin:"+2",weight:"3",coinEffects:{1:"[적중시] 출혈 2 부여",2:"[적중시] 화상 2 부여",3:"[앞면 적중시] 자신의 체력이 10% 이상이면, 4 ~ 8 만큼 체력 피해 입음 (코인당 1회) - 이후 이 코인 재사용 (스킬당 최대 4회) - 이 효과로 흐트러짐 상태가 되거나 체력이 1 미만으로 감소하지 않음 [적중시] 화상 1 부여 [적중시] 출혈 1 부여 [적중시] 무작위 아군 1명이 다음 턴에 리듬 1 ~ 3 얻음 (코인당 1회)"}},corrosion:{name:"하모니",sin:"분노",power:"14",coin:"-2",weight:"3",coinEffects:{1:"파괴 불가 코인 [적중시] 출혈 2 부여",2:"파괴 불가 코인 [적중시] 화상 2 부여",3:"파괴 불가 코인 [적중시] 자신의 체력이 10% 이상이면, 10 ~ 20 만큼 체력 피해 입음 (코인당 1회) - 이후 이 효과로 소모된 체력의 합이 50 미만이면, 이 코인 재사용 (스킬당 최대 4회) - 이 효과로 흐트러짐 상태가 되거나 체력이 1 미만으로 감소하지 않음 [적중시] 화상 1 부여 [적중시] 출혈 1 부여 [적중시] 무작위 아군 1명이 다음 턴에 리듬 1 ~ 3 얻음 (코인당 1회)"}}},
  "tears-of-the-tarnished-blood-[汚血泣淚]-sinclair": {awakening:{name:"오혈읍루",sin:"탐식",power:"8",coin:"+6",weight:"5",coinEffects:{1:"[적중시] 파열 횟수 1 증가",2:"자신의 잃은 체력 2%당 피해량 +1% (최대 40%) [적중시] 파열 3 부여 [적중시] 자신의 현재 체력이 최대 체력의 30% 미만이거나, 매화침[埋花針] 수치가 20이면 이 코인 재사용 (스킬 당 1회) [재사용 적중시] 자신의 모든 체력을 소모하여 이 코인의 피해량 +20% (턴 당 1회)"}},corrosion:{name:"오혈읍루",sin:"탐식",power:"20",coin:"-8",weight:"7",coinEffects:{1:"[적중시] 파열 횟수 1 증가 [적중시] 파열 3 부여",2:"자신의 잃은 체력 2%당 피해량 +1% (최대 40%) [적중시] 자신의 현재 체력이 최대 체력의 30% 미만이거나, 매화침[埋花針] 수치가 20이면 이 코인 재사용 (스킬 당 1회) [재사용 적중시] 자신의 모든 체력을 소모하여 이 코인의 피해량 +20% (턴 당 1회)"}}},
  "to-páthos-máthos-outis": {awakening:{name:"토 파토스 마토스",sin:"오만",power:"20",coin:"+3",weight:"1",coinEffects:{1:"[적중시] 파열 4 부여 [적 처치 시] 무작위 아군 1명에게 피해량 증가 1 부여"}},corrosion:null},
  "ill-go-fer-scissors-how-bout-you-outis": {awakening:{name:"난 가위를 낼게, 너는?",sin:"질투",power:"12",coin:"+12",weight:"3",coinEffects:{1:"파괴 불가 코인 [파괴되지 않고 적중시] 현재 체력 비율이 가장 낮은 아군 2명의 체력을 각자 최대 체력의 10%만큼 회복 (스킬 당 1회) - 자신을 제외한 질투 속성인 기본 공격 스킬을 보유하지 않은 아군은 회복 대상이 되지 않음 [적중시] 바늘 2 부여 [적중시] 저주 1 부여 [적중시] 못 1 부여"}},corrosion:{name:"난 가위를 낼게, 너는?",sin:"질투",power:"4",coin:"+4",weight:"1",coinEffects:{1:"파괴 불가 코인 [적중시] 바늘 3 부여",2:"파괴 불가 코인 [적중시] 저주 2 부여",3:"파괴 불가 코인 [적중시] 못 1 부여"}}},
  "ya-śunyatā-tad-rupam-outis": {awakening:{name:"공즉시색",sin:"색욕",power:"19",coin:"+4",weight:"2",coinEffects:{1:"[적중시] 색욕 취약 2 부여"}},corrosion:{name:"공즉시색",sin:"색욕",power:"25",coin:"-8",weight:"2",coinEffects:{1:"[적중시] 색욕 취약 2 부여 [적중시] 취약 2 부여 [뒷면 적중시] 취약 2 얻음"}}},
  "sunshower-outis": {awakening:{name:"여우비",sin:"탐식",power:"26",coin:"+7",weight:"2",coinEffects:{1:"[적중시] 침잠 6 부여 [적중시] 다음 턴에 속박 3 부여 [크리티컬 적중 시] 진동 폭발 . 침잠 횟수 3 증가"}},corrosion:{name:"여우비",sin:"탐식",power:"29",coin:"-7",weight:"2",coinEffects:{1:"[적중시] 침잠 6 부여 [적중시] 파열 6 부여 [적중시] 다음 턴에 속박 3 부여 [크리티컬 적중 시] 진동 폭발 . 침잠 횟수, 파열 횟수 3 증가"}}},
  "ebony-stem-outis": {awakening:{name:"검은줄기",sin:"탐식",power:"22",coin:"+7",weight:"7",coinEffects:{1:"[적중시] 파열 2 부여 [앞면 적중시] 출혈 2 부여 [적중시] 탐식 취약 2 부여"}},corrosion:{name:"검은줄기",sin:"탐식",power:"29",coin:"+7",weight:"7",coinEffects:{1:"[적중시] 파열 5 부여 [적중시] 출혈 5 부여 [적중시] 탐식 취약 3 부여"}}},
  "holiday-outis": {awakening:{name:"홀리데이",sin:"분노",power:"20",coin:"+11",weight:"3",coinEffects:{1:"[적중시] 진동 폭발 [공격 종료시] 현재 정신력이 가장 낮은 아군 4명에게 가장 높은 공명 속성의 피해량 증가를 1 부여 [공격 종료시] 현재 정신력이 가장 낮은 아군 4명의 정신력 20 회복"}},corrosion:{name:"홀리데이",sin:"분노",power:"34",coin:"-15",weight:"5",coinEffects:{1:"[적중시] 대상에게 정신력 10 피해 [적중시] 진동 폭발 [적중시] 가장 높은 공명 속성의 취약을 2 부여 [뒷면 공격 종료 시] 가장 높은 공명 속성의 피해량 증가를 1 얻음"}}},
  "dimension-shredder-outis": {awakening:{name:"차원찢개",sin:"질투",power:"21",coin:"+9",weight:"4",coinEffects:{1:"[적중시] ( 충전 - 1)만큼 차원 균열 부여 (최대 2) [적중시] 충전 만큼 다음 턴에 신속 1, 부하 1 얻음 (한 스킬당 최대 3) [적 처치시] 충전 횟수 2 증가"}},corrosion:{name:"차원찢개",sin:"질투",power:"32",coin:"-13",weight:"4",coinEffects:{1:"[적중시] ( 충전 - 1)만큼 차원 균열 부여 (최대 4) [적중시] 충전 만큼 다음 턴에 신속 1, 부하 1 얻음 (한 스킬당 최대 3) [적 처치시] 충전 횟수 2 증가"}}},
  "magic-bullet-outis": {awakening:{name:"마탄",sin:"오만",power:"22",coin:"+14",weight:"1",coinEffects:{1:"[적중시] 마탄 만큼 화상 부여 [적중시] 마탄 만큼 흑염 부여 (턴 당 대상 1명마다 최대 1회 부여)"}},corrosion:{name:"마탄",sin:"오만",power:"40",coin:"-20",weight:"1",coinEffects:{1:"[적중시] 마탄 만큼 화상 부여 [적중시] ( 마탄 / 2)만큼 화상 횟수 증가 (소수점 버림) [적중시] 마탄 만큼 흑염 부여 (턴 당 대상 1명마다 최대 1회 부여)"}}},
  "binds-outis": {awakening:{name:"구속",sin:"오만",power:"20",coin:"+10",weight:"5",coinEffects:{1:"[적중시] 진동 6 부여 [적중시] 진동 - 균열 로 진폭 변환 [적중시] 진동 폭발"}},corrosion:{name:"구속",sin:"오만",power:"32",coin:"-14",weight:"5",coinEffects:{1:"[적중시] 진동 6 부여 [적중시] 진동 횟수 3 증가 [적중시] 진동 - 균열 로 진폭 변환 [뒷면 적중시] 진동 폭발 [뒷면 적중시] 진동 폭발 [적중시] 진동 폭발"}}},
  "suddenly-one-day-gregor": {awakening:{name:"어느날 갑자기",sin:"나태",power:"14",coin:"+14",weight:"1",coinEffects:{1:"[적중시] 화상 , 출혈 , 진동 , 파열 , 침잠 중 무작위 1개 효과 10 부여"}},corrosion:null},
  "legerdemain-gregor": {awakening:{name:"눈속임",sin:"탐식",power:"18",coin:"+5",weight:"3",coinEffects:{1:"[적중시] 진동 폭발 [적중시] 진동 6 부여 [적중시] 마비 4 부여"}},corrosion:{name:"눈속임",sin:"탐식",power:"28",coin:"-14",weight:"3",coinEffects:{1:"[적중시] 출혈 4 부여 [적중시] 마비 4 부여 [적중시] 구더기 6 부여"}}},
  "lantern-gregor": {awakening:{name:"초롱",sin:"탐식",power:"16",coin:"+8",weight:"3",coinEffects:{1:"[적중시] 피해량의 60%만큼 자신의 체력 회복"}},corrosion:{name:"초롱",sin:"탐식",power:"19",coin:"+4",weight:"5",coinEffects:{1:"[적중시] 피해량의 30%만큼 자신의 체력 회복 [앞면 적중시] 파열 5 부여"}}},
  "bygone-days-gregor": {awakening:{name:"지난 날",sin:"우울",power:"20",coin:"+4",weight:"1",coinEffects:{1:"[공격 종료시] 자신과 자신을 제외한 정신력이 가장 낮은 아군 2명의 정신력 15 회복 - 대상이 사망하지 않았다면, 대상의 침잠 횟수를 3 소모하고, 대상의 침잠 위력만큼 회복 대상의 정신력 추가 회복 (최대 회복량 : 20) - 대상이 사망했다면, 무작위 적 3명에게 침잠 3, 저주 1 부여 (집중 전투인 경우, 무작위 부위에 부여)"}},corrosion:{name:"지난 날",sin:"우울",power:"27",coin:"-8",weight:"1",coinEffects:{1:"[적중시] 우울 취약 2 부여. 우울 공명 2 당 추가 1 부여 (최대 2) [적중시] 침잠 횟수 3 증가 [적중시] 저주 3 부여"}}},
  "move-in-reg-gregor": {awakening:{name:"입주 신고",sin:"질투",power:"9",coin:"+6",weight:"3",coinEffects:{1:"아래 조건 만족 시 코인 위력 +1 (최대 3), 메인 타겟의 화상 위력 6당, (자신의 충전 위력 - 1)만큼 [공격 시작 전] (자신의 충전 위력 - 1)만큼 이 스킬로 부여하는 화상 위력 증가 (최대 2) [공격 시작 전] (최대 공명 수 + 1)만큼 자신의 충전 횟수 증가 (최대 7), 자신의 충전 횟수가 3 이하면, 추가로 3 증가 [공격 시작 전] 자신의 충전 횟수를 최대 15 소모하여, 소모한 충전 횟수당 피해량 +3% (최대 45%) [공격 시작 전] 공격 시작 전 효과로 충전 횟수를 15 소모했으면, 자신의 충전 횟수 5 증가 [적중시] 화상 3 부여 [적중시] 대상에게 주민등록 마이크로칩 이나 속박 이 있으면, 화상 횟수 2 증가",2:"[적중시] 자신의 충전 횟수 2 증가 [적중시] 주민등록 마이크로칩 2 부여 [적중시] 다음 턴에 속박 2 부여"}},corrosion:{name:"입주 신고",sin:"질투",power:"7",coin:"+7",weight:"3",coinEffects:{1:"[피아식별불가] 무작위 대상 공격 아래 조건 만족 시 코인 위력 +1 (최대 3), 메인 타겟의 화상 위력 6당, (자신의 충전 위력 - 1)만큼 [공격 시작 전] (최대 공명 수 + 3)만큼 자신의 충전 횟수 증가 (최대 10) [공격 시작 전] 피해량 +(자신의 충전 위력 + 횟수 - 1) × 3% (최대 60%) [적 처치 시] 자신의 충전 횟수 4 증가, 다음 턴에 피해량 증가 1 얻음 (턴당 1회) [적중시] 화상 횟수 3 증가 [적중시] 주민등록 마이크로칩 2 부여 [적중시] 다음 턴에 속박 1 부여",2:"[코인 시작 시] 자신의 충전 횟수 최대 8 소모 [적중시] 이 코인에서 충전 횟수를 소모했으면, 이 코인 최종 피해량의 (소모한 충전 횟수 × 5)%만큼 질투 피해 (최소 5%, 최대 40%)"}}},
  "aedd-gregor": {awakening:{name:"AEDD",sin:"우울",power:"22",coin:"+5",weight:"1",coinEffects:{1:"[적중시] 방출 전류 15 부여"}},corrosion:{name:"AEDD",sin:"우울",power:"24",coin:"+7",weight:"3",coinEffects:{1:"[적중시] 방출 전류 15 부여, 대상의 충전 횟수 7 증가"}}},
  "solemn-lament-gregor": {awakening:{name:"엄숙한 애도",sin:"우울",power:"8",coin:"+2",weight:"3",coinEffects:{1:"[적중시] 무작위 나비 1 부여",2:"[적중시] 무작위 나비 1 부여",3:"[적중시] 무작위 나비 1 ~ 2 부여 [적중시] 정신력 2 ~ 6 감소 [적중시] 자신의 정신력이 0 이상이면, 이 코인 재사용 (스킬 당 최대 5회)"}},corrosion:{name:"엄숙한 애도",sin:"우울",power:"32",coin:"-8",weight:"5",coinEffects:{1:"[적중시] 나비 (산나비) 5 부여 [적중시] 나비 (죽은나비) 5 부여 [적중시] 침잠 횟수 3 증가 [적중시] 대상의 체력이 50% 이하면, 대상의 모든 나비 만큼 우울 피해 - 산나비와 죽은나비의 합으로 계산"}}},
  "christmas-nightmare-gregor": {awakening:{name:"크리스마스 악몽",sin:"나태",power:"12",coin:"+4",weight:"5",coinEffects:{1:"[적중시] 진동 5 부여 [적중시] 진동 폭발 . 대상의 진동 횟수 1 감소",2:"[적중시] 자신이 잃은 체력의 (3 + 최대 공명 수)%만큼 회복 (스킬 당 최대 30%) [적중시] 침잠 4 부여 [적중시] 대상이 흐트러짐, 사기 저하, 패닉 상태면 다음 턴에 공격 위력 감소 1, 가장 높은 공명 속성의 취약을 1 부여"}},corrosion:{name:"크리스마스 악몽",sin:"나태",power:"22",coin:"-6",weight:"5",coinEffects:{1:"[적중시] 진동 5 부여 [적중시] 진동 폭발 . 대상의 진동 횟수 1 감소",2:"[적중시] 자신이 잃은 체력의 (3 + 최대 공명 수)%만큼 회복 (스킬 당 최대 30%) [적중시] 침잠 4 부여 [적중시] 대상이 흐트러짐, 사기 저하, 패닉 상태면 다음 턴에 공격 위력 감소 1, 가장 높은 공명 속성의 취약을 2 부여"}}},
  "garden-of-thorns-gregor": {awakening:{name:"가시 화원",sin:"색욕",power:"20",coin:"+10",weight:"4",coinEffects:{1:"[공격 종료 시] 체력 비율이 가장 낮은 아군 4명의 체력을 최대 체력의 22%만큼 회복 - (가장 높은 공명 수 - 2)만큼 회복 대상 증가 (최대 3)"}},corrosion:{name:"가시 화원",sin:"색욕",power:"30",coin:"-10",weight:"4",coinEffects:{1:"[적중시] 피해량 감소 1 부여, 다음 턴에 속박 2 부여 [적중시] 가장 높은 공명 속성의 취약과 위력 감소를 1 부여 - 해당 공명이 4 이상이면, 해당 속성 취약을 1 추가 부여 - 해당 공명이 5 이상이면, 해당 속성 위력 감소를 1 추가 부여 - 해당 공명이 완전 공명 6 이상이면, 다음 턴에도 동일한 효과 부여"}}},
  "unbrilliant-glory-gregor": {awakening:{name:"눈부시지 않은 영광 - 유수(流水)",sin:"나태",power:"5",coin:"+5",weight:"1",coinEffects:{1:"[합 불가능] 전투에서 처음 사용시 필요한 E.G.O 자원이 분노 1, 나태 2, 오만 1 감소 칼집 속 사람 이 1 이상이면, 눈부시지 않은 영광 - 광휘(光輝)로 발동됨 이 스킬은 적에게 적중하지 않고, 수비 스킬을 발동시키지 않으며, 외부 효과로 재사용이 불가능함 [공격 종료시] 칼집 속 사람 1 얻음 [공격 종료시] 정신력 25 회복 [공격 종료시] 다음 턴에 공격 레벨 증가 2, 피해량 증가 1 얻음"},alt:{name:"눈부시지 않은 영광 - 광휘(光輝)",sin:"나태",power:"10",coin:"+5",weight:"3",coinEffects:{1:"파괴 불가 코인 (소모한 칼집 속 사람 수치 / 10) - 1 만큼 코인 재사용 (최대 3회) [코인 시작시] 이 코인이 파괴되지 않았고, 공격 대상이 일정 3명 이상이면, 마지막에 사용할 코인의 피해량 +20% (집중 전투인 경우, 부위를 대상 1명으로 취급) [적중시] 화상 1 부여 [적중시] 진동 1 부여 [파괴되지 않고 적중시] 마지막에 사용하는 코인이고, 대상의 진동 위력이 15 이상이면, 진동 폭발 . 대상의 진동 횟수 1 감소 [파괴되지 않고 적중시] 이 코인 4회 사용했다면, 대상의 진동 만큼 나태 피해를 줌 (최대 10)"}}},corrosion:{name:"눈부시지 않은 영광 - 유수(流水)",sin:"나태",power:"20",coin:"-4",weight:"3",coinEffects:{1:"파괴 불가 코인",2:"파괴 불가 코인",3:"파괴 불가 코인",4:"파괴 불가 코인 [적중시] 화상 5 부여 [적중시] 진동 5 부여 [파괴되지 않고 적중시] 마지막에 사용하는 코인이고, 대상의 진동 위력이 15 이상이면, 진동 폭발 . 대상의 진동 횟수 1 감소"}}},
};

const EGO_PASSIVE_DETAIL = {
  "crows-eye-view-yi-sang": {name:"침묵",effect:"피격 시 다음 턴에 속박 3을 얻고, 대상을 약점, 취약인 속성으로 공격 시 피해량 +20% (턴당 1회 발동)",atkLevel:"56(-4)",sp:"끈 20개 필요"},
  "bygone-days-yi-sang": {name:"조각난 어제",effect:"대상의 침잠 위력이 6 이상이면, 합 위력 +1 대상의 침잠 횟수가 4 이상이면, 합 위력 +1",atkLevel:"60(0)",sp:"끈 25개 필요"},
  "4th-match-flame-yi-sang": {name:"불티",effect:"분노 속성 또는 화상 위력, 횟수를 부여하는 스킬 사용 시 모든 공격 대상의 화상 의 합이 6 이상이면, 합 위력 +1 합 승리 시 메인 타겟에게 (분노 공명 수 × 2)만큼 화상 부여 (스킬당 최대 8)",atkLevel:"63(+3)",sp:"끈 25개 필요"},
  "wishing-cairn-yi-sang": {name:"돌하르방",effect:"매 턴마다 타격 보호 , 나태 보호 3을 얻음",atkLevel:"58(-2)",sp:"끈 30개 필요"},
  "dimension-shredder-yi-sang": {name:"헤매이는 자",effect:"턴 시작 시 이전 턴에 피해를 받지 않았으면, 자신의 충전 횟수 4 증가 자신보다 속도가 느린 적에게 공격 적중 시 대상의 파열 횟수 1 증가 (턴 당 최대 3회)",atkLevel:"63(+3) / 65(+5)",sp:"끈 30개 필요"},
  "fell-bullet-yi-sang": {name:"다음",effect:"공격 종료 시 대상이 사망했으면 호흡 횟수 2 증가",atkLevel:"65(+5)",sp:"끈 30개 필요"},
  "solemn-lament-yi-sang": {name:"날개축처어진나비는입김에어리는가난한이슬을먹는다",effect:"대상이 나비 를 보유하고 있으면, 합 위력 +1 침잠 과 모든 나비 의 합이 15 이상인 대상에게 공격 적중 시, 나비 (산나비) 1, 나비 (죽은나비) 1 부여 (턴당 1회, 집중 전투인 경우, 부위로 판정) [로보토미 E.G.O::엄숙한 애도 이상 전용 상시 효과] 기본 스킬의 공격 적중 시, 대상에게 진동 2 부여 (스킬당 1회) 이 인격은 진동 , 침잠 을 부여하는 인격으로 취급됨 - 이 효과로 인해서 기본 스킬이 진동 , 침잠 을 부여하는 스킬로 취급됨 [로보토미 E.G.O::엄숙한 애도 이상 전용 사용 효과] - 자신의 산나비·죽은나비 (위력+횟수) 최댓값 +10 - 재장전 후, 정신력을 10 회복하고 자신의 모든 스킬 슬롯에서 '이상으로 장례는 이상이오'를 제외한 등급이 가장 낮은 기본 공격 스킬을 버림 (턴당 2회) - 수비 스킬을 장착한 턴 종료시, 정신력 10 회복 - 턴 종료시 흐트러짐 상태면, 흐트러짐을 해제하고 재장전 (전투당 1회, 강제 흐트러짐 제외)",atkLevel:"64(+4)",sp:"끈 35개 필요"},
  "sunshower-yi-sang": {name:"비 갠 뒤 햇살",effect:"턴 시작 시 모든 아군의 정신력 3 회복",atkLevel:"59(-1) / 63(+3)",sp:null},
  "great-trichiliocosm-[三千大世界]-yi-sang": {name:"하늘 엮기",effect:"대상이 깨어진 세계 를 보유 중이면, 자신의 기본 공격 스킬로 부여하는 화상 위력, 침잠 위력 부여량 +1 (턴당 최대 8 추가 부여) 화상 피해로 사망한 적 1명당 다음 턴에 무작위 물리 속성의 피해량 증가 1 얻음 (턴당 최대 3, 획득 시마다 무작위로 획득)",atkLevel:"63(+3)",sp:null},
  "representation-emitter-faust": {name:"권태",effect:"자신의 공격 중 적이 흐트러짐 상태가 되었으면, 정신력이 가장 낮은 아군 1명의 다음 턴 정신력 회복 효율 +2 (턴당 최대 3회)",atkLevel:"57(-3)",sp:null},
  "hex-nail-faust": {name:"아파!",effect:"자신에게 부여된 부정적 효과 1개당 피해량 +10% (최대 50%)",atkLevel:"60(0)",sp:null},
  "92-faust": {name:"불꽃의 검",effect:"색욕 속성 스킬로 앞면 적중 시 대상에게 화상 1 부여 (턴 당 최대 6회)",atkLevel:"62(+2)",sp:null},
  "lasso-faust": {name:"퍼져나가는 올가미",effect:"공격 종료 시 대상이 흐트러지거나 사망한 경우, 무작위 적 2명의 파열 횟수 1 증가 (턴 당 1회, 중첩 불가, 집중 전투인 경우 부위로 판정)",atkLevel:"60(0)",sp:null},
  "fluid-sac-faust": {name:"감싸는 액체",effect:"턴 시작 시 자신을 포함하여 체력이 가장 낮은 아군 1명에게 보호 2 부여",atkLevel:"59(-1)",sp:null},
  "telepole-faust": {name:"적응형 방출",effect:"자신에게 충전이 있을 때 충전 횟수 1당 피해량 +2% 스킬의 효과로 소모하는 충전 횟수의 값 -2",atkLevel:"62(+2)",sp:null},
  "thoracalgia-faust": {name:"숨",effect:"이 E.G.O 스킬을 사용한 다음 턴 시작 시, 네뷸라이저 α 1 얻음 (턴 당 1회) - 이 수치는 이번 전투 동안 누적됨 전투 시작 시 네뷸라이저 α 의 효과로 아군에게 호흡 횟수를 10 부여할 때마다 네뷸라이저 α 1 얻음 턴 종료 시 아군 (최대 공명 수)명의 체력을 현재 체력 비율이 가장 낮은 순으로 최대 체력의 ( 네뷸라이저 α 수치)%만큼 회복 (최대 6명) - 회복 대상의 호흡 위력이 20 이상이면, 회복 1회 추가 발동",atkLevel:"62(+2)",sp:null},
  "command-meltdown-faust": {name:"의사",effect:"턴 시작 시, 자신과 현재 체력 비율이 가장 낮은 아군의 체력을 자신의 최대 체력의 ( 경화막 수치)%만큼 회복 - 자신의 체력이 최대일 경우, 대신 현재 체력 비율이 가장 낮은 다른 아군 2명의 체력 회복 - 회복받는 대상의 체력이 25% 이하거나 흐트러짐 상태면, 이 효과로 회복되는 수치가 1.5배로 증가 턴 종료 시 이번 전투에서 파우스트가 가장 마지막에 사용한 E.G.O 스킬이 명령 : 용해일 경우 경화막 효과의 턴 종료 시 감소량이 1로 변경 - 이 효과는 E.G.O 스킬을 사용한 턴부터 즉시 적용",atkLevel:"62(+2) / 64(+4)",sp:null},
  "ardor-blossom-star-faust": {name:"꺼지지 않은 불씨",effect:"이 효과는 E.G.O 스킬 종료 후 즉시 적용 자신의 화상 10당 적에게 기본 공격 스킬 효과, 코인 효과로 부여하는 화상 위력 +1 (최대 2, 특수 화상 제외) 홍염살 최대 감응 【열화침식】 스킬을 사용했으면, 해당 공격 종료시 사망하지 않고 최대 체력의 40%만큼 회복하고 다음 턴에 타격 피해량 증가 2, 분노 피해량 증가 1 얻음 (전투당 1회 발동)",atkLevel:"62(+2) / 63(+3)",sp:null},
  "everlasting-faust": {name:"달리는 시간",effect:"자신이 적에게 스킬을 사용하여 진동 폭발 부여 시, 신속 1 얻음 (턴 당 최대 4회. E.G.O 스킬 포함)",atkLevel:"60(0)",sp:null},
  "la-sangre-de-sancho-don-quixote": {name:"과도한 열정",effect:"출혈 이 있는 적 공격 시 체력 3 회복",atkLevel:"62(+2)",sp:null},
  "ill-go-fer-scissors-how-bout-you-don-quixote": {name:"이번엔 그대가 바늘을 삼킬 차례라네..!",effect:"질투 속성인 스킬의 피해량 +10% - 질투 공명 수 1당, 추가로 해당 스킬의 피해량 +1% (최대 7%) 턴 시작 시 (이번 전투 동안 누적된 자신의 체력 피해(보호막 피해 포함) / 20)만큼 공격 레벨 증가 얻음 (최대 3) 전투 시작 시 질투 완전 공명을 했으면, 모든 적에게 바늘 1 부여 (집중 전투일 경우, 부위로 판정)",atkLevel:"62(+2) / 63(+3)",sp:null},
  "lifetime-stew-don-quixote": {name:"폭식의 도가니",effect:"턴 시작 시 색욕이 아닌 무작위 속성의 E.G.O 자원 1개를 색욕 E.G.O 자원 1개로 변경 - 색욕 E.G.O 자원이 20개 이상이면 해당 효과가 발동하지 않고, 대신 색욕 위력 증가 1 얻음 색욕 속성 기본 스킬 공격 시작 전 보유한 색욕 E.G.O 자원 1개당 피해량 +1% (최대 10%)",atkLevel:"63(+3)",sp:null},
  "wishing-cairn-don-quixote": {name:"무너진 돌탑",effect:"출혈 이 부여된 적 처치 시 호흡 2, 호흡 횟수 2 얻음 (턴 당 3회)",atkLevel:"58(-2)",sp:null},
  "electric-screaming-don-quixote": {name:"폭풍 같은 비명",effect:"자신의 참격 스킬 또는 질투 속성 스킬 종료 시 대상이 사망했으면, 다음 턴에 공격 위력 증가 1 얻음 (턴 당 1회)",atkLevel:"63(+3) / 65(+5)",sp:null},
  "fluid-sac-don-quixote": {name:"밀려오는 우울",effect:"조작 패널에서 가장 오른쪽의 스킬로 공격하는 대상에게 공격 종료 시 (우울 완전 공명 수 × 2)만큼 정신력 피해 (정신력이 없는 대상에게는 우울 속성 피해로 적용)",atkLevel:"60(0)",sp:null},
  "telepole-don-quixote": {name:"무작위 방출",effect:"전투 시작 시 충전을 보유한 무작위 아군의 충전 횟수가 (질투 완전 공명 수/2)만큼 증가",atkLevel:"60(0)",sp:null},
  "red-sheet-don-quixote": {name:"쇠약부",effect:"자신의 스킬 적중시 대상의 파열 이 15 이상이거나 크리티컬 피해를 입혔다면 방어 레벨 감소 1 부여 (최대 6) - 이 패시브 효과가 적용되면, E.G.O 기프트 낡은 목각 인형 효과와 중첩되어 발동되지 않음.",atkLevel:"63(+3) / 65(+5)",sp:null},
  "yearning-mircalla-don-quixote": {name:"높게 치솟은 붉은 꽃",effect:"출혈 로 인한 피해가 10 이상 발생할 때마다 자신의 정신력 1 회복 (턴 당 최대 10)",atkLevel:"63(+3) / 65(+5)",sp:null},
  "in-the-name-of-love-and-hate-don-quixote": {name:"아르카나 적성 회로",effect:"전투 중 누적으로 자신의 충전 횟수를 10 소모할 때마다, 충전 1 얻음 - 이미 자신의 충전 횟수를 소모하여 충전 을 얻고 있다면, 중복되지 않음 - 자신의 충전 당 자신의 충전 횟수를 소모하는 기본 공격 스킬의 피해량 +5% (최대 25%) 로보토미 E.G.O::사랑과 증오의 이름으로 돈키호테이면, 스킬 3이 1개 추가됨",atkLevel:"63(+3) / 65(+5)",sp:null},
  "forest-for-the-flames-ryoshu": {name:"예술",effect:"이전 턴에 자신이 처치한 적의 수당 5%만큼 가하는 피해 증가, 받는 피해 증가",atkLevel:"60(0)",sp:null},
  "soda-ryoshu": {name:"뚜껑 따인 음료수",effect:"침잠 이 5 이상인 적에게 공격 적중 시 수비 위력 감소 1 부여 (턴 당 최대 5회)",atkLevel:"60(0)",sp:null},
  "red-eyes-ryoshu": {name:"거미줄",effect:"합 승리 시 다음 턴에 속박 1 부여 (턴 당 최대 3회)",atkLevel:"60(0)",sp:null},
  "blind-obsession-ryoshu": {name:"꿈 먹기",effect:"오만 속성 스킬로 크리티컬 적중 시 호흡 횟수 1 증가 (턴 당 최대 3회)",atkLevel:"60(0) / 63(+3)",sp:null},
  "4th-match-flame-ryoshu": {name:"4번째 성냥불",effect:"4번째로 사용하는 스킬의 최종 위력 +4, 적중 시마다 화상 4 부여 - 해당 스킬이 분노 속성이면, 추가로 피해량 +(모든 공격 대상의 화상 위력/2)%만큼 분노 피해 (최대 20%) - 해당 스킬이 E.G.O 스킬이면, 첫 번째 코인 시작 시 • 더하기 코인 스킬이면, 정신력 10 회복 • 빼기 코인 스킬이면, 정신력 15 감소 (이 효과로 정신력이 -40 미만이 되지 않음)",atkLevel:"63(+3)",sp:null},
  "red-eyes-(open)-ryoshu": {name:"포식",effect:"이번 턴에 최대 체력의 10%를 초과하여 체력을 회복한 경우, 다음 턴에 공격 위력 증가 를 1 얻음",atkLevel:"62(+2)",sp:null},
  "thoracalgia-ryoshu": {name:"숨",effect:"이 E.G.O 스킬을 사용한 다음 턴 시작 시, 네뷸라이저 β 1 얻음 (턴 당 1회) - 이 스킬로 적을 처치하였다면 처치한 대상 수만큼 네뷸라이저 β 추가로 얻음 - 이 스킬로 아군을 처치하였다면 (처치한 대상 수 × 2)만큼 네뷸라이저 β 추가로 얻음 - 이 수치는 이번 전투 동안 누적됨",atkLevel:"63(+3) / 65(+5)",sp:null},
  "contempt-awe-ryoshu": {name:"시선의 흔적",effect:"자신이 적에게 기본 공격 스킬을 사용할 때마다 자신이 사용한 스킬 속성 이외의 가장 적게 보유한 무작위 속성 E.G.O 자원 1개를 추가로 얻음 (턴 당 2회)",atkLevel:"60(0) / 63(+3)",sp:null},
  "great-trichiliocosm-[三千大世界]-ryoshu": {name:"삼도[三途]",effect:"공격 스킬 종료 시 적이 흐트러짐 상태가 되었거나 사망했으면, 다음 턴에 크리티컬 피해량 증가 1 얻음 (턴당 3회)",atkLevel:"63(+3)",sp:null},
  "chains-of-others-meursault": {name:"판단 거부",effect:"전투 시작 시 자신이 3개 이상의 스킬의 타겟이 되었다면, 보호 3을 얻음",atkLevel:"57(-3)",sp:null},
  "screwloose-wallop-meursault": {name:"마지막 개조",effect:"체력이 25% 미만일 때 &lt;나사빠진 일격&gt; E.G.O 스킬 사용 시 매 턴마다 공격 위력 증가 , 수비 위력 증가 , 신속 3을 얻고, 3턴 뒤 사망함.",atkLevel:"65(+5)",sp:null},
  "regret-meursault": {name:"구속당한 분노",effect:"자신의 조작 패널에서 첫 번째에 위치한 스킬의 기본 위력 1 감소, 코인 위력 2 증가 턴 시작 시 자신의 속도가 4 이하면, 타격 위력 증가 1을 얻음",atkLevel:"62(+2) / 65(+5)",sp:null},
  "electric-screaming-meursault": {name:"과부하 케이블",effect:"전투 시작 시 공명이 4 이상 발동하였다면, 공격 레벨 증가 2, 방어 레벨 증가 2 얻음 해당 공명이 질투 공명이었다면, 자신의 조작 패널 양 옆 아군에게도 부여",atkLevel:"60(0) / 63(+3)",sp:null},
  "pursuance-meursault": {name:"하늘의 계시",effect:"조작 패널에서 가장 왼쪽의 스킬로 합 승리 시 다음 턴에 무작위 아군에게 공격 위력 증가 또는 수비 위력 증가 1 부여",atkLevel:"59(-1)",sp:null},
  "capote-meursault": {name:"삭히지 못한 흥분",effect:"전투 시작 시 자신이 2개 이상의 스킬의 타겟이 되었다면, 스킬 기본 위력이 1 증가하고, 피격 시 공격자에게 화상 1 부여 (턴 당 최대 5회)",atkLevel:"60(0) / 63(+3)",sp:null},
  "shadow-vested-bladesinger-[着影揮刀]-meursault": {name:"칼끝에 맺힌 술방울",effect:"[검계 우두머리 뫼르소 전용 상시 효과] 기본 스킬의 공격 적중 시, 대상에게 출혈 2 부여 (스킬당 1회) 이 인격은 출혈 , 호흡 을 부여하는 인격으로 취급됨 - 이 효과로 인해서 기본 스킬이 출혈 과 호흡 을 부여하는 스킬로 취급됨 [사용 효과] 아군 사망 시 다음 턴에 추모주 1 얻음 - 사망한 아군이 검계 소속이면, 대신 추모주 2 얻음 턴 시작 시 자신에게 추모주 가 있으면, 원한 상태가 됨 - 검계 우두머리 뫼르소면, 추가로 한 서린 검집 얻음 턴 시작 시 추모주 가 없으면, 자신의 원한 , 맺혀가는 응어리 , 한 서린 검집 소멸함 추모주 가 있을 때 체력이 0이 되는 피해를 받으면, 자신의 체력을 최대 체력의 ( 추모주 × 25)%만큼 회복하고 추모주 소멸함 (전투당 1회, 인격 패시브 우선 발동) - 흐트러짐 상태면, 흐트러짐 해제 (강제 흐트러짐 제외)",atkLevel:"63(+3) / 64(+4)",sp:null},
  "yearning-mircalla-meursault": {name:"잔혹한 만찬",effect:"자신이 출혈 피해를 가하거나 받을 때, 출혈 피해만큼 자신의 체력 회복 (턴 당 최대 10) - 출혈 을 부여하는 스킬, 코인 효과 발동 시, 대상에게 장미 쐐기 가 있으면 대상에게 출혈 1 부여 (턴 당 2회)",atkLevel:"60(0) / 63(+3)",sp:null},
  "crushbound-past-meursault": {name:"메트로놈",effect:"턴 시작시, 홀수 턴이면 피해량 증가 1, 짝수 턴이면 보호 1 얻음 - 메트로놈 E.G.O 기프트와 중첩하여 발동되지 않음. (해당 기프트가 강화 상태인 경우 이 효과의 값을 차감한 뒤 얻음) - 다른 아군에게 부여하는 효과에는 영향을 주지 않음 E.G.O 스킬 사용 시, 다음 턴에 축적된 과거 1 얻음 (전투 당 1회) - 이후 턴 종료시마다, 축적된 과거 1 얻음",atkLevel:"62(+2) / 64(+4)",sp:null},
  "land-of-illusion-hong-lu": {name:"파문",effect:"턴 시작 시 정신력이 가장 낮은 아군의 정신력을 조작 패널에서 가장 높은 자신의 완전 공명의 수만큼 회복. 패닉 상태의 아군 제외",atkLevel:"60(0)",sp:null},
  "declaration-of-rejection-hong-lu": {name:"아무도 상처받지 않는 도시",effect:"충전 횟수 최대치 +5 충전 횟수 또는 특수 충전을 소모하는 스킬 3(E.G.O 스킬 제외)의 피해량 +10% 턴 종료시 이번 턴에 피격되지 않았으면, 정신력 4 회복 - 자신이 빼기 코인 기본 공격 스킬을 장착하고 있었으면, 대신 정신력 4 감소 (이 효과로 정신력이 -40 미만이 되지 않음)",atkLevel:"62(-3) / 63(-2)",sp:"끈 20개 필요"},
  "roseate-desire-hong-lu": {name:"구속하는 리본",effect:"조작 패널에서 가장 왼쪽의 스킬로 공격하는 대상에게 공격 종료 시 다음 턴에 (색욕 완전 공명 수/4)만큼 색욕 취약 부여",atkLevel:"60(0)",sp:null},
  "soda-hong-lu": {name:"먼 바다의 갈매기 울음 소리",effect:"적 사망 시 정신력이 가장 낮은 아군 1명의 정신력 1 회복 적이 사망할 때마다 회복량 2 증가 (최대 9) 웨이브 시작 시 증가된 값 초기화",atkLevel:"55(-5) / 57(-3)",sp:null},
  "cavernous-wailing-hong-lu": {name:"우울감",effect:"자신이 적에게 스킬을 사용하여 진동 폭발 부여 시, 다음 턴에 공격 레벨 감소 1, 방어 레벨 감소 2 부여 (턴 당 최대 3회. E.G.O 스킬 포함)",atkLevel:"60(0) / 62(+2)",sp:null},
  "lasso-hong-lu": {name:"사냥의 시간",effect:"파열 , 출혈 피해로 적 또는 아군이 사망하면, 무작위 적 1명에게 올가미 2를 부여하고, 다음 턴에 신속 1 얻음 (턴 당 1회)",atkLevel:"60(0) / 62(+2)",sp:null},
  "dimension-shredder-hong-lu": {name:"뒤얽힌 현상 복구",effect:"부정적인 효과를 가진 적에게 공격 적중 시 자신의 충전 횟수 1 증가 (턴 당 최대 4회) 체력이 0이 될 때 충전 횟수를 전부 소모하고, 소모한 값에 비례하여 체력 회복 (전투당 1회 발동, 회복량 최대값: 전체 체력의 25%)",atkLevel:"61(+1) / 65(+5)",sp:null},
  "effervescent-corrosion-hong-lu": {name:"녹색 진액",effect:"피격 시 현재 체력이 최대 체력의 50% 미만이면, 공격자에게 파열 1 부여. (턴 당 가장 많은 탐식 완전 공명 수만큼 발동)",atkLevel:"60(0) / 63(+3)",sp:null},
  "to-remain-oneself-[宁作吾]-hong-lu": {name:"시를 쓰고 술에 취하다",effect:"턴 종료 시, 영작오 홍루 사용 시 소모되는 E.G.O 자원(나태, 우울, 오만) 중 가장 적게 보유한 E.G.O 자원 1개를 얻음 이번 전투에서 시엔징 , 상급 시엔징 이 감소 또는 소모된 수치 1당 피해량 +1% (최대 15%)",atkLevel:"63(+3) / 65(+5)",sp:null},
  "tears-of-the-tarnished-blood-[汚血泣淚]-hong-lu": {name:"읍루",effect:"자신의 공격, 반격 스킬 종료 시 대상이 사망했으면 - 다음 턴에 신속 2 얻음 (턴 당 1회) - 다음 턴에 자신을 포함한 모든 아군에게 해당 스킬의 물리, 죄악 속성의 피해량 증가를 1 부여 (턴 당 1회) - 다음 턴에 모든 적에게 공격 위력 감소 1 부여 (턴 당 1회) 자신 사망시 - 다음 턴에 모든 아군에게 탐식 피해량 증가 , 관통 피해량 증가 1 부여 (턴 당 1회) - 다음 턴에 모든 적에게 공격 위력 감소 1 부여 (턴 당 1회)",atkLevel:"60(0) / 65(+5) / 65(+5)",sp:null},
  "bodysack-heathcliff": {name:"오기",effect:"다른 아군이 적을 처치하면 다음 턴 시작 시 공격 위력 증가 1, 신속 1을 얻음 (최대 3)",atkLevel:"63(+3)",sp:null},
  "holiday-heathcliff": {name:"무한한 증오",effect:"자신에게 상태 이상 또는 부정적인 효과가 있을 때, 메인 공격 대상 또는 자신을 공격하는 대상에게 긍정적인 효과가 있으면, 스킬, 코인 효과로 자신과 적에게 부여하는 화상 , 출혈 , 진동 , 파열 , 침잠 의 위력 +1, 스킬, 코인 효과로 자신이 얻는 호흡 , 충전 횟수 +1",atkLevel:"60(0)",sp:null},
  "aedd-heathcliff": {name:"신경질적인 방전",effect:"피격 시 충전 횟수를 1 소모하여 최대 체력의 2.5%만큼 체력 회복 피격 시 체력이 40% 미만인 경우 충전 횟수가 1 증가한 뒤, 체력 회복 효과가 발동됨 ( 충전 횟수는 턴 당 최대 10까지 증가 가능)",atkLevel:"60(0) / 62(+2)",sp:null},
  "fell-bullet-heathcliff": {name:"뭉개진 펜던트",effect:"전투 시작 시 최대 공명이 3 이상이면, 호흡 3 얻음",atkLevel:"65(+5) / 60(0)",sp:null},
  "move-in-reg-heathcliff": {name:"회로 연결",effect:"자신이 화상 위력 또는 특수 화상을 부여하는 스킬 또는 질투 속성 스킬을 사용하여 적에게 적중 시, 대상에게 해당 스킬의 코인 수 절반만큼 추가로 화상 위력 부여 (소수점 올림, 턴당 3회)",atkLevel:"63(+3)",sp:null},
  "telepole-heathcliff": {name:"포효",effect:"적 처치 시 해당 턴의 (질투 완전 공명 수/2)만큼 충전 횟수 증가",atkLevel:"63(+3)",sp:null},
  "ya-śunyatā-tad-rupam-heathcliff": {name:"참선",effect:"흐트러짐 상태에서 회복될 때, 이번 전투 동안 최대 체력이 인격의 기본 최대 체력의 15%만큼 증가. 이후 체력을 현재 최대 체력의 15%만큼 회복. 현재 체력이 현재 최대 체력의 30% 미만일 경우, 대신 25%만큼 회복. (스테이지당 최대 3회 발동. 전투 종료 시 최대 체력 증가가 해제되며, 해제 시점의 체력 비율에 맞게 현재 체력이 조정됨.)",atkLevel:"59(-1)",sp:null},
  "asymmetrical-inertia-heathcliff": {name:"망가진 종",effect:"스킬, 코인, 패시브의 효과로 진동 폭발 이 발생한 적에게 이번 턴에 취약 1 부여 (적 1명 당 턴당 1회 발동) 진동 폭발 시 취약 을 부여하는 E.G.O 기프트의 효과와 중첩되어 발동되지 않음 (해당 기프트가 강화 상태인 경우, 이 효과의 값을 차감한 뒤 부여됨)",atkLevel:"60(0) / 63(+3)",sp:null},
  "binds-heathcliff": {name:"구속의 사슬",effect:"전투 시작 시 자신의 스킬을 포함한 공명 중 가장 높은 공명이 4 이상이 되었다면, 자신과 공명에 포함된 모든 아군에게 공격 레벨 증가 3, 방어 레벨 증가 3 부여 - 해당 공명이 완전 공명이면, 추가 2 부여",atkLevel:"60(0)",sp:null},
  "snagharpoon-ishmael": {name:"강박",effect:"승률이 우세인 합 진행 시 합 위력 +2. 승률이 불리인 합 진행 시 합 위력 -2",atkLevel:"56(-4)",sp:null},
  "hundred-footed-death-maggot-[蝍蛆殺]-ishmael": {name:"고독반살",effect:"자신의 공격 스킬로 침잠 위력, 침잠 횟수 또는 특수 침잠을 부여할 때마다, 다음 턴에 공격 레벨 증가 1 얻음 (최대 2) - 완전 공명 수가 3 이상이면, 위 효과를 대신하여, 다음 턴에 공격 레벨 증가 1 얻음 (최대 3)",atkLevel:"62(+2) / 63(+3)",sp:null},
  "roseate-desire-ishmael": {name:"분홍 리본",effect:"합 승리 시 분홍 리본 1 부여",atkLevel:"60(0)",sp:null},
  "capote-ishmael": {name:"환호 속 숨통 끊기",effect:"공격하는 대상의 체력이 30% 미만일 때 분노 속성 스킬의 피해량 +20%",atkLevel:"60(0) / 63(+3)",sp:null},
  "bygone-days-ishmael": {name:"불청객 맞이",effect:"대상에게 초청받지 않은 자 또는 패닉 유형 변경 효과가 있으면, 합 위력 +1 해당 대상에게 공격 적중시 정신력이 가장 낮은 아군 1명의 정신력 5 회복 (턴 당 1회)",atkLevel:"62(+2) / 57(-3)",sp:null},
  "ardor-blossom-star-ishmael": {name:"흩날리는 불꽃",effect:"화상이 부여된 적에게 공격 적중 시 무작위 적 3명에게 화상 1 부여",atkLevel:"63(+3)",sp:null},
  "wingbeat-ishmael": {name:"식탐",effect:"스킬 사용 시 메인 타겟이 이번 턴에 체력 피해를 받아 체력이 감소한 상태면, 적중시 자신의 체력이 최대인 경우, 피해량이 5 ~ 10% 증가하고, 자신의 체력이 감소한 상태인 경우, 체력 2 ~ 5 회복 (턴 당 7회 발동)",atkLevel:"60(0)",sp:null},
  "christmas-nightmare-ishmael": {name:"어둠 속 시선",effect:"아군이 스킬, 코인 효과로 얻는 진동 횟수의 값 +1 (턴 당 2회 발동) 아군의 공격 대상이 흐트러짐, 사기 저하, 패닉 상태면 대신 +2 동일한 효과를 갖는 E.G.O 기프트와 중첩하여 발동되지 않음",atkLevel:"61(+1) / 62(+2)",sp:null},
  "tidal-elegy-ishmael": {name:"심해의 춤",effect:"- 전투 시작 시 적이 1명만 있으면, 조작 패널에서 가장 왼쪽에 있는 자신의 공격 스킬 합 위력 +1, 합 승리 후 적중시 피해량 +11.5% (E.G.O 스킬 포함) - 복귀, 대기 해제한 턴 동안 자신의 속도 최솟값, 최댓값 +1, 합 위력 +1",atkLevel:"63(+3) / 65(+5)",sp:null},
  "blind-obsession-ishmael": {name:"무모한 항해",effect:"턴 종료 시 자신을 제외한 체력이 가장 낮은 아군 1명에게 침잠 5를 부여하고, 다음 턴에 신속 1, 공격 레벨 증가 3 부여",atkLevel:"60(0)",sp:null},
  "what-is-cast-rodion": {name:"단절",effect:"정신력 회복 효율 +1, 정신력 감소 효율 -1",atkLevel:"60(0)",sp:null},
  "into-the-sunset-rodion": {name:"나방과 나비의 차이",effect:"조작 패널에서 가장 왼쪽에 장착한 자신의 기본 공격 스킬이 분노 또는 색욕 속성 스킬이면, 해당 스킬로 메인 타겟에게 입힌 피해량의 30%만큼 무작위 적 1명에게 공격 종료시 해당 스킬 죄악 속성 피해를 입힘 (최대 피해 30, 집중 전투의 경우, 부위로 판정) 위 효과로 최대 피해를 입혔으면 다음 턴에 해당 죄악 속성 피해량 증가 1 얻고 2턴 동안 위 효과가 발동되지 않음",atkLevel:"59(-1) / 60(0)",sp:null},
  "rime-shank-rodion": {name:"추위",effect:"침잠 이 5 이상 부여된 적에게 공격 적중 시 다음 턴에 속박 , 공격 위력 감소 1 부여 (적 1명당 최대 3)",atkLevel:"61(+1)",sp:null},
  "effervescent-corrosion-rodion": {name:"끈적거리는 오물",effect:"관통 속성 스킬로 앞면 적중 시 속박 1 부여 (턴 당 최대 2회)",atkLevel:"61(+1)",sp:null},
  "mirror-touch-rodion": {name:"분열된 촉각",effect:"호흡 위력 또는 횟수를 얻을 때, 자신의 호흡 횟수 1 증가 (턴당 2회) 자신이 호흡 인격 또는 진동 인격이면, 기본 가중치가 1이거나 광역 난사인 기본 스킬로 가하는 피해량 +10% 공격 종료 시 대상이 흐트러짐 상태거나 사망했으면, 다음 턴에 대상이 보유한 진동 위력의 1/3만큼을 다른 무작위 적들에게 나누어 부여 (소수점 올림, 집중 전투면, 부위로 판정) - 이 효과는 E.G.O 기프트 거울 촉각 공감각 효과와 중첩되어 발동하지 않음",atkLevel:"67(+2) / 68(+3)",sp:"끈 25개 필요"},
  "4th-match-flame-rodion": {name:"불씨",effect:"전투 시작 시 분노 완전 공명이 발동했으면, 합 승리 시 메인 타겟에게 분노 취약 1 부여 (턴당 1회) 화상 이 부여된 적 처치 시 최대 체력의 (분노 공명 수)% 만큼 체력 회복 (최대 12%)",atkLevel:"63(+3)",sp:null},
  "pursuance-rodion": {name:"하늘의 선고",effect:"적이 흐트러짐 상태에 빠질 때마다 아군 중 현재 체력 비율이 가장 낮은 아군 1명이 해당 캐릭터의 최대 체력의 4%만큼 체력을 회복",atkLevel:"59(-1)",sp:null},
  "hex-nail-rodion": {name:"가슴에 박힌 쇠말뚝",effect:"기본 공격 스킬을 사용하여 적에게 출혈 또는 특수 출혈을 부여할 경우, 방어 레벨 감소 1 부여 (턴 당 1회) - 대상 적이 출혈 또는 특수 출혈을 보유하였다면 출혈 2 추가로 부여 (턴 당 1회) 자신을 포함한 아군이 적에게 스킬로 직접적인 체력 피해를 받은 경우, 대상 적에게 저주 1 부여 (턴 당 2회)",atkLevel:"57(-3) / 60(0)",sp:null},
  "sanguine-desire-rodion": {name:"집착",effect:"자신의 스킬 패널에서 가장 왼쪽에 위치한 스킬의 출혈 위력 부여량이 2배로 증가",atkLevel:"60(0)",sp:null},
  "indicants-trial-rodion": {name:"작열유희",effect:"화상 횟수가 10 이상인 대상 사망 시 모든 적에게 대상의 화상 횟수를 나누어 부여하고, 자신의 정신력 8 회복 (집중 전투인 경우, 모든 부위에 나누어 부여. 대상당 최대 부여량: 3, 턴 당 2회 발동) - 자신의 정신력이 최대치면, 대신 정신력이 가장 낮은 아군 1명 정신력 5 회복",atkLevel:"63(+3) / 65(+5)",sp:null},
  "branch-of-knowledge-sinclair": {name:"불안정",effect:"한 스킬에서 공격 적중 시 이전에 판정한 코인과 다른 면의 코인 나오면 정신력 -5, 이번 턴에 피해량 증가 1을 얻음. (턴당 최대 3회)",atkLevel:"63(+3)",sp:null},
  "cavernous-wailing-sinclair": {name:"눈물막",effect:"턴 시작 시 자신에게 보호막이 적용 중일 때 보호 1 얻음 자신에게 울음 방울 이 적용 중일 때, 보호 1 추가로 얻음",atkLevel:"58(-2) / 60(0)",sp:null},
  "impending-day-sinclair": {name:"산제물 의식",effect:"공격, 반격 스킬로 적 처치 시 처치한 스킬 속성 자원을 5개 획득",atkLevel:"61(+1)",sp:null},
  "lifetime-stew-sinclair": {name:"스튜 분출",effect:"뒷면 적중 시 대상이 적인 경우, 화상 1 부여 적에게 화상 위력 또는 횟수를 부여하는 기본 공격 스킬 사용 시 - 더하기 코인 스킬이면 · 정신력이 40 미만이면, 정신력 4 회복 · 정신력이 40 이상이면, 피해량 +10% - 빼기 코인 스킬이면 · 정신력이 -25 초과면, 정신력 4 감소 (이 효과로 정신력이 -40 미만으로 내려가지 않음) · 정신력이 -25 이하면, 피해량 +10%",atkLevel:"58(-2) / 61(+1)",sp:null},
  "hex-nail-sinclair": {name:"눌어붙은 가죽",effect:"전투 시작 시 자신에게 부정적인 효과가 부여되어 있으면 합 위력 증가 1, 수비 위력 증가 1 얻음 - 자신에게 부여된 부정적 효과 3개당 보호 1 얻음 (최대 2)",atkLevel:"60(0) / 62(+2)",sp:null},
  "lantern-sinclair": {name:"미끼 요정",effect:"전투 시작 시 자신을 메인 타겟으로 공격하는 대상을 처치하면, 자신의 체력을 최대 체력의 (3 + (탐식 완전 공명 수))% 만큼 회복",atkLevel:"58(-2)",sp:null},
  "92-sinclair": {name:"파멸의 예언",effect:"색욕 속성 스킬의 앞면 적중 시 자신과 대상에게 정신력 피해 4를 입힘 (정신력이 없는 대상에게는 정신력 피해가 적용되지 않음) 색욕 속성 스킬로 적 처치 시 색욕 E.G.O 자원을 5개 획득",atkLevel:"60(0)",sp:null},
  "harmony-sinclair": {name:"그건, 리듬이었어요",effect:"턴 시작 시 리듬 2 얻음 대상 처치 시 자신의 체력을 최대 체력의 5%만큼 회복하고, 자신의 정신력 5 회복 (턴당 1회) - E.G.O 스킬 - 하모니로 처치했으면 위 수치가 2배로 적용됨 이번 턴에 자신의 정신력이 감소했으면, 턴 종료 시 자신의 정신력을 (4 + 적 전체의 화상 과 출혈 위력의 합 / 10)만큼 회복 (최대 10, 소수점 버림)",atkLevel:"62(+2) / 64(+4)",sp:null},
  "tears-of-the-tarnished-blood-[汚血泣淚]-sinclair": {name:"읍루",effect:"- 턴 종료 시, 이번 턴에 자신이 부정적인 효과를 보유했거나 자신의 체력이나 정신력이 감소했으면 정신력 5 회복. - 아군이나 자신이 사망한 경우 다음 턴에 모든 적에게 취약 1 부여 (턴 당 최대 1회)",atkLevel:"60(0) / 62(+2)",sp:null},
  "to-páthos-máthos-outis": {name:"완벽한 전술",effect:"매 턴마다 한 번도 피격당하지 않을 경우, 다음 턴에 피해량 증가 1을 얻음 (최대 3회 중첩 가능)",atkLevel:"63(+3)",sp:null},
  "ill-go-fer-scissors-how-bout-you-outis": {name:"저주 벌칙",effect:"합 승리시, 대상에게 4만큼 질투 피해를 입힘 - 대상의 체력이 33% 미만이거나 자신의 체력이 33% 미만이면, 다음 턴에 위력 감소 1 부여 (턴당 1회) - E.G.O 기프트 저주 인형이 발동한 턴에는 이 패시브 효과로 위력 감소 를 부여하지 않음",atkLevel:"60(0) / 63(+3)",sp:null},
  "ya-śunyatā-tad-rupam-outis": {name:"비워냄",effect:"매 턴마다 색욕 피해량 증가 1을 얻음. 자신의 정신력이 0 미만이면 추가로 1을 더 얻음",atkLevel:"58(-2)",sp:null},
  "sunshower-outis": {name:"사냥의 호흡",effect:"합 종료 시 호흡 2를 얻음 흐트러짐 상태가 되면 보호 2를 얻고, 흐트러짐 상태에서 돌아올 때 호흡 5를 얻음",atkLevel:"62(+2)",sp:null},
  "ebony-stem-outis": {name:"불신의 줄기",effect:"매 턴마다 관통 피해량 증가 1을 얻음 앞면 적중 시 다음 턴에 속박 1 부여, 파열 횟수 1 증가",atkLevel:"60(0)",sp:null},
  "holiday-outis": {name:"평등한 선물",effect:"자신을 제외한 아군에게 스킬, 코인 효과로 긍정적인 버프를 부여할 때 무작위 적 1명에게 화상 , 출혈 , 진동 , 파열 , 침잠 중 무작위 1개 효과의 위력 1 부여 (턴 당 최대 5회 발동. 적 1명 당 최대 5회 부여 가능. 환상체의 경우 무작위 부위에 부여됨)",atkLevel:"58(-2) / 63(+3)",sp:null},
  "dimension-shredder-outis": {name:"헤매이는 자",effect:"충전 횟수 최대치 +5 ( 충전 - 1)당 충전 횟수를 소모하는 스킬의 피해량 +2% (최대 10%)",atkLevel:"65(+5)",sp:null},
  "magic-bullet-outis": {name:"일곱 개의 탄환",effect:"기본 공격 스킬로 적중 시, 자신의 ( 마탄 / 3)만큼 화상 부여 (턴 당 최대 3회 부여) 로보토미 E.G.O::마탄 오티스 인격인 경우, 대신 자신의 마탄 만큼 화상 부여 (턴 당 최대 3회 부여) 대상의 화상 위력이 30 이상이면, 위 효과를 대신하여 흑염 1 부여 (턴 당 최대 2회 부여)",atkLevel:"63(+3) / 65(+5)",sp:null},
  "binds-outis": {name:"성대한 환대",effect:"자신의 공격 종료 시에 대상이 흐트러짐 상태가 되었거나 사망하였으면, 오만 속성 E.G.O 자원 +1, 나머지 속성의 E.G.O 자원 중 무작위 1종 +1 (턴 당 최대 3회 발동)",atkLevel:"60(0)",sp:null},
  "suddenly-one-day-gregor": {name:"이형발작",effect:"턴 시작 시 체력이 25% 미만이면 체력을 15 회복하고, 보호 2를 얻음. 해당 효과 발동 시 자신을 제외한 무작위 아군과 적 1명의 정신력 감소 효율 +2",atkLevel:"59(-1)",sp:null},
  "legerdemain-gregor": {name:"구더기",effect:"공격 적중 시 (탐식 완전 공명 수 x8)% 확률로 구더기 5 부여",atkLevel:"58(-2)",sp:null},
  "lantern-gregor": {name:"양분 흡수",effect:"파열 이 부여된 적 처치 시 최대 체력의 (탐식 완전 공명 수)%만큼 체력 회복",atkLevel:"57(-3)",sp:null},
  "bygone-days-gregor": {name:"되돌릴 수 있다면…",effect:"자신의 공격 종료 시 대상이 사망한 경우, 가장 수량이 적은 E.G.O 자원 1개 획득 대상의 ( 침잠 위력 + 횟수) 5 당 추가로 1개 획득 (최대 3) (가장 수량이 적은 E.G.O 자원이 2개 이상이면, 부족한 자원 중 무작위로 획득)",atkLevel:"57(-3)",sp:null},
  "move-in-reg-gregor": {name:"전입 신고 처리",effect:"최대 공명 수가 3 이상이면, 스킬 적중 시 메인 타겟에게 다음 턴에 속박 1 부여 (턴당 1회)\n\n자신의 충전 위력이 3 이상이면, 자신이 충전 횟수를 얻거나 소모하는 기본 스킬 및 적에게 화상 위력 또는 횟수를 부여하는 기본 스킬의 피해량 +10%",atkLevel:"68(+3)",sp:null},
  "aedd-gregor": {name:"교류 방출",effect:"앞면 적중 시 자신의 충전 횟수를 2 소모하여 충전을 보유한 아군 중 충전 횟수가 제일 적은 아군 1명의 충전 횟수 1 증가",atkLevel:"60(0)",sp:null},
  "solemn-lament-gregor": {name:"애도",effect:"턴 종료 시 자신이 부정적인 효과를 보유하고 있으면, 다음 턴에 공격 위력 증가 1 얻음 패닉 상태인 대상이나 E.G.O 침식 상태인 대상을 공격할 때, 피해량 +15%",atkLevel:"62(+2) / 60(0)",sp:null},
  "christmas-nightmare-gregor": {name:"잠들지 못하는 밤",effect:"전투 시작 시 흐트러짐, 사기 저하, 패닉 상태인 적의 수만큼 모든 적에게 각각 공격 레벨 감소 1 또는 방어 레벨 감소 1 부여 (턴 당 최대 2회) 동일한 효과를 갖는 E.G.O 기프트와 중첩하여 발동되지 않음",atkLevel:"61(+1) / 62(+2)",sp:null},
  "garden-of-thorns-gregor": {name:"장미 면류관",effect:"턴 시작 시, 무작위 적 1명에게 파열 위력 2 부여 완전 공명을 발동하였다면 전투 시작 시, 모든 적에게 파열 위력 2 부여",atkLevel:"60(0)",sp:null},
  "unbrilliant-glory-gregor": {name:"협객",effect:"아래 조건 만족 시 칼집 속 사람 얻음 - 자신의 체력 피해 3 당 1 얻음 - 자신의 보호막 피해 5 당 1 얻음 - 본인을 제외한 아군이 흐트러지면, 한 명 당 10 얻음 - 본인을 제외한 아군이 사망하면, 한 명 당 20 얻음 턴 시작 시 피해로 인한 흐트러짐 상태일 때, 칼집 속 사람 이 40이면, 해당 턴 동안 모든 내성을 2로 고정하고 자신의 흐트러짐을 해제 (전투당 1회, 강제 흐트러짐 제외)",atkLevel:"60(0) / 63(+3) / 66(+6)",sp:null},
};

// E.G.O. 장착에 필요한 죄악 자원 코스트. 나무위키 원본에서 파싱.
const EGO_COST_DETAIL = {
  "crows-eye-view-yi-sang": [{sin:"분노",count:1},{sin:"나태",count:3}],
  "bygone-days-yi-sang": [{sin:"나태",count:3},{sin:"우울",count:3}],
  "4th-match-flame-yi-sang": [{sin:"분노",count:5},{sin:"나태",count:1},{sin:"탐식",count:1}],
  "wishing-cairn-yi-sang": [{sin:"나태",count:4},{sin:"우울",count:1}],
  "dimension-shredder-yi-sang": [{sin:"나태",count:3},{sin:"탐식",count:3}],
  "fell-bullet-yi-sang": [{sin:"분노",count:2},{sin:"오만",count:6}],
  "solemn-lament-yi-sang": [{sin:"나태",count:1},{sin:"우울",count:4},{sin:"오만",count:2}],
  "sunshower-yi-sang": [{sin:"나태",count:4},{sin:"탐식",count:2},{sin:"우울",count:2},{sin:"오만",count:2}],
  "great-trichiliocosm-[三千大世界]-yi-sang": [{sin:"분노",count:4},{sin:"우울",count:2},{sin:"오만",count:2},{sin:"질투",count:4}],
  "representation-emitter-faust": [{sin:"탐식",count:2},{sin:"오만",count:4}],
  "hex-nail-faust": [{sin:"질투",count:6}],
  "92-faust": [{sin:"색욕",count:1},{sin:"탐식",count:3},{sin:"오만",count:1}],
  "lasso-faust": [{sin:"색욕",count:1},{sin:"탐식",count:3},{sin:"질투",count:2}],
  "fluid-sac-faust": [{sin:"색욕",count:2},{sin:"우울",count:4},{sin:"질투",count:3}],
  "telepole-faust": [{sin:"분노",count:1},{sin:"색욕",count:3},{sin:"질투",count:2}],
  "thoracalgia-faust": [{sin:"나태",count:1},{sin:"우울",count:1},{sin:"오만",count:5}],
  "command-meltdown-faust": [{sin:"나태",count:1},{sin:"탐식",count:5},{sin:"오만",count:2}],
  "ardor-blossom-star-faust": [{sin:"분노",count:3},{sin:"나태",count:2},{sin:"오만",count:2}],
  "everlasting-faust": [{sin:"색욕",count:2},{sin:"나태",count:4},{sin:"우울",count:2},{sin:"오만",count:3}],
  "la-sangre-de-sancho-don-quixote": [{sin:"색욕",count:2},{sin:"오만",count:2}],
  "ill-go-fer-scissors-how-bout-you-don-quixote": [{sin:"질투",count:5}],
  "lifetime-stew-don-quixote": [{sin:"색욕",count:5}],
  "wishing-cairn-don-quixote": [{sin:"분노",count:2},{sin:"나태",count:2},{sin:"오만",count:1}],
  "electric-screaming-don-quixote": [{sin:"오만",count:2},{sin:"질투",count:4}],
  "fluid-sac-don-quixote": [{sin:"색욕",count:1},{sin:"우울",count:4},{sin:"오만",count:2}],
  "telepole-don-quixote": [{sin:"분노",count:1},{sin:"우울",count:2},{sin:"질투",count:2}],
  "red-sheet-don-quixote": [{sin:"색욕",count:1},{sin:"탐식",count:5},{sin:"우울",count:2},{sin:"오만",count:1}],
  "yearning-mircalla-don-quixote": [{sin:"색욕",count:5},{sin:"탐식",count:3},{sin:"오만",count:2},{sin:"질투",count:2}],
  "in-the-name-of-love-and-hate-don-quixote": [{sin:"분노",count:2},{sin:"우울",count:2},{sin:"오만",count:2},{sin:"질투",count:6}],
  "forest-for-the-flames-ryoshu": [{sin:"분노",count:2},{sin:"색욕",count:2}],
  "soda-ryoshu": [{sin:"탐식",count:2},{sin:"오만",count:2},{sin:"질투",count:2}],
  "red-eyes-ryoshu": [{sin:"색욕",count:2},{sin:"탐식",count:2},{sin:"질투",count:1}],
  "blind-obsession-ryoshu": [{sin:"우울",count:2},{sin:"오만",count:2},{sin:"질투",count:2}],
  "4th-match-flame-ryoshu": [{sin:"분노",count:4},{sin:"오만",count:2}],
  "red-eyes-(open)-ryoshu": [{sin:"분노",count:2},{sin:"색욕",count:2},{sin:"질투",count:3}],
  "thoracalgia-ryoshu": [{sin:"분노",count:1},{sin:"색욕",count:1},{sin:"오만",count:5}],
  "contempt-awe-ryoshu": [{sin:"분노",count:3},{sin:"색욕",count:4},{sin:"오만",count:4},{sin:"질투",count:3}],
  "great-trichiliocosm-[三千大世界]-ryoshu": [{sin:"분노",count:4},{sin:"색욕",count:4},{sin:"오만",count:4}],
  "chains-of-others-meursault": [{sin:"나태",count:1},{sin:"우울",count:1},{sin:"질투",count:2}],
  "screwloose-wallop-meursault": [{sin:"나태",count:2},{sin:"오만",count:1},{sin:"질투",count:2}],
  "regret-meursault": [{sin:"분노",count:3},{sin:"오만",count:2}],
  "electric-screaming-meursault": [{sin:"분노",count:1},{sin:"질투",count:4}],
  "pursuance-meursault": [{sin:"나태",count:4},{sin:"우울",count:1},{sin:"오만",count:2}],
  "capote-meursault": [{sin:"분노",count:2},{sin:"색욕",count:1},{sin:"나태",count:2}],
  "shadow-vested-bladesinger-[着影揮刀]-meursault": [{sin:"분노",count:1},{sin:"오만",count:4},{sin:"질투",count:1}],
  "yearning-mircalla-meursault": [{sin:"색욕",count:4},{sin:"오만",count:3},{sin:"질투",count:4}],
  "crushbound-past-meursault": [{sin:"분노",count:2},{sin:"색욕",count:2},{sin:"나태",count:6},{sin:"질투",count:1}],
  "land-of-illusion-hong-lu": [{sin:"색욕",count:1},{sin:"우울",count:5}],
  "declaration-of-rejection-hong-lu": [{sin:"색욕",count:2},{sin:"오만",count:1},{sin:"질투",count:2}],
  "roseate-desire-hong-lu": [{sin:"색욕",count:4},{sin:"질투",count:2}],
  "soda-hong-lu": [{sin:"탐식",count:3},{sin:"우울",count:2},{sin:"질투",count:2}],
  "cavernous-wailing-hong-lu": [{sin:"나태",count:3},{sin:"우울",count:3},{sin:"오만",count:2}],
  "lasso-hong-lu": [{sin:"색욕",count:1},{sin:"탐식",count:4},{sin:"오만",count:1}],
  "dimension-shredder-hong-lu": [{sin:"탐식",count:3},{sin:"오만",count:3}],
  "effervescent-corrosion-hong-lu": [{sin:"탐식",count:6},{sin:"우울",count:1}],
  "to-remain-oneself-[宁作吾]-hong-lu": [{sin:"나태",count:1},{sin:"우울",count:2},{sin:"오만",count:4}],
  "tears-of-the-tarnished-blood-[汚血泣淚]-hong-lu": [{sin:"탐식",count:5}],
  "bodysack-heathcliff": [{sin:"색욕",count:2},{sin:"질투",count:2}],
  "holiday-heathcliff": [{sin:"탐식",count:3},{sin:"질투",count:2}],
  "aedd-heathcliff": [{sin:"우울",count:3},{sin:"질투",count:2}],
  "fell-bullet-heathcliff": [{sin:"분노",count:1},{sin:"오만",count:3},{sin:"질투",count:2}],
  "move-in-reg-heathcliff": [{sin:"분노",count:2},{sin:"탐식",count:1},{sin:"질투",count:3}],
  "telepole-heathcliff": [{sin:"분노",count:3},{sin:"색욕",count:2},{sin:"질투",count:3}],
  "ya-śunyatā-tad-rupam-heathcliff": [{sin:"분노",count:2},{sin:"색욕",count:2},{sin:"나태",count:2},{sin:"우울",count:2}],
  "asymmetrical-inertia-heathcliff": [{sin:"나태",count:2},{sin:"우울",count:1},{sin:"오만",count:2},{sin:"질투",count:2}],
  "binds-heathcliff": [{sin:"색욕",count:2},{sin:"우울",count:4},{sin:"오만",count:2},{sin:"질투",count:3}],
  "snagharpoon-ishmael": [{sin:"분노",count:2},{sin:"우울",count:2}],
  "hundred-footed-death-maggot-[蝍蛆殺]-ishmael": [{sin:"나태",count:2},{sin:"오만",count:2}],
  "roseate-desire-ishmael": [{sin:"분노",count:1},{sin:"색욕",count:4}],
  "capote-ishmael": [{sin:"분노",count:2},{sin:"색욕",count:2},{sin:"나태",count:1}],
  "bygone-days-ishmael": [{sin:"색욕",count:2},{sin:"나태",count:1},{sin:"우울",count:3}],
  "ardor-blossom-star-ishmael": [{sin:"분노",count:4},{sin:"색욕",count:2},{sin:"질투",count:1}],
  "wingbeat-ishmael": [{sin:"색욕",count:1},{sin:"탐식",count:3},{sin:"오만",count:2}],
  "christmas-nightmare-ishmael": [{sin:"나태",count:4},{sin:"탐식",count:1},{sin:"오만",count:2}],
  "tidal-elegy-ishmael": [{sin:"우울",count:4},{sin:"오만",count:2}],
  "blind-obsession-ishmael": [{sin:"분노",count:2},{sin:"우울",count:3},{sin:"오만",count:3},{sin:"질투",count:3}],
  "what-is-cast-rodion": [{sin:"우울",count:1},{sin:"오만",count:3}],
  "into-the-sunset-rodion": [{sin:"분노",count:2}],
  "rime-shank-rodion": [{sin:"우울",count:5},{sin:"질투",count:3}],
  "effervescent-corrosion-rodion": [{sin:"나태",count:2},{sin:"우울",count:2},{sin:"오만",count:2}],
  "mirror-touch-rodion": [{sin:"분노",count:2},{sin:"나태",count:2},{sin:"우울",count:1},{sin:"오만",count:1}],
  "4th-match-flame-rodion": [{sin:"분노",count:3},{sin:"오만",count:2},{sin:"질투",count:1}],
  "pursuance-rodion": [{sin:"나태",count:4},{sin:"오만",count:3}],
  "hex-nail-rodion": [{sin:"색욕",count:2},{sin:"오만",count:1},{sin:"질투",count:4}],
  "sanguine-desire-rodion": [{sin:"분노",count:1},{sin:"색욕",count:3},{sin:"오만",count:3},{sin:"질투",count:3}],
  "indicants-trial-rodion": [{sin:"분노",count:7},{sin:"오만",count:3}],
  "branch-of-knowledge-sinclair": [{sin:"분노",count:1},{sin:"탐식",count:3}],
  "cavernous-wailing-sinclair": [{sin:"색욕",count:1},{sin:"나태",count:2},{sin:"우울",count:3}],
  "impending-day-sinclair": [{sin:"분노",count:3},{sin:"색욕",count:2}],
  "lifetime-stew-sinclair": [{sin:"분노",count:3},{sin:"색욕",count:2},{sin:"탐식",count:1}],
  "hex-nail-sinclair": [{sin:"색욕",count:2},{sin:"오만",count:2},{sin:"질투",count:2}],
  "lantern-sinclair": [{sin:"색욕",count:1},{sin:"탐식",count:4},{sin:"오만",count:2}],
  "92-sinclair": [{sin:"분노",count:2},{sin:"색욕",count:5},{sin:"질투",count:1}],
  "harmony-sinclair": [{sin:"분노",count:3},{sin:"색욕",count:2},{sin:"나태",count:1},{sin:"오만",count:1},{sin:"질투",count:1}],
  "tears-of-the-tarnished-blood-[汚血泣淚]-sinclair": [{sin:"색욕",count:2},{sin:"탐식",count:6},{sin:"오만",count:2}],
  "to-páthos-máthos-outis": [{sin:"나태",count:2},{sin:"오만",count:2}],
  "ill-go-fer-scissors-how-bout-you-outis": [{sin:"색욕",count:1},{sin:"질투",count:3}],
  "ya-śunyatā-tad-rupam-outis": [{sin:"색욕",count:2},{sin:"나태",count:2},{sin:"오만",count:2}],
  "sunshower-outis": [{sin:"나태",count:2},{sin:"탐식",count:2},{sin:"우울",count:1}],
  "ebony-stem-outis": [{sin:"색욕",count:2},{sin:"탐식",count:3},{sin:"우울",count:1},{sin:"오만",count:4}],
  "holiday-outis": [{sin:"색욕",count:2},{sin:"나태",count:1},{sin:"오만",count:3},{sin:"질투",count:2}],
  "dimension-shredder-outis": [{sin:"분노",count:1},{sin:"우울",count:3},{sin:"오만",count:1},{sin:"질투",count:4}],
  "magic-bullet-outis": [{sin:"분노",count:2},{sin:"색욕",count:2},{sin:"오만",count:4}],
  "binds-outis": [{sin:"분노",count:1},{sin:"색욕",count:1},{sin:"나태",count:4},{sin:"오만",count:4}],
  "suddenly-one-day-gregor": [{sin:"색욕",count:3},{sin:"우울",count:1}],
  "legerdemain-gregor": [{sin:"나태",count:1},{sin:"탐식",count:3}],
  "lantern-gregor": [{sin:"나태",count:1},{sin:"탐식",count:4}],
  "bygone-days-gregor": [{sin:"색욕",count:2},{sin:"우울",count:4}],
  "move-in-reg-gregor": [{sin:"분노",count:1},{sin:"질투",count:5}],
  "aedd-gregor": [{sin:"우울",count:3},{sin:"질투",count:3}],
  "solemn-lament-gregor": [{sin:"색욕",count:1},{sin:"나태",count:2},{sin:"우울",count:2},{sin:"질투",count:2}],
  "christmas-nightmare-gregor": [{sin:"나태",count:2},{sin:"탐식",count:2},{sin:"우울",count:2},{sin:"오만",count:2}],
  "garden-of-thorns-gregor": [{sin:"분노",count:2},{sin:"색욕",count:2},{sin:"나태",count:2},{sin:"탐식",count:2},{sin:"우울",count:2},{sin:"오만",count:2},{sin:"질투",count:2}],
  "unbrilliant-glory-gregor": [{sin:"분노",count:2},{sin:"나태",count:3},{sin:"오만",count:2}],
};

const SIN_COLOR = {
  "분노":"#dc2626", "색욕":"#ea580c", "나태":"#ca8a04", "탐식":"#16a34a",
  "우울":"#0ea5e9", "오만":"#4f46e5", "질투":"#9333ea",
};
const EGO_GRADES = ["ZAYIN","TETH","HE","WAW","ALEPH"];
const SKILL_RULE_DEFAULT = { total:6, caps:{1:3,2:5,3:6}, defaultSplit:{1:3,2:2,3:1} };
// key: "수감자|인격명|에고 slug" — 해당 인격이 선택되어 있고 해당 에고도 장착되어 있을 때만 적용.
const SKILL_RULE_OVERRIDE = {
  "돈키호테|로보토미 E.G.O::사랑과 증오의 이름으로|in-the-name-of-love-and-hate-don-quixote": { total:7, caps:{1:3,2:5,3:7}, defaultSplit:{1:3,2:2,3:2} },
};






function sinBadgeSVG(sin, size){
  const src = SIN_ICON_DATA[sin];
  if (!src) return "";
  return `<img class="sin-badge" width="${size}" height="${size}" src="${src}" alt="${sin}" loading="lazy">`;
}

function parseCondition(cond){
  if (!cond) return {terms:[], label:""};
  const chunks = cond.split(" + ").map(c => c.trim()).filter(Boolean);
  let label = "";
  const terms = chunks.map(chunk => {
    const tokens = chunk.split(/\s+/);
    let sin = null, num = tokens[0];
    if (SIN_SET.has(tokens[0])){ sin = tokens[0]; num = tokens[1]; if (tokens[2]) label = tokens[2]; }
    else if (tokens[1]) label = tokens[1];
    return {sin, num};
  });
  return {terms, label};
}

const CATEGORY_DEFS = [
  ["체력 회복", /체력[^,.·]{0,8}회복/],
  ["정신력 회복", /정신력[^,.·]{0,8}회복/],
  ["보호막", /보호막/],
  ["신속", /신속/],
  ["피해량 증가", /(가하는 )?피해량\s*\+|피해량[^,.·]{0,4}증가/],
  ["받는 피해 감소", /받는 피해량[^,.·]{0,10}(-|감소)/],
  ["공격 레벨", /공격 레벨/],
  ["방어 레벨", /방어 레벨/],
  ["출혈", /출혈/],
  ["화상", /화상/],
  ["침잠", /침잠/],
  ["파열", /파열/],
  ["진동", /진동/],
  ["속박", /속박/],
  ["크리티컬", /크리티컬/],
  ["충전", /충전/],
  ["호흡", /호흡/],
  ["탄환", /탄환/],
  ["속도", /속도/],
  ["합 위력", /합 위력/],
  ["적 처치 시", /처치\s*시|처치할\s*때/],
];

// 효과 유형 모음 필터. 선택하면 members에 속한 개별 효과 유형이 모두 선택된 것으로 처리된다.
const CATEGORY_BUNDLES = [
  { label:"생존기", members:["체력 회복","보호막","받는 피해 감소","방어 레벨"] },
  { label:"고점", members:["피해량 증가","공격 레벨","크리티컬"] },
];

function computeMeta(entry){
  const {terms, label} = parseCondition(entry.condition);
  entry.condTerms = terms;
  entry.condLabel = label;
  entry.sins = terms.map(t => t.sin).filter(Boolean);
  const t = entry.supportPassiveEffect;
  entry.cats = CATEGORY_DEFS.filter(([,re]) => re.test(t)).map(([label]) => label);
  entry.identityKeywords = IDENTITY_KEYWORDS_DATA[`${entry.sinner}|${entry.identity}`] || [];
  entry.skillSinsByPos = (() => {
    const prof = IDENTITY_SKILL_PROFILE[`${entry.sinner}|${entry.identity}`];
    const byPos = {"1":null, "2":null, "3":null, "def":null};
    if (!prof) return byPos;
    if (prof.skills[0]) byPos["1"] = prof.skills[0].sin || null;
    if (prof.skills[1]) byPos["2"] = prof.skills[1].sin || null;
    if (prof.skills[2]) byPos["3"] = prof.skills[2].sin || null;
    if (prof.defense[0]) byPos["def"] = prof.defense[0].sin || null;
    return byPos;
  })();
  entry.skillSins = [...new Set(Object.values(entry.skillSinsByPos).filter(Boolean))];
  entry.egoConditional = EGO_CONDITIONAL_DATA[`${entry.sinner}|${entry.identity}`] || [];
  entry.abbrevs = ABBREV_DATA[`${entry.sinner}|${entry.identity}`] || [];
  const searchFields = [entry.sinner, entry.identity, entry.supportPassiveName, entry.supportPassiveEffect, entry.condition, ...entry.abbrevs];
  entry.searchBlob = searchFields.join(" ").toLowerCase();
  entry.searchBlobNoSpace = searchFields.map(f => f.replace(/\s+/g, "")).join(" ").toLowerCase();
  const nameFields = [entry.sinner, entry.identity, ...entry.abbrevs];
  entry.nameBlob = nameFields.join(" ").toLowerCase();
  entry.nameBlobNoSpace = nameFields.map(f => f.replace(/\s+/g, "")).join(" ").toLowerCase();
}
DATA.forEach(computeMeta);

const SINNERS = [...new Set(DATA.map(d => d.sinner))];
const RARITIES = ["0","00","000","0000"].filter(r => DATA.some(d => d.rarity === r));

const state = {
  q: "",
  skillSetQ: "",
  skillSetSubTab: "identity", // "identity" | "ego"
  sinners: new Set(),
  sinnerMode: "include", // "include" | "exclude"
  rarities: new Set(),
  sins: new Set(),
  activations: new Set(),
  identityKw: new Set(),
  cats: new Set(),
  skillSins: new Set(),
  skillPositions: new Set(),
  skillSinMode: "or", // "or" | "and" — 선택한 여러 속성 사이의 관계
  skillPositionMode: "or", // "or" | "and" — 선택한 여러 스킬 범위 사이의 관계
  syncMode: "gacksung",
  includeEgoKw: false,
  ownedOnly: false,
  egoSinners: new Set(),
  egoSins: new Set(),
  egoGrades: new Set(),
  egoAoeOnly: false,
};

// 에고/기프트 조건부 죄악 판정을 포함한 "실질" 인격 키워드 목록
function effectiveKeywords(d){
  if (!state.includeEgoKw || !d.egoConditional.length) return d.identityKeywords;
  const extra = d.egoConditional.map(e => e.sin);
  return [...new Set([...d.identityKeywords, ...extra])];
}

const IDENTITY_KW_LIST = ["화상","출혈","진동","파열","침잠","호흡","충전","탄환"];
// 한 글자짜리 키워드(예: "관")는 아무 단어에나 걸려 오탐이 심해 하이라이트 대상에서 제외.
const KEYWORD_TERMS = Object.keys(KEYWORD_DEFS).filter(k => k.length >= 2).sort((a,b) => b.length - a.length);
// 키워드 뒤에 특정 글자가 붙으면 무관한 고유명사(예: "광신도")로 취급해 하이라이트에서 제외.
const KEYWORD_EXCLUDE_FOLLOW = { "광신": ["도"], "오혈": ["읍루"] };
// 키워드 앞에 특정 글자가 붙으면 무관한 일반 표현(예: "소수점 버림")으로 취급해 하이라이트에서 제외.
const KEYWORD_EXCLUDE_PRECEDE = { "버림": ["소수점 ", "소숫점 "] };
const KEYWORD_RE = new RegExp(KEYWORD_TERMS.map(t => {
  const escaped = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const followEx = KEYWORD_EXCLUDE_FOLLOW[t];
  const precedeEx = KEYWORD_EXCLUDE_PRECEDE[t];
  let pattern = escaped;
  if (precedeEx) pattern = `(?<!${precedeEx.map(p => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})${pattern}`;
  if (followEx) pattern = `${pattern}(?!${followEx.join("|")})`;
  return pattern;
}).join("|"), "g");
function linkifyKeywords(text){
  return text.replace(KEYWORD_RE, m => `<span class="kw-term" data-kw="${m}">${identityKwIcon(m, 14)}${m}</span>`);
}
function identityKwIcon(term, size){
  const src = KEYWORD_ICON_DATA[term];
  return src ? `<img src="${src}" width="${size}" height="${size}" alt="" loading="lazy">` : "";
}

function countFor(filterFn){ return DATA.filter(filterFn).length; }

function buildChips(container, items, {getKey, getLabel, getCount, selectedSet, iconFor, onChange}){
  container.innerHTML = "";
  const rerender = onChange || render;
  items.forEach(item => {
    const key = getKey(item);
    const btn = document.createElement("button");
    btn.className = "chip";
    btn.type = "button";
    btn.setAttribute("aria-pressed", selectedSet.has(key));
    btn.innerHTML = (iconFor ? iconFor(item) : "") +
      `<span>${getLabel(item)}</span><span class="count">${getCount(item)}</span>`;
    btn.addEventListener("click", () => {
      if (selectedSet.has(key)) selectedSet.delete(key); else selectedSet.add(key);
      rerender();
    });
    container.appendChild(btn);
  });
}

// 모음 필터 칩: members가 모두 selectedSet에 있으면 눌린 상태로 표시. 클릭 시 members 전체를 한번에 추가/제거.
function buildBundleChips(containerId, selectedSet, rerenderFn){
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  CATEGORY_BUNDLES.forEach(b => {
    const isActive = b.members.every(m => selectedSet.has(m));
    const btn = document.createElement("button");
    btn.className = "chip bundle-chip";
    btn.type = "button";
    btn.setAttribute("aria-pressed", isActive);
    btn.innerHTML = `<span>${b.label}</span>`;
    btn.addEventListener("click", () => {
      if (isActive) b.members.forEach(m => selectedSet.delete(m));
      else b.members.forEach(m => selectedSet.add(m));
      rerenderFn();
    });
    container.appendChild(btn);
  });
}

function buildRarityChips(){
  const container = document.getElementById("rarityChips");
  container.innerHTML = "";
  RARITIES.forEach(r => {
    const btn = document.createElement("button");
    btn.className = "chip rarity-chip";
    btn.type = "button";
    btn.setAttribute("aria-pressed", state.rarities.has(r));
    const c = countFor(d => d.rarity === r);
    btn.innerHTML = `<span class="zeros">${r}</span><span class="count">${c}</span>`;
    btn.addEventListener("click", () => {
      if (state.rarities.has(r)) state.rarities.delete(r); else state.rarities.add(r);
      render();
    });
    container.appendChild(btn);
  });
}

function passesFilters(d){
  if (state.q){
    const terms = state.q.toLowerCase().split(/\s+/).filter(Boolean);
    const blob = nameOnlySearch ? d.nameBlob : d.searchBlob;
    const blobNS = nameOnlySearch ? d.nameBlobNoSpace : d.searchBlobNoSpace;
    if (!terms.every(t => blob.includes(t) || blobNS.includes(t))) return false;
  }
  if (state.sinners.size){
    const inSet = state.sinners.has(d.sinner);
    if (state.sinnerMode === "exclude" ? inSet : !inSet) return false;
  }
  if (state.rarities.size && !state.rarities.has(d.rarity)) return false;
  if (state.sins.size && ![...state.sins].every(s => d.sins.includes(s))) return false;
  if (state.activations.size && !state.activations.has(d.condLabel)) return false;
  if (state.cats.size && ![...state.cats].some(c => d.cats.includes(c))) return false;
  if (state.ownedOnly && !isIdentityOwned(d.sinner, d.identity)) return false;
  return true;
}
function skillSetSearchParts(d){
  if (d._skillSetParts) return d._skillSetParts;
  const parts = [d.sinner, d.identity, ...d.identityKeywords, ...d.abbrevs];
  const detail = IDENTITY_SKILL_DETAIL[`${d.sinner}|${d.identity}`];
  if (detail){
    detail.skills.forEach(s => { if (s.name) parts.push(s.name); });
    if (detail.defense.name) parts.push(detail.defense.name);
  }
  const specials = IDENTITY_SPECIAL_SKILLS[`${d.sinner}|${d.identity}`];
  if (specials) specials.forEach(s => { if (s.name) parts.push(s.name); });
  const passives = IDENTITY_PASSIVE[`${d.sinner}|${d.identity}`];
  if (passives) passives.forEach(p => { if (p.name) parts.push(p.name); });
  d._skillSetParts = parts;
  d._skillSetBlob = parts.join(" ").toLowerCase();
  d._skillSetBlobNoSpace = parts.map(f => f.replace(/\s+/g, "")).join(" ").toLowerCase();
  const nameParts = [d.sinner, d.identity, ...d.abbrevs];
  d._skillSetNameBlob = nameParts.join(" ").toLowerCase();
  d._skillSetNameBlobNoSpace = nameParts.map(f => f.replace(/\s+/g, "")).join(" ").toLowerCase();
  return parts;
}
function skillSetPassesFilters(d){
  if (state.skillSetQ){
    skillSetSearchParts(d);
    const terms = state.skillSetQ.toLowerCase().split(/\s+/).filter(Boolean);
    const blob = nameOnlySearch ? d._skillSetNameBlob : d._skillSetBlob;
    const blobNS = nameOnlySearch ? d._skillSetNameBlobNoSpace : d._skillSetBlobNoSpace;
    if (!terms.every(t => blob.includes(t) || blobNS.includes(t))) return false;
  }
  if (state.sinners.size){
    const inSet = state.sinners.has(d.sinner);
    if (state.sinnerMode === "exclude" ? inSet : !inSet) return false;
  }
  if (state.identityKw.size && ![...state.identityKw].every(k => effectiveKeywords(d).includes(k))) return false;
  if (state.skillSins.size && !skillFilterPasses(d, state.skillPositions, state.skillPositionMode, state.skillSins, state.skillSinMode)) return false;
  if (state.ownedOnly && !isIdentityOwned(d.sinner, d.identity)) return false;
  return true;
}
// positions: Set of "1"/"2"/"3"/"def" (비어있으면 4개 전부).
// positionMode "or": 선택된 슬롯들의 속성을 합집합(pool)으로 모아 sinMode로 selectedSins와 비교.
// positionMode "and": 선택된 슬롯 하나하나가 각각 selectedSins를 sinMode로 만족해야 함(전부 통과해야 함).
function skillFilterPasses(d, positions, positionMode, selectedSinsSet, sinMode){
  const keys = positions.size ? [...positions] : ["1","2","3","def"];
  const selected = [...selectedSinsSet];
  const sinTest = pool => sinMode === "and" ? selected.every(s => pool.has(s)) : selected.some(s => pool.has(s));
  if (positionMode === "and"){
    return keys.every(k => {
      const sin = d.skillSinsByPos[k];
      return sin ? sinTest(new Set([sin])) : false;
    });
  }
  const pool = new Set();
  keys.forEach(k => { if (d.skillSinsByPos[k]) pool.add(d.skillSinsByPos[k]); });
  return sinTest(pool);
}

function renderActivePills(){
  const wrap = document.getElementById("activePills");
  wrap.innerHTML = "";
  const pills = [];
  state.sinners.forEach(v => pills.push({label: state.sinnerMode === "exclude" ? `제외:${v}` : v, clear:() => state.sinners.delete(v)}));
  state.rarities.forEach(v => pills.push({label:v, clear:() => state.rarities.delete(v)}));
  state.sins.forEach(v => pills.push({label:v, icon:sinBadgeSVG(v,14), clear:() => state.sins.delete(v)}));
  state.activations.forEach(v => pills.push({label:v, clear:() => state.activations.delete(v)}));
  state.cats.forEach(v => pills.push({label:v, clear:() => state.cats.delete(v)}));
  pills.forEach(p => {
    const el = document.createElement("span");
    el.className = "active-pill";
    el.innerHTML = `${p.icon || ""}<span>${p.label}</span>`;
    const btn = document.createElement("button");
    btn.setAttribute("aria-label", `${p.label} 필터 해제`);
    btn.innerHTML = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>`;
    btn.addEventListener("click", () => { p.clear(); renderBoth(); });
    el.appendChild(btn);
    wrap.appendChild(el);
  });
}
function renderSkillSetActivePills(){
  const wrap = document.getElementById("skillSetActivePills");
  wrap.innerHTML = "";
  const pills = [];
  state.sinners.forEach(v => pills.push({label: state.sinnerMode === "exclude" ? `제외:${v}` : v, clear:() => state.sinners.delete(v)}));
  state.skillSins.forEach(v => pills.push({label:`보유 스킬:${v}`, icon:sinBadgeSVG(v,14), clear:() => state.skillSins.delete(v)}));
  state.skillPositions.forEach(v => {
    const p = SKILL_POSITIONS.find(sp => sp.key === v);
    pills.push({label:`보유 스킬 범위:${p ? p.label : v}`, clear:() => state.skillPositions.delete(v)});
  });
  state.identityKw.forEach(v => pills.push({label:v, icon:identityKwIcon(v,14), clear:() => state.identityKw.delete(v)}));
  pills.forEach(p => {
    const el = document.createElement("span");
    el.className = "active-pill";
    el.innerHTML = `${p.icon || ""}<span>${p.label}</span>`;
    const btn = document.createElement("button");
    btn.setAttribute("aria-label", `${p.label} 필터 해제`);
    btn.innerHTML = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>`;
    btn.addEventListener("click", () => { p.clear(); renderBoth(); });
    el.appendChild(btn);
    wrap.appendChild(el);
  });
}

function conditionRowHTML(d){
  if (!d.condTerms.length) return `<div class="condition-row none">상시 발동 (조건 없음)</div>`;
  const termsHTML = d.condTerms.map((t,i) => {
    const icon = t.sin ? sinBadgeSVG(t.sin, 20) : "";
    const sep = i > 0 ? `<span class="plus">+</span>` : "";
    return `${sep}<span class="cond-term">${icon}<span class="cond-num">${t.num ?? ""}</span></span>`;
  }).join("");
  const labelHTML = d.condLabel ? `<span class="cond-label">${d.condLabel}</span>` : "";
  return `<div class="condition-row">${termsHTML}${labelHTML}</div>`;
}

function effectHTML(d){
  const lines = d.supportPassiveEffect.split("\n").map(l => l.trim()).filter(Boolean);
  return lines.map(l => {
    const isBullet = l.startsWith("-");
    const text = linkifyKeywords(isBullet ? l.replace(/^-\s*/, "") : l);
    return `<div class="line${isBullet ? " bullet" : ""}">${text}</div>`;
  }).join("");
}

function identityFullIllustSrc(bannerKey){
  return (state.syncMode === "gacksung" ? IDENTITY_PORTRAIT_FULL_SYNCED_DATA[bannerKey] : IDENTITY_PORTRAIT_FULL_NORMAL_DATA[bannerKey])
    || IDENTITY_PORTRAIT_FULL_NORMAL_DATA[bannerKey] || IDENTITY_PORTRAIT_FULL_SYNCED_DATA[bannerKey]
    || (state.syncMode === "gacksung" ? IDENTITY_PORTRAIT_SYNCED_DATA[bannerKey] : IDENTITY_PORTRAIT_NORMAL_DATA[bannerKey])
    || IDENTITY_PORTRAIT_SYNCED_DATA[bannerKey] || IDENTITY_PORTRAIT_NORMAL_DATA[bannerKey];
}
function cardHTML(d){
  const tagsHTML = d.cats.slice(0,5).map(c => `<span class="tag">${c}</span>`).join("");
  const bannerKey = `${d.sinner}|${d.identity}`;
  const bannerSrc = (state.syncMode === "gacksung" ? IDENTITY_BANNER_SYNCED_DATA[bannerKey] : IDENTITY_BANNER_NORMAL_DATA[bannerKey])
    || IDENTITY_BANNER_SYNCED_DATA[bannerKey] || IDENTITY_BANNER_NORMAL_DATA[bannerKey];
  const fullSrc = identityFullIllustSrc(bannerKey) || bannerSrc;
  const iconSrc = SINNER_ICON_DATA[d.sinner];
  const iconHTML = iconSrc ? `<img class="sinner-icon-inline" src="${iconSrc}" alt="" loading="lazy">` : "";
  const bannerHTML = bannerSrc ? `<img class="card-banner" src="${bannerSrc}" data-full="${fullSrc}" alt="" loading="lazy">` : "";
  return `
    <article class="card">
      ${bannerHTML}
      <span class="rarity-badge">${d.rarity}</span>
      <div class="card-body">
        <div class="card-info">
          <div class="card-sinner-row">
            ${iconHTML}<span class="card-sinner">${d.sinner}</span>
          </div>
          <span class="card-identity">${d.identity}</span>
        </div>
        <div class="passive-name">${d.supportPassiveName}</div>
        ${conditionRowHTML(d)}
        <div class="passive-effect">${effectHTML(d)}</div>
        ${tagsHTML ? `<div class="card-tags">${tagsHTML}</div>` : ""}
      </div>
    </article>`;
}

function render(){
  const filtered = DATA.filter(passesFilters);
  document.getElementById("shownCount").textContent = filtered.length;
  const grid = document.getElementById("cardGrid");
  const empty = document.getElementById("emptyState");
  if (filtered.length === 0){
    grid.innerHTML = "";
    empty.hidden = false;
  } else {
    empty.hidden = true;
    grid.innerHTML = filtered.map(cardHTML).join("");
  }
  renderActivePills();

  buildChips(document.getElementById("sinnerChips"), SINNERS, {
    getKey:s=>s, getLabel:s=>s, getCount:s=>countFor(d=>d.sinner===s), selectedSet: state.sinners,
    iconFor: s => SINNER_ICON_DATA[s] ? `<img class="sinner-icon" src="${SINNER_ICON_DATA[s]}" alt="" loading="lazy">` : "",
    onChange: renderBoth
  });
  buildRarityChips();
  buildChips(document.getElementById("sinChips"), SINS, {
    getKey:s=>s, getLabel:s=>s, getCount:s=>countFor(d=>d.sins.includes(s)), selectedSet: state.sins,
    iconFor: s => sinBadgeSVG(s, 18)
  });
  const activationsWithCount = ACTIVATIONS.filter(a => countFor(d=>d.condLabel===a) > 0);
  buildChips(document.getElementById("activationChips"), activationsWithCount, {
    getKey:a=>a, getLabel:a=>a, getCount:a=>countFor(d=>d.condLabel===a), selectedSet: state.activations
  });
  const catsWithCount = CATEGORY_DEFS.map(([label]) => label).filter(label => countFor(d=>d.cats.includes(label)) > 0);
  buildChips(document.getElementById("categoryChips"), catsWithCount, {
    getKey:c=>c, getLabel:c=>c, getCount:c=>countFor(d=>d.cats.includes(c)), selectedSet: state.cats
  });
  buildBundleChips("categoryBundleChips", state.cats, render);
}

function renderBoth(){ render(); renderSkillSet(); }

function egoConditionalHTML(d){
  if (!d.egoConditional.length) return "";
  return d.egoConditional.map(e => {
    const verb = e.type === "gift" ? "장착 시" : "사용 시";
    const nameHTML = e.type === "gift"
      ? `${GIFT_ICON_DATA[e.name] ? `<img class="gift-icon" src="${GIFT_ICON_DATA[e.name]}" alt="">` : ""}'${e.name}' 기프트`
      : `'${e.name}' E.G.O`;
    return `<span class="ego-cond-tag">(${nameHTML} ${verb} ${identityKwIcon(e.sin,12)}${e.sin} 판정)</span>`;
  }).join("");
}

function identityKeywordsHTML(d){
  const kwHTML = d.identityKeywords.length
    ? `<div class="identity-kw-tags">${d.identityKeywords.map(k =>
        `<span class="identity-kw-tag">${identityKwIcon(k, 12)}${k}</span>`
      ).join(`<span class="identity-kw-sep">·</span>`)}</div>`
    : "";
  const egoHTML = egoConditionalHTML(d);
  if (!kwHTML && !egoHTML) return "";
  return `${kwHTML}${egoHTML}`;
}

function skillSetCardHTML(d){
  const prof = IDENTITY_SKILL_PROFILE[`${d.sinner}|${d.identity}`];
  const bannerKey = `${d.sinner}|${d.identity}`;
  const bannerSrc = (state.syncMode === "gacksung" ? IDENTITY_BANNER_SYNCED_DATA[bannerKey] : IDENTITY_BANNER_NORMAL_DATA[bannerKey])
    || IDENTITY_BANNER_SYNCED_DATA[bannerKey] || IDENTITY_BANNER_NORMAL_DATA[bannerKey];
  const fullSrc = identityFullIllustSrc(bannerKey) || bannerSrc;
  const iconSrc = SINNER_ICON_DATA[d.sinner];
  const iconHTML = iconSrc ? `<img class="sinner-icon-inline" src="${iconSrc}" alt="" loading="lazy">` : "";
  const bannerHTML = bannerSrc ? `<img class="card-banner" src="${bannerSrc}" data-full="${fullSrc}" alt="" loading="lazy">` : "";
  const slots = [
    {label:"Skill 1", num:"1", info: prof && prof.skills[0], key:"skill1", iconKey:"skill1"},
    {label:"Skill 2", num:"2", info: prof && prof.skills[1], key:"skill2", iconKey:"skill2"},
    {label:"Skill 3", num:"3", info: prof && prof.skills[2], key:"skill3", iconKey:"skill3"},
    {label:"DEF", num:"def", info: prof && prof.defense && prof.defense[0], key:"defense", iconKey:"def"},
  ];
  const specials = IDENTITY_SPECIAL_SKILLS[`${d.sinner}|${d.identity}`] || [];
  const specialBySlot = {};
  specials.forEach(s => { specialBySlot[s.attachTo] = (specialBySlot[s.attachTo] || 0) + 1; });
  const iconData = IDENTITY_SKILL_ICON_DATA[`${d.sinner}|${d.identity}`];
  const slotsHTML = slots.map(s => {
    const sin = s.info && s.info.sin;
    const uniqueIcon = iconData && iconData[s.iconKey];
    const iconOrEmpty = sin ? skillFrameHTML(sin, 36, s.info && s.info.tier, uniqueIcon) : `<span class="skillset-slot-empty"></span>`;
    const specialBadge = specialBySlot[s.key] ? `<span class="skillset-special-badge" title="특수 발동 스킬 있음">+</span>` : "";
    return `<button type="button" class="skillset-slot-btn" data-sinner="${d.sinner.replace(/"/g,"&quot;")}" data-identity="${d.identity.replace(/"/g,"&quot;")}" data-num="${s.num}">
      ${specialBadge}
      <span class="skillset-slot-label">${s.label}</span>
      ${iconOrEmpty}
    </button>`;
  }).join("");
  const passiveSpecialBadge = specialBySlot.passive ? `<span class="skillset-special-badge" title="연계 특수 스킬 있음">+</span>` : "";
  const sAttr = d.sinner.replace(/"/g,"&quot;"), iAttr = d.identity.replace(/"/g,"&quot;");
  return `
    <article class="card">
      ${bannerHTML}
      <span class="rarity-badge">${d.rarity}</span>
      <div class="card-body">
        <div class="card-info">
          <div class="card-sinner-row">
            ${iconHTML}<span class="card-sinner">${d.sinner}</span>
          </div>
          <span class="card-identity">${d.identity}</span>
          ${identityKeywordsHTML(d)}
        </div>
        <div class="skillset-skill-row">${slotsHTML}</div>
        <div class="skillset-card-footer">
          <button type="button" class="skillset-passive-btn" data-sinner="${sAttr}" data-identity="${iAttr}">${passiveSpecialBadge}전투 패시브</button>
          <button type="button" class="skillset-detail-btn" data-sinner="${sAttr}" data-identity="${iAttr}">상세 보기</button>
        </div>
      </div>
    </article>`;
}

function egoCostBadgesHTML(slug){
  const cost = EGO_COST_DETAIL[slug];
  if (!cost || !cost.length) return "";
  return cost.map(c => `<span class="ego-cost-badge">${sinBadgeSVG(c.sin, 16)}${c.count}</span>`).join("");
}
function egoDetailCostHTML(slug){
  const badges = egoCostBadgesHTML(slug);
  if (!badges) return "";
  return `<span class="ego-detail-cost-label">코스트</span>${badges}`;
}
function egoCardHTML(slug){
  const info = EGO_DATA[slug];
  if (!info) return "";
  const skill = EGO_SKILL_DETAIL[slug];
  const portraitSrc = EGO_ICON_DATA[slug];
  const portraitHTML = portraitSrc ? `<img class="ego-card-portrait" src="${portraitSrc}" alt="" loading="lazy">` : "";
  const iconSrc = SINNER_ICON_DATA[info.sinner];
  const iconHTML = iconSrc ? `<img class="sinner-icon-inline" src="${iconSrc}" alt="" loading="lazy">` : "";
  // 각성/침식 스킬은 항상 같은 죄악 속성을 공유하므로 대표 속성 하나만 표시.
  const sin = (skill && skill.awakening && skill.awakening.sin) || null;
  const sinHTML = sin ? `${sinBadgeSVG(sin, 20)}<span class="ego-attr-label">${sin}</span>` : "";
  const costHTML = egoCostBadgesHTML(slug);
  return `
    <article class="card ego-card">
      <div class="ego-card-header"></div>
      ${portraitHTML}
      <span class="rarity-badge">${info.grade}</span>
      <div class="card-body ego-card-body">
        <div class="card-info">
          <div class="card-sinner-row">
            ${iconHTML}<span class="card-sinner">${info.sinner}</span>
          </div>
          <span class="card-identity">${egoShortTitle(info)}</span>
        </div>
        <div class="ego-attr-row">
          <span class="ego-attr-left">${sinHTML}</span>
          <span class="ego-attr-right">${costHTML}</span>
        </div>
        <div class="skillset-card-footer">
          <button type="button" class="skillset-passive-btn ego-passive-btn" data-slug="${slug}">E.G.O. 패시브</button>
          <button type="button" class="skillset-detail-btn ego-detail-btn" data-slug="${slug}">상세 보기</button>
        </div>
      </div>
    </article>`;
}
function egoRepSin(slug){
  const skill = EGO_SKILL_DETAIL[slug];
  return (skill && skill.awakening && skill.awakening.sin) || null;
}
function egoRepWeight(slug){
  const skill = EGO_SKILL_DETAIL[slug];
  const w = skill && skill.awakening && skill.awakening.weight;
  return w ? Number(w) : 0;
}
function egoCountFor(filterFn){ return Object.keys(EGO_SKILL_DETAIL).filter(filterFn).length; }
function egoPassesFilters(slug){
  const info = EGO_DATA[slug];
  if (!info) return false;
  if (state.skillSetQ.trim()){
    const q = state.skillSetQ.trim().toLowerCase();
    if (!`${info.sinner} ${info.title}`.toLowerCase().includes(q)) return false;
  }
  if (state.egoSinners.size && !state.egoSinners.has(info.sinner)) return false;
  if (state.egoSins.size && !state.egoSins.has(egoRepSin(slug))) return false;
  if (state.egoGrades.size && !state.egoGrades.has(info.grade)) return false;
  if (state.egoAoeOnly && egoRepWeight(slug) < 2) return false;
  return true;
}
function renderEgoSkillSet(){
  const slugs = Object.keys(EGO_SKILL_DETAIL).filter(egoPassesFilters);
  const grid = document.getElementById("egoSkillSetGrid");
  document.getElementById("skillSetShownCount").textContent = slugs.length;
  grid.innerHTML = slugs.map(egoCardHTML).join("");
  document.getElementById("skillSetActivePills").innerHTML = "";

  const egoSinners = [...new Set(Object.keys(EGO_SKILL_DETAIL).map(s => EGO_DATA[s] && EGO_DATA[s].sinner).filter(Boolean))];
  buildChips(document.getElementById("egoSinnerChips"), egoSinners, {
    getKey:s=>s, getLabel:s=>s, getCount:s=>egoCountFor(slug => EGO_DATA[slug] && EGO_DATA[slug].sinner===s), selectedSet: state.egoSinners,
    iconFor: s => SINNER_ICON_DATA[s] ? `<img class="sinner-icon" src="${SINNER_ICON_DATA[s]}" alt="" loading="lazy">` : "",
    onChange: renderEgoSkillSet
  });
  const egoSins = SINS.filter(s => egoCountFor(slug => egoRepSin(slug) === s) > 0);
  buildChips(document.getElementById("egoSinChips"), egoSins, {
    getKey:s=>s, getLabel:s=>s, getCount:s=>egoCountFor(slug => egoRepSin(slug) === s), selectedSet: state.egoSins,
    iconFor: s => sinBadgeSVG(s, 18), onChange: renderEgoSkillSet
  });
  const egoGrades = EGO_GRADES.filter(g => egoCountFor(slug => EGO_DATA[slug] && EGO_DATA[slug].grade===g) > 0);
  buildChips(document.getElementById("egoGradeChips"), egoGrades, {
    getKey:g=>g, getLabel:g=>g, getCount:g=>egoCountFor(slug => EGO_DATA[slug] && EGO_DATA[slug].grade===g), selectedSet: state.egoGrades,
    onChange: renderEgoSkillSet
  });
}
function setSkillSetSubTab(tab){
  state.skillSetSubTab = tab;
  const idBtn = document.getElementById("skillSetSubTabIdentity");
  const egoBtn = document.getElementById("skillSetSubTabEgo");
  idBtn.setAttribute("aria-pressed", tab === "identity" ? "true" : "false");
  egoBtn.setAttribute("aria-pressed", tab === "ego" ? "true" : "false");
  document.getElementById("skillSetGrid").hidden = tab !== "identity";
  document.getElementById("egoSkillSetGrid").hidden = tab !== "ego";
  document.getElementById("skillSetFiltersAside").hidden = tab !== "identity";
  document.getElementById("egoFiltersAside").hidden = tab !== "ego";
  document.getElementById("skillSetSyncCol").hidden = tab !== "identity";
  document.getElementById("skillSetShownLabel").textContent = tab === "ego" ? "개 E.G.O. 표시 중" : "개 인격 표시 중";
  if (tab === "ego") renderEgoSkillSet();
  else renderSkillSet();
}
function renderSkillSet(){
  const filtered = DATA.filter(skillSetPassesFilters);
  document.getElementById("skillSetShownCount").textContent = filtered.length;
  const grid = document.getElementById("skillSetGrid");
  const empty = document.getElementById("skillSetEmptyState");
  if (filtered.length === 0){
    grid.innerHTML = "";
    empty.hidden = false;
  } else {
    empty.hidden = true;
    grid.innerHTML = filtered.map(skillSetCardHTML).join("");
  }
  renderSkillSetActivePills();

  buildChips(document.getElementById("ssSinnerChips"), SINNERS, {
    getKey:s=>s, getLabel:s=>s, getCount:s=>countFor(d=>d.sinner===s), selectedSet: state.sinners,
    iconFor: s => SINNER_ICON_DATA[s] ? `<img class="sinner-icon" src="${SINNER_ICON_DATA[s]}" alt="" loading="lazy">` : "",
    onChange: renderBoth
  });
  const skillSinsWithCount = SINS.filter(s => countFor(d=>d.skillSins.includes(s)) > 0);
  buildChips(document.getElementById("skillSinChips"), skillSinsWithCount, {
    getKey:s=>s, getLabel:s=>s, getCount:s=>countFor(d=>d.skillSins.includes(s)), selectedSet: state.skillSins,
    iconFor: s => sinBadgeSVG(s, 18), onChange: renderSkillSet
  });
  buildChips(document.getElementById("skillPositionChips"), SKILL_POSITIONS, {
    getKey:p=>p.key, getLabel:p=>p.label, getCount:p=>countFor(d=>!!d.skillSinsByPos[p.key]), selectedSet: state.skillPositions,
    onChange: renderSkillSet
  });
  const identityKwWithCount = IDENTITY_KW_LIST.filter(k => countFor(d=>effectiveKeywords(d).includes(k)) > 0);
  buildChips(document.getElementById("identityKwChips"), identityKwWithCount, {
    getKey:k=>k, getLabel:k=>k, getCount:k=>countFor(d=>effectiveKeywords(d).includes(k)), selectedSet: state.identityKw,
    iconFor: k => identityKwIcon(k, 16), onChange: renderSkillSet
  });
}


const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", e => { state.q = e.target.value; render(); });
document.getElementById("clearSearch").addEventListener("click", () => { state.q=""; searchInput.value=""; render(); });
const skillSetSearchInput = document.getElementById("skillSetSearchInput");
function renderActiveSkillSetSubTab(){ state.skillSetSubTab === "ego" ? renderEgoSkillSet() : renderSkillSet(); }
skillSetSearchInput.addEventListener("input", e => { state.skillSetQ = e.target.value; renderActiveSkillSetSubTab(); });
document.getElementById("skillSetClearSearch").addEventListener("click", () => { state.skillSetQ=""; skillSetSearchInput.value=""; renderActiveSkillSetSubTab(); });
const syncToggle = document.getElementById("syncToggle");
const syncToggleLabel = document.getElementById("syncToggleLabel");
const skillSetSyncToggle = document.getElementById("skillSetSyncToggle");
const skillSetSyncToggleLabel = document.getElementById("skillSetSyncToggleLabel");
function setSyncMode(mode){
  state.syncMode = mode;
  const checked = mode === "gacksung";
  const label = checked ? "동기화 후" : "동기화 전";
  syncToggle.checked = checked; syncToggleLabel.textContent = label;
  skillSetSyncToggle.checked = checked; skillSetSyncToggleLabel.textContent = label;
  render();
  if (state.skillSetSubTab === "identity") renderSkillSet();
}
syncToggle.addEventListener("change", () => setSyncMode(syncToggle.checked ? "gacksung" : "normal"));
skillSetSyncToggle.addEventListener("change", () => setSyncMode(skillSetSyncToggle.checked ? "gacksung" : "normal"));
const egoKwToggle = document.getElementById("egoKwToggle");
const egoKwTogglePicker = document.getElementById("egoKwTogglePicker");
function setIncludeEgoKw(val){
  state.includeEgoKw = val;
  egoKwToggle.checked = val;
  egoKwTogglePicker.checked = val;
  renderSkillSet();
  if (!pickerView.hidden) renderPicker();
}
egoKwToggle.addEventListener("change", e => setIncludeEgoKw(e.target.checked));
egoKwTogglePicker.addEventListener("change", e => setIncludeEgoKw(e.target.checked));
function setSkillSinMode(mode){
  state.skillSinMode = mode;
  document.getElementById("skillSinModeOr").setAttribute("aria-pressed", String(mode === "or"));
  document.getElementById("skillSinModeAnd").setAttribute("aria-pressed", String(mode === "and"));
  renderSkillSet();
}
function setSkillPositionMode(mode){
  state.skillPositionMode = mode;
  document.getElementById("skillPosModeOr").setAttribute("aria-pressed", String(mode === "or"));
  document.getElementById("skillPosModeAnd").setAttribute("aria-pressed", String(mode === "and"));
  renderSkillSet();
}
document.getElementById("skillPosModeOr").addEventListener("click", () => setSkillPositionMode("or"));
document.getElementById("skillPosModeAnd").addEventListener("click", () => setSkillPositionMode("and"));
document.getElementById("skillSinModeOr").addEventListener("click", () => setSkillSinMode("or"));
document.getElementById("skillSinModeAnd").addEventListener("click", () => setSkillSinMode("and"));
function setSinnerMode(mode){
  state.sinnerMode = mode;
  document.getElementById("sinnerModeInclude").setAttribute("aria-pressed", String(mode === "include"));
  document.getElementById("sinnerModeExclude").setAttribute("aria-pressed", String(mode === "exclude"));
  document.getElementById("ssSinnerModeInclude").setAttribute("aria-pressed", String(mode === "include"));
  document.getElementById("ssSinnerModeExclude").setAttribute("aria-pressed", String(mode === "exclude"));
  renderBoth();
}
document.getElementById("sinnerModeInclude").addEventListener("click", () => setSinnerMode("include"));
document.getElementById("sinnerModeExclude").addEventListener("click", () => setSinnerMode("exclude"));
document.getElementById("ssSinnerModeInclude").addEventListener("click", () => setSinnerMode("include"));
document.getElementById("ssSinnerModeExclude").addEventListener("click", () => setSinnerMode("exclude"));
document.getElementById("resetAll").addEventListener("click", () => {
  state.q=""; searchInput.value="";
  state.rarities.clear(); state.sins.clear(); state.activations.clear(); state.cats.clear();
  state.sinners.clear();
  setSinnerMode("include");
});
function resetIdentitySkillSetFilters(){
  state.skillSetQ = ""; skillSetSearchInput.value = "";
  state.sinners.clear(); state.skillSins.clear(); state.skillPositions.clear(); state.identityKw.clear();
  setSkillSinMode("or");
  setSkillPositionMode("or");
  setSinnerMode("include");
}
function resetEgoSkillSetFilters(){
  state.skillSetQ = ""; skillSetSearchInput.value = "";
  state.egoSinners.clear(); state.egoSins.clear(); state.egoGrades.clear();
  state.egoAoeOnly = false;
  document.getElementById("egoAoeToggle").checked = false;
  renderEgoSkillSet();
}
document.getElementById("skillSetResetAllTop").addEventListener("click", () => {
  if (state.skillSetSubTab === "ego") resetEgoSkillSetFilters();
  else resetIdentitySkillSetFilters();
});
document.getElementById("egoAoeToggle").addEventListener("change", e => {
  state.egoAoeOnly = e.target.checked;
  renderEgoSkillSet();
});

const kwTooltip = document.getElementById("kwTooltip");
const kwTooltipTerm = kwTooltip.querySelector(".kw-tooltip-term");
const kwTooltipDef = kwTooltip.querySelector(".kw-tooltip-def");
function hideKwTooltip(){ kwTooltip.hidden = true; }
function escapeHTML(s){
  return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}
function showTooltipAt(term, defHTML, anchorEl){
  const termIcon = identityKwIcon(term, 18);
  kwTooltipTerm.innerHTML = termIcon ? `${termIcon}<span>${escapeHTML(term)}</span>` : escapeHTML(term);
  kwTooltipDef.innerHTML = defHTML;
  kwTooltip.hidden = false;
  const r = anchorEl.getBoundingClientRect();
  const tw = kwTooltip.offsetWidth, th = kwTooltip.offsetHeight;
  let left = r.left + r.width/2 - tw/2;
  left = Math.max(8, Math.min(left, window.innerWidth - tw - 8));
  let top = r.top - th - 8;
  if (top < 8) top = r.bottom + 8;
  kwTooltip.style.left = `${left}px`;
  kwTooltip.style.top = `${top}px`;
}
function showKwTooltip(term, anchorEl){
  const def = KEYWORD_DEFS[term];
  if (!def) return;
  showTooltipAt(term, escapeHTML(def), anchorEl);
}
function skillSlotInfo(sinner, identity, num){
  const prof = IDENTITY_SKILL_PROFILE[`${sinner}|${identity}`];
  if (!prof) return null;
  return num === "def" ? (prof.defense && prof.defense[0]) : prof.skills[Number(num)-1];
}
function skillSlotDetail(sinner, identity, num){
  const d = IDENTITY_SKILL_DETAIL[`${sinner}|${identity}`];
  if (!d) return null;
  return num === "def" ? d.defense : d.skills[Number(num)-1];
}
function skillTooltipHTML(sinner, identity, num){
  const info = skillSlotInfo(sinner, identity, num);
  const detail = skillSlotDetail(sinner, identity, num);
  const rows = [];
  if (detail && detail.name) rows.push(`<div class="skill-tt-name">${escapeHTML(detail.name)}</div>`);
  rows.push(`<div class="skill-tt-row"><span>속성</span><span>${info && info.sin ? sinBadgeSVG(info.sin,14)+escapeHTML(info.sin) : "정보 없음"}</span></div>`);
  if (num !== "def" && info && info.num != null){
    rows.push(`<div class="skill-tt-row"><span>기본 보유</span><span>${info.num}개</span></div>`);
  }
  if (detail && detail.power){
    rows.push(`<div class="skill-tt-row"><span>기본 위력</span><span>${escapeHTML(detail.power)}</span></div>`);
  }
  if (detail && detail.coin){
    rows.push(`<div class="skill-tt-row"><span>코인 위력</span><span>${escapeHTML(detail.coin)}</span></div>`);
  }
  if (detail && detail.coinCount){
    rows.push(`<div class="skill-tt-row"><span>코인 수</span><span>${detail.coinCount}개</span></div>`);
  }
  if (detail && detail.coinEffects && Object.keys(detail.coinEffects).length){
    const effectRows = Object.keys(detail.coinEffects).sort((a,b) => Number(a)-Number(b)).map(n =>
      `<div class="skill-tt-coin-effect"><span class="skill-tt-coin-num">${n}</span><span>${linkifyKeywords(detail.coinEffects[n])}</span></div>`
    ).join("");
    rows.push(`<div class="skill-tt-effect-block">${effectRows}</div>`);
  }
  const slotKey = num === "def" ? "defense" : `skill${num}`;
  const specials = (IDENTITY_SPECIAL_SKILLS[`${sinner}|${identity}`] || []).filter(s => s.attachTo === slotKey);
  specials.forEach(s => { rows.push(specialSkillHTML(s, sinner, identity)); });
  return rows.join("");
}
function specialSkillHTML(s, sinner, identity){
  const iconSrc = (IDENTITY_SPECIAL_SKILL_ICON_DATA[`${sinner}|${identity}`] || {})[s.name];
  const tier = s.tier || {skill1:1, skill2:2, skill3:3}[s.attachTo] || null;
  const rows = [`<div class="skill-tt-special-tag">특수 발동 스킬 (${escapeHTML(s.refNote)})</div>`];
  if (iconSrc) rows.push(`<div class="detail-col-icon">${skillFrameHTML(s.sin, 56, tier, iconSrc)}</div>`);
  if (s.name) rows.push(`<div class="skill-tt-name">${escapeHTML(s.name)}</div>`);
  rows.push(`<div class="skill-tt-row"><span>속성</span><span>${s.sin ? sinBadgeSVG(s.sin,14)+escapeHTML(s.sin) : "정보 없음"}</span></div>`);
  if (s.power) rows.push(`<div class="skill-tt-row"><span>기본 위력</span><span>${escapeHTML(s.power)}</span></div>`);
  if (s.coin) rows.push(`<div class="skill-tt-row"><span>코인 위력</span><span>${escapeHTML(s.coin)}</span></div>`);
  const coinCount = s.coinCount || Object.keys(s.coinEffects || {}).length;
  if (coinCount) rows.push(`<div class="skill-tt-row"><span>코인 수</span><span>${coinCount}개</span></div>`);
  if (s.coinEffects && Object.keys(s.coinEffects).length){
    const effectRows = Object.keys(s.coinEffects).sort((a,b) => Number(a)-Number(b)).map(n =>
      `<div class="skill-tt-coin-effect"><span class="skill-tt-coin-num">${n}</span><span>${linkifyKeywords(s.coinEffects[n])}</span></div>`
    ).join("");
    rows.push(`<div class="skill-tt-effect-block">${effectRows}</div>`);
  }
  return `<div class="skill-tt-special-block">${rows.join("")}</div>`;
}
// 특수 발동 스킬 이름이 어느 전투 패시브 블록의 효과 설명에서 언급되는지 찾기 위한 핵심 이름 추출
// (예: "섬궁【閃弓】" -> "섬궁" — 한자/괄호 표기가 붙은 스킬명도 본문의 "'섬궁'" 언급과 매칭되도록)
function specialCoreName(name){
  return name.split(/[【\[]/)[0].trim();
}
function passiveTooltipHTML(sinner, identity){
  const blocks = IDENTITY_PASSIVE[`${sinner}|${identity}`];
  const specialsAll = (IDENTITY_SPECIAL_SKILLS[`${sinner}|${identity}`] || []).filter(s => s.attachTo === "passive");
  const usedSpecials = new Set();
  const passiveHTML = (!blocks || !blocks.length) ? `<div class="skill-tt-row"><span>정보 없음</span></div>` : blocks.map(p => {
    const rows = [`<div class="skill-tt-name">${escapeHTML(p.name)}</div>`];
    if (p.conditions && p.conditions.length){
      const condHTML = p.conditions.map(c => `${sinBadgeSVG(c.sin,14)}${escapeHTML(c.sin)} × ${c.count}`).join(" + ");
      rows.push(`<div class="skill-tt-row"><span>발동 조건</span><span>${condHTML} 보유</span></div>`);
    } else if (p.sin && p.count){
      rows.push(`<div class="skill-tt-row"><span>발동 조건</span><span>${sinBadgeSVG(p.sin,14)}${escapeHTML(p.sin)} × ${p.count} 공명</span></div>`);
    }
    if (p.effect){
      rows.push(`<div class="skill-tt-effect-block"><div class="skill-tt-coin-effect"><span>${linkifyKeywords(p.effect)}</span></div></div>`);
    }
    // 나무위키 PC판처럼, 해당 블록의 효과 설명에서 실제로 언급되는 특수 발동 스킬은
    // 맨 아래로 몰아넣지 않고 그 블록 바로 아래에 붙여서 표시.
    specialsAll.forEach(s => {
      if (usedSpecials.has(s)) return;
      if (p.effect && p.effect.includes(specialCoreName(s.name))){
        usedSpecials.add(s);
        rows.push(specialSkillHTML(s, sinner, identity));
      }
    });
    return `<div class="skill-tt-passive-block">${rows.join("")}</div>`;
  }).join("");
  const leftoverHTML = specialsAll.filter(s => !usedSpecials.has(s)).map(s => specialSkillHTML(s, sinner, identity)).join("");
  return passiveHTML + leftoverHTML;
}
const imageLightbox = document.getElementById("imageLightbox");
const imageLightboxImg = document.getElementById("imageLightboxImg");
function openImageLightbox(src, alt, upscale){
  if (!src) return;
  imageLightboxImg.src = src;
  imageLightboxImg.alt = alt || "";
  imageLightboxImg.classList.toggle("is-upscaled", !!upscale);
  imageLightbox.hidden = false;
}
function closeImageLightbox(){ imageLightbox.hidden = true; imageLightboxImg.src = ""; }
document.getElementById("imageLightboxClose").addEventListener("click", closeImageLightbox);
document.getElementById("imageLightboxBackdrop").addEventListener("click", closeImageLightbox);
document.addEventListener("keydown", e => { if (e.key === "Escape" && !imageLightbox.hidden) closeImageLightbox(); });

document.body.addEventListener("click", e => {
  const lightboxTrigger = e.target.closest(".card-banner, .ego-card-portrait");
  if (lightboxTrigger){
    const fullSrc = lightboxTrigger.dataset.full || lightboxTrigger.src;
    openImageLightbox(fullSrc, lightboxTrigger.alt, lightboxTrigger.classList.contains("ego-card-portrait"));
    e.stopPropagation();
    return;
  }
  const term = e.target.closest(".kw-term");
  if (term){
    const isSame = kwTooltip.dataset.openFor === term.dataset.kw && !kwTooltip.hidden;
    if (isSame){ hideKwTooltip(); kwTooltip.dataset.openFor = ""; return; }
    kwTooltip.dataset.openFor = term.dataset.kw;
    showKwTooltip(term.dataset.kw, term);
    e.stopPropagation();
    return;
  }
  const egoPassiveBtn = e.target.closest(".ego-passive-btn");
  if (egoPassiveBtn){
    const { slug } = egoPassiveBtn.dataset;
    const openKey = `egopassive:${slug}`;
    const isSame = kwTooltip.dataset.openFor === openKey && !kwTooltip.hidden;
    if (isSame){ hideKwTooltip(); kwTooltip.dataset.openFor = ""; return; }
    kwTooltip.dataset.openFor = openKey;
    showTooltipAt("E.G.O. 패시브", egoPassiveBodyHTML(slug), egoPassiveBtn);
    e.stopPropagation();
    return;
  }
  const egoDetailBtn = e.target.closest(".ego-detail-btn");
  if (egoDetailBtn){
    hideKwTooltip();
    openEgoDetail(egoDetailBtn.dataset.slug);
    e.stopPropagation();
    return;
  }
  const slotBtn = e.target.closest(".skillset-slot-btn");
  if (slotBtn){
    const { sinner, identity, num } = slotBtn.dataset;
    const openKey = `slot:${sinner}|${identity}|${num}`;
    const isSame = kwTooltip.dataset.openFor === openKey && !kwTooltip.hidden;
    if (isSame){ hideKwTooltip(); kwTooltip.dataset.openFor = ""; return; }
    kwTooltip.dataset.openFor = openKey;
    const label = num === "def" ? "DEF" : `Skill ${num}`;
    showTooltipAt(label, skillTooltipHTML(sinner, identity, num), slotBtn);
    e.stopPropagation();
    return;
  }
  const passiveBtn = e.target.closest(".skillset-passive-btn");
  if (passiveBtn){
    const { sinner, identity } = passiveBtn.dataset;
    const openKey = `passive:${sinner}|${identity}`;
    const isSame = kwTooltip.dataset.openFor === openKey && !kwTooltip.hidden;
    if (isSame){ hideKwTooltip(); kwTooltip.dataset.openFor = ""; return; }
    kwTooltip.dataset.openFor = openKey;
    showTooltipAt("전투 패시브", passiveTooltipHTML(sinner, identity), passiveBtn);
    e.stopPropagation();
    return;
  }
  const detailBtn = e.target.closest(".skillset-detail-btn");
  if (detailBtn){
    hideKwTooltip();
    openSkillSetDetail(detailBtn.dataset.sinner, detailBtn.dataset.identity);
    e.stopPropagation();
    return;
  }
  if (!e.target.closest("#kwTooltip")) hideKwTooltip();
});
document.addEventListener("keydown", e => { if (e.key === "Escape") hideKwTooltip(); });
const skillSetDetailModal = document.getElementById("skillSetDetailModal");
function skillSetDetailColumnHTML(sinner, identity, num, label){
  const info = skillSlotInfo(sinner, identity, num);
  const slotKey = num === "def" ? "def" : `skill${num}`;
  const iconData = IDENTITY_SKILL_ICON_DATA[`${sinner}|${identity}`];
  const uniqueIcon = iconData && iconData[slotKey];
  return `<div class="detail-col">
    <div class="detail-col-label">${label}</div>
    <div class="detail-col-icon">${skillFrameHTML(info && info.sin, 88, info && info.tier, uniqueIcon)}</div>
    <div class="detail-col-body">${skillTooltipHTML(sinner, identity, num)}</div>
  </div>`;
}
function openSkillSetDetail(sinner, identity){
  document.getElementById("skillSetDetailTitle").textContent = `${identity} ${sinner}`;
  const cols = [
    {num:"1", label:"Skill 1"}, {num:"2", label:"Skill 2"},
    {num:"3", label:"Skill 3"}, {num:"def", label:"DEF"},
  ].map(c => skillSetDetailColumnHTML(sinner, identity, c.num, c.label)).join("");
  const passiveHTML = `<div class="detail-passive-section">
    <div class="detail-col-label">전투 패시브</div>
    ${passiveTooltipHTML(sinner, identity)}
  </div>`;
  document.getElementById("skillSetDetailBody").innerHTML = `<div class="detail-col-row">${cols}</div>${passiveHTML}`;
  skillSetDetailModal.hidden = false;
}
function closeSkillSetDetail(){ skillSetDetailModal.hidden = true; }
document.getElementById("skillSetDetailClose").addEventListener("click", closeSkillSetDetail);
document.getElementById("skillSetDetailBackdrop").addEventListener("click", closeSkillSetDetail);

/* ---- E.G.O. 스킬셋 상세 ---- */
const egoDetailModal = document.getElementById("egoDetailModal");
let egoDetailState = { slug: null, kind: "awakening" };
function egoSkillFormRows(s){
  const rows = [`<div class="skill-tt-name">${escapeHTML(s.name)}</div>`];
  rows.push(`<div class="skill-tt-row"><span>속성</span><span>${sinBadgeSVG(s.sin,14)}${escapeHTML(s.sin)}</span></div>`);
  if (s.power) rows.push(`<div class="skill-tt-row"><span>기본 위력</span><span>${escapeHTML(s.power)}</span></div>`);
  if (s.coin) rows.push(`<div class="skill-tt-row"><span>코인 위력</span><span>${escapeHTML(s.coin)}</span></div>`);
  if (s.weight) rows.push(`<div class="skill-tt-row"><span>공격 가중치</span><span>${escapeHTML(s.weight)}</span></div>`);
  const coinCount = s.coinCount || Object.keys(s.coinEffects || {}).length;
  if (coinCount) rows.push(`<div class="skill-tt-row"><span>코인 수</span><span>${coinCount}개</span></div>`);
  if (s.coinEffects && Object.keys(s.coinEffects).length){
    const effectRows = Object.keys(s.coinEffects).sort((a,b) => Number(a)-Number(b)).map(n =>
      `<div class="skill-tt-coin-effect"><span class="skill-tt-coin-num">${n}</span><span>${linkifyKeywords(s.coinEffects[n])}</span></div>`
    ).join("");
    rows.push(`<div class="skill-tt-effect-block">${effectRows}</div>`);
  }
  return rows;
}
function egoSkillBodyHTML(slug, kind){
  const skill = EGO_SKILL_DETAIL[slug];
  const s = skill && skill[kind];
  if (!s) return `<div class="skill-tt-row"><span>정보 없음</span></div>`;
  const iconData = EGO_SKILL_ICON_DATA[slug];
  const iconSrc = iconData && iconData[kind];
  const iconHTML = iconSrc ? `<div class="detail-col-icon">${skillFrameHTML(s.sin, 72, 3, iconSrc)}</div>` : "";
  let html = iconHTML + egoSkillFormRows(s).join("");
  if (s.alt){
    html += `<div class="ego-alt-form-block">${egoSkillFormRows(s.alt).join("")}</div>`;
  }
  return html;
}
function egoPassiveBodyHTML(slug){
  const p = EGO_PASSIVE_DETAIL[slug];
  if (!p) return `<div class="skill-tt-row"><span>정보 없음</span></div>`;
  const rows = [`<div class="skill-tt-name">${escapeHTML(p.name)}</div>`];
  if (p.atkLevel) rows.push(`<div class="skill-tt-row"><span>공격 레벨</span><span>${escapeHTML(p.atkLevel)}</span></div>`);
  rows.push(`<div class="skill-tt-effect-block"><div class="skill-tt-coin-effect"><span>${linkifyKeywords(p.effect)}</span></div></div>`);
  return `<div class="skill-tt-passive-block">${rows.join("")}</div>`;
}
function renderEgoDetailBody(){
  document.getElementById("egoDetailSkillBody").innerHTML = egoSkillBodyHTML(egoDetailState.slug, egoDetailState.kind);
  document.getElementById("egoDetailPassiveBody").innerHTML = egoPassiveBodyHTML(egoDetailState.slug);
}
function setEgoDetailTab(kind){
  egoDetailState.kind = kind;
  document.getElementById("egoDetailTabAwaken").setAttribute("aria-pressed", kind === "awakening" ? "true" : "false");
  document.getElementById("egoDetailTabCorrosion").setAttribute("aria-pressed", kind === "corrosion" ? "true" : "false");
  renderEgoDetailBody();
}
function openEgoDetail(slug){
  const info = EGO_DATA[slug];
  if (!info) return;
  const skill = EGO_SKILL_DETAIL[slug];
  const hasCorrosion = !!(skill && skill.corrosion);
  egoDetailState = { slug, kind: "awakening" };
  document.getElementById("egoDetailTitle").textContent = egoShortTitle(info);
  const subTabs = egoDetailModal.querySelector(".ego-skill-sub-tabs");
  if (subTabs) subTabs.hidden = !hasCorrosion;
  const costRow = document.getElementById("egoDetailCostRow");
  const costHTML = egoDetailCostHTML(slug);
  costRow.innerHTML = costHTML;
  costRow.hidden = !costHTML;
  setEgoDetailTab("awakening");
  egoDetailModal.hidden = false;
}
function closeEgoDetail(){ egoDetailModal.hidden = true; }
document.getElementById("egoDetailClose").addEventListener("click", closeEgoDetail);
document.getElementById("egoDetailBackdrop").addEventListener("click", closeEgoDetail);
document.getElementById("egoDetailTabAwaken").addEventListener("click", () => setEgoDetailTab("awakening"));
document.getElementById("egoDetailTabCorrosion").addEventListener("click", () => setEgoDetailTab("corrosion"));
document.addEventListener("keydown", e => { if (e.key === "Escape" && !egoDetailModal.hidden) closeEgoDetail(); });
document.getElementById("skillSetSubTabIdentity").addEventListener("click", () => setSkillSetSubTab("identity"));
document.getElementById("skillSetSubTabEgo").addEventListener("click", () => setSkillSetSubTab("ego"));
document.addEventListener("keydown", e => { if (e.key === "Escape" && !skillSetDetailModal.hidden) closeSkillSetDetail(); });
window.addEventListener("scroll", e => { if (!kwTooltip.contains(e.target)) hideKwTooltip(); }, true);
window.addEventListener("resize", hideKwTooltip);

/* ---- 보유 인격/에고 관리 (localStorage) ---- */
const OWNED_STORAGE_KEY = "limbus_owned_v1";
function buildDefaultOwnedState(){
  const identities = {};
  DATA.forEach(d => { if (d.identity === "LCB 수감자") identities[`${d.sinner}|${d.identity}`] = true; });
  const egos = {};
  Object.values(EGO_DEFAULT).forEach(slug => { egos[slug] = true; });
  return { identities, egos };
}
function loadOwnedState(){
  try {
    const raw = localStorage.getItem(OWNED_STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch(e){}
  return buildDefaultOwnedState();
}
let ownedState = loadOwnedState();
function saveOwnedState(){
  try { localStorage.setItem(OWNED_STORAGE_KEY, JSON.stringify(ownedState)); } catch(e){}
}
function isIdentityOwned(sinner, identity){ return !!ownedState.identities[`${sinner}|${identity}`]; }
function isEgoOwned(slug){ return !!ownedState.egos[slug]; }
function toggleIdentityOwned(sinner, identity){
  const key = `${sinner}|${identity}`;
  if (ownedState.identities[key]) delete ownedState.identities[key];
  else ownedState.identities[key] = true;
  saveOwnedState();
}
function toggleEgoOwned(slug){
  if (ownedState.egos[slug]) delete ownedState.egos[slug];
  else ownedState.egos[slug] = true;
  saveOwnedState();
}

render();

/* ================= 덱 빌더 ================= */
const SINNER_ORDER = ["이상","파우스트","돈키호테","료슈","뫼르소","홍루","히스클리프","이스마엘","로쟈","싱클레어","오티스","그레고르"];

const deckState = {
  assigned: {},      // sinner -> identity name
  activeOrder: [],   // sinner names, click order, max 7
  dead: new Set(),   // sinner names marked as 사망 처리 (우클릭)
  egoAssigned: {},   // sinner -> {ZAYIN:slug|null, TETH:.., HE:.., WAW:.., ALEPH:..}
  skillCounts: {},   // sinner -> {1:n, 2:n, 3:n} (스킬 보유 수량)
  detailMode: false, // 파티 그리드 '상세' 오버레이 표시 여부
  detailTab: "skill", // "skill" | "ego"
  mirrorMode: false,
  battleType: "normal", // "normal" | "focused"
  picker: { sinner: null, tab: "identity", q: "", rarities: new Set(), sins: new Set(), activations: new Set(), identityKw: new Set(), cats: new Set() },
};
function defaultEgoAssigned(sn){
  const out = {};
  EGO_GRADES.forEach(g => { out[g] = null; });
  out.ZAYIN = EGO_DEFAULT[sn] || null;
  return out;
}
SINNER_ORDER.forEach(sn => {
  const lcb = DATA.find(d => d.sinner === sn && d.identity === "LCB 수감자");
  deckState.assigned[sn] = lcb ? lcb.identity : DATA.find(d => d.sinner === sn).identity;
  deckState.egoAssigned[sn] = defaultEgoAssigned(sn);
  deckState.skillCounts[sn] = { ...SKILL_RULE_DEFAULT.defaultSplit };
});

// 현재 장착 E.G.O에 따라 적용되는 스킬 보유 수량 규칙(총합/칸별 상한/기본값)을 반환
function skillRuleFor(sinner){
  const identity = deckState.assigned[sinner];
  const eg = deckState.egoAssigned[sinner] || {};
  for (const grade of EGO_GRADES){
    const slug = eg[grade];
    if (slug){
      const override = SKILL_RULE_OVERRIDE[`${sinner}|${identity}|${slug}`];
      if (override) return override;
    }
  }
  return SKILL_RULE_DEFAULT;
}
function isSkillCountValid(sinner){
  const rule = skillRuleFor(sinner);
  const c = deckState.skillCounts[sinner];
  if (!c) return false;
  const sum = (c[1]||0) + (c[2]||0) + (c[3]||0);
  if (sum !== rule.total) return false;
  if (c[1] < 0 || c[2] < 0 || c[3] < 0) return false;
  if (c[1] > rule.caps[1] || c[2] > rule.caps[2] || c[3] > rule.caps[3]) return false;
  return true;
}

function getAssignedEntry(sinner){
  return DATA.find(d => d.sinner === sinner && d.identity === deckState.assigned[sinner]);
}

function portraitSrc(entry){
  const key = `${entry.sinner}|${entry.identity}`;
  return IDENTITY_PORTRAIT_SYNCED_DATA[key] || IDENTITY_PORTRAIT_NORMAL_DATA[key] || SINNER_ICON_DATA[entry.sinner] || "";
}

// '상세' 모드에서 인격패 위에 표시할 스킬 보유수/E.G.O 편성 오버레이
function skillFrameHTML(sin, size, tier, uniqueIconSrc){
  const s = size || 14;
  const frameTier = tier === 4 ? 1 : tier;
  const framePath = (sin && frameTier && SIN_SKILL_FRAME_DATA[sin] && SIN_SKILL_FRAME_DATA[sin][frameTier]) || UI_ICON_DATA.skillFrame;
  let iconHTML;
  if (uniqueIconSrc){
    const artSize = Math.round(s * 0.66);
    iconHTML = `<img class="skill-frame-art" src="${uniqueIconSrc}" alt="" width="${artSize}" height="${artSize}">`;
  } else {
    const sinIconSrc = sin ? SIN_ICON_DATA[sin] : null;
    const innerSize = Math.round(s * 0.56);
    iconHTML = sinIconSrc ? `<img class="skill-frame-sin" src="${sinIconSrc}" alt="${sin}" width="${innerSize}" height="${innerSize}">` : "";
  }
  return `<span class="skill-frame" style="width:${s}px;height:${s}px;"><img class="skill-frame-bg" src="${framePath}" alt="" width="${s}" height="${s}">${iconHTML}</span>`;
}
function slotDetailHTML(sinner){
  if (deckState.detailTab === "skill"){
    const identity = deckState.assigned[sinner];
    const prof = IDENTITY_SKILL_PROFILE[`${sinner}|${identity}`];
    if (!prof) return `<div class="slot-detail"><span class="slot-detail-empty">데이터 없음</span></div>`;
    const iconData = IDENTITY_SKILL_ICON_DATA[`${sinner}|${identity}`];
    const counts = deckState.skillCounts[sinner] || SKILL_RULE_DEFAULT.defaultSplit;
    const skillRows = [1,2,3].map(num => {
      const info = prof.skills[num-1];
      const cur = counts[num] || 0;
      const uniqueIcon = iconData && iconData[`skill${num}`];
      return `<div class="slot-detail-row">${skillFrameHTML(info && info.sin, 32, info && info.tier, uniqueIcon)}<span>Skill ${num} x${cur}</span></div>`;
    }).join("");
    const defInfo = prof.defense && prof.defense[0];
    const defUniqueIcon = iconData && iconData.def;
    const defRow = `<div class="slot-detail-row">${skillFrameHTML(defInfo && defInfo.sin, 32, defInfo && defInfo.tier, defUniqueIcon)}<span>DEF</span></div>`;
    return `<div class="slot-detail">${skillRows}${defRow}</div>`;
  }
  const eg = deckState.egoAssigned[sinner] || {};
  const rows = EGO_GRADES.filter(g => eg[g]).map(g => {
    const slug = eg[g];
    const info = EGO_DATA[slug];
    const color = info && info.sin ? (SIN_COLOR[info.sin] || "#999") : "#999";
    return `<div class="slot-detail-row slot-detail-ego-row">
      <span class="slot-detail-grade">${g}</span>
      <img class="slot-detail-ego-icon" src="${EGO_ICON_DATA[slug]}" style="border-color:${color}" alt="">
    </div>`;
  }).join("");
  return `<div class="slot-detail">${rows || `<span class="slot-detail-empty">장착 없음</span>`}</div>`;
}

function renderPartyGrid(){
  const grid = document.getElementById("partyGrid");
  grid.innerHTML = "";
  SINNER_ORDER.forEach(sinner => {
    const entry = getAssignedEntry(sinner);
    const orderIdx = deckState.activeOrder.indexOf(sinner);
    const isActive = orderIdx >= 0;
    const isDead = deckState.dead.has(sinner);
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "party-slot" + (isActive ? " is-active" : "") + (isDead ? " is-dead" : "") + (deckState.detailMode ? " is-detail" : "");
    btn.title = `${sinner} · ${entry.identity}${isDead ? " (사망 처리됨)" : ""}`;
    btn.innerHTML = `
      ${isActive ? `<span class="party-slot-order">${orderIdx+1}</span>` : ""}
      ${isDead ? `<span class="party-slot-dead-badge">💀</span>` : ""}
      <img class="party-slot-icon" src="${portraitSrc(entry)}" alt="${sinner} ${entry.identity}" loading="lazy">
      ${deckState.detailMode ? slotDetailHTML(sinner) : ""}`;
    attachSlotPressEvents(btn, sinner);
    grid.appendChild(btn);
  });
}

function attachSlotPressEvents(el, sinner){
  let timer = null, firedLong = false, moved = false, startX = 0, startY = 0;
  const clear = () => { clearTimeout(timer); timer = null; };
  el.addEventListener("pointerdown", e => {
    if (e.button !== undefined && e.button !== 0) return;
    firedLong = false; moved = false;
    startX = e.clientX; startY = e.clientY;
    clear();
    timer = setTimeout(() => { firedLong = true; openPicker(sinner); }, 900);
  });
  el.addEventListener("pointermove", e => {
    if (Math.abs(e.clientX-startX) > 8 || Math.abs(e.clientY-startY) > 8) moved = true;
    if (moved) clear();
  });
  el.addEventListener("pointerup", e => {
    if (e.button !== undefined && e.button !== 0) return;
    const wasLong = firedLong;
    clear();
    if (!wasLong && !moved) toggleActiveSinner(sinner);
  });
  el.addEventListener("pointerleave", clear);
  el.addEventListener("pointercancel", clear);
  el.addEventListener("contextmenu", e => {
    e.preventDefault();
    clear();
    toggleDeadSinner(sinner);
  });
}

function toggleDeadSinner(sinner){
  if (deckState.dead.has(sinner)) deckState.dead.delete(sinner);
  else deckState.dead.add(sinner);
  renderDeck();
}

function toggleActiveSinner(sinner){
  const idx = deckState.activeOrder.indexOf(sinner);
  if (idx >= 0){
    deckState.activeOrder.splice(idx, 1);
  } else {
    if (deckState.activeOrder.length >= 7) return;
    deckState.activeOrder.push(sinner);
  }
  renderDeck();
}

const NORMAL_BATTLE_CAP = 12;
const FOCUSED_BATTLE_CAP = 7;

function battleCap(){
  return deckState.battleType === "focused" ? FOCUSED_BATTLE_CAP : NORMAL_BATTLE_CAP;
}

// 현재 스킬 보유 수량 설정에 맞춰(0개인 스킬은 제외) 죄악 실 합계를 계산한다. 수비 스킬은 항상 포함.
// includeSpecial=false: 스킬1~3만(보유수 0이면 제외) + 수비 스킬 — 공명(슬롯) 계산용.
// includeSpecial=true : 위에 더해 스킬4 이상(특수 발동 스킬, 보유수 조절 대상이 아님)도 항상 포함 — 보유(누적 실) 계산용.
function profileForSinnerBase(sinner, includeSpecial){
  const prof = IDENTITY_SKILL_PROFILE[`${sinner}|${deckState.assigned[sinner]}`];
  if (!prof) return {};
  const counts = deckState.skillCounts[sinner] || SKILL_RULE_DEFAULT.defaultSplit;
  const sums = {};
  prof.skills.forEach((s, i) => {
    if (!s.sin) return;
    if (i < 3){
      const holdCount = counts[i+1];
      if (holdCount === 0) return; // 완전히 다른 스킬로 교체됨 — 해당 속성 자원 수급/공명 불가
    } else {
      if (!includeSpecial) return; // 특수 발동 스킬은 공명(슬롯) 계산에서 제외
    }
    sums[s.sin] = (sums[s.sin] || 0) + s.tier;
  });
  prof.defense.forEach(d => {
    if (!d.sin) return;
    sums[d.sin] = (sums[d.sin] || 0) + d.tier;
  });
  return sums;
}
function profileForSinnerThread(sinner){ return profileForSinnerBase(sinner, true); }
function profileForSinnerSlot(sinner){ return profileForSinnerBase(sinner, false); }

// 해당 수감자가 편성한 인격이 슬롯 보너스 규칙(SLOT_BONUS_INNATE_DATA)을 갖고 있는지
function slotBonusEntryFor(sinner){
  return SLOT_BONUS_INNATE_DATA[`${sinner}|${deckState.assigned[sinner]}`] || null;
}
// sinner 본인을 제외한, 거미집 소속으로 판정되는 사망 처리 인격 수
function deadGeojipCount(sinner){
  return SINNER_ORDER.filter(sn => sn !== sinner && deckState.dead.has(sn))
    .filter(sn => isGeojipMember(getAssignedEntry(sn))).length;
}
// 항상 자동 적용되는(토글 불필요) 슬롯 보너스 수치
function slotBonusFor(sinner){
  const cfg = slotBonusEntryFor(sinner);
  if (!cfg) return 0;
  const deadCount = deadGeojipCount(sinner);
  return Math.min(cfg.max, Math.floor(deadCount / cfg.deadPerStep) * cfg.bonusPerStep);
}

// 현재 장착된 E.G.O들(등급별 1개씩)이 전부 1회 사용된다고 가정했을 때의 죄악별 추가 기여(고정치, 턴에 비례하지 않음)
function egoBonusForSinner(sinner){
  const eg = deckState.egoAssigned[sinner] || {};
  const bonus = {};
  EGO_GRADES.forEach(grade => {
    const slug = eg[grade];
    if (!slug) return;
    const info = EGO_DATA[slug];
    if (!info || !info.sin) return;
    bonus[info.sin] = (bonus[info.sin] || 0) + 1;
  });
  return bonus;
}

// turns[i] = 죄악 실 합계 상태 at 턴 (i+1). 인원이 0명이면 빈 배열.
// threadTurns[i] = 죄악 실(보유용, 스킬 티어 합산) 상태 at 턴 (i+1)
// slotTurns[i]   = 공명용 슬롯 카운트(그 죄악을 낼 수 있는 인격들의 슬롯 수 합) at 턴 (i+1)
// threadTurnsEgo/slotTurnsEgo = 장착된 E.G.O를 전부 1회씩 사용한다고 가정했을 때의 같은 값(추가 기여는 턴과 무관하게 고정으로 더해짐)
// 사망 처리된 인격은 슬롯 성장에는 그대로 참여하되(상한 계산은 편성 인원 기준 그대로), 실제 죄악 기여는 0으로 취급한다.
// 슬롯 보너스 기프트가 켜진 인격은 매 턴 mult에 보너스가 고정으로 더해진다.
function simulateTurnSums(){
  const order = deckState.activeOrder;
  const N = order.length;
  if (N === 0) return { threadTurns: [], slotTurns: [], threadTurnsEgo: [], slotTurnsEgo: [] };
  const cap = battleCap();
  const slotsFor = {};
  order.forEach(s => { slotsFor[s] = 1; });
  const queue = order.slice();

  const threadSumsNow = (withEgo) => {
    const sums = {};
    order.forEach(s => {
      if (deckState.dead.has(s)) return;
      const profile = profileForSinnerThread(s);
      const mult = slotsFor[s] + slotBonusFor(s);
      for (const sin in profile) sums[sin] = (sums[sin] || 0) + profile[sin] * mult;
      if (withEgo){
        const eb = egoBonusForSinner(s);
        for (const sin in eb) sums[sin] = (sums[sin] || 0) + eb[sin];
      }
    });
    return sums;
  };
  const slotCountsNow = (withEgo) => {
    const counts = {};
    order.forEach(s => {
      if (deckState.dead.has(s)) return;
      const profile = profileForSinnerSlot(s);
      const mult = slotsFor[s] + slotBonusFor(s);
      for (const sin in profile){
        if (profile[sin] > 0) counts[sin] = (counts[sin] || 0) + mult;
      }
      if (withEgo){
        const eb = egoBonusForSinner(s);
        for (const sin in eb) counts[sin] = (counts[sin] || 0) + eb[sin];
      }
    });
    return counts;
  };

  const threadTurns = [threadSumsNow(false)];
  const slotTurns = [slotCountsNow(false)];
  const threadTurnsEgo = [threadSumsNow(true)];
  const slotTurnsEgo = [slotCountsNow(true)];
  let total = N;
  while (total < cap){
    const recipient = queue.shift();
    slotsFor[recipient] += 1;
    queue.push(recipient);
    total += 1;
    threadTurns.push(threadSumsNow(false));
    slotTurns.push(slotCountsNow(false));
    threadTurnsEgo.push(threadSumsNow(true));
    slotTurnsEgo.push(slotCountsNow(true));
  }
  return { threadTurns, slotTurns, threadTurnsEgo, slotTurnsEgo };
}

// 필요한 죄악 조건들을 모두 만족하는 최소 턴 반환. 불가능하면 null.
function minTurnFor(condTerms, turns){
  if (turns.length === 0) return null;
  let maxTurn = 1;
  for (const t of condTerms){
    if (!t.sin) continue;
    const need = parseInt(t.num, 10) || 0;
    let foundTurn = null;
    for (let i = 0; i < turns.length; i++){
      if ((turns[i][t.sin] || 0) >= need){ foundTurn = i + 1; break; }
    }
    if (foundTurn === null) return null;
    if (foundTurn > maxTurn) maxTurn = foundTurn;
  }
  return maxTurn;
}

function computeValidBenchedPassives(){
  const activeSet = new Set(deckState.activeOrder);
  const { threadTurns, slotTurns, threadTurnsEgo, slotTurnsEgo } = simulateTurnSums();

  const benched = SINNER_ORDER.filter(sn => !activeSet.has(sn)).map(sn => getAssignedEntry(sn)).filter(Boolean);

  const out = [];
  benched.forEach(d => {
    if (!d.condTerms.length){ out.push({d, minTurn:null, minTurnEgo:null}); return; }
    if (d.condLabel === "공명"){
      const mt = minTurnFor(d.condTerms, slotTurns);
      const mtEgo = minTurnFor(d.condTerms, slotTurnsEgo);
      if (mt === null && mtEgo === null) return; // 기본으로도, E.G.O를 써도 발동 불가하면 표시하지 않음
      out.push({ d, minTurn: mt, minTurnEgo: mtEgo });
      return;
    }
    if (d.condLabel === "보유"){
      if (deckState.mirrorMode){ out.push({d, minTurn:null, minTurnEgo:null}); return; }
      const mt = minTurnFor(d.condTerms, threadTurns);
      if (mt !== null) out.push({d, minTurn:null, minTurnEgo:null}); // 보유는 턴 배지를 표시하지 않음
      return;
    }
    out.push({d, minTurn:null, minTurnEgo:null});
  });
  return out;
}

function turnLabel(mt){
  if (mt === null) return "발동 불가";
  return mt > 1 ? `최소 ${mt}턴` : "1턴부터";
}

function deckCardHTML(item){
  let html = cardHTML(item.d);
  const bothTrivial = item.minTurn === 1 && item.minTurnEgo === 1;
  if (item.d.condLabel === "공명" && item.d.condTerms.length && !bothTrivial){
    const badgeRow = `<div class="deck-turn-badge-row">
      <span class="deck-turn-badge-col">기본 ${turnLabel(item.minTurn)}</span>
      <span class="deck-turn-badge-divider"></span>
      <span class="deck-turn-badge-col ego">E.G.O 사용시 ${turnLabel(item.minTurnEgo)}</span>
    </div>`;
    html = html.replace('<div class="passive-name">', `${badgeRow}<div class="passive-name">`);
  }
  return html;
}

function renderDeckResults(){
  const valid = computeValidBenchedPassives();
  document.getElementById("deckShownCount").textContent = valid.length;
  const grid = document.getElementById("deckCardGrid");
  const empty = document.getElementById("deckEmptyState");
  if (valid.length === 0){
    grid.innerHTML = "";
    empty.hidden = false;
  } else {
    empty.hidden = true;
    grid.innerHTML = valid.map(deckCardHTML).join("");
  }
  const cap = battleCap();
  const n = deckState.activeOrder.length;
  const hint = document.getElementById("turnCapHint");
  if (n === 0){
    hint.textContent = "";
  } else if (n >= cap){
    hint.textContent = `현재 편성(${n}명)이 이미 슬롯 상한(${cap})이라, 수감자가 쓰러지기 전까지 슬롯이 늘어나지 않습니다.`;
  } else {
    hint.textContent = "";
  }
}

function renderDeckSidePanel(){
  const panel = document.getElementById("deckSidePanel");
  const deadSinners = SINNER_ORDER.filter(sn => deckState.dead.has(sn));
  const bonusCandidates = SINNER_ORDER.filter(sn => slotBonusEntryFor(sn));

  const deadBlock = `
    <div class="filter-group">
      <h2>사망 처리</h2>
      ${deadSinners.length
        ? `<div class="dead-chip-list">${deadSinners.map(sn => {
            const e = getAssignedEntry(sn);
            return `<span class="dead-chip" data-revive="${sn}" title="클릭하면 부활 처리">💀 <img src="${portraitSrc(e)}" alt="">${e.identity}</span>`;
          }).join("")}</div>`
        : `<div class="side-panel-empty">아직 사망 처리된 인격이 없습니다.</div>`}
      <p class="deck-hint" style="margin:0;">인격패를 우클릭하면 사망/부활을 전환합니다.</p>
    </div>`;

  const bonusBlock = bonusCandidates.length
    ? `<div class="filter-group">
        <h2>사망 기반 슬롯 보너스</h2>
        ${bonusCandidates.map(sn => {
          const cfg = slotBonusEntryFor(sn);
          const deadCount = deadGeojipCount(sn);
          const bonus = slotBonusFor(sn);
          return `<div class="gift-bonus-block">
            <p class="deck-hint" style="margin:0;">${sn}(${deckState.assigned[sn]}) 자체 패시브: 거미집 소속 사망 인원 ${cfg.deadPerStep}명당 슬롯 +${cfg.bonusPerStep} (최대 +${cfg.max})</p>
            <p class="gift-bonus-note">거미집 소속 사망 ${deadCount}명 → 현재 보너스 +${bonus}슬롯</p>
          </div>`;
        }).join("")}
      </div>`
    : "";

  panel.innerHTML = deadBlock + bonusBlock;

  panel.querySelectorAll("[data-revive]").forEach(chip => {
    chip.addEventListener("click", () => toggleDeadSinner(chip.dataset.revive));
  });
}

function renderDeck(){
  renderPartyGrid();
  renderDeckResults();
  renderDeckSidePanel();
}

document.getElementById("mirrorToggle").addEventListener("change", e => {
  deckState.mirrorMode = e.target.checked;
  renderDeckResults();
});
document.getElementById("detailToggleBtn").addEventListener("click", () => {
  deckState.detailMode = !deckState.detailMode;
  document.getElementById("detailToggleBtn").setAttribute("aria-pressed", String(deckState.detailMode));
  document.getElementById("detailModeTabs").classList.toggle("is-open", deckState.detailMode);
  renderPartyGrid();
});
document.getElementById("detailModeSkill").addEventListener("click", () => {
  deckState.detailTab = "skill";
  document.getElementById("detailModeSkill").setAttribute("aria-pressed","true");
  document.getElementById("detailModeEgo").setAttribute("aria-pressed","false");
  renderPartyGrid();
});
document.getElementById("detailModeEgo").addEventListener("click", () => {
  deckState.detailTab = "ego";
  document.getElementById("detailModeEgo").setAttribute("aria-pressed","true");
  document.getElementById("detailModeSkill").setAttribute("aria-pressed","false");
  renderPartyGrid();
});
document.getElementById("battleNormal").addEventListener("click", () => {
  deckState.battleType = "normal";
  document.getElementById("battleNormal").setAttribute("aria-pressed","true");
  document.getElementById("battleFocused").setAttribute("aria-pressed","false");
  renderDeckResults();
});
document.getElementById("battleFocused").addEventListener("click", () => {
  deckState.battleType = "focused";
  document.getElementById("battleNormal").setAttribute("aria-pressed","false");
  document.getElementById("battleFocused").setAttribute("aria-pressed","true");
  renderDeckResults();
});
document.getElementById("deckResetAll").addEventListener("click", () => {
  deckState.activeOrder = [];
  deckState.dead.clear();
  SINNER_ORDER.forEach(sn => {
    const lcb = DATA.find(d => d.sinner === sn && d.identity === "LCB 수감자");
    deckState.assigned[sn] = lcb ? lcb.identity : DATA.find(d => d.sinner === sn).identity;
    deckState.egoAssigned[sn] = defaultEgoAssigned(sn);
    deckState.skillCounts[sn] = { ...SKILL_RULE_DEFAULT.defaultSplit };
  });
  renderDeck();
});

/* ---- picker modal ---- */
const pickerView = document.getElementById("pickerView");
function openPicker(sinner){
  deckState.picker = { sinner, tab: "identity", q: "", rarities: new Set(), sins: new Set(), activations: new Set(), identityKw: new Set(), cats: new Set() };
  document.getElementById("pickerTitle").textContent = `${sinner} 편성`;
  document.getElementById("pickerSearchInput").value = "";
  document.getElementById("searchView").hidden = true;
  document.getElementById("searchRow").hidden = true;
  document.getElementById("searchFooter").hidden = true;
  document.getElementById("deckView").hidden = true;
  pickerView.hidden = false;
  renderPickerSinnerSwitch();
  setPickerTab("identity", true);
  renderPicker();
}
function closePicker(){
  pickerView.hidden = true;
  document.getElementById("deckView").hidden = false;
}
function tryClosePicker(){
  if (deckState.picker.tab === "skill" && !isSkillCountValid(deckState.picker.sinner)){
    showSkillError();
    return;
  }
  closePicker();
}
document.getElementById("pickerBack").addEventListener("click", tryClosePicker);
document.addEventListener("keydown", e => { if (e.key === "Escape" && !pickerView.hidden) tryClosePicker(); });

/* ---- 인격 선택 창 안에서 다른 수감자로 바로 전환 ---- */
function renderPickerSinnerSwitch(){
  const wrap = document.getElementById("pickerSinnerSwitch");
  wrap.innerHTML = SINNER_ORDER.map(sn => `
    <button type="button" class="picker-sinner-btn${sn === deckState.picker.sinner ? " is-current" : ""}" data-sinner="${sn}" title="${sn}">
      <img src="${SINNER_ICON_DATA[sn] || ""}" alt="${sn}" loading="lazy">
    </button>`).join("");
  wrap.querySelectorAll("[data-sinner]").forEach(btn => {
    btn.addEventListener("click", () => trySwitchPickerSinner(btn.dataset.sinner));
  });
}
function trySwitchPickerSinner(sinner){
  if (sinner === deckState.picker.sinner) return;
  if (deckState.picker.tab === "skill" && !isSkillCountValid(deckState.picker.sinner)){
    showSkillError();
    return;
  }
  const keepTab = deckState.picker.tab;
  deckState.picker.sinner = sinner;
  deckState.picker.q = "";
  document.getElementById("pickerSearchInput").value = "";
  document.getElementById("pickerTitle").textContent = `${sinner} 편성`;
  renderPickerSinnerSwitch();
  setPickerTab(keepTab, true);
  renderPicker();
}

function pickerPool(){
  return DATA.filter(d => d.sinner === deckState.picker.sinner);
}
function pickerPassesFilters(d){
  const p = deckState.picker;
  if (p.q){
    const terms = p.q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.every(t => d.searchBlob.includes(t) || d.searchBlobNoSpace.includes(t))) return false;
  }
  if (p.rarities.size && !p.rarities.has(d.rarity)) return false;
  if (p.sins.size && ![...p.sins].every(s => d.sins.includes(s))) return false;
  if (p.activations.size && !p.activations.has(d.condLabel)) return false;
  if (p.identityKw.size && ![...p.identityKw].every(k => effectiveKeywords(d).includes(k))) return false;
  if (p.cats.size && ![...p.cats].some(c => d.cats.includes(c))) return false;
  if (state.ownedOnly && !isIdentityOwned(d.sinner, d.identity)) return false;
  return true;
}
function pickerCountFor(filterFn){ return pickerPool().filter(filterFn).length; }

function pickerBuildRarityChips(){
  const container = document.getElementById("pickerRarityChips");
  container.innerHTML = "";
  const pool = pickerPool();
  RARITIES.filter(r => pool.some(d => d.rarity === r)).forEach(r => {
    const btn = document.createElement("button");
    btn.className = "chip rarity-chip"; btn.type = "button";
    btn.setAttribute("aria-pressed", deckState.picker.rarities.has(r));
    const c = pickerCountFor(d => d.rarity === r);
    btn.innerHTML = `<span class="zeros">${r}</span><span class="count">${c}</span>`;
    btn.addEventListener("click", () => {
      const s = deckState.picker.rarities;
      s.has(r) ? s.delete(r) : s.add(r);
      renderPicker();
    });
    container.appendChild(btn);
  });
}
function pickerBuildChipGroup(containerId, items, selectedSet, iconFor){
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  items.forEach(item => {
    const c = pickerCountFor(item.test);
    if (c === 0) return;
    const btn = document.createElement("button");
    btn.className = "chip"; btn.type = "button";
    btn.setAttribute("aria-pressed", selectedSet.has(item.key));
    btn.innerHTML = `${iconFor ? iconFor(item.key) : ""}<span>${item.key}</span><span class="count">${c}</span>`;
    btn.addEventListener("click", () => {
      selectedSet.has(item.key) ? selectedSet.delete(item.key) : selectedSet.add(item.key);
      renderPicker();
    });
    container.appendChild(btn);
  });
}

function renderPickerList(){
  const list = document.getElementById("pickerList");
  const empty = document.getElementById("pickerEmpty");
  const items = pickerPool().filter(pickerPassesFilters);
  if (items.length === 0){
    list.innerHTML = "";
    empty.hidden = false;
    return;
  }
  empty.hidden = true;
  list.innerHTML = items.map(d => {
    const isCurrent = deckState.assigned[d.sinner] === d.identity;
    return `<button type="button" class="picker-card${isCurrent ? " is-current" : ""}" data-identity="${d.identity.replace(/"/g,"&quot;")}" title="${d.identity}">
      <img src="${portraitSrc(d)}" alt="${d.identity}" loading="lazy">
      <span class="picker-card-rarity">${d.rarity}</span>
      ${isCurrent ? `<span class="picker-card-current-badge">선택됨</span>` : ""}
    </button>`;
  }).join("");
  list.querySelectorAll(".picker-card").forEach(btn => {
    btn.addEventListener("click", () => {
      deckState.assigned[deckState.picker.sinner] = btn.dataset.identity;
      fixSkillCountIfInvalid(deckState.picker.sinner);
      renderPickerList();
      renderDeck();
    });
  });
}

function renderPicker(){
  pickerBuildRarityChips();
  pickerBuildChipGroup("pickerSinChips", SINS.map(s => ({key:s, test:d=>d.sins.includes(s)})), deckState.picker.sins, s => sinBadgeSVG(s,16));
  pickerBuildChipGroup("pickerActivationChips", ACTIVATIONS.map(a => ({key:a, test:d=>d.condLabel===a})), deckState.picker.activations);
  pickerBuildChipGroup("pickerKwChips", IDENTITY_KW_LIST.map(k => ({key:k, test:d=>effectiveKeywords(d).includes(k)})), deckState.picker.identityKw, k => identityKwIcon(k,14));
  pickerBuildChipGroup("pickerCatChips", CATEGORY_DEFS.map(([label]) => ({key:label, test:d=>d.cats.includes(label)})), deckState.picker.cats);
  buildBundleChips("pickerCategoryBundleChips", deckState.picker.cats, renderPicker);
  renderPickerList();
}
document.getElementById("pickerSearchInput").addEventListener("input", e => {
  deckState.picker.q = e.target.value;
  renderPickerList();
});

// 인격/에고 변경으로 인해 스킬 보유수 규칙(총합·상한)이 바뀌어 현재 값이 더 이상 유효하지 않으면
// 스킬3 보유수를 1씩 줄여서 맞춘다 (예: 사랑과 증오의 이름으로 장착 해제/인격 교체 시 총합 7 -> 6).
// 규칙(총합)이 바뀌어 현재 스킬 보유수가 더 이상 유효하지 않으면, 스킬3에서 차이만큼 더하거나 뺀다.
// (총합이 늘어난 규칙으로 바뀌면 스킬3을 늘리고, 줄어든 규칙으로 바뀌면 스킬3을 줄인다)
function fixSkillCountIfInvalid(sinner){
  const rule = skillRuleFor(sinner);
  const counts = deckState.skillCounts[sinner];
  const sum = (counts[1]||0) + (counts[2]||0) + (counts[3]||0);
  const diff = rule.total - sum;
  if (diff === 0) return;
  const next = counts[3] + diff;
  counts[3] = Math.max(0, Math.min(rule.caps[3], next));
}

/* ---- 에고 편성 탭 ---- */
// EGO 표시명에서 뒤에 붙은 수감자 이름을 뗀다 (예: "오감도 이상" -> "오감도")
function egoShortTitle(info){
  return info.title.replace(new RegExp(`\\s*${info.sinner}$`), "");
}
function renderEgoPicker(){
  const sinner = deckState.picker.sinner;
  const wrap = document.getElementById("egoPickerWrap");
  const bySlugGrade = {};
  const allBySlugGrade = {};
  EGO_GRADES.forEach(g => { bySlugGrade[g] = []; allBySlugGrade[g] = []; });
  Object.entries(EGO_DATA).forEach(([slug, info]) => {
    if (info.sinner !== sinner) return;
    allBySlugGrade[info.grade].push({ slug, ...info });
    const selectedForGrade = (deckState.egoAssigned[sinner] || {})[info.grade];
    if (state.ownedOnly && !isEgoOwned(slug) && selectedForGrade !== slug) return;
    bySlugGrade[info.grade].push({ slug, ...info });
  });

  wrap.innerHTML = EGO_GRADES.map(grade => {
    const items = bySlugGrade[grade];
    const selected = (deckState.egoAssigned[sinner] || {})[grade];
    if (!items.length){
      const msg = allBySlugGrade[grade].length
        ? "보유 중인 E.G.O가 없습니다."
        : `보유한 E.G.O 데이터가 없습니다${grade === "ALEPH" ? " (아직 출시되지 않음)" : ""}.`;
      return `<div class="ego-grade-row"><h3>${grade}</h3><div class="ego-grade-empty">${msg}</div></div>`;
    }
    const noneBtn = `<div class="ego-icon-item">
        <button type="button" class="ego-none-btn${selected ? "" : " is-selected"}" data-grade="${grade}" data-slug="">없음</button>
      </div>`;
    const itemsHTML = items.map(e => `
      <div class="ego-icon-item">
        <button type="button" class="ego-icon-btn${selected === e.slug ? " is-selected" : ""}" data-grade="${grade}" data-slug="${e.slug}"
          style="border-color:${SIN_COLOR[e.sin] || "var(--border-strong)"}" title="${egoShortTitle(e)} (${e.sin})">
          <img src="${EGO_ICON_DATA[e.slug]}" alt="${egoShortTitle(e)}" loading="lazy">
        </button>
        <div class="ego-icon-label">${egoShortTitle(e)}</div>
      </div>`).join("");
    return `<div class="ego-grade-row"><h3>${grade}</h3><div class="ego-icon-grid">${noneBtn}${itemsHTML}</div></div>`;
  }).join("");

  wrap.querySelectorAll("[data-grade]").forEach(btn => {
    btn.addEventListener("click", () => {
      const grade = btn.dataset.grade;
      const slug = btn.dataset.slug || null;
      const cur = deckState.egoAssigned[sinner][grade];
      deckState.egoAssigned[sinner][grade] = (cur === slug) ? null : slug;
      fixSkillCountIfInvalid(sinner);
      renderEgoPicker();
      renderDeckResults();
    });
  });
}

/* ---- 스킬 보유수 설정 탭 ---- */
function renderSkillPicker(){
  const sinner = deckState.picker.sinner;
  const wrap = document.getElementById("skillPickerWrap");
  const identity = deckState.assigned[sinner];
  const prof = IDENTITY_SKILL_PROFILE[`${sinner}|${identity}`];
  const rule = skillRuleFor(sinner);
  const counts = deckState.skillCounts[sinner];

  let rowsHTML;
  if (!prof){
    rowsHTML = `<div class="side-panel-empty">이 인격은 스킬 속성 데이터가 없어 보유 수량이 계산에 반영되지 않습니다.</div>`;
  } else {
    rowsHTML = [1,2,3].map(num => {
      const info = prof.skills[num-1];
      const hexHTML = skillFrameHTML(info && info.sin, 16);
      const cur = counts[num] || 0;
      const cap = rule.caps[num];
      return `<div class="skill-row">
        <div class="skill-row-label">${hexHTML} 스킬 ${num}</div>
        <div class="skill-count-control">
          <button type="button" class="skill-count-btn" data-num="${num}" data-delta="-1" ${cur<=0?"disabled":""}>−</button>
          <span class="skill-count-value">x ${cur}</span>
          <button type="button" class="skill-count-btn" data-num="${num}" data-delta="1" ${cur>=cap?"disabled":""}>+</button>
          <span class="skill-count-max">최대 ${cap}</span>
        </div>
      </div>`;
    }).join("");
  }

  const sum = (counts[1]||0) + (counts[2]||0) + (counts[3]||0);
  const valid = isSkillCountValid(sinner);
  const totalRow = `<div class="skill-total-row${valid ? "" : " is-invalid"}">합계 ${sum} / ${rule.total}${valid ? "" : " — 조건을 만족하지 않습니다"}</div>`;

  wrap.innerHTML = `
    <p class="skill-rule-hint">${sinner}(${identity}) — 총 보유 수량 ${rule.total}개, 스킬1 최대 ${rule.caps[1]} · 스킬2 최대 ${rule.caps[2]} · 스킬3 최대 ${rule.caps[3]}</p>
    ${rowsHTML}
    ${totalRow}
    <div class="skill-error-msg" id="skillErrorMsg" hidden>보유 수량 조건(총합 ${rule.total}, 스킬별 상한)을 만족해야 다른 메뉴로 이동할 수 있습니다.</div>
  `;

  wrap.querySelectorAll(".skill-count-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const num = parseInt(btn.dataset.num, 10);
      const delta = parseInt(btn.dataset.delta, 10);
      const cap = rule.caps[num];
      const next = (counts[num] || 0) + delta;
      if (next < 0 || next > cap) return;
      counts[num] = next;
      renderSkillPicker();
      renderDeckResults();
    });
  });
}
function showSkillError(){
  const el = document.getElementById("skillErrorMsg");
  if (el) el.hidden = false;
}

/* ---- 인격 선택 창 서브탭(인격 편성 / 에고 편성 / 스킬 보유수 설정) ---- */
function setPickerTab(tab, force){
  if (!force && deckState.picker.tab === "skill" && tab !== "skill" && !isSkillCountValid(deckState.picker.sinner)){
    showSkillError();
    return false;
  }
  deckState.picker.tab = tab;
  document.getElementById("pickerTabBtnIdentity").setAttribute("aria-pressed", String(tab === "identity"));
  document.getElementById("pickerTabBtnEgo").setAttribute("aria-pressed", String(tab === "ego"));
  document.getElementById("pickerTabBtnSkill").setAttribute("aria-pressed", String(tab === "skill"));
  document.getElementById("pickerTabIdentity").hidden = tab !== "identity";
  document.getElementById("pickerTabEgo").hidden = tab !== "ego";
  document.getElementById("pickerTabSkill").hidden = tab !== "skill";
  if (tab === "ego") renderEgoPicker();
  if (tab === "skill") renderSkillPicker();
  return true;
}
document.getElementById("pickerTabBtnIdentity").addEventListener("click", () => setPickerTab("identity"));
document.getElementById("pickerTabBtnEgo").addEventListener("click", () => setPickerTab("ego"));
document.getElementById("pickerTabBtnSkill").addEventListener("click", () => setPickerTab("skill"));

/* ---- view tab switching ---- */
const tabSearch = document.getElementById("tabSearch");
const tabDeck = document.getElementById("tabDeck");
function renderOwnedIdentityTab(){
  const wrap = document.getElementById("ownedIdentityWrap");
  wrap.innerHTML = SINNER_ORDER.map((sinner, i) => {
    const identities = DATA.filter(d => d.sinner === sinner);
    const cardsHTML = identities.map(d => {
      const owned = isIdentityOwned(sinner, d.identity);
      return `<button type="button" class="owned-card${owned ? " is-owned" : ""}" data-sinner="${sinner}" data-identity="${d.identity.replace(/"/g,"&quot;")}" title="${d.identity}">
        <div class="owned-card-img-wrap">
          <img src="${portraitSrc(d)}" alt="${d.identity}" loading="lazy">
          ${owned ? `<span class="owned-card-check">✓</span>` : ""}
        </div>
        <span class="owned-card-label">${d.identity}</span>
      </button>`;
    }).join("");
    const sep = i > 0 ? `<div class="owned-sinner-sep"></div>` : "";
    return `${sep}<div class="owned-sinner-label"><img src="${SINNER_ICON_DATA[sinner] || ""}" alt="${sinner}"><span>${sinner}</span></div>
      <div class="owned-chip-grid">${cardsHTML}</div>`;
  }).join("");
  wrap.querySelectorAll(".owned-card").forEach(btn => {
    btn.addEventListener("click", () => {
      toggleIdentityOwned(btn.dataset.sinner, btn.dataset.identity);
      btn.classList.toggle("is-owned");
      const owned = btn.classList.contains("is-owned");
      const imgWrap = btn.querySelector(".owned-card-img-wrap");
      let check = imgWrap.querySelector(".owned-card-check");
      if (owned && !check){
        check = document.createElement("span");
        check.className = "owned-card-check";
        check.textContent = "✓";
        imgWrap.appendChild(check);
      } else if (!owned && check){
        check.remove();
      }
    });
  });
}

function renderOwnedEgoTab(){
  const wrap = document.getElementById("ownedEgoWrap");
  wrap.innerHTML = SINNER_ORDER.map((sinner, i) => {
    const egos = Object.entries(EGO_DATA).filter(([,info]) => info.sinner === sinner)
      .sort((a,b) => {
        const aDef = a[0] === EGO_DEFAULT[sinner] ? 0 : 1;
        const bDef = b[0] === EGO_DEFAULT[sinner] ? 0 : 1;
        if (aDef !== bDef) return aDef - bDef;
        return EGO_GRADES.indexOf(a[1].grade) - EGO_GRADES.indexOf(b[1].grade);
      });
    const cardsHTML = egos.map(([slug, info]) => {
      const owned = isEgoOwned(slug);
      const shortTitle = egoShortTitle(info);
      return `<button type="button" class="owned-ego-card${owned ? " is-owned" : ""}" data-slug="${slug}" title="${shortTitle}">
        <div class="owned-ego-card-img-wrap" style="border-color:${SIN_COLOR[info.sin] || "var(--border-strong)"}">
          <img src="${EGO_ICON_DATA[slug]}" alt="${shortTitle}" loading="lazy">
          ${owned ? `<span class="owned-ego-card-check">✓</span>` : ""}
        </div>
        <span class="owned-ego-card-grade">${info.grade}</span>
        <span class="owned-ego-card-label">${shortTitle}</span>
      </button>`;
    }).join("");
    const sep = i > 0 ? `<div class="owned-sinner-sep"></div>` : "";
    return `${sep}<div class="owned-sinner-label"><img src="${SINNER_ICON_DATA[sinner] || ""}" alt="${sinner}"><span>${sinner}</span></div>
      <div class="owned-chip-grid">${cardsHTML}</div>`;
  }).join("");
  wrap.querySelectorAll(".owned-ego-card").forEach(btn => {
    btn.addEventListener("click", () => {
      toggleEgoOwned(btn.dataset.slug);
      btn.classList.toggle("is-owned");
      const owned = btn.classList.contains("is-owned");
      const imgWrap = btn.querySelector(".owned-ego-card-img-wrap");
      let check = imgWrap.querySelector(".owned-ego-card-check");
      if (owned && !check){
        check = document.createElement("span");
        check.className = "owned-ego-card-check";
        check.textContent = "✓";
        imgWrap.appendChild(check);
      } else if (!owned && check){
        check.remove();
      }
    });
  });
}

let ownedTab = "identity";
function setOwnedTab(tab){
  ownedTab = tab;
  document.getElementById("ownedTabBtnIdentity").setAttribute("aria-pressed", String(tab === "identity"));
  document.getElementById("ownedTabBtnEgo").setAttribute("aria-pressed", String(tab === "ego"));
  document.getElementById("ownedTabIdentity").hidden = tab !== "identity";
  document.getElementById("ownedTabEgo").hidden = tab !== "ego";
  if (tab === "identity") renderOwnedIdentityTab();
  else renderOwnedEgoTab();
}
document.getElementById("ownedTabBtnIdentity").addEventListener("click", () => setOwnedTab("identity"));
document.getElementById("ownedTabBtnEgo").addEventListener("click", () => setOwnedTab("ego"));

const ownedView = document.getElementById("ownedView");
function updateHeaderHeightVar(){
  const header = document.querySelector("header.top");
  if (header) document.documentElement.style.setProperty("--header-h", header.offsetHeight + "px");
}
window.addEventListener("resize", updateHeaderHeightVar);
function openOwnedView(){
  document.getElementById("searchView").hidden = true;
  document.getElementById("searchRow").hidden = true;
  document.getElementById("skillSetSearchRow").hidden = true;
  document.getElementById("searchFooter").hidden = true;
  document.getElementById("skillSetView").hidden = true;
  document.getElementById("deckView").hidden = true;
  pickerView.hidden = true;
  ownedView.hidden = false;
  setOwnedTab(ownedTab);
  updateHeaderHeightVar();
}
function closeOwnedView(){
  ownedView.hidden = true;
  if (tabDeck.getAttribute("aria-pressed") === "true") showDeckView();
  else if (tabSkillSet.getAttribute("aria-pressed") === "true") showSkillSetView();
  else showSearchView();
  renderBoth();
}
const settingsBtn = document.getElementById("settingsBtn");
const settingsModal = document.getElementById("settingsModal");
function closeSettingsPanel(){ settingsModal.hidden = true; }
settingsBtn.addEventListener("click", () => { settingsModal.hidden = false; });
document.getElementById("settingsClose").addEventListener("click", closeSettingsPanel);
document.getElementById("settingsBackdrop").addEventListener("click", closeSettingsPanel);
document.addEventListener("keydown", e => { if (e.key === "Escape" && !settingsModal.hidden) closeSettingsPanel(); });

const FAU_LEVEL_KEY = "gesellschaft_fau_level";
const FAU_LEVEL_LABELS = ["파우스트", "순진한 파우스트", "멍청한 파우스트", "파우웅!"];
const fauLevelSlider = document.getElementById("fauLevelSlider");
const fauLevelLabel = document.getElementById("fauLevelLabel");
function applyFauLevel(level){
  document.body.dataset.fauLevel = level;
  fauLevelLabel.textContent = FAU_LEVEL_LABELS[level];
}
let savedFauLevel = 1;
try {
  const raw = localStorage.getItem(FAU_LEVEL_KEY);
  if (raw !== null) savedFauLevel = Math.min(3, Math.max(0, parseInt(raw, 10) || 0));
} catch(e){}
fauLevelSlider.value = savedFauLevel;
applyFauLevel(savedFauLevel);
fauLevelSlider.addEventListener("input", e => {
  const level = parseInt(e.target.value, 10);
  applyFauLevel(level);
  try { localStorage.setItem(FAU_LEVEL_KEY, String(level)); } catch(e){}
});

document.getElementById("ownedSettingsBtn").addEventListener("click", () => { closeSettingsPanel(); openOwnedView(); });
document.getElementById("ownedBack").addEventListener("click", closeOwnedView);
document.addEventListener("keydown", e => { if (e.key === "Escape" && !ownedView.hidden) closeOwnedView(); });
document.getElementById("ownedOnlyToggle").addEventListener("change", e => {
  state.ownedOnly = e.target.checked;
  renderBoth();
  if (!pickerView.hidden){
    if (deckState.picker.tab === "ego") renderEgoPicker();
    else renderPicker();
  }
});

const tabSkillSet = document.getElementById("tabSkillSet");
const tabGift = document.getElementById("tabGift");
const tabEnemy = document.getElementById("tabEnemy");
const tabDealCalc = document.getElementById("tabDealCalc");
function showSearchView(){
  tabSearch.setAttribute("aria-pressed","true");
  tabDeck.setAttribute("aria-pressed","false");
  tabSkillSet.setAttribute("aria-pressed","false");
  tabGift.setAttribute("aria-pressed","false");
  tabEnemy.setAttribute("aria-pressed","false");
  tabDealCalc.setAttribute("aria-pressed","false");
  document.getElementById("searchView").hidden = false;
  document.getElementById("searchRow").hidden = false;
  document.getElementById("skillSetSearchRow").hidden = true;
  document.getElementById("giftSearchRow").hidden = true;
  document.getElementById("enemySearchRow").hidden = true;
  document.getElementById("searchFooter").hidden = false;
  document.getElementById("skillSetView").hidden = true;
  document.getElementById("giftView").hidden = true;
  document.getElementById("enemyView").hidden = true;
  document.getElementById("dealCalcView").hidden = true;
  document.getElementById("deckView").hidden = true;
  pickerView.hidden = true;
  ownedView.hidden = true;
  updateHeaderHeightVar();
}
function showSkillSetView(){
  tabSearch.setAttribute("aria-pressed","false");
  tabDeck.setAttribute("aria-pressed","false");
  tabSkillSet.setAttribute("aria-pressed","true");
  tabGift.setAttribute("aria-pressed","false");
  tabEnemy.setAttribute("aria-pressed","false");
  tabDealCalc.setAttribute("aria-pressed","false");
  document.getElementById("searchView").hidden = true;
  document.getElementById("searchRow").hidden = true;
  document.getElementById("skillSetSearchRow").hidden = false;
  document.getElementById("giftSearchRow").hidden = true;
  document.getElementById("enemySearchRow").hidden = true;
  document.getElementById("searchFooter").hidden = true;
  document.getElementById("skillSetView").hidden = false;
  document.getElementById("giftView").hidden = true;
  document.getElementById("enemyView").hidden = true;
  document.getElementById("dealCalcView").hidden = true;
  document.getElementById("deckView").hidden = true;
  pickerView.hidden = true;
  ownedView.hidden = true;
  updateHeaderHeightVar();
  setSkillSetSubTab(state.skillSetSubTab);
}
function showDeckView(){
  tabSearch.setAttribute("aria-pressed","false");
  tabDeck.setAttribute("aria-pressed","true");
  tabSkillSet.setAttribute("aria-pressed","false");
  tabGift.setAttribute("aria-pressed","false");
  tabEnemy.setAttribute("aria-pressed","false");
  tabDealCalc.setAttribute("aria-pressed","false");
  document.getElementById("searchView").hidden = true;
  document.getElementById("searchRow").hidden = true;
  document.getElementById("skillSetSearchRow").hidden = true;
  document.getElementById("giftSearchRow").hidden = true;
  document.getElementById("enemySearchRow").hidden = true;
  document.getElementById("searchFooter").hidden = true;
  document.getElementById("skillSetView").hidden = true;
  document.getElementById("giftView").hidden = true;
  document.getElementById("enemyView").hidden = true;
  document.getElementById("dealCalcView").hidden = true;
  document.getElementById("deckView").hidden = false;
  pickerView.hidden = true;
  ownedView.hidden = true;
  updateHeaderHeightVar();
  renderDeck();
}
function showGiftView(){
  tabSearch.setAttribute("aria-pressed","false");
  tabDeck.setAttribute("aria-pressed","false");
  tabSkillSet.setAttribute("aria-pressed","false");
  tabGift.setAttribute("aria-pressed","true");
  tabEnemy.setAttribute("aria-pressed","false");
  tabDealCalc.setAttribute("aria-pressed","false");
  document.getElementById("searchView").hidden = true;
  document.getElementById("searchRow").hidden = true;
  document.getElementById("skillSetSearchRow").hidden = true;
  document.getElementById("giftSearchRow").hidden = false;
  document.getElementById("enemySearchRow").hidden = true;
  document.getElementById("searchFooter").hidden = true;
  document.getElementById("skillSetView").hidden = true;
  document.getElementById("giftView").hidden = false;
  document.getElementById("enemyView").hidden = true;
  document.getElementById("dealCalcView").hidden = true;
  document.getElementById("deckView").hidden = true;
  pickerView.hidden = true;
  ownedView.hidden = true;
  updateHeaderHeightVar();
  renderGiftView();
}
function showEnemyView(){
  tabSearch.setAttribute("aria-pressed","false");
  tabDeck.setAttribute("aria-pressed","false");
  tabSkillSet.setAttribute("aria-pressed","false");
  tabGift.setAttribute("aria-pressed","false");
  tabEnemy.setAttribute("aria-pressed","true");
  tabDealCalc.setAttribute("aria-pressed","false");
  document.getElementById("searchView").hidden = true;
  document.getElementById("searchRow").hidden = true;
  document.getElementById("skillSetSearchRow").hidden = true;
  document.getElementById("giftSearchRow").hidden = true;
  document.getElementById("enemySearchRow").hidden = false;
  document.getElementById("searchFooter").hidden = true;
  document.getElementById("skillSetView").hidden = true;
  document.getElementById("giftView").hidden = true;
  document.getElementById("enemyView").hidden = false;
  document.getElementById("dealCalcView").hidden = true;
  document.getElementById("deckView").hidden = true;
  pickerView.hidden = true;
  ownedView.hidden = true;
  updateHeaderHeightVar();
  renderEnemyView();
}
function showDealCalcView(){
  tabSearch.setAttribute("aria-pressed","false");
  tabDeck.setAttribute("aria-pressed","false");
  tabSkillSet.setAttribute("aria-pressed","false");
  tabGift.setAttribute("aria-pressed","false");
  tabEnemy.setAttribute("aria-pressed","false");
  tabDealCalc.setAttribute("aria-pressed","true");
  document.getElementById("searchView").hidden = true;
  document.getElementById("searchRow").hidden = true;
  document.getElementById("skillSetSearchRow").hidden = true;
  document.getElementById("giftSearchRow").hidden = true;
  document.getElementById("enemySearchRow").hidden = true;
  document.getElementById("searchFooter").hidden = true;
  document.getElementById("skillSetView").hidden = true;
  document.getElementById("giftView").hidden = true;
  document.getElementById("enemyView").hidden = true;
  document.getElementById("dealCalcView").hidden = false;
  document.getElementById("deckView").hidden = true;
  pickerView.hidden = true;
  ownedView.hidden = true;
  updateHeaderHeightVar();
  renderDealCalcView();
}
tabSearch.addEventListener("click", showSearchView);
tabDeck.addEventListener("click", showDeckView);
tabSkillSet.addEventListener("click", showSkillSetView);
tabGift.addEventListener("click", showGiftView);
tabEnemy.addEventListener("click", showEnemyView);
tabDealCalc.addEventListener("click", showDealCalcView);

/* ---- 에고 기프트 ---- */
const GIFT_KEYWORDS = ["화상","출혈","진동","파열","침잠","충전","호흡","참격","관통","타격","범용"];
const GIFT_RANK_COLOR = {1:"#8a8f98", 2:"#3fa34d", 3:"#3b82c4", 4:"#8b5cf6", 5:"#d4a017", 6:"#c0392b"};
const giftState = { keyword: GIFT_KEYWORDS[0] };

function giftKeywordIconHTML(kw, size){
  if (kw === "범용") return `<span class="gift-kw-all"><span class="gift-kw-textbadge">ALL</span><img class="gift-kw-faust" src="${UI_ICON_DATA.universalFaust}" width="${size}" height="${size}" alt="" style="object-fit:contain;"></span>`;
  const src = KEYWORD_ICON_DATA[kw];
  return src
    ? `<img src="${src}" width="${size}" height="${size}" alt="" style="object-fit:contain;">`
    : `<span class="gift-kw-textbadge">${escapeHTML(kw)}</span>`;
}
function renderGiftKwTabs(){
  const wrap = document.getElementById("giftKwTabs");
  wrap.innerHTML = GIFT_KEYWORDS.map(kw =>
    `<button type="button" class="view-tab" data-kw="${escapeHTML(kw)}" aria-pressed="${kw === giftState.keyword}">${giftKeywordIconHTML(kw,15)}${escapeHTML(kw)}</button>`
  ).join("");
  wrap.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      giftState.keyword = btn.dataset.kw;
      renderGiftKwTabs();
      renderGiftGrid();
    });
  });
}
function giftMatchesQuery(g, q){
  if (!q) return true;
  const fields = nameOnlySearch ? [g.name, ...(g.aliases || [])] : [g.name, g.effect, g.english, ...(g.aliases || [])];
  const hay = fields.filter(Boolean).join(" ").toLowerCase();
  return hay.includes(q.toLowerCase());
}
function giftCardHTML(g){
  const color = GIFT_RANK_COLOR[g.rankNum] || "#8a8f98";
  const tags = [];
  if (g.cost != null) tags.push(`<span class="gift-tag gift-tag-cost">${g.cost.toLocaleString()} 코스트</span>`);
  if (!g.purchasable) tags.push(`<span class="gift-tag">구매불가</span>`);
  if (g.restriction) tags.push(`<span class="gift-tag gift-tag-warn">${escapeHTML(g.restriction)}</span>`);
  return `
    <div class="card gift-card" data-name="${escapeHTML(g.name)}">
      <div class="card-body">
        <div class="gift-card-head">
          ${g.icon ? `<img class="gift-card-icon" src="${g.icon}" alt="" width="36" height="36">` : ""}
          <span class="gift-rank-badge" style="background:${color}">${escapeHTML(g.rank)}</span>
          ${giftKeywordIconHTML(g.keyword, 18)}
          <span class="gift-card-name">${escapeHTML(g.name)}</span>
        </div>
        <div class="gift-card-effect">${escapeHTML(g.effect)}</div>
        <div class="gift-card-foot">${tags.join("")}</div>
      </div>
    </div>`;
}
function renderGiftGrid(){
  const q = document.getElementById("giftSearchInput").value.trim();
  const list = EGO_GIFT_DATA
    .filter(g => (q ? true : g.keyword === giftState.keyword) && giftMatchesQuery(g, q))
    .sort((a,b) => a.rankNum - b.rankNum || a.name.localeCompare(b.name, "ko"));
  document.getElementById("giftShownCount").textContent = list.length;
  const grid = document.getElementById("giftGrid");
  grid.innerHTML = list.map(giftCardHTML).join("");
  document.getElementById("giftEmptyState").hidden = list.length > 0;
  grid.querySelectorAll(".gift-card").forEach(el => {
    el.addEventListener("click", () => openGiftDetail(el.dataset.name));
  });
}
function renderGiftView(){
  renderGiftKwTabs();
  renderGiftGrid();
}
function giftLinkChipHTML(name){
  return `<button type="button" class="gift-link-chip" data-gift="${escapeHTML(name)}">${escapeHTML(name)}</button>`;
}
function openGiftDetail(name){
  const g = EGO_GIFT_DATA.find(x => x.name === name);
  if (!g) return;
  document.getElementById("giftDetailTitle").textContent = g.name;
  const rows = [];
  if (g.icon) rows.push(`<div class="detail-col-icon"><img class="gift-detail-icon" src="${g.icon}" alt="" width="72" height="72"></div>`);
  rows.push(`<div class="skill-tt-row"><span>등급</span><span>${escapeHTML(g.rank)}</span></div>`);
  rows.push(`<div class="skill-tt-row"><span>키워드</span><span>${giftKeywordIconHTML(g.keyword,16)} ${escapeHTML(g.keyword)}</span></div>`);
  if (g.cost != null) rows.push(`<div class="skill-tt-row"><span>코스트</span><span>${g.cost.toLocaleString()}${g.purchasable ? "" : " (구매불가)"}</span></div>`);
  if (g.restriction) rows.push(`<div class="skill-tt-row"><span>제한</span><span>${escapeHTML(g.restriction)}</span></div>`);
  if (g.aliases && g.aliases.length) rows.push(`<div class="skill-tt-row"><span>통칭</span><span>${g.aliases.map(escapeHTML).join(", ")}</span></div>`);
  if (g.english) rows.push(`<div class="skill-tt-row"><span>영문명</span><span>${escapeHTML(g.english)}</span></div>`);
  if (g.associated) rows.push(`<div class="skill-tt-row"><span>연관</span><span>${escapeHTML(g.associated)}</span></div>`);
  if (g.firstAppearance) rows.push(`<div class="skill-tt-row"><span>첫 등장</span><span>${escapeHTML(g.firstAppearance)}</span></div>`);
  if (g.upgradable) rows.push(`<div class="skill-tt-row"><span>강화</span><span>${escapeHTML(g.upgradable)}</span></div>`);
  if (g.recipe && g.recipe.length){
    const chips = g.recipe.map(giftLinkChipHTML).join(`<span class="gift-recipe-plus">+</span>`);
    rows.push(`<div class="skill-tt-row"><span>조합법</span><span class="gift-recipe-row">${chips}</span></div>`);
  }
  if (g.usedIn && g.usedIn.length){
    const chips = g.usedIn.map(giftLinkChipHTML).join("");
    rows.push(`<div class="skill-tt-row"><span>조합 재료로 사용됨</span><span class="gift-recipe-row">${chips}</span></div>`);
  }
  rows.push(`<div class="skill-tt-effect-block"><div class="skill-tt-coin-effect"><span>${linkifyKeywords(g.effect).replace(/\n/g,"<br>")}</span></div></div>`);
  (g.extraNotes || []).forEach(n => {
    rows.push(`<div class="skill-tt-effect-block"><div class="skill-tt-coin-effect"><span>${linkifyKeywords(n).replace(/\n/g,"<br>")}</span></div></div>`);
  });
  const body = document.getElementById("giftDetailBody");
  body.innerHTML = rows.join("");
  body.querySelectorAll(".gift-link-chip").forEach(el => {
    el.addEventListener("click", () => openGiftDetail(el.dataset.gift));
  });
  document.getElementById("giftDetailModal").hidden = false;
}
function closeGiftDetail(){ document.getElementById("giftDetailModal").hidden = true; }
document.getElementById("giftDetailClose").addEventListener("click", closeGiftDetail);
document.getElementById("giftDetailBackdrop").addEventListener("click", closeGiftDetail);
document.addEventListener("keydown", e => { if (e.key === "Escape" && !document.getElementById("giftDetailModal").hidden) closeGiftDetail(); });
document.getElementById("giftSearchInput").addEventListener("input", renderGiftGrid);
document.getElementById("giftClearSearch").addEventListener("click", () => {
  document.getElementById("giftSearchInput").value = "";
  renderGiftGrid();
});
document.getElementById("giftResetAll").addEventListener("click", () => {
  document.getElementById("giftSearchInput").value = "";
  giftState.keyword = GIFT_KEYWORDS[0];
  renderGiftView();
});

/* ---- 적 정보 ---- */
const ENEMY_CHAPTERS = [...new Set(ENEMY_DATA.slice().sort((a,b) => a.chapterNum - b.chapterNum).map(e => e.chapter))];
// "N장"과 "N장 집중 전투"는 나무위키에서도 같은 챕터의 하위 서브탭으로 존재하며
// (4~8장에만 있음, 그 외 챕터는 애초에 집중 전투 자체가 없음), 탭 목록에서는
// 베이스 챕터명만 최상위로 노출하고 집중 전투 여부는 서브탭으로 따로 표시한다.
const ENEMY_BASE_CHAPTERS = [...new Set(ENEMY_CHAPTERS.map(ch => ch.replace(/ 집중 전투$/, "")))];
function enemyFocusedChapter(base){
  const focused = `${base} 집중 전투`;
  return ENEMY_CHAPTERS.includes(focused) ? focused : null;
}
const enemyState = { base: ENEMY_BASE_CHAPTERS[0], mode: "일반" };
function enemyCurrentChapter(){
  return enemyState.mode === "집중 전투" ? enemyFocusedChapter(enemyState.base) : enemyState.base;
}
const RES_TIER_COLOR = {"약점":"#c0392b","취약":"#d9743a","보통":"#8a8f98","견딤":"#4a90c4","내성":"#2f6f4f","?":"#5c6066"};
const ATTACK_TYPE_KW = ["참격","관통","타격"];
const SIN_KW = ["분노","색욕","나태","탐식","우울","질투","오만"];

function resBadgeHTML(kw, tier){
  const color = RES_TIER_COLOR[tier] || "#5c6066";
  const iconSrc = KEYWORD_ICON_DATA[kw] || SIN_ICON_DATA[kw];
  return `<div class="res-badge" title="${escapeHTML(kw)}: ${escapeHTML(tier)}">
    ${iconSrc ? `<img src="${iconSrc}" width="16" height="16" alt="" style="object-fit:contain;">` : `<span>${escapeHTML(kw)}</span>`}
    <span class="res-badge-tier" style="color:${color}">${escapeHTML(tier)}</span>
  </div>`;
}
function renderEnemyChTabs(){
  const wrap = document.getElementById("enemyChTabs");
  wrap.innerHTML = ENEMY_BASE_CHAPTERS.map(base =>
    `<button type="button" class="view-tab" data-base="${escapeHTML(base)}" aria-pressed="${base === enemyState.base}">${escapeHTML(base)}</button>`
  ).join("");
  wrap.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      enemyState.base = btn.dataset.base;
      enemyState.mode = "일반";
      renderEnemyChTabs();
      renderEnemySubTabs();
      renderEnemyGrid();
    });
  });
}
function renderEnemySubTabs(){
  const wrap = document.getElementById("enemySubTabs");
  const focused = enemyFocusedChapter(enemyState.base);
  if (!focused){
    wrap.hidden = true;
    wrap.innerHTML = "";
    return;
  }
  wrap.hidden = false;
  wrap.innerHTML = ["일반", "집중 전투"].map(mode =>
    `<button type="button" class="view-tab" data-mode="${escapeHTML(mode)}" aria-pressed="${mode === enemyState.mode}">${escapeHTML(mode)}</button>`
  ).join("");
  wrap.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      enemyState.mode = btn.dataset.mode;
      renderEnemySubTabs();
      renderEnemyGrid();
    });
  });
}
function enemyMatchesQuery(e, q){
  if (!q) return true;
  return e.name.toLowerCase().includes(q.toLowerCase());
}
// 같은 개체(보스)가 여러 차례(페이즈/차전)에 걸쳐 등장하거나, 페이즈마다 모습이
// 바뀌는 경우(곤돌라/꿰뚫은 창/굳어진 꿈처럼 이름 자체가 달라지는 경우 포함)
// 카드 하나로 묶기 위한 식별자. "N페이즈"/"OO 2페이즈"처럼 이름 자체가 회차를
// 나타내는 경우, 또는 같은 챕터·그룹 내에 그런 회차 이름을 가진 형제가 있는
// 경우 모두 소속 그룹(부모 보스 이름) 기준으로 묶는다.
// "???"는 서로 다른 미공개 개체일 수 있으므로 절대 묶지 않는다.
const PHASE_NAME_RE = /(^|\s)\d+(페이즈|차전)$/;
const PHASE_GROUP_KEYS = new Set(
  ENEMY_DATA.filter(e => e.group && PHASE_NAME_RE.test(e.name)).map(e => `${e.chapter}|${e.group}`)
);
// role:"sub"(소환수/동반 개체 등 하위 개체)가 있는 그룹: 같은 챕터·그룹의 메인 적과 하위 개체를 카드 하나로 묶는다.
const SUB_GROUP_KEYS = new Set(
  ENEMY_DATA.filter(e => e.group && e.role === "sub").map(e => `${e.chapter}|${e.group}`)
);
function enemyGroupKey(e){ return e.group ? `${e.chapter}|${e.group}` : null; }
function enemyIdentity(e, idx){
  const groupKey = enemyGroupKey(e);
  if (groupKey && SUB_GROUP_KEYS.has(groupKey)) return groupKey;
  if (e.name === "???") return `__unique_${idx}`;
  if (PHASE_NAME_RE.test(e.name) || (groupKey && PHASE_GROUP_KEYS.has(groupKey))) return groupKey;
  return e.name;
}
// 하위 개체로 등장하지만, "같은 장 + 같은 전투 방식(일반/집중)"에 하위 개체가 아닌
// 독립된 개체로도 존재하는 경우만 찾는다 (chapter 문자열 자체가 "N장"/"N장 집중 전투"를
// 구분하므로 chapter 완전 일치가 곧 두 조건을 동시에 만족시킨다). "???"는 서로 다른
// 개체를 가리킬 수 있어 이름만으로 연결하지 않는다.
function enemyFindStandalone(e, myGroupKey, excludeIdxs){
  if (e.name === "???") return null;
  for (let i = 0; i < ENEMY_DATA.length; i++){
    if (excludeIdxs.includes(i)) continue;
    const x = ENEMY_DATA[i];
    if (x.name !== e.name) continue;
    if (x.chapter !== e.chapter) continue;
    if (x.role === "sub") continue;
    if (enemyGroupKey(x) === myGroupKey) continue;
    return i;
  }
  return null;
}
// 두 스킬셋이 사실상 동일한지 (이름·속성·공격유형·위력·코인위력·가중치 기준)
function enemySkillFingerprint(skills){
  return (skills || []).map(s => [s.name, s.sinAttribute, s.attackType, s.power, s.coinPower, s.attackWeight].join("|")).join("||");
}
function enemySkillsEqual(a, b){
  return enemySkillFingerprint(a) === enemySkillFingerprint(b);
}
// 하위 개체가 검색 시 독립된 카드로 표시될 자격이 있는지: 같은 장·같은 전투 방식에
// 하위 개체가 아닌 형태로도 등장하면서(=enemyFindStandalone), 그 개체와 스킬셋이
// 실제로 다른 경우만 별개의 개체로 취급해 별도 카드를 만든다. 그렇지 않으면(대응하는
// 독립 개체가 없거나, 있어도 스킬셋이 같으면) 원래 소속된 그룹 카드로만 표시한다.
function enemySubDeservesOwnCard(e, excludeIdxs){
  const idx = enemyFindStandalone(e, enemyGroupKey(e), excludeIdxs || []);
  if (idx == null) return false;
  return !enemySkillsEqual(e.skills, ENEMY_DATA[idx].skills);
}
function enemyGroupIdxsFor(idx){
  const key = enemyIdentity(ENEMY_DATA[idx], idx);
  const out = [];
  ENEMY_DATA.forEach((x, i) => { if (enemyIdentity(x, i) === key) out.push(i); });
  return out;
}
// 카드/상세 탭에서 메인 적(들)을 앞에, 하위 개체를 뒤에 (각각 원래 순서 유지)
function enemySortMainFirst(items){
  return items.filter(it => it.e.role !== "sub").concat(items.filter(it => it.e.role === "sub"));
}
function enemyTabLabel(e, all){
  if (e.role === "sub") return `하위 개체 - ${e.name}`;
  const mains = all.filter(x => x.role !== "sub");
  if (!e.phase || mains.length < 2) return e.name;
  const sameName = mains.filter(x => x.name === e.name).length > 1;
  return sameName ? `${e.name} ${e.phase}` : `${e.phase} - ${e.name}`;
}
// 카드/상세창 제목으로 쓸 이름. "1페이즈"처럼 그 자체로는 의미가 없는 회차성
// 이름이면 소속 그룹(보스 이름)을 대신 보여준다.
function enemyDisplayName(e){
  return (PHASE_NAME_RE.test(e.name) && e.group) ? e.group : e.name;
}
// "목록"은 나무위키 목차 구조상 남은 내부 표기일 뿐 실제 분류명이 아니므로 숨긴다.
function enemyGroupLabel(e){
  return (e.group && e.group !== "목록") ? e.group : null;
}
function enemyCardHTML(group){
  group = enemySortMainFirst(group);
  const e = group[0].e;
  const idxs = group.map(g => g.idx);
  const subCount = group.filter(g => g.e.role === "sub").length;
  const mainCount = group.length - subCount;
  const statRow = (e.hp != null) ? `<div class="enemy-stat-row">
      <span>HP ${escapeHTML(e.hp)}</span><span>속도 ${escapeHTML(e.speed || "?")}</span><span>방어 ${escapeHTML(e.defense || "?")}</span>
    </div>` : `<div class="enemy-stat-row enemy-stat-empty">스탯 정보 없음</div>`;
  const kwChips = (e.keywords || []).filter(k => k && k !== "-").map(k => `<span class="gift-tag">${escapeHTML(k)}</span>`).join("");
  const badges = [];
  if (subCount > 0){
    if (mainCount > 1) badges.push(`<span class="gift-tag gift-tag-cost">${mainCount}차전</span>`);
    badges.push(`<span class="gift-tag gift-tag-cost">하위 개체 ${subCount}</span>`);
  } else if (group.length > 1){
    badges.push(`<span class="gift-tag gift-tag-cost">${group.length}차전</span>`);
  }
  const img = e.image || (group.find(g => g.e.image) && group.find(g => g.e.image).e.image);
  const groupLabel = enemyGroupLabel(e);
  const isLoneSub = group.length === 1 && e.role === "sub";
  const tagText = isLoneSub
    ? `${e.chapter} · ${groupLabel || ""} 하위 개체`
    : `${e.chapter}${groupLabel ? " · " + groupLabel : ""}`;
  return `
    <div class="card enemy-card" data-idxs="${idxs.join(",")}">
      ${img ? `<img class="card-banner enemy-card-banner" src="${img}" alt="">` : ""}
      <div class="card-body">
        <div class="gift-card-head">
          <span class="gift-card-name">${escapeHTML(enemyDisplayName(e))}</span>
        </div>
        <div class="enemy-card-tag">${escapeHTML(tagText)}</div>
        ${statRow}
        <div class="gift-card-foot">${badges.join("")}${kwChips}</div>
      </div>
    </div>`;
}
function renderEnemyGrid(){
  const q = document.getElementById("enemySearchInput").value.trim();
  const filtered = ENEMY_DATA
    .map((e, idx) => ({e, idx}))
    .filter(({e}) => (q ? true : e.chapter === enemyCurrentChapter()) && enemyMatchesQuery(e, q));
  // 검색 중: 메인 적이 검색어와 맞으면 그 그룹 전체(메인+하위 개체)를 한 카드로 보여준다.
  // 하위 개체만 맞은 경우, 그 하위 개체가 "같은 장·같은 전투 방식에 하위 개체가 아닌
  // 형태로도 등장 + 스킬셋이 다름"을 만족해 독립 카드 자격이 있을 때만 따로 카드로
  // 보여주고, 그렇지 않으면(자격이 없으면) 소속 그룹 전체를 메인 히트와 동일하게 끌어온다.
  const mainHitKeys = new Set();
  const loneSubIdx = new Set();
  if (q){
    filtered.forEach(({e}) => {
      const k = enemyGroupKey(e);
      if (k && SUB_GROUP_KEYS.has(k) && e.role !== "sub") mainHitKeys.add(k);
    });
    filtered.forEach(({e}) => {
      const k = enemyGroupKey(e);
      if (e.role === "sub" && k && SUB_GROUP_KEYS.has(k) && !mainHitKeys.has(k) && !enemySubDeservesOwnCard(e, [])){
        mainHitKeys.add(k);
      }
    });
    const have = new Set(filtered.map(it => it.idx));
    ENEMY_DATA.forEach((e, idx) => {
      const k = enemyGroupKey(e);
      if (k && mainHitKeys.has(k) && !have.has(idx)) filtered.push({e, idx});
    });
    filtered.sort((a, b) => a.idx - b.idx);
    filtered.forEach(({e, idx}) => {
      const k = enemyGroupKey(e);
      if (e.role === "sub" && k && SUB_GROUP_KEYS.has(k) && !mainHitKeys.has(k)) loneSubIdx.add(idx);
    });
  }
  const groupMap = new Map();
  filtered.forEach(item => {
    const key = loneSubIdx.has(item.idx) ? `__sub_${item.idx}` : enemyIdentity(item.e, item.idx);
    if (!groupMap.has(key)) groupMap.set(key, []);
    groupMap.get(key).push(item);
  });
  const groups = [...groupMap.values()];
  document.getElementById("enemyShownCount").textContent = groups.length;
  const grid = document.getElementById("enemyGrid");
  grid.innerHTML = groups.map(enemyCardHTML).join("");
  document.getElementById("enemyEmptyState").hidden = groups.length > 0;
  grid.querySelectorAll(".enemy-card").forEach(el => {
    el.addEventListener("click", () => openEnemyDetail(el.dataset.idxs.split(",").map(Number)));
  });
}
function renderEnemyView(){
  renderEnemyChTabs();
  renderEnemySubTabs();
  renderEnemyGrid();
}
function enemySkillRowHTML(s){
  const rows = [`<div class="skill-tt-name">${escapeHTML(s.name)}</div>`];
  const bits = [];
  if (s.sinAttribute) bits.push(`<span class="skill-tt-row"><span>속성</span><span>${sinBadgeSVG(s.sinAttribute,14)}${escapeHTML(s.sinAttribute)}</span></span>`);
  if (s.attackType) bits.push(`<div class="skill-tt-row"><span>공격 유형</span><span>${escapeHTML(s.attackType)}</span></div>`);
  if (s.power) bits.push(`<div class="skill-tt-row"><span>위력</span><span>${escapeHTML(s.power)}</span></div>`);
  if (s.coinPower) bits.push(`<div class="skill-tt-row"><span>코인 위력</span><span>${escapeHTML(s.coinPower)}</span></div>`);
  if (s.attackWeight) bits.push(`<div class="skill-tt-row"><span>공격 가중치</span><span>${escapeHTML(s.attackWeight)}</span></div>`);
  const body = `<div class="enemy-skill-text">${rows.join("")}${bits.join("")}</div>`;
  const content = s.icon
    ? `<div class="enemy-skill-row-inline">${skillFrameHTML(s.sinAttribute, 44, 1, s.icon)}${body}</div>`
    : body;
  return `<div class="skill-tt-special-block">${content}</div>`;
}
function enemyDetailBodyHTML(e, curIdxs){
  const rows = [];
  if (e.image) rows.push(`<img class="enemy-detail-image" src="${e.image}" alt="">`);
  const groupLabel = enemyGroupLabel(e);
  if (e.role === "sub"){
    const standaloneIdx = enemyFindStandalone(e, enemyGroupKey(e), curIdxs || []);
    const jumpLink = (standaloneIdx != null && !enemySkillsEqual(e.skills, ENEMY_DATA[standaloneIdx].skills))
      ? `<button type="button" class="gift-link-chip" data-jump-idx="${standaloneIdx}">개별 카드로 보기</button>` : "";
    rows.push(`<div class="skill-tt-row"><span>소속</span><span>${escapeHTML(groupLabel || "")}${e.phase ? ` (${escapeHTML(e.phase)} 등장)` : ""}${jumpLink}</span></div>`);
  } else {
    if (groupLabel) rows.push(`<div class="skill-tt-row"><span>분류</span><span>${escapeHTML(groupLabel)}</span></div>`);
    if (e.phase) rows.push(`<div class="skill-tt-row"><span>페이즈</span><span>${escapeHTML(e.phase)}</span></div>`);
  }
  if (e.hp != null){
    rows.push(`<div class="skill-tt-row"><span>HP</span><span>${escapeHTML(e.hp)}</span></div>`);
    rows.push(`<div class="skill-tt-row"><span>속도</span><span>${escapeHTML(e.speed || "?")}</span></div>`);
    rows.push(`<div class="skill-tt-row"><span>방어력</span><span>${escapeHTML(e.defense || "?")}</span></div>`);
  }
  if (e.staggerThreshold) rows.push(`<div class="skill-tt-row"><span>흐트러짐 구간</span><span>${escapeHTML(e.staggerThreshold)}</span></div>`);
  if (e.bodyParts) rows.push(`<div class="skill-tt-row"><span>부위</span><span>${escapeHTML(e.bodyParts)}</span></div>`);
  if (e.ego) rows.push(`<div class="skill-tt-row"><span>E.G.O</span><span>${escapeHTML(e.ego)}</span></div>`);
  if (e.egoGift) rows.push(`<div class="skill-tt-row"><span>E.G.O 기프트</span><span>${escapeHTML(e.egoGift)}</span></div>`);
  if (e.resistances){
    const badges = [...ATTACK_TYPE_KW, ...SIN_KW].filter(k => e.resistances[k]).map(k => resBadgeHTML(k, e.resistances[k])).join("");
    rows.push(`<div class="skill-tt-effect-block"><div class="detail-col-label">내성</div><div class="res-badge-grid">${badges}</div></div>`);
  }
  const kwList = (e.keywords || []).filter(k => k && k !== "-");
  if (kwList.length) rows.push(`<div class="skill-tt-row"><span>키워드</span><span>${kwList.map(escapeHTML).join(", ")}</span></div>`);
  if (e.panicType && e.panicType.type){
    const p = e.panicType;
    const detail = Object.keys(p).filter(k => k !== "type" && p[k] && p[k] !== "-").map(k => `${escapeHTML(k)} ${escapeHTML(p[k])}`).join(" / ");
    rows.push(`<div class="skill-tt-row"><span>패닉 유형</span><span>${escapeHTML(p.type)}${detail ? " — " + detail : ""}</span></div>`);
  }
  if (e.passives && e.passives.length){
    const passiveHTML = e.passives.map(p => {
      if (typeof p === "string") return `<div class="skill-tt-effect-block"><div class="skill-tt-coin-effect"><span>${escapeHTML(p)}</span></div></div>`;
      const label = p.name ? `<div class="skill-tt-name">${escapeHTML(p.name)}</div>` : "";
      return `<div class="skill-tt-special-block">${label}<div class="skill-tt-effect-block"><div class="skill-tt-coin-effect"><span>${escapeHTML(p.effect || "")}</span></div></div></div>`;
    }).join("");
    rows.push(`<div class="detail-passive-section"><div class="detail-col-label">패시브</div>${passiveHTML}</div>`);
  }
  if (e.skills && e.skills.length){
    rows.push(`<div class="detail-passive-section"><div class="detail-col-label">스킬</div>${e.skills.map(enemySkillRowHTML).join("")}</div>`);
  }
  if (e.skillIcons && e.skillIcons.length){
    const icons = e.skillIcons.map(s =>
      `<img class="enemy-skill-icon" src="${s.icon}" alt="${escapeHTML(s.alt)}" title="${escapeHTML(s.alt)}" width="48" height="48">`
    ).join("");
    rows.push(`<div class="detail-passive-section"><div class="detail-col-label">스킬 아이콘</div><div class="enemy-skill-icon-grid">${icons}</div></div>`);
  }
  return rows.join("");
}
let enemyDetailState = { idxs: [], round: 0 };
let enemyDetailHistory = [];
function renderEnemyDetailBody(){
  const idx = enemyDetailState.idxs[enemyDetailState.round];
  const e = ENEMY_DATA[idx];
  const body = document.getElementById("enemyDetailBody");
  body.innerHTML = enemyDetailBodyHTML(e, enemyDetailState.idxs);
  const jumpBtn = body.querySelector("[data-jump-idx]");
  if (jumpBtn){
    jumpBtn.addEventListener("click", () => {
      enemyDetailHistory.push({idxs: enemyDetailState.idxs, round: enemyDetailState.round});
      renderEnemyDetail(enemyGroupIdxsFor(Number(jumpBtn.dataset.jumpIdx)));
    });
  }
}
function renderEnemyDetail(idxs, initialRound){
  let list = Array.isArray(idxs) ? idxs : [idxs];
  list = enemySortMainFirst(list.map(idx => ({e: ENEMY_DATA[idx], idx}))).map(it => it.idx);
  const first = ENEMY_DATA[list[0]];
  if (!first) return;
  enemyDetailState = { idxs: list, round: initialRound || 0 };
  document.getElementById("enemyDetailTitle").textContent = `${enemyDisplayName(first)} (${first.chapter})`;
  document.getElementById("enemyDetailBack").hidden = enemyDetailHistory.length === 0;
  const roundTabsWrap = document.getElementById("enemyDetailRoundTabs");
  if (list.length > 1){
    roundTabsWrap.hidden = false;
    const all = list.map(idx => ENEMY_DATA[idx]);
    let labels = all.map(e => enemyTabLabel(e, all));
    if (new Set(labels).size !== labels.length) labels = labels.map((l, i) => `${i+1}차전`);
    roundTabsWrap.innerHTML = list.map((idx, i) =>
      `<button type="button" class="view-tab" data-round="${i}" aria-pressed="${i===enemyDetailState.round}">${escapeHTML(labels[i])}</button>`
    ).join("");
    roundTabsWrap.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", () => {
        enemyDetailState.round = Number(btn.dataset.round);
        roundTabsWrap.querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", String(b === btn)));
        renderEnemyDetailBody();
      });
    });
  } else {
    roundTabsWrap.hidden = true;
    roundTabsWrap.innerHTML = "";
  }
  renderEnemyDetailBody();
  document.getElementById("enemyDetailModal").hidden = false;
}
function openEnemyDetail(idxs){
  enemyDetailHistory = [];
  renderEnemyDetail(idxs);
}
function enemyDetailGoBack(){
  const prev = enemyDetailHistory.pop();
  if (!prev) return;
  renderEnemyDetail(prev.idxs, prev.round);
}
function closeEnemyDetail(){ document.getElementById("enemyDetailModal").hidden = true; enemyDetailHistory = []; }
document.getElementById("enemyDetailBack").addEventListener("click", enemyDetailGoBack);
document.getElementById("enemyDetailClose").addEventListener("click", closeEnemyDetail);
document.getElementById("enemyDetailBackdrop").addEventListener("click", closeEnemyDetail);
document.addEventListener("keydown", e => { if (e.key === "Escape" && !document.getElementById("enemyDetailModal").hidden) closeEnemyDetail(); });
document.getElementById("enemySearchInput").addEventListener("input", renderEnemyGrid);
document.getElementById("enemyClearSearch").addEventListener("click", () => {
  document.getElementById("enemySearchInput").value = "";
  renderEnemyGrid();
});
document.getElementById("enemyResetAll").addEventListener("click", () => {
  document.getElementById("enemySearchInput").value = "";
  enemyState.base = ENEMY_BASE_CHAPTERS[0];
  enemyState.mode = "일반";
  renderEnemyView();
});

/* ---- 딜뽕 계산기 ----
   데미지 = 코인위력 × max(1+Ms, 0) × (1+Md)
   코인위력(전부 앞면) = 기본위력×코인수 + 코인위력×(1+2+...+코인수)  (n번째 코인은 코인위력×n만큼 누적)
   Ms(정적, 서로 덧셈) = 죄종내성(A) + 속성내성(B, 흐트러짐 시 덮어씀) + 레벨차(C=x/(|x|+25)) + 합 보너스(D=0.03×라운드) + 치명타(E=0.2)
   Md(동적, 서로 덧셈) = 자신 피해량 증감(G) + 대상 취약·보호(H)
   출처: blog.limbus.wiki/docs/damage_formula (게임 코드 BattleUnitModel::GiveAttackDamage 기반) — 2026-09-29 조사.
   기프트/패시브 개별 조건부 효과는 "기타 보정치" 수동 입력으로 반영 (자동 파싱은 순차 확장 예정).
   기본위력·코인위력·코인수·공격레벨은 인격/레벨 선택에서 항상 파생시키며 사용자가 직접 입력하지 않는다. */
const DEALCALC_TIER_MULT = {"약점":2.0, "취약":1.5, "보통":1.0, "견딤":0.75, "내성":0.5};
const DEALCALC_SELF_KEYWORDS = ["화상","출혈","진동","파열","침잠","충전","호흡"];
const dealcalcState = {
  sinner: null, identity: null, selId: null, skillOpts: [],
  party: {}, active: null, memberSettings: {}, egoLevel: {},
  enemyIdxs: new Set(), selfKw: {}, extraKw: [], targetKw: {}, targetExtraKw: [], equippedGifts: [], giftTier: {},
};
// 기프트 effect 텍스트를 "기본 효과/+/++" 단계로 분리 (없으면 단일 단계로 취급)
function dealcalcGiftEffectTiers(effectText){
  const lines = String(effectText || "").split("\n");
  const headers = new Set(["기본 효과", "+", "++"]);
  if (!headers.has(lines[0])) return [{label: null, text: effectText || ""}];
  const tiers = [];
  let cur = null;
  lines.forEach(line => {
    if (headers.has(line)){
      if (cur) tiers.push(cur);
      cur = {label: line, text: []};
    } else if (cur){
      cur.text.push(line);
    }
  });
  if (cur) tiers.push(cur);
  return tiers.map(t => ({label: t.label, text: t.text.join("\n")}));
}
function dealcalcHasWealthGift(){ return dealcalcState.equippedGifts.includes("부"); }
// 합성 기프트 규칙(크리에이티브): 재료로 쓴 기프트는 다시 얻을 수 없으므로 완성품과 재료를
// 동시에 가질 수 없고, 재료가 겹치는 두 합성 기프트도 함께 만들 수 없다. 합성 재료가 또 합성품이면
// 그 재료까지 연쇄적으로 소모된 것으로 본다. 단, 달의 기억의 재료는 다시 획득 가능하므로 예외.
const DEALCALC_GIFT_BY_NAME = new Map(EGO_GIFT_DATA.map(g => [g.name, g]));
const DEALCALC_REACQUIRABLE_RECIPES = new Set(["달의 기억"]);
const dealcalcConsumedCache = new Map();
function dealcalcGiftConsumed(name, depth = 0){
  if (dealcalcConsumedCache.has(name)) return dealcalcConsumedCache.get(name);
  const out = new Set();
  const g = DEALCALC_GIFT_BY_NAME.get(name);
  if (g && g.recipe && !DEALCALC_REACQUIRABLE_RECIPES.has(name) && depth < 8){
    g.recipe.forEach(i => {
      out.add(i);
      dealcalcGiftConsumed(i, depth + 1).forEach(x => out.add(x));
    });
  }
  dealcalcConsumedCache.set(name, out);
  return out;
}
function dealcalcGiftConflictReason(name, equipped){
  const mine = dealcalcGiftConsumed(name);
  for (const other of equipped){
    if (other === name) continue;
    const theirs = dealcalcGiftConsumed(other);
    if (theirs.has(name)) return `'${other}' 제작에 재료로 소모되어 다시 얻을 수 없음`;
    if (mine.has(other)) return `만들 때 '${other}'를 재료로 소모함`;
    const shared = [...mine].find(x => theirs.has(x));
    if (shared) return `'${other}' 기프트와 재료('${shared}')가 겹쳐 함께 만들 수 없음`;
  }
  return null;
}
function dealcalcA(x){
  if (x < 0) return -0.5;
  if (x < 1) return (x - 1) / 2;
  return x - 1;
}
function dealcalcLevelAdv(atk, def){
  const x = atk - def;
  return x / (Math.abs(x) + 25);
}
function dealcalcTri(n){ return n > 0 ? n * (n + 1) / 2 : 0; }
// fromIdx~toIdx번째 코인들(1-based)의 위력 합
function dealcalcCoinRangeTotal(power, coinPower, fromIdx, toIdx){
  if (toIdx < fromIdx) return 0;
  const count = toIdx - fromIdx + 1;
  return power * count + coinPower * (dealcalcTri(toIdx) - dealcalcTri(fromIdx - 1));
}
function dealcalcBugMode(){ return document.getElementById("dealCalcBugMode").checked; }
function dealcalcTierSelectHTML(){
  const bug = dealcalcBugMode();
  let html = Object.keys(DEALCALC_TIER_MULT).map(t => `<option value="${t}">${escapeHTML(t)} (${DEALCALC_TIER_MULT[t]}x)</option>`).join("");
  if (bug) html += `<option value="custom">직접 입력(배율)</option>`;
  return html;
}
function dealcalcRefreshTierSelects(){
  const sinSel = document.getElementById("dcSinRes");
  const typeSel = document.getElementById("dcTypeRes");
  const sinPrev = sinSel.value || "보통";
  const typePrev = typeSel.value || "보통";
  sinSel.innerHTML = dealcalcTierSelectHTML();
  typeSel.innerHTML = dealcalcTierSelectHTML();
  sinSel.value = [...sinSel.options].some(o => o.value === sinPrev) ? sinPrev : "보통";
  typeSel.value = [...typeSel.options].some(o => o.value === typePrev) ? typePrev : "보통";
  dealcalcSyncCustomInputs();
}
function dealcalcSyncCustomInputs(){
  document.getElementById("dcSinResCustom").hidden = document.getElementById("dcSinRes").value !== "custom";
  document.getElementById("dcTypeResCustom").hidden = document.getElementById("dcTypeRes").value !== "custom";
}
function dealcalcTierValue(selectId, customId){
  const sel = document.getElementById(selectId);
  if (sel.value === "custom") return Number(document.getElementById(customId).value) || 1;
  return DEALCALC_TIER_MULT[sel.value] != null ? DEALCALC_TIER_MULT[sel.value] : 1;
}
function dealcalcParseLead(str){
  const m = String(str == null ? "" : str).match(/-?\d+/);
  return m ? Number(m[0]) : 0;
}
function dealcalcSkillSin(sinner, identity, skillKey){
  const prof = IDENTITY_SKILL_PROFILE[`${sinner}|${identity}`];
  if (!prof) return null;
  if (skillKey === "defense") return (prof.defense && prof.defense[0] && prof.defense[0].sin) || null;
  const idx = {skill1:0, skill2:1, skill3:2}[skillKey];
  return (prof.skills[idx] && prof.skills[idx].sin) || null;
}
// 수치는 게임 static data(IDENTITY_UPTIE, sync_data.js)의 해당 동기화 단계 값을 우선 사용하고,
// 없으면 나무위키에서 긁은 4단계 수치로 대신한다. 코인 효과 문구는 4단계 기준 텍스트뿐이라,
// 해당 단계의 효과가 4단계와 다르면 fxNote로 표시한다.
// 수비 스킬은 반격(COUNTER)만 데미지를 준다. 게임 데이터가 없는 경우에만 이름에 "반격"이
// 들어가는지로 추정한다.
function dealcalcTierValues(t, fallback){
  if (!t) return fallback;
  return {power: t.p, coin: t.c, coinCount: Math.max(1, t.n || 1), lvCorr: t.lc || 0, sin: t.s || null, fxNote: !!t.fx};
}
function dealcalcBuildSkillOptions(sinner, identity, tier = 4){
  if (!sinner || !identity) return [];
  const key = `${sinner}|${identity}`;
  const detail = IDENTITY_SKILL_DETAIL[key];
  const up = (typeof IDENTITY_UPTIE !== "undefined") ? IDENTITY_UPTIE[key] : null;
  const specialsAll = IDENTITY_SPECIAL_SKILLS[key] || [];
  const slotDefs = [["skill1","스킬1"], ["skill2","스킬2"], ["skill3","스킬3"], ["defense","수비"]];
  const defenseDealsDamage = up ? up.dt === "COUNTER" : !!(detail && detail.defense && /반격/.test(detail.defense.name || ""));
  const out = [];
  slotDefs.forEach(([slot, label], i) => {
    const baseData = slot === "defense" ? (detail && detail.defense) : (detail && detail.skills && detail.skills[i]);
    if (baseData && baseData.name){
      const tiers = up ? (slot === "defense" ? up.df : up.sk[i]) : null;
      const v = dealcalcTierValues(tiers && tiers[tier - 1], {
        power: dealcalcParseLead(baseData.power), coin: dealcalcParseLead(baseData.coin),
        coinCount: Math.max(1, Number(baseData.coinCount) || 1), lvCorr: 0,
        sin: dealcalcSkillSin(sinner, identity, slot), fxNote: false,
      });
      out.push({
        id: `${slot}|base`, slotKey: slot, tag: label, kind: "base", name: baseData.name,
        ...v, sin: v.sin || (slot === "defense" ? null : dealcalcSkillSin(sinner, identity, slot)),
        coinEffects: baseData.coinEffects || null,
        dealsDamage: slot === "defense" ? defenseDealsDamage : true,
      });
    }
    specialsAll.filter(s => s.attachTo === slot).forEach((s, si) => {
      const keysLen = s.coinEffects ? Object.keys(s.coinEffects).length : 0;
      const spIdx = specialsAll.indexOf(s);
      const sp = up && up.sp ? up.sp[`${slot}|${spIdx}`] : null;
      const v = dealcalcTierValues(sp && sp.t[tier - 1], {
        power: dealcalcParseLead(s.power), coin: dealcalcParseLead(s.coin),
        coinCount: Math.max(1, Number(s.coinCount) || 0, keysLen), lvCorr: 0, sin: s.sin, fxNote: false,
      });
      out.push({
        id: `${slot}|special${si}`, slotKey: slot, tag: `${label} 강화`, kind: "special", name: s.name,
        ...v, sin: v.sin || s.sin,
        coinEffects: s.coinEffects || null, refNote: s.refNote,
        dealsDamage: slot === "defense" ? (sp && sp.d ? sp.d === "COUNTER" : defenseDealsDamage) : true,
      });
    });
  });
  return out;
}
const DEALCALC_EGO_GRADE_ORDER = ["ZAYIN","TETH","HE","WAW","ALEPH"];
const DEALCALC_MAX_SLOTS = 3;
function dealcalcBuildEgoOptions(sinner){
  const out = [];
  Object.keys(EGO_DATA)
    .filter(slug => EGO_DATA[slug].sinner === sinner && EGO_SKILL_DETAIL[slug])
    .sort((a, b) => DEALCALC_EGO_GRADE_ORDER.indexOf(EGO_DATA[a].grade) - DEALCALC_EGO_GRADE_ORDER.indexOf(EGO_DATA[b].grade))
    .forEach(slug => {
      const meta = EGO_DATA[slug];
      const det = EGO_SKILL_DETAIL[slug];
      const egoName = meta.title.endsWith(` ${sinner}`) ? meta.title.slice(0, -(sinner.length + 1)) : meta.title;
      const ts = (typeof EGO_THREADSPIN !== "undefined") ? EGO_THREADSPIN[slug] : null;
      const level = dealcalcEgoLevel(slug);
      [["awakening", "각성", "a"], ["corrosion", "침식", "c"]].forEach(([k, lbl, tk]) => {
        const s = det[k];
        if (!s) return;
        // 게임 데이터가 없으면, 효과가 있는 코인만 번호로 기록된 나무위키 데이터에서 가장 큰 코인 번호를 코인 수로 추정
        const keys = s.coinEffects ? Object.keys(s.coinEffects).map(Number).filter(n => n > 0) : [];
        const v = dealcalcTierValues(ts && ts[tk] && ts[tk][level - 1], {
          power: dealcalcParseLead(s.power), coin: dealcalcParseLead(s.coin),
          coinCount: Math.max(1, ...keys), lvCorr: 0, sin: s.sin, fxNote: false,
        });
        out.push({
          id: `ego|${slug}|${k}`, slotKey: "ego", tag: `E.G.O ${lbl} · ${meta.grade}`, kind: "ego", egoSlug: slug,
          name: k === "corrosion" ? `${egoName} (침식)` : egoName,
          ...v, sin: v.sin || s.sin,
          coinEffects: s.coinEffects || null, dealsDamage: true,
        });
      });
    });
  return out;
}
// E.G.O 해석 단계: 기본값은 EGO_SKILL_DETAIL 텍스트가 기준으로 삼는 단계(대부분 4), 최대 5(해석사슬)
function dealcalcEgoMaxLevel(slug){
  const ts = (typeof EGO_THREADSPIN !== "undefined") ? EGO_THREADSPIN[slug] : null;
  return ts ? ts.max : 4;
}
function dealcalcEgoLevel(slug){
  const ts = (typeof EGO_THREADSPIN !== "undefined") ? EGO_THREADSPIN[slug] : null;
  const def = ts ? ts.txt : 4;
  const v = dealcalcState.egoLevel[slug];
  return Math.max(1, Math.min(dealcalcEgoMaxLevel(slug), v || def));
}
function dealcalcSettings(sinner){
  if (!dealcalcState.memberSettings[sinner]) dealcalcState.memberSettings[sinner] = {level: 60, sync: 4};
  return dealcalcState.memberSettings[sinner];
}
// 3스킬·강화(EGO 부식) 스킬은 동기화 3단계부터 해금 — 인격 스킬 수치 자체는 현재 4단계 데이터 기준.
function dealcalcSlotOptions(sinner, identity){
  const tier = dealcalcSettings(sinner).sync;
  const base = dealcalcBuildSkillOptions(sinner, identity, tier);
  const gated = tier >= 3 ? base : base.filter(o => o.slotKey !== "skill3" && o.kind !== "special");
  return gated.concat(dealcalcBuildEgoOptions(sinner));
}
function dealcalcMember(sinner){ return dealcalcState.party[sinner] || null; }
function dealcalcPartySinners(){ return SINNER_ORDER.filter(sn => dealcalcState.party[sn]); }
// 편성 멤버의 슬롯 중 현재 인격/동기화에서 쓸 수 없게 된 선택은 첫 번째 선택지로 되돌린다
function dealcalcNormalizeSlots(sinner){
  const m = dealcalcMember(sinner);
  if (!m) return;
  const opts = dealcalcSlotOptions(sinner, m.identity);
  m.slots = m.slots.map(id => opts.some(o => o.id === id) ? id : (opts[0] ? opts[0].id : null));
}
function dealcalcActiveMember(){
  const a = dealcalcState.active;
  return a ? dealcalcMember(a.sinner) : null;
}
// "편집 중"(dealcalcState.sinner/identity: 수감자 스위치·인격 그리드·스킬 바가 가리키는 대상)과
// "분석 중"(dealcalcState.active: 데미지를 계산할 슬롯)은 분리된다. 편성 안 된 수감자를 둘러보는
// 동안에도 분석 중인 슬롯은 그대로 유지된다.
function dealcalcSyncSkillOpts(){
  dealcalcState.skillOpts = dealcalcSlotOptions(dealcalcState.sinner, dealcalcState.identity);
  const a = dealcalcState.active, m = dealcalcActiveMember();
  dealcalcState.selId = (a && m && a.sinner === dealcalcState.sinner) ? (m.slots[a.idx] || null) : null;
}
function dealcalcSelectedOption(){
  const a = dealcalcState.active, m = dealcalcActiveMember();
  if (!a || !m) return null;
  const id = m.slots[a.idx];
  return dealcalcSlotOptions(a.sinner, m.identity).find(o => o.id === id) || null;
}
// 데미지를 계산하는 공격자(분석 중 슬롯의 인격). 슬롯이 없으면 편집 중인 인격으로 대신한다.
function dealcalcAttacker(){
  const a = dealcalcState.active, m = dealcalcActiveMember();
  return (a && m) ? {sinner: a.sinner, identity: m.identity} : {sinner: dealcalcState.sinner, identity: dealcalcState.identity};
}
function dealcalcEgoUsedElsewhere(sinner, exceptIdx){
  const m = dealcalcMember(sinner);
  return !!(m && m.slots.some((id, i) => i !== exceptIdx && id && id.startsWith("ego|")));
}
function dealcalcRefreshAll(){
  dealcalcSyncSkillOpts();
  dealcalcRenderSinnerSwitch();
  dealcalcRenderIdentityGrid();
  dealcalcRenderSlotCount();
  dealcalcRenderSlotBar();
  dealcalcRenderSkillBar();
  dealcalcRenderSkillDetail();
  dealcalcRenderMemberSettings();
  dealcalcRenderSelfKwGrid();
  dealcalcRenderTargetKwGrid();
  renderDealCalcView();
}
function dealcalcRenderMemberSettings(){
  const st = dealcalcSettings(dealcalcState.sinner);
  document.getElementById("dcLevel").value = st.level;
  document.getElementById("dcSync").value = String(st.sync);
}
function dealcalcSetSlotCount(sinner, n){
  n = Math.max(0, Math.min(DEALCALC_MAX_SLOTS, n));
  if (n === 0){
    delete dealcalcState.party[sinner];
    if (dealcalcState.active && dealcalcState.active.sinner === sinner){
      const first = dealcalcPartySinners()[0];
      dealcalcState.active = first ? {sinner: first, idx: 0} : null;
    }
    return;
  }
  let m = dealcalcMember(sinner);
  if (!m) m = dealcalcState.party[sinner] = {identity: dealcalcState.identity, slots: []};
  const prev = m.slots.length;
  const opts = dealcalcSlotOptions(sinner, m.identity);
  while (m.slots.length < n) m.slots.push(opts[0] ? opts[0].id : null);
  m.slots.length = n;
  const a = dealcalcState.active;
  // 슬롯을 늘리면 새로 생긴 슬롯을 바로 편집할 수 있게 활성화
  if (n > prev || !a || a.sinner !== sinner || a.idx >= n) dealcalcState.active = {sinner, idx: n - 1};
}
function dealcalcRenderSlotCount(){
  const box = document.getElementById("dcSlotCount");
  const m = dealcalcMember(dealcalcState.sinner);
  const n = m ? m.slots.length : 0;
  box.innerHTML = `<span class="dealcalc-slotcount-label">${escapeHTML(dealcalcState.sinner)} 슬롯 수</span>
    <button type="button" class="skill-count-btn" data-slot-delta="-1"${n <= 0 ? " disabled" : ""}>−</button>
    <span class="skill-count-value">${n}</span>
    <button type="button" class="skill-count-btn" data-slot-delta="1"${n >= DEALCALC_MAX_SLOTS ? " disabled" : ""}>+</button>
    ${n === 0 ? `<span class="dealcalc-note">편성 안 됨 — 아래 스킬을 누르면 슬롯 1개로 편성됩니다</span>` : ""}`;
  box.querySelectorAll("[data-slot-delta]").forEach(btn => {
    btn.addEventListener("click", () => {
      dealcalcSetSlotCount(dealcalcState.sinner, n + Number(btn.dataset.slotDelta));
      dealcalcRefreshAll();
    });
  });
}
function dealcalcRenderSlotBar(){
  const bar = document.getElementById("dcSlotBar");
  const sinners = dealcalcPartySinners();
  if (!sinners.length){
    bar.innerHTML = `<span class="dealcalc-note">편성된 슬롯이 없습니다. 아래에서 수감자·인격을 고르고 슬롯 수를 늘리거나 스킬을 눌러 편성하세요.</span>`;
    return;
  }
  const a = dealcalcState.active;
  bar.innerHTML = sinners.map(sn => {
    const m = dealcalcMember(sn);
    const opts = dealcalcSlotOptions(sn, m.identity);
    return m.slots.map((id, i) => {
      const o = opts.find(x => x.id === id);
      const isActive = a && a.sinner === sn && a.idx === i;
      const sinIcon = o && o.sin ? (SIN_ICON_DATA[o.sin] || "") : "";
      return `<button type="button" class="dealcalc-turn-slot${isActive ? " is-active" : ""}${o && o.kind === "ego" ? " is-ego" : ""}" data-slot-sinner="${escapeHTML(sn)}" data-slot-idx="${i}" title="${escapeHTML(`${sn} · ${m.identity}`)}">
        <img class="dealcalc-turn-slot-face" src="${SINNER_ICON_DATA[sn] || ""}" alt="">
        <span class="dealcalc-turn-slot-text">
          <span class="dealcalc-turn-slot-tag">${escapeHTML(sn)}${m.slots.length > 1 ? ` ${i + 1}` : ""}</span>
          <span class="dealcalc-turn-slot-name">${sinIcon ? `<img src="${sinIcon}" alt="">` : ""}${escapeHTML(o ? o.name : "미지정")}</span>
        </span>
      </button>`;
    }).join("");
  }).join("");
  bar.querySelectorAll("[data-slot-sinner]").forEach(btn => {
    btn.addEventListener("click", () => {
      const sn = btn.dataset.slotSinner;
      dealcalcState.active = {sinner: sn, idx: Number(btn.dataset.slotIdx)};
      dealcalcState.sinner = sn;
      dealcalcState.identity = dealcalcMember(sn).identity;
      dealcalcRefreshAll();
    });
  });
}
function dealcalcRenderSkillBar(){
  const opts = dealcalcState.skillOpts || [];
  const bar = document.getElementById("dcSkillBar");
  if (!opts.length){
    bar.innerHTML = `<span class="dealcalc-note">스킬 정보 없음</span>`;
    return;
  }
  const a = dealcalcState.active;
  const editingActive = a && a.sinner === dealcalcState.sinner;
  const bug = dealcalcBugMode();
  bar.innerHTML = opts.map(o => {
    const egoBlocked = !bug && o.kind === "ego" && dealcalcEgoUsedElsewhere(dealcalcState.sinner, editingActive ? a.idx : -1);
    return `<button type="button" class="dealcalc-skill-slot${editingActive && o.id === dealcalcState.selId ? " is-current" : ""}${o.kind === "ego" ? " is-ego" : ""}" data-id="${escapeHTML(o.id)}"${egoBlocked ? ` disabled title="한 턴에 한 수감자는 E.G.O를 한 번만 사용할 수 있습니다"` : ""}>
      <span class="dealcalc-skill-slot-tag">${escapeHTML(o.tag)}</span>
      <span class="dealcalc-skill-slot-name">${escapeHTML(o.name)}</span>
    </button>`;
  }).join("");
  bar.querySelectorAll("[data-id]:not([disabled])").forEach(btn => {
    btn.addEventListener("click", () => {
      const sn = dealcalcState.sinner;
      let m = dealcalcMember(sn);
      if (!m){
        dealcalcSetSlotCount(sn, 1);
        m = dealcalcMember(sn);
      }
      const act = dealcalcState.active;
      const idx = act && act.sinner === sn ? act.idx : 0;
      m.slots[idx] = btn.dataset.id;
      dealcalcState.active = {sinner: sn, idx};
      dealcalcRefreshAll();
    });
  });
}
function dealcalcRenderSkillDetail(){
  const box = document.getElementById("dcSkillDetail");
  const o = dealcalcSelectedOption();
  if (!o){ box.innerHTML = `<span class="dealcalc-note">분석할 슬롯을 선택하세요</span>`; return; }
  const a = dealcalcState.active, m = dealcalcActiveMember();
  const sinIcon = o.sin ? (SIN_ICON_DATA[o.sin] || "") : "";
  const rows = [];
  rows.push(`<div class="dealcalc-note">분석 중: ${escapeHTML(a.sinner)}${m.slots.length > 1 ? ` 슬롯 ${a.idx + 1}` : ""} · ${escapeHTML(m.identity)} (Lv.${dealcalcSettings(a.sinner).level} · 동기화 ${dealcalcSettings(a.sinner).sync})</div>`);
  rows.push(`<div class="dealcalc-skill-detail-head">${sinIcon ? `<img src="${sinIcon}" width="16" height="16" alt="">` : ""}${escapeHTML(o.name)}${o.refNote ? ` <span class="dealcalc-note">(${escapeHTML(o.refNote)})</span>` : ""}</div>`);
  if (o.slotKey === "defense" && !o.dealsDamage){
    rows.push(`<div class="dealcalc-warn">가드/회피 수비 스킬이라 데미지를 계산하지 않습니다 (반격만 데미지 계산).</div>`);
  }
  if (o.kind === "ego"){
    const max = dealcalcEgoMaxLevel(o.egoSlug), cur = dealcalcEgoLevel(o.egoSlug);
    rows.push(`<div class="dealcalc-row"><label>E.G.O 해석 단계</label><select id="dcEgoLevel">${
      Array.from({length: max}, (_, i) => `<option value="${i + 1}"${i + 1 === cur ? " selected" : ""}>${i + 1}단계${i + 1 === 5 ? " (해석사슬)" : ""}</option>`).join("")
    }</select></div>`);
  }
  const lv = o.lvCorr ? ` <span class="dealcalc-note">(공격 레벨 ${o.lvCorr > 0 ? "+" : ""}${o.lvCorr})</span>` : "";
  rows.push(`<div class="dealcalc-skill-detail-stats"><span>위력 ${o.power}</span><span>코인위력 ${o.coin >= 0 ? "+" : ""}${o.coin}</span><span>코인 ${o.coinCount}개</span>${lv}</div>`);
  if (o.fxNote){
    rows.push(`<div class="dealcalc-note">※ 이 ${o.kind === "ego" ? "해석" : "동기화"} 단계에서는 코인 효과가 아래 문구(최대 단계 기준)와 다릅니다. 수치(위력·코인위력·코인 수)는 이 단계 기준입니다.</div>`);
  }
  if (o.coinEffects && Object.keys(o.coinEffects).length){
    const lines = Object.keys(o.coinEffects).sort((a, b) => Number(a) - Number(b))
      .map(k => `<div>${k}: ${linkifyKeywords(o.coinEffects[k])}</div>`);
    rows.push(`<div class="dealcalc-skill-detail-coins">${lines.join("")}</div>`);
  }
  box.innerHTML = rows.join("");
  const egoSel = box.querySelector("#dcEgoLevel");
  if (egoSel) egoSel.addEventListener("change", () => {
    dealcalcState.egoLevel[o.egoSlug] = Number(egoSel.value);
    dealcalcRefreshAll();
  });
}
function dealcalcRenderIdentityGrid(){
  const grid = document.getElementById("dcIdentityGrid");
  const list = DATA.filter(d => d.sinner === dealcalcState.sinner);
  grid.innerHTML = list.map(d => `
    <button type="button" class="picker-card${d.identity === dealcalcState.identity ? " is-current" : ""}" data-identity="${escapeHTML(d.identity)}" title="${escapeHTML(d.identity)}">
      <img src="${portraitSrc(d)}" alt="${escapeHTML(d.identity)}" loading="lazy">
      <span class="picker-card-rarity">${escapeHTML(d.rarity)}</span>
    </button>`).join("");
  grid.querySelectorAll("[data-identity]").forEach(btn => {
    btn.addEventListener("click", () => dealcalcSelectIdentity(btn.dataset.identity));
  });
}
// 인격을 바꾸면 편성 멤버의 인격도 바뀐다 (한 수감자는 편성에 인격 하나만). 슬롯 선택은 새 인격에도
// 같은 슬롯(스킬1/2/3/수비/E.G.O)이 있으면 유지, 없으면 첫 번째 선택지로 되돌린다.
function dealcalcSelectIdentity(identity){
  if (identity === dealcalcState.identity) return;
  dealcalcState.identity = identity;
  const m = dealcalcMember(dealcalcState.sinner);
  if (m){
    m.identity = identity;
    dealcalcNormalizeSlots(dealcalcState.sinner);
  }
  dealcalcRefreshAll();
}
function dealcalcRenderSinnerSwitch(){
  const wrap = document.getElementById("dcSinnerSwitch");
  wrap.innerHTML = SINNER_ORDER.map(sn => `
    <button type="button" class="picker-sinner-btn${sn === dealcalcState.sinner ? " is-current" : ""}${dealcalcMember(sn) ? " is-in-party" : ""}" data-sinner="${escapeHTML(sn)}" title="${escapeHTML(sn)}${dealcalcMember(sn) ? " (편성됨)" : ""}">
      <img src="${SINNER_ICON_DATA[sn] || ""}" alt="${escapeHTML(sn)}" loading="lazy">
    </button>`).join("");
  wrap.querySelectorAll("[data-sinner]").forEach(btn => {
    btn.addEventListener("click", () => {
      const sn = btn.dataset.sinner;
      if (sn === dealcalcState.sinner) return;
      dealcalcState.sinner = sn;
      const m = dealcalcMember(sn);
      if (m){
        dealcalcState.identity = m.identity;
        dealcalcState.active = {sinner: sn, idx: 0};
      } else {
        const first = DATA.find(d => d.sinner === sn);
        dealcalcState.identity = first ? first.identity : null;
      }
      dealcalcRefreshAll();
    });
  });
}
// 텍스트에서 실제 게임 키워드 이름을 찾아낸다 (linkifyKeywords와 동일한 KEYWORD_RE 재사용 —
// 한 글자짜리 키워드 제외, "광신도"/"소수점 버림" 같은 오탐 방지 규칙도 그대로 적용됨).
function dealcalcScanKeywords(text){
  const matches = String(text || "").match(KEYWORD_RE);
  return matches ? [...new Set(matches)] : [];
}
// 거의 모든 인격 스킬 텍스트에 등장하는 범용 게임 용어(개별 캐릭터 고유 스택이 아님) — 자동
// 추가 대상에서 제외. 실제 "누적 스택"으로 관리되는 키워드가 아니라 코인 속성·상태 트리거이므로.
const DEALCALC_AUTO_KW_EXCLUDE = new Set(["파괴 불가 코인","적출 코인","크리티컬","흐트러짐","행동 불가","패닉","공격 레벨","방어 레벨","합 위력","코인 위력"]);
// side: "self"면 현재 선택된 인격의 전체 스킬(기본+강화)·패시브 + 장착한 에고 기프트(선택된
// 강화 단계) 텍스트를 훑어 전용 키워드를 찾는다. "target"이면 현재 선택된 공격 스킬의 코인
// 효과 텍스트(스킬이 대상에게 무엇을 부여하는지)와 선택된 적들의 패시브·스킬 이름을 훑는다.
function dealcalcComputeAutoKw(side){
  const texts = [];
  if (side === "target"){
    const sel = dealcalcSelectedOption();
    if (sel && sel.coinEffects) Object.values(sel.coinEffects).forEach(t => texts.push(t));
    [...dealcalcState.enemyIdxs].forEach(idx => {
      const e = ENEMY_DATA[idx];
      (e.passives || []).forEach(p => texts.push(typeof p === "string" ? p : (p.effect || "")));
      (e.skills || []).forEach(s => texts.push(s.name || ""));
    });
  } else {
    const {sinner, identity} = dealcalcAttacker();
    if (!sinner || !identity) return [];
    dealcalcBuildSkillOptions(sinner, identity).forEach(o => {
      texts.push(o.name);
      if (o.coinEffects) Object.values(o.coinEffects).forEach(t => texts.push(t));
    });
    (IDENTITY_PASSIVE[`${sinner}|${identity}`] || []).forEach(p => texts.push(p.effect));
    dealcalcState.equippedGifts.forEach(name => {
      const g = EGO_GIFT_DATA.find(x => x.name === name);
      if (!g) return;
      const tiers = dealcalcGiftEffectTiers(g.effect);
      const storedTier = dealcalcState.giftTier[name];
      const tierIdx = Math.min(storedTier != null ? storedTier : tiers.length - 1, tiers.length - 1);
      texts.push(tiers[tierIdx].text);
    });
  }
  return dealcalcScanKeywords(texts.join("\n")).filter(k => !DEALCALC_SELF_KEYWORDS.includes(k) && !DEALCALC_AUTO_KW_EXCLUDE.has(k));
}
function dealcalcKwState(side){
  return side === "target"
    ? {kw: dealcalcState.targetKw, extra: dealcalcState.targetExtraKw}
    : {kw: dealcalcState.selfKw, extra: dealcalcState.extraKw};
}
function dealcalcRenderKwGrid(side){
  const grid = document.getElementById(side === "target" ? "dcTargetKwGrid" : "dcSelfKwGrid");
  const st = dealcalcKwState(side);
  const autoKw = dealcalcComputeAutoKw(side);
  const extraOnly = st.extra.filter(k => !autoKw.includes(k));
  const keys = DEALCALC_SELF_KEYWORDS.concat(autoKw, extraOnly);
  // 더 이상 기본/자동/수동 목록 어디에도 없는 키워드의 저장값은 정리
  const keySet = new Set(keys);
  Object.keys(st.kw).forEach(k => { if (!keySet.has(k)) delete st.kw[k]; });
  grid.innerHTML = keys.map(kw => {
    const isAuto = autoKw.includes(kw);
    const removable = !DEALCALC_SELF_KEYWORDS.includes(kw) && !isAuto;
    const val = st.kw[kw] || 0;
    const title = isAuto
      ? `${kw} — 현재 선택 구성에서 자동 감지된 전용 키워드입니다`
      : `${kw} 스택 (참고용 — 데미지 반영은 기타 보정치에 수동 계산)`;
    return `<label class="dealcalc-kw-item${isAuto ? " is-auto" : ""}" title="${escapeHTML(title)}">
      ${KEYWORD_ICON_DATA[kw] ? `<img src="${KEYWORD_ICON_DATA[kw]}" alt="">` : ""}
      <span>${escapeHTML(kw)}${isAuto ? `<span class="dealcalc-kw-auto-tag">자동</span>` : ""}</span>
      <input type="number" min="0" step="1" value="${val}" data-kw="${escapeHTML(kw)}">
      ${removable ? `<button type="button" class="dealcalc-kw-remove" data-remove="${escapeHTML(kw)}" title="제거">✕</button>` : ""}
    </label>`;
  }).join("");
  grid.querySelectorAll("[data-kw]").forEach(inp => {
    inp.addEventListener("input", () => {
      st.kw[inp.dataset.kw] = Math.max(0, Number(inp.value) || 0);
    });
  });
  grid.querySelectorAll("[data-remove]").forEach(btn => {
    btn.addEventListener("click", () => {
      const kw = btn.dataset.remove;
      const filtered = st.extra.filter(k => k !== kw);
      if (side === "target") dealcalcState.targetExtraKw = filtered; else dealcalcState.extraKw = filtered;
      delete st.kw[kw];
      dealcalcRenderKwGrid(side);
    });
  });
}
function dealcalcRenderSelfKwGrid(){ dealcalcRenderKwGrid("self"); }
function dealcalcRenderTargetKwGrid(){ dealcalcRenderKwGrid("target"); }
function dealcalcAddKwByName(side, kw){
  if (!kw) return;
  const st = dealcalcKwState(side);
  if (!DEALCALC_SELF_KEYWORDS.includes(kw) && !st.extra.includes(kw) && !dealcalcComputeAutoKw(side).includes(kw)){
    st.extra.push(kw);
  }
  st.kw[kw] = st.kw[kw] || 1;
  dealcalcRenderKwGrid(side);
  renderDealCalcView();
}
// 키워드 추가 모달: 자신/적 양쪽에서 공용으로 사용, dealcalcKwPickerSide로 대상 구분.
let dealcalcKwPickerSide = "self";
const DEALCALC_SPECIAL_KW_FILTERS = DEALCALC_SELF_KEYWORDS.map(k => `특수 ${k}`);
function dealcalcRenderKwPickerChips(){
  const wrap = document.getElementById("dcKwPickerSpecialChips");
  wrap.innerHTML = DEALCALC_SPECIAL_KW_FILTERS.map(k =>
    `<button type="button" class="dealcalc-enemy-chip" data-kw-quick="${escapeHTML(k)}">${escapeHTML(k)}</button>`
  ).join("");
  wrap.querySelectorAll("[data-kw-quick]").forEach(btn => {
    btn.addEventListener("click", () => {
      dealcalcAddKwByName(dealcalcKwPickerSide, btn.dataset.kwQuick);
      dealcalcRenderKwPickerList();
    });
  });
}
function dealcalcRenderKwPickerList(){
  const q = document.getElementById("dcKwPickerSearch").value.trim().toLowerCase();
  const st = dealcalcKwState(dealcalcKwPickerSide);
  const already = new Set([...DEALCALC_SELF_KEYWORDS, ...dealcalcComputeAutoKw(dealcalcKwPickerSide), ...st.extra]);
  const list = Object.keys(KEYWORD_ICON_DATA)
    .filter(k => !already.has(k))
    .filter(k => !q || k.toLowerCase().includes(q))
    .sort((a, b) => a.localeCompare(b, "ko"))
    .slice(0, 200);
  const box = document.getElementById("dcKwPickerList");
  box.innerHTML = list.length
    ? list.map(k => `<button type="button" class="dealcalc-picker-gift-card" data-kw-add="${escapeHTML(k)}"><img src="${KEYWORD_ICON_DATA[k]}" alt="">${escapeHTML(k)}</button>`).join("")
    : `<div class="dealcalc-gift-empty">검색 결과 없음</div>`;
  box.querySelectorAll("[data-kw-add]").forEach(btn => {
    btn.addEventListener("click", () => {
      dealcalcAddKwByName(dealcalcKwPickerSide, btn.dataset.kwAdd);
      dealcalcRenderKwPickerList();
    });
  });
}
function dealcalcOpenKwPicker(side){
  dealcalcKwPickerSide = side;
  document.getElementById("dcKwPickerTitle").textContent = side === "target" ? "적 키워드 추가" : "키워드 추가";
  document.getElementById("dcKwPickerSearch").value = "";
  dealcalcRenderKwPickerChips();
  dealcalcRenderKwPickerList();
  document.getElementById("dcKwPickerModal").hidden = false;
}
function dealcalcCloseKwPicker(){ document.getElementById("dcKwPickerModal").hidden = true; }
function dealcalcPopulateAttackType(){
  const sel = document.getElementById("dcAttackType");
  sel.innerHTML = `<option value="">(적 속성내성 자동입력용, 선택)</option>` +
    ATTACK_TYPE_KW.map(t => `<option value="${escapeHTML(t)}">${escapeHTML(t)}</option>`).join("");
}
function dealcalcEnemyCandidates(){
  return ENEMY_DATA.map((e, idx) => ({e, idx})).filter(({e}) => e.hp != null);
}
function dealcalcRenderEnemyList(){
  const q = document.getElementById("dcEnemySearch").value.trim().toLowerCase();
  const list = dealcalcEnemyCandidates()
    .filter(({e}) => !q || e.name.toLowerCase().includes(q))
    .sort((a, b) => (a.e.chapterNum - b.e.chapterNum) || a.e.name.localeCompare(b.e.name, "ko"))
    .slice(0, 60);
  const box = document.getElementById("dcEnemyList");
  box.innerHTML = list.map(({e, idx}) =>
    `<button type="button" class="dealcalc-enemy-chip${dealcalcState.enemyIdxs.has(idx) ? " is-picked" : ""}" data-idx="${idx}">${escapeHTML(e.chapter)} · ${escapeHTML(e.name)}</button>`
  ).join("");
  box.querySelectorAll("[data-idx]").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.dataset.idx);
      dealcalcState.enemyIdxs.has(idx) ? dealcalcState.enemyIdxs.delete(idx) : dealcalcState.enemyIdxs.add(idx);
      dealcalcRenderEnemyList();
      dealcalcRenderEnemyPicked();
      dealcalcRenderTargetKwGrid();
      renderDealCalcView();
    });
  });
}
function dealcalcRenderEnemyPicked(){
  const box = document.getElementById("dcEnemyPicked");
  document.getElementById("dcManualTarget").hidden = dealcalcState.enemyIdxs.size > 0;
  if (!dealcalcState.enemyIdxs.size){
    box.textContent = "선택된 적 없음 — 아래 방어 레벨·내성을 직접 입력합니다.";
    return;
  }
  box.innerHTML = "선택됨: " + [...dealcalcState.enemyIdxs].map(idx => {
    const e = ENEMY_DATA[idx];
    return `<button type="button" class="dealcalc-enemy-chip is-picked" data-idx="${idx}">${escapeHTML(e.name)} ✕</button>`;
  }).join(" ");
  box.querySelectorAll("[data-idx]").forEach(btn => {
    btn.addEventListener("click", () => {
      dealcalcState.enemyIdxs.delete(Number(btn.dataset.idx));
      dealcalcRenderEnemyList();
      dealcalcRenderEnemyPicked();
      dealcalcRenderTargetKwGrid();
      renderDealCalcView();
    });
  });
}
// 에고 기프트 추가 모달: 기존 에고 기프트 메뉴와 동일한 키워드 탭 필터 재사용, 이름뿐 아니라
// 효과 텍스트로도 검색 가능.
let dealcalcGiftPickerKw = null;
function dealcalcRenderGiftPickerTabs(){
  const wrap = document.getElementById("dcGiftPickerKwTabs");
  const items = [{key: null, label: "전체"}, ...GIFT_KEYWORDS.map(k => ({key: k, label: k}))];
  wrap.innerHTML = items.map(o =>
    `<button type="button" class="view-tab" data-kw="${o.key === null ? "" : escapeHTML(o.key)}" aria-pressed="${dealcalcGiftPickerKw === o.key}">${o.key ? giftKeywordIconHTML(o.key, 14) : ""}${escapeHTML(o.label)}</button>`
  ).join("");
  wrap.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      dealcalcGiftPickerKw = btn.dataset.kw || null;
      dealcalcRenderGiftPickerTabs();
      dealcalcRenderGiftPickerList();
    });
  });
}
function dealcalcRenderGiftPickerList(){
  const q = document.getElementById("dcGiftPickerSearch").value.trim().toLowerCase();
  const list = EGO_GIFT_DATA
    .filter(g => !dealcalcState.equippedGifts.includes(g.name))
    .filter(g => !dealcalcGiftPickerKw || g.keyword === dealcalcGiftPickerKw)
    .filter(g => !q || g.name.toLowerCase().includes(q) || (g.aliases || []).some(a => a.toLowerCase().includes(q)) || (g.english || "").toLowerCase().includes(q) || (g.effect || "").toLowerCase().includes(q))
    .sort((a, b) => a.rankNum - b.rankNum || a.name.localeCompare(b.name, "ko"))
    .slice(0, 120);
  const box = document.getElementById("dcGiftPickerList");
  if (!list.length){ box.innerHTML = `<div class="dealcalc-gift-empty">검색 결과 없음</div>`; return; }
  const bug = dealcalcBugMode();
  box.innerHTML = list.map(g => {
    const color = GIFT_RANK_COLOR[g.rankNum] || "#8a8f98";
    const conflict = bug ? null : dealcalcGiftConflictReason(g.name, dealcalcState.equippedGifts);
    return `<button type="button" class="dealcalc-picker-gift-card${conflict ? " is-blocked" : ""}" data-gift="${escapeHTML(g.name)}"${conflict ? ` disabled title="${escapeHTML(conflict)}"` : ""}>
      ${g.icon ? `<img src="${g.icon}" alt="">` : ""}
      <span>${escapeHTML(g.name)}</span>
      <span class="dealcalc-gift-card-rank" style="background:${color}">${escapeHTML(g.rank)}</span>
    </button>`;
  }).join("");
  box.querySelectorAll("[data-gift]:not([disabled])").forEach(btn => {
    btn.addEventListener("click", () => {
      dealcalcState.equippedGifts.push(btn.dataset.gift);
      dealcalcRenderGiftEquipped();
      dealcalcRenderSelfKwGrid();
      renderDealCalcView();
      dealcalcRenderGiftPickerList();
    });
  });
}
function dealcalcOpenGiftPicker(){
  document.getElementById("dcGiftPickerSearch").value = "";
  dealcalcGiftPickerKw = null;
  dealcalcRenderGiftPickerTabs();
  dealcalcRenderGiftPickerList();
  document.getElementById("dcGiftPickerModal").hidden = false;
}
function dealcalcCloseGiftPicker(){ document.getElementById("dcGiftPickerModal").hidden = true; }
function dealcalcRenderGiftEquipped(){
  const box = document.getElementById("dcGiftEquipped");
  if (!dealcalcState.equippedGifts.length){
    box.innerHTML = `<div class="dealcalc-gift-empty">장착한 기프트 없음</div>`;
    return;
  }
  box.innerHTML = dealcalcState.equippedGifts.map(name => {
    const g = EGO_GIFT_DATA.find(x => x.name === name);
    if (!g) return "";
    const tiers = dealcalcGiftEffectTiers(g.effect);
    const storedTier = dealcalcState.giftTier[name];
    const tierIdx = Math.min(storedTier != null ? storedTier : tiers.length - 1, tiers.length - 1);
    const tierSelect = tiers.length > 1
      ? `<select class="dealcalc-gift-card-tier" data-gift-tier="${escapeHTML(name)}">${tiers.map((t, i) => `<option value="${i}"${i === tierIdx ? " selected" : ""}>${escapeHTML(t.label)}</option>`).join("")}</select>`
      : "";
    const color = GIFT_RANK_COLOR[g.rankNum] || "#8a8f98";
    const conflict = dealcalcBugMode() ? null : dealcalcGiftConflictReason(name, dealcalcState.equippedGifts);
    return `<div class="dealcalc-gift-card${conflict ? " is-conflict" : ""}">
      ${conflict ? `<div class="dealcalc-warn" style="margin:0 0 6px;">함께 가질 수 없음: ${escapeHTML(conflict)}</div>` : ""}
      <div class="dealcalc-gift-card-head">
        ${g.icon ? `<img src="${g.icon}" alt="">` : ""}
        <span class="dealcalc-gift-card-name">${escapeHTML(g.name)}</span>
        <span class="dealcalc-gift-card-rank" style="background:${color}">${escapeHTML(g.rank)}</span>
        ${tierSelect}
        <button type="button" class="dealcalc-gift-card-remove" data-gift-remove="${escapeHTML(name)}" title="제거">✕</button>
      </div>
      <div class="dealcalc-gift-card-effect">${linkifyKeywords(tiers[tierIdx].text)}</div>
    </div>`;
  }).join("");
  box.querySelectorAll("[data-gift-remove]").forEach(btn => {
    btn.addEventListener("click", () => {
      const name = btn.dataset.giftRemove;
      dealcalcState.equippedGifts = dealcalcState.equippedGifts.filter(n => n !== name);
      delete dealcalcState.giftTier[name];
      dealcalcRenderGiftEquipped();
      dealcalcRenderSelfKwGrid();
      renderDealCalcView();
    });
  });
  box.querySelectorAll("[data-gift-tier]").forEach(sel => {
    sel.addEventListener("change", () => {
      dealcalcState.giftTier[sel.dataset.giftTier] = Number(sel.value);
      dealcalcRenderGiftEquipped();
      dealcalcRenderSelfKwGrid();
    });
  });
}
function dealcalcTargetsFor(sin, atype){
  if (dealcalcState.enemyIdxs.size){
    return [...dealcalcState.enemyIdxs].map(idx => {
      const e = ENEMY_DATA[idx];
      const defLevel = e.defense != null ? dealcalcParseLead(e.defense) : 0;
      const sinTier = sin && e.resistances && e.resistances[sin] && DEALCALC_TIER_MULT[e.resistances[sin]] != null ? e.resistances[sin] : "보통";
      const typeTier = atype && e.resistances && e.resistances[atype] && DEALCALC_TIER_MULT[e.resistances[atype]] != null ? e.resistances[atype] : "보통";
      return {label: `${e.chapter} · ${e.name}`, defLevel, sinMult: DEALCALC_TIER_MULT[sinTier], typeMult: DEALCALC_TIER_MULT[typeTier]};
    });
  }
  return [{
    label: "직접 입력",
    defLevel: Number(document.getElementById("dcDefLevel").value) || 0,
    sinMult: dealcalcTierValue("dcSinRes", "dcSinResCustom"),
    typeMult: dealcalcTierValue("dcTypeRes", "dcTypeResCustom"),
  }];
}
function dealcalcScenario(power, coinPower, coinCount, clashRounds, Ms0, Md){
  const remaining = Math.max(0, coinCount - clashRounds);
  const coinTotal = dealcalcCoinRangeTotal(power, coinPower, clashRounds + 1, coinCount);
  const D = clashRounds > 0 ? Math.min(99, clashRounds) * 0.03 : 0;
  const Ms = Ms0 + D;
  const msFactor = Math.max(1 + Ms, 0);
  const mdFactor = 1 + Md;
  let dmg = coinTotal * msFactor * mdFactor;
  if (dmg > 0 && dmg < 1) dmg = 1;
  const floor = coinTotal * 0.05;
  if (coinTotal > 0 && dmg < floor) dmg = floor;
  dmg = Math.floor(dmg);
  return {remaining, coinTotal, D, Ms, Md, msFactor, mdFactor, dmg};
}
function renderDealCalcView(){
  const bug = dealcalcBugMode();
  document.body.dataset.dealcalcBug = bug ? "1" : "0";
  document.getElementById("dealCalcModeLabel").textContent = bug ? "버그판" : "크리에이티브";
  dealcalcRefreshTierSelects();

  const o = dealcalcSelectedOption();
  const result = document.getElementById("dealCalcResult");
  if (!o){
    result.innerHTML = `<div class="dealcalc-note">먼저 수감자·인격·스킬을 선택하세요.</div>`;
    return;
  }
  if (o.slotKey === "defense" && !o.dealsDamage && !bug){
    result.innerHTML = `<div class="dealcalc-note">가드/회피 계열 수비 스킬은 데미지를 입히지 않습니다. (버그판으로 전환하면 강제로 계산할 수 있습니다)</div>`;
    return;
  }
  const power = o.power, coinPower = o.coin, sin = o.sin;
  const coinCountAdj = Math.round(Number(document.getElementById("dcCoinCountAdj").value) || 0);
  const coinCount = Math.max(1, o.coinCount + coinCountAdj);
  const dmgMultRaw = document.getElementById("dcDamageMult").value;
  const dmgMult = dmgMultRaw === "" ? 1 : Math.max(0, Number(dmgMultRaw) || 0);

  const level = Math.max(1, Number(dealcalcSettings(dealcalcAttacker().sinner).level) || 60);
  const atkBonus = Number(document.getElementById("dcAtkLevelBonus").value) || 0;
  const ownedCost = Math.max(0, Number(document.getElementById("dcOwnedCost").value) || 0);
  const wealthGift = dealcalcHasWealthGift();
  document.getElementById("dcWealthDetected").hidden = !wealthGift;
  const wealthBonus = wealthGift ? Math.min(20, Math.floor(ownedCost / 500)) : 0;
  // 공격 레벨 = 인격 레벨 + 스킬별 공격 레벨 보정(게임 데이터의 skillLevelCorrection, 예: E.G.O -4) + 추가 보정
  const atkLevel = level + (o.lvCorr || 0) + atkBonus + wealthBonus;

  const clashRounds = Math.max(0, Math.round(Number(document.getElementById("dcClashRounds").value) || 0));
  const crit = document.getElementById("dcCrit").checked;
  const staggerB = Number(document.getElementById("dcStagger").value) || 0;
  const atype = document.getElementById("dcAttackType").value;

  let selfPct = Number(document.getElementById("dcSelfDmgPct").value) || 0;
  let vulnPct = Number(document.getElementById("dcTargetVulnPct").value) || 0;
  if (!bug){ selfPct = Math.max(-100, Math.min(100, selfPct)); vulnPct = Math.max(-100, Math.min(100, vulnPct)); }
  const manualMs = Number(document.getElementById("dcManualMs").value) || 0;
  const manualMd = Number(document.getElementById("dcManualMd").value) || 0;
  const E = crit ? 0.2 : 0;
  const Md = (selfPct / 100) + (vulnPct / 100) + manualMd;

  const targets = dealcalcTargetsFor(sin, atype);
  let totalOne = 0, totalClash = 0;
  const perTarget = targets.map(t => {
    const A = dealcalcA(t.sinMult);
    const B = staggerB > 0 ? staggerB : dealcalcA(t.typeMult);
    const C = dealcalcLevelAdv(atkLevel, t.defLevel);
    const Ms0 = A + B + C + E + manualMs;

    const oneSided = dealcalcScenario(power, coinPower, coinCount, 0, Ms0, Md);
    const clashResult = clashRounds > 0 ? dealcalcScenario(power, coinPower, coinCount, clashRounds, Ms0, Md) : null;
    const oneDmg = Math.floor(oneSided.dmg * dmgMult);
    const clashDmg = clashResult ? Math.floor(clashResult.dmg * dmgMult) : null;
    totalOne += oneDmg;
    if (clashDmg != null) totalClash += clashDmg;
    return {t, A, B, C, Ms0, oneSided, clashResult, oneDmg, clashDmg};
  });
  const hasClash = clashRounds > 0;
  const higher = hasClash && totalClash > totalOne ? "clash" : "one";

  const blocks = [];
  const multi = targets.length > 1;
  blocks.push(`<div class="dealcalc-scenario-grid">`);
  blocks.push(`<div class="dealcalc-scenario${higher === "one" && hasClash ? " is-higher" : ""}">
    <div class="dealcalc-scenario-label">일방 공격${multi ? " 총합" : ""} (합 없음)</div>
    <div class="dealcalc-scenario-value">${totalOne.toLocaleString()}</div>
  </div>`);
  if (hasClash){
    blocks.push(`<div class="dealcalc-scenario${higher === "clash" ? " is-higher" : ""}">
      <div class="dealcalc-scenario-label">합 ${clashRounds}라운드 완승 후${multi ? " 총합" : ""}</div>
      <div class="dealcalc-scenario-value">${totalClash.toLocaleString()}</div>
    </div>`);
  } else {
    blocks.push(`<div class="dealcalc-scenario">
      <div class="dealcalc-scenario-label">합 라운드 수를 입력하면 비교됩니다</div>
      <div class="dealcalc-scenario-value">—</div>
    </div>`);
  }
  blocks.push(`</div>`);
  if (hasClash && clashRounds >= coinCount){
    blocks.push(`<div class="dealcalc-warn">상대 코인 수가 내 코인 수 이상 — 합에서 이겨도 남는 코인이 없어 데미지가 들어가지 않습니다.</div>`);
  }

  blocks.push(`<details class="dealcalc-advanced"><summary>상세 계산 보기${multi ? ` (대상 ${targets.length}명)` : ""}</summary>`);
  perTarget.forEach(({t, A, B, C, Ms0, oneSided, clashResult, oneDmg, clashDmg}) => {
    const shown = clashResult || oneSided;
    if (multi) blocks.push(`<div class="dealcalc-result-target-label">${escapeHTML(t.label)} — 일방 ${oneDmg.toLocaleString()}${clashDmg != null ? ` · 합승 후 ${clashDmg.toLocaleString()}` : ""}</div>`);
    blocks.push(`<div class="dealcalc-breakdown">`);
    blocks.push(`<div class="dealcalc-breakdown-row"><span>코인 위력 (일방 기준, 전부 앞면)</span><span>${oneSided.coinTotal.toLocaleString(undefined,{maximumFractionDigits:1})}</span></div>`);
    if (clashResult) blocks.push(`<div class="dealcalc-breakdown-row"><span>코인 위력 (합 완승 후 남는 코인 ${clashResult.remaining}개 기준)</span><span>${clashResult.coinTotal.toLocaleString(undefined,{maximumFractionDigits:1})}</span></div>`);
    blocks.push(`<div class="dealcalc-breakdown-row"><span>A 죄종내성</span><span>${A.toFixed(3)}</span></div>`);
    blocks.push(`<div class="dealcalc-breakdown-row"><span>B 속성내성${staggerB>0?" (흐트러짐 적용)":""}</span><span>${B.toFixed(3)}</span></div>`);
    blocks.push(`<div class="dealcalc-breakdown-row"><span>C 레벨차(공격${atkLevel}-방어${t.defLevel})</span><span>${C.toFixed(3)}</span></div>`);
    blocks.push(`<div class="dealcalc-breakdown-row"><span>D 합 보너스</span><span>${(shown.D||0).toFixed(3)}</span></div>`);
    blocks.push(`<div class="dealcalc-breakdown-row"><span>E 치명타</span><span>${E.toFixed(3)}</span></div>`);
    blocks.push(`<div class="dealcalc-breakdown-row"><span>기타 보정치(Ms)</span><span>${manualMs.toFixed(3)}</span></div>`);
    blocks.push(`<div class="dealcalc-breakdown-row"><span>Ms 합계 → 배율</span><span>${shown.Ms.toFixed(3)} → ×${shown.msFactor.toFixed(3)}</span></div>`);
    blocks.push(`<div class="dealcalc-breakdown-row"><span>G 자신 피해량 증감</span><span>${(selfPct/100).toFixed(3)}</span></div>`);
    blocks.push(`<div class="dealcalc-breakdown-row"><span>H 대상 취약·보호</span><span>${(vulnPct/100).toFixed(3)}</span></div>`);
    blocks.push(`<div class="dealcalc-breakdown-row"><span>기타 보정치(Md)</span><span>${manualMd.toFixed(3)}</span></div>`);
    blocks.push(`<div class="dealcalc-breakdown-row"><span>Md 합계 → 배율</span><span>${Md.toFixed(3)} → ×${shown.mdFactor.toFixed(3)}</span></div>`);
    if (dmgMult !== 1) blocks.push(`<div class="dealcalc-breakdown-row"><span>피해량 배수(가중치·재발동)</span><span>×${dmgMult}</span></div>`);
    blocks.push(`</div>`);
  });
  blocks.push(`</details>`);
  // 같은 턴에 편성된 다른 슬롯의 효과(예: 다른 수감자의 E.G.O 침식이 주는 속성 피해 증가)는
  // 텍스트가 제각각이라 자동 반영하지 않고, 참고용으로 모아 보여준다 → 필요한 만큼 기타 보정치에 반영.
  const others = [];
  dealcalcPartySinners().forEach(sn => {
    const m = dealcalcMember(sn);
    const opts = dealcalcSlotOptions(sn, m.identity);
    m.slots.forEach((id, i) => {
      const a = dealcalcState.active;
      if (a && a.sinner === sn && a.idx === i) return;
      const so = opts.find(x => x.id === id);
      if (!so) return;
      const eff = so.coinEffects ? Object.keys(so.coinEffects).sort((x, y) => Number(x) - Number(y)).map(k => `${k}: ${linkifyKeywords(so.coinEffects[k])}`).join("<br>") : "";
      others.push(`<div class="dealcalc-other-slot"><div class="dealcalc-other-slot-head">${escapeHTML(sn)}${m.slots.length > 1 ? ` ${i + 1}` : ""} · ${escapeHTML(so.name)} <span class="dealcalc-note">${escapeHTML(so.tag)}</span></div>${eff ? `<div class="dealcalc-note">${eff}</div>` : ""}</div>`);
    });
  });
  if (others.length){
    blocks.push(`<details class="dealcalc-advanced"><summary>같은 턴의 다른 슬롯 효과 (참고 — 필요하면 기타 보정치에 반영)</summary>${others.join("")}</details>`);
  }
  if (!bug){
    blocks.push(`<div class="dealcalc-note" style="margin-top:12px;">크리에이티브 모드: 내성 배율은 실제 게임에 존재하는 5단계로 제한되고, 자신 피해량 증감·대상 취약/보호는 ±100%로 제한됩니다. 버그판으로 전환하면 임의 배율·무제한 수치를 입력할 수 있습니다.</div>`);
  }
  result.innerHTML = blocks.join("");
}
function dealcalcWireInputs(){
  document.getElementById("dcEnemySearch").addEventListener("input", dealcalcRenderEnemyList);
  document.getElementById("dcAttackType").addEventListener("change", renderDealCalcView);
  document.getElementById("dealCalcBugMode").addEventListener("change", () => {
    dealcalcRenderSkillBar();
    dealcalcRenderGiftEquipped();
    renderDealCalcView();
  });
  document.getElementById("dcSync").addEventListener("change", () => {
    dealcalcSettings(dealcalcState.sinner).sync = Number(document.getElementById("dcSync").value) || 4;
    dealcalcNormalizeSlots(dealcalcState.sinner);
    dealcalcRefreshAll();
  });
  document.getElementById("dcLevel").addEventListener("input", () => {
    dealcalcSettings(dealcalcState.sinner).level = Math.max(1, Math.min(65, Number(document.getElementById("dcLevel").value) || 60));
    dealcalcRenderSkillDetail();
    renderDealCalcView();
  });
  document.getElementById("dcSelfKwOpenPicker").addEventListener("click", () => dealcalcOpenKwPicker("self"));
  document.getElementById("dcTargetKwOpenPicker").addEventListener("click", () => dealcalcOpenKwPicker("target"));
  document.getElementById("dcKwPickerClose").addEventListener("click", dealcalcCloseKwPicker);
  document.getElementById("dcKwPickerBackdrop").addEventListener("click", dealcalcCloseKwPicker);
  document.getElementById("dcKwPickerSearch").addEventListener("input", dealcalcRenderKwPickerList);
  document.getElementById("dcGiftOpenPicker").addEventListener("click", dealcalcOpenGiftPicker);
  document.getElementById("dcGiftPickerClose").addEventListener("click", dealcalcCloseGiftPicker);
  document.getElementById("dcGiftPickerBackdrop").addEventListener("click", dealcalcCloseGiftPicker);
  document.getElementById("dcGiftPickerSearch").addEventListener("input", dealcalcRenderGiftPickerList);
  document.addEventListener("keydown", e => {
    if (e.key !== "Escape") return;
    if (!document.getElementById("dcKwPickerModal").hidden) dealcalcCloseKwPicker();
    if (!document.getElementById("dcGiftPickerModal").hidden) dealcalcCloseGiftPicker();
  });
  ["dcAtkLevelBonus","dcCrit","dcClashRounds","dcCoinCountAdj","dcDamageMult","dcOwnedCost",
   "dcSelfDmgPct","dcManualMs","dcManualMd","dcDefLevel","dcSinRes","dcSinResCustom","dcTypeRes",
   "dcTypeResCustom","dcStagger","dcTargetVulnPct"].forEach(id => {
    const el = document.getElementById(id);
    el.addEventListener("input", () => { dealcalcSyncCustomInputs(); renderDealCalcView(); });
    el.addEventListener("change", () => { dealcalcSyncCustomInputs(); renderDealCalcView(); });
  });
}
dealcalcState.sinner = SINNER_ORDER[0];
(() => { const first = DATA.find(d => d.sinner === dealcalcState.sinner); dealcalcState.identity = first ? first.identity : null; })();
dealcalcSetSlotCount(dealcalcState.sinner, 1);
dealcalcPopulateAttackType();
dealcalcRenderEnemyList();
dealcalcRenderEnemyPicked();
dealcalcRenderGiftEquipped();
dealcalcRefreshAll();
dealcalcWireInputs();

/* ---- 이름만 검색 토글 (설정이 아니라 검색창 옆에 노출, 자주 켜고 끌 것으로 예상) ---- */
let nameOnlySearch = false;
try { nameOnlySearch = localStorage.getItem("nameOnlySearch") === "1"; } catch(e){}
const nameOnlyToggles = [...document.querySelectorAll(".nameOnlyToggle")];
function applyNameOnlySearch(){
  nameOnlyToggles.forEach(cb => { cb.checked = nameOnlySearch; });
  try { localStorage.setItem("nameOnlySearch", nameOnlySearch ? "1" : "0"); } catch(e){}
  if (!document.getElementById("searchView").hidden) render();
  if (!document.getElementById("skillSetView").hidden) renderSkillSet();
  if (!document.getElementById("giftView").hidden) renderGiftGrid();
}
nameOnlyToggles.forEach(cb => {
  cb.addEventListener("change", () => {
    nameOnlySearch = cb.checked;
    applyNameOnlySearch();
  });
});
applyNameOnlySearch();

showDeckView();
updateHeaderHeightVar();
