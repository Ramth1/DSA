function partition(arr,low,high){
    let pivot=arr[high]
    let i=low-1
    for(j=low;j<=high-1;j++){
       
        if(arr[j]<pivot){
            i++;
            [arr[i],arr[j]]=[arr[j],arr[i]];
        }
        
    }
    [arr[i+1],arr[high]]=[arr[high],arr[i+1]]
    return i+1;
}

function quickSort(arr,low,high){
    if(low<high){
        let par=partition(arr,low,high)

        quickSort(arr,low,par-1)
        quickSort(arr,par+1,high)
    }

}
let arr=[1,34,54,44,2,4]
let n=arr.length

quickSort(arr,0,n-1)
console.log("sorted array")
console.log(arr.join(" "))