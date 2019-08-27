const str1 = 'texttwistime'
const str2 = 'timewisttext'
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
    // it takes 0(1) to remove each char to obj key
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

const resulst = anagram(str1,str2)

function validAnagram(str1,str2){
    if(str1.length !== str2.length) return false;

    const lookUp = {}

    for(let i = 0; i < str1.length; i++){
        let char = str1[i]
        //add each char to the loopkup hashtable
        lookUp[char] ? lookUp[char] += 1 : lookUp[char] = 1
    }

    for(let i = 0; i < str2.length; i++){
        let char = str2[i]
        if(!lookUp[char]){
            return false
        } else {
            lookUp[char] -= 1
        }
    }
 return true
}

const result2 = validAnagram(str1,str2)

console.log(resulst, result2)