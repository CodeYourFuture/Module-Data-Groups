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

describe("tally", () => {
  // Given an empty array
  // When passed to tally
  // Then it should return an empty object
  it("tally on an empty array returns an empty object", () => {
    const array = [];
    expect(tally(array)).toEqual({});
  });

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item

it("tally returns counts for each unique item", () => {
    expect(tally(["a", "a", "b", "c"])).toEqual({ a: 2, b: 1, c: 1 });
    expect(tally(["toString", "toString"])).toEqual({ toString: 2 });
  });



// Given an invalid input like a string
// When passed to tally
// Then it should throw an error

it("tally on an empty array returns an empty object", () => {
    const array = "string";
    expect(() => {
      tally(array);
    }).toThrow("Invalid array");
  });
});