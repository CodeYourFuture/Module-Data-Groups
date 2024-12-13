const findMax = require("./max.js");

/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/
test("check max value with and without string", () => {
  expect(findMax([1, 2, 3, 4])).toEqual(4);
  expect(findMax([4, 3, 2, 1, "hello", "mg"])).toEqual(4);
});
// Given an empty array
// When passed to the max function
// Then it should return -Infinity
// Delete this test.todo and replace it with a test.
// test.todo("given an empty array, returns -Infinity");
test("given an empty array, returns -Infinity", () => {
  expect(findMax([])).toEqual(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("given one number and return that number", () => {
  expect(findMax([1])).toEqual(1);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("given positive and negative number", () => {
  expect(findMax([-100, 1])).toEqual(1);
});
// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("given negative and return close to zero", () => {
  expect(findMax([-99, -100])).toEqual(-99);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("given array with decimal numbers", () => {
  expect(findMax([1, 23, 24, 42, 534, 12, 423])).toEqual(534);
});
// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("given array non number ignore and return max number value", () => {
  expect(findMax(["hello", "code", 1, 2, 3, 5, 6, 100])).toEqual(100);
});
// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("non number and return -infinity", () => {
  expect(findMax(["hello"])).toEqual(-Infinity);
});
