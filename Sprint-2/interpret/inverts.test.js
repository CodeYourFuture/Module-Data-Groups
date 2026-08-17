const invert = require("./invert.js");

test("invert on an object with key-value returns key-value swapped", function () {
  expect(invert({ x: 10, y: 20 })).toEqual({ 10: "x", 20: "y" });
  expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
  expect(invert({ distance1: 105, distance2: 201 }))
  .toEqual({ 105: "distance1", 201: "distance2" });
  expect(invert({ fruit: "apple", veg: "carrot" }))
  .toEqual({ "apple": "fruit", "carrot": "veg" });
});
