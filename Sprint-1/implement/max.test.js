/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");

test("given an empty array, returns -Infinity" , () => {
    expect(findMax([])).toEqual("Invalid Input : Empty Array cant have Maximum num.");
});

test("given an array with one number, returns that number" , () => {
    expect(findMax([1])).toEqual(1);
});

test("given an array with negative and positive numbers, returns that largest of all numbers" , () => {
    expect(findMax([0,1,-1,4,-4])).toEqual(4);
});

test("given an array with decimal numbers, returns the largest decimal number" , () => {
    expect(findMax([1.3,2.2,-4.6,0.0])).toEqual(2.2);
});

test("given an array with negative numbers, returns the biggest negative number" , () => {
    expect(findMax([-1,-4,-2,-9])).toEqual(-1);
});

test("given an array with mixed data type, returns the biggest number skipping other data types" , () => {
    expect(findMax([-1,-4,-2,'bob',false,-9])).toEqual(-1);
});

test("given an array with non numeric elements, returns -Infinity" , () => {
    expect(findMax(['bob',false])).toEqual(-Infinity);
});


// Given an empty array
// When passed to the max function
// Then it should return -Infinity
// Delete this test.todo and replace it with a test.


// Given an array with one number
// When passed to the max function
// Then it should return that number

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
