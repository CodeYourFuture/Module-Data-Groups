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

it("Given an empty array", () => {
    const list = [];
    const result = dedupe(list);
    expect(result).toEqual([]);  
  });

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
it("Given an array with no duplicates", () => {
    const list = [2, 3, 4, 5];
    const result = dedupe(list);
    expect(result).toEqual([2, 3, 4, 5]);  
    expect(result).not.toBe(list); 
  });

 

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element
it("Given an array with strings or numbers", () => {
    const list = [2, 3, 3, 4, 5, "Jesus"];
    const result = dedupe(list);
    expect(result).toEqual([2, 3, 4, 5, "Jesus"]); // ✅ correct expectation
  });
  