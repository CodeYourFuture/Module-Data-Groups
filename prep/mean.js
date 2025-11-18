/*
Let’s consider a list of prices in a bill:
4.6, 5.03, 7.99, 8.01
instead of writing the  like below
const price0 = 4.6;
const price1 = 5.03;
const price2 = 7.99;
const price3 = 8.01;
We can write it as an array literal
const items = [4.6, 5.03, 7.99, 8.01];

The Array object, as with arrays in other programming languages, enables storing a collection
of multiple items under a single variable name, and has members for performing common array operations.
Arrays can store items of any type & multiple pieces of information.

In JavaScript, we can use [] notation to access specific elements in the array using index numbers.
The index numbers start from 0.


const items = [4.6, 5.03, 7.99, 8.01];
console.log(items[0]); // 4.6
console.log(items[1]); // 5.03
console.log(items[2]); // 7.99
console.log(items[3]); // 8.01
// Accessing elements using index numbers

const items = [4.6, 5.03, 7.99, 8.01];
function calculateMean(list) {
  // Calculate the sum of all elements in the array
  const sum = list.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  // Calculate the mean by dividing the sum by the number of elements
  const mean = sum / list.length;
  return mean;
}
  */
/*
//const list = [4.6, 5.03, 7.99, 8.01];
function calculateMean(list) {
  //1. sum the elements of the array
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    const arrayInValue = Number(list);
    if (typeof list[i] === "number" && !isNaN(list[i])) {
      sum += list[i];
    }
  }
  //2. determine the length of the array
  let count = list.length;
  //3. divide #1 by #2
  const mean = sum / count;
  //4. return #3
  return mean;
}
console.log(calculateMean([4.6, 5.03, 7.99, 8.01]));
console.log(calculateMean([3, "50", 7]));

//module.exports = calculateMean;
*/
function calculateMean(list) {
  //1. sum the elements of the array
  let sum = 0;
  for (const item of list) {
    const value = Number(item);
    if (!isNaN(value)) {
      sum += value;
    }
  }

  //2. determine the length of the array
  let count = list.length;
  //3. divide #1 by #2
  const mean = sum / count;
  //4. return #3
  return mean;
}
console.log(calculateMean([4.6, 5.03, 7.99, 8.01]));
console.log(calculateMean([3, "50", 7]));
