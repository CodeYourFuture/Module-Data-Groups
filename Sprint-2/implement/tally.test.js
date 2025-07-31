const tally = require("./tally.js");

/**
 * tally array
 *
 * In this task, you'll need to implement a function called tally
 * that will take a list of items and count the frequency of each item
 * in an array
 *
 * For example:
 *
 * tally(['a']), target output: { a: 1 }
 * tally(['a', 'a', 'a']), target output: { a: 3 }
 * tally(['a', 'a', 'b', 'c']), target output: { a : 2, b: 1, c: 1 }
 */

// Acceptance criteria:

// Given a function called tally
// When passed an array of items
// Then it should return an object containing the count for each unique item
test("tally on an array objects should return counts for each unique item", () => {
    expect(tally(['c', 'f', 'c', 'l', 'g', 'p', 'c'])).toEqual({c:3, f:1,l:1,p:1,g:1});
});


// Given an empty array
// When passed to tally
// Then it should return an empty object
test.todo("tally on an empty array returns an empty object");
test("tally on an empty array should return an empty object", () => {
    expect(tally([])).toEqual({});
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test("tally on an array with duplicate items should return counts for each unique item",()=>{
    expect(tally(['cat', 'cat', 'dog', 'mouse', 'bird', 'cat', 'mosquito'])).toEqual({cat:3, dog:1, mouse:1, bird:1, mosquito:1});
});


// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
test("tally on an invalid input like a string should throw an error",()=>{
    expect(()=>tally("hello world")).toThrow("Input must be an array");
    
});