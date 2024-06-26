// let arr=[1,2,3,4,5];
// let print=function(el){
//     console.log(el);
// }
// arr.forEach(print);
//  arr.forEach(function(el) {
//     console.log(el);
//  });

// arrow function

// let arr=[1,2,3,4,5];
// arr.forEach ((el) =>{
//     console.log(el);
// });
//  
// __object function Example__

// let arr=[
//     {
//         name:"Ritik",
//         marks:97,
//         work:"RTYJ",
//     },

//     {
//         name:"Amod",
//         marks:96,
//         work: "SDFG",
//     },

//     {
//         name:"Zibran",
//         marks:93,
//         work:"ABCD",
//     }
// ];
// arr.forEach((students) =>{
//     console.log(students.marks);
// });

// map fuction

// let  num=[1,2,3,4];
// let double= num.map(function(el){
//     return el*2;
// });

// let arr=[2,4,5,6,7];

// let double = arr.map(function(el){
//     return el*el;
// });

// let students=[
//         {
//             name:"Ritik",
//             marks:97,
//             work:"RTYJ",
//         },
    
//         {
//             name:"Amod",
//             marks:96,
//             work: "SDFG",
//         },
    
//         {
//             name:"Zibran",
//             marks:93,
//             work:"ABCD",
//         }
//     ];
    
//     let gpa= students.map((el) => {
//         return el.marks / 10;
//     });

// filter function;

// let num=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];

// let ans=num.filter((el) => {
//     return el%2==0;
// });
    

// let num=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];

// let ans=num.filter((el) => {
//     return el%2!=0;
// });
    

// let num=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];

// let ans=num.filter((el) => {
//     return el<8;
// });

// let num=[2,3,4,5,6,,78,9,97,45,44,56];
// let ans= num.filter((el)=>{
//     return el>70;
//     });
    

// reduce function;

// let nums=[1,2,3,4,5,6];
//  let finalval= nums.reduce((res,el)=> {
//     console.log(res);
//     return res+el;
// });
//  console .log(finalval);

// let arr=[1,3,2,4,6,5,4,7,23,45,43,12,14];
// let max=-1;
// for(let i=0;i<arr.length;i++){
//     if(max<arr[i]){
//         max= arr[i];
//     }
    
// }
// console.log(max);

// let arr=[1,3,2,4,6,5,4,7,23,45,43,12,14];
// let max=arr.reduce((max, el) => {
//     if(max<el){
//         return el;
//     }
//     else{
//         return max;
//     }
// });
// console.log(max);

// let arr=[10,210,30];
// let ans= arr.every((el) =>
// el%10==0);
   
//     console .log(ans);

// let odd=[1,3,5,7,9];
// let even=[2,4,6,8];
// let nums=[...odd,...even];

const data={
    email:"dritik100@gmail.com",
    pass:"Abcf"
};
const dataCopy={...data,id:123, country:"India"};