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
  const emptyObject = {};
  expect(contains(emptyObject, "a")).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("contains on an object with properties, passed an existing property name, returns true", () => {
  const obj = { a: 1, b: 2 };
  expect(contains(obj, "a")).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("contains on an object properties, passed a non-existing property name, returns false", () => {
  const obj = { a: 1, b: 2 };
  expect(contains(obj, "c")).toBe(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("Given invalid parameters returns an error", () => {
  const errorMessage = "Input should be an object";
  expect(() => contains([{ a: 1 }, { b: 2 }], "a")).toThrow(errorMessage);
  expect(() => contains(null, "a")).toThrow(errorMessage);
  expect(() => contains(undefined, "a")).toThrow(errorMessage);
  expect(() => contains(true, "a")).toThrow(errorMessage);
  expect(() => contains(false, "a")).toThrow(errorMessage);
});
