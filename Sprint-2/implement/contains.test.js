const contains = require("./contains.js");

// Given an empty object
// When passed to contains
// Then it should return false
test("contains on empty object returns false", () => {
  expect(contains({}, "key")).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("returns true for existing property", () => {
  expect(contains({ name: "Alice", age: 30 }, "name")).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("returns false for non-existent property", () => {
  expect(contains({ name: "Alice", age: 30 }, "email")).toBe(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("returns false for array instead of object", () => {
  expect(contains(["a", "b", "c"], "a")).toBe(false);
});

test("returns false for null input", () => {
  expect(contains(null, "key")).toBe(false);
});

test("returns false for undefined input", () => {
  expect(contains(undefined, "key")).toBe(false);
});
