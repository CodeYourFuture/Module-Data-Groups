const contains = require("./contains.js");

// Given an empty object
// When passed to contains
// Then it should return false
test("contains on empty object returns false", () => {
  expect(contains({}, "a")).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("returns true when object contains the property", () => {
  const obj = { a: 1, b: 2 };
  expect(contains(obj, "a")).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("returns false when object does not contain the property", () => {
  const obj = { a: 1, b: 2 };
  expect(contains(obj, "c")).toBe(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false
test("returns false when passed invalid parameters like an array", () => {
  expect(contains([1, 2, 3], "a")).toBe(false);
});