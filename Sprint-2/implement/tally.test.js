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
 test("tally on an empty array returns an empty object", () => {
    expect(tally([])).toEqual({});
  });

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item

test("counts a single item correctly", () => {
    expect(tally(['a'])).toEqual({ a: 1 });
});

  // Repeated items
test("counts repeated items correctly", () => {
    expect(tally(['a', 'a', 'a'])).toEqual({ a: 3 });
});

  // Mixed items
test("counts multiple different items", () => {
    expect(tally(['a', 'a', 'b', 'c'])).toEqual({
      a: 2,
      b: 1,
      c: 1
    });
});


test("tally on single, repeated or duplicate items return counts for each unique item ", () => {
  expect(tally([ 2,"bee",2,"apple","apple",2, "banana"])).toEqual({
    2: 3,
    bee: 1,
    apple: 2,
    banana: 1
  });
});

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
test("throws error for string input", () => {
  expect(() => tally("morning"))
    .toThrow("Invalid input: expected an array");
});

test("throws error for number input", () => {
  expect(() => tally(123))
    .toThrow();
});
