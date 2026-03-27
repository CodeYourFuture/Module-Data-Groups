const tally = require("./tally.js");

describe("tally", () => {
  test("tally on an empty array returns an empty object", () => {
    expect(tally([])).toEqual({});
  });

  test("counts duplicate items correctly", () => {
    expect(tally(["a", "a", "b", "c"])).toEqual({
      a: 2,
      b: 1,
      c: 1,
    });
  });

  test("counts single item array", () => {
    expect(tally(["a"])).toEqual({ a: 1 });
  });

  test("counts all same items", () => {
    expect(tally(["a", "a", "a"])).toEqual({ a: 3 });
  });

  test("throws error for invalid input (string)", () => {
    expect(() => tally("abc")).toThrow("Input must be an array");
  });

  test("throws error for invalid input (null)", () => {
    expect(() => tally(null)).toThrow("Input must be an array");
  });
});
