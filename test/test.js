// let arr=[0,0,1] 

// let newArr = arr.map((item)=>{return item*2})

// console.log(newArr);


// Q2
// function calculator(a, b, operation) {

//     if (operation === "add" ){
//         return a + b;
//     }

//     else if (operation === "subtract" ){
//         return a - b;
//     }
// }

// console.log(calculator(5,3, "add"))
// console.log(calculator(5,3, "subtract"))


// Q3

// let arr1=[0,0,1]
// let arr2=[5,5,5]
// let arr3=[5,5,5]

// function combiner(){
//     let combinedArr=[]
//     arr1.forEach((item,index)=>{
//         combinedArr.push(arr1[index]+arr2[index]+arr2[index])
//     })
//     return combinedArr
// }

// let val=combiner(arr1,arr2, arr3)
// console.log(val)


// Q4 (different length arrays)

let arr1=[0,0,1]
let arr2=[5,5,5,4,5,6]
let arr3=[5,5,5,2]
let arr4 = [0,1,2]

function combiner(){
    let combinedArr=[]
    for (let i = 0; i < arr1.length; i++) {
        let element = array[i];
 
    }
    // arr1.forEach((item,index)=>{
    //     combinedArr.push(arr1[index]+arr2[index]+arr3[index]+arr4[index])
    // })
    // return combinedArr
}

let val=combiner(arr1,arr2, arr3, arr4)
console.log(val)