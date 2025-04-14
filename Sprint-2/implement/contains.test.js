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


describe("contains function", () => {

    // Test 1: Given an empty object, should return false
    test("contains on empty object returns false", () => {
      expect(contains({}, 'a')).toBe(false);
    });
  
    // Test 2: Given an object with properties, should return true for an existing property
    test("contains with existing property returns true", () => {
      expect(contains({ a: 1, b: 2 }, 'a')).toBe(true);
      expect(contains({ a: 1, b: 2 }, 'b')).toBe(true);
    });
  
    // Test 3: Given an object with properties, should return false for a non-existent property
    test("contains with non-existent property returns false", () => {
      expect(contains({ a: 1, b: 2 }, 'c')).toBe(false);
      expect(contains({ a: 1, b: 2 }, 'z')).toBe(false);
    });
    // Test 4: Given invalid parameters like an array, then it should return false or throw an error.
      test("When passed to contains, then it should return false", () => {
        expect(contains([1, 2, 3], 0)).toBe(false); // Arrays have numeric properties, but we treat them as invalid objects
        expect(contains([], 'length')).toBe(false); // 'length' is a property, but we treat arrays as invalid
    });

  });
