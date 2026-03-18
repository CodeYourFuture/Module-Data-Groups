const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({a: 1, b: 2}, 'a') // returns true
as the object contains a key of 'a'


E.g. contains({a: 1, b: 2}, 'c') // returns false
as the object doesn't contains a key of 'c'
*/

describe("containsProperty", () => {
  // Given a contains function
  // When passed an object and a property name
  // Then it should return true if the object contains the property, false otherwise
  [
    { input: { a: 1, b: 2 }, property: "a", expected: true },
    { input: { a: 1, b: 2 }, property: "c", expected: false },
    { input: { a: 1, b: 2, sdk: 28299 }, property: "what", expected: false },
  ].forEach(({ input, property, expected }) =>
    it(`Should return true if the object ${input} contains the property ${property} otherwise false`, () =>
      expect(contains(input, property)).toEqual(expected))
  );

  // Given an empty object
  // When passed to contains
  // Then it should return false
  [
    { input: {}, property: "a", expected: false },
    { input: {}, property: "", expected: false },
    { input: {}, property: null, expected: false },
  ].forEach(({ input, property, expected }) =>
    it(`Should return false if the object ${input} is empty`, () =>
      expect(contains(input, property)).toEqual(expected))
  );

  // Given an object with properties
  // When passed to contains with an existing property name
  // Then it should return true
  [
    { input: { a: 1, dog: 2 }, property: "dog", expected: true },
    {
      input: { a: 1, b: 2, property3: "here you go" },
      property: "property3",
      expected: true,
    },
    { input: { a: 1, b: 2, sdk: 28299 }, property: "sdk", expected: true },
  ].forEach(({ input, property, expected }) =>
    it(`Should return true if the object ${input} contains the property ${property}`, () =>
      expect(contains(input, property)).toEqual(expected))
  );

  // Given an object with properties
  // When passed to contains with a non-existent property name
  // Then it should return false
  [
    { input: { a: 1, dog: 2 }, property: "cat", expected: false },
    {
      input: { a: 1, b: 2, property3: "here you go" },
      property: "",
      expected: false,
    },
    {
      input: { a: 1, b: 2, thatProperty: 28299 },
      property: "",
      expected: false,
    },
  ].forEach(({ input, property, expected }) =>
    it(`Should return false if the object ${input} doesn't contain the property ${property}`, () =>
      expect(contains(input, property)).toEqual(expected))
  );

  // Given invalid parameters like an array
  // When passed to contains
  // Then it should return false or throw an error
  [
    { input: [1], property: "a", expected: true },
    { input: null, property: "c", expected: false },
    { input: undefined, property: "what", expected: false },
    { input: [1, 2, 3], property: "what", expected: false },
  ].forEach(({ input, property, expected }) =>
    it(`Should return false as ${input} is not an object`, () =>
      expect(() => contains(input, property)).toThrow(
        "It is not a valid object"
      ))
  );
});
