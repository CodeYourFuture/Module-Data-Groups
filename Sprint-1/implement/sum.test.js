const sum = require("./sum.js");

// Case 1: Given an empty array, it should return 0
test("given an empty array, returns 0", () => {
  expect(sum([])).toEqual(0);
});

// Case 2: Given an array with just one number, it should return that number
test("given an array with just one number, returns that number", () => {
  try {
    const singleNums = [0, 1, 5, 10, 100, -999, -78];
    singleNums.forEach((num) => {
      expect(sum([num])).toEqual(num);
    });
  } catch (error) {
    throw new Error(
      `Failed to return ${num} when given an array with just one number: ${error.message}`
    );
  }
});

// Case 3: Given an array containing negative numbers, it should return the correct total sum
test("given an array with negative numbers, returns the correct total sum", () => {
  const withNegs = [
    { input: [10, -5], expected: 5 },
    { input: [1, 54, -5, -3], expected: 47 },
    { input: [-40, -2, -1, 3], expected: -40 },
    { input: [-6, -1, -5, -3, -2, -4], expected: -21 },
    { input: [785, 0, -999], expected: -214 },
  ];

  withNegs.forEach(({ input, expected }) => {
    try {
      expect(sum(input)).toEqual(expected);
    } catch (error) {
      throw new Error(
        `Failed to return the correct total sum ${expected} when given the array [${input}] containing negative numbers: ${error.message}`
      );
    }
  });
});

// Case 4: Given an array with decimal/float numbers, it should return the correct total sum
test("given an array with decimal/float numbers, returns the correct total sum", () => {
  const withFloats = [
    { input: [1.5, 2.7, 3.8], expected: 8 },
    { input: [-1.5, -2.7, -3.8], expected: -8 },
    { input: [1.5, -2.7, 3.8], expected: 2.6 },
    { input: [-1.5, 2.7, -3.8], expected: -2.6 },
  ];

  withFloats.forEach(({ input, expected }) => {
    try {
      expect(sum(input)).toEqual(expected);
    } catch (error) {
      throw new Error(
        `Failed to return the correct total sum ${expected} when given the array [${input}] containing decimal/float numbers: ${error.message}`
      );
    }
  });
});

// Case 5: Given an array containing non-number values, it should return the sum of the numerical elements and ignore non-numerical values
test("given an array with non-number values, it returns the sum of the numerical elements and ignores non-numerical values", () => {
  const withNonNumbers = [
    { input: ["hey", 10, "hi", 60, 10], expected: 80 },
    { input: ["hello", "world"], expected: 0 },
    { input: [1, 2, "three", 4, "five"], expected: 7 },
    { input: [null, undefined, false, true], expected: 0 },
    { input: [1.5, "two", 3.5], expected: 5 },
  ];

  withNonNumbers.forEach(({ input, expected }) => {
    try {
      expect(sum(input)).toEqual(expected);
    } catch (error) {
      throw new Error(
        `Failed to return the correct sum ${expected} when given the array [${input}] containing non-number values: ${error.message}`
      );
    }
  });
});

// Case 6: Given an array with only non-number values, it should return zero
test("given an array with only non-number values, it returns the least surprising value given how it behaves for all other inputs", () => {
  const onlyNonNumbers = [
    { input: ["hello", "world"], expected: 0 },
    { input: [null, undefined, false, {}], expected: 0 },
    { input: ["a", "b", null, NaN], expected: 0 },
    { input: [Infinity, []], expected: 0 },
  ];

  onlyNonNumbers.forEach(({ input, expected }) => {
    try {
      expect(sum(input)).toEqual(expected);
    } catch (error) {
      throw new Error(
        `Failed to return the least surprising value ${expected} when given the array [${input}] containing only non-number values: ${error.message}`
      );
    }
  });
});

// Case 7: Given an array with non-number values, it should return the sum of the numerical elements and ignore non-numerical values
test("given an array with non-number values, it returns the sum of the numerical elements and ignores non-numerical values", () => {
  const withNonNumbers = [
    { input: ["hey", 10, "hi", 60, 10], expected: 80 },
    { input: ["hello", "world", -10, -30, 10], expected: -30 },
    { input: [1, 20, "three", 4, "five", NaN], expected: 25 },
    {
      input: [null, undefined, false, Infinity, 2.5, -12, -1.5],
      expected: -11,
    },
    { input: [1.5, "two", 3.5], expected: 5 },
  ];

  withNonNumbers.forEach(({ input, expected }) => {
    try {
      expect(sum(input)).toEqual(expected);
    } catch (error) {
      throw new Error(
        `Failed to return the correct sum ${expected} when given the array [${input}] containing non-number values: ${error.message}`
      );
    }
  });
});
