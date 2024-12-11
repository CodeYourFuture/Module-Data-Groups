/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");

// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0
test.todo("given an empty array, returns 0")

const currentOutput0 = sum([]);
const targetOutput0 = 0;

test('It should return 0', () => {
    expect(currentOutput0).toEqual(targetOutput0);
})
// Given an array with just one number
// When passed to the sum function
// Then it should return that number
const currentOutput = sum([5]);
const targetOutput = 5;

test('It should return the only value available', () => {
    expect(currentOutput).toEqual(targetOutput);
})
// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
const currentOutput1 = sum([-100, -20, -5, -9, -45]);
const targetOutput1 = -179;

test('It should return the sum of the negatives', () => {
    expect(currentOutput1).toEqual(targetOutput1);
})
// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
const currentOutput2 = sum([0.10, 2.45, 5.45, 9.46, 4.5]);
const targetOutput2 = 21.96;

test('It should return the sum of the decimals', () => {
    expect(currentOutput2).toEqual(targetOutput2);
})
// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements

const currentOutput3 = sum(['serna', -25, 5.45, 'hello', 4.5, 98, 839]);
const targetOutput3 = 921.95;

test('It should return the sum of the numerical values, even though there are NAN values', () => {
    expect(currentOutput3).toEqual(targetOutput3);
})

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs

const currentOutput4 = sum(['serna', 'malala', 'sernamalala', 'hello', 'annyeong', 'hola', 'bonjour']);
const targetOutput4 = -Infinity;

test('It should return the value of -Infinity', () => {
    expect(currentOutput4).toEqual(targetOutput4);
})
