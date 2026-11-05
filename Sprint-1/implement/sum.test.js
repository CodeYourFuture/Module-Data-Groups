/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]) throws Error("sum requires an array of numbers") (sum can't add non-numerical elements, so it shouldn't guess)
*/

const sum = require("./sum.js");

// Acceptance Criteria:
describe("findMax", () => {
  // Given an empty array
  // When passed to the sum function
  // Then it should return 0
  it("returns 0 for []", () => {
    expect(sum([])).toEqual(0);
  });

  // Given an array with just one number
  // When passed to the sum function
  // Then it should return that number
  it("returns the sum of number for [7]", () => {
    expect(sum([7])).toEqual(7);
  });
  // Given an array containing negative numbers
  // When passed to the sum function
  // Then it should still return the correct total sum
  it("returns the correct sum with negative numbers", () => {
    expect(sum([10, -4, -8, 5])).toEqual(3);
  });
  // Given an array with decimal/float numbers
  // When passed to the sum function
  // Then it should return the correct total sum
  it("returns the correct sum with decimal numbers", () => {
    expect(sum([1.5, 2.25, 0.25])).toBeCloseTo(4);
    expect(sum([0.1, 0.2])).toBeCloseTo(0.3);
  });

  // Given an array containing a value that isn't a number
  // When passed to the sum function
  // Then it should throw Error("sum requires an array of numbers")
  it("throws when the array contains a non-number", () => {
    expect(() => sum(["hey", 10, "hi", 60, 10])).toThrow(
      new Error("sum requires an array of numbers")
    );
  });
  // Given something that isn't an array at all, such as "hey", 42 or no argument
  // When passed to the sum function
  // Then it should throw Error("sum requires an array of numbers")
  it.each([["hey"], [42], [null], [{}]])(
    "throws when given %p instead of an array",
    (input) => {
      expect(() => sum(input)).toThrow(
        new Error("sum requires an array of numbers")
      );
    }
  );

  it("throws when called with no argument", () => {
    expect(() => sum()).toThrow(new Error("sum requires an array of numbers"));
  });
});
