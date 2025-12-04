const calculateMode = require("./mode.js");

// Acceptance criteria for calculateMode function

// Given an array of numbers
// When calculateMode is called on the array
// Then it should return the number that appears most frequently in the array

// Example:
// Given [2,4,1,2,3,2,1]
// When calculateMode is called on [2,4,1,2,3,2,1]
// Then it should return 2 */

describe("calculateMode()", () => {
  test("returns the most frequent number in an array", () => {
    const arr = [2, 4, 1, 2, 3, 2, 1];

    expect(calculateMode(arr)).toEqual(2);
  });

  test("returns the first mode in case of multiple modes", () => {
    const arr = [1, 2, 2, 3, 3];

    expect(calculateMode(arr)).toEqual(2);
  });

  test("ignores non-number values", () => {
    const arr = [1, 3, "2", 2, 3, null];

    expect(calculateMode(arr)).toEqual(3);
  });

  test("returns NaN for an empty array", () => {
  expect(calculateMode([])).toEqual();
});

});

// In mode.test.js test cases passed


