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
test.todo("tally on an empty array returns an empty object");

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error


test("Given an empty array, when passed to tally, then it should return an empty object", () => {
    expect(tally([])).toEqual({});
  });

  test("Given an array with duplicate items, when passed to tally, then it should return counts for each unique item", () => {
    expect(tally(['a'])).toEqual({ a: 1 });
    expect(tally(['a', 'a', 'a'])).toEqual({ a: 3 });
    expect(tally(['a', 'a', 'b', 'c'])).toEqual({ a: 2, b: 1, c: 1 });
    expect(tally([1, 2, 2, 3, 1, 1, 4])).toEqual({ 1: 3, 2: 2, 3: 1, 4: 1 });
    expect(tally([true, false, true, true])).toEqual({ true: 3, false: 1 });
  });

  test("Given an array with different data types, when passed to tally, then it should return counts for each unique item", () => {
    expect(tally(['a', 1, 'b', true, 1, 'a', false])).toEqual({ 'a': 2, 1: 2, 'b': 1, true: 1, false: 1 });
  });



