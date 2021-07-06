const { performance } = require('perf_hooks');

console.log("Hello world");

function addUpto(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total = total + i;

        // console.log("this is i " + i);
        // console.log("this is total " + total);
    }
    return total;
}

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


//#####################################################

console.log(myChars("halaaaa!@"));


// function addUp(n) {
//     return n * (n + 1) / 2;
// }

// console.log(addUp(7));


// let t1 = performance.now();
// addUpto(10000000000);
// let t2 = performance.now();
// console.log("Time elapsed: " + (t2 - t1) / 1000 + " seconds.");


// let t3 = performance.now();
// addUp(10000000000);
// let t4 = performance.now();
// console.log("Time elapsed: " + (t3 - t4) / 1000 + " seconds.");
