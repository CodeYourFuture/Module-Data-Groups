const tally = require("./tally.js");

/**
 * tally array
 *
 * In this task, you'll need to implement a function called tally
 * that will take a list of items and count the frequency of each item
 * in an array
 *
 * For example:
 *
 * tally(['a']), target output: { a: 1 }
 * tally(['a', 'a', 'a']), target output: { a: 3 }
 * tally(['a', 'a', 'b', 'c']), target output: { a : 2, b: 1, c: 1 }
 */

// Acceptance criteria:

// Given a function called tally
// When passed an array of items
// Then it should return an object containing the count for each unique item

// Given an empty array
// When passed to tally
// Then it should return an empty object
test.todo("tally on an empty array returns an empty object");

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error

const tally = require("./tally.js");

describe("tally()", () => {
  test("counts frequency of each unique item", () => {
    const result = tally(["a", "a", "b", "c"]);
    expect(result).toEqual({ a: 2, b: 1, c: 1 });
  });
  test("returns an empty object when given an empty array", () => {
    expect(tally([])).toEqual({});
  });

  test("counts a single item correctly", () => {
    expect(tally(["x"])).toEqual({ x: 1 });
  });

  test("throws an error when input is not an array", () => {
    expect(() => tally("hello")).toThrow(Error);
    expect(() => tally(123)).toThrow(Error);
    expect(() => tally({})).toThrow(Error);
    expect(() => tally(null)).toThrow(Error);
  });
});

