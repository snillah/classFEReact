
let arr = ["run","dun","gun"]

arr.push("sun")
arr.unshift("won")
console.log("arr Value",arr);

// Using Array Prototype

Array.prototype.customPush =  function(value){
    
    this[this.length] = value 
}

arr.customPush("son")
console.log("arr custompush Value",arr);

Array.prototype.customShift =function(value){
    let newArr = []
    newArr[0] = value;
    newArr.customPush(arr)
    arr = 0
    arr =newArr
}
arr.customShift("fin")
console.log("arr customUnshift Value",arr);