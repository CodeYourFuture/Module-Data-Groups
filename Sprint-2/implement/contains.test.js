const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({a: 1, b: 2}, 'a') // returns true
as the object contains a key of 'a'

E.g. contains({a: 1, b: 2}, 'c') // returns false
as the object doesn't contains a key of 'c'

E.g. contains([1, 2, 3], 'a') throws Error("contains requires an object")
as an array isn't an object
*/

// Acceptance criteria:

// Given a contains function
// When passed an object and a property name
// Then it should return true if the object contains the property, false otherwise
test("returns true when given an object and property name that contains property", () => {
  expect(contains({ a: 1, b: 2 }, "a")).toBe(true);
});

test("returns false when given an object and property name that doesn't contain the property", () => {
  expect(contains({ a: 1, b: 2 }, "c")).toBe(false);
});
// Given an empty object
// When passed to contains
// Then it should return false

test("returns false when given an empty object", () => {
  expect(contains({})).toBe(false);
});

// Given a value that isn't an object - an array, a string, a number,
// null, or no argument at all
// When passed to contains
// Then it should throw Error("contains requires an object")
// (careful: typeof [] and typeof null are both "object")
test("throws an error when given an array", () => {
  expect(() => contains([1, 2, 3], "a")).toThrow("contains requires an object");
});

test("throws an error when given a string", () => {
  expect(() => contains("hello", "a")).toThrow("contains requires an object");
});
test("throws an error when given a number", () => {
  expect(() => contains(42, "a")).toThrow("contains requires an object");
});
test("throws an error when given null", () => {
  expect(() => contains(null, "a")).toThrow("contains requires an object");
});
