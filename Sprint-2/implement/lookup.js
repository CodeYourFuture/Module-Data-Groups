function createLookup(pairs) {
  // Check if input is an array
  if (!Array.isArray(pairs)) {
    return {};
  }
  
  // Create an empty object to store the lookup
  const lookup = {};
  
  // Iterate through each pair in the array
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i];
    
    // Check if the pair is an array and has at least 2 elements
    if (Array.isArray(pair) && pair.length >= 2) {
      const countryCode = pair[0];
      const currencyCode = pair[1];
      
      // Add the key-value pair to the lookup object
      lookup[countryCode] = currencyCode;
    }
  }
  
  return lookup;
}

module.exports = createLookup;
