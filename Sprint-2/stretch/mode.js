// You are given an implementation of calculateMode

// calculateMode's implementation can be broken down into two stages:

// Stage 1. One part of the code tracks the frequency of each value
// Stage 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions using the stages above

// --------------------Stage 1--------------------
// track frequency of each value
function frequencyTracker(list) {
  let freqs = new Map();

  for (let num of list) {
    if (typeof num !== "number") {
      continue;
    }

    freqs.set(num, (freqs.get(num) || 0) + 1);
  }
  return freqs;
};
// --------------------Stage 2--------------------
  // Find the value with the highest frequency
function maxFreqFinder (freqs) {
  let maxFreq = 0;
  let mode;
  for (let [num, freq] of freqs) {
    if (freq > maxFreq) {
      mode = num;
      maxFreq = freq;
    }
  }

  return maxFreq === 0 ? NaN : mode;
};

// --------------------Finalize--------------------
function calculateMode(list) {
  const freqs = frequencyTracker(list);
  return maxFreqFinder(freqs);
}

module.exports = calculateMode;
