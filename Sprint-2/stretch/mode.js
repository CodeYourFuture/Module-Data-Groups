// You are given an implementation of calculateMode

// calculateMode's implementation can be broken down into two stages:

// Stage 1. One part of the code tracks the frequency of each value
// Stage 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions using the stages above

// stage 1 Function to track the frequency of each value
function trackFrequencies(list) {
  let freqs = new Map();

  for (let num of list) {
    if (typeof num !== "number") {
      continue;
    }

    freqs.set(num, (freqs.get(num) || 0) + 1);
  }

  return freqs;
}

// stage 2 Function to find the value with the highest frequency
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

// Main function to calculate the mode by using the above helper functions
function calculateMode(list) {
  const freqs = trackFrequencies(list);
  return findMode(freqs);
}

console.log(calculateMode([1, 2, 3, 4, 5, 6, 6, 7, 8, 9]));

module.exports = calculateMode;
