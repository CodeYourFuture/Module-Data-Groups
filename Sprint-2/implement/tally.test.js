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
test("An array returns a count for each unique item", () => {
  const currentOutput = tally(["a", "b", "c"]);
  const targetOutput = { a: 1, b: 1, c: 1 };
  expect(currentOutput).toEqual(targetOutput);
});

// Given an empty array
// When passed to tally
// Then it should return an empty object
test("An empty array returns an empty object", () => {
  const currentOutput = tally([]);
  const targetOutput = {};
  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test("An array with duplicate items returns counts for each unique item", () => {
  const currentOutput = tally(["a", "a", "a", "b", "c", "c"]);
  const targetOutput = { a: 3, b: 1, c: 2 };
  expect(currentOutput).toEqual(targetOutput);
});

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
test("Given an invalid input should throw an error", () => {
  const targetOutput = new Error("Not a valid input");
  expect(() => tally("a, a, a, b, c, c")).toThrow(targetOutput);
});
