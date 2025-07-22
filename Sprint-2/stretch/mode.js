// You are given an implementation of calculateMode

// calculateMode's implementation can be broken down into two stages:

// Stage 1. One part of the code tracks the frequency of each value
// Stage 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions using the stages above

function calculateMode(list) {
  const freqs = buildFrequencyMap(list);
  return findMostFrequentValue(freqs);
}

// Stage 1: Frequency mapping
function buildFrequencyMap(list) {
  const freqs = new Map();

  for (let num of list) {
    if (typeof num !== "number") continue;
    freqs.set(num, (freqs.get(num) || 0) + 1);
  }

  return freqs;
}

// Stage 2: Determine mode
function findMostFrequentValue(freqs) {
  let maxFreq = 0;
  let mode = NaN;

  for (let [num, freq] of freqs) {
    if (freq > maxFreq) {
      maxFreq = freq;
      mode = num;
    }
  }

  return maxFreq === 0 ? NaN : mode;
}

module.exports = calculateMode;
