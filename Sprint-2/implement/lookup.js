function createLookup(countryCurrencyPairs) {
  // implementation here
  if (countryCurrencyPairs !== undefined) return Object.fromEntries(countryCurrencyPairs);
};

module.exports = createLookup;

console.log(createLookup([['US', 'USD'], ['CA', 'CAD'], ["HK", 'HKD']]));