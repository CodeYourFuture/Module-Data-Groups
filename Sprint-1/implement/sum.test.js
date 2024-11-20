const sum = require("./sum.js");

describe("sum", () => {
  test("given an empty array, returns 0", () => {
    expect(sum([])).toEqual(0);
  });

  test("given an array with just one number, returns that number", () => {
    expect(sum([42])).toEqual(42);
  });

  test("given an array containing negative numbers, returns the correct total sum", () => {
    expect(sum([-10, 20, -30, 40])).toEqual(20);
  });

  test("given an array with decimal/float numbers, returns the correct total sum", () => {
    expect(sum([1.5, 2.5, 3.5])).toEqual(7.5);
  });

  test("given an array containing non-number values, ignores the non-numerical values and returns the sum of the numerical elements", () => {
    expect(sum([10, "hello", 20, {}, 30])).toEqual(60);
  });
  test("given an array with only non-number values, returns 0", () => {
    expect(sum(["a", "b", {}, []])).toEqual(0);
  });
});

