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
test.todo("contains on empty object returns false");

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test.todo(
  "given an object with properties, returns true for an existing property name"
);

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test.todo(
  "given an object with properties, returns false for a non-existent property name"
);

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test.todo(
  "given invalid parameters like an array, returns false or throws an error"
);

describe("contains", () => {
  test("contains on empty object returns false", () => {
    expect(contains({}, "someProperty")).toEqual(false);
  });

  test("given an object with properties, returns true for an existing property name", () => {
    expect(contains({ name: "Alice", age: 25 }, "name")).toEqual(true);
    expect(contains({ key: "value", num: 42 }, "num")).toEqual(true);
    expect(contains({ a: 1, b: 2 }, "a")).toEqual(true);
  });

  test("given an object with properties, returns false for a non-existent property name", () => {
    expect(contains({ name: "Alice", age: 25 }, "address")).toEqual(false);
    expect(contains({ key: "value", num: 42 }, "missingKey")).toEqual(false);
    expect(contains({ a: 1, b: 2 }, "c")).toEqual(false);
  });

  test("given invalid parameters like an array, returns false or throws an error", () => {
    expect(contains([], "someProperty")).toEqual(false);
    expect(contains(null, "someProperty")).toEqual(false);
    expect(contains(42, "someProperty")).toEqual(false);
  });
});
