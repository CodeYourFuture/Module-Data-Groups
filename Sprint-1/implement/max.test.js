/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
// Delete this test.todo and replace it with a test.
test("given an empty array, returns null",()=>{
    const result = findMax([]);
    expect(result).toBe(null);
})

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("given an array with one number, returns that number",()=>{
    const result = findMax([3]);
    expect(result).toBe(3);
})
// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("given an array with positive and negative number,return largest overall",()=>{
    const result = findMax([-1,-10,9,8,6]);
    expect(result).toBe(9);
})
// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("given an array negative number,returns number closest to zero",()=>{
    const result = findMax([-1,-10,-8,-6]);
    expect(result).toBe(-1);
})
// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("given an array decimal numbers,returns largest decimal number",()=>{
    const result = findMax([2.6, 3.5,6.9,8.5]);
    expect(result).toBe(8.5)
})
// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("given an array with non number values, return max and ignore NaN values",()=>{
    const result = findMax([1,'apple',4,'banana',6]);
    expect(result).toBe(6);
})
// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values return null",()=>{
    const result = findMax(['strawberry','apple','banana','salad']);
    expect(result).toBe(null);
})