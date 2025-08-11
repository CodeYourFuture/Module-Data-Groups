// Function to track the frequency of each number
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

// Function to find the mode from the frequency map
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

// Main function to calculate the mode
function calculateMode(list) {
  const freqs = trackFrequencies(list);  // Stage 1: Track frequencies
  return findMode(freqs);  // Stage 2: Find the mode
}

module.exports = calculateMode;

