const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({a: 1, b: 2}, 'a') // returns true
as the object contains a key of 'a'

E.g. contains({a: 1, b: 2}, 'c') // returns false
as the object doesn't contains a key of 'c'
*/

// Given a contains function
// When passed an object and a property name
// Then it should return true if the object contains the property, false otherwise
test("Should return true if the object contains the property", () => {
  const currentOutput = contains({ a: 1, b: 2 }, "a");
  const targetOutput = true;
  expect(currentOutput).toBe(targetOutput);
});

test("Should return false if the object doesn't contain the property", () => {
  const currentOutput = contains({ a: 1, b: 2 }, "c");
  const targetOutput = false;
  expect(currentOutput).toBe(targetOutput);
});

// Given an empty object
// When passed to contains
// Then it should return false
test("Should return false for an empty object", () => {
  const currentOutput = contains({}, "b");
  const targetOutput = false;
  expect(currentOutput).toBe(targetOutput);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("Should return true when passed with an existing property name", () => {
  const currentOutput = contains({ z: 26, y: 25, x: 24 }, "x");
  const targetOutput = true;
  expect(currentOutput).toBe(targetOutput);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("Should return false when passed with a non-existing property name", () => {
  const currentOutput = contains({ w: 23, v: 22, u: 21 }, "x");
  const targetOutput = false;
  expect(currentOutput).toBe(targetOutput);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("Should return false when passed with an invalid property", () => {
  const currentOutput = contains({ g: 7, h: 8, i: 9 }, []);
  const targetOutput = false;
  expect(currentOutput).toBe(targetOutput);
});

