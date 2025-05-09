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


//MY RESPONSE

// Implement the contains function

function contains(obj, property) {
    if (typeof obj !== "object" || obj === null) {
      throw new Error("First parameter must be an object.");
    }
    return property in obj;
  }
  
  module.exports = contains;
  
  // Test cases for the contains function
  
  // Given a contains function
  // When passed an object and a property name
  // Then it should return true if the object contains the property, false otherwise
  test("contains on object with existing property returns true", () => {
    expect(contains({ a: 1, b: 2 }, "a")).toBe(true); // object contains the 'a' key
  });
  
  test("contains on object with non-existent property returns false", () => {
    expect(contains({ a: 1, b: 2 }, "c")).toBe(false); // object does not contain the 'c' key
  });
  
  // Given an empty object
  // When passed to contains
  // Then it should return false
  test("contains on empty object returns false", () => {
    expect(contains({}, "a")).toBe(false); // empty object does not contain any keys
  });
  
  // Given invalid parameters like an array
  // When passed to contains
  // Then it should return false or throw an error
  test("contains on invalid parameter throws error", () => {
    expect(() => contains([], "a")).toThrow("First parameter must be an object."); // passing an array should throw an error
  });
  