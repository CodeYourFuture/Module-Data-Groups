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
test("should return false when an empty object is passed to the function", () => {
  expect(contains({})).toEqual(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("the function should return true when object contains a given property", () => {
  expect(contains({ a: 1, b: 2, c: 3 }, "c")).toEqual(true);
  expect(contains({ name: "lee", age: 30 }, "name")).toEqual(true);
  expect(contains({ place: "spain", city: "madrid", rank: 9 }, "city")).toEqual(
    true
  );
  expect(contains({ zone: 2, zone: 3, zone: 4 }, "zone")).toEqual(true);
});
// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("the function should return false when property don't exist in the given object", () => {
  expect(contains({ a: 1, b: 2, c: 3 }, "d")).toEqual(false);
  expect(contains({ year: 1998, month: 10, Date: 16 }, "age")).toEqual(false);
  expect(
    contains({ meal: "pizza", drink: "water", table: 3 }, "starter")
  ).toEqual(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("the function should return false when invalid parameter like an array is passed", () => {
  expect(contains([10, 23, 34, 45], "3")).toEqual(false);
  expect(contains("hello", "0")).toEqual(false);
  expect(contains(["green", "yellow", "rad"], "0")).toEqual(false);
  expect(contains(((30, 40, 50), 30))).toEqual(false);
});
