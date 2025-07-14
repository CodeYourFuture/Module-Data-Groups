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
// test.todo("given an empty array, it returns -Infinity");

// for clarity I have grouped the tests that return -Infinity together
describe("findMax returns the correct value for empty arrays and non-numeric values", () => {
  [
    { input: [], expected: -Infinity },
    { input: ["hi", "hey", "hello", "yo"], expected: -Infinity },
    { input: [null, undefined], expected: -Infinity },
  ].forEach(({ input, expected }) =>
    test(`Given an array findMax returns the correct value for empty arrays and non-numeric values [${input}]`, () =>
      expect(findMax(input)).toEqual(expected))
  );
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
// test.todo("given an array with one number, it returns that number");

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
// test.todo(
//   "given an array with both positive and negative numbers, returns largest number overall"
// );

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
// test.todo("given an array with negative numbers, returns closest one to zero");

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
// test.todo(
//   "given an array with decimal numbers, returns largest decimal number"
// );

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
// test.todo(
//   "given an array with non-number values, returns max and ignores non-numeric values"
// );

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
// test.todo(
//   "given an array with only non-number values, returns least surprising value given how it behaves for other inputs"
// );

// for clarity I have grouped the tests that return the correct number together
describe("findMax returns the correct number", () => {
  test("Given an array with one number, return that number", () => {
    expect(findMax([17])).toEqual(17);
  });
  test("given an array with positive and negative numbers return the largest number overall", () => {
    expect(findMax([30, -50, 10, 40])).toEqual(40);
  });
  test("given an array with just negative numbers, return the closest one to zero", () => {
    expect(findMax([-30, -50, -10, -40])).toEqual(-10);
  });
  test("given an array with decimal numbers, return the largest decimal number", () => {
    expect(findMax([30.5, 50.1, 10.2, 40.3])).toEqual(50.1);
  });
  test("given an array with non-number values, return max and ignore non-numeric values, return the least surprising value given how it behaves for all other inputs", () => {
    expect(findMax(["hey", 10, "hi", 60, 10])).toEqual(60);
  });
});
