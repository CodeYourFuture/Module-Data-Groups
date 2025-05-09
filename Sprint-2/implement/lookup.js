function createLookup(countryCurrencyPairs) {
  const validPairs = countryCurrencyPairs.filter(
    // the filter method to ensure only valid key-value are processed
    (pair) => Array.isArray(pair) && pair.length === 2
    // Array.isArray(pair) to make sure the input is array
    // pair.length === 2 to ensure it contain 2 elements
  );

  return Object.fromEntries(validPairs); // Object.fromEntries convert the remaining valid pairs into an object
}

module.exports = createLookup;