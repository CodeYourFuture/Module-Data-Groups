const tally = require("./tally");

describe("tally function", () => {
  test("tally on an empty array returns an empty object", () => {
    expect(tally([])).toEqual({});
  });

  test("tally on an array with duplicate items returns counts for each unique item", () => {
    expect(tally(['a', 'a', 'a'])).toEqual({ 'a': 3 });
    expect(tally(['a', 'b', 'b', 'c', 'c', 'c'])).toEqual({ 'a': 1, 'b': 2, 'c': 3 });
  });

  test("tally on an array with unique items returns 1 for each item", () => {
    expect(tally(['a', 'b', 'c'])).toEqual({ 'a': 1, 'b': 1, 'c': 1 });
  });

  test("tally on an array with non-string items", () => {
    expect(tally([1, 1, 2, 2, 2, 3])).toEqual({ '1': 2, '2': 3, '3': 1 });
    expect(tally([true, false, true, true])).toEqual({ 'true': 3, 'false': 1 });
  });

  test("tally on an invalid input like a string throws an error", () => {
    expect(() => tally("a")).toThrow("Input must be an array.");
  });

  test("tally on an invalid input like a number throws an error", () => {
    expect(() => tally(123)).toThrow("Input must be an array.");
  });

  test("tally on an invalid input like an object throws an error", () => {
    expect(() => tally({})).toThrow("Input must be an array.");
  });
});
