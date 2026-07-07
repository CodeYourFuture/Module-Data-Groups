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
//test.todo("tally on an empty array returns an empty object");

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error

describe("tally", () => {
  test("Return an empty object for empty array input", () => {
    expect(tally([])).toEqual({});
  });
  test("Return an object containing the count for each unique item", () => {
    expect(tally(["cat"])).toEqual({ cat: 1 });
    expect(tally(["cat", "dog", "rat", "duck"])).toEqual({
      cat: 1,
      dog: 1,
      rat: 1,
      duck: 1,
    });
  });
  test("Return an object containing the count for duplicate items", () => {
    expect(tally(["cat", "dog", "rat", "cat", "duck", "dog"])).toEqual({
      cat: 2,
      dog: 2,
      rat: 1,
      duck: 1,
    });
  });
  test("Throw an error for invalid input", () => {
    expect(() => tally("Hello World")).toThrow("Invalid input");
    expect(() => tally({ cat: 3 })).toThrow("Invalid input");
    expect(() => tally(null)).toThrow("Invalid input");
  });
});
