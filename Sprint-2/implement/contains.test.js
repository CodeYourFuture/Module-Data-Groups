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
test("contains on empty object returns false", () =>
  expect(contains({}, "a")).toBe(false));

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("returns true when an object contains a property that matches the one passed to contains", () =>
  expect(contains({ area: "Manchester" }, "area")).toBe(true));

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("returns false when an object with properties is passed to contains with a non-existent property name", () =>
  expect(contains({ area: "Manchester" }, "town")).toBe(false));

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("should throw an error when when an invalid parameter like an array is passed to contains", () =>
  expect(() => contains([1, 4, 5], 0)).toThrow(
    "error invalid parameter please provide an object"
  ));
