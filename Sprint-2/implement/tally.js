function tally(list) {
  if (!Array.isArray(list)) {
    throw new Error("Input must be an array");
  }
  const counts = {};
  for (const item of list) {
    counts[item] = (counts[item] || 0) + 1;
  }
  return counts;
}

module.exports = tally;
