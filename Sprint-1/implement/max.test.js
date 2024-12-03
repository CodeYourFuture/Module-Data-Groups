/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/


// Given an empty array
// When passed to the max function
// Then it should return -Infinity
// Delete this test.todo and replace it with a test.


const findMax = require("./max.js"); // Assuming the function is in a file named findMax.js


  // Test for an empty array
  test("should return -Infinity when given an empty array", () => {
    expect(findMax([])).toBe(-Infinity);
  });

  // Test for an array with one number
  test("should return the number itself when the array contains one number", () => {
    expect(findMax([42])).toBe(42);
  });

  // Test for an array with both positive and negative numbers
  test("should return the largest number when the array contains both positive and negative numbers", () => {
    expect(findMax([-3, 5, -10, 2])).toBe(5);
  });

  // Test for an array with just negative numbers
  test("should return the largest (closest to zero) negative number", () => {
    expect(findMax([-3, -7, -1, -20])).toBe(-1);
  });

  // Test for an array with decimal numbers
  test("should return the largest decimal number", () => {
    expect(findMax([1.1, 2.2, 3.3, 2.8])).toBe(3.3);
  });

  // Test for an array with non-number values
  test("should return the largest number and ignore non-numeric values", () => {
    expect(findMax([3, "hello", 7, undefined, 2])).toBe(7);
  });

  // Test for an array with only non-number values
  test("should return -Infinity when the array contains only non-numeric values", () => {
    expect(findMax(["a", "b", null, undefined])).toBe(-Infinity);
  });



// Given an array with one number
// When passed to the max function
// Then it should return that number

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
