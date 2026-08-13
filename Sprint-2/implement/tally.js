function tally(array) {
  if (!Array.isArray(array)) {
    throw new Error("Input must be an array");
  }

  if (array.length === 0) {
    return {};
  }

  const result = {};

  for (const item of array) {
    if (result[item]) {
      result[item]++;
    } else {
      result[item] = 1;
    }
  }

  return result;
}

module.exports = tally;
