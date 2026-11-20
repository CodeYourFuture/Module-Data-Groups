// Don't change this file. The tests check your refactored calculateMode still behaves the same.

const calculateMode = require("./mode.js");

// Acceptance criteria for calculateMode function

// Given an array of numbers
// When calculateMode is called on the array
// Then it should return the number that appears most frequently in the array

// E.g. calculateMode([2, 4, 1, 2, 3, 2, 1]) returns 2

// Given an empty array
// When calculateMode is called on the array
// Then it should throw Error("calculateMode requires a non-empty array")

// Given something that isn't an array of numbers, e.g. "banana" or [1, "2", 3]
// When calculateMode is called on it
// Then it should throw Error("calculateMode requires an array of numbers")

describe("calculateMode()", () => {
  test("returns the most frequent number in an array", () => {
    const nums = [2, 4, 1, 2, 3, 2, 1];

    expect(calculateMode(nums)).toEqual(2);
  });

  test("returns the first mode in case of multiple modes", () => {
    const nums = [1, 2, 2, 3, 3];

    expect(calculateMode(nums)).toEqual(2);
  });

  test("throws when the array contains a non-number", () => {
    expect(() => calculateMode([1, 3, "2", 2, 3, null])).toThrow(
      new Error("calculateMode requires an array of numbers")
    );
  });

  test("throws when given something that isn't an array", () => {
    expect(() => calculateMode("banana")).toThrow(
      new Error("calculateMode requires an array of numbers")
    );
  });

  test("throws when given no argument", () => {
    expect(() => calculateMode()).toThrow(
      new Error("calculateMode requires an array of numbers")
    );
  });

  test("throws when given an empty array", () => {
    expect(() => calculateMode([])).toThrow(
      new Error("calculateMode requires a non-empty array")
    );
  });
});
