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


// My code:
const sum = require("./sum.js");

describe("sum", () => {
  test("given an empty array, returns 0", () => {
    expect(sum([])).toBe(0);
  });

  test("returns the number for array with one number", () => {
    expect(sum([5])).toBe(5);
    expect(sum([-10])).toBe(-10);
  });

  test("handles negative numbers correctly", () => {
    expect(sum([10, -5, 3])).toBe(8); // 10 + (-5) + 3 = 8
    expect(sum([-1, -2, -3])).toBe(-6);
  });

  test("handles decimal numbers correctly", () => {
    expect(sum([1.5, 2.5, 1.0])).toBe(5.0);
    expect(sum([0.1, 0.2])).toBeCloseTo(0.3); // Floating point precision
  });

  test("ignores non-number values", () => {
    expect(sum(["hey", 10, "hi", 60, 10])).toBe(80); // 10 + 60 + 10 = 80
    expect(sum([null, 5, undefined, 20, "hello"])).toBe(25); // 5 + 20 = 25
  });

  test("returns 0 for arrays with only non-number values", () => {
    expect(sum(["hello", "world", null, undefined])).toBe(0);
    expect(sum([true, false, "test"])).toBe(0);
  });
});