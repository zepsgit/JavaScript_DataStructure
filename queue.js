class Node{
    constructor(value) {
        this.value=value;
        this.next=null;
    }
}

class Queue{
    constructor(value) {
        const newNode=new Node(value);
        this.first=newNode;
        this.last=newNode;
        this.length=1;
    }
    
    enque(value) {
        const newNode=new Node(value);
        if(!this.first) {
            this.first=newNode;
            this.last=newNode;
        }
        else {
            let temp=this.last;
            this.last=newNode;
            temp.next=newNode;
        }
        this.length++;
        return this;
    }

    deque(){
        let temp=this.first;
        if(!this.first) return undefined;
        if(this.length===1) {
            this.first=this.last=null;
        }
        else{
            this.first=this.first.next;
            temp.next=null;
        }
        
        
        this.length--;
        return temp;
    }

}

let myQueue=new Queue(1);
//myQueue.enque(2);
myQueue.deque();