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
test("given an array passed to tally function, returns an object with a count for each unique item in the array", () => {
  const input = ["a", "b", "c"];
  expect(tally(input)).toEqual({ a: 1, b: 1, c: 1 });
});

// Given an empty array
// When passed to tally
// Then it should return an empty object
test("given an empty array passed to tally function, returns an empty object", () => {
  const input = [];
  expect(tally(input)).toEqual({});
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
describe("given an array with duplicate items", () => {
  test.each([
    [["a", "a", "b", "c"], { a: 2, b: 1, c: 1 }],
    [
      [null, undefined, false, null, true],
      { null: 2, undefined: 1, false: 1, true: 1 },
    ],
    [[1, 2, 2, 3, 1, 1], { 1: 3, 2: 2, 3: 1 }],
    [[{}, {}, []], { "[object Object]": 2, "": 1 }],
    [["", "", "a"], { "": 2, a: 1 }],
  ])("Given %j, it returns %j", (input, expected) => {
    expect(tally(input)).toEqual(expected);
  });
});

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error

describe("given an invalid input to the tally function", () => {
  test.each(["a, b, c, a", 123, null, undefined, { a: 1, b: 2 }, true, false])(
    "Given %j, it throws an error",
    (arr) => {
      expect(() => tally(arr)).toThrow("Input must be a valid array");
    }
  );
});
