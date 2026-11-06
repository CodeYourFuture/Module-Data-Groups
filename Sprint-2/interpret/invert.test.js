const invert = require("./invert");

test("swaps the key and value of a single pair", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
});
