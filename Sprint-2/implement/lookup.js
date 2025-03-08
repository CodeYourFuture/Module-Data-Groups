function createLookup(countryCurrencyPairs) {
  const lookup = {}; // initialize an empty object to store the key-value pairs

  // Loop through each pair in the input array
  countryCurrencyPairs.forEach(([countryCode, currencyCode]) => {
    lookup[countryCode] = currencyCode; // assign the country code as key and currency code as value
  });

  return lookup; // return the constructed object
}

module.exports = createLookup;
