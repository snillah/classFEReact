// Higher order function

function usingFunc(a,b){//a,b are parameters
    return a+b
}

console.log("parameter(using variables) is in function and argument(actual value) is in while calling the function name inside");
console.log("Adding two values",usingFunc(5,10));//passing arguments(agruments is actual value)

// the Higher order function not call the string, Boolean, number
// Operate on Functions
// js - first class citizen



function operateOnlyFunction(){

}




// composition
// it means combine all small function into 
let ip = " Guvi-Value added Session  ";

let op = "<div>" + ip.trim() + "</div>";

console.log("dom value", op);
// trim
//we are wrapping the string  in a div tag

// small functions
const wrapInDiv = (str) => `<div>${str}</div>`;
const trim = (str) => str.trim();
const lowerCase = (str) => str.toLowerCase();
wrapInDiv(trim(ip)); //=> trim ----> wrap || wrapinDiv --> trim

// const result = wrapInDiv(trim(lowerCase(ip)));
// console.log(result);

// using lodash

const transform = compose(wrapInDiv,lowerCase,trim);

console.log(transform(ip));
