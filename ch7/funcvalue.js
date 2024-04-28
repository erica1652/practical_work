var userName = '이장현';  //전역변수
var userPW = '1111'  //전역변수

function account_1(userId, userpw)
{
    console.log(userId);
    console.log(userpw);
    var savedName = '이장현';
    var savedPw = '1111';

    if(userId == savedName)
    {
        if(userpw == savedPw)
        {
            console.log('반갑습니다. ' + userId + '님');
        }
    }
}
account_1(userName, userPW);
account_1(userName);   //매개변수를 1개만 입력해 호출하더라도 오류가 발생하지는 않음.




//매개변수 기본값 설정
function account_2(userId, userpw = '1111')
{
    console.log(userId);
    console.log(userpw);
    var savedName = '이장현';
    var savedPw = '1111';

    if(userId == savedName)
    {
        if(userpw == savedPw)
        {
            console.log('반갑습니다. ' + userId + '님');
        }
    }
}
account_2(userName);




//비교문 이용해 매개변수 기본값 처리
function account_3(userId, userpw)
{
    console.log(userId);
    console.log(userpw);
    var savedName = '이장현';
    var savedPw = '1111';

    if(userpw == undefined){
        userpw = '1111';
    }

    if(userId == savedName)
    {
        if(userpw == savedPw)
        {
            console.log('반갑습니다. ' + userId + '님');
        }
    }
}
account_3(userName);




//논리연산자 이용해 매개변수 기본값 처리
function account_4(userId, userpw)
{
    console.log(userId);
    console.log(userpw);
    var savedName = '이장현';
    var savedPw = '1111';

    userpw = userpw || '1111';
    
    if(userId == savedName)
    {
        if(userpw == savedPw)
        {
            console.log('반갑습니다. ' + userId + '님');
        }
    }
}
account_4(userName);