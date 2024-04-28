//보통 오브젝트형 데이터 생성시 new 연산사 사용해 메모리 할당
var msg = new Object();
msg = {
    name : '김정우',
    comment : '@sugaringcandy',
    age : 27
};

var array = new Array();
array.push(msg);

console.log(array);