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
test("returns true when object contains the property", () => {
  const obj = { a: 1, b: 2 };
  expect(contains(obj, "a")).toBe(true);
});

test("returns false when object does not contain the property", () => {
  const obj = { a: 1, b: 2 };
  expect(contains(obj, "c")).toBe(false);
});


// Given an empty object
// When passed to contains
// Then it should return false
// test.todo("contains on empty object returns false");
test("contains on empty object returns false", () => {
  expect(contains({}, "a")).toBe(false);
});



// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("returns false for invalid parameters", () => {
  const arr = ["apple", "banana"];
  
  expect(contains(arr, "0")).toBe(false);
  expect(contains(null, "a")).toBe(false);
  expect(contains(123, "a")).toBe(false);
  expect(contains("hello", "0")).toBe(false);
});
