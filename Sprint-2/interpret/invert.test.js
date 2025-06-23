const invert = require("./invert");

test("inverts a normal object with unique values", () => {
  const input = { a: 1, b: 2, c: 3 };
  const expected = { 1: "a", 2: "b", 3: "c" };
  expect(invert(input)).toEqual(expected);
});

test("inverts object with string values", () => {
  const input = { name: "Alice", city: "Paris" };
  const expected = { Alice: "name", Paris: "city" };
  expect(invert(input)).toEqual(expected);
});

test("handles empty object", () => {
  expect(invert({})).toEqual({});
});

test("handles numeric keys and string values", () => {
  const input = { 1: "one", 2: "two" };
  const expected = { one: "1", two: "2" };
  expect(invert(input)).toEqual(expected);
});

test("overwrites keys if values are duplicated", () => {
  const input = { a: 1, b: 2, c: 1 };
  const expected = { 1: "c", 2: "b" };
  expect(invert(input)).toEqual(expected);
});
