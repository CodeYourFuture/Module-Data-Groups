const contains = require("./contains");


test("contains on empty object returns false", () => {
  const emptyObject = {};
  expect(contains(emptyObject, "key")).toBe(false);
});


test("Checks if an object contains the specified property", () => {
  const obj1 = { name: "Alice", age: 30 };
  expect(contains(obj1, "name")).toBe(true); // The property "name" exists
  expect(contains(obj1, "city")).toBe(false); // The property "city" does not exist
});

test("Checks if an object contains the specified property", () => {
  const obj1 = { a: 1, b: 2 };
  expect(contains(obj1, "a")).toBe(true); // The property "name" exists
});


test(" when given an array instead of an object returns false", () => {
  const arrayInput = ["value1", "value2"];
  expect(contains(arrayInput, "key")).toBe(false);
});

test(" when given an array instead of an object returns false", () => {
  const arrayInput = ["value1", "value2"];
  expect(contains(arrayInput, "1")).toBe(false);
});



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

//test("When passed an object and a property name it should return true if the object contains the property, false otherwise", () => {
// expect(contains(obj1, "name")).toBe(true);
//});

// Given an empty object
// When passed to contains
// Then it should return false
//test.todo("contains on empty object returns false");

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
