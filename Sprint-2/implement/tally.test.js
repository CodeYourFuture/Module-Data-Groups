const tally = require("./tally.js");
// Test case for empty array
test('tally on an empty array returns an empty object', () => {
    expect(tally([])).toEqual({});
  });
  
  // Test case for an array with duplicate items
  test('tally counts frequency of unique items', () => {
    expect(tally(['a', 'a', 'b', 'c'])).toEqual({ a: 2, b: 1, c: 1 });
  });
  
  // Test case for a single item
  test('tally on a single item', () => {
    expect(tally(['a'])).toEqual({ a: 1 });
  });
  
  // Test case for invalid input (non-array)
  test('tally throws an error when input is not an array', () => {
    expect(() => tally('invalid input')).toThrow('Input must be an array');
  });
  

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
// Test case for empty array
