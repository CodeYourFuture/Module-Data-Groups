const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({a: 1, b: 2}, 'a') // returns true
as the object contains a key of 'a'

E.g. contains({a: 1, b: 2}, 'c') // returns false
as the object doesn't contains a key of 'c'
*/

describe("contains", () => {
  // Acceptance criteria:

  // Given a contains function
  // When passed an object and a property name
  // Then it should return true if the object contains the property, false otherwise
  test("contains returns true for existing property", () => {
    const obj = { a: 1, b: 2 };
    expect(contains(obj, "a")).toEqual(true);
  });

  // Given an empty object
  // When passed to contains
  // Then it should return false
  test("contains returns false for empty object", () => {
    const obj = {};
    expect(contains(obj, "a")).toEqual(false);
  });
  // Given an object with properties
  // When passed to contains with an existing property name
  // Then it should return true
  test("contains returns true for existing property", () => {
    const obj = { a: 1, b: 2 };
    expect(contains(obj, "a")).toEqual(true);
  });

  // Given an object with properties
  // When passed to contains with a non-existent property name
  // Then it should return false
  test("contains returns false for non-existent property", () => {
    const obj = { a: 1, b: 2 };
    expect(contains(obj, "c")).toEqual(false);
  });
  // Given invalid parameters like an array
  // When passed to contains
  // Then it should return false or throw an error
  test("contains returns false for invalid parameters", () => {
    const arr = [1, 2, 3];
    expect(contains(arr, "a")).toEqual(false);
  });

  test("contains returns false for arrays, even if the index exists", () => {
    const arr = ["a", "b", "c"];
    expect(contains(arr, "0")).toEqual(false);
  });

  test("contains returns false for undefined", () => {
    expect(contains(undefined, "a")).toEqual(false);
    expect(contains(null, "a")).toEqual(false);
  });

  //given a string
  //when passed to contains
  //then it should return false as strings are not objects
  test("contains returns false for strings", () => {
    expect(contains("abc", "0")).toEqual(false);
  });
});
