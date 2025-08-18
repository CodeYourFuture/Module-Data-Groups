function createLookup(twoDeminsionalArray) {
  // implementation here
  let result = {};
  for (let [country, currency] of twoDeminsionalArray) {
    result[country] = currency;
  }
  return result;
}
console.log(
  createLookup([
    ["US", "USD"],
    ["CA", "CAD"],
  ])
);
module.exports = createLookup;
