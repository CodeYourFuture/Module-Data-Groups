const contains = require("./contains.js");

test("contains on empty object returns false", () => {
  expect(contains({}, "anyKey")).toBe(false);
});

test("contains returns true for existing property", () => {
  const obj = { a: 1, b: 2 };
  expect(contains(obj, "a")).toBe(true);
  expect(contains(obj, "b")).toBe(true);
});

test("contains returns false for non-existent property", () => {
  const obj = { a: 1, b: 2 };
  expect(contains(obj, "c")).toBe(false);
  expect(contains(obj, "z")).toBe(false);
});

test("contains returns false or throws for invalid parameters", () => {
  expect(() => contains([], "a")).not.toThrow();
  expect(contains([], "a")).toBe(false);
  expect(() => contains(null, "a")).not.toThrow();
  expect(contains(null, "a")).toBe(false);
  expect(() => contains(undefined, "a")).not.toThrow();
  expect(contains(undefined, "a")).toBe(false);
  expect(() => contains(123, "a")).not.toThrow();
  expect(contains(123, "a")).toBe(false);
});

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

// Given an empty object
// When passed to contains
// Then it should return false
// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
