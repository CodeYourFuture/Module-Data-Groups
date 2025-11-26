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

test("given an empty array, return-Infinity", () => {
  const input = [];
  const result = findMax(input);
  expect(result).toEqual(-Infinity);
});
// Given an array with one number
// When passed to the max function
// Then it should return that number

test("given an array with ine number, return-that number", () => {
  const input = [10];
  const result = findMax(input);
  expect(result).toEqual(10);
});


// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall


test("given an array,with both Positive and negative numbers, return-the largest number", () => {
  const input = [10, 70, 5, -30, 20, -10, -100];
  const result = findMax(input);
  expect(result).toEqual(70);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero

test("given an array,with negative number", () => {
  const input = [-10, -30, -5, -40, -50];
  const result = findMax(input);
  expect(result).toEqual(-5);
});


// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number

test("given an empty array, return-Infinity", () => {
  const input = [0.1, 0.5, 0.03, 0.009, 0.9, 1.1, 7.9 ];
  const result = findMax(input);
  expect(result).toEqual(7.9);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values

test("given an array, return-Infinity", () => {
  const input = [10, 5, "banana", 60, "goat", "zebra", 5]
  const result = findMax(input);
  expect(result).toEqual(60)
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array, return-Infinity", () => {
  const input = ["car", "train", "bus", "bmw"]
  const result = findMax(input);
  expect(result).toEqual(-Infinity)
});