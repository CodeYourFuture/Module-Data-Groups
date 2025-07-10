function tally(input) {
  if (!Array.isArray(input)) {
    throw new Error("Input must be an array");
  }

  const result = {};

  for (const item of input) {
    result[item] = (result[item] || 0) + 1;
  }

  return result;
}

module.exports = tally;
