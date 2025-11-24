function dedupe(arr) {
  // Check if the input is an array; if not, throw a TypeError.
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array");
  }

  // If the array is empty, return an empty array.
  if (arr.length === 0) {
    return [];
  }

  // Use a Set to keep unique values.
  // A Set is a collection of unique values, so duplicates are removed automatically.
  const uniqueSet = new Set(arr);

  // Change the Set back to an array.
  // `Array.from` makes a new array of unique values, not the original array.
  return Array.from(uniqueSet);
}

module.exports = dedupe;
