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
describe("calculate sum of given array", () => {
  it("given an empty array, returns 0", () => {
    const list = [];
    const result = sum(list);
    expect(result).toEqual(0);
  });

  // Given an array with just one number
  // When passed to the sum function
  // Then it should return that number
  it("Given an array with one number, return that number", () => {
    const list = [10];
    const result = sum(list);
    expect(result).toEqual(10);
  });

  // Given an array containing negative numbers
  // When passed to the sum function
  // Then it should still return the correct total sum
  it("Given an array with just negative numbers, return the correct total sum", () => {
    const list = [-10, -5, -100, -2, -1];
    const result = sum(list);
    expect(result).toEqual(-118);
  });

  // Given an array with decimal/float numbers
  // When passed to the sum function
  // Then it should return the correct total sum
  it("Given an array with decimal numbers, return the correct total sum", () => {
    const list = [-10.05, 5.15, -100.0001, -2.85, -1.46];
    const result = sum(list);
    expect(result).toEqual(-109.2101);
  });

  // Given an array containing non-number values
  // When passed to the sum function
  // Then it should ignore the non-numerical values and return the sum of the numerical elements
  it("Given an array with non-number values, return the sum of the numerical elements", () => {
    const list = [-10.05, 82.15, "1000", "London", -2.85, true];
    const result = sum(list);
    expect(result).toEqual(69.25);
  });

    it("Given an array with non-number values, return the sum of the numerical elements", () => {
    const list = [ 1.2, 0.6 , 0.005 ];
    const result = sum(list);
    expect(result).toEqual(1.805);
  });

  // Given an array with only non-number values
  // When passed to the sum function
  // Then it should return the least surprising value given how it behaves for all other inputs
  it("Given an array with only non-number values, return the least surprising value given how it behaves for all other inputs", () => {
    const list = ["London", "Hello", "CYF", "Zebra"];
    const result = sum(list);
    expect(result).toEqual(-Infinity);
  });

    it("Given an array with only non-number values, return the least surprising value given how it behaves for all other inputs", () => {
    const list = ["A"];
    const result = sum(list);
    expect(result).toEqual(-Infinity);
  });
});
