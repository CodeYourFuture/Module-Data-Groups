const invert = require("./invert");

test("inverts an object with one key-value pair", () => {
  expect(invert({ a: 1 })).toEqual({ "1": "a" });
});

test("inverts an object with multiple key-value pairs", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ "1": "a", "2": "b" });
});

test("handles string values", () => {
  expect(invert({ apple: "fruit", carrot: "vegetable" })).toEqual({
    fruit: "apple",
    vegetable: "carrot",
  });
});

test("overwrites values when keys are duplicated", () => {
  expect(invert({ a: 1, b: 1 })).toEqual({ "1": "b" }); // 'a' overwritten
});