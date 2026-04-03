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

describe("contains()", () => {
  // Given an object with properties
  // When passed to contains with an existing property name
  // Then it should return true

  [{ elements: { a: 1, b: 2 }, itemKey: "a", expected: true }].forEach(
    ({ elements, itemKey, expected }) =>
      it(` should return ${expected} for key ${itemKey} in ${elements}`, () => {
        expect(contains(elements, itemKey)).toEqual(expected);
      })
  );

  // Given an empty object
  // When passed to contains
  // Then it should return false

  [{ elements: {}, itemKey: "c", expected: false }].forEach(
    ({ elements, itemKey, expected }) =>
      it(`contains on empty object returns false`, () => {
        expect(contains(elements, itemKey)).toEqual(expected);
      })
  );

  // Given an object with properties
  // When passed to contains with a non-existent property name
  // Then it should return false

  [{ elements: { a: 1, b: 2 }, itemKey: "c", expected: false }].forEach(
    ({ elements, itemKey, expected }) =>
      it(`When passed to contains with non-existing property name, should return false`, () => {
        expect(contains(elements, itemKey)).toEqual(expected);
      })
  );

  // Given invalid parameters like an array
  // When passed to contains
  // Then it should return false or throw an error

  [
    {
      elements: [3, 4, 5, "kofoworola", "Evan,"],
      itemKey: "Evan",
      expected: false,
    },
  ].forEach(({ elements, itemKey, expected }) =>
    it(`Given invalid parameters it should return false`, () => {
      expect(contains(elements, itemKey)).toEqual(expected);
    })
  );
});
