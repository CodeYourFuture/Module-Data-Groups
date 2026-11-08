function tally(items) {
  if (!Array.isArray(items)) {
    throw new Error("tally requires an array");
  }

  const counts = {};

  for (const item of items) {
    if (Object.hasOwn(counts, item)) {
      counts[item] += 1;
    } else {
      counts[item] = 1;
    }
  }
  return counts;
}

module.exports = tally;
