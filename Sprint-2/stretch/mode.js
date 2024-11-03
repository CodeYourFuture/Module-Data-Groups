// You are given an implementation of calculateMode

// calculateMode's implementation can be broken down into two stages:

// Stage 1. One part of the code tracks the frequency of each value
// Stage 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions using the stages above

function trackFrequency(list) {
  let frequency = new Map();

  for (let num of list) {
    if (typeof num !== "number") {
      continue;
    }

    frequency.set(num, (frequency.get(num) || 0) + 1);
  }

  return frequency;
}

function calculateMode(list) {
  // Find the value with the highest frequency
  let maxFreq = 0;
  let mode;
  const frequency = trackFrequency(list);
  for (let [num, freq] of frequency) {
    if (freq > maxFreq) {
      mode = num;
      maxFreq = freq;
    }
  }

  return maxFreq === 0 ? NaN : mode;
}

module.exports = calculateMode;
