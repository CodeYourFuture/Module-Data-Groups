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
test("should return true if the object contains the property, when passes an object and property name", () => {
    expect(contains({a: 1, b: 2}, 'a')).toEqual(true);
    expect(contains({a: 1, b: 2}, 'c')).toEqual(false);
  });

// Given an empty object
// When passed to contains
// Then it should return false
test("contains an empty object returns false", () => {
    expect(contains({}, 'a')).toEqual(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("should return true,  for an existing property ", () => {
     const obj = { a: 1, b: 2 };
  const result = contains(obj, "a");
  expect(result).toBe(true);
});


// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

test("contains returns false for a non-existent property", () => {
  const obj = { a: 1, b: 2 };
  const result = contains(obj, "c");
  expect(result).toBe(false);
});


// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("contains throws an error for invalid object parameter", () => {
    expect(() => contains(null, "a")).toThrow("Invalid parameter: obj must be a non-null object.");
    expect(() => contains(42, "a")).toThrow("Invalid parameter: obj must be a non-null object.");
});
