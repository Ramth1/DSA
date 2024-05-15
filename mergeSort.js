function merge(arr,index,mid,n){
    var n1=mid-index+1
    var n2=n-mid

    let L=new Array(n1)
    let R=new Array(n2)
    for(let i=0;i<n1;i++){
        L[i]=arr[i]
    }
    for(let j=0;j<n2;j++){
        R[j]=arr[mid+1+j]
    }
    var i=0 //starting index for first subarray
    var j=0 //starting index for second subarray
    var k=0 //starting index for third subarray

    while(i<n1 && j<n2){
        if(L[i]<R[j]){
            arr[k]=L[i]
            i++
            k++
        }else{
            arr[k]=R[j]
            j++
            k++
        }
    }
    while(i<n1){
        arr[k]=L[i]
        i++
        k++
    }
    while(j<n2){
        arr[k]=R[j]
        j++
        k++
    }
}
function mergeSort(arr,n,index=0){
    if(index>=n)
        return;
    var mid=index+ parseInt((n-index)/2)
    mergeSort(arr,index,mid)
    mergeSort(arr,mid+1,n)
    merge(arr,index,mid,n)

}
let arr=[1,2,42,53,23,64,7,5,34]
let n=arr.length
console.log("before mergesort");
for(let i=0;i<n;i++){
    console.log(arr[i])
}
console.log("after mergeSort");
mergeSort(arr,n)
for(let i=0;i<n;i++){
    console.log(arr[i])
}