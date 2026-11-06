const contains = require("./contains.js");

test("contains on empty object returns false", () => {
  expect(contains({}, "a")).toBe(false);
});

test("contains an object with existing property, return true", () => {
  expect(contains({ a: 1, b: 2 }, "a")).toBe(true);
});

test("contains an object with missing property, return false", () => {
  expect(contains({ a: 1, b: 2 }, "c")).toBe(false);
});

test("contains throws for an array", () => {
  expect(() => contains([1, 2, 3], "a")).toThrow("contains requires an object");
});
