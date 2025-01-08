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
test("given an empty array, returns -Infinity", () =>{
    expect(findMax([])).toBe(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("Given an array with one number", () =>{
    expect(findMax([2])).toBe(2);
    expect(findMax([4])).toBe(4);
});
// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("Given an array with both positive and negative numbers", () =>{
    expect(findMax([2, -4, 3, 6,])).toEqual(6);
    expect(findMax([0, -9, 3])).toEqual(3);
});
// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("Given an array with both positive and negative numbers", () =>{
    expect(findMax([-2, -4, -3, -6,])).toEqual(-2);
    expect(findMax([-14, -9, -1, -3])).toEqual(-1);
});
// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("Given an array with decimal numbers", () =>{
    expect(findMax([2.5, 8.4, 6,])).toEqual(8.4);
    expect(findMax([0, 3, 6.4])).toEqual(6.4);
});
// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("Given an array with non-number values", () =>{
    expect(findMax(["a", 8, 6, "b", 9])).toEqual(9);
    expect(findMax([0, "c", 3, 14])).toEqual(14);
});
// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("Given an array with only non-number values", () =>{
    expect(findMax(["a", "b", "c"])).toEqual(-Infinity);
    expect(findMax(["d", "c", "f", "g"])).toEqual(-Infinity);
});