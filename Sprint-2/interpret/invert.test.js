const objectInvert = require("./invert.js");

test("Inverting an object with one key and value", () => {
  const test1 = { a: 1 };
  expect(objectInvert(test1)).toEqual({ 1: "a" });
});

test("Inverting an object with two keys and values", () => {
  const test2 = { a: 1, b: 2 };
  expect(objectInvert(test2)).toEqual({ 1: "a", 2: "b" });
});

test("Inverting an empty object", () => {
  const test3 = {};
  expect(objectInvert(test3)).toEqual({});
});

test("Inverting an object with duplicate values", () => {
  const test4 = { a: 1, b: 1, c: 2 };
  expect(objectInvert(test4)).toEqual({ 1: "b", 2: "c" });
});
