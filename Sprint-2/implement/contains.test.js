const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({a: 1, b: 2}, 'a') // returns true
as the object contains a key of 'a'

E.g. contains({a: 1, b: 2}, 'c') // returns false
as the object doesn't contains a key of 'c'
*/


test("contains a property in an object should return true or false", () => {
  expect(contains({ a: 1, b: 2 }, "a")).toBe(true);
  expect(contains({ a: 1, b: 2 }, "b")).toBe(true);
  expect(contains({ a: 1, b: 2 }, "c")).toBe(false);
});

// Given an empty object
// When passed to contains
// Then it should return false
test("contains an empty object should return false", () => {
  expect(contains({}, "a")).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true

test("contains an existing property in an object should return true", () => {
  expect(contains({ a: 1, b: 2 }, "a")).toBe(true);
  expect(contains({ a: 1, b: 2 }, "b")).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

test("contains a non-existent property in an object should return false", () => {
  expect(contains({ a: 1, b: 2 }, "c")).toBe(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("contains with invalid parameters should return false", () => {
  expect(contains(null, "a")).toBe(false);
  expect(contains(undefined, "a")).toBe(false);
  expect(contains([], "a")).toBe(false);
  expect(contains("string", "a")).toBe(false);
});