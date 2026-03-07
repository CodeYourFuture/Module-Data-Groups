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
test("given an empty object, should return false", () => {
  expect(contains({}, "a")).toEqual(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("given an object with a property, and property name that exists, should return true", () => {
  expect(contains({ a: 12, b: 2 }, "a")).toEqual(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("given an object, and property that does not exist in object, should return false", () => {
  expect(contains({ a: 12, b: 2 }, "c")).toEqual(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("given invalid parameter, like an array, should return false or throw error", () => {
  expect(() => contains(22, "a")).toThrow(TypeError);
  expect(() => contains([], "a")).toThrow(TypeError);
});
