const arr = [23,45,6,24,80];
const str = ["Bolt","Maasai","The Eagles","Nairobi Market"];

function numComapre(a,b){
    // if its returns a negative number, a should come before b
    // if it returns a positive number, a should come after b
    // if it returns 0, assumes they are equal
    return a - b
}

const result = arr.sort(numComapre);
console.log(result);

function compareByLen(str1,str2){
    return str1.length - str2.length
}

const result2 = str.sort(compareByLen);
console.log(result2);

//ES5
function swap(arr, idx1, idx2){
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

//ES6
const swap2 = (arr,idx1,idx2) => {
    [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
}

//BubbleSort Implementation
function bubbleSort1(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            // console.log(arr,arr[j],arr[j+1])

            if(arr[j] > arr[j+1]){
                // let temp = arr[j]
                // arr[j] = arr[j+1]
                // arr[j+1] = temp
                [[arr[j],arr[j+1]]] = [[arr[j+1],[arr[j]]]] // ES6 Swap
            }
        }
    }
    return arr
}
const result4 = bubbleSort1(arr);
console.log(result4);

function bubbleSort(arr){
        for(let j = 0; j < arr.length; j++){
            // console.log(arr,arr[j],arr[j+1])
            if(arr[j] > arr[j+1]){
                // let temp = arr[j]
                // arr[j] = arr[j+1]
                // arr[j+1] = temp
                [[arr[j],arr[j+1]]] = [[arr[j+1],arr[j]]]
            }
        }
     return arr
}
const result3 = bubbleSort(arr);
console.log(result3);

function optBubbleSort(arr){
    let noSwaps;
    for(let i = arr.length; i > 0; i--){
        noSwaps = true;
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
                [[arr[j],arr[j+1]]] = [[arr[j+1],arr[j]]];
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr
}
const result5 = optBubbleSort(arr);
console.log(result5);