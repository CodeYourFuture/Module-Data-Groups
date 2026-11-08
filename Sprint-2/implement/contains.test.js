const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({a: 1, b: 2}, 'a') // returns true
as the object contains a key of 'a'

E.g. contains({a: 1, b: 2}, 'c') // returns false
as the object doesn't contains a key of 'c'

E.g. contains([1, 2, 3], 'a') throws Error("contains requires an object")
as an array isn't an object
*/

// Acceptance criteria:

// Given a contains function
// When passed an object and a property name
// Then it should return true if the object contains the property, false otherwise
test("should return true when an object contains the  property", () => {
  const object1 = { a: 1, b: 2, c: 3 };
  const property = "a";
  const result = contains(object1, property);
  expect(result).toEqual(true);
});

// Given an empty object
// When passed to contains
// Then it should return false
test.todo("contains on empty object returns false");
test("should return false when empty object is passed", () => {
  const object1 = {};
  const property = "a";
  const result = contains(object1, property);
  expect(result).toEqual(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("should return true when object is passed and property name matches", () => {
  const object1 = { a: 1, b: 2, c: 3, d: 4 };
  const property = "b";
  const result = contains(object1, property);
  expect(result).toEqual(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

test("should return false when object is passed and property name doesnt matches ", () => {
  const object1 = { a: 1, b: 2, c: 3, d: 4 };
  const property = "e";
  const result = contains(object1, property);
  expect(result).toEqual(false);
});
// Given a value that isn't an object - an array, a string, a number,
// null, or no argument at all
// When passed to contains
// Then it should throw Error("contains requires an object")
// (careful: typeof [] and typeof null are both "object")
test("should throw an error when the valu passed isn't an object", () => {
  expect(() => contains([])).toThrow("contains requires an object");
});
