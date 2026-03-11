
// Acceptance Criteria:
const dedupe = require("./dedupe.js");

describe("dedupe", () => {
  test("given an empty array, it returns an empty array", () => {
    expect(dedupe([])).toEqual([]);
  });

  test("array with no duplicates returns a new but equal array", () => {
    const arr = [1, 2, 3];
    expect(dedupe(arr)).toEqual(arr);
    expect(dedupe(arr)).not.toBe(arr);
  });

  test("removes duplicates, preserving first occurrence (strings)", () => {
    expect(dedupe(["a", "a", "a", "b", "b", "c"])).toEqual(["a", "b", "c"]);
  });

  test("removes duplicates, preserving first occurrence (numbers)", () => {
    expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
  });

  test("handles [1,2,1] correctly", () => {
    expect(dedupe([1, 2, 1])).toEqual([1, 2]);
  });
});
// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array


// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element
