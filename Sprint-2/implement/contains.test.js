const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({a: 1, b: 2}, 'a') // returns true
as the object contains a key of 'a'

E.g. contains({a: 1, b: 2}, 'c') // returns false
as the object doesn't contains a key of 'c'
*/

// Given a contains function
// When passed an object and a property name
// Then it should return true if the object contains the property, false otherwise
test("Should return true if the object contains the property", () => {
  expect(contains({ a: 1, b: 2 }, "a")).toBe(true);
});

test("Should return false if the object doesn't contain the property", () => {
  expect(contains({ a: 1, b: 2 }, "c")).toBe(false);
});

// Given an empty object
// When passed to contains
// Then it should return false
test("Should return false for an empty object", () => {
  expect(contains({}, "b")).toBe(false);
});

// Given an object with properties
// When passed to contains with an invalid property type
// Then it should return false
test("Should return false when passed with an invalid property", () => {
  expect(contains({ g: 7, h: 8, i: 9 }, [])).toBe(false);
});

// Given an array as the input
// When passed to contains with a valid key
// Then it should return false, since arrays are not valid objects in this context
test("Should return false when passed an array as the object", () => {
  expect(contains(["A", "B"], "0")).toBe(false);
});

// Given null as the input
// When passed to contains
// Then it should return false
test("Should return false when passed null", () => {
  expect(contains(null, "0")).toBe(false);
});

// Given undefined as the input
// When passed to contains
// Then it should return false
test("Should return false when passed undefined", () => {
  expect(contains(undefined, "0")).toBe(false);
});


