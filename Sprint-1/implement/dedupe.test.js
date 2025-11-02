const dedupe = require("./dedupe.js");
/*
Dedupe Array

📖 Dedupe means **deduplicate**

In this kata, you will need to deduplicate the elements of an array

E.g. dedupe(['a','a','a','b','b','c']) target output: ['a','b','c']
E.g. dedupe([5, 1, 1, 2, 3, 2, 5, 8]) target output: [5, 1, 2, 3, 8]
E.g. dedupe([1, 2, 1]) target output: [1, 2]
*/

// Acceptance Criteria:

// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array
test("dedupe an empty array returns an empty array", () =>{
    const inputEmpty = [];
    const result = dedupe(inputEmpty);
    expect(result).toEqual([]);
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
test(" Given an array with no duplicates", () => {
  const inputNoDuplicates = ["a", "b", "c" ];
  const result = dedupe(inputNoDuplicates);
  expect(result).toEqual(["a", "b", "c"]);
});

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element
test(" Given an array with no duplicates", () => {
  const inputMix = [1,1,2,2,3,3,4,4,5,5];
  const result = dedupe(inputMix);
  expect(result).toEqual([1,2,3,4,5]);
});