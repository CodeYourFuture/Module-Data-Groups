function createLookup(countryCurrencyPairs) {
  // implementation here
  const lookup = {}; // Create an empty array
  // Loop through each country-currency pair
  for (let pair of countryCurrencyPairs) {
    let country = pair[0]; // Extract country code
    let currency = pair[1]; // Extract currency code

    lookup[country] = currency; // Add the country as a key and currency as a value
  }

  return lookup;
}

module.exports = createLookup;
