// You are given an implementation of calculateMode

// calculateMode's implementation can be broken down into two stages:

// Stage 1. One part of the code tracks the frequency of each value
// Stage 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions using the stages above

function countFrequencies(list) {
  const frequencies = new Map();

  for (const number of list) {
    if (typeof number !== "number") {
      continue;
    }

    frequencies.set(number, (frequencies.get(number) || 0) + 1);
  }

  return frequencies;
}

function findMostFrequent(frequencies) {
  let highestFrequency = 0;
  let mode;

  for (const [number, frequency] of frequencies) {
    if (frequency > highestFrequency) {
      highestFrequency = frequency;
      mode = number;
    }
  }

  return highestFrequency === 0 ? NaN : mode;
}

function calculateMode(list) {
  const frequencies = countFrequencies(list);
  return findMostFrequent(frequencies);
}

module.exports = calculateMode;