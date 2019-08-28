//Sumrange Recusively
const num = 5
const sumRange = (num) => num != 1 ? num + sumRange(num-1) : 1;
const result = sumRange(num);
console.log(result); 

// Factorial Recusively
const factorial = (num) => num != 1 ? num * factorial(num-1) : 1;
let result2 = factorial(num);
console.log(result2);

//Factorial Iteratively
function factorialI(num){
    let total = 1;
    for(let i = num; i >= 1; i--){
        total *= i    
    }
    return total
}
let resullt3 = factorialI(num);
console.log(resullt3)

//Recursion Helper Methods
function collectOddValues(arr){
    let result = []
    function helper(helperInput){
        if(helperInput.length === 0){
            return;
        }
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0]);
        }
        helper(helperInput.slice(1))
    }
    helper(arr)
    return result;
}
const result4 = collectOddValues([10,11,8,7]);
console.log(result4);

//Pure Recursion
function collectOddValues2(arr){
    let newArr = []
    //base case
    if(arr.length === 0) return newArr;
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
    newArr = newArr.concat(collectOddValues2(arr.slice(1)));
    return newArr;
}
const result5 = collectOddValues2([10,11,8,7]);
console.log(result5);