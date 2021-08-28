class Node {
    constructor(value) {
        this.value=value;
        this.next=null;
    }
}

class linkedList{
    constructor(value) {
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
        else {
            this.tail.next=newNode;
            this.tail=newNode;
        }
        this.length++;
        return this;
    }
    /*
    pop() {
        if(!this.head) return undefined;
        let temp=this.head;
        for(let i=1; i<this.length-1;i++) {
            temp=temp.next;
        }
        this.tail=temp;
        this.length--;
        return this;
    }*/
    pop() {
        if(!this.head) {
            return undefined;
        }
        let pre=this.head;
        let temp=this.head;
        while (temp.next) {
            pre=temp;
            temp=temp.next;
        }
        this.tail=pre;
        this.tail.next=null;
        this.length--;
        return temp;
        if(this.length==0) {
            this.head=null
            this.tail=null
        }
    }

    unshift(value) {
        const newNode=new Node(value);
        if(!this.head) {
            this.head=newNode;
            this.tail=newNode;
        }
        else{
            newNode.next=this.head;
            this.head=newNode;
        }
        
        this.length++;
        return this;
    }

    shift() {
        if(!this.head) return undefined;
        let temp=this.head;
        this.head=this.head.next;
        temp.next=null;
        this.length--;
        
        if(length==0) {
            this.tail=null;
        }
        return temp;
    }

    get(index) {
        if(index<0||index>this.length-1) 
        return undefined;
        else {
            let temp=this.head;
            for(let i=0; i<index; i++) {
               
                temp=temp.next;
            }
            return temp;
        }
    }

    set(index, value) {
        let temp=this.get(index);
        if(temp) {
            temp.value=value;
            return true;
        }
        else return false;
    }

    insert(index, value) {
        if(index<0||index>this.length-1) {
            return undefined;
        }
        else if(index==0) {
            return this.unshift(value);
        }
        else if(index==this.length-1) {
            return this.push(value);
        }
        else {
            const newNode=new Node(value);
            let temp=this.get(index);
            newNode.next=temp.next;
            temp.next=newNode;
            this.length++;
            return this;
        }

    }

    remove(index) {
        let temp=this.head;
        let pre;
        if(index<0||index > this.length-1) {
            return undefined;
        }
        if(index===0)
        return this.shift();
        if(index===this.length-1)
        return this.pop();
        while(index--) {
             pre=temp;
            temp=temp.next;

        }
        pre.next=temp.next;
        temp.next=null;
        this.length--;
        return this;
    }

    reverse() {
        let temp=this.head;
        this.head=this.tail;
        this.tail=temp;
        let pre=null
        for(let i=0; i<this.length; i++) {
            let next=temp.next;
            temp.next=pre;
            pre=temp;
            temp=next;
        }
        return this;
    }
}

let myList=new linkedList(5);
myList.push(8);
myList.push(9);
myList.push(3);
myList.push(12);
