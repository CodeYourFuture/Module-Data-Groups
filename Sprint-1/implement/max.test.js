/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");
describe("findMax", () => {

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
// Delete this test.todo and replace it with a test.
test("given an empty array, returns -Infinity", () => {
  expect(findMax([])).toEqual(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("given an array with one number, returns that number", () => {
  expect(findMax([10])).toEqual(10);
});
// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("given an array with both positive and negative numbers, returns the largest number", () => {
  expect(findMax([30, 50, 10, 40])).toEqual(50);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("given an array with just negative numbers, returns the closest one to zero", () => {
  expect(findMax([-10, -50, -30])).toEqual(-10);
});


// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("given an array with decimal numbers, returns the largest decimal number", () => {
  expect(findMax([2.5, 4.1, 3.3, 3.0])).toEqual(4.1);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("given an array with non-number values, returns the max and ignores non-numeric values", () => {
  expect(findMax([ 'hey', 10, 'hi', 60, 10 ])).toEqual(60);
});


// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values, returns -Infinity", () => {
  expect(findMax([ 'hey', 'hi', 'hello' ])).toEqual(-Infinity);
});

test("given an array with non-number values, returns the max and ignores non-numeric values", () => {
  expect(findMax([ 1,"60"])).toEqual(1);
});

test("given an array with non-number values, returns the max and ignores non-numeric values", () => {
  expect(findMax([ 1,"200","hey"])).toEqual(1);
});

test("given an array with invalid values, returns -Infinity", () => {
  expect(findMax([null])).toEqual(-Infinity);
});

});