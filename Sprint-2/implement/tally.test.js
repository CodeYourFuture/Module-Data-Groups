const tally = require("./tally");

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
test("counts each unique item in the array", () => {
  expect(
    tally(["apple", "banana", "apple", "orange", "banana", "apple"])
  ).toEqual({
    apple: 3,
    banana: 2,
    orange: 1,
  });
});
// Given an empty array
// When passed to tally
// Then it should return an empty object

test("tally on an empty array returns an empty object", () => {
  expect(tally([])).toEqual({});
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test("handles array with duplicate items", () => {
  expect(tally(["a", "a", "b", "c", "b", "a"])).toEqual({
    a: 3,
    b: 2,
    c: 1,
  });
});
// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
test("throws an error for invalid input", () => {
  expect(() => tally("invalid input")).toThrow(
    "Invalid input: expected an array"
  );
  expect(() => tally(123)).toThrow("Invalid input: expected an array");
  expect(() => tally({})).toThrow("Invalid input: expected an array");
});
