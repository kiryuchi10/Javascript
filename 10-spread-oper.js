console.log("=================배열의 전개 연산");

let arr1 =["홍길동","장길산"];
let arr2=["임꺽정","전우치"];

console.log(arr1,arr2);
//두개의 배열을 합치고 싶다
arr3=[arr1+arr2];
arr4=arr1.concat(arr2);
let combined=[];
combined=[].concat(arr1.arr2);
combined=[arr1[0],arr1[1],arr2[0],arr2[1]];
console.log(arr3);
console.log(arr4);
console.log(combined);
// ES NEXT 방식 : 전개 연산자 활용 
combined=[...arr1,...arr2];

//배열 전개
let [first, second, third="empty",...others]=combined;
console.log(first, second, third, others);

console.log("===================객체 전개 연산");
let obj1={one: 1, two : 2, other:0};
let obj2={three: 3, four : 4, other:-1};

console.log("obj1:",obj1);
console.log("obj2:",obj2);

combined={
    one:obj1.one,
    two:obj1.two,
    three:obj2.three,
    four:obj2.four,
    other:obj1.other
}

console.log("기존 방식1 :",combined);

combined=Object.assign({},obj1,obj2);
console.log("기존 방식2-1 :",combined);

combined=Object.assign({},obj2,obj1);
console.log("기존 방식2-2 :",combined);

combined={
    ...obj1,
    ...obj2
}
console.log("기존 방식3 :",combined);

delete combined.other;
console.log(combined);