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
test.todo("contains on empty object returns false");
// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error

const contains = require("./contains");
describe("contains function", () => {
  // Test for an empty object
  test("returns false for an empty object", () => {
    expect(contains({}, "a")).toBe(false);
  });

  // Test for an object containing the key
  test("returns true if the object contains the key", () => {
    const obj = { a: 1, b: 2 };
    expect(contains(obj, "a")).toBe(true);
    expect(contains(obj, "b")).toBe(true);
  });

  // Test for an object not containing the key
  test("returns false if the object does not contain the key", () => {
    const obj = { a: 1, b: 2 };
    expect(contains(obj, "c")).toBe(false);
  });

  // Test for invalid inputs
  test("returns false for invalid inputs", () => {
    expect(contains(null, "a")).toBe(false);
    expect(contains(undefined, "a")).toBe(false);
    expect(contains(42, "a")).toBe(false);
    expect(contains("string", "a")).toBe(false);
    expect(contains([], "a")).toBe(false);
  });

  // Test for unusual keys
  test("handles edge cases with unusual keys", () => {
    const obj = { "": 1, "!@#$%": 2 };
    expect(contains(obj, "")).toBe(true);
    expect(contains(obj, "!@#$%")).toBe(true);
    expect(contains(obj, "nonexistent")).toBe(false);
  });
});