
function calculateMode(list) {
  // Step 1: Track frequency of each value
  let freqs = new Map();

  for (let num of list) {
    // Skip non-number values
    if (typeof num !== "number") {
      continue;
    }

    // Update frequency count for each number
    freqs.set(num, (freqs.get(num) || 0) + 1);
  }

  // Step 2: Find the number with the highest frequency
  let maxFreq = 0;
  let mode;

  for (let [num, freq] of freqs) {
    if (freq > maxFreq) {
      mode = num;
      maxFreq = freq;
    }
  }

  return mode;
}

module.exports = calculateMode;
