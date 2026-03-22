function createLookup(countryCurrencyPairs) {
  // Create an empty object
  const lookupPairs = {};
  // Loop through each pair in the array
  for (let i = 0; i < countryCurrencyPairs.length; i++) {
    const pair = countryCurrencyPairs[i]; // Get the current pair
    const country = pair[0]; // First item is the country code
    const currency = pair[1]; // Second item is the currency code
    lookupPairs[country] = currency; // Add it to the object
  }

  return lookupPairs; // Return the final object
}
//check that it works
const pairs = [
  ["US", "USD"],
  ["CA", "CAD"],
];
console.log(createLookup(pairs)); // Output: { US: 'USD', CA: 'CAD'}

module.exports = createLookup;
