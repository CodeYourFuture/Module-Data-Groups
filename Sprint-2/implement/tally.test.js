const tally = require("./tally.js");

describe("tally", () => {
  test("tally on an empty array returns an empty object", () => {
    expect(tally([])).toEqual({});
  });

  test("tally with single item returns object with count of 1", () => {
    expect(tally(["a"])).toEqual({ a: 1 });
  });

  test("tally with multiple  items returns counts for each", () => {
    expect(tally(["a", "a", "a"])).toEqual({ a: 3 });
    expect(tally(["a", "a", "b", "c"])).toEqual({ a: 2, b: 1, c: 1 });
    expect(tally(["x", "y", "x", "z", "y", "x"])).toEqual({ x: 3, y: 2, z: 1 });
  });

  test("tally with invalid input throws an error", () => {
    expect(() => tally("invalid")).toThrow();
    expect(() => tally(null)).toThrow();
    expect(() => tally(undefined)).toThrow();
  });

  test("tally returns an object with no inherited properties", () => {
    const result = tally(["a", "b", "a"]);
    expect(Object.getPrototypeOf(result)).toBeNull();
  });
});
