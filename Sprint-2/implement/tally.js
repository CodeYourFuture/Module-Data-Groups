
function tally(items) {
  // Check if input is an array
  if (!Array.isArray(items)) {
    throw new Error("Input must be an array");
  }

  // Create an empty object to store the counts
  const counts = {};

  // Iterate through each item in the array
  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    // If the item already exists in counts, increment it
    // Otherwise, initialize it to 1
    if (counts[item]) {
      counts[item]++;
    } else {
      counts[item] = 1;
    }
  }

  return counts;
}

module.exports = tally;
