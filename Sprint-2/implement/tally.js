function tally(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }
  const result = {};

  arr.forEach((item) => {
    result[item] = (result[item] || 0) + 1;
  });

  return result;
}

module.exports = tally;
