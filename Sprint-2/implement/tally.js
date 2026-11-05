function tally(items) {
  const counts = {};

  for (const item of items) {
    if (counts[item] === undefined) {
      counts[item] = 1;
    } else {
      counts[item] += 1;
    }
  }
  return counts;
}

module.exports = tally;
