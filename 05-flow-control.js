// for 문 구구단
for(let i=2;i<10;i++)
    {
    for(let j=1;j<10;j++){
        console.log(i,"*",j,"=",i*j);
    }
}
console.log("===============")
//while 문 구구단
let idx=1;

let i =1;
while (i<=9) {
  let j = 1;
  while (j <=9) {
    console.log(i, "*" ,j,"=",i * j);
    j++;
  }
  i++;
}

console.log("===============")


//*****
//**** 
//***
//**
//*

for(let i=5;i>0;i--){
    console.log("*".repeat(i));
}

const obj={
  name : "홍길동",
  age : 28,
  job : "도적"
}


for(let key in obj){
  console.log(`${key}->${obj[`key`]}`);
}