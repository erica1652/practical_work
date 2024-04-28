//null은 빈 값을 의미 (존재하지 않는다고 의도적으로 표현)
//불리언형으로는 false
var love = null;
console.log(love);
console.log(Boolean(love));

//undefined: 변수는 선언했지만 값이 할당되지 않은 상태
var name;
console.log(name);
//사용자 실수로 초기화하지 않은 변수의 값에 대한 오류
//오류메시지는 출력되지 않고 undefined라는 값으로 표시
var name2 = 'lch';
console.log(name2)
name2 = undefined;    //undefined 값이 별도로 존재 → 별도의 자료형
console.log(name2)
