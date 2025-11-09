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
//test.todo("contains on empty object returns false");
test("given an empty object, it should return false", () => {
  const currentOutput = contains({});
  const targetOutput = false;
  expect(currentOutput).toEqual(targetOutput);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("given an object with properties, when passed to contains with an existing property name it should return true", () => {
  const currentOutput = contains({a: 1, b: 2}, 'a') ;
  const targetOutput = true;
  expect(currentOutput).toEqual(targetOutput);
});


// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("given an object with properties, when passed to contains with a non-existent property name it should return false", () => {
  const currentOutput = contains({a: 1, b: 2}, 'c') ;
  const targetOutput = false;
  expect(currentOutput).toEqual(targetOutput);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("given ivalid parameters like an array, when passed to contains it should return false  throw an error", () => {
  const currentOutput = contains([1,'a'], 'c') ;
  const targetOutput = false;
  expect(currentOutput).toEqual(targetOutput);
});
