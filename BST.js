class Node{
    constructor(value) {
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class BST{
    constructor(){
        this.root=null;
    }

    insert(value) {
        const newNode=new Node(value);
        if(!this.root) {
            this.root=newNode;
            return this;
        }
        let temp=this.root;
        while(1) {
            if(value==temp.value) return undefined;
            if(value<temp.value) {
                if(!temp.left) {
                    temp.left=newNode;
                    return this;
                }
                temp=temp.left;
            }

            if(value>temp.value) {
                if(!temp.right) {
                    temp.right=newNode;
                    return this;
                }
                temp=temp.right;
            }
        }
    }

    contain(value) {
        let temp=this.root;
        while(temp) {
            if(value<temp.value) {
                temp=temp.left;
            } else if(value>temp.value){
                temp=temp.right;
            }
            else return true;
        }
        return false;
    }
}

let myBST=new BST();
myBST.insert(19);
myBST.insert(12);
myBST.insert(32);
myBST.insert(14);
myBST.insert(7);
myBST.insert(20);
