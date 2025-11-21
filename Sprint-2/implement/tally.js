function tally(list) {
  // 1. Input Validation: Throw an error if the input is not a proper array.
  if (!Array.isArray(list)) {
    throw new Error("Input must be an array.");
  }

  // 2. Tally Frequencies using reduce()
  return list.reduce((counts, item) => {
    // If the item exists in the object, increment its count.
    // Otherwise, initialize its count to 1.
    counts[item] = (counts[item] || 0) + 1;

    return counts;
  }, {}); // Start with an empty object {}
}

module.exports = tally;
