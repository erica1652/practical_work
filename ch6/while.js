//1~12월 출력
var i = 1;
while(i < 13) {
    console.log(i + '월');
    i++;
}

//1~10까지의 합 출력
var sum = 0;
var i = 1;
while(i < 11)
{
    sum = sum + 1;
    i++
}
console.log(sum);

//사용자로부터 입력 받은 구구단 출력
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('단수를 입력하세요: ', function(dan){
    var i = 1;
    while(i < 10){
        console.log(dan * 1);
        i++;
    }
    rl.close();
})