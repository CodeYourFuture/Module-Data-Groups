function createLookup(codePairs) {
  const lookup={}
  for(let [country,currency ] of codePairs){
    lookup[country]=currency
  }
return lookup
}

module.exports = createLookup;
