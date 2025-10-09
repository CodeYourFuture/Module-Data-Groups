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

// Making sure input is an array
// When the input is not array, throw an error
test("should return an error when the input is not an array", () => {
  const errorMessage = "Input must be an array";
  expect(() => dedupe("not an array")).toThrow(errorMessage);
  expect(() => dedupe(123)).toThrow(errorMessage);
  expect(() => dedupe({})).toThrow(errorMessage);
  expect(() => dedupe(null)).toThrow(errorMessage);
  expect(() => dedupe(undefined)).toThrow(errorMessage);
  expect(() => dedupe(true)).toThrow(errorMessage);
});

// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array
test("given an empty array, it returns an empty array", () => {
  expect(dedupe([])).toEqual([]);
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
test("given an array with no duplicates, it returns the original array", () => {
  expect(dedupe(["a", "b", "c"])).toEqual(["a", "b", "c"]);
  expect(dedupe([1, 2, 3])).toEqual([1, 2, 3]);
  expect(dedupe([{ key1: "a" }, { key2: "b" }, { key3: "c" }])).toEqual([
    { key1: "a" },
    { key2: "b" },
    { key3: "c" },
  ]);
  expect(dedupe([true, false])).toEqual([true, false]);
});

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurrence of each element
test("given an array with strings or numbers, it returns first occurrence of each element", () => {
  expect(dedupe(["a", "b", "c", "a", "b", "c", "d"])).toEqual([
    "a",
    "b",
    "c",
    "d",
  ]);
  expect(dedupe([1, 2, 2, 3, 3, 4, 1, 5])).toEqual([1, 2, 3, 4, 5]);
});

// Given an array with mixed strings and numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurrence of each element
test("given an array with mixed strings and numbers, it returns first occurrence of each element", () => {
  expect(dedupe([1, 1, 2, "x", "x", "y", "z", 2, 3, 3, "z"])).toEqual([
    1,
    2,
    "x",
    "y",
    "z",
    3,
  ]);
});
