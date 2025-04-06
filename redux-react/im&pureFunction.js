// impure function
let count =0;

function impureAdd(){
    count +=5;
    return count;
}

console.log("ImPure Function not passing argument, it affect direct variable");
console.log("impure function",impureAdd());



// pure function - tha

function multiplyPure(a, b){
    return a * b;
}
console.log("Pure Function pssing argument, it won't affect the variable:");

console.log("Pure function",multiplyPure(2,4));


