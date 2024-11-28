// You are given an implementation of calculateMode

// calculateMode's implementation can be broken down into two stages:

// Stage 1. One part of the code tracks the frequency of each value
// Stage 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions using the stages above

function calculateMode(list) {
  const freqs = new Map();

  list.forEach(
    (num) => Number.isFinite(num) && freqs.set(num, (freqs.get(num) || 0) + 1)
  );

  return [...freqs.entries()].reduce(
    (max, [num, freq]) => (freq > max.freq ? { num, freq } : max),
    { num: NaN, freq: 0 }
  ).num;

  return maxFreq === 0 ? NaN : mode;
}

module.exports = calculateMode;
