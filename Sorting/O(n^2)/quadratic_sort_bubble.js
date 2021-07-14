const numbersMedium = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14',
    '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26',
    '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38',
    '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50'
];

const numbers = [5, 9, 4, 3, 15];

var result = numbersMedium.map(function (x) {
    return parseInt(x, 10);
});


// Optimized BubbleSort with noSwaps
function bubbleSort(arr) {
    var noSwaps;
    for (var i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (var j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

function bblSort(arr) {

    for (var i = 0; i < arr.length; i++) {

        // Last i elements are already in place  
        for (var j = 0; j < (arr.length - i - 1); j++) {

            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (arr[j] > arr[j + 1]) {

                // If the condition is true then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    // Print the sorted array
    console.log(arr);
}



//console.log(bubbleSort(result));

var arr = [234, 43, 55, 63, 5, 6, 235, 547];


// Now pass this array to the bblSort() function



var data = Array.apply(null, { length: 100000 }).map(Function.call, Math.random);

// var start = new Date().getTime();
// bblSort(data);
// var end = new Date().getTime();
// console.log(end - start);

console.log("RUNNING***");

var start = new Date().getTime();
var sorted = bubbleSort(data);
console.log(sorted);
var end = new Date().getTime();
console.log(end - start);
