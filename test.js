// //return largest number in array
// function findLargestNumber(array) {
//     var largestNum = array[0];
//     for (var i = 1; i < array.length; i++) {
//         largestNum = array[i];
//         if (largestNum > array[i]) {
//             largestNum = array[i];
//         };
//         console.log(array[i]);

//     }
//     return largestNum;
// }




// let numbersMedium = [
//     '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14',
//     '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26',
//     '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38',
//     '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50'
// ];

// const terminator = ".",
//     openers = "{[(",
//     following = {
//         "[": "]",
//         "{": "}",
//         "(": ")",
//     };

// var correctOrder = function (s) {
//     s = s + terminator;
//     const stack = [terminator];
//     for (const c of s) {
//         if (openers.includes(c)) {
//             stack.push(following[c]);
//         } else {
//             if (stack.pop() != c) {
//                 return false;
//             }
//         }
//     }
//     return true;
// };
// console.log(correctOrder("({(())})"));
// console.log(correctOrder("({((}))})"));

// let data = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10) + 1);
// console.log(data);


//write a program that genrates ramdon number
//write a fucntion which takes in a string and returns counts of each character in the string

function countChar(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

//console.log(countChar("hello", "l"));
//console.log(countChar("hello", "h"));

//write a function that takes in a string and returns the number of vowels in the string

function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
            count++;
        }
    }
    return count;
}

//console.log(countVowels("hello"));

// Given a number n, for each interger i in the range 1 to n, print one value per line as follows:
// if i is a multiple of both 3 and 5, print "FizzBuzz"
// if i is a multiple of 3, print "Fizz"
// if i is a multiple of 5, print "Buzz"
// if i is not a multiple of 3 or 5, print the value of i


// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }

// fizzBuzz(5);


//console.log(fizzBuzz(15));

// A climber is trying to reach a flag that is some height above the ground. In the attempt to reach the flag, the climber can make any number of jumps up the rock wall where the flag is mounted. Movements can only be made up the wall, and the climber must end at exactly the height of the flag.

// There are two types of jumps:
// 1. a jump of height 1
// 2. a jump of bigJump

//Determine the minimum number of jumps required to reach the flag.


//Example 
//flagHeight = 8
//bigJump = 3

//The climber starts at height 0, takes two jumps of height bigJump, and two of height 1, to react exactly 8 units in 4 jumps.

//jumps has the following values:
//int flagHeight: an integer representing the height of the flag
//int bigJump: an integer representing the height of a big jump

//return:
//an integer representing the minimum number of jumps required to reach the flag


// function minJumps(flagHeight, bigJump) {
//     let jumps = 0;
//     let height = 0;
//     while (height < flagHeight) {
//         jumps++;
//         height += bigJump;
//         if (height >= flagHeight) {
//             return jumps;
//         }
//         height += 1;
//     }
// }

//Create a function that says hi

// function sayHi() {
//     return "Hi";
// }

//Create a function that takes in a string and returns the first character of the string

// function firstCharacter(str) {
//     return str[0];
// }

//Create a function that takes in a string and returns the last character of the string

// function lastCharacter(str) {
//     return str[str.length - 1];
// }

//Create a function that takes in a string and returns the middle character of the string

// function middleCharacter(str) {
//     return str[Math.floor(str.length / 2)];
// }

//Create a function that takes in a string and returns the number of characters in the string

// function numberOfCharacters(str) {
//     return str.length;
// }

//Create a function that takes in a string and returns the number of vowels in the string

//Given a number n, for each interger i in the range 1 to n inclusive, print one value per line as follows:
// if i is a multiple of both 3 and 5, print "FizzBuzz"
// if i is a multiple of 3(but not 5), print "Fizz"
// if i is a multiple of 5(but not 3), print "Buzz"
// if i is not a multiple of 3 or 5, print the value of i


function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}


console.log(fizzBuzz(20));



//Write a function sortByAscending that accepts a string in JSON fromat, orders items by price in ascending order, if two produts have the same price, it orders them by name in alphabetical order, returns a string in JSON format that is equivalent to the one in the input format.


function sortByAscending(str) {
    let obj = JSON.parse(str);
    let sorted = obj.sort((a, b) => {
        if (a.price === b.price) {
            return a.name > b.name ? 1 : -1;
        } else {
            return a.price > b.price ? 1 : -1;
        }
    });
    return JSON.stringify(sorted);
}

console.log(sortByAscending('[{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}]'));


//Write a function that generates a list of 10,000 random numbers each time it is called. Each number in the list must be unique and must be between 1 and 10,000 (inclusive).


function randomNumbers() {
    let numbers = [];
    for (let i = 0; i < 10000; i++) {
        let number = Math.floor(Math.random() * 10000) + 1;
        if (numbers.indexOf(number) === -1) {
            numbers.push(number);
        } else {
            i--;
        }
    }
    return numbers;

}


var start = +new Date();  // log start timestamp
console.log(randomNumbers());
var end = +new Date();  // log end timestamp
var diff = end - start;
console.log('Execution time 1: ' + diff + ' ms');

function randomNumbers2() {
    let arr = [];
    for (let i = 0; i < 10000; i++) {
        let num = Math.floor(Math.random() * 10000) + 1;
        if (arr.includes(num)) {
            i--;
        } else {
            arr.push(num);
        }
    }
    return arr;
}

var start = +new Date();  // log start timestamp
console.log(randomNumbers2());
var end = +new Date();  // log end timestamp
var diff = end - start;
console.log('Execution time 2: ' + diff + ' ms');



function randomNumbers3() {
    let arr = [];
    for (let i = 0; i < 10000; i++) {
        let num = Math.floor(Math.random() * 10000 + 1);
        if (arr.includes(num)) {
            i--;
        } else {
            arr.push(num);
        }
    }
    return arr;
}


var start = +new Date();  // log start timestamp
console.log(randomNumbers3());
var end = +new Date();  // log end timestamp
var diff = end - start;
console.log('Execution time 3: ' + diff + ' ms');


function randomNumbers4() {
    let arr = [];
    for (let i = 0; i < 10000; i++) {
        let num = Math.floor(Math.random() * 10000) + 1;
        if (arr.indexOf(num) === -1) {
            arr.push(num);
        } else {
            i--;
        }
    }
    return arr;
}

var start = +new Date();  // log start timestamp
console.log(randomNumbers4());
var end = +new Date();  // log end timestamp
var diff = end - start;
console.log('Execution time 4: ' + diff + ' ms');

function randomNumbers5() {
    let arr = [];
    for (let i = 0; i < 10000; i++) {
        let num = Math.floor(Math.random() * 10000 + 1);
        if (arr.indexOf(num) === -1) {
            arr.push(num);
        } else {
            i--;
        }
    }
    return arr;
}

var start = +new Date();  // log start timestamp
console.log(randomNumbers5());
var end = +new Date();  // log end timestamp
var diff = end - start;
console.log('Execution time 5: ' + diff + ' ms');

function randomNumbers6() {
    let nums = [];
    for (let i = 0; i < 10000; i++) {
        let num = Math.floor(Math.random() * 10000) + 1;
        if (nums.includes(num)) {
            i--;
        } else {
            nums.push(num);
        }
    }
    return nums;
}

var start = +new Date();  // log start timestamp
console.log(randomNumbers6());
var end = +new Date();  // log end timestamp
var diff = end - start;
console.log('Execution time 6: ' + diff + ' ms');


function randomNumbers7() {
    let list = [];
    for (let i = 0; i < 10000; i++) {
        let num = Math.floor(Math.random() * 10000) + 1;
        if (list.includes(num)) {
            i--;
        } else {
            list.push(num);
        }
    }
    return list;
}

var start = +new Date();  // log start timestamp
console.log(randomNumbers7());
var end = +new Date();  // log end timestamp
var diff = end - start;
console.log('Execution time 7: ' + diff + ' ms');


function randomNumbers8() {
    let list = [];
    for (let i = 0; i < 10000; i++) {
        let num = Math.floor(Math.random() * 10000 + 1);
        if (list.includes(num)) {
            i--;
        } else {
            list.push(num);
        }
    }
    return list;
}

var start = +new Date();  // log start timestamp
console.log(randomNumbers8());
var end = +new Date();  // log end timestamp
var diff = end - start;
console.log('Execution time 8: ' + diff + ' ms');
