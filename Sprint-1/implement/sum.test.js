const sum = require("./sum.js");

describe("sum", () => {
  test("given an empty array, it should return 0", () => {
    expect(sum([])).toEqual(0);
  });

  test("given array with one number, it should return that number", () => {
    expect(sum([5])).toEqual(5);
  });

  test("given array with only -ve numbers, it should return the correct total sum", () => {
    expect(sum([-10, -20, -30, -40])).toEqual(-100);
  });

  test("given array with only decimal/float numbers, it should return the correct total sum", () => {
    expect(sum([0.5, 0.12, 3.14, 0.002])).toEqual(3.762);
  });

  test("given array with non-number values, it should return the sum of the numerical elements", () => {
    expect(sum([1, "a", 0.5, "b", -10])).toEqual(-8.5);
  });

  test("given array with only non-number values, it should return 0", () => {
    expect(sum(["cow", "cat", "dog"])).toEqual(0);
  });
});
