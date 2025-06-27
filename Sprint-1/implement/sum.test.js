/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");

// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0
it("if the array is empty it returns 0",()=>{
expect(sum([])).toBe(0);    
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
it("array with just one number returns that number",()=>{
    expect(sum([1])).toBe(1);
})

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
it("calculates the sum of negative numbers",()=>{
    expect(sum([-4,-6])).toBe(-10);
})

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
it("sums up decimal numbers",()=>{
    expect(sum([7.5,9.5])).toBe(17);
})

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
it("ignores non-numbers and returns the sum of the numerical elements",()=>{
    expect(sum(["y",9,".",4])).toBe(13);
})

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
