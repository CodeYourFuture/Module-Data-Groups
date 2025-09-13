// Stage 1. Track frequency of each value
function buildFrequencyMap(list) {
  let freqs = new Map();

  for (let num of list) {
    if (typeof num !== "number") {
      continue; // skip non-number values
    }
    freqs.set(num, (freqs.get(num) || 0) + 1);
  }

  return freqs;
}

// Stage 2. Find the value with the highest frequency
function findMode(freqs) {
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

// Main function
function calculateMode(list) {
  const freqs = buildFrequencyMap(list);
  return findMode(freqs);
}

module.exports = calculateMode;

