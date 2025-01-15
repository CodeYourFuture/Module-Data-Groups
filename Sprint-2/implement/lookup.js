function createLookup(pairs) {
  const lookup = {};
  for (const pair of pairs){
    if(pair && pair.length === 2){
      lookup[pair[0]] = pair[1];
    }
  }
  return lookup;
}

module.exports = createLookup;
