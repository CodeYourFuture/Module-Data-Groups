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

test("contains an empty object returns false", () => {
  const input = {};
  const result = contains(input, 'a'); 
  expect(result).toBe(false); 
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("contains an object with existing property returns true", () => {
  const input = { a: 1, b: 2, c: 3 };
  const result = contains(input, 'b'); 
  expect(result).toBe(true); 
})

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

test("contains an object with non-existent property returns false", () => {
  const input = { x: 10, y: 20, z: 30 };
  const result = contains(input, 'a'); 
  expect(result).toBe(false); 
})
// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error

test("contains with invalid parameters returns false", () => {
  const input = [1, 2, 3];
  const result = contains(input, '0'); 
  expect(result).toBe(false); 
})
