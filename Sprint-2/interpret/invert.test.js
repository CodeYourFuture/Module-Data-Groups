const invert = require("./invert");

test("handle empty object", () => {
  expect(invert({})).toEqual({});
});

test("checking the one I want", () => {
  expect(invert({ x: 10, y: 20, z: 30 })).toEqual({
    10: "x",
    20: "y",
    30: "z",
  });
});
