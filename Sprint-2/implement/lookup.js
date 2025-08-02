function createLookup(pairsArr) {
  // Check if the input is a null array
  if (!Array.isArray(pairsArr)) {
    throw new Error("Input must be a non-null array of pairs");
  }
  // Check if the inner elements of the array are pairs
  for (const pair of pairsArr) {
    // Check if each pair is an array
    if (!Array.isArray(pair) || pair.length !== 2) {
      throw new Error("Input pairs must have exactly two elements");
    }
  }
  // Two possible ways to implement valid input is this:

  // 1. Using a for...of loop.
  // const lookup = {}; // Create an empty object
  // for (const [key, value] of pairsArr) { // Iterate over each pair
  //   lookup[key] = value; // Add each key-value pair to the lookup object
  // }
  // return lookup; // Return the final object

  // 2. Using Object.fromEntries.
  return Object.fromEntries(pairsArr); // convert array of pairs to an object
}

module.exports = createLookup;
