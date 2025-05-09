function createLookup(codes) {
  const lookUpObject = {};

  for (const [country_code, currency_code] of codes) {
    lookUpObject[country_code] = currency_code;
  }

  return lookUpObject;
}

module.exports = createLookup;
