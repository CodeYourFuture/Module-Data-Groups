const tally = require("./tally.js");

describe("tally function", () => {
  test("tally on an empty array returns an empty object", () => {
    expect(tally([])).toEqual({});
  });

  test("tally on an array with duplicate items", () => {
    expect(tally(['a', 'a', 'a'])).toEqual({ a: 3 });
  });

  test("tally on an array with multiple unique items", () => {
    expect(tally(['a', 'a', 'b', 'c'])).toEqual({ a: 2, b: 1, c: 1 });
  });

  test("throws error when input is not an array", () => {
    expect(() => tally("string")).toThrow("Input must be an array");
    expect(() => tally({a: 1, b: 2})).toThrow("Input must be an array");
  });
});

