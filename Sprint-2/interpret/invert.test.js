const invert = require("./invert.js");

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object
test("returns an inverted object", () => {
  [
    { input: { 1: "a" }, expected: { a: "1" } },
    {
      input: { name: "mehroz", job: "student" },
      expected: { mehroz: "name", student: "job" },
    },
  ].forEach(({ input, expected }) => expect(invert(input)).toEqual(expected));
});

// Given an empty object
// When passed to invert
// Then it should return an empty object
test("returns an empty object when an empty object is passed", () => {
  expect(invert({})).toEqual({});
});

// Given an invalid input like a string, array, null
// When passed to invert
// Then it should throw an error
["just a string", 123, null, undefined, [1, 2, 3], []].forEach((input) =>
  test(`Should throw an error as ${input} is not a valid object`, () =>
    expect(() => invert(input)).toThrow("Input is not a valid object"))
);
