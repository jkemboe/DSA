//Time Complexity 0(n^2)
//works if numis greater than midpoint
let arr = [1,2,3,4,5,6]
let num = 5
function search(arr, num){
    let midPoint = Math.floor(arr.length / 2)    
    for(let i = midPoint; i < arr.length; i++){
        return arr.indexOf(num)
    }
}
let result = search(arr,num)
console.log(result)

//Binary Search Time Complexity Log(n)
function search2(){
    let min = 0;
    let max = arr.length - 1;

    while(min <= max){
        let middle = Math.floor((min+max) / 2);
        let currentElement = arr[middle];

        if(arr[middle] < num){
            min = middle + 1;
        } else if(arr[middle] > num){
            max = middle - 1
        } else {
            return middle
        }
    }
}
let result2 = search2(arr,num);
console.log(result2)