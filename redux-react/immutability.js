// mutation:

const state = { count: 0 };
// 1. Mutable code-> bad way of writing code.

// this will dirctly change the original state
state.count = 1;
console.log("mutable code -bad", state);

// Immutable Code(good)

// This will create a new object with the update count

const newState = { ...state, count: state.count + 1, name: "MK" };
console.log("old state", state);
console.log("New state", newState);
console.log("why value 2 means its affect the original code is affected");

// eg: mam gave note(original paper) and distributed to students using printed copy
// if you change original paper it will affectt all the things

function addItemsToArray1(array, items) {
  let newArray = [...array];
  newArray.push(items);
  array = newArray;
  return array;
}

function addItemsToArray2(array, items) {
  return [...array, items];
}

let arr = [1, 2, 3, 4];
console.log(addItemsToArray1(arr,9));

console.log(addItemsToArray2(arr, 8));
