const arr = [1,4,5,7,9,3]
function insertionsort(arr){
    for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i]
        for(j = i - 1; j >= 0 && arr[j] > currentVal; j--){
             arr[j+1] = arr[j] 
        }
        arr[j+1] = currentVal
    }
    return arr
}

const result = insertionsort(arr);
console.log(result);