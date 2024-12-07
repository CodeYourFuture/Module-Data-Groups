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
test("contains on empty object returns false", () => {
    expect(contains({}, 'h')).toBe(false);
  });
// Given an empty object
// When passed to contains
// Then it should return false
test("contains with an existing property returns true", () => {
    expect(contains({h: 1, k: 2}, 'h')).toBe(true);
  });

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("contains with a non-existent property returns false", () => {
    expect(contains({h: 1, k: 2}, 'b')).toBe(false);
  });
// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("contains on an array returns false", () => {
    expect(contains([], 'k')).toBe(false);
  });
  
// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("contains on invalid parameters returns false", () => {
    expect(contains(123, 'h')).toBe(false);  // number
    expect(contains('string', 'h')).toBe(false);  // string
    expect(contains(null, 'h')).toBe(false);  // null
  });
  