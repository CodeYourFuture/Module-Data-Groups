// You are given an implementation of calculateMode

// calculateMode's implementation can be broken down into two stages:

// Stage 1. One part of the code tracks the frequency of each value
// Stage 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions using the stages above

function getFrequencies(list) {
  // Track frequency of each value
  const freqs = new Map();
  for (const num of list) {
    if (typeof num === "number") {
      freqs.set(num, (freqs.get(num) || 0) + 1);
    }
  }
  return freqs;
}

function findHighestFrequency(freqs) {
  // Find the value with the highest frequency
  let maxFreq = 0;
  let mode;
  for (const [num, freq] of freqs) {
    if (freq > maxFreq) {
      mode = num;
      maxFreq = freq;
    }
  }
  return maxFreq === 0 ? NaN : mode;
}

function calculateMode(list) {
  // Combine both stages
  const freqs = getFrequencies(list);
  return findHighestFrequency(freqs);
}

module.exports = calculateMode;
