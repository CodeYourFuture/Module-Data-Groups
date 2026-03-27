function createLookup(countryCurrencyPairs) {
  let countryCurrencyObj = {};

  for (const countryCurrencyPair of countryCurrencyPairs) {
    if (!Array.isArray(countryCurrencyPair)) {
      throw new Error("Country-currency pairs must be in array format");
    }

    if (countryCurrencyPair.length !== 2) {
      throw new Error(
        "Country-currency pairs must contain exactly two elements: country and currency"
      );
    }

    let [country, currency] = countryCurrencyPair;

    if (typeof country !== "string" || typeof currency !== "string") {
      throw new Error("Country-currency pairs must be in string format");
    }

    if (country.trim() === "" || currency.trim() === "") {
      throw new Error("Country and currency codes cannot be empty");
    }

    if (countryCurrencyObj[country]) {
      throw new Error(`Duplicate country code found: ${country}`);
    }

    countryCurrencyObj[country] = currency;
  }

  return countryCurrencyObj;
}

module.exports = createLookup;
