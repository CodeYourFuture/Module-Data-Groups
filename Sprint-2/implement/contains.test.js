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
//Case 1
test(" Case 1: returns true when the property exists", () => {
  expect(contains({ a: 1, b: 2 }, "a")).toBe(true);
});

test("Case 2: returns false when the property does not exist", () => {
  expect(contains({ a: 1, b: 2 }, "c")).toBe(false);
});
// Given an empty object
// When passed to contains
// Then it should return false
test("contains on empty object returns false", () => {
  expect(contains({ }, "c")).toBe(false);});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test(" Case 1: returns true when the property exists", () => {
  expect(contains({ a: 1, b: 2 }, "a")).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("Case 2: returns false when the property does not exist", () => {
  expect(contains({ a: 1, b: 2 }, "c")).toBe(false);
});
// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
