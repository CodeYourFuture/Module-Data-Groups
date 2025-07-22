// You are given an implementation of calculateMode

// calculateMode's implementation can be broken down into two stages:

// Stage 1. One part of the code tracks the frequency of each value
// Stage 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions using the stages above

  // track frequency of each value
  function getFrequencies(list) {
    const freq = new Map();
    for (let num of list) {
      if (typeof num !== "number") continue;
      freq.set(num, (freq.get(num) || 0) + 1);
    }
    return freq;
  }

  // Find the value with the highest frequency
  function getMode(freqMap) {
  let maxFreq = 0;
  let mode;
  for (let [num, freq] of freqMap) {
    if (freq > maxFreq) {
      mode = num;
      maxFreq = freq;
    }
  }

  return maxFreq === 0 ? NaN : mode;
}
  function calculateMode(list) {
    const freq = getFrequencies(list);
    return getMode(freq);
}
module.exports = calculateMode;
