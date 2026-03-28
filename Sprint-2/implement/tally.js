function tally(list) {
  if (!Array.isArray(list)) {
    throw new Error("Input must be an array");
  }

  const counts = {};

  for (const item of list) {
    if (counts[item]) {
      counts[item] = counts[item] + 1;
    } else {
      counts[item] = 1;
    }
  }

  return counts;
}

module.exports = tally;
