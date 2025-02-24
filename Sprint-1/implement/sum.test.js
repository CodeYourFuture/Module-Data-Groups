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
test.todo("given an empty array, returns 0", ()=> {
expect(sum([])).toBe([]);
});


// Given an array with just one number
// When passed to the sum function
// Then it should return that number
describe( "sum function", () => {
test.todo("given an array with one number, returns that number", ()=> {
    expect(sum([10])).toBe([10]);
    });


// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test.todo("given an array with negative numbers, returns that correct total sum", ()=> {
    expect(sum([10, -10, -30])).toBe([-10]);
    });

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test.todo("given an array with decimal/float numbers, returns the correct total sum", ()=> {
    expect(sum([7, 12.5, 11.5])).toBe([31]);
    });

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test.todo("given an array with non-numbers, returns the sum of numeric elements and ignores non-numeric elements", ()=> {
    expect(sum([10, "farai", 40])).toBe([50]);
    });

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test.todo("given an array with non-numbers, returns the sum of numeric elements and ignores non-numeric elements", ()=> {
    expect(sum(["keith", "farai", "hi"])).toBe([0]);
    });
});
