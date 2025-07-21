// const contains = require("./contains.js");

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

const contains = require('./contains');

describe('contains', () => {
  // Acceptance Criterion 1:
  test('returns true when object contains the given key', () => {
    expect(contains({ a: 1, b: 2 }, 'a')).toBe(true);
  });

  // Acceptance Criterion 2:
  test('returns false when object does not contain the given key', () => {
    expect(contains({ a: 1, b: 2 }, 'c')).toBe(false);
  });

  // Acceptance Criterion 3:
  test('returns false when object is empty', () => {
    expect(contains({}, 'a')).toBe(false);
  });

  // Edge Case 1: Array (invalid input)
  test('returns false when passed an array instead of an object', () => {
    expect(contains([], 'length')).toBe(false);
  });

  // Edge Case 2: Null
  test('returns false when passed null', () => {
    expect(contains(null, 'a')).toBe(false);
  });

  // Edge Case 3: Number (invalid type)
  test('returns false when passed a number instead of an object', () => {
    expect(contains(123, 'a')).toBe(false);
  });

  // Edge Case 4: Object without prototype (no hasOwnProperty)
  test('returns false when object is created with null prototype and does not contain the key', () => {
    const obj = Object.create(null);
    expect(contains(obj, 'missing')).toBe(false);
  });

  test('returns true when object is created with null prototype and contains the key', () => {
    const obj = Object.create(null);
    obj.test = 42;
    expect(contains(obj, 'test')).toBe(true);
  });
});
