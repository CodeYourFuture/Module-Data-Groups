function tally(items) {
  const counts = Object.create(null);

  if (!Array.isArray(items)) {
    throw new Error("Input must be an array");
  }

  for (const item of items) {
    counts[item] = (counts[item] || 0) + 1;
  }
  return counts;
}

module.exports = tally;
