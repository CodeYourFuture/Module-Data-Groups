function createLookup(pairs) {
  // Implementation goes here
  // Creates an empty object to store the lookup results
  // country → currency
  const lookup = {};
  // Loop through each pair in the input array
  for (const [country, currency] of pairs) {
    // Use the country code as the function key
    // Assigns the correspoding currency code as the value
    lookup[country] = currency;
  }
  // returns the completed lookup object
  return lookup;
}

module.exports = createLookup;
