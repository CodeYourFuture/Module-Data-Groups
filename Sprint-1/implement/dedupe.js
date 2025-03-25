//   function dedupe() {}

// __________________________________SOLUTION___________________________________________________________________

function dedupe(array) {
    // We must use a Set to remove duplicates while preserving order
    // A Set is ideal for deduplication because it automatically filters out duplicates while adding elements.

    const uniqueElements = new Set(array);
    return Array.from(uniqueElements);
  }
  
  module.exports = dedupe;