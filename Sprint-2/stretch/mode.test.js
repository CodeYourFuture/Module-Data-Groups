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
    expect(calculateMode([2, 4, 1, 2, 3, 2, 1])).toEqual(2);
    expect(calculateMode([4, 4, 1, 2, 3, 2, 4])).toEqual(4);
    expect(calculateMode([3, 4, 1, 5, 3, 1, 1])).toEqual(1);
  });

  test("returns the first mode in case of multiple modes", () => {
    expect(calculateMode([1, 2, 2, 3, 3])).toEqual(2);
    expect(calculateMode([1, 1, 2, 7, 7])).toEqual(1);
    expect(calculateMode([1, 5, 5, 3, 3])).toEqual(5);
    expect(calculateMode([5, 3, 3, 1, 5])).toEqual(5);
    expect(calculateMode([9, 2, 4, 5, 3, 3, 4, 1, 1, 2])).toEqual(2);
  });

  test("ignores non-number values", () => {
    expect(calculateMode([1, 3, "2", 2, 3, null])).toEqual(3);
    expect(calculateMode([1, 3, "2", undefined, 3, null])).toEqual(3);
    expect(calculateMode(["2", undefined, 1, null])).toEqual(1);
    expect(calculateMode("a", true, null, "b", undefined)).toBeNaN();
  });
});
