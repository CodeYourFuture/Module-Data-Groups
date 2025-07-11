function tally(items) {
  // Validate input: must be an array
  if (!Array.isArray(items)) {
    throw new Error("Input must be an array");
  }

  // Create an object to hold counts
  const counts = {};

  // Loop through each item and count occurrences
  for (const item of items) {
    if (counts[item]) {
      counts[item] += 1;
    } else {
      counts[item] = 1;
    }
  }

  return counts;
}

module.exports = tally;

