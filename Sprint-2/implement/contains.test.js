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
// test.todo("contains on empty object returns false");

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error



describe("contains function", () => {
  // Test: empty object
  test("should return false when passed an empty object", () => {
    expect(contains({}, "a")).toBe(false);
  });

  // Test: object with properties and existing key
  test("should return true when the object contains the specified property", () => {
    expect(contains({ a: 1, b: 2 }, "a")).toBe(true);
  });

  // Test: object with properties and non-existing key
  test("should return false when the object does not contain the specified property", () => {
    expect(contains({ a: 1, b: 2 }, "c")).toBe(false);
  });

  // Test: invalid parameters (array as first argument)
  test("should throw an error when the first argument is an array", () => {
    expect(() => contains([1, 2, 3], "1")).toThrow("Invalid input: first argument must be an object");
  });

  // Test: invalid parameters (null as first argument)
  test("should throw an error when the first argument is null", () => {
    expect(() => contains(null, "a")).toThrow("Invalid input: first argument must be an object");
  });

  // Test: invalid parameters (non-object first argument)
  test("should throw an error when the first argument is not an object", () => {
    expect(() => contains(42, "key")).toThrow("Invalid input: first argument must be an object");
  });
});
