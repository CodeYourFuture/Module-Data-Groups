const invert = require("./invert.js");

// Acceptance Criteria:
// Given an object with key-value pairs
// When invert is called
// Then it should return a new object with keys and values swapped

describe("invert()", () => {
  test("inverts a simple object with unique values", () => {
    const input = { a: 1, b: 2 };
    const expected = { "1": "a", "2": "b" };
    expect(invert(input)).toEqual(expected);
  });

  test("returns an empty object when input is empty", () => {
    const input = {};
    const expected = {};
    expect(invert(input)).toEqual(expected);
  });

  test("overwrites duplicate values in object", () => {
    const input = { a: 1, b: 1 };
    const expected = { "1": "b" }; // last key with same value wins
    expect(invert(input)).toEqual(expected);
  });

  test("handles string values and numbers as keys", () => {
    const input = { x: "hello", y: "world" };
    const expected = { hello: "x", world: "y" };
    expect(invert(input)).toEqual(expected);
  });
});
