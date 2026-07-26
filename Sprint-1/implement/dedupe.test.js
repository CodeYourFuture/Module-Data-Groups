const dedupe = require("./dedupe.js");

test("given an empty array, it returns an empty array", () => {
  expect(dedupe([])).toEqual([]);
});

test("given an array with unique elements, it returns the same array", () => {
  expect(dedupe([2, 1, 4, "2", "d", "g"])).toEqual([2, 1, 4, "2", "d", "g"]);
});

test("given an array of strings or numbers then it should return new array with duplicates removed", () => {
  expect(dedupe([2, 2, 4, 2, 3, 4, 8, 5, 4, 1, 9])).toEqual([
    2, 4, 3, 8, 5, 1, 9,
  ]);
});
