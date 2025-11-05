// This function takes an array of country-currency pairs
// and turns it into an object where keys are country codes
// and values are currency codes
function createLookup(pairs) {
  // Create an empty object to store the result
  const lookup = {};

  // Loop through each pair in the array
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i]; // e.g. ['US', 'USD']
    const country = pair[0]; // first element is country code
    const currency = pair[1]; // second element is currency code

    lookup[country] = currency; // add it to the object
  }

  // Return the final lookup object
  return lookup;
}

// Export the function so it can be used in tests or other files
module.exports = createLookup;
