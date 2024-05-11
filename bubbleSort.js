// function bubbleSort(array,n){
//     for(let i=0;i<n-1;i++){
//         swapped=false;
//         let temp
//         for(let j=0;j<n-i-1;j++){
//             if(array[j]>array[j+1]){
//                 temp=array[j]
//                 array[j]=array[j+1]
//                 array[j+1]=temp
//                 swapped=true;
//             }
//         }
//         if(swapped==false){
//             break;
//         };
//     }

// }
// let array=[9,1,34,5,3,2]
// let n=array.length
// console.log("before sorting")
// for(i=0;i<n-1;i++){
//     console.log(array[i])
// }
// bubbleSort(array,n)
// console.log("after sorting")
// for(i=0;i<n;i++){
//     console.log(array[i])
// }


// recursion BubbleSort
function recursionBubble(array,n){
    let temp
    if(n==1){
        return;
    }
    let count=0
    for(let i=0;i<n;i++){
        if(array[i]>array[i+1]){
            temp=array[i]
            array[i]=array[i+1]
            array[i+1]=temp
            count++
        }
    }
    if(count==0){
        return;
    }
    recursionBubble(array,n-1)
}
let array=[13,12,19,15,4,23,5]
let n=array.length
console.log("before sorting")
for(let i=0;i<n;i++){
    console.log(array[i])
}
recursionBubble(array,n)
console.log("after recursion sorting")
for(let i=0;i<n;i++){
    console.log(array[i])
}