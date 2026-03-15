const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({a: 1, b: 2}, 'a') // returns true
as the object contains a key of 'a'

E.g. contains({a: 1, b: 2}, 'c') // returns false
as the object doesn't contains a key of 'c'
*/

test("An empty object should return false",()=>{
    const object = {};
    const propertyName = "a";
    expect(contains(object, propertyName)).toEqual(false);
});
  

test("returns true when the object contains an existing property name", () => {
  const object = { a: 1, b: 2, c: 3 };
  const propertyName = "a";
  expect(contains(object, propertyName)).toEqual(true);
});
test("returns false when the object not contains an existing property name", () => {
  const object = { a: 1, b: 2, c: 3 };
  const propertyName = "d";
  expect(contains(object, propertyName)).toEqual(false);
});
test("Should throw an error for an invalid parameters", () => {
  const object = [1,2,3,4,5,6,7];
  const propertyName = "a";
  expect(() => contains(object, propertyName)).toThrow();
});
// Acceptance criteria:

// Given a contains function
// When passed an object and a property name
// Then it should return true if the object contains the property, false otherwise

// Given an empty object
// When passed to contains
// Then it should return false
test.todo("contains on empty object returns false");

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
