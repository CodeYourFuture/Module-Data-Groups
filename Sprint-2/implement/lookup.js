function createLookup(pairs) {
  const lookup = {};//start with an empty object

  for (const pair of pairs) {
    const country = pair[0];// first element is country code
    const currency = pair[1];// second element is currency code
    lookup[country] = currency;
  }

  return lookup;

}

module.exports = createLookup;
