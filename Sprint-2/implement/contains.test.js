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
test("Given an input of an object with a property name, returns true if the object contains the property", () => {
  const objInput = { a: 1 };
  expect(contains(objInput, "a")).toBe(true);
  expect(contains(objInput, "t")).toBe(false);
});

// Given an empty object
// When passed to contains
// Then it should return false
test("Given an empty object, when passed to contains, returns false", () => {
  const objInput = {};
  expect(contains(objInput, "a")).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("Given an object with properties, when passed to contains with an existing property name, returns true", () => {
  const objInput = { name: "Alice", age: 25 };
  expect(contains(objInput, "age")).toBe(true);

  const edgeCaseInput = { 1: "one", "": "empty" };
  expect(contains(edgeCaseInput, "")).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("Given an object with properties, when passed to contains with a non-existent property name, returns false", () => {
  const objInput = { name: "Peter", age: 48 };
  expect(contains(objInput, "gender")).toBe(false);

  const objInput1= { name: "Tayo", age: 10 };
  expect(contains(objInput1, "location")).toBe(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("Given invalid parameters, when passed to contains, throws an error", () => {
  expect(() => contains("hello", "location")).toThrow(
    new TypeError("Invalid input: obj must be a plain object")
  );
  expect(() => contains(null, "a")).toThrow(
    new TypeError("Invalid input: obj must be a plain object")
  );
  expect(() => contains(undefined, "a")).toThrow(
    new TypeError("Invalid input: obj must be a plain object")
  );
  expect(() => contains(123, "a")).toThrow(
    new TypeError("Invalid input: obj must be a plain object")
  );
  expect(() => contains(true, "a")).toThrow(
    new TypeError("Invalid input: obj must be a plain object")
  );
  expect(() => contains([], "a")).toThrow(
    new TypeError("Invalid input: obj must be a plain object")
  );
  expect(() => contains(() => {}, "a")).toThrow(
    new TypeError("Invalid input: obj must be a plain object")
  );
});
