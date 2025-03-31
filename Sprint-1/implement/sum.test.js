const findMax = require("./max.js");
//  Find the maximum element of an array of numbers

// In this kata, you will need to implement a function that find the largest numerical element of an array.

// E.g. max([30, 50, 10, 40]), target output: 50
// E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)
test("find the largest numerical element of an array",()=>{
    expect(findMax([30, 50, 10, 40])).toBe(50)
    expect(findMax(['hey', 10, 'hi', 60, 10])).toBe(60)
})

// You should implement this function in max.js, and add tests for it in this file.

// We have set things up already so that this file can see your function from the other file.


// Given an empty array
// When passed to the max function
// Then it should return -Infinity
// Delete this test.todo and replace it with a test.
test("given an empty array, returns -Infinity",()=>{
    expect(findMax([])).toBe(-Infinity)
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("Given an array with one number,Then it should return that number",()=>{
    expect(findMax([5])).toBe(5)
});
// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("Given an array with both positive and negative numbers,then return the largest number overall",()=>{
    expect(findMax([1, -5, -2, 0, -8])).toBe(1)
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("Given an array with just negative numbers,Then it should return the closest one to zero",()=>{
    expect(findMax([-5, -2, -8])).toBe(-2)
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test(" Given an array with decimal numbers,Then it should return the largest decimal number",()=>{
    expect(findMax([1.1, 2.5, 0.9])).toBeCloseTo(2.5);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("Given an array with non-number values,Then it should return the max and ignore non-numeric values",()=>{
    expect(findMax([10, 'a', 20, 'b', 30])).toBe(30);
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("Given an array with only non-number valuesThen it should return the least surprising value given how it behaves for all other inputs",()=>{
    expect(findMax(['hey', 'hi', 'hello'])).toBe(-Infinity);
});
