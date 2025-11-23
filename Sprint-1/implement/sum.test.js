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
    const currentOutput = sum([]);
    const targetPitPut= 0;

    expect(currentOutput).toEqual(targetPitPut);
})


// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("given an array whit only 1 number, returns same input",()=>{
    const currentOutput = sum([4]);
    const targetPitPut= 4;

    expect(currentOutput).toEqual(targetPitPut);
})


// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("given an  array whit a negative number, returns correct total (subtract the negative number)",()=>{
    const currentOutput = sum([1,2,3,4,-5,]);
    const targetPitPut= 5;

    expect(currentOutput).toEqual(targetPitPut);
})


// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum

test("given an  array whit a decimal/float number, returns correct total (decimal/float number)",()=>{
    const currentOutput = sum([1,2,3,4,3.5,]);
    const targetPitPut= 13.5;

    expect(currentOutput).toEqual(targetPitPut);
})


// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("given an  array whit a non-number values, returns correct total (ignore the NaN and sum the others)",()=>{
    const currentOutput = sum([1,2,3,4,"hi",5]);
    const targetPitPut= 15;

    expect(currentOutput).toEqual(targetPitPut);
})

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values, returns the least surprising value (0)", () => {
    const currentOutput = sum(["hello", null, undefined, {}, [], true, NaN]);
    const targetOutput = 0;

    expect(currentOutput).toEqual(targetOutput);
});
