/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

//const findMax = require("./max.js");

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
// Delete this test.todo and replace it with a test.
//test.todo("given an empty array, returns -Infinity");

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


// My tests: 
const findMax = require("./max.js");
// describe is the frame of all other tests
describe("findMax", () => {
  test("given an empty array, returns -Infinity", () => {
    expect(findMax([])).toBe(-Infinity);
  });
  // from now on you can use test 
  test("returns the number for array with one number", () => {
    expect(findMax([5])).toBe(5);
    expect(findMax([-10])).toBe(-10);
  });

  test("returns largest number with positive and negative numbers", () => {
    expect(findMax([30, 50, 10, 40])).toBe(50);
    expect(findMax([-5, -1, -10])).toBe(-1);
  });

  test("returns closest to zero for negative numbers", () => {
    expect(findMax([-10, -5, -20])).toBe(-5);
    expect(findMax([-100, -1, -50])).toBe(-1);
  });

  test("returns largest decimal number", () => {
    expect(findMax([1.5, 2.7, 1.2])).toBe(2.7);
    expect(findMax([-1.5, -0.5, -2.0])).toBe(-0.5);
  });

  test("ignores non-number values and returns max", () => {
    expect(findMax(["hey", 10, "hi", 60, 10])).toBe(60);
    expect(findMax([null, 5, undefined, 20, "hello"])).toBe(20);
  });

  test("returns -Infinity for arrays with only non-number values", () => {
    expect(findMax(["hello", "world", null, undefined])).toBe(-Infinity);
    expect(findMax([true, false, "test"])).toBe(-Infinity);
  });
});