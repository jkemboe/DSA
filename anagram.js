// Time Complexity (0n)
function anagram(str1,str2){
    // check if the two strings are not of same length, return false
    if(str1.length !== str2.length) return false
    // store the strings in hashtable
    let obj = {}
    
    // loop over the first chars of strings and add each character as key in hashtable
    // it takes 0(n) to loop over each string
    // it taks 0(1) to insert each char to obj key
    for(string of str1){
        obj[string] ? obj[string] += 1 : obj[string] = 1
    }

    // loop over the second chars and remove each char that matches as key in hashtable
    // it takes 0(n) to loop over each string
    // it takes 0(1) to insert each char to obj key
    for(string of str2){
        obj[string] ? obj[string] -= 1 : obj[string] = 1
    }

    // delete keys that are 0, if all strings matched, all keys will be 0 hence remain witth an empty object
    // it takes 0(n) to search the obj
    // it takes 0(1) to delete items in obj 
    for(let key in obj) {
       if(obj[key] === 0){
           delete obj[key]
       }
    }
    
    // check length of obj by using the built in Object.entries() methods which returns the object as an array with the key and values
    // if the length is greater than 0, it means the strings are not anagrams else they are :-)
    // it takes 0(1) to get the key and values of obj 
    if(Object.entries(obj).length > 0) {
        return false 
    }
    return true

    // 0(n) + 0(1) + 0(n) + 0(1) + 0(n) + 0(1) + 0(1) = 0(3n) + 0(3) = 0(n)
}
console.log(anagram('awesome','awesom'))