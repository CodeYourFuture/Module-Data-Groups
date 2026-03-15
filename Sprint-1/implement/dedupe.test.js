const dedupe = require("./dedupe.js");

// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array
test("given an empty array, it returns an empty array", () => {
  expect(dedupe([])).toEqual([]);
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
test("given an array with no duplicates, returns a copy of the array", () => {
  expect(dedupe([1, 2, 3])).toEqual([1, 2, 3]);
});

// Given an array with duplicate strings
// When passed to the dedupe function
// Then it should remove duplicates, preserving first occurrence
test("removes duplicate strings", () => {
  expect(dedupe(["a", "a", "a", "b", "b", "c"])).toEqual(["a", "b", "c"]);
});

// Given an array with duplicate numbers
// When passed to the dedupe function
// Then it should remove duplicates, preserving first occurrence
test("removes duplicate numbers", () => {
  expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
});

// Given an array with mixed duplicates
// When passed to the dedupe function
// Then it should remove duplicates preserving first occurrence
test("removes duplicates in mixed array", () => {
  expect(dedupe([1, 2, 1])).toEqual([1, 2]);
});
