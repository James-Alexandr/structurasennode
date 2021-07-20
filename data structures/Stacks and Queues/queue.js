//queue array implementation
//push and shift are O(1)
//pop and unshift are O(n)

var q = [];

q.push(1);
q.push(2);
q.push(3);
q.push(4);
q.push(5);

console.log(q);
q.shift();

console.log(q);

q.unshift(6);

console.log(q);

q.pop();

console.log(q);


class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(item) {
        this.queue.push(item);
    }

    dequeue() {
        return this.queue.shift();
    }

    peek() {
        return this.queue;
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

var data = Array.apply(null, { length: 100000 }).map(Function.call, Math.random);
console.log("RUNNING***");

let queue = new Queue();

for (let index = 0; index < data.length; index++) {
    queue.enqueue(data[index]);

}
queue.dequeue();


console.log(queue.peek());


//class implementation
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class QueueTwo {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) {
        var newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() {
        if (!this.first) return null;

        var temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}


let queueTwo = new QueueTwo();

var data = Array.apply(null, { length: 100000 }).map(Function.call, Math.random);
console.log("RUNNING***");

let ququeueTwoeue = new Queue();

for (let index = 0; index < data.length; index++) {
    queueTwo.enqueue(data[index]);

}
queueTwo.dequeue();


console.log(queueTwo);