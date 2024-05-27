// 한 줄 주석
/*
    여러 줄 주석
    : 주석의 사용 방법은 C와 동일
*/
// console 객체 : 출력 장치에 로그 레벨별로 로그 출력하는 객체
// FATAL - ERROR-WARN -NORMAL(log,info)

console.info("정보메세지 출력")
console.debug("디버그 메세지 출력")
console.log("일반 메세지")
console.error("에러 메세지")

console.log("string",2024,true)

console.log(process.version,process.platform)

console.log(Math.PI)

console.log(Math.max(1,3,2,4,6))

testVar="var changed";
testLet="let changed";

let v ="this is String";
console.log(v,"->",typeof v);
v=2024;
v=10>8;
console.log("10>8",v,"->",typeof v);