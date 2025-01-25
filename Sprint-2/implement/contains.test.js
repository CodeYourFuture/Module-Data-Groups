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



// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
// Import the contains function

    //Given an empty object
    // When passed to contains
    // Then it should return false
  
  
// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
  
// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
  
// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
  

// Import the contains function

// Import the contains function
// Import the contains function

// Import the contains function

describe('contains function', () => {
  test('should return false for an empty object', () => {
    expect(contains({}, 'a')).toBe(false);
  });

  test('should return true for an existing property', () => {
    const obj = { a: 1, b: 2 };
    expect(contains(obj, 'a')).toBe(true);
  });

  test('should return false for a non-existent property', () => {
    const obj = { a: 1, b: 2 };
    expect(contains(obj, 'c')).toBe(false);
  });

  test('should return false or throw an error for invalid parameters like an array', () => {
    const arr = [1, 2, 3];
    expect(contains(arr, 'a')).toBe(false);
    // Optionally: expect(() => contains(arr, 'a')).toThrow();
  });

  test('should return false for null', () => {
    expect(contains(null, 'a')).toBe(false);
  });

  test('should return false for non-object inputs', () => {
    expect(contains(undefined, 'a')).toBe(false);
    expect(contains(42, 'a')).toBe(false);
    expect(contains('string', 'a')).toBe(false);
  });
});
