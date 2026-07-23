function createLookup(countryCurrencyPairs) {
  const lookup = {};

  countryCurrencyPairs.forEach(pair => {
    lookup[pair[0]] = pair[1];
  });

  return lookup;
}

const countryCurrencyPairs = [
  ['US', 'USD'],
  ['CA', 'CAD'],
  ['EN', 'GBP']
];




module.exports = createLookup;
