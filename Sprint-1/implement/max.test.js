/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]) throws Error("findMax requires an array of numbers") (max can't compare non-numerical elements, so it shouldn't guess)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
// Delete this test.todo and replace it with a test.
test("given an empty array, returns -Infinity", () => {
    const input = [];
    const result = findMax(input);
    expect(result).toEqual(-Infinity)
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("given [3], returns 3", () => {
    const input = [3];
    const result = findMax(input);
    expect(result).toEqual(3)
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("given [3, -2, 4, -10], returns 4", () => {
    const input = [3, -2, 4, -10];
    const result = findMax(input);
    expect(result).toEqual(4)
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("given [-3, -2, -4, -10], returns -2", () => {
    const input = [-3, -2, -4, -10];
    const result = findMax(input);
    expect(result).toEqual(-2)
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("given [0.3, 0.22, 0.64, 0.1], returns 0.64", () => {
    const input = [0.3, 0.22, 0.64, 0.1];
    const result = findMax(input);
    expect(result).toEqual(0.64)
});
// Given an array containing a value that isn't a number
// When passed to the max function
// Then it should throw Error("findMax requires an array of numbers")
test('given ["hi", 2, 3], throws Error:"findMax requires an array of numbers"', () => {
    const input = ['hi', 2, 3];
    //const result = findMax(input);
    expect(() => findMax(input)).toThrow("findMax requires an array of numbers")
});

// Given something that isn't an array at all, such as "hey", 42 or no argument
// When passed to the max function
// Then it should throw Error("findMax requires an array of numbers")
test('given "big snake", throws Error:"findMax requires an array of numbers"', () => {
    const input = "big snake";
    //const result = findMax(input);
    expect(() => findMax(input)).toThrow("findMax requires an array of numbers")
});