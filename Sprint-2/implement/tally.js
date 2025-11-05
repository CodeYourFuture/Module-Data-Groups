function tally(items) {
  // Check if input is an array
  if (!Array.isArray(items)) {
    throw new Error("Input must be an array");
  }

  const result = {};

  // Loop through each item in the array
  for (const item of items) {
    // If the item already exists in result, increment the count
    if (result[item]) {
      result[item] += 1;
    } else {
      // Otherwise, initialize the count to 1
      result[item] = 1;
    }
  }

  return result;
}

module.exports = tally;
