function createLookup(pairs) {
  // implementation here
  // Creates empty object that will store our,
  // country → currency
  const lookup = {};
  // Loop through each pair in the input array
  for (const [country, currency] of pairs) {
    // Use the country code as they key
    // Assigns the correspoding currency code as the value
    lookup[country] = currency;
  }
  // returns the completed lookup object
  return lookup;
}

module.exports = createLookup;
