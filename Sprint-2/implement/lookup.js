function createLookup(countryCurrencyPairs) {
  // Create an empty object to store the key-value pairs
  const lookup = {};

  // Iterate over each pair in the array and add them to the lookup object
  countryCurrencyPairs.forEach(([country, currency]) => {
    lookup[country] = currency;
  });

  // Return the constructed lookup object
  return lookup;
}

module.exports = createLookup;
