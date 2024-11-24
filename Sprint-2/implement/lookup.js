function createLookup(arr) {
  let obj = {}
  for (const [country, currency] of arr) {
    obj[country] = currency
  }
  return obj
}


module.exports = createLookup;
