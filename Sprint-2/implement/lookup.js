function createLookup(pairs) {
  //Checking if input is an array and throwing error if it's not
  if (!Array.isArray(pairs)) {
    throw new Error("Input must be an array.");
  }

  // Checking if every element inside the array is also an array (a pair) and throwing error if it's not
  for (const pair of pairs) {
    if (!Array.isArray(pair) || pair.length !== 2) {
      throw new Error(
        "Each element in the array must be an array with exactly two elements."
      );
    }
  }
  const lookup = {};

  for (const pair of pairs) {
    lookup[pair[0]] = pair[1];
  }

  return lookup;
}

module.exports = createLookup;
