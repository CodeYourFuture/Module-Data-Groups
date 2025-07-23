

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
const contains = require("./contains.js");

// Test on empty object
test("contains on empty object returns false", () => {
  expect(contains({}, 'a')).toBe(false);
});

// Test with existing property
test("contains on object with existing property returns true", () => {
  expect(contains({a: 1, b: 2}, 'a')).toBe(true);
});

// Test with non-existent property
test("contains on object with non-existent property returns false", () => {
  expect(contains({a: 1, b: 2}, 'c')).toBe(false);
});

// Test with invalid parameter (array)
test("contains with array should return false", () => {
  expect(contains([], 'a')).toBe(false);
});

// Test with invalid parameter (not an object)
test("contains with non-object should return false", () => {
  expect(contains(42, 'a')).toBe(false); // Pass a number
});
