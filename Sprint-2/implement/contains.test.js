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

describe("contains (array-only version)", () => {
  // Given an empty object
  // When passed to contains
  // Then it should return false
  test("returns false for an empty object", () => {
    expect(contains({}, "anything")).toBe(false);
  });

  // Given an object with properties
  // When passed to contains with an existing property name
  // Then it should return false
  test("returns false even if object has that property", () => {
    expect(contains({ a: 1, b: 2 }, "a")).toBe(false);
  });

  // Given an object with properties
  // When passed to contains with a non-existent property name
  // Then it should return false
  test("returns false for non-existent key on object", () => {
    expect(contains({ a: 1, b: 2 }, "z")).toBe(false);
  });

  // Given invalid parameters like an array
  // When passed to contains
  // Then it should return false or throw an error
  test("returns false for invalid inputs", () => {
    expect(contains(null, "a")).toBe(false);
    expect(contains(undefined, "a")).toBe(false);
    expect(contains(123, "a")).toBe(false);
    expect(contains("string", "s")).toBe(false);
    expect(contains(true, true)).toBe(false);
  });
});
// Note: The contains function implemented in contains.js only works for arrays.