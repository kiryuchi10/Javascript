//  forEach : 배열 내부 요소들을 하나씩 추출, 콜백함수로 전달
function testForEach() {
    console.log("============ testForEach");
    let source = ["Apple", "Banana", "Carrot", "Durian"];

    console.log("===== 요소들만 전달")
    source.forEach(item => {
        console.log(item);
    })

    console.log("===== 요소와 함께 인덱스 전달")
    source.forEach((item, index) => {
        console.log(`${index} -> ${item}`);
    });

    console.log("===== 요소, 인덱스와 함께 배열 자체도 전달")
    source.forEach((item, index, arr) => {
        console.log(`${index} -> ${item}`, arr);
    });
}
// testForEach();

function testEverySome() {
    let data = [
        { name: "홍길동", age: 28 },
        { name: "장길산", age: 35 },
        { name: "전우치", age: 25 }
    ];

    console.log("원본데이터:", data);

    //  data 내부의 모든 객체의 나이가 25세 초과하는지 검증
    let result = data.every(obj => {
        return obj.age > 25;    //  검증 로직
    });

    console.log("모든 인물의 나이가 25세 초과인가?", result);

    //  data 내부의 일부 객체의 나이가 25세 초과하는지 검증
    result = data.some(obj => obj.age > 25);

    console.log("일부 인물의 나이가 25세 초과인가?", result);
}
testEverySome();

const numbers=[1,2,3,4,5,6,7,8,9,10];
const source=[12,4,19,33,,86];

function testMap(){
    //numbers 배열의 모든 요소를 2배
    console.log("==============map");
    let multiply=[];
    for(let i=1;i<numbers.length;i++)
        {
            multiply.push(numbers[i]*2);
        }
         let result =numbers.map(item=>item*2);
         console.log("원본배열:",numbers);
         console.log("원본배열: *2",numbers);
         console.log("기존방식:*2",multiply);
    }
    testMap();

    function testFilter(){
        console.log("==============filter");
        let result = numbers.filter(item=>item%2==0);
        console.log("원본배열:",numbers);
        console.log("짝수데이터",result);
    }
testFilter();

    function testReduce(){
        console.log("==============filter");
        let sum = numbers.reduce((acc,value,index,arr)=>{
            console.log(`이전 값: ${acc}`,)
            console.log(`${arr}의 ${index}요소는 ${value}`)
            return acc+value;
        },0);
        console.log("원본배열:",numbers);
        console.log("합산결과",sum);
    }
    testReduce();
    
    function testReduce2(){
        //반복되는 모든 것에는 reduce 함수를 적용할 수 있다
        //map 함수의 기능을 reduce 함수로 구현해봄
        let result=numbers.reduce((acc,value,index,arr)=>{
            console.log(`callback params(acc:${acc},value:
                ${value},+index: ${index}, arr: ${arr}->${acc}
            )`);
        },[]) 
        console.log("원본배열:",numbers);
    }
    testReduce2();

    function testReduce3(){
        // 연습문제 : reduce 함수를 이용, filter 함수 구현해보기
        // reduce 함수를 이용, numbers 배열의 짝수 배열을 만들어보기
        let result=numbers.reduce((acc,value)=>{
            if(value%2==0){
                acc.push(value);
            }
            return acc;
        },[]);
            console.log("배열*2:",result)
        }
testReduce3();

const data =[
    {name:'철수',kor:85, eng:92, math:88},
    {name:'영희',kor:70, eng:74, math:95},
    {name:'지후',kor:91, eng:89, math:85},
    {name:'지수',kor:65, eng:70, math:72},
    {name:'윤정',kor:80, eng:90, math:91}        
];
    function testDataPipeline(){
        console.log("=============map,filter,reduce 데이터")
        console.log("원본데이터: ", data);
        //map 합산점수->total
        const studentsWithTotal=data.map(student =>({
            ...student,
            total: student.kor+student.eng+student.math
        }));
        //filter
        const filteredStudents=studentsWithTotal.filter(student=>
            student.total>240);
        //sort
        const sortedStudents=filteredStudents.sort(
            (a,b)=>a.total-b.total);
        //reduce 합산
        const reducedStudents=sortedStudents.reduce
            ((acc,student)=>acc=acc+student.total,0);
        const avgTotalScore=reducedStudents/sortedStudents.length
        console.log("map:",studentsWithTotal);
        console.log("filter:",filteredStudents);
        console.log("sorted:",sortedStudents);
        console.log("reduced:",reducedStudents);
        console.log("average:",avgTotalScore);
        console.log("데이터 파이프라인 구축:",
                    data.map(student =>({
                        ...student,
                        total: student.kor+student.eng+student.math
                    })).filter(student=>
                        student.total>240).sort(
                            (a,b)=>a.total-b.total)).reduce
                            ((acc,student)=>acc=acc+student.total,0)/3,0
                        };
testDataPipeline();