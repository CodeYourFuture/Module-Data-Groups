const invert = require("./invert.js");

test("when passed invert swaps single key-value pair", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
});

test("when invert is passed two key-value pairs, it swaps both keys and values", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({
    1: "a",
    2: "b",
  });
});

test("When invert is passed, multiple keys and values in the object should be swapped ", () => {
  expect(invert({ x: 10, y: 20 })).toEqual({ 10: "x", 20: "y" });
});

test("when invert is passed a larger object, it swaps all keys and values", () => {
  expect(invert({ a: 1, b: 2, c: 3, d: 4 })).toEqual({
    1: "a",
    2: "b",
    3: "c",
    4: "d",
  });
});

test("when passed invert swaps string values", () => {
  expect(invert({ first: "hello", second: "world" })).toEqual({
    hello: "first",
    world: "second",
  });
});

test("when invert is passed duplicate values, the last key is kept", () => {
  expect(invert({ a: 1, b: 1 })).toEqual({
    1: "b",
  });
});

test("when invert is passed with empty objects it should return an empty object", () => {
  expect(invert({})).toEqual({});
});
