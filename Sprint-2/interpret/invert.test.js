const invert = require("./invert");

test("inverts a simple object", () => {
  const input = { a: "x", b: "y" };
  const expected = { x: "a", y: "b" };
  expect(invert(input)).toEqual(expected);
});

test("inverts an object with number values", () => {
  const input = { a: 1, b: 2 };
  const expected = { 1: "a", 2: "b" };
  expect(invert(input)).toEqual(expected);
});

test("accepts empty string as a key", () => {
  const input = { "": "x" };
  const expected = { x: "" };
  expect(invert(input)).toEqual(expected);
});

test("returns an empty object when input is empty", () => {
  expect(invert({})).toEqual({});
});

test("throws when input is null", () => {
  expect(() => invert(null)).toThrow("Input must be an object");
});

test("throws when input is not an object", () => {
  expect(() => invert("hello")).toThrow("Input must be an object");
  expect(() => invert(123)).toThrow("Input must be an object");
  expect(() => invert(true)).toThrow("Input must be an object");
});

test("throws when input is an array", () => {
  expect(() => invert(["a", "b"])).toThrow("Input must be an object");
});

test("throws when a value is not a string or number", () => {
  const obj = { a: {} };
  expect(() => invert(obj)).toThrow(
    "Keys and values must be a string or a number"
  );
});

test("throws when values are duplicated (string)", () => {
  const obj = { a: "x", b: "y", c: "x" };
  expect(() => invert(obj)).toThrow("Values cannot be duplicated");
});

test("throws when numeric values are duplicated", () => {
  const obj = { a: 1, b: 2, c: 1 };
  expect(() => invert(obj)).toThrow("Values cannot be duplicated");
});

test("duplicate keys are overwritten by JavaScript before reaching invert()", () => {
  const obj = { a: "x", a: "y" }; // JS overwrites first 'a'
  expect(invert(obj)).toEqual({ y: "a" });
});
