function tally(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }
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
