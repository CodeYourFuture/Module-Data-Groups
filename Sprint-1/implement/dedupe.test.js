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
//test.todo("given an empty array, it returns an empty array");

test("given an empty array should return an empty array", () => {
    expect(dedupe([]).toEqual([]));

});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

test("An array with no duplicates should return a copy of the original" , () => {
   
    expect(dedupe(["H","E","Y"]).toEqual(["H","E","Y"]));
    expect(dedupe(["r","a","e"]).toEqual(["r","a","e"]));

});

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element

test("An array should remove the duplicate values, preserving the first occurence " , () => {
    expect(dedupe(["cat","dog","mouse","cat","bird"]).toEqual(["cat","dog","mouse","bird"]));
    expect(dedupe(["hi","hey",4,"hello","hey",5]).toEqual(["hi","hey",4,"hello",5]));
    expect(dedupe([5,1,2,4,3,4,5]).toEqual([5,1,2,4,3]));


});
