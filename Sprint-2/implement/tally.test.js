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
test.todo(
  "tally on an array of items returns object containing count for each unique item"
);

// Given an empty array
// When passed to tally
// Then it should return an empty object
test.todo("tally on an empty array returns an empty object");

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test.todo(
  "tally on an array of duplicate items returns object containing count for each unique item"
);

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
test.todo(
  "tally on an array with invalid input like a string, should throw an error"
);

describe("tally", () => {
  test("returns an object containing the count for each unique item", () => {
    expect(tally(["a"])).toEqual({ a: 1 });
    expect(tally(["a", "b", "c"])).toEqual({ a: 1, b: 1, c: 1 });
  });

  test("returns an empty object when given an empty array", () => {
    expect(tally([])).toEqual({});
  });

  test("returns correct counts for an array with duplicate items", () => {
    expect(tally(["apple", "banana", "apple", "orange", "banana"])).toEqual({
      apple: 2,
      banana: 2,
      orange: 1,
    });
    expect(
      tally(["a", "b", "banana", "apple", "orange", "banana", "apple"])
    ).toEqual({
      a: 1,
      b: 1,
      apple: 2,
      banana: 2,
      orange: 1,
    });
    expect(tally(["a", "a", "b", "c"])).toEqual({ a: 2, b: 1, c: 1 });
  });

  test("throws an error when input is not an array", () => {
    expect(() => tally(123)).toThrow();
    expect(() => tally({})).toThrow();
    expect(() => tally(null)).toThrow();
    expect(() => tally(apple)).toThrow();
  });
});
