function pivot(arr, start=0,end=arr.length+1){
    function swap(arr,i,j){
        // let temp = arr[i]
        // arr[i] = arr[j]
        // arr[j] = temp
        [[arr[i],arr[j]]] = [[arr[j],arr[i]]]
    }
     let pivot = arr[start];
     let swapIdx = start;

     for(let i = start + 1; i < arr.length; i++){
         if(pivot > arr[i]){
            swapIdx++;
            swap(arr,swapIdx,i); 
        }
     }
     swap(arr,start,swapIdx);
     return swapIdx;
}
// const result = pivot();
 
function quicksort(arr,left=0,right=arr.length-1){
    if(left < right) {
        let pivotIdx = pivot(arr,left,right);
        //left
        quicksort(arr,left,pivotIdx-1);
        //right
        quicksort(arr,pivotIdx+1,right);
    }
    return arr
}

const result1 = quicksort([4,8,2,1,5,7,6,3 ]);
console.log(result1);