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
test("should return false when passed an empty object", () => {
  expect(contains({}, "a")).toBe(false);
}); 

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("should return true when the object contains the property", () => {
  expect(contains({ a: 1, b: 2 }, "a")).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false 
test("should return false when the object does not contain the property", () => {
  expect(contains({ a: 1, b: 2 }, "c")).toBe(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error

describe('error on invalid input', () => { 
    test.each([
      [null, 'a'],
      [undefined, 'a'],
      [42, 'a'],
      ['string', 'a'],
      [true, 'a'],
      [[], 'a'],
    ])('contains(%p, %p) should throw an error', (obj, prop) => {
      expect(() => contains(obj, prop)).toThrow('Invalid input: first argument must be an object');
    });
  });   

// Given an object with a property set to undefined
test("should return true when the property exists but is undefined", () => {
  expect(contains({ a: undefined, b: 2 }, "a")).toBe(true);
});

// Given an object with a property set to null
test("should return true when the property exists but is null", () => {
  expect(contains({ a: null, b: 2 }, "a")).toBe(true);
});

// Given an object with a property whose value is falsy
test("should return true when the property exists but is falsy", () => {
  expect(contains({ a: 0, b: false, c: '', d: NaN }, "a")).toBe(true);
  expect(contains({ a: 0, b: false, c: '', d: NaN }, "b")).toBe(true);
  expect(contains({ a: 0, b: false, c: '', d: NaN }, "c")).toBe(true);
  expect(contains({ a: 0, b: false, c: '', d: NaN }, "d")).toBe(true);
});

//incorrect arguments
test("should throw an error when called with incorrect number of arguments", () => {
  expect(() => contains({ a: 1 })).toThrow('Invalid input: function requires two arguments');
  expect(() => contains()).toThrow('Invalid input: function requires two arguments');
  expect(() => contains({ a: 1 }, 'a', 'extra')).toThrow('Invalid input: function requires two arguments');
});



