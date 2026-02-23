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
test("contains on empty object returns false", () =>
  expect(contains({}, "key1")).toEqual(false));

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("contains returns true when object contains the given property", () =>
  expect(contains({ key1: "value1", key2: "value2" }, "key1")).toEqual(true));

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("contains returns false when object does not contain the given property", () =>
  expect(contains({ key1: "value1", key2: "value2" }, "key4")).toEqual(false));

// Given parameters which are not key-value pair type
// When passed to contains
// Then it should return false or throw an error
it("contains returns false or throws an error if given parameter is not a valid object", () => {
  expect(contains([], "key1")).toEqual(false);
  expect(contains([1, 2], 1)).toEqual(false);
  expect(contains("key1:value1", "1")).toEqual(false);
  expect(contains(5235, "key1")).toEqual(false);
  expect(contains(undefined, "key1")).toEqual(false);
  expect(contains(null, "key1")).toEqual(false);
});
