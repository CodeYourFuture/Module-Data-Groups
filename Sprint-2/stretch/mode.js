// You are given an implementation of calculateMode

// calculateMode's implementation can be broken down into two stages:

// Stage 1. One part of the code tracks the frequency of each value
// Stage 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions using the stages above

function countFrequencies(list) {
  const freqs = new Map(); // used Map instead of {}
  for (const num of list) {
    if (typeof num !== "number") continue;
    freqs.set(num, (freqs.get(num) || 0) + 1);
  }
  return freqs;
}

function findMode(freqs) {
  let maxFreq = 0;
  let mode = null;
  for (const [num, freq] of freqs) {
    if (freq > maxFreq) {
      maxFreq = freq;
      mode = num;
    }
  }
  return mode;
}

function calculateMode(list) {
  const freqs = countFrequencies(list);
  return findMode(freqs);
}

console.log(calculateMode([1, 2, 2, 3, 3, 3, 4])); // Output: 3

module.exports = calculateMode;
