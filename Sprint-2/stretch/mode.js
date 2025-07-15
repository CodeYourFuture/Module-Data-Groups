// You are given an implementation of calculateMode

// calculateMode's implementation can be broken down into two stages:

// Stage 1. One part of the code tracks the frequency of each value
// Stage 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions using the stages above

function trackFrequency(list) {
  if (!Array.isArray(list)) {
    throw new Error("Input must be an array");
  }

  const freqs = new Map();

  for (const num of list) {
    if (typeof num !== "number") {
      continue;
    }
    freqs.set(num, (freqs.get(num) || 0) + 1);
  }

  return freqs;
}

// Stage 2: Find the value with the highest frequency
function highestFrequency(freqs) {
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

// Main function: combine both stages
function calculateMode(list) {
  const freqs = trackFrequency(list);
  return highestFrequency(freqs);
}

module.exports = calculateMode;