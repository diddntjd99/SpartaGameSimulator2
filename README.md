# SpartaGameSimulator1

.evn 파일 생성 필요:
<br>GAME_DATABASE_URL = mySQL game DB URL
<br>USER_DATABASE_URL = mySQL user DB URL
<br>TOKEN_SECRET_KEY = 키 설정

1. **암호화 방식**
    - 비밀번호를 DB에 저장할 때 Hash를 이용했는데, Hash는 단방향 암호화와 양방향 암호화 중 어떤 암호화 방식에 해당할까요?
      - 단방향 암호화
    - 비밀번호를 그냥 저장하지 않고 Hash 한 값을 저장 했을 때의 좋은 점은 무엇인가요?
      - 다른 사람이 조회을 했을 때 암호화된 Hash값이 보이기 때문에 실제 비밀번호는 노출되지 않는다.
2. **인증 방식**
    - JWT(Json Web Token)을 이용해 인증 기능을 했는데, 만약 Access Token이 노출되었을 경우 발생할 수 있는 문제점은 무엇일까요?
      - 누구나 해당 토큰에 어떤 데이터가 담겨있는지 확인이 가능하다.
    - 해당 문제점을 보완하기 위한 방법으로는 어떤 것이 있을까요?
      - 유효기간을 설정해줌으로써 토큰이 만료될 수 있도록 만든다.
3. **인증과 인가**
    - 인증과 인가가 무엇인지 각각 설명해 주세요.
      - 인증이란, 서비스를 이용하려는 사용자가 인증된 신분을 가진 사람이 맞는지 검증하는 작업
      - 인가란, 이미 인증된 사용자가 특정 리소스에 접근하거나 특정 작업을 수행할 수 있는 권한이 있는지 검증하는 작업
    - 위 API 구현 명세에서 인증을 필요로 하는 API와 그렇지 않은 API의 차이가 뭐라고 생각하시나요?
      - 개인의 정보를 생성, 삭제, 수정이 가능하냐 하지 않냐의 차이이다.
    - 아이템 생성, 수정 API는 인증을 필요로 하지 않는다고 했지만 사실은 어느 API보다도 인증이 필요한 API입니다. 왜 그럴까요?
      - 게임의 아이템 관리자가 아닌 누구나 접근해서 생성, 수정을 하면 아이템에 대한 시스템이 망가질 수 있기 때문이다.
4. **Http Status Code**
    - 과제를 진행하면서 사용한 Http Status Code를 모두 나열하고, 각각이 의미하는 것과 어떤 상황에 사용했는지 작성해 주세요.
      - 200: 클라이언트가 요청한대로 작업이 완료되었을 때
      - 400: 데이터를 올바르게 입력하지 않았을 때
      - 401: 데이터가 존재하지 않을 때
      - 402: 게임 캐릭터의 보유 돈이 부족해서 아이템을 구매하지 못할 때
      - 409: 데이터가 이미 존재할 때
      - 500: 서버에 오류가 발생할 때
5. **게임 경제**
    - 현재는 간편한 구현을 위해 캐릭터 테이블에 money라는 게임 머니 컬럼만 추가하였습니다.
        - 이렇게 되었을 때 어떠한 단점이 있을 수 있을까요?
          - 재화에 대한 수정이 필요할 때 캐릭터 테이블을 일일히 다 바꿔줘야하기 때문이다.
        - 이렇게 하지 않고 다르게 구현할 수 있는 방법은 어떤 것이 있을까요?
          - 재화 테이블을 따로 만들어 외래키로 캐릭터 id로 설정해주는 방법이 있다.
    - 아이템 구입 시에 가격을 클라이언트에서 입력하게 하면 어떠한 문제점이 있을 수 있을까요?
      - 클라이언트에서 가격에 대한 정보를 접근하게 되면 아이템 시세에 대한 시스템이 무너질 수 있어 게임 경제도 같이 무너질 수 있다.

## API 명세서

| 기능 | Method | URL | req Header | 요청(req) | 응답(res) | res Header |
|---|---|---|---|---|---|---|
| 회원가입 | Post | /api/sign-up |  | {<br>"user_id" : "diddntjd99",<br>"user_pw" : "000000",<br>"user_pw_check" : "000000",<br>"user_name" : "양우성"<br>} | {<br>"user": {<br>"user_id": "diddntjd99",<br>"user_name": "양우성"<br><br>}<br>} |  |
| 로그인 | Post | /api/sign-in |  | {<br>"user_id" : "diddntjd99",<br>"user_pw" : "000000"<br>} | {<br>"token": "eyJhbGciOiJIUzI1NiI<br>sInR5cCI6IkpXVCJ9.eyJ1c2VyX2l<br>kIjoiZGlkZG50amQ5OSIsImlhdCI6<br>MTcxNjUzOTgyOSwiZXhwIjoxNzE2N<br>TQzNDI5fQ.ZZs6yLXQPwH7DhikzUa<br>v4NavL00ygZ9fqgQAPB-alpI"<br>} | {<br>authorization: Bearer%20eyJhb<br>GciOiJIUzI1NiIsInR5cCI6IkpXVC<br>J9.eyJ1c2VyX2lkIjoiZGlkZG50am<br>Q5OSIsImlhdCI6MTcxNjUzOTgyOSw<br>iZXhwIjoxNzE2NTQzNDI5fQ.ZZs6y<br>LXQPwH7DhikzUav4NavL00ygZ9fqg<br>QAPB-alpI<br>} |
| 캐릭터 생성 | Post | /api/characters | {<br>authorization: Bearer%20eyJhb<br>GciOiJIUzI1NiIsInR5cCI6IkpXVC<br>J9.eyJ1c2VyX2lkIjoiZGlkZG50am<br>Q5OSIsImlhdCI6MTcxNjUzOTgyOSw<br>iZXhwIjoxNzE2NTQzNDI5fQ.ZZs6y<br>LXQPwH7DhikzUav4NavL00ygZ9fqg<br>QAPB-alpI<br>} | {<br>"character_name" : "양우성"<br>} | {<br>"createCharacter": {<br>"character_id": 2,<br>"character_name": "양우성"<br>}<br>} |  |
| 캐릭터 삭제 | Delete | /api/characters/:character_id | {<br>authorization: Bearer%20eyJhb<br>GciOiJIUzI1NiIsInR5cCI6IkpXVC<br>J9.eyJ1c2VyX2lkIjoiZGlkZG50am<br>Q5OSIsImlhdCI6MTcxNjUzOTgyOSw<br>iZXhwIjoxNzE2NTQzNDI5fQ.ZZs6y<br>LXQPwH7DhikzUav4NavL00ygZ9fqg<br>QAPB-alpI<br>} |  | {} |  |
| 캐릭터 상세 조회 | Get | /api/characters/:character_id | {<br>authorization: Bearer%20eyJhb<br>GciOiJIUzI1NiIsInR5cCI6IkpXVC<br>J9.eyJ1c2VyX2lkIjoiZGlkZG50am<br>Q5OSIsImlhdCI6MTcxNjUzOTgyOSw<br>iZXhwIjoxNzE2NTQzNDI5fQ.ZZs6y<br>LXQPwH7DhikzUav4NavL00ygZ9fqg<br>QAPB-alpI<br>} |  | {<br>"showCharacter": {<br>"character_name": "양우성",<br>"health": 510,<br>"power": 100,<br>"money": 7800<br>}<br>} |  |
| 아이템 생성 | Post | /api/items |  | {<br>"item_name": "목걸이",<br>"item_stat": {<br>"health": 50,<br>"power": 10<br>},<br>"item_price": 100<br>} | {<br>"createItem": {<br>"item_code": 4,<br>"item_name": "목걸이",<br>"item_stat": {<br>"power": 10,<br>"health": 50<br>},<br>"item_price": 100<br>}<br>} |  |
| 아이템 수정 | Patch | /api/items/:item_code |  | {<br>"item_name": "귀걸이",<br>"item_stat": {<br>"health": 10<br>}<br>} | {<br>"updateItem": {<br>"item_code": 3,<br>"item_name": "귀걸이",<br>"item_stat": {<br>"health": 10<br>},<br>"item_price": 100<br>}<br>} |  |
| 아이템 목록 조회 | Get | /api/items |  |  | {<br>"items": [<br>{<br>"item_code": 1,<br>"item_name": "무기",<br>"item_price": 5000<br>},<br>{<br>"item_code": 2,<br>"item_name": "반지",<br>"item_price": 5000<br>},<br>{<br>"item_code": 3,<br>"item_name": "귀걸이",<br>"item_price": 100<br>},<br>{<br>"item_code": 4,<br>"item_name": "목걸이",<br>"item_price": 100<br>}<br>]<br>} |  |
| 아이템 상세 조회 | Get | /api/items/:item_code |  |  | {<br>"items": {<br>"item_code": 1,<br>"item_name": "무기",<br>"item_stat": {<br>"power": 100,<br>"health": 50<br>},<br>"item_price": 5000<br>}<br>} |  |
| 캐릭터 돈 벌기 | Patch | /api/characters/:character_id/showMeTheMoney | {<br>authorization: Bearer%20eyJhb<br>GciOiJIUzI1NiIsInR5cCI6IkpXVC<br>J9.eyJ1c2VyX2lkIjoiZGlkZG50am<br>Q5OSIsImlhdCI6MTcxNjUzOTgyOSw<br>iZXhwIjoxNzE2NTQzNDI5fQ.ZZs6y<br>LXQPwH7DhikzUav4NavL00ygZ9fqg<br>QAPB-alpI<br>} |  | {<br>"updateCharacter": {<br>"character_id": 2,<br>"character_name": "양우성",<br>"money": 10100<br>}<br>} |  |
| 아이템 구매 | Post | /api/characters/:character_id/buyItem | {<br>authorization: Bearer%20eyJhb<br>GciOiJIUzI1NiIsInR5cCI6IkpXVC<br>J9.eyJ1c2VyX2lkIjoiZGlkZG50am<br>Q5OSIsImlhdCI6MTcxNjUzOTgyOSw<br>iZXhwIjoxNzE2NTQzNDI5fQ.ZZs6y<br>LXQPwH7DhikzUav4NavL00ygZ9fqg<br>QAPB-alpI<br>} | {<br>"item_code": 1,<br>"count": 1<br>} | {<br>"updateCharacter": {<br>"character_id": 2,<br>"character_name": "양우성",<br>"money": 4800<br>}<br>} |  |
| 아이템 판매 | Delete | /api/characters/:character_id/sellItem | {<br>authorization: Bearer%20eyJhb<br>GciOiJIUzI1NiIsInR5cCI6IkpXVC<br>J9.eyJ1c2VyX2lkIjoiZGlkZG50am<br>Q5OSIsImlhdCI6MTcxNjUzOTgyOSw<br>iZXhwIjoxNzE2NTQzNDI5fQ.ZZs6y<br>LXQPwH7DhikzUav4NavL00ygZ9fqg<br>QAPB-alpI<br>} | {<br>"item_code": 1,<br>"count": 1<br>} | {<br>"updateCharacter": {<br>"character_id": 2,<br>"character_name": "양우성",<br>"money": 7800<br>}<br>} |  |
| 인벤토리 조회 | Get | /api/characters/:character_id/inventory | {<br>authorization: Bearer%20eyJhb<br>GciOiJIUzI1NiIsInR5cCI6IkpXVC<br>J9.eyJ1c2VyX2lkIjoiZGlkZG50am<br>Q5OSIsImlhdCI6MTcxNjUzOTgyOSw<br>iZXhwIjoxNzE2NTQzNDI5fQ.ZZs6y<br>LXQPwH7DhikzUav4NavL00ygZ9fqg<br>QAPB-alpI<br>} |  | {<br>"inventory": [<br>{<br>"item_code": 3,<br>"count": 3<br>}<br>]<br>} |  |
| 캐릭터 장비 조회 | Get | /api/characters/:character_id/equipments |  |  | {<br>"equipment": [<br>{<br>"item_code": 3<br>}<br>]<br>} |  |
| 캐릭터 아이템 장착 | Post | /api/characters/:character_id/equipments | {<br>authorization: Bearer%20eyJhb<br>GciOiJIUzI1NiIsInR5cCI6IkpXVC<br>J9.eyJ1c2VyX2lkIjoiZGlkZG50am<br>Q5OSIsImlhdCI6MTcxNjUzOTgyOSw<br>iZXhwIjoxNzE2NTQzNDI5fQ.ZZs6y<br>LXQPwH7DhikzUav4NavL00ygZ9fqg<br>QAPB-alpI<br>} | {<br>"item_code": 3<br>} | {<br>"updateCharacter": {<br>"character_id": 2,<br>"User_id": "diddntjd99",<br>"character_name": "양우성",<br>"health": 520,<br>"power": 100,<br>"money": 7800<br>}<br>} |  |
| 캐릭터 아이템 탈착 | Delete | /api/characters/:character_id/equipments | {<br>authorization: Bearer%20eyJhb<br>GciOiJIUzI1NiIsInR5cCI6IkpXVC<br>J9.eyJ1c2VyX2lkIjoiZGlkZG50am<br>Q5OSIsImlhdCI6MTcxNjUzOTgyOSw<br>iZXhwIjoxNzE2NTQzNDI5fQ.ZZs6y<br>LXQPwH7DhikzUav4NavL00ygZ9fqg<br>QAPB-alpI<br>} | {<br>"item_code": 3<br>} | {<br>"updateCharacter": {<br>"character_id": 2,<br>"User_id": "diddntjd99",<br>"character_name": "양우성",<br>"health": 500,<br>"power": 100,<br>"money": 7800<br>}<br>} |  |
