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




//MY RESPONSE: // Refactor calculateMode into smaller functions

// Stage 1: Function to track the frequency of each value
function trackFrequency(list) {
  let freqs = new Map();

  for (let num of list) {
    if (typeof num !== "number") {
      continue;
    }

    freqs.set(num, (freqs.get(num) || 0) + 1);
  }

  return freqs;
}

// Stage 2: Function to find the value with the highest frequency
function findMode(freqs) {
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

// Refactored calculateMode that uses the above functions
function calculateMode(list) {
  const freqs = trackFrequency(list);
  return findMode(freqs);
}

module.exports = calculateMode;

// Test cases

test("calculateMode finds the mode correctly", () => {
  expect(calculateMode([1, 2, 3, 3, 4])).toBe(3); // The mode is 3
  expect(calculateMode([1, 2, 3, 4, 5])).toBeNaN(); // No mode, returns NaN
  expect(calculateMode([10, 10, 10, 5, 5, 5, 5, 1])).toBe(5); // The mode is 5
  expect(calculateMode([1, 2, 2, 3, 3, 3, 4])).toBe(3); // The mode is 3
  expect(calculateMode([1, 2, 3, 'a', 4, 'b'])).toBeNaN(); // Non-numeric values should be ignored
});
