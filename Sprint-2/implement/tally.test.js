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
test("should return an object containing the count for each unique item", () => {
  const array = ["a"];
  const countArray = tally(array);
  expect(countArray).toEqual({ a: 1 });
});

// Given an empty array
// When passed to tally
// Then it should return an empty object
test.todo("tally on an empty array returns an empty object");
test(" should return an empty object when empty array is given", () => {
  expect(tally([])).toEqual({});
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test("should return an object containing the count for each unique item", () => {
  const array = ["a", "a", "a"];
  const countArray = tally(array);
  expect(countArray).toEqual({ a: 3 });
});
test("should return an object containing the count for each unique item", () => {
  const array = ["a", "a", "b", "b", "b", "c"];
  const countArray = tally(array);
  expect(countArray).toEqual({ a: 2, b: 3, c: 1 });
});

// Given an invalid input like a string, a number, or no argument at all
// When passed to tally
// Then it should throw Error("tally requires an array")
test("should throw an error when given invalid input:string", () => {
  expect(() => tally("a")).toThrow("tally rquires an input");
});
test("should throw an error when given invalid input:number", () => {
  expect(() => tally(5)).toThrow("tally rquires an input");
});
test("should throw an error when given invalid input: no argument", () => {
  expect(() => tally()).toThrow("tally rquires an input");
});
