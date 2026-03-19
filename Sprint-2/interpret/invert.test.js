const invert = require("../interpret/invert");

test(`Should return {"10": "x", "20": "y"} when given { x: 10, y: 20 } `, () => {
  expect(invert({ x: 10, y: 20 })).toEqual({ 10: "x", 20: "y" });
});

test(`Should return {"2": "bounce", "100": "high"} when given { bounce: 2, high: 100 } `, () => {
  expect(invert({ bounce: 2, high: 100 })).toEqual({
    2: "bounce",
    100: "high",
  });
});

test(`Should return {"foot": "ball"} when given { "ball": "foot" } `, () => {
  expect(invert({ ball: "foot" })).toEqual({ foot: "ball" });
});
