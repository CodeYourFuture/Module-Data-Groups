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
describe("contains function", () => {
// Given an empty object
// When passed to contains
// Then it should return false
// Test case: Check if an empty object returns false
test("contains on empty object returns false", () => {
    // Expect the function to return false when checking for a property in an empty object
    expect(contains({}, "a")).toBe(false);
  });

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
 // Test case: Check if an object with an existing property returns true
 test("contains with existing property returns true", () => {
    // Expect the function to return true when checking for an existing property
    expect(contains({ a: 1, b: 2 }, "a")).toBe(true);
  });
// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
// Test case: Check if an object with a non-existent property returns false
test("contains with non-existent property returns false", () => {
    // Expect the function to return false when checking for a non-existent property
    expect(contains({ a: 1, b: 2 }, "c")).toBe(false);
  });
// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
 // Test case: Check if an invalid parameter (array) returns false
 test("contains with invalid parameter (array) returns false", () => {
    // Expect the function to return false when passed an array instead of an object
    expect(contains([1, 2, 3], "0")).toBe(false);
  });

   // Test case: Check if an invalid parameter (null) returns false
   test("contains with invalid parameter (null) returns false", () => {
    // Expect the function to return false when passed null instead of an object
    expect(contains(null, "a")).toBe(false);
  });
});