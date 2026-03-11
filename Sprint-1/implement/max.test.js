const findMax = require("./max.js");

describe("findMax", () => {
  // Case 1: Given an empty array, it returns -Infinity
  test("given an empty array, returns -Infinity", () => {
    expect(findMax([])).toEqual(-Infinity);
  });

  // Case 2: Given an array with one number, it returns that number
  test("given an array with one number, it returns that number", () => {
    const singleNumbers = [0, 1, 6, 10, 100, 545465, -999, -78];

    singleNumbers.forEach((num) => {
      try {
        const expected = num;
        expect(findMax([num])).toEqual(expected);
      } catch (error) {
        throw new Error(
          `Failed to return ${num} when given an array with a single number: ${error.message}`
        );
      }
    });
  });

  // Case 3: Given an array with both positive and negative numbers, it returns the largest number overall
  test("given an array both positive and negative numbers, it returns the largest number", () => {
    const posAndNegs = [
      { input: [3, -4], expected: 3 },
      { input: [1, 54, -5, -3], expected: 54 },
      { input: [-40, -2, -1, 3], expected: 3 },
      { input: [-6, -1, -5, -3, -2, -4], expected: -1 },
      { input: [785, 0, -999], expected: 785 },
    ];

    posAndNegs.forEach(({ input, expected }) => {
      try {
        expect(findMax(input)).toEqual(expected);
      } catch (error) {
        throw new Error(
          `Failed to return the largest number ${expected} when given the array [${input}] containing positive and negative numbers: ${error.message}`
        );
      }
    });
  });

  // Case 4: Given an array with just negative numbers, returns the closest one to zero
  test("given an array with just negative numbers, it returns the number closest to zero", () => {
    const negNums = [
      { input: [-1, -2, -3, -4, -5], expected: -1 },
      { input: [-5, -4, -3, -2, -1], expected: -1 },
      { input: [-10, -20, -20, -5, -5], expected: -5 },
      { input: [-100, -1000, -100, -57, -57], expected: -57 },
      { input: [-18, -98, -3, -16, -20000], expected: -3 },
    ];

    negNums.forEach(({ input, expected }) => {
      try {
        expect(findMax(input)).toEqual(expected);
      } catch (error) {
        throw new Error(
          `Failed to return the number closest to zero ${expected} when given the array [${input}] containing only negative numbers: ${error.message}`
        );
      }
    });
  });

  // Case 5: Given an array with decimal numbers returns the largest decimal number
  test("given an array with decimal numbers, it returns the largest decimal number", () => {
    const decimalNums = [
      { input: [1.5, 2.3, 3.7], expected: 3.7 },
      { input: [0.1, 0.2, 0.3], expected: 0.3 },
      { input: [-1.5, -2.3, -3.7], expected: -1.5 },
      { input: [-6.87, -0.3, -99], expected: -0.3 },
      { input: [-15, -23, 37], expected: 37 },
    ];

    decimalNums.forEach(({ input, expected }) => {
      try {
        expect(findMax(input)).toEqual(expected);
      } catch (error) {
        throw new Error(
          `Failed to return the largest decimal number ${expected} when given the array [${input}]: ${error.message}`
        );
      }
    });
  });

  // Case 6: Given an array with non-number values, it returns the max and ignore non-numeric values
  test("given an array with non-number values, it returns the max and ignore non-numeric values", () => {
    const withNonNums = [
      { input: [1, 2, "hello", 3, null, 4, undefined, 5], expected: 5 },
      { input: ["a", "b", 0], expected: 0 },
      {
        input: [null, undefined, false, true, -Infinity, NaN, -100],
        expected: -100,
      },
    ];

    withNonNums.forEach(({ input, expected }) => {
      try {
        expect(findMax(input)).toEqual(expected);
      } catch (error) {
        throw new Error(
          `Failed to return the expected value ${expected} when given the array [${input}]: ${error.message}`
        );
      }
    });
  });

  // Case 7: Given an array with only non-number values, it returns the -Infinity
  test("given an array with only non-number values, it returns the -Infinity", () => {
    const onlyNonNums = [
      { input: ["a", "b", "c"], expected: -Infinity },
      { input: [null, undefined, false], expected: -Infinity },
      { input: [NaN, Infinity, -Infinity], expected: -Infinity },
    ];

    onlyNonNums.forEach(({ input, expected }) => {
      try {
        expect(findMax(input)).toEqual(expected);
      } catch (error) {
        throw new Error(
          `Failed to return the expected value ${expected} when given the array [${input}]: ${error.message}`
        );
      }
    });
  });
});
