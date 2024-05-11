// // to delete using binary search
// function binarySearch(arr,value,low,high){
//     let mid=(low+high)/2
//     if(high<low){
//         return -1
//     }
//     if(arr[mid]==value){
//         return mid
//     }
//     if(arr[mid]>value){
//         return binarySearch(arr,value,low,mid-1)
//     }
//     return binarySearch(arr,value,mid+1,high)

// }
// function deleteOperation(arr,value,n){
//     let pos=binarySearch(arr,value,0,n-1)
//     if(pos ==-1){
//         console.log("elements not found")
//         return n
//     }
//     for(let i=pos;i<n-1;i++){
//         arr[i]=arr[i+1]
//     }
//     return (n-1);
// }
// let arr=[1,2,3,4,5,6,7,8]
// let value=4
// let n=arr.length

// console.log("before deletion")
// for(let i=0;i<n;i++){
//     console.log(arr[i])
// }
// n=deleteOperation(arr,value,n)
// console.log("after deletion")
// for(let i=0;i<n;i++){
//     console.log(arr[i])
// }





// JavaScript program to delete an 
// element from a sorted array 

    // binary search 
    function binarySearch(arr, low, high, key) 
    { 
        if (high < low) 
            return -1; 
        let mid = (low + high) / 2; 
        if (key == arr[mid]) 
            return mid; 
        if (key > arr[mid]) 
            return binarySearch(arr, (mid + 1), high, key); 
        return binarySearch(arr, low, (mid - 1), key); 
    } 

    /* Function to delete an element */
    function deleteElement( arr, n, key) 
    { 
        // Find position of element to be deleted 
        let pos = binarySearch(arr, 0, n - 1, key); 

        if (pos == -1) { 
            console.log("Element not found"); 
            return n; 
        } 

        // Deleting element 
        let i; 
        for (i = pos; i < n - 1; i++) 
            arr[i] = arr[i + 1]; 

        return n - 1; 
    } 

    /* Driver Code */
    
        let i; 
        let arr = [ 10, 20, 30, 40, 50 ]; 

        let n = arr.length; 
        let key = 30; 

        console.log("Array before deletion:\n"); 
        for (i = 0; i < n; i++) 
            console.log(arr[i] + " "); 

        n = deleteElement(arr, n, key); 

        console.log("<br>"+"Array after deletion:\n"); 
        for (i = 0; i < n; i++) 
            console.log(arr[i] + " "); 
// this code is contributed by shivanisinghss2110 


