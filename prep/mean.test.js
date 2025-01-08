// Write a function which takes an array as a parameter
//   and swaps the first element with the last element

function swapFirstAndLast(arr) {
    firstElement = arr.splice(0, 1)[0];  //5
    lastElement = arr.splice(-1, 1)[0];  //1
    arr.push(firstElement)
    arr.unshift(lastElement)
    return arr;
}

const myArray = [5, 2, 3, 4, 1];
const newArray = swapFirstAndLast(myArray);
console.log(newArray); // [1, 2, 3, 4, 5]