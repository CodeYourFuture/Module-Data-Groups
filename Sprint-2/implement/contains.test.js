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
describe("contains function", () => {
  test("should return true if the object contains the property", () => {
    const obj = { a: 1, b: 2 };
    expect(contains(obj, "a")).toBe(true);
  });
  test("should return false if the object does not contain the property", () => {
    const obj = { a: 1, b: 2 };
    expect(contains(obj, "c")).toBe(false);
  });

  // Given an empty object
  // When passed to contains
  // Then it should return false
  test("should return false if contains is empty object ", () => {
    const obj = { a: 1, b: 2 };
    expect(contains({}, "a")).toBe(false);
  });

  // Given an object with properties
  // When passed to contains with an existing property name
  // Then it should return true
  test(" Should return true if contains objects with existing property name ", () => {
    const obj = { a: 1, b: 2 };
    expect(contains({ a: 1, b: 2 }, "a")).toBe(true);
  });

  // Given an object with properties
  // When passed to contains with a non-existent property name
  // Then it should return false
  test("should return false contains on object with a non-existent property", () => {
    expect(contains({ a: 1, b: 2 }, "c")).toBe(false);
  });

  // Given invalid parameters like an array
  // When passed to contains
  // Then it should return false or throw an error
  test("should return false contains on an array", () => {
    expect(contains([1, 2, 3], "a")).toBe(false);
  });
});
