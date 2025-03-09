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
it("given an empty array, returns 0",() => {
    expect(sum([])).toBe(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("Given an array with just one number, Then it should return that number", () =>{
    expect(sum([5])).toBe(5);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("Given an array containing negative numbers, Then it should still return the correct total sum", () =>{
    expect(sum([3,3,-5])).toBe(1)
});
// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
it("Given an array with decimal/float numbers, then it should return the correct total sum", () =>{
    expect(sum([3, 4, 2.4])).toBe(9.4)
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
it("Given an array containing non-number values,then it should ignore the non-numerical values and return the sum of the numerical elements", () =>{
    expect(sum([3, 4 , 5,"a", "hello"])).toBe(12)
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
it("Given an array with only non-number values, then is should return 0 ", () =>{
    expect(sum(["hi","Amir","Shohreh"])).toBe(0)
});
