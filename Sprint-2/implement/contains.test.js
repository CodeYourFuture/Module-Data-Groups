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
describe("containsKey", () => {
  test("given a contains function, should return true if the object contains the property, false otherwise", () => {
    const currentOutput = contains({ name: "John", surname: "White" }, "surname");
    const targetOutput = true;

    expect(currentOutput).toBe(targetOutput);
  });

  // Given an empty object
  // When passed to contains
  // Then it should return false
  test("contains on empty object returns false", () => {
    const currentOutput = contains({}, "a");
    const targetOutput = false;

    expect(currentOutput).toBe(targetOutput);
  });

  // Given an object with properties
  // When passed to contains with an existing property name
  // Then it should return true
  test("should returns true when the object contains the property", () => {
    const currentOutput = contains({ a: 1, b: 2, c: 3 }, "c");
    const targetOutput = true;

    expect(currentOutput).toBe(targetOutput);
  });

  // Given an object with properties
  // When passed to contains with a non-existent property name
  // Then it should return false
  test("should returns false when the object doesn't exist in the property", () => {
    const currentOutput = contains({ a: 1, b: 2, c: 3 }, "d");
    const targetOutput = false;

    expect(currentOutput).toBe(targetOutput);
  });

  // Given invalid parameters like an array
  // When passed to contains
  // Then it should return false or throw an error
  [
    { input: [[], "a"], expected: false },
    { input: [null, "a"], expected: false },
    { input: [undefined, "a"], expected: false },
    { input: [123, "a"], expected: false },
    { input: ["string", "a"], expected: false },
    { input: [[5, 5], 1], expected: true},
  ].forEach(({ input, expected }) => {
    it(`returns ${expected} when called with ${JSON.stringify(
      input[0]
    )} and key '${input[1]}'`, () => {
      expect(contains(input[0], input[1])).toBe(expected);
    });
  });
});
