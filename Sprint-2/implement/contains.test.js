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
test("Given an object and a property name, should return true if object contains the property otherwise false", () => {
  const obj = { a: 1, b: 2 };
  const property = "a";
  expect(contains(obj, property)).toEqual(true);
});
// Given an empty object
// When passed to contains
// Then it should return false

test("contains should returns false for an empty object", () => {
  expect(contains({}, "a")).toEqual(false);
});


// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
