

const findMax = require("./max.js");

describe("findMax", () => {
  test("given an empty array, returns -Infinity", () => {
    expect(findMax([])).toEqual(-Infinity);
  });

  test("given an array with one number, returns that number", () => {
    expect(findMax([42])).toEqual(42);
  });

  test("given an array with both positive and negative numbers, returns the largest number overall", () => {
    expect(findMax([-10, 20, 0, 50, -30])).toEqual(50);
  });

  test("given an array with just negative numbers, returns the closest one to zero", () => {
    expect(findMax([-10, -20, -3, -40])).toEqual(-3);
  });

  test("given an array with decimal numbers, returns the largest decimal number", () => {
    expect(findMax([1.2, 3.5, 2.8, 4.1])).toEqual(4.1);
  });

  test("given an array with non-number values, returns the max and ignores non-numeric values", () => {
    expect(findMax([10, "hello", 30, {}, 50])).toEqual(50);
  });

  test("given an array with only non-number values, returns -Infinity", () => {
    expect(findMax(["a", "b", {}, [], null])).toEqual(-Infinity);
  });
});


