let arr = [1,2,5,2,8,1,5]
let num = 2
//Time Complexity 0(n^2)
function maxSubArray(arr, num){
    //if we are searching through a list or array and the consecutive number required
    //is greater than the length of arr we return null since its a false statement
    if(num > arr.length) return null;
    //start at neg infinity incase the numbers in arrays are negative numbers
    //the max sum would still be a negative number unless we're working with -ve sums
    let max = -Infinity
                    //add num consecutive times to end
    for(let i = 0; i < arr.length - num + 1; i++){
    //the temp variable will store the sum each time through
        let temp = 0;
        for(let j = 0; j < num; j++){
            temp += arr[i+j]
        }
        // update if temp is greater than max
         if(temp > max){
            max = temp
        }
    }
    return max
}
let result = maxSubArray(arr,num);
console.log(result)

//Time Complexity 0(n)
function maxSubArray2(arr,num){
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;
    for(let i = 0; i < num;i++){
        maxSum += arr[i]
    }
    tempSum = maxSum;
    for(let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i-num] + arr[i]
        maxSum = Math.max(maxSum,tempSum);
    }
   return maxSum
}
let result2 = maxSubArray2(arr,num)
console.log(result2)