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

    //find minimum of remaining elements
    var k=minIndex(a,i+1,j)

    //return minimum of current and remaining
    return (a[i]<a[k])?i:k
    
}
//recursive selection sort. n is size of a[] and index is index of starting element
function recurSelectionSort(a,n,index=0){
    //return when starting and size are same
    if(index==n){
        return;
    }
    //calling minimum index function for minimum index
    var k=minIndex(a,index,n-1)

    // swapping when index and minimum index are not same
    if(k!=index){
        [a[k],a[index]]=[a[index],a[k]]
    }
    //recursively calling selection sort function
    recurSelectionSort(a,n,index+1)

}
let a=[34,23,64,3,1,56,9]
let n=a.length
console.log("sorted array using recursive selection sort")
recurSelectionSort(a,n)
console.log(a.join(' '))