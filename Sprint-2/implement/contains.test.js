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
test("given an object with property, should return true if contains the property otherwise false", () => {
  expect(contains({ a: 1, b: 2 }, "a")).toBe(true);
  expect(contains({ a: 1, b: 2 }, "c")).toBe(false);
});

// Given an empty object
// When passed to contains
// Then it should return false
test("contains on empty object returns false", () => {
  expect(contains({})).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("given an object with property, should return true if contains the property", () => {
  expect(
    contains({ firstName: "Chris", surname: "Marin", age: 21 }, "firstName")
  ).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("given an object with property, should return false if  does not contains the property", () => {
  expect(
    contains({ firstName: "Chris", surname: "Marin", age: 21 }, "job")
  ).toBe(false);
});
// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error

test("given an array, should return false", () => {
  expect(contains([1, 2, 3], "a")).toBe(false);
});
