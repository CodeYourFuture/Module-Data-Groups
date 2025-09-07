// Stage 1: Track frequency of each number
function getFrequencies(list) {
  const freqs = new Map();

  for (const num of list) {
    if (typeof num !== "number") continue;
    freqs.set(num, (freqs.get(num) || 0) + 1);
  }

  return freqs;
}

// Stage 2: Find the number with the highest frequency
function findMode(freqs) {
  let maxFreq = 0;
  let mode;

  for (const [num, freq] of freqs.entries()) {
    if (freq > maxFreq) {
      mode = num;
      maxFreq = freq;
    }
  }

  return maxFreq === 0 ? NaN : mode;
}

// Main function that ties both stages together
function calculateMode(list) {
  const freqs = getFrequencies(list);
  return findMode(freqs);
}

module.exports = calculateMode;
