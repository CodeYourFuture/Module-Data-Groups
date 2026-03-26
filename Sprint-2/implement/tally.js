function tally(itemsList) {
  if (!Array.isArray(itemsList)) {
    throw new Error("Input must be an array");
  }

  const counts = {};

  for (const item of itemsList) {
    counts[item] = (counts[item] || 0) + 1;
  }

  return counts;
}

module.exports = tally;
