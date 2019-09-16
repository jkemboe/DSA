class Node{
    constructor(val){
        this.val = val;
        this.next = null; 
    }
}

class SinglyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val){
        let node = new Node(val);
        if(this.head === null){
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length += 1;
        return this;
    }
    pop(){
        if(this.head === null) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next !== null){
                newTail = current;
                current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length -= 1;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(this.head === null) return undefined;
        let current = this.head;
        this.head = current.next;
        this.length -= 1;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    unshift(val){
        let node = new Node(val);
        if(this.head === null) {
            this.head = node;

            this.tail = this.head;
        } else {
            node.next = this.head;    
            this.head = node;
        }
        this.length += 1;
        return node;
    }
    get(i){
        if(i < 0 || i >= this.length) return undefined;
        let count = 0;
        let current = this.head;
        while(count !== i){
            current = current.next
            count += 1;
 
        }
        return current;
    }
    set(i,val){
        let found = this.get(i);
        if(found){
            found.val = val;
            return true;
        }
        return false;
    }
    insert(i,val){
        if(i < 0 || i > this.length) return undefined;
        if(i === this.length) return !!this.push(val);
        if(i === 0) return !!this.unshift(val);
        let node = new Node(val);
        let previousNode = this.get(i-1);
        let temp = previousNode.next;
        previousNode.next = node;
        node.next = temp;
        this.length += 1;
        return true;
    }
    remove(i){
        if(i < 0 || i >=  this.length) return undefined;
        if(i === this.length-1) return this.pop();
        if(i === 0) return this.shift();
        let node = this.get(i-1);
        let removed = node.next
        node.next = removed;
        this.length -= 1;
        return node;
    }
    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;
        for(let i = 0; i < this.length; i++){
                next = node.next;
                node.next = prev;
                prev = node;
                node = next;
        }
        return this;
    }
}

let someNum = new SinglyLinkedList()
someNum.push(1);
someNum.push(2);
someNum.push(3);
someNum.push(4);
someNum.push(5);
someNum.insert(5,"some node")
// console.log(someNum)
console.log(someNum.reverse())
// console.log(someNum)