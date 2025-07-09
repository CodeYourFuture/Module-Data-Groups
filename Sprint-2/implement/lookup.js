function createLookup(countryCurrencyPairs) {
  if (
    !Array.isArray(countryCurrencyPairs) ||
    countryCurrencyPairs.length === 0
  ) {
    throw new Error("Input must be a non-empty array of pairs");
  }

  const result = {};

  for (let i = 0; i < countryCurrencyPairs.length; i++) {
    const pair = countryCurrencyPairs[i];

    if (!Array.isArray(pair) || pair.length !== 2) {
      throw new Error(
        "Each pair must be a pair of countryCode and currencyCode"
      );
    }

    const [countryCode, currencyCode] = pair;

    if (typeof countryCode !== "string" || typeof currencyCode !== "string") {
      throw new Error("Both country code and currency code must be strings");
    }

    result[countryCode] = currencyCode;
  }

  return result;
}

const data = [
  ["US", "USD"],
  ["CA", "CAD"],
];

const lookup = createLookup(data);

console.log(lookup); // { US: 'USD', CA: 'CAD' }

module.exports = createLookup;
