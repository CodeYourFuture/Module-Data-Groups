function tally(items) {
  if (!Array.isArray(items)) {
    throw new Error("Invalid input: expected an array");
  }

  return items.reduce((counts, item) => {
    counts[item] = (counts[item] || 0) + 1;
    return counts;
  }, {});
}

module.exports = tally;
