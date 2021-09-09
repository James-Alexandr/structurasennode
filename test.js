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