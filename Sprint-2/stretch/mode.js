// You are given a working implementation of calculateMode.
// Run the tests in mode.test.js before you start: they all pass.

// calculateMode's implementation can be broken down into three stages:

// Stage 1. Check the input is a non-empty array of numbers, and throw if not
// Stage 2. Track the frequency of each value
// Stage 3. Find the value with the highest frequency

// Refactor calculateMode by moving each stage into its own function,
// then calling those functions from calculateMode.

// The tests must still pass after your refactor. Run them again to check.

function calculateMode(list) {
  // check the input is a non-empty array of numbers
  if (!Array.isArray(list)) {
    throw new Error("calculateMode requires an array of numbers");
  }
  if (list.length === 0) {
    throw new Error("calculateMode requires a non-empty array");
  }
  for (const item of list) {
    if (typeof item !== "number") {
      throw new Error("calculateMode requires an array of numbers");
    }
  }

  // track frequency of each value
  let freqs = new Map();

  for (let num of list) {
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

  return mode;
}

module.exports = calculateMode;
