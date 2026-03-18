function trackFrequencies(list) {
  const freqs = new Map();

  for (const num of list) {
    if (typeof num !== "number") {
      continue;
    }

    freqs.set(num, (freqs.get(num) || 0) + 1);
  }

  return freqs;
}

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

function calculateMode(list) {
  const freqs = trackFrequencies(list);
  return findMode(freqs);
}

module.exports = calculateMode;
