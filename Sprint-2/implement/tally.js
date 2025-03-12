function tally(arr) {
  // Check if the input is an array
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }

  // Initialize an empty result object
  const result = {};

  // Iterate through each item in the array
  for (const item of arr) {
    // Increment count if the item exists, otherwise initialize to 1
    result[item] = (result[item] || 0) + 1;
  }

  return result;
}

module.exports = tally;
