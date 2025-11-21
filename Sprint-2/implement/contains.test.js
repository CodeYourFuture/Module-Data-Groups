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
test("object contains the property returns true", () => {
  const object = { forename: "John" };
  expect(contains(object, "forename")).toEqual(true);
  expect(contains(object, "surname")).toEqual(false);
});

// Given an empty object
// When passed to contains
// Then it should return false
test("empty object returns false", () => {
  const object = {};
  const result = contains(object);
  expect(result).toEqual(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("object contains properties returns true for a property", () => {
  const object = { forename: "John", surname: "Appleseed" };
  const property = "surname";
  const result = contains(object, property);
  expect(result).toEqual(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("object returns false for a non-existent property", () => {
  const object = { forename: "John", surname: "Appleseed" };
  const property = "middlename";
  const result = contains(object, property);
  expect(result).toEqual(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("object throws an error for a non-object type", () => {
  expect(() => contains([])).toThrow("object is not an object type!");
});
