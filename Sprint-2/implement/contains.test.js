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
describe("check props", () => {
  const cat = {
    name: "Laser",
    legs: 4,
    color: "grey",
  };
  // Given a contains function
  // When passed an object and a property name
  // Then it should return true if the object contains the property, false otherwise
  test("given passed object and prop name, it returns true if contains the property, false if not", () => {
    expect(contains(cat, "name")).toEqual(true);
  });

  // Given an empty object
  // When passed to contains
  // Then it should return false
  test("contains on empty object returns false", () => {
    expect(contains({})).toEqual(false);
  });

  // Given an object with properties
  // When passed to contains with an existing property name
  // Then it should return true
  test("contains an object with existing peoperty returns true", () => {
    expect(contains(cat, "color")).toEqual(true);
  });

  // Given an object with properties
  // When passed to contains with a non-existent property name
  // Then it should return false
  test("contains an object with properties, non existent property name returns false", () => {
    expect(contains(cat, "age")).toEqual(false);
  });

  // Given invalid parameters like an array
  // When passed to contains
  // Then it should return false or throw an error
  test("given invalid parameters, it returns false", () => {
    expect(contains([])).toEqual(false);
  });

  test("returns false for array", () => {
    expect(contains([5, 5, 5], 0)).toEqual(false);
  });

  test("returns false for null", () => {
    expect(contains(null, "key")).toEqual(false);
  });

  test("returns false for number", () => {
    expect(contains(1234, "key")).toEqual(false);
  });

  test("returns false for undefined", () => {
    expect(contains(undefined, "key")).toEqual(false);
  });
});
