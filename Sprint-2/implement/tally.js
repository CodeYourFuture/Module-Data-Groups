function tally(itemsList) {
  // Guard against invalid inputs
  if (!Array.isArray(itemsList)) {
    if (itemsList == null) return {};
    throw new Error("Input must be an array");
  }

  if (itemsList.length === 0) {
    return {};
  }

  // Create object with no prototype to avoid "toString" collision issues
  const counts = Object.create(null);

  for (const item of itemsList) {
    counts[item] = (counts[item] || 0) + 1;
  }

  return counts;
}

module.exports = tally;
