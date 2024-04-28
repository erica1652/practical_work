console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

//로그인 성공/실패
var id = 'jamsuham';
var pw = '1111';
var result = (id == 'jamsuham' && pw == '1111')
?"로그인되었습니다." : "아이디 또는 비번이 틀렸습니다";
console.log(result);

//&&연산자의 단축 평가
//왼쪽 → 오른쪽으로 평가를 진행
//중간에 평가 결과 나오면 끝까지 안 가고 그냥 반환
console.log(false && 'jamsuham');     //false
console.log(true && 'jamsuham');      //jamsuham
console.log('jamsuham' && false);     //false
console.log('jamsuham' && true);      //true
console.log('jamsuham' && '1111');    //1111
console.log(null && false);           //null  

// ||연산자: 하나라도 참이면 참
var age = 30;
var result = (age > 65 || age < 7) ? "지원 대상입니다." : "지원 대상이 아닙니다.";
console.log(result);

// ||연산자의 단축 평가
console.log(false || 'jamsuham');     //jamsuham
console.log(true || 'jamsuham');      //true
console.log('jamsuham' || false);     //jamsuham
console.log('jamsuham' || true);      //jamsuham
console.log('jamsuham' || '1111');    //jamsuham
console.log(null || false);           //false

//!연산자
console.log(!'jamsuham');             //false
console.log(!null);                   //true
console.log(!0);                      //true

//nullish 병합 연산자 '??'
var id = 'jamsuham';
var result = (id !== null && id !== undefined)
?"아이디가 입력되었습니다.":"아이디가 입력되지 않았습니다.";
console.log(result);

var id = 'jamsuham';
var result = (id ?? null)
?"아이디가 입력되었습니다.":"아이디가 입력되지 않았습니다.";
console.log(result);
