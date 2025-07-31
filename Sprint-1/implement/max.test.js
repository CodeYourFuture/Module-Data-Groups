/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");
describe("Find the maximum element of an array of numbers", () => {
  test("given an empty array, returns -Infinity", () => {
    const elements = [];
    const currentOutput = findMax(elements);
    const targetOutput = -Infinity;
    expect(currentOutput).toBe(targetOutput);
  });

  test("given an array with one number, return that number", () => {
    const elements = [9];
    const currentOutput = findMax(elements);
    const targetOutput = 9;
    expect(currentOutput).toBe(targetOutput);
  });

  test("Given an array with both positive and negative numbers, return the largest number overall", () => {
    const elements = [9, -10, 100, -100];
    const currentOutput = findMax(elements);
    const targetOutput = 100;
    expect(currentOutput).toBe(targetOutput);
  });

  test("Given an array with just negative numbers, return the closest one to zero", () => {
    const elements = [-99, -10, -100];
    const currentOutput = findMax(elements);
    const targetOutput = -10;
    expect(currentOutput).toBe(targetOutput);
  });

  test("Given an array with decimal numbers, return the closest one to zero, return the largest decimal number", () => {
    const elements = [10.01, 10.02, 10.03];
    const currentOutput = findMax(elements);
    const targetOutput = 10.03;
    expect(currentOutput).toBe(targetOutput);
  });

  test("Given an array with non-number values, return the max and ignore non-numeric values", () => {
    const elements = ["hi", "4", "5", 6, 8];
    const currentOutput = findMax(elements);
    const targetOutput = 8;
    expect(currentOutput).toBe(targetOutput);
  });

  test("Given an array with only non-number values, return the least surprising value given how it behaves for all other inputs", () => {
    const elements = ["hi", "hello", "world"];
    const currentOutput = findMax(elements);
    const targetOutput = -Infinity;
    expect(currentOutput).toBe(targetOutput);
  });
});