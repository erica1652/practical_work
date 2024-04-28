var nickName = function() 
{
    console.log("홍해인");
}
nickName();

nickName = function()
{
    console.log("백현우");
}
nickName();

//함수를 변수에 복사
var userName = nickName;
userName();