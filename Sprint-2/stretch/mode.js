// Stage 1: Track frequency of each value
function trackFrequency(list) {
  const freqs = new Map();

  for (const num of list) {
    if (typeof num !== "number") continue;
    freqs.set(num, (freqs.get(num) || 0) + 1);
  }

  return freqs;
}

// Stage 2: Find the value with the highest frequency
function findMode(freqs) {
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

// Main function
function calculateMode(list) {
  const freqs = trackFrequency(list);
  return findMode(freqs);
}

module.exports = calculateMode;
