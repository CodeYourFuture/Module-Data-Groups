const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({a: 1, b: 2}, 'a') // returns true
as the object contains a key of 'a'

E.g. contains({a: 1, b: 2}, 'c') // returns false
as the object doesn't contain a key of 'c'
*/

// Acceptance criteria:

// Given a contains function
// When passed an object and a property name
// Then it should return true if the object contains the property, false otherwise

// Returns true when the property exists
test("contains returns true if the property exists", () => {
  expect(contains({ a: 1, b: 2 }, "a")).toBe(true);
});

// Given an empty object
// When passed to contains
// Then it should return false

// An empty object has no properties
test("contains returns false for an empty object", () => {
  expect(contains({}, "a")).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true

// Finds a named property in a typical object
test("contains returns true for another property that exists", () => {
  expect(contains({ name: "Lisa", age: 73 }, "name")).toBe(true);
});

// Given an object with properties
// When passed to contains with a property name that does not exist
// Then it should return false

// Returns false for a missing property
test("contains returns false for a property that does not exist", () => {
  expect(contains({ name: "Leo", age: 19 }, "height")).toBe(false);
});

// Given an object
// When passed to contains with a property that does not exist
// Then it should return false

// Returns false for a property not in the object
test("contains returns false when the property is not present", () => {
  expect(contains({ a: 1, b: 2 }, "c")).toBe(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error

// Handles invalid inputs gracefully
test("contains handles invalid parameters", () => {
  expect(contains([], "a")).toBe(false);
  expect(contains(null, "a")).toBe(false);
  expect(contains(undefined, "a")).toBe(false);
});
