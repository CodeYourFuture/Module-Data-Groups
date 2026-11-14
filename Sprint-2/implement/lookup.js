function createLookup(array) {
  const countryCurrency = {};

  for (let i = 0; i < array.length; i++) {
    countryCurrency[array[i][0]] = array[i][1];
  }
  return countryCurrency;
}

module.exports = createLookup;
