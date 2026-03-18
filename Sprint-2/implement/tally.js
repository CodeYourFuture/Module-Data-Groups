function tally(items) {
  if (!Array.isArray(items)) {
    throw new Error("Input must be an array");
  }

  if (items.length === 0) {
    return {};
  }

  const counts = {};

  for (const item of items) {
    if (counts[item]) {
      counts[item] += 1;
    } else {
      counts[item] = 1;
    }
  }

  return counts;
}

module.exports = tally;