function createLookup(nestedArr) {
  const result = {};
  for (const [country, currency] of nestedArr) {
    result[country] = currency;
  }
  return result;
}
module.exports = createLookup;
