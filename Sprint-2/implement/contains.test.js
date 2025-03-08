const contains = require("./contains.js");

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("contains non-existent property name returns false", () => {
  expect(contains({ c: 5, y: 8 }, "a")).toEqual(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("contains invalid parameters like an array returns false", () => {
  expect(contains(["f", "a", 7, "j", 4], "a")).toEqual(false);
});

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
  expect(contains({})).toEqual(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("contains an object and property name returns true", () => {
  expect(contains({ b: 7, j: 2 }, "b")).toEqual(true);
});
