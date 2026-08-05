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

// Given an empty object
// When passed to contains
// Then it should return false
test("returns false for an empty object", () => {
  expect(contains({}, "a")).toEqual(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("returns true when the property exists", () => {
  expect(contains({ a: 1, b: 2 }, "a")).toEqual(true);
  expect(contains({ a: 1, b: 2 }, "b")).toEqual(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("returns false when the property does not exist", () => {
  expect(contains({ a: 1, b: 2 }, "c")).toEqual(false);
});

// Given an object with several properties
// When checking another existing property
// Then it should return true
test("returns true for another existing property", () => {
  expect(contains({ name: "Alice", age: 25 }, "age")).toEqual(true);
});

// Given an array
// When passed to contains
// Then it should return false
test("returns false when given an array", () => {
  expect(contains([1, 2, 3], "0")).toEqual(false);
});

// Given a null value
// When passed to contains
// Then it should return false
test("returns false when given null", () => {
  expect(contains(null, "a")).toEqual(false);
});

// Given an undefined value
// When passed to contains
// Then it should return false
test("returns false when given undefined", () => {
  expect(contains(undefined, "a")).toEqual(false);
});
