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


// Given a function called tally
// When passed an array of items
// Then it should return an object containing the count for each unique item
describe("tally on an array of items returns counts for each unique item", () => {
  test("tally on an empty array returns an empty object", () => {
    expect(tally([])).toEqual({});
  });

  test("tally on an array with duplicate items returns counts for each unique item", () => {
    expect(tally(["a"])).toEqual({ a: 1 });
    expect(tally(["a", "a", "a"])).toEqual({ a: 3 });
    expect(tally(["a", "a", "b", "c"])).toEqual({ a: 2, b: 1, c: 1 });
  });

  test("tally throws an error for invalid input", () => {
    expect(() => tally("not an array")).toThrow();
  });
});