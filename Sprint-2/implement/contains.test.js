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
test("returns false when object is empty", () => {
  expect(contains({}, "anyProp")).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("returns true for object with existing property name", () => {
  expect(contains({ name: "Brad" }, "name")).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("returns false for object with non-existent property name", () => {
  expect(contains({ name: "Brad" }, "age")).toBe(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("returns false when input is an array", () => {
  expect(contains(["Brad"], "0")).toBe(false);
});

// Given null inputs
// When passed to contains
// Then it should return false
test("returns false when input is null", () => {
  expect(contains(null, "name")).toBe(false);
});

// Given non object inputs like string or number
// When passed to contains
// Then it should return false
test("returns false when input is a string", () => {
  expect(contains("Brad", "name")).toBe(false);
});
