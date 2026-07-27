const invert = require("./invert");

test("inverts an object", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({
    1: "a",
    2: "b",
  });
});

test("inverts a single key-value pair", () => {
  expect(invert({ x: 10 })).toEqual({
    10: "x",
  });
});
