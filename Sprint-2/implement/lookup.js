function createLookup(countryCurrency) {
  // implementation here
  const lookup = {};
  
  for (let pair of countryCurrency) {
    let country = pair[0]; 
    let currency = pair[1];

    lookup[country] = currency;
  }

  return lookup;   
}

module.exports = createLookup;
