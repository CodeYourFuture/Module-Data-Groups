const dedupe = require("./dedupe.js");

/*
Dedupe Array
Dedupe = remove duplicates while keeping the first occurrence
*/

// TEST 1 — empty array
test("given an empty array, it returns an empty array", () => {
  expect(dedupe([])).toEqual([]);
});

// TEST 2 — no duplicates (should return a copy)
test("given an array with no duplicates, it returns a copy of the array", () => {
  const arr = [1, 2, 3, 4];
  const result = dedupe(arr);

  expect(result).toEqual([1, 2, 3, 4]);
  expect(result).not.toBe(arr); // important check
});

// TEST 3 — removes duplicates
test("given an array with duplicates, it removes duplicates and preserves first occurrence", () => {
  expect(dedupe(['a', 'a', 'b', 'c', 'c'])).toEqual(['a', 'b', 'c']);
  expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
  expect(dedupe([1, 2, 1])).toEqual([1, 2]);
});

// TEST 4 — should not mutate original array
test("does not mutate the original array", () => {
  const arr = [1, 1, 2, 3];
  const copy = [...arr];

  dedupe(arr);

  expect(arr).toEqual(copy); // original unchanged
});
