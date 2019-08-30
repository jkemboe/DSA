const arr = ["Maasai", "Joseph","Rust","Javascript"];
const val = "Javascript";

//@includes-VanilaJS
function linearSearch(arr,val){
    let bool = false
    for(let i = 0; i < arr.length; i++){
     if(arr[i] === val){
         bool = true
     }
    }
    return bool
}
const result = linearSearch(arr,val);
console.log(result)

//@indexOf VanilaJS
function linearSearch2(arr,val){
    let bool = -1
    for(let i = 0; i < arr.length; i++){
        if(val === arr[i]){
            bool = i
            return bool
        }
    }
}
const result2 = linearSearch2(arr,val);
console.log(result2);

//lastIndexOf VanillaJS
function linearSearch3(arr,val){
    let bool = -1
    for(let i = 0; i < arr.length; i++){
        if(val === arr[i]){
            bool = i
        }
    }
    return bool
}
const result3 = linearSearch3(arr,val);
console.log(result3);

//Return all values found
function linearSearch4(arr,val){
    let bool = []
    for(let i = 0; i < arr.length; i++){
        if(val === arr[i]){
            bool.push(arr[i])
        }
    }
    return bool
 }
const result5 = linearSearch4(arr,val);
console.log(result5)