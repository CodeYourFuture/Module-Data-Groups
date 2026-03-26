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
test("contains an empty object returns false", () => {
  expect(contains({}, "ball")).toEqual(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("contains an object with properties, returns true", () => {
  expect(contains({ foot: "ball" }, "foot")).toEqual(true);
});
// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("should return false when the object does not contain the property", () => {
  expect(contains({ foot: "ball" }, "basket")).toEqual(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("should return false when input is not an object", () => {
  expect(contains([], "a")).toEqual(false);
});

test("should throw an error when input is an array even if propertyName is a valid key", () => {
  expect(contains(["x", "y"], "0")).toEqual(false);
});
