const invert = require("./invert.js");

test("when passed invert swaps single key-value pair", () => {
  expect(invert({ a: 1 })).toEqual({ "1": "a" });
});

test("When invert is passed, multiple keys and values in the object should be swapped ", () => {
  expect(invert({ x: 10, y: 20 })).toEqual({ "10": "x", "20": "y" })
});

test("when passed invert swaps string values", () => {
  expect(invert({ first: "hello",second: "world" })).toEqual({ hello: "first", world: "second" });
});