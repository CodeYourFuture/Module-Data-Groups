function tally(array) {
  if (!Array.isArray(array)) {
    throw new TypeError("tally requires an array");
  }
  const charCount = {};

  for (const char of array) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  return charCount;
}

module.exports = tally;
