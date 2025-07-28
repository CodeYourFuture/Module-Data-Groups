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
describe("contains", () => {
  test("returns true if object contains the property", () => {
    const obj = { a: 1, b: 2 };
    expect(contains(obj, "a")).toBe(true);
    expect(contains(obj, "b")).toBe(true);
  });
});
// Given an empty object
// When passed to contains
// Then it should return false
test("contains on empty object returns false", () => {
  const obj = {};
  expect(contains(obj, "anyKey")).toBe(false);
  expect(contains(obj, "")).toBe(false);
  expect(contains(obj, "toString")).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("returns true for existing property in object", () => {
  const obj = { name: "Alice", age: 30 };
  expect(contains(obj, "name")).toBe(true);
  expect(contains(obj, "age")).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("returns false for non-existent property in object", () => {
  const obj = { name: "Alice" };
  expect(contains(obj, "gender")).toBe(false);
});
// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("returns false when passed an array instead of object", () => {
  const arr = ["a", "b"];
  expect(contains(arr, "0")).toBe(false);
  expect(contains(arr, "length")).toBe(false);
});
