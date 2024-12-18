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
test.todo("given an empty array, it returns an empty array"), () => {
    expected(dedupe([]).toEqual(emptyarray));
}

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

test.todo("given an array with no duplicates, it returns a copy of the original array"), () => {
    const originalarray = [5, 1, 2, 3, 8];
    const expectedCopy = [...originalarray];
    
    expected(dedupe(originalarray).toEqual(expectedCopy));
}

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element

test.todo("given an array with strings or numbers, it remove the duplicate values, preserving the first occurence of each element"), () => {
    const stringsandnoarray = [1,  "apple", 2, "banana", 3, "cherry", "date", 4, 4, 4]
    const preservedoccurence = [...stringsandnoarray]
    expected(dedupe(stringsandnoarray).toEqual(preservedoccurence
    ));
}



//test("returns the average of middle values for even length array", () => {
//    expect(calculateMedian([1, 2, 3, 4])).toEqual(2.5);
//    expect(calculateMedian([1, 2, 3, 4, 5, 6])).toEqual(3.5); //adjusted the value to of (4+3)/2