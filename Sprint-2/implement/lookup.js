function createLookup(countCurr) {
  if (!Array.isArray(countCurr)) return;

  const findCurrency = {};

  for (const pair of countCurr) {
    const [country, currency] = pair;

    if (typeof country === "string" && typeof currency === "string") {
      findCurrency[country] = currency;
    }
  }
  return findCurrency;
}

module.exports = createLookup;
