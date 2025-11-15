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
describe("findMax function", () => {
    // empty array
    it("returns -Infinity for an empty array", () => {
      expect(findMax([])).toBe(-Infinity);
    });
// Given an array with one number
// When passed to the max function
// Then it should return that number

it("returns that number for a single-element array", () => {
    expect(findMax([42])).toBe(42);
  });
// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall

it("returns the largest number overall", () =>{
    expect(findMax([-1, 0, 5, -10, 3])).toBe(5);
  });
// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero

it("returns the closest to zero for all negative numbers", () =>{
    expect(findMax([-10, -3, -7])).toBe(-3);
  });
// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number

it("returns the largest decimal number", () => {
    expect(findMax([1.1, 2.2, 1.5])).toBe(2.2);
  });
// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values

it("ignores non-numbers and returns the max", () => {
    expect(findMax([1, "a", 5, null, 2])).toBe(5);
  });
// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs

it("returns -Infinity if no numbers are present", () => {
    expect(findMax(["a", null, "b"])).toBe(-Infinity);
  });

});