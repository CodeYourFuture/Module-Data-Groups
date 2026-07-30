const tally = require("./tally.js");

test("should return an empty object when given an empty array", () => {
  expect(tally([])).toEqual({});
});

test("should return counts for each unique item when given an array with one item and with duplicate items", () => {
  expect(tally(["a"])).toEqual({ a: 1 });
  expect(tally(["a", "a", "a"])).toEqual({ a: 3 });
  expect(tally(["a", "a", "b", "c"])).toEqual({ a: 2, b: 1, c: 1 });
});

test("should throw an error when given an invalid input", () => {
  function invalidInput() {
    tally("string");
  }
  expect(invalidInput).toThrow(Error);
});
