const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({a: 1, b: 2}, 'a') // returns true
as the object contains a key of 'a'

E.g. contains({a: 1, b: 2}, 'c') // returns false
as the object doesn't contains a key of 'c'
*/

// Acceptance criteria:

// Given a contains function
// When passed an object and a property name
// Then it should return true if the object contains the property, false otherwise
test("returns true when the property exists in the object", () => {
  expect(contains({ a: 1, b: 2 }, "a")).toBe(true);
  expect(contains({ a: 1, b: 2 }, "b")).toBe(true);
});

// Given an empty object
// When passed to contains
// Then it should return false
test("contains on empty object returns false", () => {
  expect(contains({}, "a")).toBe(false);
  expect(contains({}, "toString")).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("returns true for existing property name", () => {
  expect(contains({ name: "Alex" }, "name")).toBe(true);
  expect(contains({ id: 42 }, "id")).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("returns false for non-existent property name", () => {
  expect(contains({ name: "Alex", age: 42 }, "email")).toBe(false);
  expect(contains({ age: 54 }, "name")).toBe(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("handles invalid parameters like an array", () => {
  expect(contains([], "length")).toBe(false);
  expect(contains(123, "length")).toBe(false);
  expect(contains("string", "length")).toBe(false);
});
