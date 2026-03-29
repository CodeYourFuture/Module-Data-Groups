// You are given an implementation of calculateMode

// calculateMode's implementation can be broken down into two stages:

// Stage 1. One part of the code tracks the frequency of each value
// Stage 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions using the stages above

function calculateMode(list) {
  if (!Array.isArray(list)) throw new Error("Not an array");
  return getMode(getFrequencyMapOfElements(list));
}

function getFrequencyMapOfElements(list) {
  if (!Array.isArray(list)) throw new Error("Not an array");
  //saving the frequency of each element in key value pair using map object
  const frequencyMap = new Map();
  for (const number of list) {
    if (typeof number !== "number") continue;
    frequencyMap.set(number, (frequencyMap.get(number) || 0) + 1);
  }
  return frequencyMap;
}

function getMode(map) {
  let mode = null;
  let maxFrequency = 0;

  for (let [number, frequency] of map) {
    if (frequency > maxFrequency) {
      maxFrequency = frequency;
      mode = number;
    }
  }
  return maxFrequency === 0 ? NaN : mode;
}
module.exports = calculateMode;
