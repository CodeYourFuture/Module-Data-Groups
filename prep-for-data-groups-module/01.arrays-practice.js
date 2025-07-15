// write a function which takes an array as a parameter and swaps the first element with the last element
const arr = [5, 2, 3, 4, 1];
function swapFirstAndLast(arr){
  // set this position one variable to hold the first element
let positionOne = arr[0];
//move last element to the first position(i.e index 0)
arr[0] = arr[arr.length - 1];
//move position one variable to the last position
arr[arr.length - 1] = positionOne;

// return arr;
};

swapFirstAndLast(arr);
console.log(arr);

// two ways to print an array to the console.

// 1. you can return the arr within the function and then call the function directly in the console.log method
// 2. you can decide not to return the array within the function,by simply calling the function outside and then logging the array directing to the console as we did in the example above.
