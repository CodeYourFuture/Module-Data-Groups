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

test("returns true if the object contains the property, false otherwise", () => {
  const currentOutput = contains({ a: 1, b: 2, c: 2 }, "c");
  const targetOutput = true;

  expect(currentOutput).toEqual(targetOutput);
});
// Given an empty object
// When passed to contains
// Then it should return false
test("an empty object should return false when passed to contain", () => {
  const currentOutput = contains({}, "d");
  const targetOutput = false;

  expect(currentOutput).toEqual(targetOutput);
});
// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("returns true if the object contains the property", () => {
  const currentOutput = contains({ a: 1, b: 2, c: 2 }, "b");
  const targetOutput = true;
  expect(currentOutput).toEqual(targetOutput);
});
// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("returns false as the object doesn't contains the property", () => {
  const currentOutput = contains({ a: 1, b: 2, c: 2 }, "e");
  const targetOutput = false;

  expect(currentOutput).toEqual(targetOutput);
});
// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("invalid parameters like an array, when passed to contains should return false", () => {
  const currentOutput = contains(["a", "b", "c", "e"], "e");
  const targetOutput = false;

  expect(currentOutput).toEqual(targetOutput);
});
