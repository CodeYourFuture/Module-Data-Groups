function tally() {
  const counts = {};

  for (const item of items) {
    if (counts[item] === undefined) {
      counts[item] = 1;
    } else {
      counts[item]++;
    }
  }

  return counts;
}

module.exports = tally;
