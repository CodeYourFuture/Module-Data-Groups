const tally = require("./tally.js");


test("tally on an empty array returns an empty object", () => {
  expect(tally([])).toEqual({});
});


test("tally on an array with duplicate items returns correct counts", () => {
  expect(tally(["a", "a", "b", "c", "a", "c"])).toEqual({
    a: 3,
    b: 1,
    c: 2,
  });
});


test("tally on an array with a single item returns count of 1", () => {
  expect(tally(["a"])).toEqual({ a: 1 });
});


test("tally on an array with no duplicates returns count of 1 for each", () => {
  expect(tally(["a", "b", "c"])).toEqual({ a: 1, b: 1, c: 1 });
});


test("tally on an array with numbers and other types returns correct counts", () => {
  expect(tally([1, 2, 2, 3, 1, 1, "a", "a", null])).toEqual({
    1: 3,
    2: 2,
    3: 1,
    a: 2,
    null: 1,
  });
});


test("throws an error when passed a non-array input", () => {
  expect(() => tally("invalid")).toThrow("Input must be an array");
  expect(() => tally({})).toThrow("Input must be an array");
  expect(() => tally(123)).toThrow("Input must be an array");
});

