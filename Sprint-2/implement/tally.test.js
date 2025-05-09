
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
Array("tally on an empty array returns an empty object", () => {
  expect(tally([])).toEqual({});
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
Array("when given an array with duplicate items, return the counts for each unique item", () => {
  expect(tally(['a', 'a', 'b', 'c'])).toEqual({ a: 2, b: 1, c: 1 });
});
// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
Array("when given an invalid input throw an error", () => {
  expect(() => tally(5645346346)).toThrow("Error! Please enter an array as your input");
});