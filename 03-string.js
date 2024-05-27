//string
const s1= "Modern JavaScript and Java";
const s2= String("Modern JavaScript and Java");
console.log(typeof s1, typeof s2);

console.log("String",s1,",length:",s1.length);

console.log(s1.charAt(7));
console.log(s1.substr(7,10));
console.log(s1.substring(7,10));

let position;
position=s1.indexOf("Java");
console.log("1st search",position);
position+=4;
position=s1.indexOf("Java");
console.log("2nd search",position);
console.log("No Keyword:",s1.indexOf("java"));
console.log("lastindexOf:",s1.lastIndexOf("Script"));

console.log(s1.replace("JavaScript","JS"));
console.log(s1);

// ES String 보충
// 이스케이프 -> 키보드로 입력 불가하거나 특수한 의미를 가진 문자 (\)
// \'
// \"
// \`