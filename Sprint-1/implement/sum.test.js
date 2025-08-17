/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");

// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0
test('given an empty array, it returns 0', () => {
    expect(sum([])).toEqual(0);
  }); // this 1st test passes. i just copied the max function we made and refactored it

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test('given an array with 1 number, it returns that number', () => {
    expect(sum([20])).toEqual(20); //New failing test. adjust sum function
  });

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test('given an array with negative numbers, it returns the total of the negative number', () => {
    expect(sum([-20, -10, -30, -40])).toEqual(-100); //New failing test. adjust sum function if necessary
  }); // test passes without having to change functions

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test('given an array with 1 number, it returns that number', () => {
    expect(sum([20.4,1.1,2.5,33.33333])).toEqual(57.33333); //New failing test. adjust sum function
  });
// this passes without adjusting the function

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test('given an array with non-numerical elements with numerical, it returns the total of the numerical values', () => {
    expect(sum(["a",20,1.1,2,"hello world",33.33])).toEqual(56.43); //New failing test. adjust sum function
  }); // this works

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test('given an array with non-numerical values, it returns a 0 sum', () => {
    expect(sum(["cat", "wife", "non-numerical values", "the wind", "what do all of these have in common?"])).toEqual(0); //New failing test. adjust sum function
  });
  // so all tests pass