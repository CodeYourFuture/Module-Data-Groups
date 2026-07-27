const dedupe = require("./dedupe.js");
test("given an empty array, it returns an empty array", () => {
  expect(dedupe([])).toEqual([]);
});

test("given an array with no duplicates, returns a copy of the original array", () => {
  expect(dedupe([1, 2, 3])).toEqual([1, 2, 3]);
});

test("given an array of strings, removes duplicates preserving first occurrence", () => {
  expect(dedupe(["a", "a", "a", "b", "b", "c"])).toEqual(["a", "b", "c"]);
});

test("given an array of numbers, removes duplicates preserving first occurrence", () => {
  expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
});
