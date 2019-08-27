
// Time Complexity - N^2
function isSame(arr1,arr2){
     for(let i = 0; i < arr1.length; i++){
        let num = arr1[i]*arr1[i]
              let correctIndex = arr2.indexOf(num)
            if(correctIndex === -1){
              return false
            }
            arr2.splice(correctIndex,1);
    }
 return true
 }
isSame([1, 2, 1], [4, 4, 1]) //false

// Refactored Time Complexity O(n)
function same(arr1, arr2){
  if(arr1.length !== arr2.length) return false;

  let freqCounterOne = {}
  let freqCounterTwo = {}

  for(val of arr1){
    freqCounterOne[val] ? freqCounterOne[val] += 1 : freqCounterOne[val] = 1 
  }

  for(val of arr2) {
    freqCounterTwo[val] ? freqCounterTwo[val] += 1 : freqCounterTwo[val] = 1
  }

  for(let key in freqCounterOne){
    if(!(key ** 2 in freqCounterTwo)){
      return false 
    }
     if(freqCounterTwo[key**2] !== freqCounterOne[key]){
      return false
    }
  }
  return true
}

same([1,2,3,4],[16,9,1,4]) // true