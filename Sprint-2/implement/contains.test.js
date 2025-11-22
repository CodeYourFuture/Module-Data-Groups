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

// When passed an empty object
// Then it should return false
test("contains on empty object returns false", () => {
  const emptyObject = {};
  expect(contains(emptyObject, "key")).toBe(false);
});

// When passed a non-object value (e.g., array, string, number, null, undefined)
// Then it should return false
test("Checks if an object contains the specified property", () => {
  const obj1 = { name: "Alice", age: 30 };
  expect(contains(obj1, "name")).toBe(true); // The property "name" exists
  expect(contains(obj1, "city")).toBe(false); // The property "city" does not exist
});

// contains({ a: 1, b: 2 }, 'a') // returns true and contains({ a: 1, b: 2 }, 'c') // returns false
test("Checks if an object contains the specified property", () => {
  const obj1 = { a: 1, b: 2 };
  expect(contains(obj1, "a")).toBe(true); // The property "name" exists
  expect(contains(obj1, "c")).toBe(false); // The property "c" does not exist
});


// when given an array instead of an object returns false
test(" when given an array instead of an object returns false", () => {
  const arrayInput = ["value1", "value2"];
  expect(contains(arrayInput, "key")).toBe(false); // The property "key" does not exist
});

