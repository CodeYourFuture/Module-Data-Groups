function createLookup(arrayOfArrays) {
  const lookup = {};
  for (const array of arrayOfArrays) {
    lookup[array[0]] = array[1];
  }
  return lookup;
}

module.exports = createLookup;
