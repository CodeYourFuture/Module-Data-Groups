function tally(items) {
  // Validate input
  if (!Array.isArray(items)) {
    throw new Error("Input must be an array");
  }

  // Start with an empty object
  const result = {};

  // Loop through the array and count
  for (const item of items) {
    if (result[item]) {
      result[item] += 1;
    } else {
      result[item] = 1;
    }
  }

  return result;
}

module.exports = tally;
