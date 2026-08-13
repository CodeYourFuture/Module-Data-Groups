const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({a: 1, b: 2}, 'a') // returns true
as the object contains a key of 'a'

E.g. contains({a: 1, b: 2}, 'c') // returns false
as the object doesn't contains a key of 'c'
*/
console.log("THIS IS THE REAL contains.js FILE");

// Acceptance criteria:

// Given a contains function
// When passed an object and a property name
// Then it should return true if the object contains the property, false otherwise
test("contains both existent and non-existent properties, returns true if existent or false if otherwise", () => {
  expect(contains({ z: 2, e: 5 }, "a")).toBe(false);
  expect(contains({ y: 6, x: 3, s: 5 }, "s")).toBe(true);
});

// Given an empty object
// When passed to contains
// Then it should return false
test("returns false for an empty object", () => {
  expect(contains({}, "a")).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("returns true when object contains the property", () => {
  expect(contains({ a: 1, b: 3 }, "a")).toBe(true);
});
// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("returns false when object does not contain the property", () => {
  expect(contains({ w: 1, x: 8 }, "r")).toBe(false);
});
// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("returns false for invalid parameters like an array", () => {
  expect(contains([], "a")).toBe(false);
});
