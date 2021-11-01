//Given two arrays of strings, determine whether corresponding elements contain a common substring.
//Example
//a = ['ab', 'cd', 'ef']
//b = ['af', 'ee', 'ef']
// Make the following decisions:
// i a[i]  b[i] Common Result
// 0 ab   af    a     YES
// 1 cd   ee           NO
// 2 ef   ef    ef    YES

// For each test, print the result on a new line, either YES if there is a common substring, or NO.

// Function Description
// Complete the function commonSubstring in the editor below. For each a[i], b[i] pair, the function must print YES if they share a common substring, or NO on a new line.

// commonSubstring has the following parameter(s):
// string a[n]: an array of strings
// string b[n]: an array of strings

// Return
// void: output should be printed to stdout (console.log in javascript) rather than returned.


function commonSubstring(a, b) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        let common = '';
        for (let j = 0; j < a[i].length; j++) {
            if (b[i].indexOf(a[i][j]) !== -1) {
                common += a[i][j];
            }
        }
        if (common.length === 0) {
            console.log('NO'); //  modification
            result.push('NO');
        }
        else {
            console.log('YES'); //  modification
            result.push('YES');
        }
    }
    return result;
}






// Given a collection of time intervals, [start, end], merge and return the overlapping intervals sorted in ascending order of their start times.
// Example
// intervals = [[7,7], [2,3], [6,11], [1,2]] 
// he interval [1,2] merges with [2,3] while [7,7] merges with [6,11]. There are no more overlapping intervals. The answer is [[1,3], [6,11]].
// Function Description
// Complete the function getMergedIntervals in the editor below.
// getMergedIntervals has the following parameter(s):
// int intervals[[n][2]]: the time intervals
// Return
// int[][2]: the merged intervals in sorted order

function getMergedIntervals(intervals) {
    let result = [];
    intervals.sort((a, b) => {
        return a[0] - b[0];
    });
    let start = intervals[0][0];
    let end = intervals[0][1];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= end) {
            end = Math.max(end, intervals[i][1]);
        } else {
            result.push([start, end]);
            start = intervals[i][0];
            end = intervals[i][1];
        }
    }
    result.push([start, end]);
    return result;
}


// Given an array of n distinct integers, d= [d[0], d[1], ..., d[n-1]], and an integer threshold, t, how many (a, b, c) index triplets exist that satisfy both of the following conditions?
// d[a] < d[b] < d[c]
// d[a] + d[b] + d[c] <= t
// Example
// d = [1, 2, 3, 4,5]
// t = 8
// The following 4 triplets satisfy the contraints:

// (1,2,3) → 1 + 2 +3 = 6 <= 8
// (1,2,4) → 1 + 2 + 4 = 7 <= 8
// (1, 2, 5) → 1 +2 +5 = 8 <= 8
// (1, 3, 4) → 1 + 3 + 4 = 8 <= 8

// Function Description
// Complete the function triplets in the editor below.
// triplets has the following parameter(s):
// int t: an integer threshold
// int d[n]: an array of integers
// Return
// long: a long integer that denotes the number of (a, b, c) triplets that sastisfy the given conditions


function triplets(t, d) {
    d.sort((a, b) => {
        return a - b;
    });
    let count = 0;
    for (let i = 0; i < d.length - 2; i++) {
        let left = i + 1;
        let right = d.length - 1;
        while (left < right) {
            let sum = d[i] + d[left] + d[right];
            if (sum <= t) {
                count += right - left;
                left++;
            } else {
                right--;
            }
        }
    }
    return count;
}



// function commonSubstring(a, b) {  
//     for(i = 0; i < a.length; i++) {
//         let aSub = a[i].split('');
//         let bSub = b[i].split('');
//         let common = [];
//         let commonLen = 0;
//         let aLen = aSub.length;
//         let bLen = bSub.length;
//         let aIndex = 0;
//         let bIndex = 0;
//         while(aIndex < aLen && bIndex < bLen) {
//             if(aSub[aIndex] === bSub[bIndex]) {
//                 common.push(aSub[aIndex]);
//                 commonLen++;
//                 aIndex++;
//                 bIndex++;
//             } else if(aSub[aIndex] < bSub[bIndex]) {
//                 aIndex++;
//             } else {
//                 bIndex++;
//             }
//         }
//         if(commonLen >= 2) {
//             console.log('YES');
//         } else {
//             console.log('NO');
//         }
//     }
// }