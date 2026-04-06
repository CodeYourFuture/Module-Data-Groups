function createLookup(codeCurrencyArrays) {
  const result = {};

  for (const [code, currency] of codeCurrencyArrays) {
    result[code] = currency;
  }

  return result;
}

module.exports = createLookup;
