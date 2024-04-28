function plus(a, b)
{
    return (a + b);
}

var result = plus(10, 20);
console.log('두 수의 합: ' + result);



//사용자의 나이를 입력받아 비교한 수 결과를 리턴하는 함수 코드
const readlind = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function checkAge(age) {
    if (age > 19) {
        return true;
    } else {
        return false;
    }
}

rl.question("나이를 입력하세요: ", function (nai) {
    if (checkAge(nai)) {
        console.log("입장 가능합니다.");
    } else {
        console.log("입장을 불허합니다.");
    }
    rl.close();
});



//어떤 값도 돌려주지 않고 return만 사용하는 코드
//현재 함수를 종료함을 의미(이때 리턴값은 undefined)
function Week() {
    console.log('Mon');
    console.log('Tue');
    console.log('Wed');
    return;
    console.log('Thu');
    console.log('Fri');
    console.log('Sat');
    console.log('Sun');
}
console.log(Week() === undefined);