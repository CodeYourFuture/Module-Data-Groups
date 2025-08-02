// given a function that inverts the keys and values of an object
// write tests to ensure it works correctly

const invert = require("./invert");

// Given an object with valid key-value pairs
// when invert is called with this object
// then it should return an object with the keys and values swapped

describe("invert function", () => {
  test.each([
    [{ a: 1 }, { 1: "a" }],
    [
      { x: 10, y: 20 },
      { 10: "x", 20: "y" },
    ],
    [{}, {}],
    [
      { a: 1, b: "x", c: true },
      { 1: "a", x: "b", true: "c" },
    ],
  ])("Given %j, it returns %j", (input, expected) => {
    expect(invert(input)).toEqual(expected);
  });
});

// Given an non valid input like a string or number, etc
// when invert is called with this input
// then it should throw an error
describe("invert function", () => {
  test.each([null, "", undefined, 42, true, false, []])(
    "Given %j, it throws an error",
    (obj) => {
      expect(() => invert(obj)).toThrow("Input must be a non-null object");
    }
  );
});
