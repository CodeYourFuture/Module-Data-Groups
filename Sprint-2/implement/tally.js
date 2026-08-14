function tally() {
  const counts = {};

  for (const item of items) {
    if (!Object.hasOwn(counts, item)) {
      counts[item] = 1;
    } else {
      counts[item]++;
    }
  }

  return counts;
}

module.exports = tally;
