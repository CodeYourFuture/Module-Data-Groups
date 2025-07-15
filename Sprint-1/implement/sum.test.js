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
test("given an empty array, returns 0", () => { 
    expect(sum([])).toBe(0);});


// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("given an one number array, returns number", () => { 
    expect(sum([4])).toBe(4);});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("given a negative array, returns sum", () => { 
    expect(sum([-2, -9, -10])).toBe(-21);});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("Given an array with decimal/float numbers, return total sum", () => { 
    expect(sum([1.8, 3, 5.2])).toBe(10);});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("given an array containing non-number values, returns sum of the numerical elements", () => { 
    expect(sum(["madera", 9, 10])).toBe(19);});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values, returns sum", () => { 
    expect(sum(["dublin", "dubai", "malaga"])).toBe(0);
});