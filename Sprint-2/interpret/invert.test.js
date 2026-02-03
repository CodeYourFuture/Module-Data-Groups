const invert = require("./invert.js");

describe("invert", () => {
  it("returns empty object if passed empty object", () =>
    expect(invert({})).toEqual({}));

  it("returns inverted object of the passed object", () => {
    expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
    expect(invert({ a: 1, b: 2, c: 3, d: 4, e: 5 })).toEqual({
      1: "a",
      2: "b",
      3: "c",
      4: "d",
      5: "e",
    });
  });
});
