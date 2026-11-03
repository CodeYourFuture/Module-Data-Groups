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
it("given an empty array, returns -Infinity", () => {
    expect(findMax([])).toEqual(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
it("Given array with one number should return that number", () => {
    expect(findMax([3])).toEqual(3);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
it("Given array of positive and negative values returns the biggest", () => {
    expect(findMax([4,-7,47,-90])).toEqual(47);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
it("Given array of negative values returns the closest to zero", () => {
  expect(findMax([-4, -7, -47, -90])).toEqual(-4);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
it("Given array of positive and negative values returns the biggest", () => {
  expect(findMax([4.3, -7.83, 47.134, -90.2947])).toEqual(47.134);
});

// Given an array containing a value that isn't a number
// When passed to the max function
// Then it should throw Error("findMax requires an array of numbers")
it("Given array with value that isn't a number, should throw", () => {
    expect(() => {
      findMax([5, "ooo", 203]);
    }).toThrow("findMax requires an array of numbers");
});

// Given something that isn't an array at all, such as "hey", 42 or no argument
// When passed to the max function
// Then it should throw Error("findMax requires an array of numbers")
