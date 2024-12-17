function createLookup(input) {
  let currencyPairs = {};

  // Check if input is an array
  if (Array.isArray(input)) {
    // Loop through each array in the input
    for (const singleArray of input) {
      // Ensure each item is an array with exactly two elements
      if (Array.isArray(singleArray) && singleArray.length === 2) {
        // Add key-value pair to the result object
        currencyPairs[singleArray[0]] = singleArray[1];
      } else {
        // Log error for invalid pairs
        console.error(`Invalid input ${singleArray}`);
      }
    }
  } else {
    // Log error if the input is not an array of arrays
    console.error(`Invalid input, this is not an array of arrays ${input}`);
  }

  return currencyPairs;
}
//console.log(createLookup([['US', 'USD'], ['CA', 'CAD']]));
module.exports = createLookup;
