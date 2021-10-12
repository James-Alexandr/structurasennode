console.log('Hello World');

// 1) Write a function that given a list of countries, returns the country(s) that occur the least/min times
// Example:- ["Argentina", "Cuba", "Chile", "Argentina"]
// Result:-
// ["Cuba", "Chile"] 

function occurLeast(array) {

    let count = {};
    let least = Infinity;
    let result;

    for (let i = 0; array.length; i++) {
        let num = array[i];
        count[num] = count[num] ? count[num] + 1 : 1;
        if (count[num] > least) {
            least = count[num];
            result = num;
        }

    }
    return result;
}

let array = ["Argentina", "Cuba", "Chile", "Argentina"];

console.log(occurLeast(array));

// 2) Find the 2nd largest and 2nd smallest number in two arrays of numbers combined
// Example:- [10,5,7,2,4,1,24] & [8,23,29,25,40,0,24]
// Result:-
// 2nd Largest: 29 && 2nd Smallest: 1 

function combine(arr1, arr2) {
    return;
}

function findSecondLargest(array) {
    return
}

function findSecondSmallest(array) {
    return
}

// 3) Write a function to represent a Triangle, given input is the number of rows of the triangle
// Example - if the number of rows are 3
// Result:-
// 1
// 2 3
// 4 5 6
