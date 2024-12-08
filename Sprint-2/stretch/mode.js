// Stage 1: Function to track frequency of each value
function trackFrequencies(list) {
  let freqs = new Map();

  for (let num of list) {
    if (typeof num !== "number") {
      continue;
    }

    freqs.set(num, (freqs.get(num) || 0) + 1);
  }

  return freqs;
}

// Stage 2: Function to find the mode (the value with the highest frequency)
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

// Main function that uses both stages to calculate the mode
function calculateMode(list) {
  const freqs = trackFrequencies(list); // Track frequencies of values
  return findMode(freqs); // Find and return the mode
}

module.exports = calculateMode;
