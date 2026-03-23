// Refactored version of includes should still pass the tests below:

const includes = require("./includes.js");

test("Return true if the array contains the elements desired", () => {
  expect(includes(["a", "b", "c", "d"], "c")).toBe(true);
})

test("returns false when target not in array", () => {
  expect(includes([1, 2, 3, 4], "a")).toBe(false);
});

test("returns true when the target is in array multiple times", () => {
  expect(includes([1, 2, 2, 3], 2)).toBe(true);
});

test("returns false for empty array", () => {
  expect(includes([], "a")).toBe(false);
});

test("should find null when it exists in the array", () => {
  expect(includes(["b", "z", null, "a"], null)).toBe(true);
});