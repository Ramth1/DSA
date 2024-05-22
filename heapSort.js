// function sort(arr, size) {
//     let n = size;
//     // Build the heap
//     for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//         heapify(arr, n, i);
//     }

//     // Extract elements one by one from the heap
//     for (let i = n - 1; i >= 0; i--) { // Corrected the loop condition
//         var temp = arr[0];
//         arr[0] = arr[i];
//         arr[i] = temp;
//         // Rearrange the reduced heap
//         heapify(arr, i, 0);
//     }
// }

// function heapify(arr, N, i) {
//     var largest = i;
//     let l = 2 * i + 1;
//     let r = 2 * i + 2;

//     if (l < N && arr[l] > arr[largest]) {
//         largest = l;
//     }
//     if (r < N && arr[r] > arr[largest]) {
//         largest = r;
//     }
//     if (largest != i) {
//         var swap = arr[i];
//         arr[i] = arr[largest];
//         arr[largest] = swap;
//         heapify(arr, N, largest);
//     }
// }

// function printArray(arr, size) {
//     for (var i = 0; i < size; ++i) {
//         console.log(arr[i] + " ");
//     }
// }

// let arr = [2, 34, 21, 4, 5, 6, 32, 6];
// let size = arr.length;
// sort(arr, size);
// console.log("Sorted array:");
// printArray(arr, size);








function sort(arr) {
    let size = arr.length;

    // Build the heap (rearrange the array)
    for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
        heapify(arr, size, i);
    }

    // One by one extract elements from the heap
    for (let i = size - 1; i > 0; i--) {
        // Move current root to the end
        var temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // Call max heapify on the reduced heap
        heapify(arr, i, 0);
    }
}

function heapify(arr, N, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if (l < N && arr[l] > arr[largest]) {
        largest = l;
    }

    if (r < N && arr[r] > arr[largest]) {
        largest = r;
    }

    if (largest != i) {
        var swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;

        // Recursively heapify the affected subtree
        heapify(arr, N, largest);
    }
}

function printArray(arr) {
    for (let i = 0; i < arr.length; ++i) {
        console.log(arr[i] + " ");
    }
}

let arr = [13, 2, 54, 32, 27, 3, 6, 98];
sort(arr);
console.log('Sorted array:');
printArray(arr);
