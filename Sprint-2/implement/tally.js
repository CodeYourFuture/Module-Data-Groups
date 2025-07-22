function tally(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }
  return arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
}

module.exports = tally;
