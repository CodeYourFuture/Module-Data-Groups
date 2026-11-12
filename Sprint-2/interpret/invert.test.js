const invert = require("./invert.js");

test("checking inversion ", () => {
  expect(invert({ x: 10, y: 20 })).toEqual({ 10: "x", 20: "y" });
  expect(invert({ f: 34, h: 45, j: "rf" })).toEqual({
    34: "f",
    45: "h",
    rf: "j",
  });
});
