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
//test.todo("given an empty array, returns -Infinity");
test('given an empty array, it returns -Infinity', () => {
    expect(findMax([])).toEqual(-Infinity);
  });

// Given an array with one number
// When passed to the max function
// Then it should return that number
// Given an array with one number
// When passed to the max function
// Then it should return that number
test("given an array with one number, returns that number", () => {
    expect(findMax([5])).toEqual(5);
});
// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
// sounds like we can use .absolute here maybe
// Given an array with positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("given an array with positive and negative numbers, returns the largest number", () => {
    expect(findMax([-10, 0, 5, 20])).toEqual(20); // used the filter method to pass this
  });
  
// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("given an array with negative numbers, returns the number closest to zero", () => {
  expect(findMax([-10, -1000, -5, -20, -1])).toEqual(-1); // this passed without us having to make changes in the code 
});
// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
// so we want to to include decimals and keep these as real numbers
test("given an array with decimal numbers, returns the largest decimal number", () => {
  expect(findMax([-10.3, 0.6, 5.3, 20.8])).toEqual(20.8); // New failing test
});
// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("given an array with non-number values, returns the max and ignores non-numeric values", () => {
    expect(findMax(["a", 10, "b", 30, 20])).toEqual(30); // this passed and returns the decimal
  }); 
  
// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
// i dont understand this?? after doing some research we find that the least surprising value would be that which is consistent with the existing functionality and output of the code
test("given an array with only non-number values, returns -Infinity", () => {
  expect(findMax(["a", "b", "c"])).toEqual(-Infinity);
}); // the final and latest test passes without having to make any changes to the code base.
