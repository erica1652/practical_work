var savedUser = '윤은성'
function account()
{
    console.log('반갑습니다. ' + savedUser + '님');
    savedUser = '백현우'  //함수 내에서 전역변수 값 수정 가능 
    var savedUser = "홍해인"
    console.log('반갑습니다. ' + savedUser + '님');   //함수 내부에 전역변수와 동일한 이름의 지역변수 선언 시,
                                                     //함수 내에서는 지역변수가 우선순위
}
account();
console.log('또 오셨네요. ' + savedUser + '님');