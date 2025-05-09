//const contains = require("./contains.js");

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
//test.todo("contains on empty object returns false");

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
 

//answer

const contains = require("./contains.js");

describe("contains", () => {
  test("contains on empty object returns false", () => {
    expect(contains({}, "a")).toBe(false);
  });

  test("returns true for an object containing the property", () => {
    const obj = { a: 1, b: 2 };
    expect(contains(obj, "a")).toBe(true);
    expect(contains(obj, "b")).toBe(true);
  });

  test("returns false for an object without the property", () => {
    const obj = { a: 1, b: 2 };
    expect(contains(obj, "c")).toBe(false);
  });

  test("returns false for invalid inputs like an array", () => {
    expect(contains([1, 2, 3], "a")).toBe(false);
    expect(contains(null, "a")).toBe(false);
    expect(contains(undefined, "a")).toBe(false);
    expect(contains("string", "a")).toBe(false);
  });

  test("handles nested objects correctly", () => {
    const obj = { a: { b: 2 }, c: 3 };
    expect(contains(obj, "a")).toBe(true); // "a" exists at the top level
    expect(contains(obj.a, "b")).toBe(true); // "b" exists in the nested object
    expect(contains(obj, "b")).toBe(false); // "b" doesn't exist at the top level
  });
});
