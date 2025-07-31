const contains = require("./contains");

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
  test("the function should return true if the object contains the property", () => {
    expect(contains({ a: 1, b: 2 }, "b")).toBe(true);
  });
  test("the function return false if the object does not contain the property", () => {
    expect(contains({ a: 1, b: 2 }, "c")).toBe(false);
  });

  // Given an empty object
  // When passed to contains
  // Then it should return false
  test("contains an empty object returns false, it should return false", () => {
    expect(contains({}, "a")).toBe(false);
  });

  // Given an object with properties
  // When passed to contains with an existing property name
  // Then it should return true
  test("given an object with properties when passed to contains with existing properties, it should return as true", () => {
    expect(contains({ Age: 50, lastName: "Smith" }, "lastName")).toBe(true);
  });

  // Given an object with properties
  // When passed to contains with a non-existent property name
  // Then it should return false

  test("given an object with properties when passed to contains with non-existent property name it should return false", () => {
    expect(contains({ Age: 50, lastName: "Smith" }, "Hobby")).toBe(false);
  });

  // Given invalid parameters like an array
  // When passed to contains
  // Then it should return false or throw an error
  test("invalid parameters like an array should return false or return error", () => {
    expect(contains(["a", "b", "c"], "a")).toBe(false);
  });

  test("return false for null input", () => {
    expect(contains(null, "b")).toBe(false);
  });
});
