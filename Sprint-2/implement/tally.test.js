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
test("returns an object containing the count for each unique item in the array", () => {
  [
    { input: ["a"], expected: { a: 1 } },
    { input: ["a", "b", "c"], expected: { a: 1, b: 1, c: 1 } },
    { input: ["a", 1, 3, 5], expected: { a: 1, 1: 1, 3: 1, 5: 1 } },
    {
      input: ["", " ", "what", 10],
      expected: { "": 1, " ": 1, what: 1, 10: 1 },
    },
  ].forEach(({ input, expected }) => expect(tally(input)).toEqual(expected));
});

// Given an empty array
// When passed to tally
// Then it should return an empty object
test("returns an empty object when an empty array is passed", () => {
  expect(tally([])).toEqual({});
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test("returns an object containing the count for each unique item in the array", () => {
  [
    { input: ["a"], expected: { a: 1 } },
    { input: ["a", "a", "a"], expected: { a: 3 } },
    { input: ["a", "a", "b", "c"], expected: { a: 2, b: 1, c: 1 } },
    {
      input: [1, 1, "q", 1, "q", 5, "javascript", "what", "javascript"],
      expected: { 1: 3, q: 2, 5: 1, javascript: 2, what: 1 },
    },
    {
      input: [0, "", 0, 5, "", "", "not_empty", " ", " "],
      expected: { 0: 2, "": 3, 5: 1, not_empty: 1, " ": 2 },
    },
  ].forEach(({ input, expected }) => expect(tally(input)).toEqual(expected));
});

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
["just a string", 123, null, undefined, {}].forEach((input) =>
  test(`Should throw an error as ${input} is not a valid input`, () =>
    expect(() => tally(input)).toThrow("Not an array"))
);
