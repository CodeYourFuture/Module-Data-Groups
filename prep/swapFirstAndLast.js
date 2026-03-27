// Write a function which takes an array as a parameter
//   and swaps the first element with the last element

// function swapFirstAndLast(arr) {}

// const myArray = [5, 2, 3, 4, 1];
// swapFirstAndLast(myArray);
// console.log(myArray); 
// what output should we expect?
// Write a function which takes an array as a parameter
//   and swaps the first element with the last element

function swapFirstAndLast(arr) {
  let temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;
}

module.exports = swapFirstAndLast;