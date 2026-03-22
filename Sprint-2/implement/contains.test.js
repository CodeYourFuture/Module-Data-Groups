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

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false



// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
describe('contains function', () => {

  test('returns false for an empty object', () => {
    const object = {};
    expect(contains({}, 'name')).toBe(false);
  });

  test('returns true when property exists', () => {
    const object = { name: 'jin', age: 13 };
    expect(contains(object, 'age')).toBe(true);
  });

  test('returns false when property does not exist', () => {
    const object = { name: 'jin', age: 13 };
    expect(contains(object, 'nice')).toBe(false);
  });

  test('returns false when input is an array', () => {
    const object = [1, 2, 5];
    expect(contains(object, '0')).toBe(false);
  });

  test('returns false when input is null', () => {
    expect(contains(null, 'age')).toBe(false);
  });

  test('returns false when input is not an object', () => {
    expect(contains(123, 'age')).toBe(false);
    expect(contains('hello', 'length')).toBe(false);
  });

});