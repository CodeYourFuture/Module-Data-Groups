const includes = require("./includes.js");

test("returns true when target is in array", () => {
  expect(includes(["a", "b", "c", "d"], "c")).toEqual(true);
});

test("returns false when target not in array", () => {
  expect(includes([1, 2, 3, 4], "a")).toEqual(false);
});

test("returns true when the target is in array multiple times", () => {
  expect(includes([1, 2, 2, 3], 2)).toEqual(true);
});

test("returns false for empty array", () => {
  expect(includes([], "a")).toEqual(false); // ✅ FIXED
});

test("searches for null", () => {
  expect(includes(["b", "z", null, "a"], null)).toEqual(true);
});