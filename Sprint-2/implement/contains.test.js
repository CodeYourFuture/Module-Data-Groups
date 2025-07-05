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
test.todo("contains on empty object returns false");
test("Given an empty object, returns false", () => {
  expect(contains({})).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("Given an object with properties, it should return true if a property name exit", () => {
  expect(
    contains({ firstName: "Aida", family: "Eslami", age: 35 }, "age")
  ).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("Given an object with properties, it should return false if a property name doesn't exit", () => {
  expect(
    contains({ firstName: "Aida", family: "Eslami", age: 35 }, "city")
  ).toBe(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("Given invalid parameters like an array, it should return false", () => {
  expect(contains([], false)).toBe(false);
});
