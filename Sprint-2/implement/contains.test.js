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
test("contains function returns true for existing property", () => {
  const obj = { a: 1, b: 2, c: "z" };
  const propertyName = "b";
  const result = contains(obj, propertyName);
  expect(result).toBe(true);
});

// Given an empty object
// When passed to contains
// Then it should return false
// test.todo("contains on empty object returns false");
test("contains an empty object returns false", () => {
  const obj = {};
  expect(contains(obj, "a")).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("Given an object with properties, returns true", () => {
  const obj = { a: 1 };
  expect(contains(obj, "a")).toBe(true);
});

// Given an object with properties
// When passed to contains with an empty string property name
// Then it should return true
test("Given an object with an empty string property, returns true", () => {
  const obj = { "": 5 };
  expect(contains(obj, "")).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("Given an object with non-existent property name, returns false", () => {
  const obj = { a: 1 };
  expect(contains(obj, "b")).toBe(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("Given an invalid parameter of an array, returns false", () => {
  const obj = ["array", 1, 2, 3];
  expect(() => contains(obj, "array")).toThrow(TypeError);
});

// Given invalid parameters like a non object type
// When passed to contains
// Then it should return false or throw an error
test("Given an invalid parameter of a number, returns false", () => {
  const obj = 42;
  expect(() => contains(42, "42")).toThrow(TypeError);
});

test("Given an invalid parameter of a string, returns false", () => {
  expect(() => contains("hello", "hello")).toThrow(TypeError);
});

// Given an inherited object without its own defined properties
// When passed to contains
// Then it should return false or throw an error
test("Given an inherited object without its own defined properties, returns false", () => {
  const parent = { a: 1, b: 2, c: "z" };
  const obj = Object.create(parent);
  const propertyName = "a"; // 'a' is inherited, not own
  const result = contains(obj, propertyName);
  expect(result).toBe(false);
});
// NB: inherited objects don't actually contain the properties they inherited they only have their own properties once they are defined within it

// Given an object that is a dictionary object
// When passed to contains
// Then it should return false or throw an error
test("Given a dictionary object with own property, returns true", () => {
  const dict = Object.create(null);
  dict.a = 1;
  expect(() => contains(dict, "a")).toThrow(TypeError);
});
/* 
NB: dictionary objects are typically used as a standalone object for special cases (like pure key-value maps) and only have a 'null' prototype (they don't have access to 'Object.prototype'). 
Therefore they do not have the hasOwnProperty method, so they cannot be used with the contains function as it is currently stands.
*/
