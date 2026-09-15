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
test("contains on empty object returns false", () => {
  expect(contains({}, "a")).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("contains returns true for an existing property", () => {
  const obj = { a: 1, b: 2 };
  expect(contains(obj, "a")).toBe(true);
  expect(contains(obj, "b")).toBe(true);
});

test("contains returns true when the property exists but its value is falsy", () => {
  expect(contains({ a: undefined }, "a")).toBe(true);
  expect(contains({ a: null }, "a")).toBe(true);
  expect(contains({ a: 0 }, "a")).toBe(true);
  expect(contains({ a: false }, "a")).toBe(true);
  expect(contains({ a: "" }, "a")).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("contains returns false for a non-existent property", () => {
  expect(contains({ a: 1, b: 2 }, "c")).toBe(false);
});

test("contains ignores properties inherited from Object.prototype", () => {
  expect(contains({}, "toString")).toBe(false);
  expect(contains({ a: 1 }, "hasOwnProperty")).toBe(false);
});

// Given a value that isn't an object - an array, a string, a number,
// null, or no argument at all
// When passed to contains
// Then it should throw Error("contains requires an object")
// (careful: typeof [] and typeof null are both "object")
test.each([
  ["an array", [1, 2, 3]],
  ["a string", "abc"],
  ["a number", 42],
  ["null", null],
])("contains throws when given %s", (_label, input) => {
  expect(() => contains(input, "a")).toThrow(
    new Error("contains requires an object")
  );
});

test("contains throws when called with no arguments", () => {
  expect(() => contains()).toThrow(new Error("contains requires an object"));
});
