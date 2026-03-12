function dedupe(arr) {
  // Given an empty array
  // When passed to the dedupe function
  // Then it should return an empty array

  const seen = new Set();// Create a Set to keep track of seen elements
  const dedupedArr = [];// Create an array to store the deduplicated elements
  for (const element of arr) {// Iterate through each element in the input array
    if (!seen.has(element)) {// If the element has not been seen before
      seen.add(element);// Add the element to the Set
      dedupedArr.push(element);// Add the element to the deduplicated array
    }
  }
  return dedupedArr;
}

module.exports = dedupe;
