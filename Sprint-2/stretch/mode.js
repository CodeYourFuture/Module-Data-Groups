// Stage 1: Count frequencies of each value in the list
function countFrequencies(list) {
  const freqs = new Map();
  for (let num of list) {
    if (typeof num === "number") {
      freqs.set(num, (freqs.get(num) || 0) + 1);
    }
  }
  return freqs;
}

// Stage 2: Find the value with the highest frequency
function findMode(freqs) {
  let maxFreq = 0;
  let mode = NaN;  // Default to NaN if no valid number found

  for (let [num, freq] of freqs) {
    if (freq > maxFreq) {
      mode = num;
      maxFreq = freq;
    }
  }

  return mode;
}

// Main calculateMode function that combines both stages
function calculateMode(list) {
  const freqs = countFrequencies(list);
  return findMode(freqs);
}

module.exports = calculateMode;
