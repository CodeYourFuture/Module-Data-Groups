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
test("given an empty array, returns -Infinity", ()=> {
    expect(findMax([])).toBe(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("given an array with one number, returns that number", () => {
    expect(findMax([7])).toBe(7);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("given positive and negative numbers, return the largest overall", () => {
    expect(findMax([-5, 10, -20, 3])).toBe(10);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("given only negative numbers, returns the one closest to zero", () => {
    expect(findMax([-8, -2, -30])).toBe(-2);
})

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("given decimal numbers, returns the largest decimal", () => {
    expect(findMax([1.5, 2.7, 2.65])).toBe(2.7);
})

// Given an array containing a value that isn't a number
// When passed to the max function
// Then it should throw Error("findMax requires an array of numbers")
test("given an array with a non-number, throws an error", () => {
    expect(() => findMax(["hey", 10, "hi", 60, 10])).toThrow("findMax requires an array of numbers");
});

// Given something that isn't an array at all, such as "hey", 42 or no argument
// When passed to the max function
// Then it should throw Error("findMax requires an array of numbers")
test("given something that is not an array, throws an error", () => {
    expect(() => findMax("hey")).toThrow("findMax requires an array of numbers");
    expect(() => findMax(42)).toThrow("findMax requires an array of numbers");
    expect(() => findMax()).toThrow("findMax requires an array of numbers");
});
