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

// Case 1:  Empty array

test("tally on an empty array returns an empty object", () => {
  expect(tally([])).toEqual({});
});

// Case 2: Array with duplicate items

test("tally with duplicate items", () => {
  expect(tally(["a", "a", "a"])).toEqual({ a: 3 });
  expect(tally(["a", "a", "b", "c"])).toEqual({ a: 2, b: 1, c: 1 });
});

// Cas 3: Array of arrays

test("tally handles arrays as items", () => {
  const input = [
    [1, 2],
    [1, 2],
    [3, 4],
  ];
  const output = {
    "[1,2]": 2,
    "[3,4]": 1,
  };
  expect(tally(input)).toEqual(output);
});

// case 4: Array of objects

test("tally handles objects as items", () => {
  const input = [{ a: 1 }, { a: 1 }, { b: 2 }];
  const output = {
    '{"a":1}': 2,
    '{"b":2}': 1,
  };
  expect(tally(input)).toEqual(output);
});

// Case 5: Mixed array of arrays and objects

test("tally handles mixed arrays and objects", () => {
  const input = [[1, 2], { a: 1 }, [1, 2], { a: 1 }, { b: 2 }];
  const output = {
    "[1,2]": 2,
    '{"a":1}': 2,
    '{"b":2}': 1,
  };
  expect(tally(input)).toEqual(output);
});

// Case 6:  Mixed types (numbers, strings, booleans)

test("tally handles numbers, strings, and booleans", () => {
  const input = [1, "1", true, true, false];
  const output = { 1: 2, true: 2, false: 1 };
  expect(tally(input)).toEqual(output);
});

// Case 7: Array with null and undefined

test("tally handles null and undefined values", () => {
  const input = [null, null, undefined];
  const output = { null: 2, undefined: 1 };
  expect(tally(input)).toEqual(output);
});

// Case 8: Invalid input: non-array

test("tally throws error if input is not an array", () => {
  expect(() => tally("not an array")).toThrow("Input must be an array");
  expect(() => tally(123)).toThrow("Input must be an array");
  expect(() => tally({ a: 1 })).toThrow("Input must be an array");
  expect(() => tally(null)).toThrow("Input must be an array");
  expect(() => tally(undefined)).toThrow("Input must be an array");
});

// In tally.test.js test cases added and passed.
