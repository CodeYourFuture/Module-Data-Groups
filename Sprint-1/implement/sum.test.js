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
test("Given an empty array", () => {
    const result = sum([]);
    expect(result).toBe(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("Given an array with just one number" ,()=>{
    expect(sum([10])).toBe(10);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("Given an array containing negative numbers" ,()=>{
    expect(sum([-10, -20, -30, -40])).toBe(-100);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("Given an array with decimal/float numbers" ,()=>{
    expect(sum([10.5, 20.3, 30.7, 40.1])).toBe(101.6);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("Given an array containing non-number values" ,()=>{
    expect(sum(['hey', 10, 'hi', 60, 10])).toBe(80);
});


// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("Given an array with only non-number values" ,()=>{
    expect(sum(['hey', 'Hatef', 'hi', 'Isfahan', 'London', 'United Kingdom'])).toBe(undefined);
    });