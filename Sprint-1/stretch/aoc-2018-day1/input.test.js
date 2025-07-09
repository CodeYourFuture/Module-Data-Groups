const calculateFrequency = require("./input.js");


test('example from prompt', () => {
    // Input as a multiline string (mimics what the puzzle provides)
  const input = `+1\n-2\n+3\n+1`;
  // Expected result: 0 + 1 - 2 + 3 + 1 = 3
  expect(calculateFrequency(input)).toBe(3);
});
 // All positive values
test('all positive numbers', () => {
  const input = `+1\n+1\n+1`;
  // Expected result: 0 + 1 + 1 + 1 = 3
  expect(calculateFrequency(input)).toBe(3);
});
// All negative values
test('all negative numbers', () => {
  const input = `-1\n-2\n-3`;
  // Expected result: 0 - 1 - 2 - 3 = -6
  expect(calculateFrequency(input)).toBe(-6);
});
// Mix of positive and negative that cancels out
test('mixed values resulting in zero', () => {
  const input = `+1\n+1\n-2`;

  // Expected result: 0 + 1 + 1 - 2 = 0
  expect(calculateFrequency(input)).toBe(0);
});

// Empty input string should return 0
test('empty input returns 0', () => {
  const input = ``;

  // No changes, frequency stays at 0
  expect(calculateFrequency(input)).toBe(0);
});


