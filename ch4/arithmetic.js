var a = 3;
var b = 2;

console.log('더하기: ' + (a + b));
console.log('빼기: ' + (a - b));
console.log('곱하기: ' + (a * b));
console.log('나누기 /: ' + (a / b));
console.log('나누기 %: ' + (a % b));
console.log('거듭제곱: ' + (a ** b));

//문자열의 결합
console.log('Hello ' + 'world');

//피연산자 → 문자열 + 숫자 = 문자열의 결합
console.log('긴급출동' + 119);
console.log('1' + 1);

//+ 연산자 붙이면 숫자형으로 형 변환 발생
console.log(+"1024" + 1);
console.log(+true);
console.log(+false);

//-, *, / 연산자는 문자열을 숫자형으로 형 변환
console.log('10' - 2);
console.log('10' * 2);
console.log('10' / 2);