//LInear search
//Array with the 50 states
let states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
    'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
    'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
    'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
    'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
    'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia',
    'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

//indexOF
console.log(states.indexOf('California'));

//Includes
console.log(states.includes('Alabama'));

//find
console.log(states.find(element => element === 'Texas'));

//findIndex
console.log(states.findIndex(element => element === 'Kansas'));


//function that accepts an array and a value called linearsearching, loop through the array and check if element is in array.


function linearSearch(array, searchTerm) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === searchTerm) {
            return i;
        }
    }
    return -1;
}

//console.log(linearSearch(states, 'California'));


const numbersMedium = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14',
    '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26',
    '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38',
    '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50'
];

var result = numbersMedium.map(function (x) {
    return parseInt(x, 10);
});

//binary search in an array
const numbers = [1, 2, 3, 4, 5];

function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if (arr[middle] === elem) {
        return middle;
    }
    return -1;
}


console.log(binarySearch(result, 20));