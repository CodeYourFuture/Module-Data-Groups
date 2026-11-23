function tally(items) {
  const counts = {};

  for (const item of items) {
    counts[item] = (counts[item] || 0) + 1;
  }

  return counts;
}

module.exports = tally;