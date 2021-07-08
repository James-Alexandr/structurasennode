
const readline = require('readline');

// program to count down numbers to 1
const num = 4;

//***************** countdown using recursion ********************** */

function countDown(number) {

    // display the number
    console.log(number);

    // decrease the number value
    const newNumber = number - 1;

    // base case
    if (newNumber > 0) {
        countDown(newNumber);
    }
}



//countDown(5);


//***************** countdown using loop ********************** */

function countDown2(num) {
    for (let i = num; i >= num; i--) {
        console.log(i);
    }
    return;
}


console.log("The loop of countdown 2 ");
countDown2(5);

//***************** Factorial using recursion ********************** */


function factorial(x) {

    // if number is 0
    if (x === 0) {
        return 1;
    }
    // if number is positive
    else {
        console.log(x);
        return x * factorial(x - 1);
    }
}
// calling factorial() if num is non-negative
if (num > 0) {
    let result = factorial(num);
    console.log(`The factorial recursive of ${num} is ${result}`);
}

function factorial2(num) {

    // if number is 0
    if (num === 1) {
        return 1;
    }
    // if number is positive
    else {
        console.log(num);
        return num * factorial2(num - 1);
    }
}
// calling factorial() if num is non-negative
if (num > 0) {
    let result = factorial2(num);
    console.log(`The factorial recursive 2 of ${num} is ${result}`);
}



//***************** Factorial using Loops ********************** */

function factorialLoop(num) {
    let count = 1;
    for (let i = 1; i <= num; i++) {
        count = count * i
        console.log(i);
    }
    return count;
}

let result = factorialLoop(num);
console.log(`The factorial of ${num} is ${result}`);

function factorialLoop2(num) {
    let count = 1;
    for (let i = num; i > 1; i--) {
        count = count * i
        console.log(i);
    }
    return count;
}

let result2 = factorialLoop2(num);
console.log(`The factorial of ${num} is ${result2}`);