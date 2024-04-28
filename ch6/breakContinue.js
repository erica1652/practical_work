//break
var value = 0;
while(true){

    if(value > 100) {
        break;
    }

    console.log('value = ' + value);
    value++;
}
console.log('value는 100보다 크다.');

//continue
var value = 0;
while(value < 10){

    value++;
    if(value % 2 == 0) {   //나머지 연산자
        continue;
    }

    console.log('value = ' + value);
}

//삼항 연산자
//삼항 연산자 '?'의 오른쪽에 break 나 continue문 사용 불가
var value =0;
while(value < 10)
{
    value++;
    (value % 2 == 0) ? continue :
    console.log('value = ' + value + '<br/>');
}

//반복문의 중첩
//구구단 2~9단 모두 출력
var dan = 2;
while(dan < 10)
{
    var num = 1;
    while(num < 10){
        console.log(dan + '*' + num + '=' + dan*num);
        num++;
    }
    dan++;
}

//레이블 사용
//구구단 전체 출력하는 코드 기반 → 2~5단 출력 + 6단부터 출력하지 않고 반복문 빠져나감
//레이블은 특정 위치를 나타내는 식별자
//반복문 앞에 레이블 이름을 적고 콜론(:)으로 구분
var dan = 2;
outside : while(dan < 10)
{
    var num = 1;
    while(num < 10){
        if(dan == 6 && num == 1)
            break outside;
        console.log(dan + '*' + num + '=' + dan*num);
        num++;
    }
    dan++;
}