function insertionSort(arr) {
    for(let i=1; i < arr.length; i++) {
        for(let j=i; j>=0; j--) {
            if(arr[j] < arr[j-1]) {
                let temp=arr[j];
                arr[j]=arr[j-1];
                arr[j-1]=temp;
            }
        }    
    }
    return arr;
}

let arr=[34,56,21,23,12,9,9,34,76,1];
insertionSort(arr);
