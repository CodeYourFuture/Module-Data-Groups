const invert = require("./invert");

test("inverts a simple object", () => {
  expect(invert({ a: 1 })).toEqual({ "1": "a" });
});

test("inverts multiple key/value pairs", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ "1": "a", "2": "b" });
});

test("inverts string values", () => {
  expect(invert({ x: "apple", y: "banana" })).toEqual({
    apple: "x",
    banana: "y"
  });
});

test("throws an error when input is not an object", () => {
  expect(() => invert("not an object")).toThrow("Input must be a non-null object");
});

test("throws an error for null", () => {
  expect(() => invert(null)).toThrow("Input must be a non-null object");
});

test("throws an error for arrays", () => {
  expect(() => invert([1, 2, 3])).toThrow("Input must be a non-null object");
});
