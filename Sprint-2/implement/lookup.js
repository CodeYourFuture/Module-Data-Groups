function createLookup(list) {
  // implementation here
  let currency = {};
  for(let i = 0; i < list.length; i++){
    currency[list[i][0]] = list[i][1];
  }
  return currency;
}
console.log(createLookup([['US', 'USD'], ['CA', 'CAD']]));
module.exports = createLookup;

