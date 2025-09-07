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
  });

  test("sums an array of positive numbers correctly", () => {
    expect(sum([10, 20, 30])).toBe(60);
  });

  test("handles negative numbers correctly", () => {
    expect(sum([-1, -5, 10])).toBe(4);
  });

  test("handles decimal numbers correctly", () => {
    expect(sum([1.5, 2.5, 3])).toBe(7);
  });

  test("ignores non-numeric values in the array", () => {
    expect(sum(['a', 1, null, 2, 'hello'])).toBe(3);
  });

  test("returns 0 if only non-numeric values are in the array", () => {
    expect(sum(['a', null, 'hello'])).toBe(0);
  });
});
