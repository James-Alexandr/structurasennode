const numbersMedium = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14',
    '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26',
    '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38',
    '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50'
];

const numbers = [
    5, 9, 4, 3, 15];

var result = numbersMedium.map(function (x) {
    return parseInt(x, 10);
});


function bubbleSort(arr) {
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

console.log(bubbleSort(numbers));


function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var min = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
}
