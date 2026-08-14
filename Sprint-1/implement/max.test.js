/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
// Delete this test.todo and replace it with a test
test("given an empty array, returns -Infinity", () => {
  expect(findMax([])).toEqual(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("given one number, when passed by max function, return that number", () => {
  expect(findMax([1])).toEqual(1);
});
// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("array with positive and negative numbers returns largest number", () => {
  expect(findMax([-2, 4, -3, 5, -6, 7])).toEqual(7);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("array with negative numbers , returns one closest to zero",() =>{
expect(findMax([ -2,-3,-5])).toEqual(-2)
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("array with decimal number,return largest decimal number",()=>{
expect(findMax([1.2,2.2,3.1,5.5])).toEqual(5.5)
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("array with non-number values ,return max number and ignore non-numeric values",()=>{
    const input = ["hi", 6, 2, 1, 7, "we", "put"];
  const result = findMax(input);
  expect(result).toEqual(7);
});
// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("array with only non-number values, return the least surprising value", () => {
  const input = ["no", "hat", "dot", "cape"];
  const result = findMax(input);
  expect(result).toEqual(-Infinity);
});