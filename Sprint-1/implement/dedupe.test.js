const dedupe = require("./dedupe.js");

/*
Dedupe Array
*/

// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array
test("given an empty array, it returns an empty array", () => {
  expect(dedupe([])).toEqual([]);
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
test("given an array with no duplicates, it returns a new array", () => {
  const input = [1, 2, 3];
  const result = dedupe(input);

  expect(result).toEqual([1, 2, 3]); // values match
  expect(result).not.toBe(input);    // 🔥 ensures it's a NEW array
});

// Given an array with numbers
// When passed to the dedupe function
// Then it should remove duplicate values
test("removes duplicate numbers", () => {
  expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
});

// Given an array with strings
// When passed to the dedupe function
// Then it should remove duplicate values
test("removes duplicate strings", () => {
  expect(dedupe(["a", "a", "a", "b", "b", "c"])).toEqual(["a", "b", "c"]);
});

// Given an array with duplicates
// When passed to the dedupe function
// Then it should preserve the first occurrence order
test("preserves first occurrence order", () => {
  expect(dedupe([1, 2, 1])).toEqual([1, 2]);
});