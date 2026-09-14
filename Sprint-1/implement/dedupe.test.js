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
test("given an empty array, it returns an empty array", ()=>{
    expect(dedupe([])).toEqual([])
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
test("Given an array with no duplicates, returns a copy of the original array", ()=>{
    expect(dedupe([3,4,6])).toEqual([3,4,6])

})
// Given an array of strings or numbers
// When passed to the dedupe function
// Then it should return a new array with duplicates removed while preserving the 
// first occurrence of each element from the original array.
test('Given an array of strings or numbers, returns a new array with duplicates removed while preserving the first occurrence of each element from the original array',()=>{
    expect(dedupe(['h',4,'k','h',3,5,4])).toEqual(['h',4,'k',3,5])
}
)
