const invert = require("./invert.js");

test("invert should swap each key and value when passed an object", () => {
  expect(invert({ a: "cherry", b: "kiwi" })).toEqual({
    cherry: "a",
    kiwi: "b",
  });
});

test("invert should return an empty object when passed an empty object", () => {
  expect(invert({})).toEqual({});
});
