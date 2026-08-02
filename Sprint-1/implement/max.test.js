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
test("given an empty array, returns -Infinity", () => {
  expect(findMax([])).toEqual(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
describe("findMax", () => {
  [{ input: [3], expected: 3 }].forEach(({ input, expected }) =>
    it(`returns the only number in the array for [${input}]`, () =>
      expect(findMax(input)).toEqual(expected))
  );
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("given an array with both positive and negative numbers, returns the largest", () => {
  expect(findMax([1, -2, 3, -4, 5])).toEqual(5);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("given an array with just negative numbers, returns closest to zero", () => {
  expect(findMax([-1, -2, -3, -4])).toEqual(-1);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("given an array with decimal numbers, returns largest decimal number", () => {
  expect(findMax([1.5, 1.6, 1.7, 1.8])).toEqual(1.8);
  expect(findMax([-1.5, -1.6, -1.7, -1.8])).toEqual(-1.5);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("given an array with non-number values, returns the max and ignores non-numeric values", () => {
  expect(findMax([1, 2, "3", null, undefined, 4])).toEqual(4);
  expect(findMax(["apple", 1, 2, 3, "banana", 4])).toEqual(4);
  expect(findMax([1, "2", 3, "4", 5])).toEqual(5);
  expect(findMax([1, "apple", 2, null, 3, undefined, 4])).toEqual(4);
  expect(findMax([3, "apple", 1, null, 2, undefined, 4])).toEqual(4);
  expect(findMax(["banana", 5, 3, "apple", 1, 4, 2])).toEqual(5);
  expect(findMax([1, 2, 3, "4", 5, "300", 7])).toEqual(7);
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values, returns -Infinity", () => {
  expect(findMax(["apple", null, undefined])).toEqual(-Infinity);
  expect(findMax([null, undefined])).toEqual(-Infinity);
  expect(findMax(["apple", "banana"])).toEqual(-Infinity);
});

