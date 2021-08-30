function pivot(arr, left=0, right=arr.length) {

        let piv=arr[left];
        let i=left+1;
        let j=left+1;
        while(i<right && j<right) {
            while(i < right && arr[i] <= piv) i++;
            j=i;
            while(j < right && arr[j] > piv) j++;
            if(i<right && j<right) {
                swap(arr, i, j);
            }
        }

            let pivIndex=i-1;
            swap(arr, left, pivIndex);
            
            return pivIndex;     
}

function swap(arr, i, j) {
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}

function quickSort(arr, left=0, right=arr.length) {
    if(left < right) {
        pivIndex=pivot(arr, left, right);
        quickSort(arr, left, pivIndex-1);
        quickSort(arr, pivIndex+1, right);
    }
    return arr;
}

let arr=[4,5,3,2,9,8,4,1];
quickSort(arr);