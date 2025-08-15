/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");

// Acceptance Criteria:
test("given an array, returns the total of numbers",() => {expect(sum([10, 20, 30])).toEqual(60)});

// Given an empty array
// When passed to the sum function
// Then it should return 0
test("given an empty array, returns 0",() => {expect(sum([])).toEqual(0)});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("given an array with single number, returns the number",() => {expect(sum([72])).toEqual(72)});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("an array with negative numbers, returns the total",() => {expect(sum([-1,-27,-13,-59])).toEqual(-100)});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("an array with decimal/float numbers, returns the correct sum",() => {expect(sum([1.1, 3.5, -4.9, 2.2])).toBeCloseTo(1.9,5)});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("an array mixed with non-numbers, returns sum ignoring the non-numbers",() => {expect(sum(["hello", null, 17, "99", 46, -53])).toEqual(10)});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("an array with only non-numbers, returns least surprising value",() => {expect(sum(["fan", null, undefined, {}, ""])).toEqual(null)});