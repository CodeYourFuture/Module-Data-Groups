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
describe("contains", () => {
  test("return false when passed an empty object", () => {
    expect(contains({}, "a")).toEqual(false);
  });

  // Given an object with properties
  // When passed to contains with an existing property name
  // Then it should return true
  test("return true when passed an object with an existing property name", () => {
    expect(contains({ a: 1, b: 2 }, "a")).toEqual(true);
    expect(contains({ apple: 1, banana: 2 }, "banana")).toEqual(true);
  });

  // Given an object with properties
  // When passed to contains with a non-existent property name
  // Then it should return false
  test("return false when passed an object with a non-existent property name", () => {
    expect(contains({ a: 1, b: 2 }, "c")).toEqual(false);
    expect(contains({ apple: 1, banana: 2 }, "orange")).toEqual(false);
  });

  // Given invalid parameters like an array
  // When passed to contains
  // Then it should return false or throw an error
  test("return false when passed invalid parameters like an array", () => {
    expect(contains([], "a")).toEqual(false);
    expect(contains(null, "a")).toEqual(false);
    expect(contains(undefined, "a")).toEqual(false);
  });
});
