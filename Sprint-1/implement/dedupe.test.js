const dedupe = require("./dedupe.js");
/*
Dedupe Array

📖 Dedupe means **deduplicate**

In this kata, you will need to deduplicate the elements of an array

E.g. dedupe(['a','a','a','b','b','c']) target output: ['a','b','c']
E.g. dedupe([5, 1, 1, 2, 3, 2, 5, 8]) target output: [5, 1, 2, 3, 8]
E.g. dedupe([1, 2, 1]) target output: [1, 2]
*/
describe("dedupe", () => {
  // Given an empty array
  // When passed to the dedupe function
  // Then it should return an empty array
  it("given an empty array it should return an empty array", () => {
    const array = [];
    dedupeArray = dedupe(array);
    expect(dedupeArray).toEqual([]);
  });

  // Given an array with no duplicates
  // When passed to the dedupe function
  // Then it should return a copy of the original array
  [["a", "b", "c"], ["A", 1, "j", "?"], ["c"]].forEach((val) =>
    it(`returns copy of the original array if there are no duplicates in [${val}]`, () =>
      expect(dedupe(val)).toEqual(val))
  );
  // Given an array with strings or numbers
  // When passed to the dedupe function
  // Then it should remove the duplicate values, preserving the first occurrence of each element
  [
    { input: [1, 2, 1, 3, 1, 2, 10, 5, 0, 10], expected: [1, 2, 3, 10, 5, 0] },
    { input: [1, 2, 1, 4], expected: [1, 2, 4] },
    { input: [1, 1, 1, 1, 1], expected: [1] },
    {
      input: ["banana", "apple", "apple", "banana", "apple", "banana"],
      expected: ["banana", "apple"],
    },
    {
      input: [" ", "empty", "", " ", "", "empty"],
      expected: [" ", "empty", ""],
    },
    { input: ["2", "2", "3", "1"], expected: ["2", "3", "1"] },
  ].forEach(({ input, expected }) =>
    it(`returns a copy of array removing the duplicates from [${input}]`, () =>
      expect(dedupe(input)).toEqual(expected))
  );
});
