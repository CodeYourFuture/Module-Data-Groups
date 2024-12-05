const calculateFrequency = require("./solution");

describe("calculateFrequency", () => {
  test("calculates the resulting frequency correctly for the given input", () => {
    const input = [
      -10, -12, +1, +14, +11, -19, -4, +10, +10, -12, -13, -10, -8, +11, +3,
      -10, +8, +5, -14, +7, +12, +12, +14, -1, +17, -5, +9, -15, +8, -16, +9,
      +6, +17, -11, +19, +11, -9, -1, -8, -16,
      // (Include the rest of your input here)
      +75784,
    ];

    const expectedResult = 75804; // Replace 75804 with the actual sum.
    expect(calculateFrequency(input)).toBe(expectedResult);
  });
  test("calculates the resulting frequency correctly for the given input", () => {
    const input = [-10, -12, +1, +14];

    const expectedResult = -7; // Replace 75804 with the actual sum.
    expect(calculateFrequency(input)).toBe(expectedResult);
  });
});
