function tally(array) {
  if (!Array.isArray(array)) {
    throw new Error("Input must be an array");
  }

  const counts = {};

  for (const item of array) {
    counts[item] = (counts[item] || 0) + 1;
  }

  return counts;
}

module.exports = tally;
