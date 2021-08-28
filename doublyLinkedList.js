class Node {
    constructor(value) {
        this.value=value;
        this.next=null;
        this.prev=null;
    }
}

class doublyLinkedList {
    constructor (value) {
        const newNode=new Node(value);
        this.head=newNode;
        this.tail=newNode;
        this.length=1;
    }

    push(value) {
        const newNode=new Node(value);
        if(!this.head) {
            this.head=newNode;
            this.tail=newNode;
        }
        else{
            this.tail.next=newNode;
            newNode.prev=this.tail;
            this.tail=newNode;
        }
        
        this.length++;
        return this;
    }

    pop() {
        let temp=this.tail;
        if(!this.head) return undefined;
        else if(this.length===1){
            this.head=null
            this.tail=null
        }
        else { 
            this.tail=this.tail.prev;
            this.tail.next=null;
            temp.prev=null;
        }
        this.length--;
        return temp;
    }

    shift() {
        if(this.length===0) {
            return undefined;
        }
        let temp=this.head;
        if(this.length===1) {
            this.head=null;
            this.tail=null;
        }
        else {
            
            this.head=this.head.next;
            this.head.prev=null;
            temp.next=null;
        }
        this.length--;
        return temp;
    }

    unshift(value) {
        const newNode=new Node(value);
        if(!this.head) {
            this.head=newNode;
            this.tail=newNode;
        }
        else {
            newNode.next=this.head;
            this.head.prev=newNode;
            this.head=newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if(index < 0 || index > this.length-1) {
            return "wrong index";
        }
        if(!this.head) {
            return undefined;
        }
        let temp=this.head;
        if(index<this.length/2) {
            for(let i=0; i<index; i++) {
            temp=temp.next;
       }
        } else {
            temp=this.tail;
            for(let i=this.length-1;i>index;i--) {
                temp=temp.prev;
            }
        }
       
       return temp;

    }

    set(index, value) {
        let temp=this.get(index);
        if(temp) {
            temp.value=value;
            return true;
        }
        return false;

    }

    insert(index, value) {
        if(index===0) return this.unshift(value);
        if(index===this.length-1) return this.push(value);
        if(index<0||index>this.length-1) return "wrong index";
        let before=this.get(index);
        let after=before.next;
        const newNode=new Node(value);
        before.next=newNode;
        newNode.prev=before;
        newNode.next=after;
        after.prev=newNode;
        this.length++;
        return this;

    }

    remove(index) {
        if(!this.head) return undefined;
        if(index===0) return this.shift();
        if(index===this.length-1) return this.pop();
        if(index<0||index>this.length-1) return "wrong index";
        let temp=this.get(index);
        let before=this.get(index-1);
        let after=this.get(index+1);
        before.next=after;
        after.prev=before;
        temp.next=temp.prev=null;
        this.length--;
        return temp;
    }
}

let myDoublyLinkedList=new doublyLinkedList(2);
myDoublyLinkedList.push(4);
myDoublyLinkedList.push(7);
myDoublyLinkedList.push(9);
myDoublyLinkedList.push(11);
