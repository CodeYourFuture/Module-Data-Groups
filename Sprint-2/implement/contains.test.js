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
  expect(contains({}, "a")).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("contains on object with existing property returns true", () => {
  expect(contains({ a: 1, b: 2 }, "a")).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("contains on object with non-existent property returns false", () => {
  expect(contains({ a: 1, b: 2 }, "c")).toBe(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("contains on invalid parameters returns false", () => {
  expect(contains([], "a")).toBe(false);
});

// === NEW TESTS ADDED BELOW ===

// Test for inherited properties (should return false)
test("contains should return false for inherited properties", () => {
  expect(contains({a: 1, b: 2}, 'toString')).toBe(false);
});

// Test with arrays (should work properly)
test("contains should work with arrays", () => {
  expect(contains(['a', 'b', 'c'], '0')).toBe(true);
  expect(contains(['a', 'b', 'c'], '1')).toBe(true); 
  expect(contains(['a', 'b', 'c'], 'length')).toBe(false);
});

// Test with array as object
test("contains should handle arrays correctly", () => {
  const arr = ['x', 'y', 'z'];
  expect(contains(arr, '0')).toBe(true);
  expect(contains(arr, '2')).toBe(true);
  expect(contains(arr, '3')).toBe(false);
});