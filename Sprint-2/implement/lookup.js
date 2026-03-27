function createLookup(list) {
  // key = country code e.g. 'US'
  // value = currency code e.g. 'USD'
  // input = array of [country, currency]
  // process = go through each pair, add to object
  // output = object { country: currency }

  // declare a variable and store empty object
  // loop through the array
  // while in the loop take each item and add it to the object
  let items = {};

  for (let i = 0; i < list.length; i++) {
    items[list[i][0]] = list[i][1];
  }
  return items;
}

module.exports = createLookup;
