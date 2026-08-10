const contains = require("./contains.js");

test("contains on empty object returns false", () => {
  expect(contains({}, "a")).toBe(false);
});

test("returns true when object has the property", () => {
  expect(contains({ a: 1, b: 2 }, "a")).toBe(true);
});

test("returns false when object does not have the property", () => {
  expect(contains({ a: 1, b: 2 }, "c")).toBe(false);
});

test("returns false for array input", () => {
  expect(contains([1, 2, 3], "0")).toBe(false);
});
