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
it("given an empty array, returns -Infinity", () => {
    const input = []
    const result = findMax(input)
    expect(result).toBe(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
it('given an array with one number, its should return that number', () => {
    const input = [5]
    const result = findMax(input)
    expect(result).toBe(5);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
it('given an array with both positive and negative, it should return largest overall', () => {
    const input = [5, -5, -10, -1, 6, 8, 10]
    const result = findMax(input)
    expect(result).toBe(10);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
it('given an array with just negative numbers, it should return the closest one to zero', () => {
    const input = [-10, -5, -2, -8];
    const result = findMax(input);
    expect(result).toBe(-2);
})

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
it("given an array with just decimal numbers, it should return the largest decimal number", () => {
  const input = [1.0, 2.5, 2.2, 5.8];
  const result = findMax(input);
  expect(result).toBe(5.8);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
it("given an array with non-number value, it should return the max and ignore non-numeric value", () => {
  const input = [4, 5, 'arr', 2, []," ", 15, 8];
  const result = findMax(input);
  expect(result).toBe(15);
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
it("given an array with only non-number value, it should return the least surprising value given how it behaves for all other inputs", () => {
  const input = [true, {}, "arr", null, [], " ", NaN];
  const result = findMax(input);
  expect(result).toBe(-Infinity);
});