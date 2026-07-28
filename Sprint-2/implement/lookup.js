function createLookup(data) {
  // implementation here
  const newObject = {};
  for (const [country, currency] of data) {
    newObject[country] = currency;
  }
  return newObject;
}

module.exports = createLookup;
