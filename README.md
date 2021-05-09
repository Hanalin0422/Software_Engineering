
# Soft_Engineering_10th

# 변경사항
* html -> ejs
* user/signup.ejs sign form에 name 추가

# front 요구사항 정리 (~ 1차 요구사항)

UPDATE 5/4

### 온라인 쇼핑몰 메인 화면
* 로그인 메뉴 (/index)
  - [X] 로그인 상태 -> ID/PW 입력 창 표시
  - [X] 로그인 상태 -> ID와 환영 메시지 출력, 로그아웃 버튼 (Test X)
  - [X] 회원 가입 페이지로 넘어가기
* 배너
  - [X] 배너 순차적 표시
* header (모든 화면 공통 사용)
  - [X] 아모아모 로고 표시
* footer (모든 화면 공통 사용)
  - [X] 사업자 정보, 이용약관, 개인처리방침 표시


### 회원가입
* 회원가입 (/users/signup)
  - [X] ID, PW, 이름, 이메일 입력
  - [X] 필수정보 미 입력 시 경고
  - [ ] ID, 이메일 중복 경고
  - [ ] 비밀번호 검사
  - [ ] 가입 완료 시 자동으로 로그인

### 관리자 메뉴
* 관리자 메인 화면 (/admin/index)
  - [X] 요구사항이 없어서 빈 공간으로 냅둠. 나중에 요구사항 생기지 않으면 상품 관리를 index로 만들 예정.
* 관리자 메뉴 (/admin/index)
  - [ ] header
  - [X] footer
  - [X] 공지/이벤트 관리, 상품 관리, 로그아웃 메뉴 표시  
  - [X] 로그아웃 시 쇼핑몰 메인화면으로 돌아감
  - [ ] 로그아웃
  - [ ] 관리자 로그인
* 공지 / 이벤트 관리 (/admin/table)
  - [ ] header
  - [X] footer
  - [ ] 서버 연동
  - [X] 공지/이벤트 확인 가능 FORM
  - [X] 정렬 버튼
  - [X] 활성화 / 비활성화 선택 버튼
  - [X] 등록/수정 FORM  
* 공지 / 이벤트 등록 / 수정 (/admin/form)
  - [ ] header
  - [X] footer
  - [ ] 서버, 공지/이벤트 관리페이지와 연동
  - [X] 공지/이벤트에 사용할 배너 (파일), 제목, 내용, 기간 입력 FORM  
* 상품 관리
  - [ ] HEADER
  - [X] footer
  - [X] 상품 확인
  - [X] 상품 등록
  - [X] 상품 수정
  - [X] 상품 삭제
  - [X] 상품 상세 정보 확인
  - [ ] 상품 삭제 표시
  - [ ] 서버 연동
* 상품 등록 (상품 등록, 등록 안하는 버튼 클릭 시 /admin/shop으로 이동)
  - [ ] 서버 연동
  - [ ] HEADER
  - [X] footer
  - [ ] 상품명, 가격 제약조건 검사 -> 경고
  - [X] 상품 이름, 이미지 , 가격 FORM
* 상품 검색/정렬/필터
  - [ ] HEADER
  - [X] footer
  - [ ] 서버 연동
  - [X] 검색 form
  - [ ] 상품 가격으로 정렬 form : 낮은 가격순으로 정렬
  - [ ] 상품 가격으로 필터링
  - [ ] 검색, 정렬, 필터링 동시 적용
