function createLookup(arrayOfArrays) {
  const lookup = {}
  for (array of arrayOfArrays) {
    lookup[array[0]] = array[1];
  }
  return lookup
}

module.exports = createLookup;
