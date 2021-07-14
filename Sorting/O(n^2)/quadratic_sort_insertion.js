function insertionSort(arr) {
    var currentVal;
    for (var i = 1; i < arr.length; i++) {
        currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

insertionSort([2, 1, 9, 76, 4])

var data = Array.apply(null, { length: 100000 }).map(Function.call, Math.random);

console.log("RUNNING***");
var start = new Date().getTime();
var sorted = insertionSort(data);
console.log(sorted);
var end = new Date().getTime();
console.log(end - start);