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
// test.todo("contains on empty object returns false");

test("contains an empty object returns false", () => {
  const obj = {};
  expect(contains(obj, "a")).toBe(false);
});
// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("contains an object with properties return ture", () => {
  const obj = { a: 1, b: 2, c: 3 };
  expect(contains(obj, "a")).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("contains an object with propreties return false for non-existing property", () => {
  const obj = { a: 1, b: 2, c: 3 };
  expect(contains(obj, "d")).toBe(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("contains with invalid parameters return false", () => {
  const obj = ["a", "b", "c", "d"];
  expect(contains(obj, "1")).toBe(false);
});

// Give an error  for null values:

test("contains give an error when obj is null", ()=> {
  expect((()=> contains(null , "a"))).toThrow();
});
//   throw error for undefiend values:
test("contains give an error when obj is undefined", ()=> {
  expect((()=> contains(undefined , "a"))).toThrow();
});

// throw error for non object typs:
test(" give an error when obj is a number", ()=> {
expect((()=> contains(123, "a"))).toThrow();
});

// throw error when obj is a string:
test(" give an error when obj is a string", ()=> {
  expect((()=> contains("hello", "a"))).toThrow();
});

// give error when obj is boolean:
test(" give an error when obj is a boolean", ()=> {
  expect((()=> contains(true, "a"))).toThrow();
});
