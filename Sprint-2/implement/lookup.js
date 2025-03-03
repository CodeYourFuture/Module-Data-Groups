function createLookup(pairs) {
  const object = {};
  for (let i = 0; i < pairs.length; i++) {
    const countryCurrency = pairs[i];
    object[countryCurrency[0]] = countryCurrency[1];
  }

  return object;
}
console.log(
  createLookup([
    ["US", "USD"],
    ["CA", "CAD"],
  ])
);

module.exports = createLookup;
