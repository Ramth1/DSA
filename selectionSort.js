// function swap(array,l,h){
//     let temp
//     temp=array[l]
//     array[l]=array[h]
//     array[h]=temp
// }
// function selectionSort(array,n){
//     for(let i=0;i<n-1;i++){
//         let min_index=i
//         for(let j=i+1;j<n;j++){
//             if(array[j]<array[min_index]){
//                 min_index=j
//             }
//             swap(array,min_index,i)
//         }
//     }

// }
// function printArray(array,n){
//     for(let i=0;i<n;i++){
//         console.log(array[i])
//     }

// }

// let array=[1,23,5,3,43,62]
// let n=6
// selectionSort(array,n)
// console.log("sorted array")
// printArray(array,n)

// recursion selection sort
function minIndex(a,i,j){
    if(i==j)
        return i;
    
}