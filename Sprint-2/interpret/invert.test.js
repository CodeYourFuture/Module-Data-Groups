const invert = require("./invert");

test("given an object of key-value, it should return inverted value-key", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ "1": "a", "2": "b" });
});

test("given an object of single key-value, it should return single value-key", () => {
  expect(invert({ a: 1 })).toEqual({ "1": "a" });
});

test("given an empty input it should return an empty object", () => {
  expect(invert({})).toEqual({});
});

test("invert values that are strings", () => {
  expect(invert({ a: "1", b: "pink" })).toEqual({ "1": "a", "pink": "b" });
});
