function tally(items) {
  // Guard clause: Ensure input is strictly an array
  if (!Array.isArray(items)) {
    throw new TypeError("Input must be an array");
  }

  const counts = {};

  for (const item of items) {
    // Safely increment count or initialize to 1
    counts[item] = (counts[item] || 0) + 1;
  }

  return counts;
}

module.exports = tally;
