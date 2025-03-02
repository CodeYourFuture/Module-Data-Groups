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
test("Given an empty array", () => {
    const result = findMax([]);
    expect(result).toBe(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("Given an array with one number" ,()=>{
    expect(findMax([10])).toBe(10);
});


// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("Given an array with both positive and negative numbers" ,()=>{
    expect(findMax([-10, 20, -30, 40])).toBe(40);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("Given an array with just negative numbers" ,()=>{
    expect(findMax([-10, -20, -30, -40])).toBe(-10);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("Given an array with decimal numbers" ,()=>{
    expect(findMax([10.5, 20.3, 30.7, 40.1])).toBe(40.1);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("Given an array with non-number values" ,()=>{
    expect(findMax(['hey', 10, 'hi', 60, 10])).toBe(60);
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("Given an array with only non-number values" ,()=>{
    expect(findMax(['hey', 'hi', 'hello', 'world'])).toBe(undefined);
});