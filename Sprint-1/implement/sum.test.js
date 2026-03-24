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

test("return 0 for an empty array", () => {
    expect(sum([])).toEqual(0);
})

// Given an array with just one number
// When passed to the sum function
// Then it should return that number

test("given an array with just one number, return that number", () => {
    expect(sum([3])).toEqual(3);
    expect(sum([-3])).toEqual(-3);
    expect(sum([0])).toEqual(0);
})

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum

test("return the correct total when passed negative numbers", () => {
    expect(sum([-3, -6, -1])).toEqual(-10);
})

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("decimal number arrays", () => {
    expect(sum([0.2, 0.4, 0.2])).toBeCloseTo(0.8);
    expect(sum([1.2, 0.6, 0.005])).toBeCloseTo(1.805);
})

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements

test("an array with non-numbers", () => {
    expect(sum([2, "Blue", 3, "Black", "Green"])).toEqual(5);
})

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs

test("an array with non-number values only", () => {
    expect(sum([true, false, "Black"])).toEqual(0);
    expect(sum([undefined, null, "Black"])).toEqual(0);
})
