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

test("contains function returns true if the object contains the property or false otherwise", () => {
  const obj = { a: 1, b: 2 };
  expect(contains(obj, "a")).toBe(true);
  expect(contains(obj, "c")).toBe(false);
});

// Given an empty object
// When passed to contains
// Then it should return false

test("contains on empty object returns false", () => {
  const obj = {};
  expect(contains(obj, "a")).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true

test("contains on object with existing property returns true", () => {
  const obj = { a: 1, b: 2 };
  expect(contains(obj, "a")).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

test("contains on object with non-existent property returns false", () => {
  const obj = { a: 1, b: 2 };
  expect(contains(obj, "c")).toBe(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error

test("contains on invalid parameters like an array returns false or throws an error", () => {
  const arr = [1, 2, 3];
  expect(contains(arr, "a")).toBe(false);
});

test("contains on key named 'length' returns true", () => {
  const arr = [1, 2, 3];
  expect(contains(arr, "length")).toBe(true);
});
