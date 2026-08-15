/* Find the findMaximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. findMax([30, 50, 10, 40]), target output: 50
E.g. findMax(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in findMax.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");

// Given an empty array
// When passed to the findMax function
// Then it should return -Infinity
// Delete this test.todo and replace it with a test.

test("returns -Infinity for an empty array", () => {
  const currentOutput = findMax([]);
  const targetOutput = -Infinity;

  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with one number
// When passed to the findMax function
// Then it should return that number

test("returns with one number", () => {
  const currentOutput = findMax([3]);
  const targetOutput = 3;
  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with both positive and negative numbers
// When passed to the findMax function
// Then it should return the largest number overall
test("returns largest number", () => {
  const currentOutput = findMax([3, -10]);
  const targetOutput = 3;
  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with just negative numbers
// When passed to the findMax function
// Then it should return the closest one to zero
test("return closest to 0", () => {
  const currentOutput = findMax([-7, -3, -10]);
  const targetOutput = -3;
  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with decimal numbers
// When passed to the findMax function
// Then it should return the largest decimal number
test("return to largest decimal number", () => {
  const currentOutput = findMax([2.5, 5.6]);
  const targetOutput = 5.6;
  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with non-number values
// When passed to the findMax function
// Then it should return the findMax and ignore non-numeric values

test("return to findMax and ignore non-numeric values", () => {
  const currentOutput = findMax([7, 4, -10, "b", "f"]);
  const targetOutput = 7;
  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with only non-number values
// When passed to the findMax function
// Then it should return the least surprising value given how it behaves for all other inputs
test("return the least surprising value", () => {
  const currentOutput = findMax([NaN, "hi", true]);
  const targetOutput = -Infinity;
  expect(currentOutput).toEqual(targetOutput);
});