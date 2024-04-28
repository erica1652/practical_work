function account(userId)
{
    var savedUser = '윤은성';
    if(userId == savedUser){
        console.log('반갑습니다. ' + userId + '님');
    }else{
        console.log('로그인 실패했습니다.');
    }
}

account('윤은성');

function plus(a, b)    //매개변수도 지역변수이다.
{
    var result = 0;
    a = a + 1;
    b = b + 1;
    result = a + b;
    console.log('두 수의 합:  + (a + b)');
}