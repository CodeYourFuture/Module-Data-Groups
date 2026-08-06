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
test("contains on an object with property returns true", function () {
  expect(contains({ a: 1, b: 2 }, "a")).toBe(true);
});
test("contains on an object without property returns false", function () {
  expect(contains({ a: 1, b: 2 }, "d")).toBe(false);
});

// Given an empty object
// When passed to contains
// Then it should return false
test("contains on empty object returns false", function () {
  expect(contains({}, "a")).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("contain on object with properties", function () {
  expect(contains({ c: 4, d: 5 }, "c")).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("contains on object with non-existent property name returns false", function () {
  expect(contains({ c: 4, d: 5 }, "x")).toBe(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("contain on invalid parameters returns false", function () {
  expect(contains([], "0")).toBe(false);
});

// Given an object with properties
// When passed to contains with a non-existent property name "0"
// Then it should return false
test("contain on with non-existent property returns false", function () {
  expect(contains(["a", "b", "c"], "0")).toBe(false);
});