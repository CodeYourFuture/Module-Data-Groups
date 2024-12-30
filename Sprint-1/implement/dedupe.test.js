const dedupe = require("./dedupe.js");
// Dedupe Array

// 📖 Dedupe means **deduplicate**

// In this kata, you will need to deduplicate the elements of an array
test("returns the eduplicate the elements of an array", () => {
    expect(dedupe(['a','a','a','b','b','c'])).toEqual(['a','b','c']);
    expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
    expect(dedupe([1, 2, 1])).toEqual([1, 2]);
   
  });


// Acceptance Criteria:

// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array
test("given an empty array, it returns an empty array", ()=>{
    expect(dedupe([])).toEqual([]);
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
test("Given an array with no duplicates, it returns a copy of the original array", ()=>{
    expect(dedupe([1, 4, 8, 5])).toEqual([1, 4, 8, 5]);
});


// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element
test("Given an array with strings or numbers, it returns a copy of the original array", ()=>{
    expect(dedupe(['a', 'c', 'd', 'd'])).toEqual(['a', 'c', 'd']);
});