// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLastWord = function(s) {
//     let s1=s.split(" ")
//     console.log(s1);
//     let j=s1.length-1
//     while(s1.at(j)=="")
//     {
//         j--;
//         continue;
//     }
//     if(s1[j]!=" ")
//         return s1[j].length 
// };
// s="hello  bfghj yui poiuytrfgh jhgfghworld"
// console.log(lengthOfLastWord(s));

// const obj1=[{name:"irshana",score:50,age:23},{name:"shana",score:70,age:21},{name:"alex",score:30,age:34},
//     {name:"chandini",score:23,age:15},{name:"manoj",score:45,age:13}
// ]
// function names(obj1)
// {
//     let n1=obj1.map(n=>n.name)
//     console.log(n1);
//     let score=obj1.reduce((acc,cur)=>acc+cur.score,0)
//     console.log(`total=${score}`);
//     let score5=obj1.reduce((acc,cur)=>acc+cur.score,5000)
//     console.log(`total=${score5}`);
//     const b=obj1.filter(num=>num.age>18).map(name=>name.name)
//     console.log("above 18 "+b);
//     const a1=obj1.map(({name,age})=>({name,age}))
//     console.log(a1);
    
    
// }
// names(obj1)


const students = [
  {
    name: 'John',
    age: 20,
    score: {
      math: 85,
      physics: 90
    }
  },
  {
    name: 'Alice',
    age: 21,
    score: {
      math: 78,
      physics: 88
    }
  },
  {
    name: 'Bob',
    age: 22,
    score: {
      math: 92,
      physics: 95
    }
  }
];

const r=students.map(students=>{
    let avg=(students.score.math+students.score.physics)/2
   return  {
    name:students.name,
    avg:avg
   }
})
console.log(r);
function NameAge(obj1){
    let a=obj1.map(students=>{
        return{
            name:students.name,
            age:students.age
        }
    })
    console.log(a);
    
}
NameAge(students)
