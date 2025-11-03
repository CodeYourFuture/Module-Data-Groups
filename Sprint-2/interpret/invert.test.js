const invert = require("./invert.js");
test("swap the keys and values in the object", () => {
  expect(invert({ a: 1, asd: "d3e" })).toEqual({ 1: "a", d3e: "asd" });
});
