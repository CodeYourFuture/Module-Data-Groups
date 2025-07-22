const invert = require("./invert");

test("inverts a simple object with unique values", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
});

test("inverts an object with string values", () => {
  expect(invert({ cat: "meow", dog: "bark" })).toEqual({
    meow: "cat",
    bark: "dog",
  });
});

test("overwrites keys when values are not unique", () => {
  expect(invert({ a: 1, b: 1 })).toEqual({ 1: "b" });
  // 'b' overwrites 'a' because 1 appears twice
});
