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
test("should return an object containing the count for each unique item", () => {
  // Given a function called tally
  // When passed an array of items
  // Then it should return an object containing the count for each unique item

  expect(tally(["a", "b", "c", "d", 2, "edak"])).toEqual({
    a: 1,
    b: 1,
    c: 1,
    d: 1,
    2: 1,
    edak: 1,
  });
});

test("tally on an empty array returns an empty object", () => {
  // Given an empty array
  // When passed to tally
  // Then it should return an empty object
  expect(tally([])).toEqual({});
});

test("it should return counts for each unique item", () => {
  // Given an array with duplicate items
  // When passed to tally
  // Then it should return counts for each unique item
  expect(tally(["a", "a", "b", "c"])).toEqual({ a: 2, b: 1, c: 1 });
});

test("it should throw an error for invalid input", () => {
  // Given an invalid input like a string
  // When passed to tally
  // Then it should throw an error
  expect(() => tally("ggga")).toThrow("Invalid input");
});
