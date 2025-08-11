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
test("Given an empty object, when passed to the contains function, then it should return false", () => {
  expect(contains({}, "propertyName")).toEqual(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true

test("Given an object with properties, when passed to the contains function with an existing property name, then it should return true", () => {
  expect(
    contains({ name: "Zohreh", lastName: "Kazemianpour" }, "name")
  ).toEqual(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

test("Given an object with properties, when passed to the contains function with a non-existent property name, then it should return false", () => {
  expect(contains({ name: "Zohreh", lastName: "Kazemianpour" }, "age")).toEqual(
    false
  );
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("Given invalid parameters like an array, when passed to the contains function, then it should throw an error", () => {
  expect(() => contains(["zohreh", "kazemianpour"], "zohreh")).toThrow(
    "First argument must be a plain object"
  );
});
