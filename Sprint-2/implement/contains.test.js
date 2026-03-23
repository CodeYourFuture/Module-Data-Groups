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
test("The function should return undefined when an empty object is passed to it.", () => {
  expect(contains({})).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("The function should return true when the object contains the targeted property", () => {
  expect(contains({ town: "leeds" }, "leeds")).toBe(true);
  expect(contains({ a: 1, b: 2, c: 3 }, "a")).toBe(true);
  expect(contains({ name: "ahmed", sex: "male", age: 29 }, "male")).toBe(true);
  expect(contains({ zone: 2, zone: 3, zone: 4 }, "zone")).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("the function should return false when the targeted property don't exist", () => {
  expect(contains({ a: 1, b: 2, c: 3 }, "d")).toBe(false);
  expect(contains({ year: 1998, month: 10, Date: 16 }, "age")).toBe(false);
  expect(contains({ meal: "pizza", drink: "water", table: 3 }, "starter")).toBe(
    false
  );
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("the function should return false when invalid parameter like an array is passed", () => {
  expect(contains([10, 23, 34, 45], 45)).toBe(false);
  expect(contains("hello", "hi")).toBe(false);
  expect(contains(["green", "yellow", "rad"], "green")).toBe(false);
  expect(contains(((30, 40, 50), 30))).toBe(false);
});
