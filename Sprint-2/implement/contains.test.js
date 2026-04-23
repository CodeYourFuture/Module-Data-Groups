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
test("returns false when empty object", () => {
  const input = {};
  const result = contains(input, "a");
  expect(result).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true

test("returns true when the property exists in the object", () => {
  const input = { firstName: "Alex", age: 30 };
  const result = contains(input, "firstName");
  expect(result).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

test("returns false when the property does not exist in the object", () => {
  const input = { firstName: "Alex", age: 30 };
  const result = contains(input, "lastName");
  expect(result).toBe(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error

test("returns false when the input is an array instead of an object", () => {
  const input = [1, 2, 3];
  const result = contains(input, "0"); // Even though index 0 exists, it's an array
  expect(result).toBe(false);
});

// 5. Given null or other types
test("returns false when the input is null or undefined", () => {
  expect(contains(null, "prop")).toBe(false);
  expect(contains(undefined, "prop")).toBe(false);
});
