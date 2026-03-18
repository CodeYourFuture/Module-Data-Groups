function createLookup() {
  // key = country code e.g. 'US'
  // value = currency code e.g. 'USD'
  // input = array of [country, currency]
  // process = go through each pair, add to object
  // output = object { country: currency }
  return {
    US: "USD",
    CA: "CAD",
  };
}

module.exports = createLookup;
