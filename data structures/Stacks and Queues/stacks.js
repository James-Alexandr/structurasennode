// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class Stack {
//     constructor() {
//         this.first = null;
//         this.last = null;
//         this.size = 0;
//     }
//     push(val) {
//         var newNode = new Node(val);
//         if (!this.first) {
//             this.first = newNode;
//             this.last = newNode;
//         } else {
//             var temp = this.first;
//             this.first = newNode;
//             this.first.next = temp;
//         }
//         return ++this.size;
//     }
//     pop() {
//         if (!this.first) return null;
//         var temp = this.first;
//         if (this.first === this.last) {
//             this.last = null;
//         }
//         this.first = this.first.next;
//         this.size--;
//         return temp.value;
//     }

//     print() {
//         var arr = [];
//         var current = this.first
//         while (current) {
//             arr.push(current.val)
//             current = current.next
//         }
//         console.log(arr);
//     }
// }




// Stack class
class Stack {

    // Array is used to implement stack
    constructor() {
        this.items = [];
    }

    // Functions to be implemented
    // push(item)
    // pop()
    // peek()
    // isEmpty()
    // printStack()
    // push function
    push(element) {
        // push element into the items
        this.items.push(element);
    }

    // pop function
    pop() {
        // pop element from the items
        if (this.items.length == 0) { return "Underflow"; }
        return this.items.pop();
    }

    // peek function
    peek() {
        // peek element from the items
        if (this.items.length == 0) { return "Underflow"; }
        return this.items[this.items.length - 1];
    }



    // isEmpty function
    isEmpty() {
        // return true if stack is empty
        return this.items.length == 0;
    }
    printStack() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }

}

// printStack function



let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop();
stack.peek();
console.log(stack.printStack());

//write a function that given a list of countries, returns the country that occur the least number of times.
function leastOccur(arr) {

    let count = {};
    let least = Infinity;
    let result;

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        count[num] = count[num] ? count[num] + 1 : 1;
        if (count[num] < least) {
            least = count[num];
            result = num;
        }
    }

    return result;
}


//write a function that given a list of countries, returns the country that occur the most number of times.
function mostOccur(arr) {

    let count = {};
    let most = -Infinity;
    let result;

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        count[num] = count[num] ? count[num] + 1 : 1;
        if (count[num] > most) {
            most = count[num];
            result = num;
        }
    }

    return result;
}


console.log(mostOccur);

 // function to combine two arrays
    
    function combine(arr1, arr2) {
        let result = [];
        let i = 0;
        let j = 0;
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                result.push(arr1[i]);
                i++;

            } else {
                result.push(arr2[j]);
                j++;
            }
        }
        while (i < arr1.length) {
            result.push(arr1[i]);
            i++;
        }
        while (j < arr2.length) {
            result.push(arr2[j]);
            j++;
        }
        return result;
    }




 //find the 2nd largest and 2nd smallest number in two arrays of numbers combined.

    function findSecondLargest(arr) {
        let largest = -Infinity;
        let secondLargest = -Infinity;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > largest) {
                secondLargest = largest;
                largest = arr[i];
            } else if (arr[i] > secondLargest) {
                secondLargest = arr[i];
            }
        }
        return secondLargest;
    }

    function findSecondSmallest(arr) {
        let smallest = Infinity;
        let secondSmallest = Infinity;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < smallest) {
                secondSmallest = smallest;
                smallest = arr[i];
            } else if (arr[i] < secondSmallest) {
                secondSmallest = arr[i];
            }
        }
        return secondSmallest;
    }

  

