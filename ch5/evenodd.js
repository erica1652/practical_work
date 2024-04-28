//입력한 수의 짝/홀수 판별
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('점수를 입력하세요 : ', function(num){
    num = num % 2;  //몫 연산자
    if(num){
        console.log('홀수입니다.');
    }
    else{
        console.log('짝수입니다.');
    }
    rl.close();
});