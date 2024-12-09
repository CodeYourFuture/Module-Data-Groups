/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

//const sum = require("./sum.js");

// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0
//test.todo("given an empty array, returns 0")

// Given an array with just one number
// When passed to the sum function
// Then it should return that number

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs

const sum = require("./sum");

describe("sum", () => {
  test("given an empty array, returns 0", () => {
    expect(sum([])).toEqual(0);
  });

  test("given an array with just one number, returns that number", () => {
    expect(sum([42])).toEqual(42);
  });

  test("given an array containing negative numbers, returns the correct total sum", () => {
    expect(sum([10, -20, 30, -40])).toEqual(-20);
  });

  test("given an array with decimal/float numbers, returns the correct total sum", () => {
  expect(sum([1.1, 1.1, 1.1])).toBeCloseTo(3.3, 5); 
});


  test("given an array containing non-number values, ignores non-numerical values and returns the sum", () => {
    expect(sum(["a", 10, null, 20, "b", 30])).toEqual(60);
  });

  test("given an array with only non-number values, returns 0", () => {
    expect(sum(["hello", true, null, undefined, "world"])).toEqual(0);
  });

  test("given an array with Infinity and a number, returns Infinity", () => {
    expect(sum([Infinity, 1])).toEqual(Infinity);
  });

  test("given an array with only Infinity values, returns Infinity", () => {
    expect(sum([Infinity, Infinity])).toEqual(Infinity);
  });

  test("given an array with NaN and a number, returns NaN", () => {
    expect(sum([NaN, 1])).toEqual(NaN);
  });

  test("given an array with Infinity and -Infinity, returns NaN", () => {
    expect(sum([Infinity, -Infinity])).toEqual(NaN);
  });
});
