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
test("if the object contains the property, return 'true'", () => {
  expect(contains({ a: 1 }, "a")).toEqual(true);
});
test("if the object contains the property, return 'true'", () => {
  expect(contains({ a: 1, "a,s,3": "op" }, ["a", "s", 3])).toEqual(true);
});

test("if the object doesn't contain the property return 'false'", () => {
  expect(contains({ a: 1, d: 7 }, "m")).toEqual(false);
});
test("if the object doesn't contain the property return 'false'", () => {
  expect(contains({ a: 1, s: 7 }, [1, 2, "a"])).toEqual(false);
});

// Given an empty object
// When passed to contains
// Then it should return false
test("contains an empty object returns false", () => {
  expect(contains({}, "a")).toEqual(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true

//<<<both covered already>>
// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("when instead of an object literal the parameter is an array throw error", () => {
  expect(() => contains([], "a")).toThrow("Parameter is not an object literal");
});
