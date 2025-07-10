function dedupe(arr) {
  // Create a Set to get unique values
  const uniqueSet = new Set(arr);

  // Clear the input array
  arr.length = 0;

  // Repopulate the input array with unique values
  arr.push(...uniqueSet);

  return arr;
}

module.exports = dedupe;
