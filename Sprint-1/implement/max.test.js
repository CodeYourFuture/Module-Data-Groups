const findMax = require("./max.js");

describe("findMax", () => {
  test("given an empty array, it should return -Infinity", () => {
    expect(findMax([])).toEqual(-Infinity);
  });

  test("given array with one number, it should return that number", () => {
    expect(findMax([5])).toEqual(5);
  });

  test("given array with both +ve and -ve numbers, it should return the largest number overall", () => {
    expect(findMax([-10, 5, -20, 3])).toEqual(5);
  });

  test("given array with only -ve numbers, it should return the closest one to zero", () => {
    expect(findMax([-10, -20, -30, -40])).toEqual(-10);
  });

  test("given array with decimal numbers, it should return the largest decimal number", () => {
    expect(findMax([0.5, 0.12, 5.6, 0.002])).toEqual(5.6);
  });

  test("given array with non-number values, it should return the max and ignore non-numeric values", () => {
    expect(findMax([5, "a", 10, "cat", 3, "b"])).toEqual(10);
  });

  test("given array with only non-number values, it should return -infinity", () => {
    expect(findMax(["cow", "cat", "dog"])).toEqual(-Infinity);
  });
});
