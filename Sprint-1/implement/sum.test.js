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
test("given an empty array, returns 0",()=>{
    expect(sum([])).toBe(0);
})

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("given an array with one number, returns that number",()=>{
    expect(sum([20])).toBe(20);
})

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("given an array with negative numbers, returns correct sum",()=>{
    expect(sum([-5,-10,-15])).toBe(-30);
})

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("given an array with decimal numbers, returns correct sum",()=>{
    expect(sum([1.5,2.5,3.5])).toBeCloseTo(7.5, 5);
})

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("given an array with non-number values, ignores them and returns correct sum",()=>{
    expect(sum([10,'hello',20,['test'],30,{a:'a'}])).toBe(60);
})

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values, returns 0",()=>{
    expect(sum(['hello','world',['test'],{a:'a'}])).toBe(0);
})
