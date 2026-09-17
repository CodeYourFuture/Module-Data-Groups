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

// Given an empty object
// When passed to contains
// Then it should return false
test("contains on empty object returns false", () => {
  expect(contains({})).toEqual(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("contains passed an object and a property name, returns true", () => {
  expect(contains({ a: 1, b: 2 }, "a")).toEqual(true);
});
// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("Contains passed with a non-existent property name, returns false", () => {
  expect(contains({ a: 1, b: 2 }, "c")).toEqual(false);
});

// Given a value that isn't an object - an array, a string, a number,
// null, or no argument at all
// When passed to contains
// Then it should throw Error("contains requires an object")
// (careful: typeof [] and typeof null are both "object")
test("contains passed invalid input like an array, a string or a number will throw an error", () => {
  expect(() => contains([5, "5", 6], "a")).toThrow(
    new Error("contains require an object")
  );
  expect(() => contains("Ebra", "Ebra")).toThrow(
    new Error("contains require an object")
  );
  expect(() => contains(1, 1)).toThrow(new Error("contains require an object"));
});
