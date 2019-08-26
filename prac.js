function isSame(arr1, arr2) {
    //check if both arrays have same length, return false if not
    if(arr1.length !== arr2.length) return false
    // create hashtable to store the unique value in first array
    let uniqObj = {}
    // loop through each element and store the squared value to hash table
    for (let i = 0; i < arr1.length; i++) {
        let num = arr1[i] //store each number in variable
        uniqObj[num*num] ? uniqObj[num] += 1 : uniqObj[num*num] = 1 // set the num var as the default hash key, evaulates to true hence using teriary operator we square the value of num
    }
    // compare the looped squared value to the already squared array
    let arr = Object.keys(uniqObj)
    let result = true

    for(let i = 0; i < arr2.length; i++){
        let num = arr2[i]
        if(Number(arr[i]) != num){
            result = false
        }

    }
  return result
}

console.log(isSame([2, 4, 6, 8], [4, 16, 36, 64]))