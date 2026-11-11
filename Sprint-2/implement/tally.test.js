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
describe("contains", () => {
  test("tally on an empty array returns an empty object", function () {
    const input = tally([]);
    const currentOutput = input;
    const targetOutput = {};

    expect(currentOutput).toEqual(targetOutput);
  });

  // Given a function called tally
  // When passed an array of items
  // Then it should return an object containing the count for each unique item

  test("tally on aan array of items, returns an object containing the count for each unique item", function () {
    expect(tally(["a"])).toEqual({ a: 1 });
    expect(tally(["a", "b", "c"])).toEqual({ a: 1, b: 1, c: 1 });
    expect(tally(["a", "a", "b", "c"])).toEqual({ a: 2, b: 1, c: 1 });
  });

  // Given an array with duplicate items
  // When passed to tally
  // Then it should return counts for each unique item
  test("tally with duplicate items returns counts for each unique item", function () {
    expect(tally(["a", "a"])).toEqual({ a: 2 });
    expect(tally(["a", "a", "b", "b"])).toEqual({ a: 2, b: 2 });
    expect(tally(["a", "a", "b", "b", "c", "c"])).toEqual({ a: 2, b: 2, c: 2 });
  });
  // Given an invalid input like a string, a number, or no argument at all
  // When passed to tally
  // Then it should throw Error("tally requires an array")
  it("throws when given an invalid input like a string, a number, or no argument", () => {
    expect(() => tally(123)).toThrow(new Error("tally requires an array"));
    expect(() => tally("hello")).toThrow(new Error("tally requires an array"));
    expect(() => tally()).toThrow(new Error("tally requires an array"));
  });
});
