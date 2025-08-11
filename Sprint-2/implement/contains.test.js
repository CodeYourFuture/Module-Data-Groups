
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

const contains = require("./contains");

test("returns true for an existing key", () => {
  expect(contains({ a: 1, b: 2 }, "a")).toBe(true);
});



// Given an empty object
// When passed to contains
// Then it should return false
test("it should return false if given an empty object" , () => {
  expect(contains({}, "a")).toBe(false);
});


// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("returns true when contains an existing property name" , ()  => {
expect(contains({a: 1,b: 2}, "a")).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("returns false for a non-existent property name", () => {
  expect(contains({ a: 1, b: 2 }, "c")).toBe(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("returns false for invalid parameters like an (array)", () => {
  expect(contains([1, 2, 3], "1")).toBe(false);
});
test("throws an error when the first argument is not an object", () => {
  expect(() => contains(null, "a")).toThrow("Invalid input: must be an object");
});
