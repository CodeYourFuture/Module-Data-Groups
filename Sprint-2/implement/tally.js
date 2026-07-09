function tally(items) {
  if (!Array.isArray(items)) {
    throw new TypeError("Input must be an array");
  }

  const uniqueItems = [...new Set(items)].sort();

  const counts = {};
  for (const item of uniqueItems) {
    counts[item] = items.filter(x => x === item).length;
  }

  return counts;
}

module.exports = tally;
