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

it("contains an empty object, returns false", () => {
  expect(contains({}, "a")).toBe(false);
});


it("contains an object with existing property, returns true", () => {
  expect(contains({ a: 1, b: 2 }, "a")).toBe(true);
});


it("contains an object with non-existent property, returns false", () => {
  expect(contains({ a: 1, b: 2 }, "c")).toBe(false);
});


it("contains invalid parameters, returns false", () => {
  expect(contains(null, 42)).toBe(false);
});
