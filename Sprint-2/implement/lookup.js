function createLookup(pairs) {
const result = {};
for (const pair of pairs) {
  const countryCode = pair[0];
  const currencyCode = pair[1];
  result[countryCode] = currencyCode;
}

return result;
}

module.exports = createLookup;
