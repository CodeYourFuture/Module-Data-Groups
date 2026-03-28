const contains = require("./contains.js");

// Given an empty object
// When passed to contains with any key
// Then it should return false
test("returns false for an empty object", () => {
  expect(contains({}, "a")).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("returns true for an existing property", () => {
  expect(contains({ a: 1, b: 2 }, "a")).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("returns false for a non-existent property", () => {
  expect(contains({ a: 1, b: 2 }, "c")).toBe(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("returns false for an array", () => {
  expect(contains([1, 2, 3], 0)).toBe(false);
});

// Given invalid parameters like null
// When passed to contains
// Then it should return false or throw an error
test("returns false for null", () => {
  expect(contains(null, "a")).toBe(false);
});
