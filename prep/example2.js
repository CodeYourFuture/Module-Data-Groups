function swapFirstArrayLast(arr) {
  let swapped = arr[0];
  arr[0] = arr[4];
  arr[4] = swapped;
}

const myArray = [5, 2, 3, 4, 1];
swapFirstArrayLast(myArray);
console.log(myArray);
// bracket nottation for setting an array with index
