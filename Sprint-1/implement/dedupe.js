// Return a new array with duplicate values removed.
// Keep the first occurrence of each value.

function dedupe(elements) {
  const uniqueElements = [];

  for (const element of elements) {
    // Add the element only if it is not already in the result array
    if (!uniqueElements.includes(element)) {
      uniqueElements.push(element);
    }
  }

  return uniqueElements;
}

module.exports = dedupe;
