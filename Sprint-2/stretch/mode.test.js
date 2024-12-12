// Acceptance criteria for calculateMode function

// Given an array of numbers
// When calculateMode is called on the array
// Then it should return the number that appears most frequently in the array

// Example:
// Given [2,4,1,2,3,2,1]
// When calculateMode is called on [2,4,1,2,3,2,1]
// Then it should return 2 */
const { calculateMode } = require("./mode"); // Update with the correct path

describe("calculateMode()", () => {
  test("returns the most frequent number in an array", () => {
    const nums = [2, 4, 1, 2, 3, 2, 1];

    expect(calculateMode(nums)).toEqual(2);
  });

  test("returns the first mode in case of multiple modes", () => {
    const nums = [1, 2, 2, 3, 3];

    expect(calculateMode(nums)).toEqual(2);
  });

  test("ignores non-number values", () => {
    const nums = [1, 3, "2", 2, 3, null];

    expect(calculateMode(nums)).toEqual(3);
  });

  test("returns NaN when the array is empty", () => {
    const nums = [];

    expect(calculateMode(nums)).toEqual(NaN);
  });

  test("returns NaN when there are no valid numbers", () => {
    const nums = [null, "text", undefined, NaN];

    expect(calculateMode(nums)).toEqual(NaN);
  });

  test("handles array with a single element", () => {
    const nums = [5];

    expect(calculateMode(nums)).toEqual(5);
  });

  test("handles array with all identical elements", () => {
    const nums = [7, 7, 7, 7];

    expect(calculateMode(nums)).toEqual(7);
  });
});
