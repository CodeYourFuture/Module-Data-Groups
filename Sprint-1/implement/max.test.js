/* Find the maximum element of an array of numbers
In this kata, you will need to implement a function that find the largest numerical element of an array.
E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)
You should implement this function in max.js, and add tests for it in this file.
We have set things up already so that this file can see your function from the other file.
*/
//const findMax = require("./max.js");
// Given an empty array
// When passed to the max function
// Then it should return -Infinity
// Delete this test.todo and replace it with a test.
//test.todo("given an empty array, returns -Infinity");
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
const findMax = require('./max'); // Make sure the path is correct

describe('findMax function', () => {
  test('returns -Infinity for an empty array', () => {
    expect(findMax([])).toBe(-Infinity);
  });

  test('returns the single element for an array with one number', () => {
    expect(findMax([42])).toBe(42);
  });

  test('returns the largest number in an array of positive and negative numbers', () => {
    expect(findMax([-10, 5, 20, -30, 7])).toBe(20);
  });

  test('returns the largest decimal number in an array', () => {
    expect(findMax([1.1, 2.2, 3.3, 2.1])).toBe(3.3);
  });

  test('ignores non-numeric values and finds the largest numeric value', () => {
    expect(findMax(['a', 10, 'b', 20, 'c', 5])).toBe(20);
  });
  
  test('returns the closest number to zero in an array of negative numbers', () => {
     expect(findMax([-10, -5, -20, -30, -7])).toBe(-5);
  });

  test('returns -Infinity if the array has only non-numeric values', () => {
    expect(findMax(['a', 'b', 'c'])).toBe(-Infinity);
  });
});