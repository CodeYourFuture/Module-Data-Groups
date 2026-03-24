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
// Then it should return true if the object contains the property,
test("It return true when the object contains the property", () => {
  let object = { name: "Roman", age: 34 };
  let key = "name";
  expect(contains(object, key)).toEqual(true);
});
// object does not contain the property
test("It return false when the object does not contains the property", () => {
  let object = { name: "Roman", age: 34 };
  let key = "lastName";
  expect(contains(object, key)).toEqual(false);
});

// Given an empty object
// When passed to contains
// Then it should return false
test("It return false when the object has not any property", () => {
  let object = {};
  let key = "name";
  expect(contains(object, key)).toEqual(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("It returns true when the object has the specified property", () => {
  const object = { name: "Roman", age: 34, city: "Birmingham" };
  const key = "name";
  expect(contains(object, key)).toEqual(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("It returns false when the object does NOT have the specified property", () => {
  const object = { name: "Roman", age: 34, city: "Birmingham" };
  const key = "lastName";
  expect(contains(object, key)).toEqual(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("It returns false even if array contains the key (arrays are invalid)", () => {
  const object = [1, 2, 3];
  const key = 0;
  expect(contains(object, key)).toEqual(false);
});

// New testes after receiving feedback ==>

test("It return false when null is passed instead of object", () => {
  let object = null;
  let key = "name";
  expect(contains(object, key)).toEqual(false);
});

test("It return false when undefined is passed instead of object", () => {
  let object = undefined;
  let key = "name";
  expect(contains(object, key)).toEqual(false);
});

test("It return false when a number is passed instead of object", () => {
  let object = 123;
  let key = "name";
  expect(contains(object, key)).toEqual(false);
});

test("It return false when a string is passed instead of object", () => {
  let object = "hello";
  let key = "name";
  expect(contains(object, key)).toEqual(false);
});

test("It return false when a boolean is passed instead of object", () => {
  let object = true;
  let key = "name";
  expect(contains(object, key)).toEqual(false);
});
