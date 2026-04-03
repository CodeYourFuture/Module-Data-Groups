const calculateMode = require("./mode.js");

// Acceptance criteria for calculateMode function

// Given an array of numbers
// When calculateMode is called on the array
// Then it should return the number that appears most frequently in the array
// Answer:
describe("calculateMode()", () => {
  test("returns the most frequent number in an array", () => {
    const nums = [2, 4, 1, 2, 3, 2, 1];
    expect(calculateMode(nums)).toEqual(2);
  });

  // Example:
  // Given [2,4,1,2,3,2,1]
  // When calculateMode is called on [2,4,1,2,3,2,1]
  // Then it should return 2
  // Answer:
  test("returns 2 as the most frequent number", () => {
    expect(calculateMode([2, 4, 1, 2, 3, 2, 1])).toEqual(2);
  });

  // Given an array with multiple modes
  // When calculateMode is called
  // Then it should return the first mode
  // Answer:
  test("returns first mode when there is a tie", () => {
    expect(calculateMode([1, 2, 2, 3, 3])).toEqual(2);
  });

  // Given an array with non-number values
  // When calculateMode is called
  // Then it should ignore non-number values
  // Answer:
  test("ignores non-number values", () => {
    expect(calculateMode([1, 3, "2", 2, 3, null])).toEqual(3);
  });

  // Given an empty array
  // When calculateMode is called
  // Then it should return NaN
  // Answer:
  test("returns NaN for empty array", () => {
    expect(calculateMode([])).toBeNaN();
  });
});
