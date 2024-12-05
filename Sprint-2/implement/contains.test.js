const contains = require("./contains.js");

// /*
// Implement a function called contains that checks an object contains a
// particular property

// E.g. contains({a: 1, b: 2}, 'a') // returns true
// as the object contains a key of 'a'

// E.g. contains({a: 1, b: 2}, 'c') // returns false
// as the object doesn't contains a key of 'c'
// */

// // Acceptance criteria:

// // Given a contains function
// // When passed an object and a property name
// // Then it should return true if the object contains the property, false otherwise

// // Given an empty object
// // When passed to contains
// // Then it should return false
// test.todo("contains on empty object returns false");

// // Given an object with properties
// // When passed to contains with an existing property name
// // Then it should return true

// // Given an object with properties
// // When passed to contains with a non-existent property name
// // Then it should return false

// // Given invalid parameters like an array
// // When passed to contains
// // Then it should return false or throw an error


describe('contains function', () => {
  test('should return true when property exists in the object', () => {
    const obj = { a: 1, b: 2 };
    expect(contains(obj, 'a')).toBe(true);  // 'a' is a property of obj
  });

  test('should return false when property does not exist in the object', () => {
    const obj = { a: 1, b: 2 };
    expect(contains(obj, 'c')).toBe(false); // 'c' is not a property of obj
  });

  test('should return false for an empty object', () => {
    const obj = {};
    expect(contains(obj, 'a')).toBe(false); // No properties in an empty object
  });

  test('should return true when property exists in an array (arrays are objects)', () => {
    const arr = [1, 2, 3];
    expect(contains(arr, 'length')).toBe(true);  // Arrays have a 'length' property
  });

  test('should return false when property does not exist in an array', () => {
    const arr = [1, 2, 3];
    expect(contains(arr, 'nonExistent')).toBe(false); // No such property in the array
  });

  test('should return false for invalid parameters (non-object types)', () => {
    const notAnObject = 'string';
    expect(contains(notAnObject, 'length')).toBe(false); // Strings don't have 'length' as an object property
    
    const number = 123;
    expect(contains(number, 'toString')).toBe(false); // Numbers don’t have 'toString' as a direct property
  });
});
