/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");

// Acceptance Criteria:

describe("sum", () => {
// Given an empty array
// When passed to the sum function
// Then it should return 0
  it("empty array returns 0", () => {
    const list = [];
    expect(sum(list)).toEqual(0);
  });

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
  it("array with one number returns number", () => {
    const list = [1];
    expect(sum(list)).toEqual(1);
  });

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum

  it("array with negative numbers returns correct sum", () => {
    const list = [-1, -2, -3];
    expect(sum(list)).toEqual(-6);
  });

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum

  it("array with decimal numbers returns correct sum", () => {
    const list = [1.1, 2.2, 3.3];
    expect(sum(list)).toEqual(6.6);
  });

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements

  it("array with non-number values returns sum of numerical values only", () => {
    const list = [1];
    expect(sum(list)).toEqual(1);
  });

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs

  it("array with non-number values only returns least surprising output", () => {
    const list = [1];
    expect(sum(list)).toEqual(0);
  });
});