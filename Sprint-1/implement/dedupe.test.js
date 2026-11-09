const dedupe = require("./dedupe.js");
/*
Dedupe Array

📖 Dedupe means **deduplicate**

In this kata, you will need to deduplicate the elements of an array

E.g. dedupe(['a','a','a','b','b','c']) returns ['a','b','c']
E.g. dedupe([5, 1, 1, 2, 3, 2, 5, 8]) returns [5, 1, 2, 3, 8]
E.g. dedupe([1, 2, 1]) returns [1, 2]
*/

// Acceptance Criteria:

// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array
test("given an empty array, it returns an empty array", () => {
    const arr = [];
    const actual = dedupe(arr);
    expect(actual).toEqual([]);
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
test("array with no dupes returns original array", () => {
    const arr = [1, 2, 3];
    const actual = dedupe(arr);
    expect(actual).toEqual([1, 2, 3]);
})

// Given an array of strings or numbers
// When passed to the dedupe function
// Then it should return a new array with duplicates removed while preserving the 
// first occurrence of each element from the original array.
test("array with dupe numbers returns a copy with no dupes", () => {
    const arr = [1, 2, 2, 3];
    const actual = dedupe(arr);
    expect(actual).toEqual([1, 2, 3]);
})

test("array with dupe numbers (non-consecutive) returns a copy with no dupes", () => {
  const arr = [5, 1, 1, 2, 3, 2, 5, 8];
  const actual = dedupe(arr);
  expect(actual).toEqual([5, 1, 2, 3, 8]);
})

test("array with dupe words returns a copy with no dupes", () => {
    const arr = ['hi', 'bye', 'bye', 'sigh'];
    const actual = dedupe(arr);
    expect(actual).toEqual(['hi', 'bye', 'sigh']);
})

test("array with dupe words (non-consecutive) returns a copy with no dupes", () => {
  const arr = ["hi", "bye", "mom", "sigh", "your", "dad", "hi", "mom", "wonderwall"];
  const actual = dedupe(arr);
  expect(actual).toEqual(["hi", "bye", "mom", "sigh", "your", "dad", "wonderwall"]);
})