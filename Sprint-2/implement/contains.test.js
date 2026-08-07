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
test("contains on empty object returns false", () => {
  expect(contains({}, "a")).toEqual(false);
});

test("returns true when object has the property", () => {
  expect(contains({ a: 1, b: 2 }, "a")).toEqual(true);
});

test("returns false when object does not have the property", () => {
  expect(contains({ a: 1, b: 2 }, "c")).toEqual(false);
});

test("returns false when passed an array", () => {
  expect(contains([1, 2, 3], "0")).toEqual(false);
});
