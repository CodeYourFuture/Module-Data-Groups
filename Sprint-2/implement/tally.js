function tally(items) {
  if (!Array.isArray(items)) {
    throw new Error("tally expects an array");
  }

  const counts = Object.create(null);

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
