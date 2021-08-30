function bubbleSort(arr) {
    let n=arr.length;
    while(n--) {
        for(let i=0; i<n; i++) {
        if(arr[i]>arr[i+1]) {
            let tmep;
            temp=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp;
            }
        }
    }
    return arr;
    
}

let arr=[3,8,2,1,23,4,11];
bubbleSort(arr);