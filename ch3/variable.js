var msg = 'Hello';
msg = 'World';      //값을 변경
console.log(msg);

msg = 100;         //값을 변경
console.log(msg);

var count = 200;
msg = count;       //변수끼리 복사 가능
console.log(msg);

//예외적으로 사용 가능한 특수문자
var $ = 10;
var _ = 20;
var age = 30;
console.log($ + _ + age);  //60 출력