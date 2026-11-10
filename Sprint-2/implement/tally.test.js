const tally = require("./tally.js");

test("counts multiple occurrences of the same letter", () => {
  expect(tally(["a", "a", "a"])).toEqual({a: 3});
});

test("count occurrences of different letters", () => {
  expect(tally(["a", "a", "b", "c"])).toEqual({a: 2, b: 1, c: 1});
});

test("tally on an empty array returns an empty object", () => {
  expect(tally([])).toEqual({});
});

// test("tally counts duplicate items", () => {
//   expect(tally(["a", "a", "a"])).toEqual({ a: 3 });
//   expect(tally(["a", "a", "b", "c"])).toEqual({ a: 2, b: 1, c: 1 });
// });

// test("tally throws for invalid input", () => {
//   expect(() => tally("banana")).toThrow("tally requires an array");
//   expect(() => tally(42)).toThrow("tally requires an array");
//   expect(() => tally()).toThrow("tally requires an array");
// });
