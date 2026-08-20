function tally(items) {
  // Check that the input is an array
  if (!Array.isArray(items)) {
    throw new Error("Input must be an array");
  }

  const counts = {};

  // Go through each item in the array
  for (const item of items) {
    if (counts[item] === undefined) {
      counts[item] = 1;
    } else {
      counts[item] = counts[item] + 1;
    }
  }

  return counts;
}

module.exports = tally;
