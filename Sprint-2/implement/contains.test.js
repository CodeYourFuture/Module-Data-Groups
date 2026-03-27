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

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
// const contains = require("./contains.js");

// Given an empty object
// When passed to contains
// Then it should return false
test("contains on empty object returns false", () => {
  expect(contains({}, "a")).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("contains with existing property returns true", () => {
  expect(contains({ a: 1, b: 2 }, "a")).toBe(true);
  expect(contains({ a: 1, b: 2 }, "b")).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("contains with non-existent property returns false", () => {
  expect(contains({ a: 1, b: 2 }, "c")).toBe(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("contains with invalid parameters returns false", () => {
  // Test with array
  expect(contains([1, 2, 3], "0")).toBe(false); // arrays are objects but we treat them as invalid for this use case
  expect(contains([1, 2, 3], "length")).toBe(false);

  // Test with null
  expect(contains(null, "a")).toBe(false);

  // Test with undefined
  expect(contains(undefined, "a")).toBe(false);

  // Test with string
  expect(contains("hello", "0")).toBe(false);

  // Test with number
  expect(contains(123, "toString")).toBe(false);
});
