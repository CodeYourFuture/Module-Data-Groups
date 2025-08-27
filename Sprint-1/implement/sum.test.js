/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");

// Acceptance Criteria:
describe("Sum the numbers in an array", () => {
  test("Given an empty array, return 0", () => {
    const elements = [];
    const currentOutput = sum(elements);
    const targetOutput = 0;
    expect(currentOutput).toBe(targetOutput);
  });

  test("Given an array with just one number, return that number", () => {
    const elements = [8];
    const currentOutput = sum(elements);
    const targetOutput = 8;
    expect(currentOutput).toBe(targetOutput);
  });

  test("Given an array containing negative numbers, return the correct total sum", () => {
    const elements = [-1, -2, -3];
    const currentOutput = sum(elements);
    const targetOutput = -6;
    expect(currentOutput).toBe(targetOutput);
  });

  test("Given an array containing decimal/float numbers, return the correct total sum", () => {
    const elements = [-1.2, -2.2, -3.2];
    const currentOutput = sum(elements);
    const targetOutput = -6.6;
    expect(currentOutput).toBe(targetOutput);
  });

  test("Given an array containing non-number values, return sum of numerical values", () => {
    const elements = ["CYF", "ITD", "ITP", 4, 6];
    const currentOutput = sum(elements);
    const targetOutput = 10;
    expect(currentOutput).toBe(targetOutput);
  });

  test("Given an array containing non-number values, return the least surprising value given how it behaves for all other inputs", () => {
    const elements = ["CYF", "ITD", "ITP"];
    const currentOutput = sum(elements);
    const targetOutput = 0;
    expect(currentOutput).toBe(targetOutput);
  });
});
