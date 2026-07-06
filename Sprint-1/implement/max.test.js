/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");

describe("findMax", () => {
  test("returns -Infinity when passed an empty array", () => {
    expect(findMax([])).toEqual(-Infinity);
  });

  // Given an array with one number
  test("returns the number itself when passed an array with one number", () => {
    expect(findMax([42])).toEqual(42);
  });

  // Given an array with both positive and negative numbers
  test("returns the largest number with both positive and negative numbers", () => {
    expect(findMax([-10, 0, 10, 20, -20])).toEqual(20);
  });

  // Given an array with just negative numbers
  test("returns the largest number with negative numbers", () => {
    expect(findMax([-10, -20, -30, -4, -8, -1])).toEqual(-1);
  });

  // Given an array with decimal numbers
  test("returns the largest number with decimal numbers", () => {
    expect(findMax([-5, 2.3, 7, 3.9, 2.1])).toEqual(3.9);
  });

  // Given an array with non-number values
  test("returns the largest number when the array contains non-numeric values", () => {
    expect(findMax(["hey", 10, "hi", 60, 10])).toEqual(60);
  });

  // Given an array with only non-number values
  test("returns -Infinity when the array contains only non-numeric values", () => {
    expect(findMax(["hey", "hi", "hello"])).toEqual(-Infinity);
  });
});
