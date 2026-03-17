// You are given an implementation of calculateMode

// calculateMode's implementation can be broken down into two stages:

// Stage 1. One part of the code tracks the frequency of each value
// Stage 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions using the stages above

function trackFrequencies(list) {
  const frequencies = new Map();

  for (const num of list) {
    if (typeof num !== "number") continue;
    frequencies.set(num, (frequencies.get(num) || 0) + 1);
  }

  return frequencies;
}

function findMode(frequencies) {
  let maxFreq = 0;
  let mode;

  for (const [num, freq] of frequencies) {
    if (freq > maxFreq) {
      maxFreq = freq;
      mode = num;
    }
  }

  return maxFreq === 0 ? NaN : mode;
}

function calculateMode(list) {
  const frequencies = trackFrequencies(list);
  return findMode(frequencies);
}

module.exports = calculateMode;
