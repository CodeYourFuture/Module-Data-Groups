// You are given an implementation of calculateMode

// calculateMode's implementation can be broken down into two stages:

// Stage 1. One part of the code tracks the frequency of each value
// Stage 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions using the stages above


// Helper function to count frequency of numbers:

function countFrequencies(list) {
  const freqs = new Map();

  for (const num of list) {
    if (typeof num !== "number") continue; 
    freqs.set(num, (freqs.get(num) || 0) + 1);
  }

  return freqs;
}

// Helper function to find mode from frequency map:

function findMode(freqs) {
  let maxFreq = 0;
  let mode;

  for (const [num, freq] of freqs) {
    if (freq > maxFreq) {
      maxFreq = freq;
      mode = num;
    }
  }

  return maxFreq === 0 ? NaN : mode;
}


// Main function:

function calculateMode(list) {
  const freqs = countFrequencies(list);
  return findMode(freqs);
}

module.exports = calculateMode;
