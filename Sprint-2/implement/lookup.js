function createLookup(pairs) {
  const lookupTable = {};
  pairs.forEach((pair) => {
    const [key, value] = pair; // Destructure the key-value pair
    lookupTable[key] = value; // Assign key-value to the object
  });
  return lookupTable; // Return the object
}

module.exports = createLookup;
