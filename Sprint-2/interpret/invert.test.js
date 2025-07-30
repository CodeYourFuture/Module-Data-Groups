
const invert = require("./invert.js");

test("inverts an empty object to an empty object", () => {
  expect(invert({})).toEqual({});
});

test("inverts an object with one key-value pair", () => {
  expect(invert({ x: 10 })).toEqual({ "10": "x" });
});

test("inverts a simple object", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ "1": "a", "2": "b" });
});

test("inverts an object with duplicate values, keeping the last key", () => {
  expect(invert({ a: 1, b: 1 })).toEqual({ "1": "b" });
});

test("inverts an object with string values", () => {
  expect(invert({ hello: "world", foo: "bar" })).toEqual({
    world: "hello",
    bar: "foo",
  });
});



