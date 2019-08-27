const num = [-3,-2,-1,1,2,3]
// Time Complexity 0(n^2)
function sumZero(num){
    //create the array that will store the final result
    // let res = []
    //loop through the numbers given
    //takes o(n) nested loop 0(n^2)
    for(let i = 0; i < num.length; i++){
        let numb = num[i]
        //inner loop to check sum of the outer loop num with inner loop num
        for(let j = i; j < num.length; j++){
            let otherNum = num[j]
            //if sum of outerloop and outer loop evaluates to zero we need the first two nums
            if(numb+otherNum===0){
                //push the numbers to our res array
                // 0(1) since we are adding to the end of array and we are re-indexing the array
                // res.push(numb,otherNum)

                return [numb,otherNum]; // shorter way instead of pushing the numbers to array and rechecking

                // if res array has a length greater than 2, meaning we have other numbers that 
                // if added will sum to 0 we remove all elements inside the array from the 2nd
                // to the last item since we just need the first two digits that sum to zero
                // if(res.length > 2){
                //     res.splice(2,res.length-1) // remove all elements from index 2 to last item 0(n)
                // }
              }
        }
    }
    // if there's nothing in the array return undefined if we have matching numbers return thems
    // if(!res.length){
    //     return undefined
    // }
    //     return res   
 }
let result = sumZero(num)
console.log(result)

//REFACTORED Time Complexity 0(n)   
function sumZero2(num){
    // first item of array
    let left = 0;
    //last item of array
    let right = num.length - 1
    //loop and check while left is less than right
    while(left < right){
        let sum = arr[left] + arr[right]
        if(sum === 0){
            return [arr[left],arr[right]]
        } else if(sum > 0){
            right--
        } else {
            left++
        }
    }
}

let result2 = sumZero(num)
console.log(result2)