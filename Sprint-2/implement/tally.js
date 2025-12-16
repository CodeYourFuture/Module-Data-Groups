function tally(arr) {
  // Handle invalid input
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }

  // Handle empty array
  if (arr.length === 0) {
    return {};
  }

  // Count frequencies
  const result = {};

  for (const item of arr) {
    if (result[item]) {
      result[item]++;
    } else {
      result[item] = 1;
    }
  }

  return result;
}

module.exports = tally;
