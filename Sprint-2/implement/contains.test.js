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

describe("contains()", () => {
// Given an empty object
// When passed to contains
// Then it should return false
  test("contains on empty object returns false", () => {
    expect(contains({}, "a")).toBe(false);
  });

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("returns true when object contains an existing property name", () => {const obj = { a: 1, b: 2 };
    expect(contains(obj, "a")).toBe(true);
  });

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("returns false when object does not contain the property name", () => {
    const obj = { a: 1, b: 2 };
    expect(contains(obj, "c")).toBe(false);
  });

// Given a value that isn't an object - an array, a string, a number,
// null, or no argument at all
// When passed to contains
// Then it should throw Error("contains requires an object")
// (careful: typeof [] and typeof null are both "object")
test("throws an error when passed an array", () => {
    expect(() => contains([1, 2, 3], "a")).toThrow("contains requires an object");
  });

  test("throws an error when passed a string", () => {
    expect(() => contains("hello", "a")).toThrow("contains requires an object");
  });

  test("throws an error when passed a number", () => {
    expect(() => contains(42, "a")).toThrow("contains requires an object");
  });

  test("throws an error when passed null", () => {
    expect(() => contains(null, "a")).toThrow("contains requires an object");
  });

  test("throws an error when passed no arguments", () => {
    expect(() => contains()).toThrow("contains requires an object");
  });
})









