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

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
describe("contains", () => {
    it("throws an error when the first parameter is not an object",()=>{
        expect(()=> contains([],"a")).toThrow("Invalid input")
    });

  it("contains an empty object returns false", () => {
    expect(contains({}, "a")).toBe(false);
  });

  [
    { input: { a: 1, b: 2 }, prop: "a", expected: true },
    { input: { a: 1, b: 2 }, prop: "b", expected: true },
    { input: { a: 1, b: 2, c: 3 }, prop: "c", expected: true },
  ].forEach(({ input, prop, expected }) => {
    it(`returns true when the property exists in the given object , for object ${JSON.stringify(input)} with property "${prop}"`, () =>
      expect(contains(input, prop)).toBe(expected));
  });


  [
    { input: { a: 1, b: 2 }, prop: "c", expected: false },
    { input: { a: 1, b: 2 }, prop: "e", expected: false },
    { input: { a: 1, b: 2, c: 3 }, prop: "w", expected: false },
  ].forEach(({ input, prop, expected }) => {
    it(`returns false when the property non-existent in the given object , for object ${JSON.stringify(input)} with property "${prop}"`, () =>
      expect(contains(input, prop)).toBe(expected));
  });
});
