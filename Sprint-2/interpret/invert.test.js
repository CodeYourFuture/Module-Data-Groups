const invert = require("./invert.js");

test("Inverting original input correctly", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
});
