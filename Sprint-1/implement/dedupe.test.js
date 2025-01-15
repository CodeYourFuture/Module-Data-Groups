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
// test.todo("given an empty array, it returns an empty array");

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element



describe('dedupe', () => {
  // Test for non-empty array with duplicates
  test('removes duplicates from an array of numbers', () => {
    expect(dedupe([1, 2, 2, 3, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('removes duplicates from an array of characters', () => {
    expect(dedupe(['a', 'b', 'a', 'c', 'd', 'd'])).toEqual(['a', 'b', 'c', 'd']);
  });

  // forgot this in the test file and it was causing the 'todo' to remain lol. took a while to find this silly 'bug'.
  //test.todo('given an empty array, it returns an empty array'); // Placeholder test 

  // Test for an empty array
  test('given an empty array, it returns an empty array', () => {
    expect(dedupe([])).toEqual([]); //what is 'todo'? this test returns a 'todo'. so after changing the function to return an empty [] i must now change the test
  });

  // Test for an array with only one element (should not remove anything)
  test('given an array with one element, it returns the same array', () => {
    expect(dedupe([5])).toEqual([5]);
  });

  // Test for an array with no duplicates
  test('given an array with no duplicates, it returns the same array', () => {
    expect(dedupe([1, 2, 3])).toEqual([1, 2, 3]); //what is 'todo'? this test returns a 'todo'.
  });
});
