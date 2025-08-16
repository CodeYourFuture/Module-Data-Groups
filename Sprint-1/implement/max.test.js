/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");

//Given an array with regular integers, when passed to the max function it should return the highest
test("an array with regular integers, returns the highest number",() => {expect(findMax([30, 50, 10, 40])).toEqual(50)});

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
// Delete this test.todo and replace it with a test.
test("given an empty array, returns -Infinity",() => {expect(findMax([])).toEqual(-Infinity)});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("single element array, returns the only item",() => {expect(findMax([23])).toEqual(23)});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("an array with positive and negative numbers, returns the largest",() => {expect(findMax([-5, 15, -20, 3])).toEqual(-20)});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("an array with just negative numbers, closest to zero",() => {expect(findMax([-9, -3, -20, -1])).toEqual(-1)});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("an array with decimal numbers, returns the largest decimal number",() => {expect(findMax([1.1, 3.5, -4.9, 2.2])).toEqual(-4.9)});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("an array mixed with non-numbers, returns max ignoring the non-numbers",() => {expect(findMax(["hello", null, 42, "99", undefined, -100])).toEqual(-100)});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("an array with only non-numbers, returns least surprising value",() => {expect(findMax(["fan", null, undefined, {}, ""])).toEqual(-Infinity)});
