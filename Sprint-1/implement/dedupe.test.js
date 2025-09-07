const dedupe = require("./dedupe.js");

test("given an empty array, it returns an empty array", () => {
  expect(dedupe([])).toEqual([]);
});

test("given an array with no duplicates, returns the same array", () => {
  expect(dedupe([1, 2, 3])).toEqual([1, 2, 3]);
  expect(dedupe(["a", "b", "c"])).toEqual(["a", "b", "c"]);
});

test("given an array with duplicates, removes duplicates preserving first occurrence", () => {
  expect(dedupe(["a", "a", "a", "b", "b", "c"])).toEqual(["a", "b", "c"]);
  expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
  expect(dedupe([1, 2, 1])).toEqual([1, 2]);
});
