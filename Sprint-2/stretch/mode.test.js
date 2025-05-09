const calculateMode = require("./mode.js");

describe("calculateMode()", () => {
  test("returns the most frequent number in an array", () => {
    const nums = [2, 4, 1, 2, 3, 2, 1];
    expect(calculateMode(nums)).toEqual(2);  // 2 appears 3 times
  });

  test("returns the first mode in case of multiple modes", () => {
    const nums = [1, 2, 2, 3, 3];
    expect(calculateMode(nums)).toEqual(2);  // Both 2 and 3 appear 2 times, but 2 comes first
  });

  test("ignores non-number values", () => {
    const nums = [1, 3, "2", 2, 3, null];
    expect(calculateMode(nums)).toEqual(3);  // Ignores "2" and null, 3 appears twice
  });

  test("returns the correct mode when there is only one element", () => {
    const nums = [5];
    expect(calculateMode(nums)).toEqual(5);  // Only one element, so 5 is the mode
  });

  test("returns null for an empty array", () => {
    const nums = [];
    expect(calculateMode(nums)).toEqual(null);  // No elements to find a mode
  });

  test("handles arrays with negative numbers", () => {
    const nums = [-1, -2, -2, -3, -2];
    expect(calculateMode(nums)).toEqual(-2);  // -2 appears most frequently
  });

  test("returns the mode correctly for an array with large numbers", () => {
    const nums = [1000000, 1000000, 999999, 1000000];
    expect(calculateMode(nums)).toEqual(1000000);  // 1000000 appears most frequently
  });

  test("handles arrays with all unique numbers", () => {
    const nums = [1, 2, 3, 4, 5];
    expect(calculateMode(nums)).toEqual(1);  // All numbers are unique, returns the first
  });

  test("returns the correct mode with floating point numbers", () => {
    const nums = [1.1, 2.2, 1.1, 3.3];
    expect(calculateMode(nums)).toEqual(1.1);  // 1.1 appears most frequently
  });

  test("handles an array with very large size", () => {
    const nums = new Array(1000000).fill(1);
    expect(calculateMode(nums)).toEqual(1);  // Array of 1's, so 1 is the mode
  });

  test("returns the first mode if there are equal frequencies of different numbers", () => {
    const nums = [1, 2, 3, 1, 3];
    expect(calculateMode(nums)).toEqual(1);  // 1 and 3 both appear twice, but 1 comes first
  });
});

