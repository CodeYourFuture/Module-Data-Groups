/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");

test("Given an empty array then it should return -Infinity", () => {
  expect(findMax([])).toBe(-Infinity);
});

test("Given an array with one number then it should return that number", () => {
  expect(findMax([1])).toBe(1);
});


test("Given an array with both positive and negative numbers then it should return the largest number overall", () => {
  expect(findMax([1, 4, 5, -4])).toBe(5);
})

test("Given an array with just negative numbers then it should return the closest one to zero", () => {
  expect(findMax([-1, -4, -5, -4])).toBe(-1);
});

test("Given an array with decimal numbers then it should return the largest decimal number", () => {
  expect(findMax([-1.45, -4.4, -5.6, -4.1])).toBe(-1.45);
});


test("Given an array with non-number values then it should return the max and ignore non-numeric values", () => {
  expect(findMax([-1.45, "dd", -5.6, 90])).toBe(90);
});

// test("Given an array with only non-number values then it should return the least surprising value given how it behaves for all other inputs", () => {
//   expect(findMax(["dd", "90"])).toBe("Input has only non-number values");
// });
