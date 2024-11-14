function tally(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array.");
  }

  const counts = {};

  arr.forEach(item => {
    counts[item] = (counts[item] || 0) + 1;
  });

  return counts;
}

module.exports = tally;
