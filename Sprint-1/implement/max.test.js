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
  // test.todo("given an empty array, returns -Infinity");

  test("should return -Infinity when passed an empty array", () => {
    expect(findMax([])).toEqual(-Infinity);
  });

  // Given an array with one number
  // When passed to the max function
  // Then it should return that number
  test("should return the only number when passed an array with one number", () => {
    expect(findMax([42])).toEqual(42);
  });

  // Given an array with both positive and negative numbers
  // When passed to the max function
  // Then it should return the largest number overall
  test("should return the largest number overall when passed an array with both positive and negative numbers", () => {
    expect(findMax([-10, 0, 5, -20, 15])).toEqual(15);
  });

  // Given an array with just negative numbers
  // When passed to the max function
  // Then it should return the closest one to zero
  test("should return the closest number to zero when passed an array with just negative numbers", () => {
    expect(findMax([-10, -5, -20, -1])).toEqual(-1);
  });

  // Given an array with decimal numbers
  // When passed to the max function
  // Then it should return the largest decimal number
  test("should return the largest decimal number when passed an array with decimal numbers", () => {
    expect(findMax([1.5, 2.3, 0.8, 3.1])).toEqual(3.1);
  });

  // Given an array with non-number values
  // When passed to the max function
  // Then it should return the max and ignore non-numeric values
  test("should return the max and ignore non-numeric values when passed an array with non-number values", () => {
    expect(findMax(["hey", 10, "hi", 60, 10, "300"])).toEqual(60);
  });

  // Given an array with only non-number values
  // When passed to the max function
  // Then it should return the least surprising value given how it behaves for all other inputs
  test("should return -Infinity when passed an array with ONLY non-number values", () => {
    expect(findMax(["hey", "hi", "hello"])).toEqual(-Infinity);
  });
});
