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
test.todo("given an empty array, returns -Infinity");

// Given an array with one number
// When passed to the max function
// Then it should return that number
test.todo("given an array with one number, returns that number");

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test.todo(
  "given an array with positive and negative number, returns the largest number overall"
);

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test.todo(
  "given an array with negative number, returns the largest number which is closest to 0"
);

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test.todo(
  "given an array with decimal numbers, returns the largest decimal number"
);
// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test.todo(
  "given an array with non-number values, returns the max and ignore non-numeric values"
);
// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test.todo(
  "given an array with non-number values, returns the least surprising value"
);

describe("findMax function", () => {
  test("given an empty array, returns -Infinity", () => {
    expect(findMax([])).toEqual(-Infinity);
  });

  test("given an array with one number, returns that number", () => {
    expect(findMax([5])).toEqual(5);
    expect(findMax([-10])).toEqual(-10);
  });

  test("given an array with positive and negative numbers, returns the largest number overall", () => {
    expect(findMax([-1, 2, 3, -10])).toEqual(3);
    expect(findMax([-100, 0, 50, -200])).toEqual(50);
  });

  test("given an array with negative numbers, returns the largest number which is closest to 0", () => {
    expect(findMax([-5, -2, -8, -10])).toEqual(-2);
    expect(findMax([-100, -50, -1, -20])).toEqual(-1);
  });

  test("given an array with decimal numbers, returns the largest decimal number", () => {
    expect(findMax([1.5, 2.7, 3.9, 3.8])).toEqual(3.9);
    expect(findMax([-1.1, -0.5, -0.9])).toEqual(-0.5);
  });

  test("given an array with non-number values, returns the max and ignores non-numeric values", () => {
    expect(findMax([5, "a", null, 10, undefined, 3])).toEqual(10);
    expect(findMax(["hello", 2, {}, 7, NaN, 1])).toEqual(7);
  });

  test("given an array with only non-number values, returns the least surprising value", () => {
    expect(findMax(["a", {}, null, undefined])).toEqual(-Infinity);
    expect(findMax([NaN, "hello", {}])).toEqual(-Infinity);
  });
});
