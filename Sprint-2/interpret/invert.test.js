const invert = require("./invert");

test("handles empty object", () => {
  expect(invert({})).toEqual({});
});

test("invert returns empty object for empty obj", () => {
  expect(invert({ x: 10, y: 20 })).toEqual({ 10: "x", 20: "y" });
});

test("inverts an object with numbers as values", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
});

test("inverts an object with string values", () => {
  expect(invert({ cat: "animal", carrot: "vegetable" })).toEqual({
    animal: "cat",
    vegetable: "carrot",
  });
});
