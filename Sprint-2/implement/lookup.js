function createLookup(pairs) {
  if (!Array.isArray(pairs)) {
    // check if the input is an array. If not, throw an error.
    throw new Error("Input must be an array of pairs");
  }

  const lookup = {}; // create an empty object to store key-value pairs

  for (const pair of pairs) {
    // iterate through each pair in the input array
    if (!Array.isArray(pair) || pair.length !== 2) {
      // check if the current pair is an array of length 2. If not, throw an error.
      throw new Error("Each pair must be an array of two elements");
    }

    const key = pair[0]; // extract the first element of the pair as the key
    const value = pair[1]; // extract the second element of the pair as the value
    lookup[key] = value; // add the key-value pair to the lookup object
  }
  return lookup;
}

module.exports = createLookup;
