
// Merges two already sorted arrays
function mergeSorted(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

// Recrusive Merge Sort
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let sright = mergeSort(arr.slice(mid));
    return mergeSorted(left, sright);
}

mergeSort([5, 2, 4, 6, 1, 3]);

//console.log(mergeSort([10, 5, 76, 2]));
//console.log("Hello");

//console.log(mergeSorted([100, 200], [1, 2, 3, 5, 6]));


var data = Array.apply(null, { length: 100000 }).map(Function.call, Math.random);

console.log("RUNNING***");

var start = new Date().getTime();
var sorted = mergeSort(data);
console.log(sorted);
var end = new Date().getTime();
console.log(end - start);


