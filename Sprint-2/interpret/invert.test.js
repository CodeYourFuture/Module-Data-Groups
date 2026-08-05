const invert = require("./invert.js");

test("when invert is passed to an object, it should swap the keys and values in the object", () => {
  const currentOutput = invert({ x: 10, y: 20 });
  const targetOutput = { 10: "x", 20: "y" };
  expect(currentOutput).toEqual(targetOutput);
});
test("when invert is passed to an object, it should swap the keys and values in the object", () => {
  const currentOutput = invert({ a: 1, b: 2 });
  const targetOutput = { 1: "a", 2: "b" };
  expect(currentOutput).toEqual(targetOutput);
});
