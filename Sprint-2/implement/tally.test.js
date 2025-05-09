const tally = require("./tally.js");

describe("tally function", () => {
  test("tally on an empty array returns an empty object", () => {
    expect(tally([])).toEqual({});
  });

  test("tally counts unique items in an array", () => {
    expect(tally(["a", "a", "b", "c"])).toEqual({ a: 2, b: 1, c: 1 });
  });

  test("tally handles single item array", () => {
    expect(tally(["a"])).toEqual({ a: 1 });
  });

  test("tally handles multiple occurrences of the same item", () => {
    expect(tally(["a", "a", "a"])).toEqual({ a: 3 });
  });

  test("tally throws an error for invalid input (string)", () => {
    expect(() => tally("invalid")).toThrow("Input must be an array");
  });

  test("tally throws an error for invalid input (null)", () => {
    expect(() => tally(null)).toThrow("Input must be an array");
  });

  test("tally throws an error for invalid input (number)", () => {
    expect(() => tally(123)).toThrow("Input must be an array");
  });
});
