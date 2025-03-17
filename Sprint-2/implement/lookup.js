function createLookup(countryCurrencyPairs) {
  const lookup = {}; // Initialize an empty object to hold the result
  
  // Directly loop over the countryCurrencyPairs array
  countryCurrencyPairs.forEach(([country, currency]) => {
    lookup[country] = currency; // Add country as key, currency as value
  });

  return lookup; // Return the object
}

module.exports = createLookup;
