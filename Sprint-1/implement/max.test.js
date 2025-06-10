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
//test.todo("given an empty array, returns -Infinity");
test("given an empty array, it returns an empty array", () => {
    expect(findMax([])).toEqual(-Infinity);
  });
// Given an array with one number
// When passed to the max function
// Then it should return that number
test("given array with one number, it should return that number", () => {
    expect(findMax([1])).toEqual(1);
  });
// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("given an array with both positive and negative numbers, it returns the largest number overall", () => {
    expect(findMax([-1,5,8,-7])).toEqual(8);
  });
// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("given an array with just negative numbers, it should return the closest one to zero", () => {
    expect(findMax([-1,-4,-6,-7])).toEqual(-1);
  });
// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("given an array with decimal numbers, it should return the largest decimal number", () => {
    expect(findMax([0.1,0.4,0.6,0.7,0.3])).toEqual(0.7);
  });
// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("given an array with non-number values, it should return the max and ignore non-numeric values", () => {
    expect(findMax([0.1,"a",0.6,null,0.3])).toEqual(0.6);
  });
// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
  test("given an array with only non-number values, it should return -Infinity", () => {
    expect(findMax(["a", null, undefined, {}, [], "5"])).toBe(-Infinity);
  });
});