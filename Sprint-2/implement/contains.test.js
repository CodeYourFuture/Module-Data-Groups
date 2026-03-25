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

describe("contains", () => {
  test.each([
    // Given a contains function
    // When passed an object and a property name
    // Then it should return true if the object contains the property, false otherwise

    // Given an empty object
    // When passed to contains
    // Then it should return false

    { input: [{}, "a"], expected: false },

    // Given an object with properties
    // When passed to contains with an existing property name
    // Then it should return true

    { input: [{ a: 1, b: 2 }, "a"], expected: true },

    // Given an object with properties
    // When passed to contains with a non-existent property name
    // Then it should return false

    { input: [{ a: 1, b: 2 }, "c"], expected: false },

    // Given invalid parameters like an array
    // When passed to contains
    // Then it should return false or throw an error
  ])("finds object contains properties", ({ input, expected }) => {
    expect(contains(...input)).toBe(expected);
  });
  test("throws error when input is an array", () => {
    expect(() => contains(["a", "b"], "a")).toThrow(
      "Input must not be an array"
    );
  });
});
