const tally = require("./tally.js");

test("given an array of items an object containing the counter for each item", () => {
  expect(tally(["a", "a"])).toEqual({ a: 2 });
});

test("tally on an empty array returns an empty object", () => {
  expect(tally([])).toEqual({});
});

test("given an array of items an object containing the counter for each item", () => {
  expect(tally(["a", "a", "c", "b", "b", "d"])).toEqual({
    a: 2,
    c: 1,
    b: 2,
    d: 1,
  });
});

test("tally on an empty array returns an empty object", () => {
  expect(() => tally("string")).toThrow("Invalid input!");
});
