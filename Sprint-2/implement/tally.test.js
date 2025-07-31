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
describe("take a list of items and count the frequency of each item", () => {
  [
    { input: ["a"], expected: { a: 1 }},
    { input: ["a", "a", "a"], expected:  { a: 3 } },
    { input: ["a", "a", "b", "c"], expected: { a : 2, b: 1, c: 1 }},
  ].forEach(({ input, expected }) =>
    it(`returns an object`, () => expect(tally(input)).toEqual(expected))
  );
});

// Given an empty array
// When passed to tally
// Then it should return an empty object
it("tally on an empty array returns an empty object", () => {
    const input = [];
    const result = tally(input);
    expect(result).toEqual({});
  });

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
describe("take a list of items and count the frequency of duplicate items", () => {
  [
    { input: ["a"], expected: { a: 1 }},
    { input: ["a", "b", "c", "a", "b", "c"], expected:  { a: 2, b:2, c:2 } },
    { input: ["a", "a", "b", "c","a", "a", "b", "c"], expected: { a : 4, b: 2, c: 2 }},
    { input: ["apple", "banana", "apple", "orange", "banana", "apple"], expected: { apple: 3, banana: 2, orange: 1 } },
  ].forEach(({ input, expected }) =>
    it(`returns correct counts for input which are duplicated`, () => expect(tally(input)).toEqual(expected))
  );
});
// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
describe("an invalid input like string, number, boolean or object", () => {
  [
    { input: 5 },
    { input: "Hello" },
    { input: true },
    { input: { a: 2, b: 1, c: 1 } },
  ].forEach(({ input }) =>
    it(`tally should throw an error for input is not array }`, () =>
      expect(() => tally(input)).toThrow("Input is not valid."))
  );
});