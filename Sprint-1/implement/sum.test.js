/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");

describe("sum", () => {
  test("given an empty array, returns 0", () => {
    expect(sum([])).toBe(0);
  });

  test("given an array with one number, returns that number", () => {
    expect(sum([5])).toBe(5);
    expect(sum([-10])).toBe(-10);
    expect(sum([0])).toBe(0);
  });

  test("given an array containing negative numbers, returns correct sum", () => {
    expect(sum([10, -5, 3])).toBe(8);
    expect(sum([-1, -2, -3])).toBe(-6);
    expect(sum([-10, 20, -5])).toBe(5);
  });

  test("given an array with decimal numbers, returns correct sum", () => {
    expect(sum([1.5, 2.5, 1.0])).toBeCloseTo(5);
    expect(sum([0.1, 0.2, 0.3])).toBeCloseTo(0.6);
    expect(sum([-1.5, 2.5, -1.0])).toBeCloseTo(0);
  });

  test("given an array with non-number values, ignores them and returns sum of numbers", () => {
    expect(sum(["hey", 10, "hi", 60, 10])).toBe(80);
    expect(sum([30, "hello", 50, null, undefined, 40])).toBe(120);
    expect(sum([true, false, 25, 15])).toBe(40);
    expect(sum([10, "20", 30])).toBe(40); // string '20' ignored
  });

  test("given an array with only non-number values, returns 0", () => {
    expect(sum(["hello", "world"])).toBe(0);
    expect(sum([null, undefined])).toBe(0);
    expect(sum([true, false])).toBe(0);
    expect(sum([{}, []])).toBe(0);
  });
});
