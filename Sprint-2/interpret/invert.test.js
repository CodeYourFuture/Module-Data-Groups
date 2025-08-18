const invert = require("./invert.js");

test("When invert is passed an object it should swap the keys and values in the object and then return it", () => {
  let currentOutput = invert({ x: 10, y: 20 });
  let targetOutput = { 10: "x", 20: "y" };
  expect(currentOutput).toEqual(targetOutput);
});

test("When invert is passed an object it should swap the keys and values in the object and then return it", () => {
  let currentOutput = invert({ a: 1, b: 2 });
  let targetOutput = { 1: "a", 2: "b" };
  expect(currentOutput).toEqual(targetOutput);
});
