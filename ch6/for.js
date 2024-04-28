//'javascript' 5번 출력
for(var i = 0; i < 5; i++) {
    console.log('javascript');
}

//2의 배수 출력
for(var i = 2; i < 101; i+=2) {
    console.log(i);
}

//1부터 10까지의 합 출력
var sum = 0;
for(var i = 1; i < 11; i++){
    sum = sum + i;
}
console.log(sum);

//구구단 2단 출력
for(var i = 1; i < 10; i++) {
    console.log("2 * " + i + " = " + 2 * i);
}

//사용자로부터 입력받은 구구단 출력
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('단수를 입력하세요 : ', function(dan){
    for(var i = 1; i < 10; i++){
        console.log(dan + " * " + i + " = " + dan * i);
    }
    rl.close();
});

//배터리 충전 상태 출력
//100% 넘어가면 완료 문구 출력
for(var i = 1; i < 101; i++) {
    console.log('충전중 : ' + i + '%');
}
console.log('충전이 완료되었습니다.');

//for문 구성요소 생략 가능
//모든 구성요소 생략시 for(;;) → 무한반복
var i = 0;
for(; i < 101; ) {
    console.log('충전중 : ' + i + '%' + '<br/>');  //줄바꿈
    i++;
}
colsole.log('충전이 완료되었습니다.');

//배열의 데이터 동적 추가
console.log('===== 초기 배열 데이터 =====');
var arr = ['자바스크립트', 'C언어', '파이썬']
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

console.log();
console.log('===== 배열에 데이터 추가 =====')

arr.push('ASP.net');
arr.push('C#.net');

console.log();
console.log('===== 배열의 출력 =====')

console.log('배열의 길이: ' + arr.length);
for(var i = 0; i < arr.length-1; i++) {
    console.log(arr[i]);
}