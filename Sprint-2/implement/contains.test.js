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
test.todo("contains on empty object returns false");

// Empty object return false
test("contains on empty object returns false", () => {
    const result = contains({}, "a");
    expect(result).toBe(false); });
// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true

// Object with properties and existing key should return true
test("contains returns true for existing property", () => {
  const obj = { a: 1, b: 2 };
  const result = contains(obj, "a");
  expect(result).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("contains returns false for non-existing property", () => {
  const obj = { a: 1, b: 2 };
  const result = contains(obj, "c");
  expect(result).toBe(false);
});
// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("contains returns false or throws when input is not an object", () => {
    const obj = ["a", "b"];
     expect(() => contains(["a", "b"], "a")).toThrow(); });