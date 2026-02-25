const dedupe = require("./dedupe.js");

describe("dedupe", () => {
  // Case 1: Return an empty array when input is []
  test("given an empty array, it returns an empty array", () => {
    expect(dedupe([])).toEqual([]);
  });

  // Case 2: Return original array where there are no duplicates
  test("given an array without duplicates, it returns the original", () => {
    const noDuplicates = [
      { input: [4, 2, 1, 3], expected: [4, 2, 1, 3] },
      { input: [3, 1, 2], expected: [3, 1, 2] },
      { input: ["5", "1", "3", "4", "2"], expected: ["5", "1", "3", "4", "2"] },
      {
        input: ["6", "1", "5", "3", "2", "4"],
        expected: ["6", "1", "5", "3", "2", "4"],
      },
      { input: [110, "20", 0], expected: [110, "20", 0] },
      {
        input: [6, "five", 2, "apple", 14],
        expected: [6, "five", 2, "apple", 14],
      },
    ];

    noDuplicates.forEach(({ input, expected }) => {
      try {
        expect(dedupe(input)).toEqual(expected);
      } catch (error) {
        throw new Error(
          `Failed to return the original [${input}] when no duplicates are present: ${error.message}`
        );
      }
    });
  });

  // Case 3: Return array with duplicates removed when input has duplicates
  test("given an array with duplicates, it returns unique items", () => {
    const withDuplicates = [
      { input: [3, 1, 1, 2], expected: [3, 1, 2] },
      { input: [5, 1, 5, 3, 5, 4, 2], expected: [5, 1, 3, 4, 2] },
      { input: ["4", "2", "4", "1", "2", "3"], expected: ["4", "2", "1", "3"] },
      {
        input: ["six", "one", "5", "six", "3", "six", "2", "5", "4"],
        expected: ["six", "one", "5", "3", "2", "4"],
      },
      {
        input: [110, "20", 110, "zero", "zero"],
        expected: [110, "20", "zero"],
      },
      { input: [6, 5, 2, 6, 5, 2], expected: [6, 5, 2] },
    ];

    withDuplicates.forEach(({ input, expected }) => {
      try {
        expect(dedupe(input)).toEqual(expected);
      } catch (error) {
        throw new Error(
          `Failed to remove duplicates from input [${input}]: ${error.message}`
        );
      }
    });
  });

  // Case 4: Throw an error if an array isn't used
  test("given a non-array input, it throws an error", () => {
    const notArrays = [
      "hello world",
      "",
      null,
      -5,
      undefined,
      {},
      Infinity,
      true,
      NaN,
    ];

    notArrays.forEach((notArray) => {
      try {
        expect(() => {
          dedupe(notArray);
        }).toThrow();
      } catch (error) {
        throw new Error(
          `Failed to throw an error for ${JSON.stringify(notArray)} (${typeof notArray}): ${error.message}`
        );
      }
    });
  });

  // Case 5: Don't modify the input array
  test("doesn't modify the input array", () => {
    const inputArrays = [
      [3, 1, 1, 2],
      ["4", "2", "4", "1", "2", "3"],
      [6, "five", 2, "apple", 14],
      [110, undefined, Infinity, {}, "zero", true],
    ];
    inputArrays.forEach((inputArray) => {
      try {
        const original = [...inputArray];
        dedupe(inputArray);
        expect(inputArray).toEqual(original);
      } catch (error) {
        throw new Error(
          `Failed to keep the original input array [${inputArray}] unmutated: ${error.message}`
        );
      }
    });
  });
});
