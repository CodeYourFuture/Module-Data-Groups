function dedupe(arr) {
  // Given an empty array
  // When passed to the dedupe function
  // Then it should return an empty array

  const seen = new Set();
  const dedupedArr = [];
  for (const element of arr) {
    if (!seen.has(element)) {
      seen.add(element);
      dedupedArr.push(element);
    }
  }
  return dedupedArr;
}

module.exports = dedupe;
