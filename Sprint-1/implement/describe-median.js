// Don't change this function.
function calculateMedian(list) {
  if (!Array.isArray(list)) {
    throw new Error("calculateMedian requires an array of numbers");
  }
  if (list.length === 0) {
    throw new Error("calculateMedian requires a non-empty array");
  }
  for (const item of list) {
    if (typeof item !== "number") {
      throw new Error("calculateMedian requires an array of numbers");
    }
  }
  const middleIndex = Math.floor(list.length / 2);
  const sorted = [...list].sort((a, b) => a - b);
  if (sorted.length % 2 === 0) {
    return (sorted[middleIndex - 1] + sorted[middleIndex]) / 2;
  }
  return sorted[middleIndex];
}

// Implement this function. See describe-median.test.js for the acceptance criteria.

// Explanation:
// calculateMedian throws when it can't produce a median. Rather than letting
// that crash the caller, we try to calculate it and, if an error is thrown,
// catch it and turn its message into a sentence.
function describeMedian(list) {
  try {
    const median = calculateMedian(list);
    return `The median is ${median}`;
  } catch (error) {
    return `Could not calculate a median: ${error.message}`;
  }
}

module.exports = describeMedian;
