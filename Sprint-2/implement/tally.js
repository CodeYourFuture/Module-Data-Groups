function tally(array) {
  if (!Array.isArray(array)) {
    throw new Error("Input must be an array");
  }

  const result = {};

  for (const item of array) {
    if (result[item]) {
      result[item] = result[item] + 1;
    } else {
      result[item] = 1;
    }
  }

  return result;
}

module.exports = tally;
