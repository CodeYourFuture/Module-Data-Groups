function dedupe(elements) {
    // returns a new empty array as just returning elements
  if (elements.length === 0) return [];

  // We create an empty array to repopulate
  const result = [];

  for (let i = 0; i < elements.length; i++) { 
    const item = elements[i];

    // the loop takes each item and adds it
    //  as long as it is not in the destination array "results"
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}

module.exports = dedupe;