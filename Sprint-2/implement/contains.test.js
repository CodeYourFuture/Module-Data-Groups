const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a particular property
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
  currentOutput = contains({}, "a");
  expect(currentOutput).toEqual(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("contains property with an existing object returns true", () => {
  currentOutput = contains({ a: 1, b: 2 }, "a");
  expect(currentOutput).toEqual(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("contains property with non-existing object returns false", () => {
  currentOutput = contains({ a: 1, b: 2 }, "c");
  expect(currentOutput).toEqual(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("contains property with invalid parameters returns false", () => {
  currentOutput = contains([], "c");
  expect(currentOutput).toEqual("Error");
});
