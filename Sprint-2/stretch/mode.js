// You are given an implementation of calculateMode

// calculateMode's implementation can be broken down into two stages:

// Stage 1. One part of the code tracks the frequency of each value
// Stage 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions using the stages above

function calculateMode(list) {
  if (!Array.isArray(list)) throw new Error("Not an array");
  //tracking the frequency of each number using object
  frequencyObject = {};
  for (const number of list) {
    if (typeof number !== "number") continue;
    if (Object.hasOwn(frequencyObject, number)) frequencyObject[number] += 1;
    else frequencyObject[number] = 1;
  }

  //sorting the number with the highest frequency at the lowest index
  const sortedArray = Object.entries(frequencyObject).sort(
    (a, b) => b[1] - a[1]
  );
  return Number(sortedArray[0][0]);
}

module.exports = calculateMode;
