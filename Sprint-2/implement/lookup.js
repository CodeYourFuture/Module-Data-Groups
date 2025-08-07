function createLookup(codePairs) {
  const lookup = codePairs.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});
  return lookup;
}

console.log(
  createLookup([
    ["US", "USD"],
    ["CA", "CAD"],
  ])
);

module.exports = createLookup;
