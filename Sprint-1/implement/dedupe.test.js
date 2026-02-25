const dedupe = require("./dedupe.js");

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
    expect(dedupe(input)).toEqual(expected);
  });
});

// Case 3: Return array  with duplicates removed when input has duplicates
test("given an array with duplicates, it returns unique items", () => {
  const withDuplicates = [
    { input: [3, 1, 1, 2], expected: [3, 1, 2] },
    { input: [5, 1, 5, 3, 5, 4, 2], expected: [5, 1, 3, 4, 2] },
    { input: ["4", "2", "4", "1", "2", "3"], expected: ["4", "2", "1", "3"] },
    {
      input: ["six", "one", "5", "six", "3", "six", "2", "5", "4"],
      expected: ["six", "one", "5", "3", "2", "4"],
    },
    { input: [110, "20", 110, "zero", "zero"], expected: [110, "20", "zero"] },
    { input: [6, 5, 2, 6, 5, 2], expected: [6, 5, 2] },
  ];

  withDuplicates.forEach(({ input, expected }) => {
    expect(dedupe(input)).toEqual(expected);
  });
});

// Case 4: Throw an error if an array isn't used
test("should throw an error if the input is not an array", () => {
  const notArrays = [
    "hello world",
    "",
    null,
    -5,
    undefined,
    {},
    Infinity,
    true,
  ];

  notArrays.forEach((notArray) => {
    expect(() => {
      dedupe(notArray);
    }).toThrow();
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
    const original = [...inputArray];
    dedupe(inputArray);
    expect(inputArray).toEqual(original);
  });
});
