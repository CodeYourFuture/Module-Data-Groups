const dedupe = require("./dedupe.js");

describe("dedupe", () => {
  test("Return empty array for given empty array", () => {
    expect(dedupe([])).toEqual([]);
  });

  test("Return copy for no duplicates input", () => {
    [
      [2, 4, 1, 6.9, 0],
      ["a", "d", "e", "b", "n", "c"],
      ["2", "4", "1", "6", "9", "0"],
      ["cat", "dog", "cow"],
    ].forEach((input) => {
      expect(dedupe(input)).toEqual(input);
    });
  });

  test("removes duplicate strings", () => {
    [
      { input: ["a", "a", "a", "b", "b", "c"], expected: ["a", "b", "c"] },
      {
        input: ["2", "4", "1", "6", "2", "4"],
        expected: ["2", "4", "1", "6"],
      },
      { input: ["cat", "dog", "cat"], expected: ["cat", "dog"] },
    ].forEach((obj) => expect(dedupe(obj.input)).toEqual(obj.expected));
  });

  test("removes duplicate numbers", () => {
    [
      { input: [1, 2, 1], expected: [1, 2] },
      {
        input: [2, 4, 1, 6.9, 2, 0],
        expected: [2, 4, 1, 6.9, 0],
      },
    ].forEach((obj) => expect(dedupe(obj.input)).toEqual(obj.expected));
  });

  test("removes duplicate numbers and strings", () => {
    expect(dedupe([1, "a", 2, "b", 1, "a"])).toEqual([1, "a", 2, "b"]);
  });

  test("does not mutate original array", () => {
    const input = [1, 2, 3];
    const original = [...input];

    const result = dedupe(input);

    expect(result).not.toBe(input);
    expect(input).toEqual(original);
  });
});

/*
Dedupe Array

📖 Dedupe means **deduplicate**

In this kata, you will need to deduplicate the elements of an array

E.g. dedupe(['a','a','a','b','b','c']) returns ['a','b','c']
E.g. dedupe([5, 1, 1, 2, 3, 2, 5, 8]) returns [5, 1, 2, 3, 8]
E.g. dedupe([1, 2, 1]) returns [1, 2]
*/

// Acceptance Criteria:

// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array
test.todo("given an empty array, it returns an empty array");

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

// Given an array of strings or numbers
// When passed to the dedupe function
// Then it should return a new array with duplicates removed while preserving the
// first occurrence of each element from the original array.
