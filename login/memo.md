요소를 어디에서 찾을지 명시
id로 login-form을 찾고 그 안에서 input과 button 찾음

유저가 입력하는 값의 유효성을 확인하는 것이 필요!
input의 유효성 검사를 하려면 input이 form 안에 있어야 
null, 글자수 제한 등 브라우저에서 구현 가능
(div -> form)

form 안의 버튼을 누르면 submit 된다 -> 클릭 안 만들어줘도 됨
form이 submit될 때마다 새로고침됨

submit할 때, function이 방금 발생한 event에 대한 정보를 argument로 받는다
MouseEvent(PointerEvent) 유저가 클릭한 위치를 x,y 좌표로 받는다