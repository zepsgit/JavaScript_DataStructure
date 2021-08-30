function mergeSort(arr) {
    if(arr.length===1) return arr;
    let mid=Math.floor(arr.length/2);
    let left=arr.slice(0, mid);
    let right=arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(arr1, arr2) {
    let mergedArray=[];
    let i=0;
    let j=0;
    while(i<arr1.length && j<arr2.length) {

        if(arr1[i]<arr2[j]) {
                mergedArray.push(arr1[i]);
                i++;
            }
            else {
                mergedArray.push(arr2[j]);
                j++;
            }
    }
           
        while(i<arr1.length) {
            mergedArray.push(arr1[i]);
            i++;
    }
    
        while(j<arr2.length) {
            mergedArray.push(arr2[j]);
            j++;
        }
        
    return mergedArray;
}

let arr=[23,45,12,11,89,3,4,34];
mergeSort(arr);