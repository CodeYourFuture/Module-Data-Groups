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

test("when passed an object and a property name, should return true", () => {
  expect(contains({ name: "Bart" }, "name")).toBe(true);
});

// Given an empty object
// When passed to contains
// Then it should return false
test("when passed empty object to contains returns false", () => {
  expect(contains({}, "name")).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("when passed to contains with an existing property name, should return true", () => {
  expect(contains({ name: "Bart", age: 28 }, "age")).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("when passed to contains with a non-existing property name, should return false", () => {
  expect(contains({ name: "Bart" }, "city")).toBe(false);
});

// Given a value that isn't an object - an array, a string, a number,
// null, or no argument at all
// When passed to contains
// Then it should throw Error("contains requires an object")
// (careful: typeof [] and typeof null are both "object")

test("throws an error when passed not an object", () => {
  expect(() => contains(33)).toThrow(/^contains requires an object$/);
  expect(() => contains("string")).toThrow(/^contains requires an object$/);
  expect(() => contains(["an array", "with", "some", "data"])).toThrow(
    /^contains requires an object$/
  );
  expect(() => contains(null)).toThrow(/^contains requires an object$/);
  expect(() => contains()).toThrow(/^contains requires an object$/);
});
