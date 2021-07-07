const { performance } = require('perf_hooks');

console.log("Tester running");
//#####################################################

//Naive approach
function addUpto(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total = total + i;

        // console.log("this is i " + i);
        // console.log("this is total " + total);
    }
    return total;
}

//Efficient approach
function addUp(n) {
    return n * (n + 1) / 2;
}


// console.log(addUp(7));


// let t1 = performance.now();
// addUpto(10000000000);
// let t2 = performance.now();
// console.log("Time elapsed: " + (t2 - t1) / 1000 + " seconds.");


// let t3 = performance.now();
// addUp(10000000000);
// let t4 = performance.now();
// console.log("Time elapsed: " + (t3 - t4) / 1000 + " seconds.");


//#####################################################

//make object
//loop through the string
//loop thorugh each character
//count each character
//return object
function myChars(str) {

    let results = {};
    for (let i = 0; i < str.length; i++) {

        let achar = str[i]

        if (results[str[i]] > 0) {
            results[str[i]]++;
        } else {
            results[str[i]] = 1;
        }
    }
    //console.log(i);
    return results;
}


//console.log(myChars("halaaaa!@"));

//#####################################################


//Naive approach because is O of n^2  quadratic in nested loop. Quadratic time.
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let index = arr2.indexOf(arr1[i] ** 2)
        if (index === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(index, 1)

    }
    return true;
}

//same([1, 2, 3], [1, 4, 9]);


//Efficient approach because two loops is always better than nested loops. O of N. Linear time

function same2(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1

    }

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {

            return false

        }
    }
    console.log(frequencyCounter1);
    console.log("Blank space");
    console.log(frequencyCounter2);
    return true;
}

//same2([1, 2, 3], [1, 4, 9]);



//##########################################
function anagram(str1, str2) {

    console.log(str1);
    console.log(str2);

    if (str1.length !== str2.length) {
        return false;
    }
    for (let i = 0; i < str1.length; i++) {
        if (str2.includes(str1[i])) {
            return str1 + " is anagram of " + str2;
        }
    }
    return true;
}

function anagram2(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const object = {};

    for (let i = 0; i < str1.length; i++) {

        let letter = str1[i];
        object[letter] ? object[letter] += 1 : object[letter] = 1;
    }

    console.log(object);

    for (let i = 0; i < str2.length; i++) {

        let letter = str2[i];

        if (!object[letter]) {
            return false;
        } else {
            object[letter] -= 1;
        }
    }
    console.log(object);
    return true;
}

function anagram3(stringA, stringB) {
    /*First, we remove any non-alphabet character using regex and convert
    convert the strings to lowercase. */
    stringA = stringA.replace(/[^\w]/g, "").toLowerCase()
    stringB = stringB.replace(/[^\w]/g, "").toLowerCase()

    //Get the character map of both strings
    const charMapA = getCharMap(stringA)
    const charMapB = getCharMap(stringB)

    /* Next, we loop through each character in the charMapA, 
    and check if it exists in charMapB and has the same value as
    in charMapA. If it does not, return false */
    for (let char in charMapA) {
        if (charMapA[char] !== charMapB[char]) {
            return false
        }
    }

    return true
}

function getCharMap(string) {
    // We define an empty object that will hold the key - value pairs.
    let charMap = {}

    /*We loop through each character in the string. if the character 
    already exists in the map, increase the value, otherwise add it 
    to the map with a value of 1 */
    for (let char of string) {
        charMap[char] = charMap[char] + 1 || 1
    }
    return charMap
}


function anagram4(stringA, stringB) {
    /*First, we remove any non-alphabet character using regex and convert       
    convert the strings to lowercase. */
    stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase()

    return sortString(stringA) === sortString(stringB)
}

/*This function sorts the strings*/
function sortString(string) {
    return string.split('').sort().join('');
}


//#####################################################

//naive oppeation
function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}


//good refactor

function sumZero2(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];

        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}


console.log(sumZero2([-4, -3, -2, -1, 0, 1, 2, 5]));


//console.log(anagram("iiii", "rewq"));
//console.log(anagram2("hola", "laho"));
//console.log(anagram3("qwer", "rewq"));
console.log(anagram4("qwer", "rewq"));


//#####################################################



