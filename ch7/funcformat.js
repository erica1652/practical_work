//전달인자 없는 기본 함수 코드
function showMsg()
{
    console.log('Hello Javascript');
}
showMsg();

//전달인자 있는 함수 선언 코드
function plus(a,b)
{
    console.log('두 수의 합: ' + (a + b));
}
plus(2, 3);

//필요에 따라 같은 함수 여러 번 호출
function plus(a,b)
{
    console.log('두 수의 합: ' + (a + b));
}
plus(100, 200);
plus('ABCD', 'EFGH');
plus(3.14, 1.59);