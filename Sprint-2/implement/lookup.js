function createLookup(input) {
  const objInput = {};

  // Validate input is an array of arrays
  if (!Array.isArray(input)) {
    throw new Error("Input must be an array of arrays.");
  }

  // Populate the object
  for (const pair of input) {
    if (!Array.isArray(pair) || pair.length !== 2) {
      throw new Error(
        "Each element of the input array must be a key-value pair."
      );
    }

    const [key, value] = pair;
    objInput[key] = value;
  }

  return objInput;
}

module.exports = createLookup;
