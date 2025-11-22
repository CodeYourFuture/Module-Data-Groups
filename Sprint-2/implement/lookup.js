function createLookup(pairs) {
  // implementation here

  const lookup = {};

  for (let i = 0; i < pairs.length; i++){

    const country = pairs[i][0];
    const country = pairs[i][1];
    lookup[country] = currency;
    
}

return lookup;
}

module.exports = createLookup;
