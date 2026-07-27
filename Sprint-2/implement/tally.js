function tally() {
  if (!Array.isArray(items)) {
    throw new TypeError("Input must be an array");
  }
  return items.reduce((acc, item) => {
    // Increment count if key exists, otherwise initialize to 1
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
}

module.exports = tally;
