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
test.todo("given an empty array, returns 0")
    expect(sum([])).toBe(0);



// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test.todo("given an array with just one number, returns that number")
expect(sum([10])).toBe(10);

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test.todo("given an array containing negative numbers, returns the correct total sum")
expect(sum([-10, 10])).toBe(0);

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test.todo("given an array with decimal/float numbers, returns the correct total sum")
expect(sum([10.5, 10.5])).toBe(21);

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test.todo("given an array containing non-number values, returns the sum of the numerical elements")
expect(sum(["hey", 10, "hi", 60, 10])).toBe(80);

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test.todo("given an array with only non-number values, returns the least surprising value") 
expect(sum(["hey", "hi"])).toBe(0);
