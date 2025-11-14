function tally(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Invalid input: Input must be an array");
  }

  const result = {};

  for (const item of arr) {
    if (result[item]) {
      result[item] += 1;
    } else {
      result[item] = 1;
    }
  }

  return result;
}

module.exports = tally;
