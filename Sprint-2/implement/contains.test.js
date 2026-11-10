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

// Given an empty object
// When passed to contains
// Then it should return false
test.todo("contains on empty object returns false");
test("contains on empty object returns false", () => {
  expect(contains({}, "name")).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("contains on an object with an existing property return ture", () => {
  expect(contains({ name: "Cat", age: 10 }, "name")).toBe(true);
});
// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("contains on an object with a non-existent property return false", () => {
  expect(contains({ name: "Ramesh", age: 23 }, "location")).toBe(false);
});

// Given a value that isn't an object - an array, a string, a number,
// null, or no argument at all
// When passed to contains
// Then it should throw Error("contains requires an object")
// (careful: typeof [] and typeof null are both "object")
test("contains throws an error for a string", () => {
  expect(() => contains("India", "0")).toThrow("contains requires an object");
});
test("contains throws an error for an array", () => {
  expect(() => contains([1, 2, 3], "0")).toThrow("contains requires an object");
});
test("contains throws an error for null", () => {
  expect(() => contains(null, "name")).toThrow("contains requires an object");
});

test("contains throws an error when no argument is given", () => {
  expect(() => contains()).toThrow("contains requires an object");
});
test("contains throws an error for a number", () => {
  expect(() => contains(100, "name")).toThrow("contains requires an object");
});
