
const tally = require("./tally.js");

describe("tally function", () => {
  test("tally on an empty array returns an empty object", () => {
    expect(tally([])).toEqual({});
  });

  test("tally counts duplicates correctly", () => {
    expect(tally(['a'])).toEqual({ a: 1 });
    expect(tally(['a', 'a', 'a'])).toEqual({ a: 3 });
    expect(tally(['a', 'a', 'b', 'c'])).toEqual({ a: 2, b: 1, c: 1 });
  });

  test("tally throws error if input is not an array", () => {
    expect(() => tally('not an array')).toThrow("Input must be an array");
  });
});
