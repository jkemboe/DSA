const arr = [1,2,3,4,5,6,7,8,9,10];
const val = 10;
function binarySearch(arr,val){
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start+end)/2);

    while(arr[middle] != val && start <= end){
        val < arr[middle] ? end = middle - 1 : start = middle + 1
        middle = Math.floor((start+end)/2);
        // console.log(start,middle,end);
    }
    // console.log(start,middle,end);
  return  arr[middle] === val ?  middle : -1 ;
}
const result = binarySearch(arr,val);
console.log(result);

function stringSearch(str,patt){
   let count = 0;
    for(let i = 0; i < str.length; i++){
        let char = str[i]
            for(let j = 0; j < patt.length; j++){
                let inChar = patt[j]
                //  console.log(inChar,str[i+j])
                 if(inChar !== str[i+j]) break;
                 if(j === patt.length -1) count += 1;
            }
    }
    return count;
}

const result2 = stringSearch('lorie loled','lo');
console.log(result2);