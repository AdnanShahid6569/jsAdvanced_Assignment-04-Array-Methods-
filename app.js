// Array Methods

// Map   // q 01

const arrays = [
    45,
    true,
    "hello world",
    {
        name:"adnan",
        age:20,
        instudent:false
    },
    false,
    3.14,
    "javascript is fun"
]

// let element = arrays.map((e,i)=>{
//  let store =  e.toString()   
//  for(j = 0; j < store.length; j++){
//     console.log(store[j]);
    
//  }
// })
// console.log(element);

let element2 = arrays.map((e,i)=>{
    return e.toString()
})
console.log(element2);



// Filter   // q 02

// let numFilter = arrays.filter((e,i)=>{
//     return e ===  Number(e)
//     // return typeof e === 'number';
// })
// console.log(numFilter);




// forEach   // q 03
// let checkType = arrays.forEach((e,i)=>{
//     console.log( typeof e );
    
// })



// reduce   // q 04
// let element = arrays.reduce((a, b) => {
//   return a + b 
// });
// console.log(element);






// Find    // q 05
// let checkboolean = arrays.find((e,i)=>{
//     // return e === Boolean(e)
//     return typeof e === "boolean"
// })
// console.log(checkboolean);



// // findindex    // q 06
// let checkIndex = arrays.findIndex((e,i)=>{
//     return typeof e === 'object'
// })
// console.log(checkIndex);



// some   // q 07
// let checknum = arrays.some((e,i)=>{
//     return typeof e === 'number'
// })

// console.log(checknum);




// every     // q 08
// let checkstr = arrays.every((e,i)=>{
//     return typeof e === 'string'
// })

// console.log(checkstr);



