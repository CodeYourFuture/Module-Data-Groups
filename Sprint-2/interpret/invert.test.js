const invert = require("./invert.js");

test("inverts an object with unique keys", () => {
  expect(invert({ a: 1, b: 2 })).toStrictEqual({ 1: "a", 2: "b" });
});

test("inverts an object with string keys", () => {
  // prettier-ignore
  expect(invert({ cat: "meow", dog: "bark" })).toStrictEqual({ meow: "cat", bark: "dog"});
});

test("inverts an empty object", () => {
  expect(invert({})).toEqual({});
});
