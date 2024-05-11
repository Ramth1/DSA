// insert in a sorted array

// function insertOperation(array,value,n,capacity){
//     if(n>capacity)
//         return n
//     array[n]=value
// }
// let array=new Array(10)
// array[0]=1
// array[1]=2
// array[2]=3
// array[3]=4
// array[4]=5
// array[5]=6
// let n=6
// let value=7
// let capacity=array.length
// console.log("before insertion")
// for(let i=0;i<n;i++)
//     {
//         console.log(array[i])
//     }
// insertOperation(array,value,n,capacity)
// n +=1
// console.log("after insertion")
// for(let i=0;i<n;i++)
//     {
//         console.log(array[i])
//     }


// using binary search method
function insertOperation(array,value,n,capacity){
    if(n>capacity)
        return n
    let i
    for(i=n-1;(i>=0 && array[i]>value);i--){
        array[i+1]=array[i]
    }
    array[i+1]=value
    return n+1;

}
let array=new Array(10)
array[0]=1
array[1]=2
array[2]=3
array[3]=4
array[4]=5
array[5]=6
let n=6
let value=7
let capacity=array.length
console.log("before insertion")
for(let i=0;i<n;i++)
    {
        console.log(array[i])
    }

n =insertOperation(array,value,n,capacity)
console.log("after insertion")
for(let i=0;i<n;i++)
    {
        console.log(array[i])
    }

