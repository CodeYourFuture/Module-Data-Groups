const tally = require("./tally.js");

describe("tally()", () => {
  test("returns an empty object for an empty array", () => {
    expect(tally([])).toEqual({});
  });

  test("counts a single item", () => {
    expect(tally(["a"])).toEqual({ a: 1 });
  });

  test("counts repeated items", () => {
    expect(tally(["a", "a", "a"])).toEqual({ a: 3 });
  });

  test("counts multiple different items", () => {
    expect(tally(["a", "a", "b", "c"])).toEqual({
      a: 2,
      b: 1,
      c: 1,
    });
  });

  test("throws an error for invalid input", () => {
    expect(() => tally("not-an-array")).toThrow();
  });
});
