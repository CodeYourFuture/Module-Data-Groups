function tally(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array");
  }

  // Use an object with no prototype to avoid collisions with keys like "constructor"
  const counts = Object.create(null);

  for (const item of arr) {
    counts[item] = (counts[item] || 0) + 1;
  }

  return counts;
}

module.exports = tally;
