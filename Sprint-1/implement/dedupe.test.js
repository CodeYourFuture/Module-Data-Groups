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
describe('dedupe function' , () => {
test("given an empty array, it returns an empty array", ()=>{
expect(dedupe([])).toEqual([])
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
  // Combined test for various deduplication scenarios using test.each
  // Data format: [inputArray, expectedOutputArray, description]
    // Given an array with no duplicates
    // When passed to the dedupe function
    // Then it should return a copy of the original array

    // Given an array with strings or numbers
    // When passed to the dedupe function
    // Then it should remove the duplicate values, preserving the first occurence of each element
    test.each([
    [[1, 3, 6], [1, 3, 6], 'array with no duplicates'],   
    [['a', 'k', 'k', 'c', 'c'], ['a', 'k', 'c'], 'strings with duplicates'],
    [[1, 1, 1, 3, 4, 4], [1, 3, 4], 'numbers with duplicates'],

    // Examples from problem description:
    [[5, 1, 1, 2, 3, 2, 5, 8], [5, 1, 2, 3, 8], 'mixed numbers with duplicates'],
    [[1, 2, 1], [1, 2], 'simple number array with duplicates'],
    [['hello', 'world', 'hello', '!', 'world'], ['hello', 'world', '!'], 'mixed string array with duplicates'],
    [[null, undefined, null, 1, undefined], [null, undefined, 1], 'array with null/undefined duplicates'],
  ])('should deduplicate %j and return %j (%s)', (inputArray, expectedOutput, description) => {
    expect(dedupe(inputArray)).toEqual(expectedOutput);
  });
});  