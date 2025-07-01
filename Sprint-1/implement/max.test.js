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
// test.todo("given an empty array, returns -Infinity");
describe("empty array", () => {
  test("given an empty array, returns -Infinity", () => {
    expect(findMax([])).toBe(-Infinity)
  })
})

// Given an array with one number
// When passed to the max function
// Then it should return that number
describe("an array with one number", () => {
  test("given an array with one number, return that number", () => {
    expect(findMax([3])).toBe(3)
  });
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
describe("an array with both positive and negative numbers", () => {
  test("given an array with both positive and negative numbers, return the largest number overall", () => {
    expect(findMax([-5,47,100,-35])).toBe(100);
  });
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
describe("an array with just negative numbers", () => {
  test("given an array with just negative numbers, return the closest one to zero", () => {
    expect(findMax([-3,-7,-25,-77,-8])).toBe(-3);
  });
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
describe("an array with decimal numbers", () => {
  test("given an array with decimal numbers, return the largest decimal number", () => {
    expect(findMax([3.5, 8.6, 2.75, 75.25, 1.05])).toBe(75.25);
  });
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
describe("an array with non-number values", () => {
  test("given an array with non-number values, return the max and ignore non-numeric values", () => {
    expect(findMax(["test", "hello world", 45, "undefined", 90, 4])).toBe(90);
  });
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
describe("an array with only non-number values", () => {
  test("given an array with only non-number values, return the least surprising value given how it behaves for all other inputs", () => {
    expect(findMax(["test", null, undefined, true])).toBe(-Infinity);
  });
});
