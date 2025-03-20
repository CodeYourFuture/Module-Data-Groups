const invertObj = require("./invert.js");

test("invert object", () => {
  expect(invertObj({ x: 10, y: 20 })).toEqual({ 10: "x", 20: "y" });
});
