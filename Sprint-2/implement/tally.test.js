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
describe("tally array", () => {
  test("It will return an empty object when param is an array and empty", () => {
    const array = [];
    const currentOutput = tally(array);
    const targetOutput = {};
    expect(currentOutput).toEqual(targetOutput);
  });

  test("It will return the counts for each unique item when array has duplicate items", () => {
    const array = ["a", "a", "b", "c"];
    const currentOutput = tally(array);
    const targetOutput = { a: 2, b: 1, c: 1 };
    expect(currentOutput).toEqual(targetOutput);
  });

  test("Throw an error when given an invalid param", () => {
    const array = "hello, how are you?";
    // const currentOutput = tally(array);
    const targetOutput = "param is not valid";
    expect(() => {
      tally(array);
    }).toThrow(targetOutput);
  });
});

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
