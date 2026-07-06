function dedupe(array) {
  // return empty array if empty input
  if (array.length === 0) return [];
  // check if array has duplicates
  const hasDuplicates = new Set(array).size !== array.length;
  // if no duplicates return original array else return new array with duplicates removed (string or numbers)
  return !hasDuplicates ? array : [...new Set(array)];
}

module.exports = dedupe;
