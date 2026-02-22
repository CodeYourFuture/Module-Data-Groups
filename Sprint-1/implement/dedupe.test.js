const dedupe = require("./dedupe.js");

// Case 1: Return an empty array when input is []
test("given an empty array, it returns an empty array", () => {
  expect(dedupe([])).toEqual([]);
});

// Case 2: Return original array where there are no duplicates
test("given an array without duplicates, it returns the original", () => {
  const noDuplicates = [
    { input: [3, 1, 2], expected: [3, 1, 2] },
    { input: [5, 1, 3, 4, 2], expected: [5, 1, 3, 4, 2] },
    { input: [4, 2, 1, 3], expected: [4, 2, 1, 3] },
    { input: [6, 1, 5, 3, 2, 4], expected: [6, 1, 5, 3, 2, 4] },
    { input: [110, 20, 0], expected: [110, 20, 0] },
    { input: [6, 5, 2, 12, 14], expected: [6, 5, 2, 12, 14] },
  ];

  noDuplicates.forEach(({ input, expected }) => {
    expect(dedupe(input)).toEqual(expected);
  });
});
