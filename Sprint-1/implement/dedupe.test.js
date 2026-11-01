const dedupe = require("./dedupe.js");

test("given an empty array, it returns an empty array", () => {
  expect(dedupe([])).toEqual([]);
});

test("returns a a copy with no duplicates", () => {
  expect(dedupe(["a", "a", "a", "b", "b", "c"])).toEqual(["a", "b", "c"]);
});

test("keeps the first occurrence order", () => {
  expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
});

test("returns a copy when there are no duplicates", () => {
  const original = [1, 2, 3, 4];
  const result = dedupe(original);
  expect(result).toEqual(original);
});

