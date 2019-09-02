const array = [4,6,2,1,8,18];

function selectionsort(arr){
 
    for(let i = 0; i < arr.length; i++){
        let min = i
            for(j = i+1; j < arr.length;j++){
                if(arr[j] < arr[min]){
                    min = j
                } 
            }
            if(i !== min){
            // let temp = arr[i]
            // arr[i] = arr[min]
            // arr[min] = temp
            [arr[i], arr[min]] = [arr[min],arr[i]]
             }
     }

    return arr

}
const result = selectionsort(array);
console.log(result);