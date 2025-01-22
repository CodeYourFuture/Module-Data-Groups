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
describe("sum", () => {
    test("returns 0 with empty array given", () => {
        expect(sum([])).toEqual(0);
    });


// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("returns a number with just one number array given", () => {
    expect(sum([2])).toEqual(2);
});
// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("returns  total sum with an array containing negative numbers given", () => {
    expect(sum([-2, -6, -8])).toEqual(-16);
});
// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum


test("returns total sum with an array of decimal/float numbers", () => {
    const result = sum([1.2, 0.6, 0.005]);
    const expected = 1.805;
    const delta = 1e-9; // Allowable difference (precision tolerance)

    expect(Math.abs(result - expected)).toBeLessThan(delta);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("return the sum of the numerical elements with an array containing non-number values given", () => {
    expect(sum([1, 'r', 4, 9, 'k'])).toEqual(14);
});
// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("returns surprising value sum with an array with only non-number values", () => {
    expect(sum(['m', 'w', 'l'])).toEqual(0);
});
});