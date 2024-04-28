// function account()
// {
//     var savedUser = '윤은성';
//     console.log('반갑습니다. ' + savedUser + '님');
// }
// account();
// console.log('또 오셨네요. ' + savedUser + '님');

function naver()
{
    console.log('naver 함수 진입');
    var saveUser = '백현우';
    google();
    console.log('naver 함수 탈출');
}
function google()
{
    console.log('google 함수 진입')
    var saveUser = '홍해인';
    console.log('google 함수 탈출');
}
naver();