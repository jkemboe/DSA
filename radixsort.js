function getDigit(num,i){
    return Math.floor(Math.abs(num) / Math.pow(10,i) % 10);
}

const result = getDigit()

function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const result1 = digitCount();

function mostDigits(nums){
    let maxDigits = 0;
    for(let i = 0; i < nums.length; i++){
        maxDigits = Math.max(maxDigits,digitCount(nums[i]));
    }
    return maxDigits;
}

const result2 = mostDigits([])

function radixSort(nums){
    let maxDigitCount = mostDigits(nums)
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length:10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

const result3 = radixSort([23,322,7665,34,2,1]);
console.log(result3)

