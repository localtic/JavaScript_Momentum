공사중입니다

자바스크립트는...
브라우저에 설치돼 있다
Console에서 실험할 수 있다

대부분 브라우저들은 chromium(오픈소스 웹 브라우저)을 변형해 만들었다

HTML css javaScript
html을 가리키는 객체 document

JS에서 html을 읽고 수정할 수 있다! document.title
JS와 html 연결은 <script src="app.js"></script>로

element를 가져오는 방식
getElement = html 태그 검색
querySelector = CSS 방식으로 검색 // 첫 번째 요소만 가져옴
querySelectorAll 모든 요소 가져옴

querySelector("#hello form") // name
querySelector(".hello form") // class

event를 listen
(port에서 발생하는 request를 listen)
함수를 변수처럼 쓰는 것, 고차함수(콜백 함수)

js에 쓸 때는 click, html에 쓸 때는 onclick

window: 웹브라우저의 창이나 탭
document: 웹브라우저 창 안에 보이는 문서

mozilla html에서 addEventListener 확인 가능
developer.mozilla.org

사실 자바스크립트에서 CSS(element의 style) 바꾸는 것 권장하지 않음

active는 clicked라고 바꿀 수 있음
raw value, raw string
동일한 string을 계속 사용할 때 변수로 만들어줄 수 있음

className은 안에 있는 모든 요소가 영향을 받음
클래스에서 하나의 요소만 바꾸기 위해 사용!
클래스는 여러 개의 이름을 가질 수 있음(classList) 공백으로 구분
element가 class name을 포함하고 있는지 확인 -> toggle