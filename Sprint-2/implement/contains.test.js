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
describe("contains", () => {
  test("contains on empty object return false", () => {
    expect(contains({}, "a")).toBe(false);
  });
});
// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("contains with an existing property name return true", () => {
    expect(contains({a: 1, b: 2}, "a")).toBe(true);
});
// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("contains with non-existing property name return false", () => {
  expect(contains({ a: 1, b: 2 }, "c")).toBe(false);
});
// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("contains with invalid input (array) return false", () => {
  expect(contains([1, 5, 7], "a")).toBe(false);
});