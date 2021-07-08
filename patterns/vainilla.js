//quadratic solution
function findSumZero(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {

                return [arr[i], arr[j]]
            }
        }
    }

}
//console.log(findSumZero([-5, -34, -23, -22, -21, 0, 1, 2, 3, 4, 6]));

//non quadratic solution
//implement a function that will sum the values of an array and return the value that is equal to zero
function findSumZero2(arr) {

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]]

        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }

}


//implement a function which takes a sorted array and counts the unique values
function uniqueValues(arr) {

    let arr2 = [];
    let i = 0;
    counter = 0;
    arr2.push(arr[0]);
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
            arr2.push(arr[i]);

        }
        //console.log(i, j);
    }

    return arr2.length;

}
//console.log(uniqueValues([1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4]));


//function that accepts array of ints and a number n.
//the function should calculate the maximum
//sum of n consecutive elements in the array

//naive way of doing a nested loop
function maxarraySum(arr, num) {
    if (num > arr.length) {
        return null;
    }
    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

//refractir o(n)

function maxarraySum2(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}



console.log(maxarraySum2([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

