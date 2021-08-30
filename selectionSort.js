function selectionSort(arr) {
    for(let i=0; i<arr.length-1; i++) {
        for(let j=i+1; j<arr.length; j++) {
           
            if(arr[i]> arr[j]) {
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }      
        }
    }
    return arr;
}

let arr=[45,34,25,89,11,9];
selectionSort(arr);