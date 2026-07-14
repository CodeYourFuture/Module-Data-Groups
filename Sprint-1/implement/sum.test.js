/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");
describe("sum function", () => {
  // Acceptance Criteria:

  // Given an empty array
  // When passed to the sum function
  // Then it should return 0
  it("given an empty array, should return 0", () => {
    expect(sum([])).toEqual(0);
  });

  // Given an array with just one number

  // When passed to the sum function
  // Then it should return that number
  it("given an array of just one number, returns that number", () => {
    expect(sum([2])).toEqual(2);
  });
  // Given an array containing negative numbers
  // When passed to the sum function
  // Then it should still return the correct total sum
  it("given an array containing negative numbers, returns correct total sum", () => {
    expect(sum([-1, -3, -5, 0])).toEqual(-9);
  });
  // Given an array with decimal/float numbers
  // When passed to the sum function
  // Then it should return the correct total sum
  it("given an array with decimal numbers, returns correct total sum", () => {
    expect(sum([-1.2, 2.3, 0.001, 2.0])).toEqual(3.101);
  });
  // Given an array containing non-number values
  // When passed to the sum function
  // Then it should ignore the non-numerical values and return the sum of the numerical elements
  it("given an array containing non-numerical values, returns the sum of the numerical values", () => {
    expect(sum(["I", 2, "am", -1000, "Lord", "200", "Voldemort", 10])).toEqual(
      -988
    );
  });
  // Given an array with only non-number values
  // When passed to the sum function
  // Then it should return the least surprising value given how it behaves for all other inputs
  it("given an array with only non-numerical values, returns 0", () => {
    expect(sum(["I", "am", "Lord", "Voldemort"])).toEqual(0);
  });

  // Additional test: only positive integers
  it("given an array with only positive integers, returns the sum of the elements", () => {
    expect(sum([1, 2, 3, 100])).toEqual(106);
  });
});
