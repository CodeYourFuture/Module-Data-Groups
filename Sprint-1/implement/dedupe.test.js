const dedupe = require("./dedupe.js");
/*
Dedupe Array

📖 Dedupe means **deduplicate**

In this kata, you will need to deduplicate the elements of an array

E.g. dedupe(['a','a','a','b','b','c']) target output: ['a','b','c']
E.g. dedupe([5, 1, 1, 2, 3, 2, 5, 8]) target output: [5, 1, 2, 3, 8]
E.g. dedupe([1, 2, 1]) target output: [1, 2]
*/

// Acceptance Criteria:

// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array
describe("dedupe", () => {
  it("returns an empty array if passed an empty array", () =>
    expect(dedupe([])).toEqual([]));

  [
    { input: [1, 2, 3], expected: [1, 2, 3] },
    {
      input: [4542543, 65756756, 433254],
      expected: [4542543, 65756756, 433254],
    },
  ].forEach(({ input, expected }) =>
    it(
      "returns a copy of original array when passed array with no duplicates ",
      () => expect(dedupe(input)).toEqual(expected),
      expect(dedupe(input)).not.toBe(expected)
    )
  );

  [
    { input: [1, 2, 3, "apple", 3, 2, {}], expected: [1, 2, 3, "apple", {}] },
    {
      input: [4542543, undefined, 4542543, 4542543, null, [], null],
      expected: [4542543, undefined, null, []],
    },
  ].forEach(({ input, expected }) =>
    it("returns array wit unique values in their first occurrence index when passed an array with numbers and non-number values ", () =>
      expect(dedupe(input)).toEqual(expected))
  );
});
