class Node{
    constructor(value) {
        this.value=value;
        this.next=null;
    }
}

class Stack{
    constructor(value) {
        const newNode=new Node(value);
        this.top=newNode;
        this.length=1;
    }

    push(value) {
        const newNode=new Node(value);
        if(!this.top) {
            this.top=newNode;
        }
        else {
            newNode.next=this.top;
            this.top=newNode;
        }
        this.length++;
        return this;

    }

    pop() {
        if(!this.top) return undefined;
        let temp=this.top;
        this.top=this.top.next;
        temp.next=null;
        this.length--;
        return temp;
    }

}

let myStack=new Stack(1);
myStack.push(2);
myStack.push(4);
myStack.pop();