
//Notes for my students


// program to count down numbers to 1
const num = 4;


//***************** sum range using loop ********************** */

function sumRange(num) {
    if (num === 1)
        return 1;
    console.log(num);
    return num + sumRange(num - 1)

}

let totalsum = sumRange(num);
console.log("The recursion of sum range of " + num + " is " + totalsum);

//***************** sum range using loop ********************** */
function sumRangeloop(num) {
    let counter = 0;
    for (let i = 1; i <= num; i++) {
        console.log(i);
        counter = counter + i;
    }
    return counter;
}


let total = sumRangeloop(num);
console.log("The loop of sum range of " + num + " is " + total);


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

//***************** Collectiong odd values using recursion ********************** */

function oddValues(arr) {

    let result = [];

    function looper(arrInput) {
        if (arrInput.length === 0) {
            return;
        }
        if (arrInput[0] % 2 !== 0) {
            result.push(arrInput[0]);
        }

        looper(arrInput.slice(1))
    }
    looper(arr);
    return result;
}

console.log(oddValues([1, 2, 3, 4, 5]));

//***************** Collectiong odd values using recursion refactor ********************** */

function oddValuesRecursion(arr) {
    let result = [];
    if (arr.length === 0) {
        return result;
    }

    if (arr[0] % 2 !== 0) {
        result.push(arr[0]);
    }

    result = result.concat(oddValuesRecursion(arr.slice(1)));

    return result;

}

console.log(oddValuesRecursion([1, 2, 3, 4, 5]));