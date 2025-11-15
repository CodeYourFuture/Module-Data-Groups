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

describe("dedupe function", () =>{
    it("returns an empty array for an empty array", () =>{

      expect(dedupe([])).toEqual([]);

    });
// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

it("returns the same array if there are no duplicates", () =>{
    expect(dedupe([1, 2, 3])).toEqual([1, 2, 3]);

    expect(dedupe(["a", "b", "c"])).toEqual(["a", "b", "c"]);

  });
// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element

it("removes duplicates and preserves first occurrence", () =>{
    
    expect(dedupe([1, 2, 1])).toEqual([1, 2]);
    expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
    expect(dedupe(["a", "a", "b", "b", "c"])).toEqual(["a", "b", "c"]);

  });
});