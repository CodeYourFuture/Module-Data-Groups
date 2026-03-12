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
test("contains returns true for existing property", () => {
  const obj = { a: 1, b: 2 };
  expect(contains(obj, "a")).toBe(true);
  expect(contains(obj, "b")).toBe(true);
  expect(contains(obj, "c")).toBe(false);
});

// Given an empty object
// When passed to contains
// Then it should return false
test("contains on empty object returns false", () => {
  const emptyObj = {};
  expect(contains(emptyObj, "a")).toBe(false);
  expect(contains(emptyObj, "b")).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("contains returns true for existing property", () => {
  const obj2 = { x: 10, y: 20 };
  expect(contains(obj2, "x")).toBe(true);
  expect(contains(obj2, "y")).toBe(true);
  expect(contains(obj2, "z")).toBe(false);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("contains returns false for non-existent property", () => {
  const obj3 = { name: "Alice", age: 30 };
  expect(contains(obj3, "name")).toBe(true);
  expect(contains(obj3, "age")).toBe(true);
  expect(contains(obj3, "gender")).toBe(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("contains returns false for invalid input types", () => {
  const arr = [1, 2, 3];
  expect(contains(arr, "0")).toBe(false); // Arrays do not have properties like objects, so it should return false
  expect(contains(null, "a")).toBe(false); // null is not an object, so it should return false
  expect(contains(undefined, "a")).toBe(false); // undefined is not an object, so it should return false
});   