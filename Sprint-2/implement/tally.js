function tally(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("tally expects an array");
  }

  const counts = {};
  for (const item of arr) {
    counts[item] = (counts[item] || 0) + 1;
  }
  return counts;
}

module.exports = tally;