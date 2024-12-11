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
test.todo("given an empty array, it returns an empty array");

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element

const currentOutput = dedupe(['a', 'a', 'a', 'b', 'b', 'c']);
const targetOutput = ['a', 'b', 'c'];

test('This test will check if duplicates are removed', () => {
    expect(currentOutput).toEqual(targetOutput);

})

const currentOutput1 = dedupe([5, 1, 1, 2, 3, 2, 5, 8]);
const targetOutput1 = [5, 1, 2, 3, 8];

test('This test will check if duplicates are removed', () => {
    expect(currentOutput1).toEqual(targetOutput1);

})

const currentOutput2 = dedupe(['s', 'e', 'r', 'n', 'a']);
const targetOutput2 = ['s', 'e', 'r', 'n', 'a'];

test('This test will return the same list/array', () => {
    expect(currentOutput2).toEqual(targetOutput2);

})

const currentOutput3 = dedupe([]);
const targetOutput3 = [];

test('This test will return the same list/an empty list', () => {
    expect(currentOutput3).toEqual(targetOutput3);

})