var a = 10;
var b = 20;
console.log(a > b);
console.log(a == b);
console.log(a != b);

//문자열 비교
console.log('A' < 'B');
console.log('ABCD' > 'ABDC');

var size1 = 1024;
var size2 = '1024';
console.log(size1 == size2);   //동등 연산자(값)
console.log(size1 === size2);   //일치 연산자(값 + 타입)

//서로 다른 타입끼리 비교
//자료형이 서로 다르면 자바스크립트는 값을 내부에서 숫자형으로 변경
//이 특징은 동등 연산자(==)의 내부 수행과 동일
console.log(300 > '200');
console.log(true == 1);
console.log(true == '1');
console.log(false == 1);
console.log(false == '0');
console.log(2 == '002');

console.log(null == undefined);
console.log(null === undefined);
console.log(null == 0);
console.log(undefined == 0);

//조건부 연산자(물음표 연산자)
//비교 연산자 이용해 조건에 따라 다른 결과 수행해야 할 때 사용
var age = 30;
var result = age >=19 ? "성인입니다." : "애기";
console.log(result);