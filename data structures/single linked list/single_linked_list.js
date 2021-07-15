//single linked list

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    get length() {
        return this.length;
    }

    get head() {
        return this.head;
    }

    get tail() {
        return this.tail;
    }

    push(val) {
        let node = new Node(val);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    pop() {
        if (this.length === 0) {
            return;
        } else if (this.length === 1) {
            let temp = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return temp.val;
        } else {
            let temp = this.head;
            this.head = this.head.next;
            this.length--;
            return temp.val;
        }
    }

    remove(val) {
        if (this.length === 0) {
            return;
        } else if (this.length === 1) {
            if (this.head.val === val) {
                this.head = null;
                this.tail = null;
                this.length--;
                return;
            }
        } else {
            let temp = this.head;
            if (temp.val === val) {
                this.head = this.head.next;
                this.length--;
                return;
            }
            while (temp.next) {
                if (temp.next.val === val) {
                    temp.next = temp.next.next;
                    this.length--;
                    return;
                }
                temp = temp.next;
            }
        }
    }
}
