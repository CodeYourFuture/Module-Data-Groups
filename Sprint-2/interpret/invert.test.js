const invert = require("./invert.js");

test("swaps keys and values for the example in the exercise", () => {
  expect(invert({ x: 10, y: 20 })).toEqual({ 10: "x", 20: "y" });
});

test("works with a single key", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
});

test("works with two keys", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
});

test("returns an empty object for an empty object", () => {
  expect(invert({})).toEqual({});
});

test("string values become keys", () => {
  expect(invert({ first: "one", second: "two" })).toEqual({
    one: "first",
    two: "second",
  });
});

test("original numeric keys come back as strings", () => {
  expect(invert({ 1: "a", 2: "b" })).toEqual({ a: "1", b: "2" });
});

test("when two keys share a value, the last key wins", () => {
  expect(invert({ a: 1, b: 1 })).toEqual({ 1: "b" });
});

test("does not change the original object", () => {
  const original = { a: 1, b: 2 };
  invert(original);
  expect(original).toEqual({ a: 1, b: 2 });
});

test("inverting twice gives back the original when values are unique strings", () => {
  const original = { a: "x", b: "y" };
  expect(invert(invert(original))).toEqual(original);
});
