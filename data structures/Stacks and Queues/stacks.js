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