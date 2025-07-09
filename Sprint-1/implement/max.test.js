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
describe("max", () => {
  it("returns -Infinity when given an empty array", () => {
    const input = [];
    const result = findMax(input);
    expect(result).toEqual(-Infinity);
  });
});
// Given an array with one number
// When passed to the max function
// Then it should return that number
describe("max", () => {
  it("returns the number when given an array with one number", () => {
    const input = [42];
    const result = findMax(input);
    expect(result).toEqual(42);
  });
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
describe("max", () => {
  it("returns the largest number when given an array with both positive and negative numbers", () => {
    const input = [10, -5, 20, -15];
    const result = findMax(input);
    expect(result).toEqual(20);
  });
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
describe("max", () => {
  it("returns the closest negative number to zero when given an array with just negative numbers", () => {
    const input = [-10, -20, -5, -15];
    const result = findMax(input);
    expect(result).toEqual(-5);
  });
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
describe("max", () => {
  it("returns the largest decimal number when given an array with decimal numbers", () => {
    const input = [1.5, 2.3, 0.7, 3.1];
    const result = findMax(input);
    expect(result).toEqual(3.1);
  });
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
describe("max", () => {
  it("returns the maximum number and ignores non-numeric values when given an array with non-number values", () => {
    const input = ["hey", 10, "hi", 60, 10];
    const result = findMax(input);
    expect(result).toEqual(60);
  });
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
describe("max", () => {
  it("returns -Infinity when given an array with only non-number values", () => {
    const input = ["hello", "world"];
    const result = findMax(input);
    expect(result).toEqual(-Infinity);
  });
});
