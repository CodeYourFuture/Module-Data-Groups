function tally(items) {
  if (!Array.isArray(items)) {
    throw new Error("Input must be an array");
  }
  const counts = {}; // empty object to store tally of key-value pairs
  for (const item of items) {
    // iterates through each element in the items array
    if (counts[item]) {
      // checks if the item already exists as a key in counts object
      counts[item] += 1; // increments the count for that item by 1
    } else {
      counts[item] = 1; // initializes the count for that item to 1
    }
  }
  return counts; // returns the final counts object
}

module.exports = tally;
