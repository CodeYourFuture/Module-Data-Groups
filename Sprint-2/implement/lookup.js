function createLookup(codePairs) {

  const lookup = {}; // Initialize an empty object to store the lookup pairs

  // Iterate over each pair in the input array
  for (const pair of codePairs) {
    // Ensure the pair has at least two elements (key and value)
    if (pair && pair.length >= 2) {
      const key = pair[0];   // The first element is the key (e.g., 'US')
      const value = pair[1]; // The second element is the value (e.g., 'USD')
      lookup[key] = value;   // Assign the value to the key in the lookup object
    }
}
  return lookup;
}

module.exports = createLookup;
