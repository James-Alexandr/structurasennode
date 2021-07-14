function pivot(arr, start = 0, end = arr.length - 1) {


    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
            //console.log(arr);

        }
    }

    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    //console.log(arr);
    return swapIdx;
}

pivot([4, 8, 2, 1, 5, 7, 6, 3])

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right) //3
        //left
        quickSort(arr, left, pivotIndex - 1);
        //right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}



let data = Array.apply(null, { length: 100000 }).map(Function.call, Math.random);

console.log("RUNNING***");

let start = new Date().getTime();
let sorted = quickSort(data);
console.log(sorted);
let end = new Date().getTime();
console.log(end - start);



// First Version
// function pivot(arr, start=0, end=arr.length+1){
//     function swap(array, i, j) {
//       var temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//     }

//     var pivot = arr[start];
//     var swapIdx = start;

//     for(var i = start + 1; i < arr.length; i++){
//       if(pivot > arr[i]){
//         swapIdx++;
//         swap(arr,swapIdx,i);
//       }
//     }
//     swap(arr,start,swapIdx);
//     return swapIdx;
//   }