function tally(items) {
  if (!Array.isArray(items)) {
    throw new Error("Input must be an array"); // This ensures that the input is a valid array
  }

  const counts = {}; // creates an empty object for counting

  for (let item of items) {
    if (counts[item]) {
      counts[item]++; // if item already exists, it adds to the existing item
    } else {
      counts[item] = 1; // Else, the count starts from 1
    }
  }

  return counts;
}

module.exports = tally;
