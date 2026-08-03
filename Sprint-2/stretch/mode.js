// You are given an implementation of calculateMode

// calculateMode's implementation can be broken down into two stages:

// Stage 1. One part of the code tracks the frequency of each value
// Stage 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions using the stages above

function buildFrequencyMap(list) {
  const freqs = new Map();

  for (const num of list) {
    if (typeof num !== "number") {
      continue; // ignore non-numbers
    }
    freqs.set(num, (freqs.get(num) || 0) + 1);
  }

  return freqs;
}

function findModeFromFreqs(freqs) {
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
  const freqs = buildFrequencyMap(list); // Stage 1
  const mode = findModeFromFreqs(freqs); // Stage 2
  return mode;
}

module.exports = calculateMode;
