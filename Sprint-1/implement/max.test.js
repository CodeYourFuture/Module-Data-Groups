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
test.todo("given an empty array, returns -Infinity");
const currentOutput0 = findMax([]);
const targetOutput0 = -Infinity;

test('It should return the only value', () => {
    expect(currentOutput0).toEqual(targetOutput0);
})
// Given an array with one number
// When passed to the max function
// Then it should return that number

const currentOutput = findMax([5]);
const targetOutput = 5;

test('It should return the only value', () => {
    expect(currentOutput).toEqual(targetOutput);
})
// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall

const currentOutput1 = findMax([-100, -20, -5, 9, 45]);
const targetOutput1 = 45;

test('It should return the most positive value', () => {
    expect(currentOutput1).toEqual(targetOutput1);
})
// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
const currentOutput2 = findMax([-100, -20, -5, -9, -45]);
const targetOutput2 = -5;

test('It should return the closest value to 0', () => {
    expect(currentOutput2).toEqual(targetOutput2);
})
// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number

const currentOutput3 = findMax([0.10, -2.45, 5.45, 9.46, 4.5]);
const targetOutput3 = 9.46;

test('It should return the most positive value', () => {
    expect(currentOutput3).toEqual(targetOutput3);
})

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
const currentOutput4 = findMax(['serna', -25, 5.45, 'hello', 4.5, 98, 839]);
const targetOutput4 = 839;

test('It should return the most positive value, even though there are NAN values', () => {
    expect(currentOutput4).toEqual(targetOutput4);
})
// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs

const currentOutput5 = findMax(['serna', 'malala', 'sernamalala', 'hello', 'annyeong', 'hola', 'bonjour']);
const targetOutput5 = -Infinity;

test('It should return the most positive value, even though there are NAN values', () => {
    expect(currentOutput5).toEqual(targetOutput5);
})