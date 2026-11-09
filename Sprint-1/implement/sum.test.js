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
  it("returns for []", () => {
    expect(sum([])).toEqual(0);
  });
  // Given an array with just one number
  // When passed to the sum function
  // Then it should return that number
  it("returns for [8]", () => {
    expect(sum([8])).toEqual(8);
  });
  // Given an array containing negative numbers
  // When passed to the sum function
  // Then it should still return the correct total sum
  it("returns for [8, -5, 10]", () => {
    expect(sum([8, -5, 10])).toEqual(13);
  });

  // Given an array with decimal/float numbers
  // When passed to the sum function
  // Then it should return the correct total sum
  it("returns for [10, 3.75, 2.25]", () => {
    expect(sum([10, 3.75, 2.25])).toEqual(16);
  });
  // Given an array containing a value that isn't a number
  // When passed to the sum function
  // Then it should throw Error("sum requires an array of numbers")

  it("returns for [10, 20, '30']", () => {
    () =>
      expect(
        sum([10, 20, "30"]).toThrow(
          new Error("sum requires an array of numbers")
        )
      );
  });

  // Given something that isn't an array at all, such as "hey", 42 or no argument
  // When passed to the sum function
  // Then it should throw Error("sum requires an array of numbers")
  it("returns for 'hey'", () => {
    () =>
      expect(sum("hey")).toThrow(new Error("sum requires an array of numbers"));
  });

  it("returns for (42)", () => {
    () =>
      expect(sum(42)).toThrow(new Error("sum requires an array of numbers"));
  });

  it("returns for ('')", () => {
    () =>
      expect(sum("")).toThrow(new Error("sum requires an array of numbers"));
  });
});
