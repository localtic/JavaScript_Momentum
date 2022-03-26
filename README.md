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