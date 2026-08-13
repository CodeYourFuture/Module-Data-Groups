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
  test("Given an array of items, returns counts for each unique item", () => {
    const input = ["apple", "banana", "apple", "orange", "banana", "apple"];
    const expected = { apple: 3, banana: 2, orange: 1 };
    expect(tally(input)).toEqual(expected);
  });
  // Given an empty array
  // When passed to tally
  // Then it should return an empty object
  test("tally on an empty array returns an empty object", () => {
    expect(tally([])).toEqual({});
  });

  // Given an array with duplicate items
  // When passed to tally
  // Then it should return counts for each unique item
  test("Given an array with duplicate items, returns counts for each unique item", () => {
    const input = ["x", "x", "y", "x", "y"];
    const expected = { x: 3, y: 2 };
    expect(tally(input)).toEqual(expected);
  });
  // Given an invalid input like a string
  // When passed to tally
  // Then it should throw an error
  test("Given an array containing an invalid item, throws an Error", () => {
    expect(() => tally(["valid", "hello world"])).toThrow(
      "Please Enter Valid Input!"
    );
  });
});
