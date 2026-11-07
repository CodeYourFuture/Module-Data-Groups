/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]) throws Error("sum requires an array of numbers") (sum can't add non-numerical elements, so it shouldn't guess)
*/

const sum = require("./sum.js");

// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0
describe("sum", () => {
  it("given an empty array, returns 0", () => {
    expect(sum([])).toEqual(0);
  });

  // Given an array with just one number
  // When passed to the sum function
  // Then it should return that number
  it("Given an array one number, return that number", () => {
    expect(sum([45])).toEqual(45);
  });

  // Given an array containing negative numbers
  // When passed to the sum function
  // Then it should still return the correct total sum
  it("Given an array containing negative numbers, return the correct total sum", () => {
    expect(sum([-5, -6, -12])).toEqual(-23);
    expect(sum([-22, 17, -9])).toEqual(-14);
    expect(sum([-99, 0, -1])).toEqual(-100);
  });

  // Given an array with decimal/float numbers
  // When passed to the sum function
  // Then it should return the correct total sum
  it("Given an array with decimal/float numbers, return the correct total sum", () => {
    expect(sum([1.25, 2.75, 7.12])).toEqual(11.12);
    expect(sum([4.12, 7.36, -1.52])).toEqual(9.96);
  });

  // Given an array containing a value that isn't a number
  // When passed to the sum function
  // Then it should throw Error("sum requires an array of numbers")
  it("throws when given something that isn't an number", () => {
    expect(() => sum(["a", "b", "c"])).toThrow(
      new Error("sum requires an array of numbers")
    );
  });

  // Given something that isn't an array at all, such as "hey", 42 or no argument
  // When passed to the sum function
  // Then it should throw Error("sum requires an array of numbers")
  it("throws when given something that isn't an array", () => {
    expect(() => sum("hey")).toThrow(
      new Error("sum requires an array of numbers")
    );

    expect(() => sum(null)).toThrow(
      new Error("sum requires an array of numbers")
    );

    expect(() => sum(42)).toThrow(
      new Error("sum requires an array of numbers")
    );
  });
});
