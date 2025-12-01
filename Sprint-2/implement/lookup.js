function createLookup(pairs) {
  // function accepts one parameter: pairs of country-currency code arrays
  if (!Array.isArray(pairs)) {
    return {}; // Return empty object if input is not an array
  }

  const lookup = {}; // Initialize empty lookup object, key-value pairs stored in this object
  for (const pair of pairs) {
    // Iterate over each pair in the input array
    if (Array.isArray(pair) && pair.length >= 2) {
      const [countryCode, currencyCode] = pair; // Destructuring first two elements of pair array and assigning them to country and currency
      lookup[countryCode] = currencyCode; // Add country-currency pair to the lookup object - later entries overwrite earlier ones if duplicate country codes exist.
    }
  }
  return lookup;
}

module.exports = createLookup;
