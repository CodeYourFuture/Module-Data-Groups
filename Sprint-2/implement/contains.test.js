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

test("Should return true when key exists in object", () => {
  const obj = { a: 1, b: 2 };
  expect(contains(obj, "a")).toEqual(true);
});

// Given an empty object
// When passed to contains
// Then it should return false
//test.todo("contains on empty object returns false");

test("Should return false when empty object is passed", () => {
  const obj = {};  // empty object
  expect(contains(obj, "a")).toEqual(false);
})

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true

test("Should return true when object has the property", () => {
  const obj = { a: 5, c: 6, r: 5 };
  expect(contains(obj, "c")).toEqual(true);
});
// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

test("Should return false when object does not have the property", () => {
  const obj = { a: 5, c: 6, r: 5 };
  expect(contains(obj, "z")).toEqual(false); // non-existent property name
});
// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error

test("Should return false when invalid parameters are used", () => {
  expect(contains([], "a")).toEqual(false);      // array
  expect(contains(null, "a")).toEqual(false);    // null 
  expect(contains(5, "a")).toEqual(false);       // number 
  expect(contains("hello", "a")).toEqual(false); // string 
})

// In contains.test.js tests for contains.test.js passed 