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
describe("findMax", () => {
test("returns -infinity with empty array given", () => {
    expect(findMax([])).toEqual(-Infinity);
});


// Given an array with one number
// When passed to the max function
// Then it should return that number
test("returns a number with an array with one number given", () => {
    expect(findMax([5])).toEqual(5);
});
// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("returns the largest number with both positive and negative numbers given", () => {
    expect(findMax([5,-2])).toEqual(5);
});
// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("returns the closest one to zero number with an array with just negative numbers given", () => {
    expect(findMax([-1,-6,-2])).toEqual(-1);
});
// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("returns the largest decimal number with decimal numbers given", () => {
    expect(findMax([0.9, 0.01, 0.17, 0.0001])).toEqual(0.9);
});
// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("returns the max and ignore non-numeric values with an array with non-number values", () => {
    expect(findMax([0.9, 't', 0.01, 0.17,'g', 'u', 0.0001])).toEqual(0.9);
});
// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("returns the max and ignore non-numeric values with an array with non-number values", () => {
    expect(findMax(['t', 'g', 'u','r'])).toEqual(-Infinity);
});
});