function insertionSort(array,n){
    
    let j;
    for(let i=1;i<n;i++){
        let temp=array[i]
        j=i-1
        while(j>=0 && array[j]<temp){
            array[j+1]=array[j];
            j=j-1;
        }
        array[j+1]=temp
    }
}
let array=[23,1,10,5,2]
let n=array.length
console.log("before insertionSort algorithm")
for(let i=0;i<n;i++){
    console.log(array[i])
}
insertionSort(array,n)
console.log("after insertionSort algorithm")
for(i=0;i<n;i++){
    console.log(array[i])
}