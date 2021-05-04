
# Soft_Engineering_10th

# front 요구사항 정리 (~ 1차 요구사항)

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
* 관리자 메뉴 (/admin/index)
  - [ ] header
  - [ ] footer
  - [X] 공지/이벤트 관리, 상품 관리, 로그아웃 메뉴 표시  
  - [X] 로그아웃 시 쇼핑몰 메인화면으로 돌아감
  - [ ] 로그아웃
  - [ ] 관리자 로그인
* 공지 / 이벤트 관리 (/admin/table)
  - [ ] header
  - [ ] footer
  - [ ] 서버 연동
  - [X] 공지/이벤트 확인 가능 FORM
  - [X] 정렬 버튼
  - [X] 활성화 / 비활성화 선택 버튼
  - [X] 등록/수정 FORM  
* 공지 / 이벤트 등록 / 수정 (/admin/form)
  - [ ] header
  - [ ] footer
  - [ ] 서버, 공지/이벤트 관리페이지와 연동
  - [X] 공지/이벤트에 사용할 배너 (파일), 제목, 내용, 기간 입력 FORM  
* 상품 관리 (미확인)
* 상품 등록 (미확인)
* 상품 검색/정렬/필터 (미확인)
*
