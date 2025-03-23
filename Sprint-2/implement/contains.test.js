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
describe("contains function", () => {
  // Given a contains function
  // When passed an object and a property name
  // Then it should return true if the object contains the property, false otherwise
  test("returns true for existing property", () => {
    const obj = { a: 1, b: 2 };
    expect(contains(obj, "a")).toBe(true);
    expect(contains(obj, "b")).toBe(true);
  });

  test("returns false for non-existent property", () => {
    const obj = { a: 1, b: 2 };
    expect(contains(obj, "c")).toBe(false);
  });

  // Given an empty object
  // When passed to contains
  // Then it should return false
  test("contains on empty object returns false", () => {
    const emptyObj = {};
    expect(contains(emptyObj, "anyProperty")).toBe(false);
  });

  // Given an object with properties
  // When passed to contains with an existing property name
  // Then it should return true
  test("returns true for existing property in object with multiple properties", () => {
    const obj = { name: "John", age: 30, city: "New York" };
    expect(contains(obj, "age")).toBe(true);
  });

  // Given an object with properties
  // When passed to contains with a non-existent property name
  // Then it should return false
  test("returns false for non-existent property in object with multiple properties", () => {
    const obj = { name: "John", age: 30, city: "New York" };
    expect(contains(obj, "country")).toBe(false);
  });

  // Given invalid parameters like an array
  // When passed to contains
  // Then it should return false or throw an error
  test("returns false for array instead of object", () => {
    const arr = [1, 2, 3];
    expect(contains(arr, "length")).toBe(false);
  });

  test("returns false for null or undefined", () => {
    expect(contains(null, "property")).toBe(false);
    expect(contains(undefined, "property")).toBe(false);
  });
});
