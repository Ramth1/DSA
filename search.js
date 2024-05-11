// search in a sorted array

function searchOperation(arr,value,low,high){
    let mid=(high+low)/2

    if(high<low){
        return -1
    }
    if(arr[mid]==value){
        return mid
    }
    if(arr[mid]<value){
        return searchOperation(arr,value,mid+1,high)
    }
    return searchOperation(arr,value,low,mid-1)
}
let arr=[1,2,3,4,5,6]
let value=4
let n=arr.length

n=searchOperation(arr,value,0,n)
console.log("the element is found at position",n)