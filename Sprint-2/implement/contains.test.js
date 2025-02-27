const contains = require("./contains.js");
describe('testing my function(contains)', () => {
  test("contains on empty object returns false", () => {
    expect(contains({}, "x")).toBe(false);
  });

  test("given an object with property, if property exist return true", () => {
    expect(contains({ a: 1, b: 2 }, "a")).toBe(true);
  });

  test("given an object with property and passed with non existent property name returns false", () => {
    expect(contains({ a: 1, b: 2 }, "x")).toBe(false);
  });

  test("given invalid parameters it return false or throw an error", () => {
    expect(contains([1,2], "x")).toBe(false);
  });

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


// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
