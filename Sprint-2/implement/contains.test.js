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

test("Given a contains function  when passed an object and a property name then it should return true if the object contains the property, false otherwise", () => {
  const currentOutput = contains({ a: 1, b: 2 }, "a");
  const targetOutput = true;

  expect(currentOutput).toEqual(targetOutput);
});
// Given an empty object
// When passed to contains
// Then it should return false
test("returns true when the target is in array multiple times", () => {
  const currentOutput = contains({}, "c");
  const targetOutput = false;

  expect(currentOutput).toEqual(targetOutput);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true

test("returns true when the target is in array multiple times", () => {
  const currentOutput = contains({ a: 1, b: 2 , c: 9}, "a");
  const targetOutput = true;

  expect(currentOutput).toEqual(targetOutput);
});
// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

test("returns true when the target is in array multiple times", () => {
  const currentOutput = contains({ a: 1, b: 2 }, "c");
  const targetOutput = false;

  expect(currentOutput).toEqual(targetOutput);
});
// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("returns true when the target is in array multiple times", () => {
  const currentOutput = contains([1, 2, 2, 3], '2');
  const targetOutput = false;

  expect(currentOutput).toEqual(targetOutput);
});