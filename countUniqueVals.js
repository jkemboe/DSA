const arr = [1,2,3,4,4,4,7,7,12,12,13]
// Time Complexity 0(n)
function uniqValues(arr){
    // create hasttable to store the unique values
    let res = {}
    // loop through the numbers and store the num in the res hashtable
    for(let i = 0; i < arr.length; i++){
        let num = arr[i]
        //if num is present as key in res hashtable, increment by one otherwise set to one
        // all unique numbers are stored in the res hash table
        res[num] ? res[num] += 1 : res[num] = 1
    }
    // convert to res to array and return the length,
    // you can use Object.keys(), Object.values() or Object.entries() and return the length 
    // which is the number of unique values in a givenn sorted array
    return Object.keys(res).length
 }

let result = uniqValues(arr)
console.log(result)

function uniqValues2(arr){
    // if the array is empty return 0 since there is no unique value
    if(arr.length === 0) return 0;
    // set the i as the start of the count
    let i = 0

    for(let j = 1; j < arr.length; j++){
        //if the number in arr at index i is not equal to number in arr at index j
        //increment i to move the pointer to the the next number
        // set the value at index i to j so that the counter i can resume from where i is not equal to j
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
     }
     // since i was set to 0, we add to to get the length of unique count values
     return i + 1
}
let result2 = uniqValues2(arr)
console.log(result2)