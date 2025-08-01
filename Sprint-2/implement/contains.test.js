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

test("given an empty object, return false", () => {
  const input = {};
  const expected = false;
  const result = contains(input, "a");
  expect(result).toBe(expected);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("given an object with existing property name, returns true", () => {
  const input = { a: 1, b: 2 }; //the implementation of the test should change
  const expected = true;
  const result = contains(input, "a");
  expect(result).toBe(expected);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

test("given an object with non-existent property, returns false", () => {
  const input = { a: 1, b: 2 };
  const expected = false;
  const result = contains(input, "c");
  expect(result).toBe(expected);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("given an invalid input, throw an error", () => {
  expect(() => contains(["a", "b", "c"], "a")).toThrow(
    /Input must be an object/
  );
});
