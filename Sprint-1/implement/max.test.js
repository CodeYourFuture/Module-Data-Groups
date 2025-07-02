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
// Delete this test.todo and replace it with a test.
test("It should return -Infinity when given an empty array" , () =>
    {expect(findMax([])).toEqual("-Infinity");

 });


// Given an array with one number
// When passed to the max function
// Then it should return that number
test("given one elemant array,return that number",() => {
    expect(findMax([60])).toEqual(60);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test(
  "input : an array with both positive and negative numbers and output : the largest number overall",() =>{
    expect(findMax([3, -2, 7, 0, -10])).toEqual(7);
  }
);

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("input : an array with just negative numbers and output : the closest one to zero", () => {
  expect(findMax([-3, -2, -7, -12, -10])).toEqual(-2);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
