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

// Refactoring

function trackFrequency(list) {
  let frequency = new Map();

  for (const num of list) {
    if (typeof num !== "number") {
      continue;
    }
    if (frequency.has(num)) {
      frequency.set(num, (frequency.get(num) || 0) + 1);
    } else {
      frequency.set(num, 1);
    }
  }
  return frequency;
}

function findMode(frequency) {
  let maxFreq = 0;
  let mode = NaN;

  for (const [num, freq] of frequency) {
    if (freq > maxFreq) {
      maxFreq = freq;
      mode = num;
    }
  }
  return mode;
}

function calculateModeRef(list) {
  const frequency = trackFrequency(list);
  return findMode(frequency);
}
