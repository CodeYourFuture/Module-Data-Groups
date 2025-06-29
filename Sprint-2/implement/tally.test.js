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
describe("edge cases of the tally function", () => {
  test("When passed an array of items as a parameter into tally", () => {
    const currentOutput = tally([1, 2, 4, 5, 6]);
    const targetOutput = { 1: 1, 2: 1, 4: 1, 5: 1, 6: 1 };
    expect(currentOutput).toEqual(targetOutput);
  });
});

// Given an empty array
// When passed to tally
// Then it should return an empty object
describe("edge cases of the tally function", () => {
  test("tally on an empty array returns an empty object", () => {
    const currentOutput = tally([]);
    const targetOutput = {};
    expect(currentOutput).toEqual(targetOutput);
  });
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
describe("edge cases of the tally function", () => {
  test("When passed an array with duplicate items of items as a parameter into tally", () => {
    const currentOutput = tally([1, 2, 2, 6, 6, 6, 1]);
    const targetOutput = { 1: 2, 2: 2, 6: 3 };
    expect(currentOutput).toEqual(targetOutput);
  });
});

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
describe("edge cases of the tally function", () => {
  test("tally gets not an array then it trow an error", () => {
    // const currentOutput = tally("string");
    // const targetOutput = Error;
    expect(() => tally("string")).toThrow("This is not an array");
  });
});
