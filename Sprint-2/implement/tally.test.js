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
test("should return the frequency of each element of the array in an object", () => {
  expect(tally(["a", "a", "c", "b", "c", "b", "b"])).toStrictEqual({
    a: 2,
    b: 3,
    c: 2,
  });
  expect(tally(["a"])).toStrictEqual({ a: 1 });
  expect(tally(["a", "a", "a"])).toStrictEqual({ a: 3 });
  expect(tally(["a", "a", "b", "c"])).toStrictEqual({ a: 2, b: 1, c: 1 });
});

// Given an empty array
// When passed to tally
// Then it should return an empty object
//test.todo("tally on an empty array returns an empty object");
test("should return empty object with empty array", () => {
  expect(tally([])).toStrictEqual({});
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
test("return error, as the input is not an array", () => {
  expect(tally(4353636)).toBe("Error! Input must be an array");
  expect(tally("Hello ")).toBe("Error! Input must be an array");
  expect(tally({ a: 1, b: 2 })).toBe("Error! Input must be an array");
  
});
