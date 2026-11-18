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
test("should return false given an empty object", () => {
  expect(contains({}, "a")).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("should return true when the object has the property", () => {
  expect(contains({ age: 8, birthYear: 2019 }, "age")).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("should return false given a non-existent property", () => {
  expect(contains({ year: 2026, month: "July" }, "a")).toBe(false);
});

// Given a value that isn't an object - an array, a string, a number,
// null, or no argument at all
// When passed to contains
// Then it should throw Error("contains requires an object")
// (careful: typeof [] and typeof null are both "object")
test("should throw an error when passed an array", () => {
  expect(() => contains([2, 5, 9], "a")).toThrow(
    new Error("contains requires an object")
  );
});

test("should throw an error when passed a string", () => {
  expect(() => contains("sun", "a")).toThrow(
    new Error("contains requires an object")
  );
});

test("should throw an error when passed a number", () => {
  expect(() => contains(9, "a")).toThrow(
    new Error("contains requires an object")
  );
});

test("should throw an error when passed a null", () => {
  expect(() => contains(null, "a")).toThrow(
    new Error("contains requires an object")
  );
});

test("should throw an error when passed no argument", () => {
  expect(() => contains()).toThrow(new Error("contains requires an object"));
});
