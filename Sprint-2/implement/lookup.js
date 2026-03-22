// Take an array of pairs and return a lookup object
function createLookup(pairs) {
  // Create an empty object to store the results
  const lookup = {};

  // Loop through each pair in the array
  for (const pair of pairs) {
    // pair[0] is the key (country code), pair[1] is the value (currency code)
    lookup[pair[0]] = pair[1];
  }

  // Return the completed lookup object
  return lookup;
}

module.exports = createLookup;
