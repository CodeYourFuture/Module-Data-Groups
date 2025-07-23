// You are given an implementation of calculateMode

// calculateMode's implementation can be broken down into two stages:

// Stage 1. One part of the code tracks the frequency of each value
// Stage 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions using the stages above

function calculateMode(list) {
  // track frequency of each value
  let freqs = new Map();

  for (let num of list) {
    if (typeof num !== "number") {
      continue;
    }

    freqs.set(num, (freqs.get(num) || 0) + 1);
  }

  // Find the value with the highest frequency
  let maxFreq = 0;
  let mode;
  for (let [num, freq] of freqs) {
    if (freq > maxFreq) {
      mode = num;
      maxFreq = freq;
    }
  }

  return maxFreq === 0 ? NaN : mode;
}

module.exports = calculateMode;

// Helper function to compare objects (shallow comparison)
function objectsEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

// Test cases
const testCases = [
  { input: [1, 2, 2, 3], expected: 2 },
  { input: [1, 1, 2, 3], expected: 1 },
  { input: [1, 2, 3], expected: 1 }, // No mode
  { input: [1, "a", 2], expected: 1 }, // Non-numeric values ignored
  { input: [], expected: NaN }, // Empty list
];
// Run tests
testCases.forEach(({ input, expected }, index) => {
  const result = calculateMode(input);
  if (objectsEqual(result, expected)) {
    console.log(`Test case ${index + 1} passed.`);
  } else {
    console.error(`Test case ${index + 1} failed: expected ${expected}, got ${result}`);
  }
});
