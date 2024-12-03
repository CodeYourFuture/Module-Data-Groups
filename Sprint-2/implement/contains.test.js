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
test("It should return true if the object contains the property, false otherwise", () => {
  expect(contains({ a: 1, b: 2 }, 'a')).toBe(true);
  expect(contains({ a: 1, b: 2 }, 'c')).toBe(false); 
});


// Given an empty object
// When passed to contains
// Then it should return false
test("It should return false if the object is empty", () => {
  expect(contains({},'a')).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("Given an object with properties, when passed to contains with an existing property name, then it should return true", () => {
  expect(contains({ a: 1, b: 2 }, "a")).toBe(true); // 'a' exists in the object
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("Given an object with a non-existent property name, it should return false", () => {
  expect(contains({ a: 22, b: 23 }, "c")).toBe(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("Given invalid parameters like a number, it should throw an error", () => {
  expect(() => contains(123, "d")).toThrow("Invalid parameters");
});
