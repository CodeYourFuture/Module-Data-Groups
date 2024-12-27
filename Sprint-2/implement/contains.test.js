const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({a: 1, b: 2}, 'a') // returns true
as the object contains a key of 'a'


E.g. contains({a: 1, b: 2}, 'c') // returns false
as the object doesn't contains a key of 'c'
*/
test("object contains the property", () => {
  expect(contains({ a: 1, b: 2 }, "a")).toBe(true);
  expect(contains({ a: 1, b: 2 }, "b")).toBe(true);

});
test("object doesn't contain the property", () => {
  expect(contains({ a: 1, b: 2 }, "c")).toBe(false);
});

// Acceptance criteria:

// Given a contains function
// When passed an object and a property name
// Then it should return true if the object contains the property, false otherwise

// Given an empty object
// When passed to contains
// Then it should return false
test("an empty object should return false", () => {
  const mainObject = {};
  outPut = false;
  expect(contains(mainObject)).toBe(outPut);
});
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
test("input is not an object", () => {
  expect(contains(["a", "q", 5], "a")).toBe(false);
  expect(contains("hello", "e")).toBe(false);
  expect(contains(["a", "q", 5], 5)).toBe(false);
  expect(contains(["a", "q", 2], 2)).toBe(false);
  expect(contains(45687, 4)).toBe(false);
  expect(contains(true, "r")).toBe(false);
});
