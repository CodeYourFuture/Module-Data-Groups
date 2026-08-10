const tally = require("./tally.js");

test("tally on an empty array returns an empty object", () => {
  expect(tally([])).toEqual({});
});

test("tally counts a single item", () => {
  expect(tally(["a"])).toEqual({ a: 1 });
});

test("tally counts duplicate items", () => {
  expect(tally(["a", "a", "a"])).toEqual({ a: 3 });
});

test("tally counts multiple unique items", () => {
  expect(tally(["a", "a", "b", "c"])).toEqual({ a: 2, b: 1, c: 1 });
});

test("throws an error for invalid input like a string", () => {
  expect(() => tally("invalid")).toThrow();
});
