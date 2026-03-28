// Count the frequency of each item in an array
function tally(items) {
  // If the input is not an array, throw an error
  if (!Array.isArray(items)) {
    throw new Error("Input must be an array");
  }

  // Create an empty object to store the counts
  const counts = Object.create(null);

  // Loop through each item in the array
  for (const item of items) {
    // If this item already exists in counts, add 1 to it
    // If it does not exist yet, start at 1
    counts[item] = (counts[item] || 0) + 1;
  }

  // Return the object with all the counts
  return counts;
}

module.exports = tally;
