const contains = require("./contains.js");

describe("contains", () => {
  test("Returns true if the object contains the key", () => {
    expect(contains({ a: 1, b: 2 }, "a")).toEqual(true);
    expect(contains({ cat: 1, dog: 2, cow: 2 }, "cow")).toEqual(true);
  });

  test("Returns false if the object doesn't contain the key", () => {
    expect(contains({ a: 1, b: 2 }, "c")).toEqual(false);
    expect(contains({ cat: 1, dog: 2, cow: 2 }, "pig")).toEqual(false);
  });

  test("Returns false if the object is empty", () => {
    expect(contains({}, "c")).toEqual(false);
  });
  test("Returns false if the input is invalid", () => {
    expect(contains([1, 2, 3, 4], 3)).toEqual(false);
    expect(contains(null, 3)).toEqual(false);
    expect(contains("Hello World", "o")).toEqual(false);
  });
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
