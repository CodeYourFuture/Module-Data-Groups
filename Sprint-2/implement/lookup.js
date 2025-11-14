function createLookup(arrayLookUp) {
  const objLookUp = {};

  for (const [country, currency] of arrayLookUp) {
    objLookUp[country] = currency;
  }
  return objLookUp;
  // implementation here
}

module.exports = createLookup;
