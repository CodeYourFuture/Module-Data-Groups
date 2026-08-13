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
test("", () => {
  const input = ["hey", "hi", "hello", "hi", "word", "picnic", "book"];
  const expected = {
    hey: 1,
    hi: 2,
    hello: 1,
    word: 1,
    picnic: 1,
    book: 1,
  };
  const result = tally(input);
  expect(result).toEqual(expected);
});
// Given an empty array
// When passed to tally
// Then it should return an empty object
test("tally on an empty array returns an empty object", () => {
  const input = [];
  const expected = {};
  const result = tally(input);
  expect(result).toEqual(expected);
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
//Test on line 22 covers this

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
test.each([undefined, null, {}, "hello", 123, true])(
  "throws when input is %p",
  (input) => {
    expect(() => {
      tally(input).toThrow("Invalid data type entered");
    });
  }
);
