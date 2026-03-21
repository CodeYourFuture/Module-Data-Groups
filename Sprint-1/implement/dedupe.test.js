const dedupe = require("./dedupe.js");

describe("dedupe", () => {
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
  test("given an empty array, it returns an empty array", () => {
    const input = [];
    const output = dedupe(input);
    expect(output).toEqual([]);
  });
  // Given an array with no duplicates
  // When passed to the dedupe function
  // Then it should return a copy of the original array
  test("array with no duplicates returns a copy", () => {
    const input = [1, 2, 3];
    const output = dedupe(input);
    expect(output).toEqual([1, 2, 3]);
    expect(output).not.toBe(input);
  });

  // Given an array of strings or numbers
  // When passed to the dedupe function
  // Then it should return a new array with duplicates removed while preserving the
  // first occurrence of each element from the original array.
  test("removes duplicates while preserving first occurrence", () => {
    const input1 = ["a", "a", "a", "b", "b", "c"];
    expect(dedupe(input1)).toEqual(["a", "b", "c"]);

    const input2 = [5, 1, 1, 2, 3, 2, 5, 8];
    expect(dedupe(input2)).toEqual([5, 1, 2, 3, 8]);

    const input3 = [1, 2, 1];
    expect(dedupe(input3)).toEqual([1, 2]);
  });
});
