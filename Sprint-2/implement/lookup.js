function createLookup(country_currency) {
  let obj = Object.fromEntries(country_currency);
  return obj
}

module.exports = createLookup;
