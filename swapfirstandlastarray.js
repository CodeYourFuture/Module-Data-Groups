function swapFirstAndLast(arr){

//swap first and the last elements of the array
const first = arr[0];
const last = arr[arr.length - 1];
arr[0] = last;
arr[arr.length - 1] = first;

}

const myArray = [5, 2, 3, 4, 1];
swapFirstAndLast(myArray);
console.log(myArray); 