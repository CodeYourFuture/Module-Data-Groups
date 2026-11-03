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
test.todo("given an empty array, returns -Infinity");

// Given an array with one number
// When passed to the max function
// Then it should return that number
it("returns the median for [40]", () => {
  expect(findMax([40])).toEqual(40);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
it("returns the median for [20, 30, 10, 40]", () => {
  expect(findMax([20, 30, 10, 40])).toEqual(40);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
it("returns the median for [-40, -20, -30, -70]", () => {
  expect(findMax([-40, -20, -30, -70])).toEqual(-20);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
it("returns the median for [-40.4, -20.7, -30.3, -70.6]", () => {
  expect(findMax([-40.4, -20.7, -30.3, -70.6])).toEqual(-20.7);
});

// Given an array containing a value that isn't a number
// When passed to the max function
// Then it should throw Error("findMax requires an array of numbers")

// Given something that isn't an array at all, such as "hey", 42 or no argument
// When passed to the max function
// Then it should throw Error("findMax requires an array of numbers")
