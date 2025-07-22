function createLookup(pairs) {
  // implementation here
  const lookup = {};
  for (let i = 0; i < pairs.length; i++) {
    const country = pairs[i][0];
    const currency = pairs[i][1];
    lookup[country] = currency;
  }
  return lookup;
}

console.log(createLookup([['USA', 'USD'], ['Canada', 'CAD'], ['Mexico', 'MXN']]));
// Output: { USA: 'USD', Canada: 'CAD', Mexico: 'MXN

module.exports = createLookup;
