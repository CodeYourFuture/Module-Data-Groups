//const tally = require("./tally.js");

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
//test.todo("tally on an empty array returns an empty object");

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error


//answer
const tally = require("./tally.js");

describe("tally", () => {
  test("tally on an empty array returns an empty object", () => {
    expect(tally([])).toEqual({});
  });

  test("returns counts for each unique item in an array with duplicate items", () => {
    expect(tally(["a", "a", "b", "c"])).toEqual({
      a: 2,
      b: 1,
      c: 1,
    });
  });

  test("returns counts for a single item array", () => {
    expect(tally(["a"])).toEqual({
      a: 1,
    });
  });

  test("handles numbers in the array", () => {
    expect(tally([1, 2, 2, 3, 3, 3])).toEqual({
      1: 1,
      2: 2,
      3: 3,
    });
  });

  test("throws an error for invalid input like a string", () => {
    expect(() => tally("invalid input")).toThrow("Input must be an array");
  });

  test("handles an array with mixed types", () => {
    expect(tally([1, "a", 1, "a", "b"])).toEqual({
      1: 2,
      a: 2,
      b: 1,
    });
  });

  test("handles special characters", () => {
    expect(tally(["!", "!", "?", "a"])).toEqual({
      "!": 2,
      "?": 1,
      a: 1,
    });
  });
});
