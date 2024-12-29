const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property.

E.g. contains({a: 1, b: 2}, 'a') // returns true
as the object contains a key of 'a'

E.g. contains({a: 1, b: 2}, 'c') // returns false
as the object doesn't contains a key of 'c'
*/

// Acceptance criteria:

// Given a contains function
// When passed an object and a property name
// Then it should return true if the object contains the property, false otherwise

test("returns true when the object contains the property", () => {
  const currentOutput = contains({ a: 1, b: 2 }, "a");
  const targetOutput = true;

  expect(currentOutput).toEqual(targetOutput);
});

// Given an empty object
// When passed to contains with a property name
// Then it should return false as the object doesn't contain any properties
test("returns false when passed an empty object", () => {
  const currentOutput = contains({}, "c");
  const targetOutput = false;

  expect(currentOutput).toEqual(targetOutput);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true if the property exists
test("returns true when the property exists in the object", () => {
  const currentOutput = contains({ a: 1, b: 2, c: 9 }, "a");
  const targetOutput = true;

  expect(currentOutput).toEqual(targetOutput);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false if the property does not exist
test("returns false when the property does not exist in the object", () => {
  const currentOutput = contains({ a: 1, b: 2 }, "c");
  const targetOutput = false;

  expect(currentOutput).toEqual(targetOutput);
});

// Given invalid parameters like an array
// When passed to contains with an array as input
// Then it should return false or throw an error, depending on how you handle the input type
test("returns false when passed an array instead of an object", () => {
  const currentOutput = contains([1, 2, 2, 3], "2");
  const targetOutput = false;

  expect(currentOutput).toEqual(targetOutput);
});




test("returns false when passed an array and a string as a key", () => {
  const currentOutput = contains([9, 9, "9", "9"], "9");
  const targetOutput = false;

  expect(currentOutput).toEqual(targetOutput);
});

test("returns false when passed an array with a number and a string key", () => {
  const currentOutput = contains([2], "2");
  const targetOutput = false;

  expect(currentOutput).toEqual(targetOutput);
});

test("returns false when passed an array with a number and a non-existent string key", () => {
  const currentOutput = contains([2], "0");
  const targetOutput = false;

  expect(currentOutput).toEqual(targetOutput);
});

test("returns false when passed undefined and a string key", () => {
  const currentOutput = contains(undefined, "A");
  const targetOutput = false;

  expect(currentOutput).toEqual(targetOutput);
});

test("returns false when passed null and a string key", () => {
  const currentOutput = contains(null, "A");
  const targetOutput = false;

  expect(currentOutput).toEqual(targetOutput);
});