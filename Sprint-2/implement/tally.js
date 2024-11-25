function tally(items) {
  // Check if the input is an array
  if (!Array.isArray(items)) {
    throw new Error("Input must be an array");
  }

  // Create an empty object to store the counts
  const result = {};

  // Iterate over the array and count occurrences
  for (const item of items) {
    // If the item is already a key, increment its value; otherwise, set it to 1
    result[item] = (result[item] || 0) + 1;
  }

  return result;
}

module.exports = tally;

