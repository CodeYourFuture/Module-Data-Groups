function tally(itemsList) {
  const counts = {};

  if (itemsList.length === 0) {
    return {};
  }

  if (!Array.isArray(itemsList)) {
    throw new Error("Input must be an array");
  }

  for (const item of itemsList) {
    counts[item] = (counts[item] || 0) + 1;
  }

  return counts;
}

module.exports = tally;
