const invert = require("./invert.js");
test("when passed a string invert will throw error", () => {
  expect(() => invert("asd")).toThrow("Invalid input");
});

test("when passed an empty object, invert returns an empty object", () => {
  expect(invert({})).toEqual({});
});

test("when passed an  object containing one key:value pair, invert returns an  object containing value:key", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
});

test("when passed an  object containing multiple key:value pairs, invert returns an  object containing value:key pairs", () => {
  expect(invert({ a: 1, apple: "red", month: "September" })).toEqual({
    1: "a",
    red: "apple",
    September: "month",
  });
});
