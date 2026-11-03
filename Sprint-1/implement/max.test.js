/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]) throws Error("findMax requires an array of numbers") (max can't compare non-numerical elements, so it shouldn't guess)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
// Delete this test.todo and replace it with a test.
test("given an empty array, should return -Infinity", () => {
  expect(findMax([])).toEqual(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("expects findMax with an array containing 7 to return 7", () => {
  expect(findMax([7])).toEqual(7);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("returns largest number given an array with both positive and negative numbers", () => {
  expect(findMax([-5, -6, 10, 4])).toEqual(10);
});
// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("returns largest number when given an array with negative numbers", () => {
  expect(findMax([-4, -7, -9, -14])).toEqual(-4);
});
// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("returns largest number when given an array of decimal numbers", () => {
  expect(findMax([2.2, 4.3, 6.8, 9.4])).toEqual(9.4);
});
// Given an array containing a value that isn't a number
// When passed to the max function
// Then it should throw Error("findMax requires an array of numbers")
test("given an array containing a value that isn't a number", () => {
  expect(() => findMax([4, "hello", 5])).toThrow(
    "findMax requires an array of numbers"
  );
});
// Given something that isn't an array at all, such as "hey", 42 or no argument
// When passed to the max function
// Then it should throw Error("findMax requires an array of numbers")
